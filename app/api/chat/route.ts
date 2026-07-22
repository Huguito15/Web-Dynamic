import { NextRequest, NextResponse } from "next/server";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chatSystemPrompt";

export const runtime = "nodejs";

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY = 12;

// Límite básico de peticiones por IP para proteger la cuota gratuita de Gemini.
// Nota: al vivir en memoria, se reinicia con cada cold start de la función
// serverless; es una protección razonable para un sitio pequeño, no un límite
// estricto a nivel de infraestructura.
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60_000;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT;
}

type ChatMessage = { role: "user" | "model"; text: string };

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "chat_not_configured" }, { status: 503 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const messages: ChatMessage[] | undefined = body?.messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const trimmedHistory = messages.slice(-MAX_HISTORY).filter(
    (m) => (m.role === "user" || m.role === "model") && typeof m.text === "string" && m.text.trim().length > 0
  );

  if (trimmedHistory.length === 0) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const lastMessage = trimmedHistory[trimmedHistory.length - 1];
  if (lastMessage.text.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "message_too_long" }, { status: 413 });
  }

  const contents = trimmedHistory.map((m) => ({
    role: m.role,
    parts: [{ text: m.text.slice(0, MAX_MESSAGE_LENGTH) }],
  }));

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: CHAT_SYSTEM_PROMPT }] },
          generationConfig: { maxOutputTokens: 500, temperature: 0.6 },
        }),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", response.status, await response.text());
      return NextResponse.json({ error: "upstream_error" }, { status: 502 });
    }

    const data = await response.json();
    const reply: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return NextResponse.json({ error: "empty_response" }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
