import { SubjectId } from "../types";

export async function getTopicSuggestions(subject?: string, performance?: string) {
  try {
    const response = await fetch("/api/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, performance })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to get AI suggestions", error);
    return [
      { topic: "Integration", reason: "Critical for both Physics and Maths sectors." },
      { topic: "Coordinate Geometry", reason: "High scoring sector in Mathematics." },
      { topic: "Stoichiometry", reason: "Fundamental base for physical chemistry." }
    ];
  }
}

export async function generateStudyPlanAI(stats: any, radarData: any) {
  try {
    const response = await fetch("/api/study-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stats, radarData })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to generate study plan via AI", error);
    throw error;
  }
}

export async function solveDoubt(messages: { role: 'user' | 'assistant', content: string }[], context?: string) {
  try {
    const response = await fetch("/api/solve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, context })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("Doubt solver operational failure:", error);
    throw error;
  }
}
