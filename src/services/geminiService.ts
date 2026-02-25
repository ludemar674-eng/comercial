import { GoogleGenAI } from "@google/genai";

const apiKey = typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : '';

export async function generateTradingImage(prompt: string): Promise<string | null> {
  if (!apiKey || apiKey === 'undefined') {
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    return null;
  } catch (error: any) {
    // Gracefully handle rate limits and other API errors
    if (error?.message?.includes('429') || error?.message?.includes('quota')) {
      console.warn("Gemini API quota exceeded, using fallback image.");
    } else {
      console.error("Error generating image:", error);
    }
    return null;
  }
}
