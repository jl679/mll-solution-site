
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are the MLL Solution AI Consultant. Your goal is to help visitors understand the services offered by MLL Solution.
MLL Solution is a leading management and logistics solutions firm specializing in:
1. Supply Chain Optimization
2. Strategic Business Consulting
3. Digital Transformation
4. Financial Risk Management

Always be professional, concise, and helpful. If asked about pricing, mention that we provide custom quotes based on project requirements.
If you don't know an answer, direct them to our contact page.
`;

export const getGeminiResponse = async (history: Message[], prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
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
        topP: 0.95,
        topK: 40,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI consultant is currently offline. Please try again later or contact us directly.";
  }
};
