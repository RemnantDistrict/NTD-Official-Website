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
      photo:
        "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/838910052_1675457767485150_1031739331196364065_n.jpg?stp=dst-jpg_tt6&cstp=mx2041x2048&ctp=s2041x2048&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFt3Z88d-MaRN0rgdpisWijengG6U_ACZF6eAbpT8AJkf3DHpo6i5lqmgFfHOq4vkdV2kwFEB0DTnpkSjuSAg8k&_nc_ohc=ydKrSdy-bZUQ7kNvwHr985y&_nc_oc=AdqerO7TNah_s4nl3B741XDikVZAE49cYXTcl472ZLnKlxkGxYyRNdvltiUo5lBgHq_rYqhHQ0JCihVhBClLeLt4&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=PNol3wFWq9157FauKjkcEA&_nc_ss=7b2a8&oh=00_AQMr1hbqcVeaPVwNHrby7TV_yRTqSWJ-0L55ZMANjgvMyg&oe=6AD3EBED",
    },
    {
      name: "Gladys Jongay",
      position: "District Treasurer",
      photo:
        "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/801200339_29004223205845380_2565040816093357390_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGRAhRAGX3idUKyvNbDfNa8jzpfg7QwpDOPOl-DtDCkM5KSy8FM_uORGpEBG_XZDhBPAdvbLuSQG4QxFUFRD4FW&_nc_ohc=MC-kTrDL6aoQ7kNvwG-UYzS&_nc_oc=AdrKsynptjWl72R9ACDx2Lt15_Clx4laSRWJbnD3Oy__pE9sAuUbOmaIo0NoYL6aQpHHQ3Toukgw_Va2QIZTBE2r&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=pNs9WnRjJ23UNsNBSvYoTA&_nc_ss=7b2a8&oh=00_AQNYCSM5cPEp7jw6cjrgdda44O1yKVzBfLzOvyXM9_RgUQ&oe=6ACEAE98",
    },
    {
      name: "Francis Noe",
      position: "District Youth Leader",
      photo:
        "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/626874935_26273689202319906_5955990311497092702_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGj5o7E7DU_HGgU5AJm_hUC0gSxpH5OpzjSBLGkfk6nONaZa_tf1QVLJDl3yfD2o8tZx29lYZKexVbFrv-K4KQW&_nc_ohc=II-8edem7dwQ7kNvwH5LlKX&_nc_oc=Adrvxc1JmRdMiWWwVuh7qO5DEOXRnTPaz2arXOBzW_mQlFA7aDd7REzEHTDU_KFCHJSi4ykJiyhFnTE5AO_JFoP2&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=1PXeVTxFNY2RHnED8WoiuA&_nc_ss=7b2a8&oh=00_AQPMYwm08L6BfemwVpQ-pNeR01KX6ynr7VnewYpNL-emVA&oe=6AD404B4",
    },
  ], //For District Officers
  [
    { name: "Maximo Famaran", position: "San Agustin Elder" },
    { name: "Danny Angelino", position: "Binongaan Elder" },
    { name: "Job Barolo", position: "Camantaya Elder" },
  ], //For Elders in San Agustin
  [
    {
      name: "Nenette Lorenzo",
      position: "Concepcion Norte Elder",
      photo:
        "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/473054147_1175592760650054_6876257426040782697_n.jpg?stp=dst-jpg_tt6&cstp=mx750x750&ctp=s750x750&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGtNoSwkWbBCWke1uEAVk5JaaofERfxdq9pqh8RF_F2r0tdWFy89iB2Mxp_Qkhy2fJvX5XQlKZ2-9BU-mEuRzgI&_nc_ohc=ns7yc_hvpCsQ7kNvwE6at5_&_nc_oc=AdoKd5G0BzxEUXtv1pudzC6yfuOhmdT-PwmJrIuug629_q1jjGPk-HNp9Q9Yi8LvUa_bfqiqXtfCZfmm1_tHqmlT&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=erdHAFs3ohN11wzUaRz2dw&_nc_ss=7b2a8&oh=00_AQNclqxi1gui6jzibzUCSo8SdmX-y-kKw3ctrY5OshlhFg&oe=6AD3F6D0",
    },
    {
      name: "Gieraldine Visca",
      position: "Concepcion Sur Elder",
      photo:
        "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/463618413_4693876934170961_7812467560921334839_n.jpg?stp=dst-jpg_tt6&cstp=mx953x960&ctp=s953x960&_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeENT45INBlK5kh0VEFojU980vQbLQKRjrHS9BstApGOsdZ8d_CsJIrGRvn9aYyXMWRV67_9APmAMzTgB6R2VXtu&_nc_ohc=3VM960eIEIMQ7kNvwHpdDtz&_nc_oc=AdoMe8GDkA8FpODVV4Xoz9XtyRr9L6upHEhmuUuYqT9BUuTNfoYqc9Bs8MPinyE7FM-yujexNonyyn25eY4Nj3cX&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=ns8lYvygwYLf54wKGrEh-Q&_nc_ss=7b2a8&oh=00_AQO8d1O4uLVCdocOQBw0joYIb3EWE1LIlVdZOz-yJXH3Yw&oe=6AD407FF",
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
      photo:
        "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-1/665377716_1588111332472749_3039718129364260468_n.jpg?stp=dst-jpg_tt6&cstp=mx1098x1101&ctp=s100x100&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE6YUkbTbpEnIQxt6FtLCz2AeNUFB_gOAIB41QUH-A4AoI_C5viKum8UBS2rLjr1BlHaKMzXK95xjP8AaiFcHzO&_nc_ohc=MTDc_IgTxVMQ7kNvwFhLAVR&_nc_oc=AdoV-dAUab_r8HxKBob3tDU1V0gcHoOFQ4Yim7ZHu31xKXTd42akW6QJHjEr1UsBN6dquRdYo6xb0biMM6G45zIn&_nc_zt=24&_nc_ht=scontent-mnl3-1.xx&_nc_gid=2ixp4uVnXO-iVg9BYfsaCA&_nc_ss=7b2a8&oh=00_AQOBmjzXiMFNRNyWr-GSr_xF59w98wppjo2nPELNimBh8w&oe=6AD808AA",
    },
  ],
  [
    {
      name: "Arnold Bance",
      position: "Vice President Social",
      photo:
        "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/779262023_2371997223338114_5904961527315502627_n.jpg?stp=dst-jpg_tt6&cstp=mx812x820&ctp=s812x820&_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF70iWW3MNI8_P4HwpzFjJN-nyFfv4rjbL6fIV-_iuNsue-C3G1vLtoEQf6gAXMcyOn_fgPGB4BH2nkMX7c62rd&_nc_ohc=rgB8iu4L0pcQ7kNvwGQ1bE6&_nc_oc=Ado3fDPtcl1r8jcjCdqF3z3JrEhLCpAxRjUXwvIs_XDrTy4YmWR_T0mlrpdQO33xoaMh_Dv5TOlCw9ISNAZn-eNr&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=KBu1wRrNVBROW7bRmZKH0g&_nc_ss=7b2a8&oh=00_AQOlZxdnqIWaUSFsLo2B4fYOOhMfZnl6IdFTXfIDy3lVLQ&oe=6AD7E270",
    },
    { name: "Aaron Visca", position: "Vice President Religious" },
    { name: "Vaniah Angelino", position: "Secretary" },
    {
      name: "Willen Rose Molina",
      position: "Treasurer",
      photo:
        "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-6/825327338_122226112598367251_6157192495496152244_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEZ24pwvto56p-3d0bIZDdEG68J7MRyxWwbrwnsxHLFbNJTo-c6657C2UX0zRVes3BdIUba_09j4xDvv6WJzi7l&_nc_ohc=b0gpYM_MvEMQ7kNvwFzHBUj&_nc_oc=AdpCs0Sjnci7Vn5Ysx1DslfpcGVC1el88mQy0Kd1mxFmFvwdC1OldbCmHspFedgJy3Ej8_siol3rixlfKYbTACHG&_nc_zt=23&_nc_ht=scontent-mnl3-1.xx&_nc_gid=Szt8mN19zbHePolaYUOZvA&_nc_ss=7b2a8&oh=00_AQMKLlQGif6vb0mksX_u5tmu8DY8ht2akwqjKVgT7if7DQ&oe=6AD80C19",
    },
  ],
  [
    {
      name: "Veronica Basa",
      position: "Church PIO",
      photo:
        "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-1/782877943_122144019981346865_8885606365774409219_n.jpg?stp=dst-jpg_tt6&cstp=mx1464x1472&ctp=s100x100&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHYLMxDRKN-jCaUbXKPECDt4GvhI8Cph3nga-EjwKmHeTLWfRC8ifOBMTau3PPdyxUONXSdTAs_XQ3N9Iysa5S7&_nc_ohc=CZL0sw2IJWkQ7kNvwEKfVp4&_nc_oc=AdrPWjZWCRFxh98PR2WViEwWps4cHiEW5hFkzgYGaVK0K5ngOu6ZFqqtmIk2o9nmgZYR4_mrzZeqJ9iGszxmQeD_&_nc_zt=24&_nc_ht=scontent-mnl3-1.xx&_nc_gid=edbEIbt4INkX89C4pipoew&_nc_ss=7b2a8&oh=00_AQNzY8VMr8xQHgd-oGqSiemPPeUK0faggTfPIKcrO4xToQ&oe=6AD7EF99",
    },
    { name: "April Ganoria", position: "Church PIO" },
    { name: "Samchell Amoroto", position: "Church PIO" },
    { name: "Jayzlaire Ramirez", position: "Church PIO" },
    { name: "Jhavin Ramal", position: "Church PIO" },
    { name: "Krisha Mortel", position: "Church PIO" },
  ],
];

const orgCharts = { ntd: ntdOrgChart, pcm: pcmOrgChart };

const events = [
  {
    name: "Pathfinder Camping 2026",
    location: "San Agustin, Romblon",
    date: "2026-10-30 - 2026-11-02",
    theme: "Be prepared. Be adventurous. Be closer to God.",
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
    list.append(el("p", { className: "empty", text: "No announcements yet." }));
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