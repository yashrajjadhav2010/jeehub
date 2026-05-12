import { GoogleGenAI } from "@google/genai";
import { SubjectId } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getTopicSuggestions(subject: SubjectId, performance: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `I am a student preparing for JEE. My performance in ${subject} is currently described as: ${performance}. Suggest 3 specific JEE topics I should focus on next. Return a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Failed to get AI suggestions", error);
    return ["Rotational Mechanics", "Thermodynamics", "Optics"]; // Fallback
  }
}
