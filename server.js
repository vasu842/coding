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

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "No messages received"
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY is missing in .env file"
      });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },

      body: JSON.stringify({
        model: "gpt-5",
        input: messages
      })
    });

    const data = await response.json();

    console.log("OpenAI response:", data);

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "OpenAI API error"
      });
    }

    res.json({
      answer: data.output_text || "No answer received."
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "MyAI server is working"
  });
});

app.listen(PORT, () => {
  console.log("");
  console.log("================================");
  console.log("      MyAI SERVER RUNNING");
  console.log("================================");
  console.log(`http://localhost:${PORT}`);
  console.log("");
});