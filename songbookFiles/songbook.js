"use strict";

const $ = (s) => document.querySelector(s);

const listView = $("#listView");
const songView = $("#songView");
const grid = $("#songGrid");
const searchInput = $("#searchInput");
const categorySelect = $("#categorySelect");
const sortSelect = $("#sortSelect");
const resultCount = $("#resultCount");

// ---------- Prepare the data ----------

const norm = (t) => String(t ?? "").toLowerCase();

const library = songs
  .map((song, i) => ({ ...song, id: `s${song.number ?? i + 1}-${i}` }))
  .sort(
    (a, b) =>
      (a.number ?? 1e9) - (b.number ?? 1e9) || a.title.localeCompare(b.title),
  );

// ---------- Filters ----------

function fillCategories() {
  const names = [
    ...new Set(library.map((s) => s.category).filter(Boolean)),
  ].sort();
  categorySelect.replaceChildren(new Option("All categories", ""));
  names.forEach((name) => categorySelect.append(new Option(name, name)));
}

function matches(song, query, category) {
  if (category && song.category !== category) return false;
  if (!query) return true;
  return [song.title, song.number, song.source, song.lyrics].some((f) =>
    norm(f).includes(query),
  );
}

// ---------- List view ----------

function renderList() {
  const query = norm(searchInput.value).trim();
  const category = categorySelect.value;

  const found = library.filter((s) => matches(s, query, category));
  if (sortSelect.value === "title")
    found.sort((a, b) => a.title.localeCompare(b.title));

  grid.replaceChildren();

  found.forEach((song) => {
    const a = document.createElement("a");
    a.href = `#${song.id}`;
    a.className = "sbItem";

    const num = document.createElement("span");
    num.className = "sbNum";
    num.textContent = song.number ?? "";

    const text = document.createElement("span");
    text.className = "sbItemText";
    const title = document.createElement("strong");
    title.textContent = song.title;
    text.append(title);
    if (song.category) {
      const cat = document.createElement("small");
      cat.textContent = song.category;
      text.append(cat);
    }

    a.append(num, text);
    grid.append(a);
  });

  if (!found.length) {
    const empty = document.createElement("p");
    empty.className = "sbEmpty";
    empty.textContent =
      "No songs match your search. Try a different word or category.";
    grid.append(empty);
  }

  resultCount.textContent = `Showing ${found.length} of ${library.length} ${library.length === 1 ? "song" : "songs"}`;
}

// ---------- Song view ----------

// Blank line = new part. A first line like [Chorus] becomes the label.
function renderLyrics(text) {
  const body = $("#songBody");
  body.replaceChildren();

  String(text ?? "")
    .trim()
    .split(/\n\s*\n/)
    .forEach((block) => {
      const lines = block.split("\n").map((l) => l.trimEnd());
      const stanza = document.createElement("div");
      stanza.className = "sbStanza";

      const label = lines[0].trim().match(/^\[(.+)\]$/);
      if (label) {
        const l = document.createElement("p");
        l.className = "sbLabel";
        l.textContent = label[1];
        stanza.append(l);
        lines.shift();
      }

      const p = document.createElement("p");
      p.className = "sbLines";
      p.textContent = lines.join("\n");
      stanza.append(p);
      body.append(stanza);
    });
}

function showSong(id) {
  const index = library.findIndex((s) => s.id === id);
  if (index === -1) return showList();

  const song = library[index];
  $("#songTitle").textContent = song.number
    ? `${song.number}. ${song.title}`
    : song.title;
  $("#songMeta").textContent = [song.category, song.source]
    .filter(Boolean)
    .join(" | ");
  renderLyrics(song.lyrics);

  const prev = library[index - 1];
  const next = library[index + 1];
  for (const [el, target] of [
    [$("#prevSong"), prev],
    [$("#nextSong"), next],
  ]) {
    el.hidden = !target;
    if (target) el.href = `#${target.id}`;
  }

  document.title = `${song.title} | Songbook`;
  listView.hidden = true;
  songView.hidden = false;
  window.scrollTo(0, 0);
}

function showList() {
  document.title = "Songbook | Northern Tablas District";
  songView.hidden = true;
  listView.hidden = false;
}

// ---------- Text size (remembered on this device) ----------

const SIZE_KEY = "ntdSongSize";
const SIZE_MIN = 1,
  SIZE_MAX = 3.2,
  SIZE_STEP = 0.2;
let size = 1.4;

try {
  const saved = parseFloat(localStorage.getItem(SIZE_KEY));
  if (saved >= SIZE_MIN && saved <= SIZE_MAX) size = saved;
} catch (e) {
  /* storage blocked: keep default */
}

function applySize() {
  document.documentElement.style.setProperty("--song-size", `${size}rem`);
  try {
    localStorage.setItem(SIZE_KEY, size);
  } catch (e) {
    /* ignore */
  }
}

$("#sizeUp").addEventListener("click", () => {
  size = Math.min(SIZE_MAX, +(size + SIZE_STEP).toFixed(2));
  applySize();
});
$("#sizeDown").addEventListener("click", () => {
  size = Math.max(SIZE_MIN, +(size - SIZE_STEP).toFixed(2));
  applySize();
});

// ---------- Routing: #s1-0 opens a song, no hash shows the list ----------

function route() {
  const id = location.hash.slice(1);
  id ? showSong(id) : showList();
}

$("#backToList").addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState(null, "", location.pathname + location.search);
  route();
});

document.addEventListener("keydown", (e) => {
  if (songView.hidden || e.target.matches("input, select")) return;
  if (e.key === "ArrowLeft" && !$("#prevSong").hidden)
    location.hash = $("#prevSong").getAttribute("href");
  if (e.key === "ArrowRight" && !$("#nextSong").hidden)
    location.hash = $("#nextSong").getAttribute("href");
});

searchInput.addEventListener("input", renderList);
categorySelect.addEventListener("change", renderList);
sortSelect.addEventListener("change", renderList);
window.addEventListener("hashchange", route);

// ---------- Start ----------

applySize();
fillCategories();
renderList();
route();
