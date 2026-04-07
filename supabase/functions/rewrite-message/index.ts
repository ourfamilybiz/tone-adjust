// File: supabase/functions/rewrite-message/index.ts
// @ts-nocheck

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

function buildToneInstruction(tone: string) {
  switch ((tone || "").toLowerCase()) {
    case "professional":
      return "Write in a professional, clear, polite, and concise tone.";
    case "casual":
      return "Write in a casual, friendly, natural, and approachable tone.";
    case "persuasive":
      return "Write in a persuasive and compelling tone while staying truthful and clear.";
    case "apology":
      return "Write in a sincere, empathetic, accountable, and respectful tone.";
    case "confident":
      return "Write in a confident, assertive, and self-assured tone without sounding aggressive.";
    default:
      return "Write in a clear, natural, and easy-to-understand tone.";
  }
}

function buildModifierInstructions(modifiers: string[] = []) {
  const modifierInstructions: string[] = [];

  if (modifiers.includes("Make shorter")) {
    modifierInstructions.push("Keep it shorter without losing the core meaning.");
  }

  if (modifiers.includes("Fix grammar")) {
    modifierInstructions.push("Fix grammar, spelling, and punctuation.");
  }

  if (modifiers.includes("More confident")) {
    modifierInstructions.push("Make the wording more confident and direct.");
  }

  return modifierInstructions.join(" ");
}

function buildPrompt(
  text: string,
  tone: string,
  modifiers: string[] = [],
  mode: string = "rewrite"
) {
  const toneInstruction = buildToneInstruction(tone);
  const modifierInstruction = buildModifierInstructions(modifiers);

  if (mode === "generate") {
    return `
You are helping a user write a message from a situation they describe.

${toneInstruction}
${modifierInstruction}

Based on the situation below, write a complete message the user can send.
Make it sound human, natural, and ready to use.
Return only the message.

Situation:
${text}
`.trim();
  }

  return `
You are helping a user improve a message they already wrote.

${toneInstruction}
${modifierInstruction}

Rewrite the message below while keeping the original meaning.
Make it sound natural and ready to send.
Return only the rewritten message.

Original message:
${text}
`.trim();
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing OPENAI_API_KEY secret." }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { text, tone, modifiers, mode } = await req.json();

    if (!text || typeof text !== "string") {
      return new Response(
        JSON.stringify({ error: "Message text is required." }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const prompt = buildPrompt(
      text,
      tone || "Professional",
      modifiers || [],
      mode || "rewrite"
    );

    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: prompt,
      }),
    });

    const data = await openAiResponse.json();

    if (!openAiResponse.ok) {
      return new Response(
        JSON.stringify({
          error: "OpenAI request failed.",
          status: openAiResponse.status,
          details: data,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const result =
      data?.output_text ||
      data?.output?.[0]?.content?.[0]?.text ||
      "";

    if (!result) {
      return new Response(
        JSON.stringify({
          error: "No rewritten text returned from OpenAI.",
          details: data,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ result }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown server error.",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});