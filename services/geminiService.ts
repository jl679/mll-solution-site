
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are the MLL Solution Strategic AI Advisor. 
MLL Solution is a premier logistics and management consulting firm.
Key Expertise:
- Supply Chain Resilience & Optimization
- Strategic Business Growth & Advisory
- Global Fleet & Asset Management
- Digital Infrastructure for Logistics

Tone: Professional, authoritative, yet approachable.
Guidelines:
- Provide actionable business advice.
- Explain how MLL Solution's methodology (Data-driven, Rapid Execution) helps clients.
- If asked about specific logistics costs, explain that we provide tailored quotes.
- Refer to our website sections: Services, About, and Contact for more details.
`;

export const getGeminiResponse = async (history: Message[], prompt: string) => {
  // Ensure the environment variable is available. 
  // In Netlify/Vite, this is handled by the 'define' in vite.config.ts
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return "The AI Advisor is currently waiting for configuration. Please ensure the API Key is set in the environment variables section of your hosting provider.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I'm unable to provide a strategic response at this moment.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "Our strategic advisor is briefly offline. Please contact MLL Solution directly at info@mllsolution.com.";
  }
};
