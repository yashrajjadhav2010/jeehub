import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for solving doubts
  app.post("/api/solve", async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.GROQ_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GROQ_API_KEY is not configured on the server." });
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: "Your name is AXIOM. You are a premium AI assistant for JEE preparation, developed by Yashraj Jadhav. Your mission is to provide high-precision, tactically concise solutions. \n\nFORMATTING RULES:\n1. Use double newlines between paragraphs for clear vertical spacing.\n2. Use bullet points or numbered lists for multi-step explanations or definitions.\n3. Use bold text for key terms or final answers.\n4. Use LaTeX for mathematical expressions (e.g., $x^2$).\n5. If asked about your developer, founder, or creator, reply 'Yashraj Jadhav'.\n6. If asked about your name or the platform, it is 'AXIOM'.\n7. Maintain context from previous messages.\n\nKeep it professional, structured, and visually clean."
            },
            ...messages
          ],
          temperature: 0.4,
          max_tokens: 800
        })
      });

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Server API Error:", error);
      res.status(500).json({ error: "Failed to communicate with AI service." });
    }
  });

  // API route for suggestions
  app.post("/api/suggestions", async (req, res) => {
    try {
      const { performance, subject } = req.body;
      const apiKey = process.env.GROQ_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GROQ_API_KEY is not configured on the server." });
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
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
          response_format: { type: "json_object" }
        })
      });

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Server Suggestions API Error:", error);
      res.status(500).json({ error: "Failed to reach AI service." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
