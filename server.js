require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const BASE = `Always reply in the language the user writes in. Use Markdown.
Greeting: reply in 1-2 friendly lines. Factual question: direct answer first, then a brief explanation.
"Explain": simple words, then a small example. "How to": numbered steps.
Coding: complete working code in a fenced code block with the language name, then a brief explanation.
Comparison: short bullets per option, then a recommendation. List requests: give exactly the number asked.
If unsure, say so. Keep answers only as long as needed.`;

const PERSONAS = {
  jarvis: "You are J.A.R.V.I.S., a smart, polite and efficient AI assistant. Be precise and professional, with light wit.",
  teacher: "You are a patient teacher. Explain step by step in simple words with small examples.",
  coder: "You are an expert programmer. Give complete working code, then explain it briefly.",
  friend: "You are a warm, casual friend. Keep replies short and natural."
};

const PROVIDERS = {
  groq: {
    label: "Groq Llama 3.3 70B",
    type: "openai",
    url: "https://api.groq.com/openai/v1/chat/completions",
    key: () => process.env.GROQ_API_KEY,
    model: () => process.env.GROQ_MODEL || "llama-3.3-70b-versatile"
  },
  gemini: {
    label: "Google Gemini 2.5 Flash",
    type: "gemini",
    key: () => process.env.GEMINI_API_KEY,
    model: () => process.env.GEMINI_MODEL || "gemini-2.5-flash"
  },
  openai: {
    label: "ChatGPT GPT-4o-mini",
    type: "openai",
    url: "https://api.openai.com/v1/chat/completions",
    key: () => process.env.OPENAI_API_KEY,
    model: () => process.env.OPENAI_MODEL || "gpt-4o-mini"
  }
};

function hasKey(p) {
  const k = p.key();
  return !!k && !k.startsWith("paste");
}

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/api/models", (req, res) => {
  res.json(
    Object.entries(PROVIDERS).map(([id, p]) => ({
      id,
      label: p.label,
      available: hasKey(p)
    }))
  );
});

async function readSSE(upstream, onEvent) {
  const decoder = new TextDecoder();
  let buf = "";
  for await (const chunk of upstream.body) {
    buf += decoder.decode(chunk, { stream: true });
    const lines = buf.split("\n");
    buf = lines.pop();
    for (const line of lines) {
      if (!line.startsWith("data:")) continue;
      const payload = line.slice(5).trim();
      if (!payload || payload === "[DONE]") continue;
      let evt;
      try {
        evt = JSON.parse(payload);
      } catch {
        continue;
      }
      onEvent(evt);
    }
  }
}

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, model, persona } = req.body;

    const provider = PROVIDERS[model];
    if (!provider) return res.status(400).json({ error: "Unknown model selected." });
    if (!hasKey(provider)) {
      return res.status(400).json({ error: `API key for "${provider.label}" is missing in the .env file.` });
    }

    const history = (Array.isArray(messages) ? messages : [])
      .filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-20);

    if (history.length === 0) return res.status(400).json({ error: "No messages received" });

    const system = (PERSONAS[persona] || PERSONAS.jarvis) + "\n\n" + BASE;

    let upstream;
    if (provider.type === "openai") {
      upstream = await fetch(provider.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${provider.key()}`
        },
        body: JSON.stringify({
          model: provider.model(),
          stream: true,
          messages: [{ role: "system", content: system }, ...history]
        })
      });
    } else {
      upstream = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${provider.model()}:streamGenerateContent?alt=sse`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": provider.key()
          },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: system }] },
            contents: history.map(m => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.content }]
            }))
          })
        }
      );
    }

    if (!upstream.ok) {
      const data = await upstream.json().catch(() => ({}));
      console.error("Provider error:", JSON.stringify(data));
      return res.status(upstream.status).json({
        error: data.error?.message || `${provider.label} returned an error (${upstream.status}).`
      });
    }

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    await readSSE(upstream, evt => {
      let delta = "";
      if (provider.type === "openai") {
        delta = evt.choices?.[0]?.delta?.content || "";
      } else {
        delta = (evt.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("");
      }
      if (delta) res.write(`data: ${JSON.stringify({ delta })}\n\n`);
    });

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("SERVER ERROR:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    } else {
      res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
      res.end();
    }
  }
});

app.listen(PORT, () => {
  console.log("");
  console.log("================================");
  console.log("      MyAI SERVER RUNNING");
  console.log("================================");
  console.log(`http://localhost:${PORT}`);
  console.log("");
});