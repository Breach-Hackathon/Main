import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are Treva's AI Travel Architect — a world-class luxury travel concierge.
Given a single-line travel wish from a client, generate a stunning, hyper-detailed trip suggestion.

RESPOND ONLY WITH VALID JSON matching this exact structure (no markdown, no code fences):
{
  "tripName": "A poetic, evocative name for the journey",
  "tagline": "A one-line cinematic tagline",
  "destination": "Primary destination",
  "country": "Country name",
  "duration": "X nights",
  "bestSeason": "e.g. March–May",
  "estimatedBudget": "e.g. $12,000–$18,000 per person",
  "heroDescription": "A 2-3 sentence luxurious, cinematic description that paints a vivid picture of the experience",
  "itinerary": [
    {
      "day": 1,
      "title": "Day title",
      "morning": "Morning activity description",
      "afternoon": "Afternoon activity",
      "evening": "Evening activity",
      "stayAt": "Accommodation name"
    }
  ],
  "highlights": [
    "Unique experience 1",
    "Unique experience 2",
    "Unique experience 3",
    "Unique experience 4"
  ],
  "packingEssentials": ["Item 1", "Item 2", "Item 3", "Item 4"],
  "travelTips": ["Tip 1", "Tip 2", "Tip 3"],
  "cuisineToTry": ["Dish 1", "Dish 2", "Dish 3"]
}

Rules:
- Generate 4-7 day itineraries depending on the destination complexity
- Be specific with restaurant names, hotel names, and local experiences
- Make it feel impossibly luxurious and personal
- Include hidden gems and off-the-beaten-path experiences mixed with iconic landmarks
- The trip name should feel like a film title
- Keep the tone aspirational, warm, and sophisticated`;

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide a travel wish." },
        { status: 400 }
      );
    }

    const openaiApiKey = process.env.OPENAI_API_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY;

    let text = "";

    if (openaiApiKey && openaiApiKey !== "your_openai_api_key_here") {
      // Use OpenAI GPT
      const openai = new OpenAI({ apiKey: openaiApiKey });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Client's travel wish: "${prompt.trim()}"` },
        ],
        response_format: { type: "json_object" },
      });
      text = completion.choices[0].message.content ?? "";
    } else if (geminiApiKey && geminiApiKey !== "your_gemini_api_key_here") {
      // Use Gemini as fallback or primary if OpenAI is not set
      const ai = new GoogleGenAI({ apiKey: geminiApiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
          {
            role: "user",
            parts: [
              { text: SYSTEM_PROMPT },
              { text: `Client's travel wish: "${prompt.trim()}"` },
            ],
          },
        ],
      });
      text = response.text ?? "";
    } else {
      return NextResponse.json(
        { error: "AI service not configured. Please set OPENAI_API_KEY or GEMINI_API_KEY." },
        { status: 500 }
      );
    }

    // Clean up potential markdown code fences (mostly for Gemini)
    const cleaned = text
      .replace(/```json\s*/gi, "")
      .replace(/```\s*/g, "")
      .trim();

    const trip = JSON.parse(cleaned);

    return NextResponse.json({ trip });
  } catch (error: unknown) {
    console.error("Trip generation error:", JSON.stringify(error, Object.getOwnPropertyNames(error as object), 2));

    let message = "Something went wrong generating your trip. Please try again.";

    if (error instanceof SyntaxError) {
      message = "Failed to parse AI response. Please try again.";
    } else if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
