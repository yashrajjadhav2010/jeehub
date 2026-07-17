import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

export const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize AI Clients
let ai: GoogleGenAI | null = null;

const AI_NAME = "AXIOM";

const getGeminiClient = () => {
  if (!ai && process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
};

// Logger for debugging routes
app.use((req, res, next) => {
  if (!req.path.startsWith('/src/') && !req.path.startsWith('/@') && !req.path.startsWith('/node_modules/')) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  }
  next();
});

// Health check
app.get("/api/health", (req, res) => {
  const hasEnvKey = !!process.env.GEMINI_API_KEY || !!process.env.GROQ_API_KEY;
  res.json({ 
    status: "ok", 
    env: process.env.NODE_ENV,
    keyMode: hasEnvKey ? "environment" : "missing",
    active: true
  });
});

// Proxy route for Groq API
app.post("/api/groq/chat", async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GROQ_API_KEY environment variable is missing" });
  }
  
  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });
    
    if (!groqRes.ok) {
      throw new Error(`Groq API error: ${groqRes.statusText}`);
    }
    
    const data = await groqRes.json();
    res.json(data);
  } catch (err: any) {
    console.error("Groq Proxy Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// API route for solving doubts
app.post("/api/solve", async (req, res) => {
  console.log("Received solve request for /api/solve");
  const { messages } = req.body;
  
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format" });
  }

  const systemPrompt = `Your name is ${AI_NAME}. You are a premium AI assistant for JEE preparation, developed by Yashraj Jadhav. Your mission is to provide high-precision, tactically concise solutions. \n\nFORMATTING RULES:\n1. Use double newlines between paragraphs for clear vertical spacing.\n2. Use bullet points or numbered lists for multi-step explanations or definitions.\n3. Use bold text for key terms or final answers.\n4. Use LaTeX for mathematical expressions (e.g., $x^2$).\n5. If asked about your developer, founder, or creator, reply 'Yashraj Jadhav'.\n6. If asked about your name or the platform, it is '${AI_NAME}'.\n7. Maintain context from previous messages.\n\nKeep it professional, structured, and visually clean.`;

  try {
    const aiClient = getGeminiClient();
    if (aiClient) {
      try {
        const formattedMessages = messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : m.role,
          parts: [{ text: m.content }]
        }));

        const response = await aiClient.models.generateContent({
          model: "gemini-3.5-flash",
          contents: formattedMessages,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.4,
          }
        });
        return res.json({ content: response.text });
      } catch (genError: any) {
        console.error("Gemini Service Error:", genError.message);
        throw genError;
      }
    } else {
      throw new Error("AI service is currently unavailable.");
    }
  } catch (error: any) {
    console.error("Doubt Solver Error:", error.message);
    return res.status(500).json({ error: "AI service error. Please try again. " + error.message });
  }
});

// API route for suggestions
app.post("/api/suggestions", async (req, res) => {
  try {
    const { performance, subject } = req.body;
    const aiClient = getGeminiClient();
    
    if (aiClient) {
      try {
        const response = await aiClient.models.generateContent({
          model: "gemini-3.5-flash",
          contents: `Performance telemetry: ${performance || 'Baseline'}. Subject focus: ${subject || 'General JEE'}. Identify 3 high-priority focus topics.`,
          config: {
            systemInstruction: "You are a JEE Preparation Expert. Provide performance-based study suggestions based on student data. Return response as a JSON array of 3 objects, each with 'topic' and 'reason' string keys.",
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  topic: { type: Type.STRING },
                  reason: { type: Type.STRING }
                },
                required: ["topic", "reason"]
              }
            }
          }
        });
        return res.json(JSON.parse(response.text || '[]'));
      } catch (e: any) {
        console.error("Gemini suggestions failed:", e.message);
        throw e;
      }
    } else {
      throw new Error("AI service unavailable for suggestions");
    }
  } catch (error: any) {
    console.error("Server Suggestions API Error:", error.message);
    res.status(500).json({ error: "Failed to reach AI service. " + error.message });
  }
});

// API route for AI question explanation
app.post("/api/explain", async (req, res) => {
  try {
    const { question, options, answer } = req.body;
    
    const aiClient = getGeminiClient();
    if (aiClient) {
      const response = await aiClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Explain the step-by-step solution for the following question mathematically and logically:\n\nQuestion: ${question}\nOptions: ${JSON.stringify(options)}\nCorrect Answer Index: ${answer}\n\nProvide the final answer at the end clearly. Keep your response in Markdown, using LaTeX formatting (Use SINGLE $ for inline math like $x^2$, and DOUBLE $$ for block math like $$x^2+y^2=z^2$$). IMPORTANT: Ensure all LaTeX environments like \\begin{cases} are properly closed with \\end{cases} and avoid syntax errors. Keep it concise and instructional. Do not show code, just text with math formulas.`,
        config: {
            systemInstruction: "You are Axiom, an expert JEE preparation AI. Explain the question's core concepts very clearly and directly. Use markdown with proper mathematical syntax.",
            temperature: 0.2
        }
      });
      return res.json({ explanation: response.text });
    }
    
    throw new Error("No AI service available");
  } catch (error: any) {
    console.error("AI Explanation Error:", error.message);
    res.status(500).json({ error: "Failed to generate AI explanation. Please check API Key. " + error.message });
  }
});

// API route for AI Study Planner
app.post("/api/study-plan", async (req, res) => {
  try {
    const { stats, radarData } = req.body;
    
    const aiClient = getGeminiClient();
    if (aiClient) {
      const response = await aiClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Generate a 7-day study plan based on the student's radar performance data: ${JSON.stringify(radarData)}. Context stats: ${JSON.stringify(stats)}. Focus their week on improving weakest subjects. Keep it specific.`,
        config: {
            systemInstruction: "You are a personalized study planner for JEE students. Output a JSON object with a 'weekPlan' array containing 7 objects. Each object should have 'day' (e.g. 'Monday'), 'focus' (e.g. 'Physics - Kinematics'), 'tasks' (array of strings, specific tasks for the day), and 'rationale' (why you chose this).",
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                weekPlan: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      day: { type: Type.STRING },
                      focus: { type: Type.STRING },
                      tasks: { type: Type.ARRAY, items: { type: Type.STRING } },
                      rationale: { type: Type.STRING }
                    },
                    required: ["day", "focus", "tasks", "rationale"]
                  }
                }
              },
              required: ["weekPlan"]
            }
        }
      });
      return res.json(JSON.parse(response.text || '{}'));
    }
    
    throw new Error("No AI service available");
  } catch (error: any) {
    console.error("Study Planner API Error:", error.message);
    res.status(500).json({ error: "Failed to generate study plan: " + error.message });
  }
});

const startServer = async () => {
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

  // Only listen if we are NOT in Vercel environment
  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
};

// Start the server
startServer();

export default app;
