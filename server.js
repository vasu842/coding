require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

const SYSTEM_PROMPT = `
You are MyAI, a helpful and friendly assistant.
Always reply in the same language the user writes in.
Use Markdown. Match your answer to the type of question:

- Greeting or casual chat: reply short and friendly (1-2 lines).
- Factual question: give the direct answer first, then a brief explanation.
- "Explain" or "what is" question: use simple words, a short definition, then a small real-life example.
- "How to" question: give numbered steps.
- Coding question: give complete working code inside a fenced code block with the language name, then explain it briefly.
- Error or bug: explain the cause, then show the fixed code.
- Math or logic: show the steps, then the final answer clearly.
- Comparison: use a short bullet list for each option, then a recommendation.
- List request (for example "give me 5 questions"): give exactly that number, numbered.
- Unclear question: ask one short clarifying question.

Be accurate. If you are not sure, say so. Do not make answers longer than needed.
`;

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "No messages received" });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OPENAI_API_KEY is missing in .env file" });
    }

    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        instructions: SYSTEM_PROMPT,
        input: messages.slice(-20),
        stream: true
      })
    });

    if (!upstream.ok) {
      const data = await upstream.json().catch(() => ({}));
      console.error("OpenAI error:", data);
      return res.status(upstream.status).json({
        error: data.error?.message || "OpenAI API error"
      });
    }

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    const decoder = new TextDecoder();
    let buffer = "";

    for await (const chunk of upstream.body) {
      buffer += decoder.decode(chunk, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();

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

        if (evt.type === "response.output_text.delta") {
          res.write(`data: ${JSON.stringify({ delta: evt.delta })}\n\n`);
        } else if (evt.type === "response.failed" || evt.type === "error") {
          const msg =
            evt.error?.message ||
            evt.response?.error?.message ||
            evt.message ||
            "Stream error";
          res.write(`data: ${JSON.stringify({ error: msg })}\n\n`);
        }
      }
    }

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

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "MyAI server is working" });
});

app.listen(PORT, () => {
  console.log("");
  console.log("================================");
  console.log("      MyAI SERVER RUNNING");
  console.log("================================");
  console.log(`http://localhost:${PORT}`);
  console.log("");
});