import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import Groq from "groq-sdk";

import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize AI Clients
let groq: Groq | null = null;
let genAI: GoogleGenAI | null = null;

const getGroqClient = () => {
  if (!groq) {
    const apiKey = process.env.GROQ_API_KEY;
    if (apiKey) {
      groq = new Groq({ apiKey });
    }
  }
  return groq;
};

const getGeminiClient = () => {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      genAI = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
  }
  return genAI;
};

// Logger for debugging routes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check
app.get("/api/health", (req, res) => {
  const hasEnvKey = !!process.env.GROQ_API_KEY;
  res.json({ 
    status: "ok", 
    env: process.env.NODE_ENV,
    keyMode: hasEnvKey ? "environment" : "hardcoded_fallback",
    active: true
  });
});

// API route for solving doubts
app.post("/api/solve", async (req, res) => {
  console.log("Received solve request:", JSON.stringify(req.body).substring(0, 100) + "...");
  const { messages } = req.body;
  const systemPrompt = "Your name is AXIOM. You are a premium AI assistant for JEE preparation, developed by Yashraj Jadhav. Your mission is to provide high-precision, tactically concise solutions. \n\nFORMATTING RULES:\n1. Use double newlines between paragraphs for clear vertical spacing.\n2. Use bullet points or numbered lists for multi-step explanations or definitions.\n3. Use bold text for key terms or final answers.\n4. Use LaTeX for mathematical expressions (e.g., $x^2$).\n5. If asked about your developer, founder, or creator, reply 'Yashraj Jadhav'.\n6. If asked about your name or the platform, it is 'AXIOM'.\n7. Maintain context from previous messages.\n\nKeep it professional, structured, and visually clean.";

  try {
    const groqClient = getGroqClient();
    // Allow using Groq if available
    if (groqClient) {
      try {
        const completion = await groqClient.chat.completions.create({
          messages: [
            { role: "system", content: systemPrompt },
            ...messages
          ],
          model: "llama-3.3-70b-versatile",
          temperature: 0.4,
          max_tokens: 1000,
        });
        return res.json(completion);
      } catch (groqError: any) {
        console.warn("Groq failed, trying Gemini fallback:", groqError.message);
      }
    }
    
    // Gemini Fallback
    const geminiClient = getGeminiClient();
    if (!geminiClient) throw new Error("No AI service available (Groq/Gemini)");

    const lastMessage = messages[messages.length - 1].content;
    const history = messages.slice(0, -1).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const response = await geminiClient.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: `System Context: ${systemPrompt}\n\nUser Question: ${lastMessage}` }] }
      ],
      config: {
        maxOutputTokens: 1000,
        temperature: 0.4,
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from Gemini");

    // Mock Groq format for frontend compatibility
    return res.json({
      choices: [{
        message: { content: text }
      }]
    });
  } catch (error: any) {
    console.error("All AI services failed:", error.message);
    return res.status(500).json({ error: "Doubt solver is currently experiencing high load. Please try again in 5 minutes." });
  }
});

// API route for suggestions
app.post("/api/suggestions", async (req, res) => {
  try {
    const { performance, subject } = req.body;
    const groqClient = getGroqClient();
    
    if (groqClient) {
      try {
        const completion = await groqClient.chat.completions.create({
          messages: [
            {
              role: "system",
              content: "You are a JEE Preparation Expert. Provide performance-based study suggestions based on student data. Return response as a JSON object with a 'suggestions' key containing an array of 3 objects, each with 'topic' and 'reason' keys."
            },
            {
              role: "user",
              content: `Performance telemetry: ${performance || 'Baseline'}. Subject focus: ${subject || 'General JEE'}. Identify 3 high-priority focus topics.`
            }
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" }
        });
        return res.json(completion);
      } catch (e) {
        console.warn("Groq suggestions failed, falling back to Gemini");
      }
    }

    const geminiClient = getGeminiClient();
    if (!geminiClient) throw new Error("No AI client available for suggestions");

    const prompt = `You are a JEE Preparation Expert. Provide performance-based study suggestions based on student data.
    Performance telemetry: ${performance || 'Baseline'}. Subject focus: ${subject || 'General JEE'}.
    Identify 3 high-priority focus topics.
    Return response as a JSON object with a 'suggestions' key containing an array of 3 objects, each with 'topic' and 'reason' keys.`;

    const response = await geminiClient.models.generateContent({ 
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: { 
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from Gemini suggestions");
    
    // Mock Groq format
    return res.json({
      choices: [{
        message: { content: text }
      }]
    });

  } catch (error: any) {
    console.error("Server Suggestions API Error:", error.message);
    res.status(500).json({ error: error.message || "Failed to reach AI service." });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite middleware mounted (development mode)");
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    console.log("Static files serving from:", distPath);
    
    // SPA fallback - MUST be the last route
    app.get('*', (req, res) => {
      // Don't fallback for /api routes
      if (req.path.startsWith('/api/')) {
        console.log("404 on API route:", req.path);
        return res.status(404).json({ error: "API route not found" });
      }
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
