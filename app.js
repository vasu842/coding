const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");

let messages = [];

// ===============================
// SEND MESSAGE
// ===============================

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const text = input.value.trim();

    if (!text) {
        return;
    }

    // Add user message
    messages.push({
        role: "user",
        content: text
    });

    addMessage("user", text);

    input.value = "";

    // Show thinking
    const thinking = addMessage(
        "assistant",
        "Thinking..."
    );

    try {

        // Send messages to Node.js backend
        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                messages: messages
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error || "Server error"
            );
        }

        // Remove Thinking...
        thinking.remove();

        // GPT answer
        const answer = data.answer;

        // Save assistant message
        messages.push({
            role: "assistant",
            content: answer
        });

        // Display GPT answer
        addMessage(
            "assistant",
            answer
        );

    } catch (error) {

        thinking.remove();

        addMessage(
            "assistant",
            "Error: " + error.message
        );

        console.error(error);
    }
});


// ===============================
// DISPLAY MESSAGE
// ===============================

function addMessage(role, text) {

    const message = document.createElement("div");

    message.className =
        "message " + role;

    const bubble =
        document.createElement("div");

    bubble.className = "bubble";

    bubble.textContent = text;

    message.appendChild(bubble);

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;

    return message;
}