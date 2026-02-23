import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "undefined") {
      console.warn("GEMINI_API_KEY is not defined. Image generation will be disabled.");
      return null;
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function generateTradingImage(prompt: string, retries = 2) {
  const ai = getAI();
  if (!ai) return null;

  for (let i = 0; i <= retries; i++) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: `Professional corporate photography for a global trading company. High quality, realistic, commercial style. ${prompt}`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
          },
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error: any) {
      const isRateLimit = error?.message?.includes('429') || error?.status === 'RESOURCE_EXHAUSTED';
      
      if (isRateLimit && i < retries) {
        const waitTime = Math.pow(2, i) * 2000; // 2s, 4s
        console.warn(`Rate limit hit, retrying in ${waitTime}ms...`);
        await delay(waitTime);
        continue;
      }

      if (isRateLimit) {
        console.warn("Gemini API rate limit reached. Using high-quality static fallbacks.");
      } else {
        console.error("Error generating image:", error);
      }
      return null;
    }
  }
  return null;
}
