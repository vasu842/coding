const router = require("express").Router();
const auth = require("../middleware/auth");
const Chat = require("../models/Chat");

// Get saved chat history
router.get("/history", auth, async (req, res) => {
  const chat = await Chat.findOne({ userId: req.userId });
  res.json({ messages: chat ? chat.messages : [] });
});

// Clear chat
router.delete("/history", auth, async (req, res) => {
  await Chat.deleteOne({ userId: req.userId });
  res.json({ ok: true });
});

// Send a message to the AI
router.post("/", auth, async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is empty" });

    let chat = await Chat.findOne({ userId: req.userId });
    if (!chat) chat = new Chat({ userId: req.userId, messages: [] });
    chat.messages.push({ role: "user", content: message });

    // send only the last 20 messages to the AI
    const history = chat.messages
      .slice(-20)
      .map((m) => ({ role: m.role, content: m.content }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.MODEL || "claude-sonnet-5-5",
        max_tokens: 1000,
        system: "You are a helpful study assistant. Give clear, simple answers.",
        messages: history,
      }),
    });

    const data = await response.json();
    if (!response.ok)
      return res.status(500).json({ error: data.error?.message || "AI error" });

    const reply = data.content.map((c) => c.text || "").join("");
    chat.messages.push({ role: "assistant", content: reply });
    await chat.save();
    res.json({ reply });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;