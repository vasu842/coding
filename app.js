const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const newChat = document.getElementById("newChat");
const clearChat = document.getElementById("clearChat");
const historyList = document.getElementById("historyList");
const themeButton = document.getElementById("themeButton");

const API_URL = "";

let messages = [];
let history = JSON.parse(localStorage.getItem("myai_history") || "[]");
let busy = false;


/* ---------- Markdown to HTML (safe) ---------- */

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inlineFormat(s) {
  return s
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(text) {
  const blocks = [];

  const src = escapeHtml(text).replace(
    /```(\w*)\n?([\s\S]*?)```/g,
    function (m, lang, code) {
      blocks.push({ lang: lang, code: code.replace(/\n$/, "") });
      return "\u0000" + (blocks.length - 1) + "\u0000";
    }
  );

  const lines = src.split("\n");
  let html = "";
  let list = null;

  function closeList() {
    if (list) {
      html += "</" + list + ">";
      list = null;
    }
  }

  for (const line of lines) {
    const t = line.trim();
    let m;

    if ((m = t.match(/^\u0000(\d+)\u0000$/))) {
      closeList();
      const b = blocks[Number(m[1])];
      html +=
        '<div class="code-block">' +
        '<div class="code-head"><span>' + (b.lang || "code") + "</span>" +
        '<button class="copy-btn" type="button">Copy</button></div>' +
        "<pre><code>" + b.code + "</code></pre></div>";
      continue;
    }

    if ((m = t.match(/^#{1,4}\s+(.*)$/))) {
      closeList();
      html += '<h4 class="md-h">' + inlineFormat(m[1]) + "</h4>";
      continue;
    }

    if ((m = t.match(/^[-*]\s+(.*)$/))) {
      if (list !== "ul") { closeList(); html += "<ul>"; list = "ul"; }
      html += "<li>" + inlineFormat(m[1]) + "</li>";
      continue;
    }

    if ((m = t.match(/^\d+[.)]\s+(.*)$/))) {
      if (list !== "ol") { closeList(); html += "<ol>"; list = "ol"; }
      html += "<li>" + inlineFormat(m[1]) + "</li>";
      continue;
    }

    if (t === "") {
      closeList();
      continue;
    }

    closeList();
    html += "<p>" + inlineFormat(t) + "</p>";
  }

  closeList();
  return html;
}


/* ---------- Chat ---------- */

function addMessage(role, text) {
  const row = document.createElement("div");
  row.className = "message-row " + role;

  const bubble = document.createElement("div");
  bubble.className = "message " + role;

  if (role === "assistant") {
    bubble.innerHTML = renderMarkdown(text);
  } else {
    bubble.textContent = text;
  }

  row.appendChild(bubble);
  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

function removeWelcome() {
  const welcome = document.querySelector(".welcome");
  if (welcome) welcome.remove();
}

async function sendMessage(text) {
  if (busy) return;
  busy = true;
  sendButton.disabled = true;

  removeWelcome();
  addMessage("user", text);
  messages.push({ role: "user", content: text });
  input.value = "";

  const thinking = document.createElement("div");
  thinking.className = "message-row assistant";
  thinking.innerHTML = '<div class="message assistant">Thinking...</div>';
  chat.appendChild(thinking);
  chat.scrollTop = chat.scrollHeight;

  try {
    const response = await fetch(API_URL + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messages })
    });

    const data = await response.json();
    thinking.remove();

    if (!response.ok) {
      addMessage("assistant", data.error || "Something went wrong.");
      messages.pop();
      return;
    }

    addMessage("assistant", data.answer);
    messages.push({ role: "assistant", content: data.answer });
    saveHistory(text);
  } catch (error) {
    thinking.remove();
    messages.pop();
    addMessage(
      "assistant",
      "Cannot connect to server. Open http://localhost:3000 and make sure 'npm start' is running."
    );
  } finally {
    busy = false;
    sendButton.disabled = false;
    input.focus();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  sendMessage(text);
});

function useSuggestion(text) {
  sendMessage(text);
}

/* Copy button for code blocks */
chat.addEventListener("click", function (e) {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const code = btn.closest(".code-block").querySelector("code").textContent;
  navigator.clipboard.writeText(code).then(function () {
    btn.textContent = "Copied!";
    setTimeout(function () { btn.textContent = "Copy"; }, 1500);
  });
});

newChat.addEventListener("click", function () {
  messages = [];
  chat.innerHTML =
    '<div class="welcome">' +
    '<div class="big-logo">✦</div>' +
    "<h1>How can I help you?</h1>" +
    "<p>Ask anything and chat with AI.</p>" +
    "</div>";
});

clearChat.addEventListener("click", function () {
  localStorage.removeItem("myai_history");
  history = [];
  historyList.innerHTML = "";
  newChat.click();
});

function saveHistory(text) {
  history.unshift(text);
  history = history.slice(0, 10);
  localStorage.setItem("myai_history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(function (item) {
    const div = document.createElement("div");
    div.className = "history-item";
    div.textContent = item;
    div.onclick = function () {
      input.value = item;
      input.focus();
    };
    historyList.appendChild(div);
  });
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

renderHistory();