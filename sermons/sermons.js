"use strict";

/* ---------- Content: add your sermons here ---------- */
// photo is optional: your own image, or leave it out to use the YouTube thumbnail
const sermons = [
  {
    id: 1,
    title: "Maturity in The Faith",
    topic: "Faith",
    date: "2026-10-02",
    speaker: "Pastor Abundionito Cayme",
    url: "https://www.youtube.com/watch?v=39WSoKE1zE4",
    photo:
      "https://i.ytimg.com/vi/39WSoKE1zE4/hq720.jpg?sqp=-oaymwErCNAFEJQDSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLCbsb5gEcFxQG0VGo1WPgMSMOXAsQ",
  },
  {
    id: 2,
    title: "Buried Alive",
    topic: "Baptism",
    date: "2026-10-09",
    speaker: "Pastor Jerry Patalinghug",
    url: "https://www.youtube.com/watch?v=J__hBYxQnTM",
    photo:
      "https://i.ytimg.com/vi/J__hBYxQnTM/hq720.jpg?sqp=-oaymwErCNAFEJQDSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLBmhBpciCEafo14UOYjQgMWzaS9Kg",
  },
  {
    id: 3,
    title: "Living Life to the Fullest",
    topic: "Lifestyle",
    date: "2026-10-10",
    speaker: "Pastor Jerry Patalinghug",
    url: "https://www.youtube.com/watch?v=xtRJD1XgiPA",
    photo:
      "https://i.ytimg.com/vi/xtRJD1XgiPA/hq720.jpg?sqp=-oaymwErCNAFEJQDSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLBetuLAx8jnaDxObOH-1b2Sao9f4w",
  },
  {
    id: 4,
    title: "The Fall of Babylon",
    topic: "Faith",
    date: "2026-10-08",
    speaker: "Pastor Max Dante Obbus",
    url: "https://www.youtube.com/watch?v=X--FsEMu700&list=PLg1pK9yC4hiRSH6p4Mj42xU5gQBN_PCEw&index=3",
    photo:
      "https://i.ytimg.com/vi/X--FsEMu700/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLCCgfbG7G7b0omzIZ8sOaNMoJxZMw",
  },
  {
    id: 5,
    title: "The Mark of The Beast",
    topic: "Faith",
    date: "2026-10-07",
    speaker: "Pastor Max Dante Obbus",
    url: "https://www.youtube.com/watch?v=EYlwcWQHsKA&list=PLg1pK9yC4hiRSH6p4Mj42xU5gQBN_PCEw&index=4",
    photo:
      "https://i.ytimg.com/vi/EYlwcWQHsKA/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLDZ3RTviisFEhn0U_VUhZ4bJ9ZaOw",
  },
  {
    id: 6,
    title: "The Mark of The Beast",
    topic: "Faith",
    date: "2026-10-06",
    speaker: "Pastor Max Dante Obbus",
    url: "https://www.youtube.com/watch?v=gGkQetEUy0o&list=PLg1pK9yC4hiRSH6p4Mj42xU5gQBN_PCEw&index=5",
    photo:
      "https://i.ytimg.com/vi/gGkQetEUy0o/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLBof1fhvMlRINoTCvtfrCVpNogqKw",
  },
  {
    id: 7,
    title: "The Messiah and The Judgement",
    topic: "Faith",
    date: "2026-10-05",
    speaker: "Pastor Abundionito Cayme",
    url: "https://www.youtube.com/watch?v=NKeRehGOjRM&list=PLg1pK9yC4hiRSH6p4Mj42xU5gQBN_PCEw&index=6",
    photo:
      "https://i.ytimg.com/vi/NKeRehGOjRM/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLDnS1qYwi3HVTz8Vrb3BYTcbG80iQ",
  },
  {
    id: 8,
    title: "Rebuilding The Temple",
    topic: "Faith",
    date: "2026-10-03",
    speaker: "Pastor Abundionito Cayme",
    url: "https://www.youtube.com/watch?v=oocp4YEyNe0&list=PLg1pK9yC4hiRSH6p4Mj42xU5gQBN_PCEw&index=7",
    photo:
      "https://i.ytimg.com/vi/oocp4YEyNe0/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLBkEV0o-6pV8_fbN_Lt19H3rTaAXQ",
  },
  {
    id: 9,
    title: "The Mystery of Death",
    topic: "Faith",
    date: "2026-10-04",
    speaker: "Pastor Abundionito Cayme",
    url: "https://www.youtube.com/watch?v=KSKQq75D8Ow&list=PLg1pK9yC4hiRSH6p4Mj42xU5gQBN_PCEw&index=9",
    photo:
      "https://i.ytimg.com/vi/KSKQq75D8Ow/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLCNkHDP1AthQ1XaI0S_VsxVxRbT7g",
  },
  {
    id: 10,
    title: "The Creator Speaks",
    topic: "Faith",
    date: "2026-10-04",
    speaker: "Pastor Abundionito Cayme",
    url: "",
    photo:
      "https://i.ytimg.com/vi/5g5oTpQW7DQ/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLCeT8SW4Jho9CIVrmxF6iXioCJiXg",
  },
  {
    id: 10,
    title: "The War is Over",
    topic: "Faith",
    date: "2026-10-04",
    speaker: "Pastor Abundionito Cayme",
    url: "",
    photo:
      "https://i.ytimg.com/vi/N2rc0TRSKEg/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLAqF_rKFs-PHc5-Ki187g7ift7RDw",
  },
  {
    id: 10,
    title: "Quality Time",
    topic: "Faith",
    date: "2026-10-04",
    speaker: "Pastor Abundionito Cayme",
    url: "",
    photo:
      "https://i.ytimg.com/vi/11u3ZK8-Arc/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLDR7OSSAe2-GYE6RYvggZwP7WXEJg",
  },
  {
    id: 10,
    title: "Hellfire",
    topic: "Faith",
    date: "2026-10-04",
    speaker: "Pastor Abundionito Cayme",
    url: "",
    photo:
      "https://i.ytimg.com/vi/TZN_tL-TQpY/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuAL3GA==&rs=AOn4CLCT3o8xGJrezgMT5UMXMECTlLYbqg",
  },
];

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const norm = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
const fmtDate = (iso) =>
  new Date(iso + "T00:00").toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
const monthKey = (iso) => iso.slice(0, 7);
const monthLabel = (key) =>
  new Date(key + "-01T00:00").toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
  });

const sorters = {
  newest: (a, b) => b.date.localeCompare(a.date),
  oldest: (a, b) => a.date.localeCompare(b.date),
  az: (a, b) => a.title.localeCompare(b.title),
  za: (a, b) => b.title.localeCompare(a.title),
};

const LOGO = "/photos/ntd-logo.jpg";

function ytId(url) {
  try {
    const u = new URL(url);
    return u.hostname === "youtu.be"
      ? u.pathname.slice(1)
      : u.searchParams.get("v");
  } catch {
    return null;
  }
}

// Priority: your own photo, then the YouTube thumbnail, then the NTD logo
function thumbUrl(s) {
  if (s.photo) return s.photo;
  const id = ytId(s.url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : LOGO;
}

/* ---------- Load more settings ---------- */
const PAGE_SIZE = 15; // how many sermons to show at a time
let visibleCount = PAGE_SIZE;

/* ---------- Build filter options from the data ---------- */
[...new Set(sermons.map((s) => s.topic))]
  .sort()
  .forEach((t) => $("topic").add(new Option(t, t)));
[...new Set(sermons.map((s) => monthKey(s.date)))]
  .sort()
  .reverse()
  .forEach((m) => $("month").add(new Option(monthLabel(m), m)));

/* ---------- Render ---------- */
function card(s) {
  const a = document.createElement("a");
  a.className = "sermon";
  a.id = "sermon-" + s.id;
  a.href = s.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute(
    "aria-label",
    `${s.title}, ${s.speaker}, ${fmtDate(s.date)}. Opens on YouTube in a new tab.`,
  );

  const thumb = document.createElement("div");
  thumb.className = "thumb";

  const img = document.createElement("img");
  img.src = thumbUrl(s);
  img.alt = `Thumbnail for ${s.title}`;
  img.loading = "lazy";
  img.onerror = () => {
    // if the photo can't load, show the logo instead
    img.onerror = null;
    img.src = LOGO;
    img.classList.add("fallback");
  };

  const play = document.createElement("span");
  play.className = "play";
  play.textContent = "Watch on YouTube";

  thumb.append(img, play);

  const body = document.createElement("div");
  body.className = "body";
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = s.topic;
  const h3 = document.createElement("h3");
  h3.textContent = s.title;
  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = `${s.speaker} | ${fmtDate(s.date)}`;
  body.append(tag, h3, meta);

  a.append(thumb, body);
  return a;
}

function render() {
  const q = norm($("search").value.trim());
  const topic = $("topic").value;
  const month = $("month").value;

  const list = sermons
    .filter((s) => !topic || s.topic === topic)
    .filter((s) => !month || monthKey(s.date) === month)
    .filter((s) => !q || norm(`${s.title} ${s.topic} ${s.speaker}`).includes(q))
    .sort(sorters[$("sort").value]);

  const shown = list.slice(0, visibleCount);

  $("grid").replaceChildren(...shown.map(card));
  $("empty").hidden = list.length > 0;
  $("grid").hidden = list.length === 0;
  $("loadMore").hidden = shown.length >= list.length;
  $("count").textContent = `Showing ${shown.length} of ${list.length} sermons`;
  $("reset").hidden = !(q || topic || month);
}

function resetFilters() {
  visibleCount = PAGE_SIZE;
  $("search").value = "";
  $("topic").value = "";
  $("month").value = "";
  $("sort").value = "newest";
  render();
  $("search").focus();
}

["input", "change"].forEach((evt) =>
  ["search", "topic", "month", "sort"].forEach((id) =>
    $(id).addEventListener(evt, () => {
      visibleCount = PAGE_SIZE; // go back to the first 15 when filters change
      render();
    }),
  ),
);
$("reset").addEventListener("click", resetFilters);
$("emptyReset").addEventListener("click", resetFilters);

$("loadMore").addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  render();
});

/* If a sermon is picked from the home page (sermons.html?video=1) and it is
   beyond the first 15, load enough sermons so it can be found and highlighted */
const picked = new URLSearchParams(location.search).get("video");
if (picked) {
  const sorted = [...sermons].sort(sorters[$("sort").value]);
  const idx = sorted.findIndex((s) => String(s.id) === picked);
  if (idx >= PAGE_SIZE) {
    visibleCount = Math.ceil((idx + 1) / PAGE_SIZE) * PAGE_SIZE;
  }
}

render();

/* Highlight a sermon chosen on the home page (sermons.html?video=1) */
const pickedCard = picked && $("sermon-" + picked);
if (pickedCard) {
  pickedCard.classList.add("highlight");
  pickedCard.scrollIntoView({ block: "center" });
}

/* ---------- Prayer request ---------- */
// If empty, requests are only saved in this browser (demo mode).
const PRAYER_ENDPOINT = "https://formspree.io/f/xrpeqvez";

const form = $("prayerForm");
const message = $("pMessage");

message.addEventListener("input", () => {
  $("pCount").textContent = `${message.value.length} / 600`;
  if (message.value.trim()) {
    $("pError").textContent = "";
    message.removeAttribute("aria-invalid");
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = $("pResult");
  result.replaceChildren();

  if (message.value.trim().length < 20) {
    $("pError").textContent = "Please write at least 20 characters.";
    message.setAttribute("aria-invalid", "true");
    message.focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));
  data.private = $("pPrivate").checked;
  data.sentAt = new Date().toISOString();

  const button = $("pSubmit");
  button.disabled = true;
  button.textContent = "Sending...";

  const note = document.createElement("p");
  note.className = "notice";
  try {
    if (PRAYER_ENDPOINT) {
      const res = await fetch(PRAYER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
    } else {
      const saved = JSON.parse(localStorage.getItem("prayerRequests") || "[]");
      localStorage.setItem("prayerRequests", JSON.stringify([...saved, data]));
    }
    note.textContent = "Thank you. Your prayer request has been sent.";
    form.reset();
    $("pCount").textContent = "0 / 600";
    $("pPrivate").checked = true;
  } catch {
    note.classList.add("fail");
    note.textContent =
      "Sorry, we could not send your request. Please check your connection and try again.";
  } finally {
    button.disabled = false;
    button.textContent = "Send prayer request";
    result.append(note);
  }
});

const privacyModal = document.getElementById("privacyModal");
const openPrivacyLink = document.getElementById("openPrivacy");
const closePrivacyBtn = document.getElementById("closePrivacy");

openPrivacyLink.addEventListener("click", (e) => {
  e.preventDefault();
  privacyModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closePrivacyBtn.addEventListener("click", () => {
  privacyModal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === privacyModal) {
    privacyModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
