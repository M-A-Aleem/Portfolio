import { GoogleGenAI } from "@google/genai";
import { INTRO_DATA, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, ABOUT_TEXT } from '../constants';

const SYSTEM_INSTRUCTION = `
You are Mohammed Abdul Aleem's AI Portfolio Assistant. You are friendly, professional, and helpful.
Answer questions about Mohammed based ONLY on the following context data.

Context:
Name: ${INTRO_DATA.name}
Role: ${INTRO_DATA.role}
Bio: ${ABOUT_TEXT}
Experience: ${JSON.stringify(EXPERIENCE_DATA)}
Projects: ${JSON.stringify(PROJECTS_DATA)}
Skills: ${JSON.stringify(SKILLS_DATA)}

Style Guide:
- Be concise but enthusiastic.
- Use a tone that matches a professional software engineer who loves AI.
- If the answer isn't in the data, say "I don't have that specific information in my records, but Mohammed is always open to chatting directly!"
- Do not make up facts.
`;

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // In a real production app, this should be handled via a backend proxy to hide the key.
    // For this client-side demo as requested, we use the env variable.
    const apiKey = process.env.API_KEY || ''; 
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
};

export const askPortfolio = async (question: string): Promise<string> => {
  const client = getAiClient();
  
  if (!client) {
    return "Please configure the API_KEY environment variable to enable the AI chat feature.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm thinking, but I couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary issue connecting to my brain. Please try again later!";
  }
};