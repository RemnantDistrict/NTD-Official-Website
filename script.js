"use strict";

/* NTD Officers */

const PLACEHOLDER_PHOTO = "photos/default/download.jpg";

const ntdOrgChart = [
  [
    {
      name: "Pastor Raymun Fajilan",
      position: "District Pastor",
      photo: "photos/default/pastor-profile.jpg",
    },
  ], //District Pastor
  [
    {
      name: "Joe Mutia",
      position: "District President & San Agustin Elder",
      photo: "photos/default/mutia.jpg",
    },
  ], //District President
  [
    {
      name: "Rommel Mallorca",
      position: "District Vice President & Sugod Elder",
    },
    {
      name: "John Brian Roldan",
      position: "District Vice President & San Agustin Elder",
      photo: "photos/default/roldan.jpg",
    },
    {
      name: "Chona Morales",
      position: "District Secretary & San Agustin Elder",
      photo: "photos/default/chona.jpg"
    },
    {
      name: "Gladys Jongay",
      position: "District Treasurer",
      photo: "photos/default/gladys.jpg"
    },
    {
      name: "Francis Noe",
      position: "District Youth Leader",
      photo: "photos/default/francis.jpg"
    },
  ], //For District Officers
  [
    { name: "Maximo Famaran", position: "San Agustin Elder" },
    { name: "Danny Angelino", position: "Binongaan Elder" },
    { name: "Hermy Marollano", position: "Camantaya Elder" },
    { name: "Samson Amoroto", position: "Camantaya Elder" },
  ], //For Elders in San Agustin
  [
    {
      name: "Nenette Lorenzo",
      position: "Concepcion Norte Elder",
    },
    {
      name: "Geraldine Visca",
      position: "Concepcion Sur Elder",
      photo: "photos/default/geraldine.jpg"
    },
    { name: "Daniel Rio", position: "Concepcion Sur Elder" },
    {
      name: "Jester Francisco",
      position: "Paroyhog Elder",
      photo: "photos/default/jester.jpg",
    },
  ], //For Elders in Sta. Maria
];

//For PCM Officers
const pcmOrgChart = [
  [
    {
      name: "Winpa Garachico",
      position: "President",
    },
  ],
  [
    {
      name: "Arnold Bance",
      position: "Vice President Social",
    },
    { name: "Aaron Visca", position: "Vice President Religious" },
    { name: "Vaniah Angelino", position: "Secretary" },
    {
      name: "Willen Rose Molina",
      position: "Treasurer",
    },
  ],
  [
    {
      name: "Veronica Basa",
      position: "Church PIO",
    },
    { name: "April Ganoria", position: "Church PIO", photos: "/photos/default/april.jpg"},
    { name: "Samchell Amoroto", position: "Church PIO" },
    { name: "Jayzlaire Ramirez", position: "Church PIO" },
    { name: "Jhavin Ramal", position: "Church PIO" },
    { name: "Krisha Mortel", position: "Church PIO"},
  ],
];

const orgCharts = { ntd: ntdOrgChart, pcm: pcmOrgChart };

const events = [
  {
    name: "Remnant Fellowship",
    location: "Paroyhog, Sta. Maria, Romblon",
    date: "2026-10-24",
    theme: "Called, Committed, Commended",
  },
  {
    name: "Pathfinder Camping 2026",
    location: "Dubduban, San Agustin, Romblon",
    date: "2026-10-30 - 2026-11-02",
    theme: "Be prepared. Be adventurous. Be closer to God.",
  },
  {
    name: "Election of Church Officers",
    location: "All Churches",
    date: "2026-11-07",
  },
  {
    name: "District Pastor Crusade",
    location: "Sugod, San Agustin, Romblon",
    date: "2026-11-08 - 2026-11-14",
  },
];

const announcements = [
  // {
  //     title: "Change of Venue for NTD-Wide Fellowship",
  //     important: true,
  //     posted: "2026-09-29",
  //     author: "Pastor Raymun Fajilan",
  // },
];


(function () {
    const el = document.getElementById("countdown");
    if (!el) return;
    const target = new Date(el.dataset.date).getTime();

    function tick() {
        const diff = target - Date.now();
        if (diff <= 0) { el.textContent = "Happening now 🎉"; return; }
        const d = Math.floor(diff / 864e5);
        const h = Math.floor((diff % 864e5) / 36e5);
        const m = Math.floor((diff % 36e5) / 6e4);
        el.textContent = d > 0 ? `${d}d ${h}h ${m}m to go` : `${h}h ${m}m to go`;
    }
    tick();
    setInterval(tick, 60000);
})();

const MAX_VISIBLE = 4;

// Helpers

const $ = (selector) => document.querySelector(selector);

function el(tag, { className, text, attrs } = {}, children = []) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  Object.entries(attrs ?? {}).forEach(([key, value]) =>
    node.setAttribute(key, value),
  );
  node.append(...children);
  return node;
}

const formatDate = (iso, options) =>
  new Date(iso).toLocaleDateString("en-PH", options);

const dateOnly = { year: "numeric", month: "long", day: "numeric" };

// Renderers

function renderOrgChart(key = "ntd") {
  const root = $("#orgChartRoot");
  root.replaceChildren();

  orgCharts[key].forEach((row) => {
    const rowEl = el("div", { className: "orgRow" });
    row.forEach(({ name, position, photo }) => {
      const vacant = !name;
      rowEl.append(
        el("div", { className: `officer${vacant ? " vacant" : ""}` }, [
          el("img", {
            attrs: {
              src: photo ?? PLACEHOLDER_PHOTO,
              alt: vacant ? "" : `Photo of ${name}`,
              loading: "lazy",
            },
          }),
          el("p", {
            className: "name",
            text: vacant ? "To be announced" : name,
          }),
          el("p", { className: "position", text: position }),
        ]),
      );
    });
    root.append(rowEl);
  });
}

function setupOrgTabs() {
  const tabs = document.querySelectorAll(".orgTab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on);
      });
      renderOrgChart(tab.dataset.chart);
      setupImageSkeletons();
    });
  });
}

function renderEvents() {
  const list = $("#eventList");
  const now = new Date();
  const startOf = (event) => new Date(event.date.split(" - ")[0]);

  const upcoming = events
    .filter((event) => startOf(event) >= now)
    .sort((a, b) => startOf(a) - startOf(b));

  if (!upcoming.length) {
    list.replaceWith(
      el("p", {
        className: "empty",
        text: "No upcoming events. Please check back soon.",
      }),
    );
    return;
  }

  upcoming.forEach(({ name, location, date, theme }) => {
    const [start, end] = date.split(" - ");
    const dateString = end
      ? `${formatDate(start, dateOnly)} to ${formatDate(end, dateOnly)}`
      : formatDate(start, dateOnly);

    list.append(
      el("article", { className: "eventCard" }, [
        el("h3", { text: name }),
        el("p", { text: `Location: ${location}` }),
        el("p", { text: `When: ${dateString}` }),
        el("p", { text: `Theme: "${theme}"` }),
      ]),
    );
  });

  const firstStart = upcoming[0].date.split(" - ")[0];
  $("#nextEvent").textContent =
    `${upcoming[0].name} - ${formatDate(firstStart, dateOnly)}`;
}

function renderAnnouncements() {
  const list = $("#announcementList");

  if (!announcements.length) {
    list.append(el("p", { className: "empty", text: "Check back soon for updates!" }));
    return;
  }

  const sorted = [...announcements].sort(
    (a, b) => new Date(b.posted) - new Date(a.posted),
  );
  sorted.forEach(({ title, important, posted, author }) =>
    list.append(
      el("article", { className: "announcement" }, [
        ...(important
          ? [el("span", { className: "tag", text: "Important" })]
          : []),
        el("h3", { text: title }),
        el("small", { text: `Posted ${formatDate(posted, dateOnly)}` }),
        el("small", { text: `By ${author}` }),
      ]),
    ),
  );

  $("#latestAnnouncement").textContent = sorted[0].title;
}

/* Gallery + lightbox */

let currentPhoto = 0;
let lastFocused = null;

function renderGallery() {
  const grid = $("#galleryGrid");

  if (!galleryPhotos.length) {
    grid.replaceWith(el("p", { className: "empty", text: "No photos yet." }));
    return;
  }

  const remaining = galleryPhotos.length - MAX_VISIBLE;

  galleryPhotos.slice(0, MAX_VISIBLE).forEach((photo, i) => {
    const children = [
      el("img", { attrs: { src: photo.src, alt: photo.alt, loading: "lazy" } }),
    ];

    // Only the last visible photo shows "+N"
    if (i === MAX_VISIBLE - 1 && remaining > 0) {
      children.push(
        el("span", { className: "moreOverlay", text: `+${remaining}` }),
      );
    }

    const item = el(
      "button",
      {
        className: "galleryItem",
        attrs: {
          type: "button",
          "aria-label": `Open photo ${i + 1} of ${galleryPhotos.length}`,
        },
      },
      children,
    );

    item.addEventListener("click", () => openLightbox(i));
    grid.append(item);
  });
}

function showPhoto(index) {
  const total = galleryPhotos.length;
  currentPhoto = (index + total) % total;
  $("#lbImg").src = galleryPhotos[currentPhoto].src;
  $("#lbImg").alt = galleryPhotos[currentPhoto].alt;
  $("#lbCount").textContent = `${currentPhoto + 1} / ${total}`;
}

function openLightbox(index) {
  lastFocused = document.activeElement;
  showPhoto(index);
  $("#lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
  $("#lbClose").focus();
}

function closeLightbox() {
  $("#lightbox").classList.remove("open");
  document.body.style.overflow = "";
  lastFocused?.focus();
}

function setupLightbox() {
  const box = $("#lightbox");

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => showPhoto(currentPhoto - 1));
  $("#lbNext").addEventListener("click", () => showPhoto(currentPhoto + 1));
  box.addEventListener("click", (e) => e.target === box && closeLightbox());

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPhoto(currentPhoto - 1);
    if (e.key === "ArrowRight") showPhoto(currentPhoto + 1);
  });

  // Swipe on phones
  let startX = 0;
  box.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), {
    passive: true,
  });
  box.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) showPhoto(currentPhoto + (dx < 0 ? 1 : -1));
  });
}

/* Mobile menu */

function setupMenu() {
  const sidebar = $("#sidebar");
  const toggle = $("#menuToggle");

  const setOpen = (open) => {
    sidebar.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () =>
    setOpen(!sidebar.classList.contains("open")),
  );
  sidebar.addEventListener(
    "click",
    (e) => e.target.closest("a") && setOpen(false),
  );
  document.addEventListener(
    "keydown",
    (e) => e.key === "Escape" && setOpen(false),
  );

  // Tap anywhere outside the sidebar to close it (the menu button is hidden while open)
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      setOpen(false);
    }
  });
}

/* Highlight the current section in the sidebar */

function setupActiveLink() {
  const links = new Map(
    [...document.querySelectorAll("#sidebar nav a[href^='#']")].map((a) => [
      a.getAttribute("href").slice(1),
      a,
    ]),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .forEach((entry) => {
          links.forEach((a) => a.classList.remove("active"));
          links.get(entry.target.id)?.classList.add("active");
        });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

/* Skeleton loading */

// Shimmer on every image until it has loaded
function setupImageSkeletons() {
  document.querySelectorAll("img:not(#lbImg)").forEach((img) => {
    if (img.complete && img.naturalWidth > 0) return; // already loaded

    img.classList.add("skel");
    const done = () => img.classList.remove("skel");
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
}

// Full-page skeleton: stays at least 0.8s
function setupPageSkeleton() {
  const overlay = $("#pageSkeleton");
  if (!overlay) return;

  const MIN_MS = 800;
  const MAX_MS = 7000;
  const started = performance.now();

  const heroImage = new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = "photos/image.png";
  });

  const pageLoaded =
    document.readyState === "complete"
      ? Promise.resolve()
      : new Promise((resolve) =>
          window.addEventListener("load", resolve, { once: true }),
        );

  const timeout = new Promise((resolve) => setTimeout(resolve, MAX_MS));

  Promise.race([Promise.all([heroImage, pageLoaded]), timeout]).then(() => {
    const wait = Math.max(0, MIN_MS - (performance.now() - started));
    setTimeout(() => {
      overlay.classList.add("done");
      document.body.classList.remove("isLoading");
      setTimeout(() => overlay.remove(), 500);
    }, wait);
  });
}

function showGreeting() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const todayKey = now.toDateString() + "-greeted";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.endsWith("-greeted") && key !== todayKey) {
      localStorage.removeItem(key);
      i--;
    }
  }

  if (localStorage.getItem(todayKey)) return;

  let message = "";

  if ((day === 5 && hour >= 18) || (day === 6 && hour < 18)) {
    message = "Happy Sabbath Brothers and Sisters in Christ";
  } else if (day === 5 && hour >= 12 && hour < 18) {
    message = "Happy Preparation Day! Let's Prepare for the upcoming Sabbath";
  } else if (day === 3) {
    message = "Happy Midweek! See you in Church";
  }

  if (message) {
    alert(message);
    localStorage.setItem(todayKey, "1");
  }
}

const phrases = [
  "Mission for All",
  "All Things New",
  "Hope Starts Here"
];

const textElement = document.getElementById("typewriterText");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseAfterType = 2500;
const pauseAfterDelete = 500;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  charIndex += isDeleting ? -1 : 1;
  textElement.textContent = currentPhrase.substring(0, charIndex);

  let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentPhrase.length) {
    nextDelay = pauseAfterType;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    nextDelay = pauseAfterDelete;
  }

  setTimeout(typeEffect, nextDelay);
}

document.addEventListener("DOMContentLoaded", typeEffect)

/* Init */

renderOrgChart();
setupOrgTabs();
renderEvents();
renderAnnouncements();
setupImageSkeletons();
setupPageSkeleton();
setupMenu();
setupLightbox();
setupActiveLink();
showGreeting();
