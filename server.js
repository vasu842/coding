require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({
        error: "Messages are required"
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY is missing in .env"
      });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5.6",
        input: messages.map(message => ({
          role: message.role,
          content: message.content
        }))
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "OpenAI API error"
      });
    }

    res.json({
      answer: data.output_text || "No response received."
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Server error"
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "MyAI server is running"
  });
});

app.listen(PORT, () => {
  console.log(`MyAI running at http://localhost:${PORT}`);
});