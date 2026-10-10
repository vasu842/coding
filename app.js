const app = document.getElementById("app");
const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const micButton = document.getElementById("micButton");
const historyList = document.getElementById("historyList");
const themeButton = document.getElementById("themeButton");
const searchChats = document.getElementById("searchChats");
const recentTitle = document.getElementById("recentTitle");
const personaSelect = document.getElementById("personaSelect");
const modelSelect = document.getElementById("modelSelect");
const personaName = document.getElementById("personaName");
const statusEl = document.getElementById("status");

// Empty = same server that served this page. For a hosted server, put its address here.
const API_URL = "";

let chats = [];
try {
  chats = JSON.parse(localStorage.getItem("myai_chats") || "[]");
} catch (e) {
  chats = [];
}

let currentId = null;
let busy = false;


/* ---------- Markdown ---------- */

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

  let html = "";
  let list = null;

  function closeList() {
    if (list) { html += "</" + list + ">"; list = null; }
  }

  for (const line of src.split("\n")) {
    const t = line.trim();
    let m;

    if ((m = t.match(/^\u0000(\d+)\u0000$/))) {
      closeList();
      const b = blocks[Number(m[1])];
      html +=
        '<div class="code-block"><div class="code-head"><span>' + (b.lang || "code") + "</span>" +
        '<button class="copy-btn" type="button">Copy</button></div>' +
        "<pre><code>" + b.code + "</code></pre></div>";
    } else if ((m = t.match(/^#{1,4}\s+(.*)$/))) {
      closeList();
      html += '<h4 class="md-h">' + inlineFormat(m[1]) + "</h4>";
    } else if ((m = t.match(/^[-*]\s+(.*)$/))) {
      if (list !== "ul") { closeList(); html += "<ul>"; list = "ul"; }
      html += "<li>" + inlineFormat(m[1]) + "</li>";
    } else if ((m = t.match(/^\d+[.)]\s+(.*)$/))) {
      if (list !== "ol") { closeList(); html += "<ol>"; list = "ol"; }
      html += "<li>" + inlineFormat(m[1]) + "</li>";
    } else if (t === "") {
      closeList();
    } else {
      closeList();
      html += "<p>" + inlineFormat(t) + "</p>";
    }
  }

  closeList();
  return html;
}


/* ---------- Storage helpers ---------- */

function saveChats() {
  localStorage.setItem("myai_chats", JSON.stringify(chats));
}

function getCurrent() {
  return chats.find(function (c) { return c.id === currentId; });
}

function scrollDown() {
  chat.scrollTop = chat.scrollHeight;
}


/* ---------- Rendering ---------- */

function addActions(row, text) {
  row.dataset.text = text;
  const bar = document.createElement("div");
  bar.className = "actions";
  bar.innerHTML =
    '<button data-a="copy">⧉ Copy</button>' +
    '<button data-a="regen">↻ Regenerate</button>' +
    '<button data-a="up">👍</button>' +
    '<button data-a="down">👎</button>' +
    '<button data-a="listen">🔊 Listen</button>';
  row.appendChild(bar);
}

function appendMessage(role, text, withActions) {
  const row = document.createElement("div");
  row.className = "msg-row " + role;

  const who = document.createElement("div");
  who.className = "who";
  who.textContent = role === "user" ? "You" : "MyAI";

  const bubble = document.createElement("div");
  bubble.className = "msg " + role;

  if (role === "assistant") {
    bubble.innerHTML = renderMarkdown(text);
  } else {
    bubble.textContent = text;
  }

  row.appendChild(who);
  row.appendChild(bubble);
  if (role === "assistant" && withActions && text) addActions(row, text);

  chat.appendChild(row);
  scrollDown();
  return { row: row, bubble: bubble };
}

function renderChat() {
  chat.innerHTML = "";
  const c = getCurrent();

  if (!c || c.messages.length === 0) {
    chat.innerHTML =
      '<div class="welcome"><div class="big-logo">✦</div>' +
      "<h1>How can I help you?</h1>" +
      '<div class="suggestions">' +
      '<button data-prompt="Explain Python in simple words">💡 Explain Python</button>' +
      '<button data-prompt="Write a Python program to reverse a string">💻 Coding help</button>' +
      '<button data-prompt="Give me 5 important Java questions">📝 Java questions</button>' +
      '<button data-prompt="What is Artificial Intelligence?">🤖 What is AI?</button>' +
      "</div></div>";
    return;
  }

  c.messages.forEach(function (m, i) {
    appendMessage(m.role, m.content, i === c.messages.length - 1 || true);
  });
  scrollDown();
}

function renderSidebar() {
  const q = searchChats.value.trim().toLowerCase();
  historyList.innerHTML = "";

  const list = chats
    .filter(function (c) { return c.title.toLowerCase().includes(q); })
    .sort(function (a, b) {
      if (!!b.pinned !== !!a.pinned) return b.pinned ? 1 : -1;
      return b.updated - a.updated;
    });

  recentTitle.textContent = "RECENT (" + list.length + ")";

  list.forEach(function (c) {
    const item = document.createElement("div");
    item.className = "history-item" + (c.id === currentId ? " active" : "");

    const title = document.createElement("span");
    title.textContent = c.title;

    const pin = document.createElement("button");
    pin.textContent = "📌";
    pin.title = c.pinned ? "Unpin" : "Pin";
    if (c.pinned) pin.className = "on";
    pin.onclick = function (e) {
      e.stopPropagation();
      c.pinned = !c.pinned;
      saveChats();
      renderSidebar();
    };

    const del = document.createElement("button");
    del.textContent = "🗑";
    del.title = "Delete";
    del.onclick = function (e) {
      e.stopPropagation();
      deleteChat(c.id);
    };

    item.appendChild(title);
    item.appendChild(pin);
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

function sendMessage(text) {
  text = (text || "").trim();
  if (busy || !text) return;

  let c = getCurrent();

  if (!c) {
    c = {
      id: Date.now().toString(36),
      title: text.slice(0, 40),
      messages: [],
      updated: Date.now(),
      pinned: false
    };
    chats.unshift(c);
    currentId = c.id;
  }

  if (chat.querySelector(".welcome")) chat.innerHTML = "";

  c.messages.push({ role: "user", content: text });
  c.updated = Date.now();
  saveChats();
  renderSidebar();

  appendMessage("user", text);
  input.value = "";
  autoGrow();

  generate(c);
}

async function generate(c) {
  busy = true;
  sendButton.disabled = true;

  const parts = appendMessage("assistant", "", false);
  parts.bubble.textContent = "Thinking...";

  let answer = "";

  try {
    const res = await fetch(API_URL + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: c.messages,
        model: modelSelect.value,
        persona: personaSelect.value
      })
    });

    if (!res.ok) {
      const data = await res.json().catch(function () { return {}; });
      throw new Error(
        data.error ||
        "Server not found (error " + res.status + "). Open http://localhost:3000 instead of the github.io link."
      );
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const result = await reader.read();
      if (result.done) break;

      buffer += decoder.decode(result.value, { stream: true });
      const chunks = buffer.split("\n\n");
      buffer = chunks.pop();

      for (const chunk of chunks) {
        const line = chunk.trim();
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
          parts.bubble.innerHTML = renderMarkdown(answer);
          scrollDown();
        }
      }
    }

    if (!answer) throw new Error("No answer received.");

    c.messages.push({ role: "assistant", content: answer });
    addActions(parts.row, answer);
  } catch (err) {
    if (answer) {
      c.messages.push({ role: "assistant", content: answer });
      addActions(parts.row, answer);
    } else {
      parts.bubble.classList.add("error");
      parts.bubble.textContent =
        err instanceof TypeError
          ? "Cannot connect to server. Open http://localhost:3000 and make sure 'npm start' is running."
          : err.message;
    }
  } finally {
    c.updated = Date.now();
    busy = false;
    sendButton.disabled = false;
    saveChats();
    renderSidebar();
    input.focus();
  }
}

function regenerate() {
  const c = getCurrent();
  if (busy || !c) return;
  while (c.messages.length && c.messages[c.messages.length - 1].role === "assistant") {
    c.messages.pop();
  }
  if (!c.messages.length) return;
  saveChats();
  renderChat();
  generate(c);
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

chat.addEventListener("click", function (e) {
  // suggestion buttons
  const sug = e.target.closest(".suggestions button");
  if (sug) { sendMessage(sug.dataset.prompt); return; }

  // code copy
  const copyCode = e.target.closest(".copy-btn");
  if (copyCode) {
    const code = copyCode.closest(".code-block").querySelector("code").textContent;
    navigator.clipboard.writeText(code).then(function () {
      copyCode.textContent = "Copied!";
      setTimeout(function () { copyCode.textContent = "Copy"; }, 1500);
    });
    return;
  }

  // action bar
  const btn = e.target.closest(".actions button");
  if (!btn) return;
  const row = btn.closest(".msg-row");
  const action = btn.dataset.a;

  if (action === "copy") {
    navigator.clipboard.writeText(row.dataset.text).then(function () {
      btn.textContent = "✓ Copied";
      setTimeout(function () { btn.textContent = "⧉ Copy"; }, 1500);
    });
  } else if (action === "regen") {
    regenerate();
  } else if (action === "up" || action === "down") {
    btn.classList.toggle("on");
    const other = row.querySelector('[data-a="' + (action === "up" ? "down" : "up") + '"]');
    if (other) other.classList.remove("on");
  } else if (action === "listen") {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    } else {
      speechSynthesis.speak(new SpeechSynthesisUtterance(row.dataset.text.replace(/[`*#]/g, "")));
    }
  }
});

document.getElementById("newChat").addEventListener("click", newChat);
searchChats.addEventListener("input", renderSidebar);

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
  b.addEventListener("click", function () { app.classList.toggle("collapsed"); });
});


/* ---------- Persona, model, theme ---------- */

function updatePersona() {
  const label = personaSelect.options[personaSelect.selectedIndex].text;
  personaName.textContent = label;
  input.placeholder = "Message " + label + "... (Enter to send, Shift+Enter for newline)";
  localStorage.setItem("myai_persona", personaSelect.value);
}

personaSelect.value = localStorage.getItem("myai_persona") || "jarvis";
personaSelect.addEventListener("change", updatePersona);
updatePersona();

modelSelect.addEventListener("change", function () {
  localStorage.setItem("myai_model", modelSelect.value);
});

function applyTheme(light) {
  document.body.classList.toggle("light", light);
  themeButton.textContent = light ? "☾" : "☀";
  localStorage.setItem("myai_theme", light ? "light" : "dark");
}

themeButton.addEventListener("click", function () {
  applyTheme(!document.body.classList.contains("light"));
});

applyTheme(localStorage.getItem("myai_theme") === "light");


/* ---------- Server status + models ---------- */

function setStatus(ok) {
  statusEl.className = "status " + (ok ? "ok" : "bad");
  statusEl.textContent = ok ? "● Connected" : "● Server offline";
}

fetch(API_URL + "/api/health")
  .then(function (r) { return r.json(); })
  .then(function () { setStatus(true); })
  .catch(function () { setStatus(false); });

fetch(API_URL + "/api/models")
  .then(function (r) { return r.json(); })
  .then(function (list) {
    modelSelect.innerHTML = "";
    list.forEach(function (m) {
      const o = document.createElement("option");
      o.value = m.id;
      o.textContent = m.label + (m.available ? "" : " (add key)");
      o.disabled = !m.available;
      modelSelect.appendChild(o);
    });
    const saved = localStorage.getItem("myai_model");
    const ok = list.find(function (m) { return m.id === saved && m.available; });
    const first = list.find(function (m) { return m.available; });
    if (ok) modelSelect.value = ok.id;
    else if (first) modelSelect.value = first.id;
  })
  .catch(function () {
    modelSelect.innerHTML = '<option value="">Server offline</option>';
  });


/* ---------- Voice input ---------- */

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SR) {
  micButton.style.display = "none";
} else {
  const rec = new SR();
  rec.lang = "en-IN";
  rec.interimResults = false;

  rec.onresult = function (e) {
    input.value = (input.value + " " + e.results[0][0].transcript).trim();
    autoGrow();
  };
  rec.onend = function () { micButton.classList.remove("listening"); };

  micButton.addEventListener("click", function () {
    if (micButton.classList.contains("listening")) {
      rec.stop();
    } else {
      micButton.classList.add("listening");
      rec.start();
    }
  });
}


/* ---------- Start ---------- */

if (window.innerWidth <= 800) app.classList.add("collapsed");

renderChat();
renderSidebar();