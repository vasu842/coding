const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const chat = document.getElementById("chat");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const question = input.value.trim();

    if (!question) return;

    // INPUT: show question
    addMessage("user", question);

    input.value = "";

    // OUTPUT loading
    const loading = addMessage("assistant", "Thinking...");

    try {

        const response = await fetch(
            "http://localhost:3000/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: question
                })
            }
        );

        const data = await response.json();

        loading.remove();

        // OUTPUT: show AI answer
        addMessage("assistant", data.answer);

    } catch (error) {

        loading.remove();

        addMessage(
            "assistant",
            "Error: " + error.message
        );
    }
});


function addMessage(type, text) {

    const message = document.createElement("div");

    message.className = "message " + type;

    message.textContent = text;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}