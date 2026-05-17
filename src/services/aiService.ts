import { SubjectId } from "../types";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function getTopicSuggestions(subject?: string, performance?: string) {
  if (!GROQ_API_KEY) {
    console.warn("Groq API key not found. Using fallback suggestions.");
    return [
      { topic: "Rotational Mechanics", reason: "Fundamental concept in Physics with high weightage." },
      { topic: "Thermodynamics", reason: "Scoring topic if concepts are clear." },
      { topic: "Organic Chemistry", reason: "Requires consistent revision for mastery." }
    ];
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
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
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid API response structure");
    }
    
    const content = data.choices[0].message.content;
    const parsed = JSON.parse(content);
    
    // Support multiple common response shapes
    const rawList = parsed.suggestions || parsed.topics || parsed.data || (Array.isArray(parsed) ? parsed : []);
    
    if (Array.isArray(rawList) && rawList.length > 0) {
      return rawList.slice(0, 3);
    }
    
    // If it returned a single object not in an array
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
