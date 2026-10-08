require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Read JSON from frontend
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// ===============================
// GPT CHAT API
// ===============================
app.post("/api/chat", async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({
                error: "Messages are required"
            });
        }

        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({
                error: "OPENAI_API_KEY is missing"
            });
        }

        // Send user messages to OpenAI
        const response = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                        `Bearer ${process.env.OPENAI_API_KEY}`
                },

                body: JSON.stringify({
                    model: "gpt-5",
                    input: messages
                })
            }
        );

        const data = await response.json();

        console.log("GPT Response:", data);

        if (!response.ok) {
            return res.status(response.status).json({
                error:
                    data.error?.message ||
                    "OpenAI API error"
            });
        }

        // Send GPT answer back to frontend
        res.json({
            answer: data.output_text || "No answer received."
        });

    } catch (error) {

        console.error("Backend Error:", error);

        res.status(500).json({
            error: error.message
        });
    }
});

// ===============================
// TEST API
// ===============================
app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "MyAI backend is working"
    });
});

// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
    console.log("================================");
    console.log("      MyAI BACKEND RUNNING");
    console.log("================================");
    console.log(`http://localhost:${PORT}`);
});