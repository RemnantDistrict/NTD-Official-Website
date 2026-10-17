// Used by BOTH index.html (album cards) and the album pages (photos).
// It checks which page it is on and does the right thing.

const MAX_PREVIEW = 4;

// index.html: one card per album
function renderAlbumCards(grid) {
  albums.forEach((album) => {
    const total = album.photos.length;
    const remaining = total - MAX_PREVIEW;

    const card = document.createElement("a");
    card.className = "album-card";
    card.href = `galleryFiles/${album.id}.html`; // baptism -> baptism.html

    const preview = document.createElement("div");
    preview.className = "album-preview";

    album.photos.slice(0, MAX_PREVIEW).forEach((photo, i) => {
      const cell = document.createElement("div");
      cell.className = "cell";

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt || "";
      img.loading = "lazy";
      cell.appendChild(img);

      // +N overlay on the 4th image when the album has more photos
      if (i === MAX_PREVIEW - 1 && remaining > 0) {
        const overlay = document.createElement("div");
        overlay.className = "more-overlay";
        overlay.textContent = `+${remaining}`;
        cell.appendChild(overlay);
      }
      preview.appendChild(cell);
    });

    const info = document.createElement("div");
    info.className = "album-info";

    const name = document.createElement("h3");
    name.className = "album-name";
    name.textContent = album.name;

    const count = document.createElement("p");
    count.className = "album-count";
    count.textContent = `${total} ${total === 1 ? "image" : "images"}`;

    info.append(name, count);
    card.append(preview, info);
    grid.appendChild(card);
  });
}

// ---------- Album page: all photos + lightbox ----------
function renderAlbumPage(albumId) {
  const album = albums.find((a) => a.id === albumId);
  const titleEl = document.getElementById("albumTitle");
  const countEl = document.getElementById("albumCount");
  const photosEl = document.getElementById("albumPhotos");

  if (!album) {
    titleEl.textContent = "Album not found";
    countEl.textContent = `No album with the id "${albumId}" in albums.js.`;
    return;
  }

  document.title = album.name;
  titleEl.textContent = album.name;
  const n = album.photos.length;
  countEl.textContent = `${n} ${n === 1 ? "image" : "images"}`;

  // Build the lightbox here so album pages stay tiny
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.innerHTML = `
    <button class="lb-btn lb-close" aria-label="Close">&times;</button>
    <button class="lb-btn lb-prev" aria-label="Previous photo">&#8249;</button>
    <img src="" alt="">
    <button class="lb-btn lb-next" aria-label="Next photo">&#8250;</button>
    <div class="lb-count"></div>
  `;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector("img");
  const lbCount = lightbox.querySelector(".lb-count");
  let current = 0;

  function showPhoto(index) {
    current = (index + n) % n;
    lbImg.src = album.photos[current].src;
    lbImg.alt = album.photos[current].alt || "";
    lbCount.textContent = `${current + 1} / ${n}`;
  }
  function openLightbox(index) {
    showPhoto(index);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  lightbox.querySelector(".lb-close").addEventListener("click", closeLightbox);
  lightbox
    .querySelector(".lb-prev")
    .addEventListener("click", () => showPhoto(current - 1));
  lightbox
    .querySelector(".lb-next")
    .addEventListener("click", () => showPhoto(current + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPhoto(current - 1);
    if (e.key === "ArrowRight") showPhoto(current + 1);
  });

  album.photos.forEach((photo, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "photo";
    btn.setAttribute("aria-label", `Open photo ${i + 1} of ${n}`);

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || "";
    img.loading = "lazy";
    btn.appendChild(img);

    btn.addEventListener("click", () => openLightbox(i));
    photosEl.appendChild(btn);
  });
}

// ---------- Run ----------
const albumGrid = document.getElementById("albumGrid");
if (albumGrid) renderAlbumCards(albumGrid);

if (document.body.dataset.album) renderAlbumPage(document.body.dataset.album);
