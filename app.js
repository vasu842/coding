const app = document.getElementById("app");
const main = document.getElementById("main");
const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const historyList = document.getElementById("historyList");
const themeButton = document.getElementById("themeButton");

// Empty = same server that served this page.
const API_URL = "";

let chats = [];
try {
  chats = JSON.parse(localStorage.getItem("myai_chats") || "[]");
} catch (e) {
  chats = [];
}

let currentId = null;
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
    /```(\w*)\n?([\s\S]*?)(```|$)/g,
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


/* ---------- Chats storage ---------- */

function saveChats() {
  localStorage.setItem("myai_chats", JSON.stringify(chats));
}

function getCurrent() {
  return chats.find(function (c) { return c.id === currentId; });
}

function setEmpty(isEmpty) {
  main.classList.toggle("empty", isEmpty);
}

function scrollDown() {
  chat.scrollTop = chat.scrollHeight;
}


/* ---------- Rendering ---------- */

function appendMessage(role, text) {
  const row = document.createElement("div");
  row.className = "msg-row " + role;

  const bubble = document.createElement("div");
  bubble.className = "msg " + role;

  if (role === "assistant") {
    bubble.innerHTML = renderMarkdown(text);
  } else {
    bubble.textContent = text;
  }

  row.appendChild(bubble);
  chat.appendChild(row);
  scrollDown();
  return bubble;
}

function renderChat() {
  chat.innerHTML = "";
  const c = getCurrent();

  if (!c || c.messages.length === 0) {
    setEmpty(true);
    return;
  }

  setEmpty(false);
  c.messages.forEach(function (m) {
    appendMessage(m.role, m.content);
  });
  scrollDown();
}

function renderSidebar() {
  historyList.innerHTML = "";

  chats
    .slice()
    .sort(function (a, b) { return b.updated - a.updated; })
    .forEach(function (c) {
      const item = document.createElement("div");
      item.className = "history-item" + (c.id === currentId ? " active" : "");

      const title = document.createElement("span");
      title.textContent = c.title;

      const del = document.createElement("button");
      del.className = "del";
      del.textContent = "✕";
      del.title = "Delete chat";
      del.onclick = function (e) {
        e.stopPropagation();
        deleteChat(c.id);
      };

      item.appendChild(title);
      item.appendChild(del);
      item.onclick = function () { openChat(c.id); };
      historyList.appendChild(item);
    });
}

function closeSidebarOnMobile() {
  if (window.innerWidth <= 800) app.classList.add("collapsed");
}

function newChat() {
  if (busy) return;
  currentId = null;
  renderChat();
  renderSidebar();
  input.focus();
  closeSidebarOnMobile();
}

function openChat(id) {
  if (busy) return;
  currentId = id;
  renderChat();
  renderSidebar();
  closeSidebarOnMobile();
}

function deleteChat(id) {
  if (busy) return;
  chats = chats.filter(function (c) { return c.id !== id; });
  saveChats();
  if (currentId === id) currentId = null;
  renderChat();
  renderSidebar();
}


/* ---------- Sending ---------- */

async function sendMessage(text) {
  text = (text || "").trim();
  if (busy || !text) return;

  let c = getCurrent();

  if (!c) {
    c = {
      id: Date.now().toString(36),
      title: text.slice(0, 40),
      messages: [],
      updated: Date.now()
    };
    chats.unshift(c);
    currentId = c.id;
    chat.innerHTML = "";
  }

  c.messages.push({ role: "user", content: text });
  c.updated = Date.now();
  saveChats();
  renderSidebar();

  setEmpty(false);
  appendMessage("user", text);

  input.value = "";
  autoGrow();

  busy = true;
  sendButton.disabled = true;

  const bubble = appendMessage("assistant", "");
  bubble.textContent = "Thinking...";

  let answer = "";

  try {
    const res = await fetch(API_URL + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: c.messages })
    });

    if (!res.ok) {
      const data = await res.json().catch(function () { return {}; });
      throw new Error(data.error || "Something went wrong.");
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const result = await reader.read();
      if (result.done) break;

      buffer += decoder.decode(result.value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop();

      for (const part of parts) {
        const line = part.trim();
        if (!line.startsWith("data:")) continue;

        const payload = line.slice(5).trim();
        if (payload === "[DONE]") continue;

        let evt;
        try {
          evt = JSON.parse(payload);
        } catch (e) {
          continue;
        }

        if (evt.error) throw new Error(evt.error);

        if (evt.delta) {
          answer += evt.delta;
          bubble.innerHTML = renderMarkdown(answer);
          scrollDown();
        }
      }
    }

    if (!answer) throw new Error("No answer received.");

    c.messages.push({ role: "assistant", content: answer });
  } catch (err) {
    if (answer) {
      c.messages.push({ role: "assistant", content: answer });
    } else {
      const networkProblem = err instanceof TypeError;
      bubble.classList.add("error");
      bubble.textContent = networkProblem
        ? "Cannot connect to server. Open http://localhost:3000 and make sure 'npm start' is running."
        : err.message;

      // remove the failed question so the next request stays valid
      c.messages.pop();
      if (c.messages.length === 0) {
        chats = chats.filter(function (x) { return x.id !== c.id; });
        currentId = null;
      }
    }
  } finally {
    busy = false;
    sendButton.disabled = false;
    saveChats();
    renderSidebar();
    input.focus();
  }
}


/* ---------- Events ---------- */

function autoGrow() {
  input.style.height = "auto";
  input.style.height = Math.min(input.scrollHeight, 200) + "px";
}

input.addEventListener("input", autoGrow);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    form.requestSubmit();
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMessage(input.value);
});

document.getElementById("suggestions").addEventListener("click", function (e) {
  const btn = e.target.closest("button");
  if (btn) sendMessage(btn.dataset.prompt);
});

document.getElementById("newChat").addEventListener("click", newChat);

document.getElementById("clearAll").addEventListener("click", function () {
  if (busy) return;
  if (!confirm("Delete all chats?")) return;
  chats = [];
  currentId = null;
  saveChats();
  renderChat();
  renderSidebar();
});

document.querySelectorAll(".toggle").forEach(function (b) {
  b.addEventListener("click", function () {
    app.classList.toggle("collapsed");
  });
});

// Copy button for code blocks
chat.addEventListener("click", function (e) {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const code = btn.closest(".code-block").querySelector("code").textContent;
  navigator.clipboard.writeText(code).then(function () {
    btn.textContent = "Copied!";
    setTimeout(function () { btn.textContent = "Copy"; }, 1500);
  });
});

// Theme
function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeButton.textContent = dark ? "☀" : "☾";
  localStorage.setItem("myai_theme", dark ? "dark" : "light");
}

themeButton.addEventListener("click", function () {
  applyTheme(!document.body.classList.contains("dark"));
});

applyTheme(localStorage.getItem("myai_theme") === "dark");

if (window.innerWidth <= 800) app.classList.add("collapsed");
   const API_URL = "https://my-ai-chat-xxxx.onrender.com";

renderChat();
renderSidebar();