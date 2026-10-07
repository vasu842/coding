const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const newChat = document.getElementById("newChat");
const clearChat = document.getElementById("clearChat");
const historyList = document.getElementById("historyList");
const themeButton = document.getElementById("themeButton");

let messages = [];
let history = JSON.parse(localStorage.getItem("myai_history") || "[]");


function addMessage(role, text) {

  const row = document.createElement("div");

  row.className = `message-row ${role}`;

  const bubble = document.createElement("div");

  bubble.className = `message ${role}`;

  bubble.textContent = text;

  row.appendChild(bubble);

  chat.appendChild(row);

  chat.scrollTop = chat.scrollHeight;
}


function removeWelcome() {

  const welcome = document.querySelector(".welcome");

  if (welcome) {
    welcome.remove();
  }

}


async function sendMessage(text) {

  removeWelcome();

  addMessage("user", text);

  messages.push({
    role: "user",
    content: text
  });

  input.value = "";

  const thinking = document.createElement("div");

  thinking.className = "message-row";

  thinking.innerHTML =
    '<div class="message assistant">Thinking...</div>';

  chat.appendChild(thinking);

  chat.scrollTop = chat.scrollHeight;


  try {

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

    thinking.remove();


    if (!response.ok) {

      addMessage(
        "assistant",
        data.error || "Something went wrong."
      );

      return;
    }


    addMessage(
      "assistant",
      data.answer
    );


    messages.push({
      role: "assistant",
      content: data.answer
    });


    saveHistory(text);

  } catch (error) {

    thinking.remove();

    addMessage(
      "assistant",
      "Cannot connect to server. Make sure Node.js is running."
    );

  }

}


form.addEventListener("submit", function(e) {

  e.preventDefault();

  const text = input.value.trim();

  if (!text) return;

  sendMessage(text);

});


function useSuggestion(text) {

  sendMessage(text);

}


newChat.addEventListener("click", function() {

  messages = [];

  chat.innerHTML = `

    <div class="welcome">

      <div class="big-logo">✦</div>

      <h1>How can I help you?</h1>

      <p>Ask anything and chat with AI.</p>

    </div>

  `;

});


clearChat.addEventListener("click", function() {

  messages = [];

  localStorage.removeItem("myai_history");

  history = [];

  historyList.innerHTML = "";

  newChat.click();

});


function saveHistory(text) {

  history.unshift(text);

  history = history.slice(0, 10);

  localStorage.setItem(
    "myai_history",
    JSON.stringify(history)
  );

  renderHistory();

}


function renderHistory() {

  historyList.innerHTML = "";

  history.forEach(item => {

    const div = document.createElement("div");

    div.className = "history-item";

    div.textContent = item;

    div.onclick = () => {

      input.value = item;

      input.focus();

    };

    historyList.appendChild(div);

  });

}


themeButton.addEventListener("click", function() {

  document.body.classList.toggle("dark");

});


renderHistory();