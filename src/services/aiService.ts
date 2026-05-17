import { SubjectId } from "../types";

export async function getTopicSuggestions(subject?: string, performance?: string) {
  try {
    const response = await fetch("/api/suggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ performance, subject })
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
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

export async function solveDoubt(messages: { role: 'user' | 'assistant', content: string }[], context?: string) {
  try {
    const response = await fetch("/api/solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages, context })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with ${response.status}`);
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
