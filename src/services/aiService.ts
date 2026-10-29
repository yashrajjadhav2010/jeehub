import { SubjectId } from "../types";

declare global {
  interface Window {
    GROQ_API_KEY: string;
  }
}

/**
 * Safely resolves the Groq API key from window, vite env, or fallback.
 */
export function getGroqApiKey(): string {
  if (typeof window !== "undefined" && window.GROQ_API_KEY && window.GROQ_API_KEY.trim()) {
    return window.GROQ_API_KEY.trim();
  }
  const envKey = (import.meta as any).env?.VITE_GROQ_API_KEY;
  if (envKey && typeof envKey === "string" && envKey.trim()) {
    return envKey.trim();
  }
  return "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";
}

// Available and accessible models on the user's Groq account
const PRIMARY_TEXT_MODELS = [
  "qwen/qwen3.8-27b",
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b",
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant"
];

const PRIMARY_VISION_MODELS = [
  "qwen/qwen3.8-27b",
  "llama-3.2-11b-vision-preview",
  "meta-llama/llama-4-scout-17b-16e-instruct"
];

/**
 * Universal Groq Chat caller with automatic multi-model failover and rich diagnostics.
 */
async function callGroqWithFallbacks(
  models: string[],
  payloadBase: {
    messages: any[];
    temperature?: number;
    max_tokens?: number;
    response_format?: { type: "json_object" };
  }
): Promise<{ content: string; modelUsed: string }> {
  const apiKey = getGroqApiKey();
  if (!apiKey) {
    throw new Error("Groq API key not configured. Please verify your credentials.");
  }

  let lastError: any = null;

  for (const model of models) {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model,
          messages: payloadBase.messages,
          temperature: payloadBase.temperature ?? 0.4,
          max_tokens: payloadBase.max_tokens ?? 1500,
          ...(payloadBase.response_format ? { response_format: payloadBase.response_format } : {})
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn(`Groq model '${model}' returned HTTP ${response.status}:`, errorText);
        lastError = new Error(`Groq API returned HTTP ${response.status}: ${errorText}`);
        continue;
      }

      const data = await response.json();
      const message = data.choices?.[0]?.message;
      const content = message?.content || message?.reasoning;

      if (content && typeof content === "string" && content.trim().length > 0) {
        return { content: content.trim(), modelUsed: model };
      }

      console.warn(`Groq model '${model}' returned empty content.`);
    } catch (err: any) {
      console.warn(`Groq connection error with model '${model}':`, err);
      lastError = err;
    }
  }

  throw lastError || new Error("Our AI service is currently experiencing high latency. Please try again in a few moments.");
}

export async function getTopicSuggestions(subject?: string, performance?: string) {
  try {
    const { content } = await callGroqWithFallbacks(
      PRIMARY_TEXT_MODELS,
      {
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
        response_format: { type: "json_object" },
        max_tokens: 500,
        temperature: 0.3
      }
    );

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
    const systemPrompt = "You are an expert, personalized study planner and mentor for JEE Main & Advanced students. Your objective is to create a highly effective proper 7-day study plan. The plan must balance rigorous revisions, fixing conceptual weaknesses (based on incorrect topics), regular practice, and mock tests to ensure actual performance improvements. Incorporate JEE-specific strategies (like PYQ solving, active recall, block strategy). Output a JSON object with a 'weekPlan' array containing exactly 7 objects. Each object should have 'day' (e.g. 'Monday'), 'focus' (e.g. 'Physics - Kinematics'), 'tasks' (array of strings, specific tasks for the day including solving, revising, finding doubt solutions), and 'rationale' (a detailed reason why you chose this, relating it to the JEE journey).";

    const userPrompt = `Generate a comprehensive 7-day study plan.
Student's radar performance data (proficiency by subject): ${JSON.stringify(radarData)}.
Context stats (accuracy, speed, etc): ${JSON.stringify(stats)}.
Topics where the student got questions INCORRECT conceptually recently: ${errorTopics.length > 0 ? errorTopics.join(', ') : 'None recorded yet'}.

Build a proper weekly planner that aggressively targets the incorrect conceptually weak topics first, allocates time for strong topic revisions, and balances theory with mock test practice overall. Keep it intensely specific and highly actionable.`;

    const { content } = await callGroqWithFallbacks(
      PRIMARY_TEXT_MODELS,
      {
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" },
        max_tokens: 750,
        temperature: 0.4
      }
    );

    return JSON.parse(content);
  } catch (error) {
    console.error("Failed to generate study plan via AI, returning structured fallback plan", error);
    return {
      weekPlan: [
        {
          day: "Monday",
          focus: "Physics: Mechanics & Vectors Mastery",
          tasks: [
            "Review Newton's Laws and Free Body Diagrams from class notes",
            "Solve 15 PYQs from 2023-2025 JEE Main shifts",
            "Analyze mistaken steps and log formulas in error diary"
          ],
          rationale: "Sets high analytical momentum for the week by targeting foundational mechanics."
        },
        {
          day: "Tuesday",
          focus: "Chemistry: Chemical Bonding & Periodic Trends",
          tasks: [
            "Revise VSEPR theory, MOT, and hybridization rules",
            "Practice 20 conceptual questions on dipole moments and bond orders",
            "NCERT deep-dive for exceptional trends"
          ],
          rationale: "High-yield scoring chapters in Inorganic/Physical chemistry with direct exam questions."
        },
        {
          day: "Wednesday",
          focus: "Mathematics: Coordinate Geometry & Straight Lines",
          tasks: [
            "Revise distance forms, angle bisectors, and orthocentre properties",
            "Solve 15 standard Straight Line & Circle PYQs",
            "Timed speed test (10 questions in 25 minutes)"
          ],
          rationale: "Reinforces 2D geometry problem solving and calculation speed."
        },
        {
          day: "Thursday",
          focus: "Physics: Thermodynamics & Work Power Energy",
          tasks: [
            "Revise First & Second Laws of Thermodynamics and Carnot Engine cycles",
            "Work-Energy theorem multi-concept numerical practice (15 questions)",
            "Review graphical P-V questions from recent shifts"
          ],
          rationale: "Thermodynamics frequently overlaps with Chemistry and carries guaranteed marks."
        },
        {
          day: "Friday",
          focus: "Chemistry: Organic Reaction Mechanisms & Isomerism",
          tasks: [
            "Practice stereochemistry, R/S configurations, and conformational isomers",
            "Solve 15 JEE Main & Advanced questions on reaction intermediates",
            "Quick revision of nucleophilic substitutions"
          ],
          rationale: "Targets high-weightage stereochemical problems and multi-step reactions."
        },
        {
          day: "Saturday",
          focus: "Mathematics: Calculus & Algebra Integration",
          tasks: [
            "Revise definite integral properties, Leibniz rule, and standard limits",
            "Solve 15 tough JEE Advanced illustrations on limits and integration",
            "Formulas flashcard revision"
          ],
          rationale: "Calculus is the backbone of the mathematics paper and demands intense regular problem practice."
        },
        {
          day: "Sunday",
          focus: "Full Mock Test & Deep Error Analysis",
          tasks: [
            "Take a full 3-hour timed JEE Main mock test (9:00 AM - 12:00 PM)",
            "Spend 2 hours reviewing every unattempted or incorrect question",
            "Revise formulas and plan priority targets for next week"
          ],
          rationale: "Simulates exam conditions, builds mental endurance, and prevents repeated errors."
        }
      ]
    };
  }
}

export type AIMode = 'solution' | 'socratic' | 'similar' | 'shortcut' | 'rank';

const MODE_INSTRUCTIONS: Record<AIMode, string> = {
  solution: "ACTIVE MODE: MASTER SOLUTION. Provide a rigorous, step-by-step JEE Main/Advanced derivation. Structure your answer with: (1) Core Concept Tested, (2) Governing Formulas, (3) Clean Mathematical Derivation using LaTeX, and (4) Final Answer & Common Pitfalls to avoid negative marking.",
  socratic: "ACTIVE MODE: SOCRATIC COACH. CRITICAL: DO NOT reveal the final answer or do all the math! Guide the student: (1) Hint 1 - Identify the governing principle or symmetry. (2) Hint 2 - Point out the starting formula or substitution. (3) Ask a targeted question to challenge the student to calculate the next step.",
  similar: "ACTIVE MODE: TWIN QUESTION GENERATOR. Generate 1 new, fresh JEE-standard problem based on this exact concept with different values or context. Give 4 multiple-choice options (A, B, C, D), then provide the complete step-by-step solution and correct option so they can verify.",
  shortcut: "ACTIVE MODE: 30-SECOND EXAM HACKS. Explain how a top 99.9%iler solves this fast in the exam hall: dimensional analysis, extreme value testing ($x=0, \\infty$), symmetry, and eliminating 2-3 options in seconds without lengthy algebraic computation.",
  rank: "ACTIVE MODE: RANK & JOSAA COLLEGE PREDICTOR. Evaluate the student's score or percentile. Give: (1) Estimated All India Rank (AIR), (2) Realistic JoSAA Tier 1/2 NIT, IIIT, or IIT closing branches, and (3) Concrete target score needed for their dream branch."
};

export async function solveDoubt(
  messages: any[], 
  modeOrContext: AIMode | string = 'solution', 
  context?: string
) {
  let mode: AIMode = 'solution';
  let activeContext = context;

  if (['solution', 'socratic', 'similar', 'shortcut', 'rank'].includes(modeOrContext)) {
    mode = modeOrContext as AIMode;
  } else if (typeof modeOrContext === 'string' && modeOrContext.trim().length > 0) {
    activeContext = modeOrContext;
    mode = 'solution';
  }

  try {
    const AI_NAME = "AXIOM";
    const rankPredictorData = `
[JEE MAIN RANK PREDICTOR DATA]
Marks vs Percentile vs AIR vs Target College (General, Expected):
- 280-300: 99.90-100.00 | AIR 1-1,200 | NIT Trichy(CSE), NIT Surathkal(CSE), NIT Warangal(CSE)
- 240-279: 99.50-99.89 | AIR 1,201-6,000 | MNNIT Allahabad(CSE), IIIT Allahabad(IT), NIT Trichy(ECE)
- 210-239: 99.00-99.49 | AIR 6,001-12,000 | VNIT Nagpur(CSE), MNIT Jaipur(CSE), NIT Rourkela(ECE)
- 190-209: 98.50-98.99 | AIR 12,001-18,000 | NIT Calicut(ECE), SVNIT Surat(CSE), IIIT Gwalior(CSE)
- 175-189: 98.00-98.49 | AIR 18,001-24,000 | MANIT Bhopal(ECE), NIT Jalandhar(CSE), IIIT Lucknow(CSE)
- 160-174: 97.00-97.99 | AIR 24,001-36,000 | NIT Durgapur(Mech), IIIT Jabalpur(ECE), NIT Delhi(EE)
- 145-159: 96.00-96.99 | AIR 36,001-48,000 | NIT Jamshedpur(Mech), IIIT Kota(CSE), NIT Kurukshetra(Civil)
- 130-144: 95.00-95.99 | AIR 48,001-60,000 | NIT Raipur(Chem), IIIT Pune(ECE), NIT Silchar(EE)
- 115-129: 93.50-94.99 | AIR 60,001-80,000 | BIT Mesra(Mech), PEC Chandigarh(Civil), IIIT Una(CSE)
- 95-114: 90.00-93.49 | AIR 80,001-1,20,000 | NIT Agartala(Biotech), NIT Mizoram(Civil), JNU Delhi
- 75-94: 85.00-89.99 | AIR 1,20,001-1,80,000 | Top State Govt Colleges
- 50-74: 75.00-84.99 | AIR 1,80,001-2,70,000 | Regional State Engineering Colleges

JoSAA Tier-wise Closing Rank (General):
- TIER 1 NITs (CSE): NIT Trichy (~1,500), NIT Surathkal (~2,000), NIT Warangal (~2,600), MNNIT Allahabad (~4,800)
- TIER 2 NITs & Top IIITs: NIT Rourkela (~7,300 CSE/14,000 ECE), NIT Calicut (~10,500 CSE), MNIT Jaipur (~11,500 CSE), IIIT Allahabad (~5,500 IT)
- TIER 3: IIIT Jabalpur (~15k-24k), IIIT Kota (~22k-30k), PEC Chandigarh (~25k-35k), BIT Mesra (~30k-45k)

NTA Cutoffs (Percentile): Gen: 93.4123+, OBC-NCL: 80.9232+, GEN-EWS: 81.3200+, SC: 63.9172+, ST: 52.0174+

[JEE ADVANCED RANK PREDICTOR DATA - Out of 360]
Marks vs Expected CRL Rank vs Target IIT:
- 285-340+: AIR 1-100 | IIT Bombay(CSE), IIT Delhi(CSE)
- 260-284: AIR 101-300 | IIT Madras(CSE), IIT Kanpur(CSE)
- 235-259: AIR 301-500 | IIT Kharagpur(CSE), IIT Roorkee(CSE)
- 210-234: AIR 501-1,000 | IIT Hyderabad(CSE), IIT Indore(CSE), IIT Bombay(ECE)
- 185-209: AIR 1,001-2,000 | IIT Guwahati(CSE), IIT BHU(CSE), IIT Delhi(MnC)
- 165-184: AIR 2,001-3,000 | IIT Patna(CSE), IIT Jodhpur(CSE), IIT Roorkee(Data Science)
- 150-164: AIR 3,001-5,000 | IIT Gandhinagar(CSE), IIT Ropar(CSE), IIT Bombay(Mech)
- 135-149: AIR 5,001-7,000 | IIT Mandi(CSE), IIT Palakkad(CSE), IIT Delhi(Civil/Chem)
- 120-134: AIR 7,001-10,000 | IIT Tirupati(CSE), IIT Jammu(CSE), IIT Kharagpur(Aerospace)
- 105-119: AIR 10,001-14,000 | Mid-tier IITs(Mech/Civil), Top IITs(Metallurgy)
- 85-104: AIR 14,001-18,000 | New IITs, 5-Year BS-MS
- 74-84: AIR 18,001-25,000+ | Preparatory Courses

Top IIT CSE Closing Ranks (General):
Bombay (~67), Delhi (~115), Madras (~180), Kanpur (~290), Kharagpur (~420), Roorkee (~500), Guwahati (~1,200), Hyderabad (~2,500)

Minimum Percentage Aggregate for Rank List:
CRL: ~30.3%-35.0% (10% each subj), EWS/OBC: ~27.0%-31.5% (9% each), SC/ST: ~15.0%-17.5% (5% each)
`;

    const selectedModeInstruction = MODE_INSTRUCTIONS[mode] || MODE_INSTRUCTIONS.solution;

    const systemPrompt = `Your name is ${AI_NAME}. You are a premium, empathetic, and highly strategic AI mentor for JEE Main & Advanced aspirants, developed by Yashraj Jadhav. The platform you are integrated into is called "JEE Tapasya". Your mission is to provide high-precision, tactically concise solutions while understanding the intense academic pressure JEE students face.

${selectedModeInstruction}
${activeContext ? `\nActive Context: ${activeContext}\n` : ""}

CORE BEHAVIORS & JEE CONTEXT:
- Speak directly to the JEE context. Use terminologies like PYQs, NTA, JoSAA, Mock Tests, percentile, advanced illustrations, and block strategy.
- When explaining concepts, relate them to how NTA or IIT professors typically frame questions (e.g., "In JEE Advanced, they often mix this concept with Thermodynamics...").
- Provide short, highly actionable motivational advice if the student feels stressed or burnt out. Remind them of the IIT/NIT dream but keep them grounded in daily consistent efforts.
- Keep your explanations rigorous but easy to digest. Focus on problem-solving approaches, elimination techniques, and time-saving shortcuts when applicable.

FORMATTING RULES:
1. Use double newlines between paragraphs for clear vertical spacing.
2. Use bullet points or numbered lists for multi-step explanations or definitions.
3. Use bold text for key terms or final answers.
4. Use LaTeX for mathematical expressions (e.g., $x^2$ or $\\frac{a}{b}$).
5. If asked about your developer, founder, or creator, reply 'Yashraj Jadhav'.
6. If asked about your name, it is '${AI_NAME}'. If asked about the platform name, it is 'JEE Tapasya'.
7. Maintain context from previous messages.
8. If the user asks to see, use, or interact with the periodic table, answer them briefly and ALWAYS include the exact string "[EMBED:PERIODIC_TABLE]" anywhere in your response. This will automatically render our interactive periodic table UI in the chat.
9. When asked about rank prediction, use the rank predictor data below to give users realistic estimates, formatted beautifully.

${rankPredictorData}

Keep it professional, structured, highly motivating, and visually clean.`;

    let hasImage = false;
    const formattedMessages = messages.map(msg => {
      if (msg.role === 'user' && msg.image) {
        hasImage = true;
        return {
          role: 'user',
          content: [
            { type: "text", text: msg.content || "Please analyze this question image and provide the step-by-step JEE solution." },
            { type: "image_url", image_url: { url: msg.image } }
          ]
        };
      }
      return {
        role: msg.role,
        content: msg.content
      };
    });

    const modelCandidates = hasImage ? PRIMARY_VISION_MODELS : PRIMARY_TEXT_MODELS;

    const { content } = await callGroqWithFallbacks(
      modelCandidates,
      {
        messages: [
          { role: "system", content: systemPrompt },
          ...formattedMessages
        ],
        temperature: 0.4,
        max_tokens: 850
      }
    );

    return content;
  } catch (error: any) {
    console.error("Doubt solver operational failure:", error);
    // If it was a vision attempt that failed across vision models, try text-only fallback with the user's text
    if (messages.some(m => m.image)) {
      try {
        console.warn("Attempting text-only fallback without image payload...");
        const textOnlyMessages = messages.map(m => ({
          role: m.role,
          content: m.content || "Please help me solve my JEE doubt."
        }));
        const fallbackRes = await solveDoubt(textOnlyMessages, mode, context);
        return `${fallbackRes}\n\n*(Note: Image parsing was temporarily constrained, but here is the conceptual guidance based on your query).*`;
      } catch (innerErr) {
        console.error("Text fallback also failed:", innerErr);
      }
    }
    throw error;
  }
}
