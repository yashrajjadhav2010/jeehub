import { SubjectId } from "../types";

declare global {
  interface Window {
    GROQ_API_KEY: string;
  }
}

export async function getTopicSuggestions(subject?: string, performance?: string) {
  try {
    const apiKey = window.GROQ_API_KEY;
    if (!apiKey) throw new Error("API key not found in window object.");

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
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

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Groq API responded with ${response.status}`);
    }

    const data = await response.json();
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid API response structure");
    }
    
    const content = data.choices[0].message.content;
    const parsed = JSON.parse(content);
    
    const rawList = parsed.suggestions || parsed.topics || parsed.data || (Array.isArray(parsed) ? parsed : []);
    
    if (Array.isArray(rawList) && rawList.length > 0) {
      return rawList.slice(0, 3);
    }
    
    if (parsed.topic && parsed.reason) {
      return [parsed];
    }

    throw new Error("Could not parse suggestions from AI response");
  } catch (error) {
    console.error("Failed to get AI suggestions", error);
    return [
      { topic: "Integration", reason: "Critical for both Physics and Maths sectors." },
      { topic: "Coordinate Geometry", reason: "High scoring sector in Mathematics." },
      { topic: "Stoichiometry", reason: "Fundamental base for physical chemistry." }
    ];
  }
}

export async function generateStudyPlanAI(stats: any, radarData: any, errorTopics: string[] = []) {
  try {
    const apiKey = window.GROQ_API_KEY;
    if (!apiKey) throw new Error("API key not found in window object.");

    const systemPrompt = "You are an expert, personalized study planner for JEE students. Your objective is to create a highly effective proper 7-day study plan. The plan must balance rigorous revisions, fixing conceptual weaknesses (based on incorrect topics), regular practice, and mock tests to ensure actual performance improvements. Output a JSON object with a 'weekPlan' array containing exactly 7 objects. Each object should have 'day' (e.g. 'Monday'), 'focus' (e.g. 'Physics - Kinematics'), 'tasks' (array of strings, specific tasks for the day including solving, revising, finding doubt solutions), and 'rationale' (a detailed reason why you chose this).";

    const userPrompt = `Generate a comprehensive 7-day study plan.
Student's radar performance data (proficiency by subject): ${JSON.stringify(radarData)}.
Context stats (accuracy, speed, etc): ${JSON.stringify(stats)}.
Topics where the student got questions INCORRECT conceptually recently: ${errorTopics.length > 0 ? errorTopics.join(', ') : 'None recorded yet'}.

Build a proper weekly planner that aggressively targets the incorrect conceptually weak topics first, allocates time for strong topic revisions, and balances theory with mock test practice overall. Keep it intensely specific and highly actionable.`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: userPrompt
          }
        ],
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Groq API responded with ${response.status}`);
    }

    const data = await response.json();
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid API response structure");
    }
    
    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("Failed to generate study plan via AI", error);
    throw error;
  }
}

export async function solveDoubt(messages: any[], context?: string) {
  try {
    const apiKey = window.GROQ_API_KEY;
    if (!apiKey) throw new Error("API key not found in window object.");

    const AI_NAME = "AXIOM";
    const systemPrompt = `Your name is ${AI_NAME}. You are a premium AI assistant for JEE preparation, developed by Yashraj Jadhav. Your mission is to provide high-precision, tactically concise solutions. \n\nFORMATTING RULES:\n1. Use double newlines between paragraphs for clear vertical spacing.\n2. Use bullet points or numbered lists for multi-step explanations or definitions.\n3. Use bold text for key terms or final answers.\n4. Use LaTeX for mathematical expressions (e.g., $x^2$).\n5. If asked about your developer, founder, or creator, reply 'Yashraj Jadhav'.\n6. If asked about your name or the platform, it is '${AI_NAME}'.\n7. Maintain context from previous messages.\n\nKeep it professional, structured, and visually clean.`;

    let hasImage = false;
    const formattedMessages = messages.map(msg => {
      if (msg.role === 'user' && msg.image) {
        hasImage = true;
        return {
          role: 'user',
          content: [
            { type: "text", text: msg.content || "Please analyze this image." },
            { type: "image_url", image_url: { url: msg.image } }
          ]
        };
      }
      return {
        role: msg.role,
        content: msg.content
      };
    });

    const modelName = hasImage ? "meta-llama/llama-4-scout-17b-16e-instruct" : "llama-3.3-70b-versatile";

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          { role: "system", content: systemPrompt },
          ...formattedMessages
        ],
        temperature: 0.4,
        max_tokens: 1000,
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Groq API responded with ${response.status}`);
    }

    const data = await response.json();
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid command interface response.");
    }
    
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Doubt solver operational failure:", error);
    throw error;
  }
}
