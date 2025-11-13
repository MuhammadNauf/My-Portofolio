// === script.js ===

// Data proyek
const projects = [
  {
    id: "Spotify UI/UX",
    title: "Spotify App Redesign",
    subtitle: "Figma Design • Music Interface",
  },
  {
    id: "Web GIS",
    title: "Telkom Akses Pekanbaru GIS",
    subtitle: "Pemetaan ODP & ODC",
  },
  {
    id: "Video Editing",
    title: "Video Editing — Clipp.ID - Riau24Official",
    subtitle: "Vidio Promo • TikTok Highlights",
    link: "https://www.tiktok.com/@clipper19951?_r=1&_t=ZS-91GuSJiJFrw",
  },
];

// === Generate project cards ===
const projectsGrid = document.getElementById("projectsGrid");
projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-thumb"></div>
    <h3>${p.title}</h3>
    <p class="muted">${p.subtitle}</p>
  `;
  card.addEventListener("click", () => openProject(p));
  projectsGrid.appendChild(card);
});

// === Modal elements ===
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBackdrop = document.getElementById("modalBackdrop");
const externalLink = document.getElementById("externalLink");

// Tutup modal
document.getElementById("closeModal").onclick = closeModal;
document.getElementById("closeModalBottom").onclick = closeModal;
modalBackdrop.onclick = closeModal;

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  modalBody.innerHTML = "";
}

// === Open project and render ===
function openProject(p) {
  modalTitle.textContent = p.title;
  modalSubtitle.textContent = p.subtitle;

  // Jika punya link TikTok, tampilkan tombol
  if (p.link) {
    externalLink.classList.remove("hidden");
    externalLink.href = p.link;
  } else {
    externalLink.classList.add("hidden");
  }

  // Render konten project
  renderDesktopMockup(p);

  modal.setAttribute("aria-hidden", "false");
}

// === Render konten project ===
function renderDesktopMockup(p) {
  if (p.id === "Spotify UI/UX") {
    modalBody.innerHTML = `
      <div class="hero-rect" style="background:linear-gradient(135deg,#1db954,#191414)">
        Spotify UI Redesign • Figma
      </div>
      <div class="box-grid">
        <div class="info-card">Home Page<br><small class="muted">Playlist preview</small></div>
        <div class="info-card">Now Playing<br><small class="muted">Music controls</small></div>
        <div class="info-card">Library<br><small class="muted">Albums & artists</small></div>
      </div>
    `;
  }

  else if (p.id === "Web GIS") {
    modalBody.innerHTML = `
      <div class="hero-rect" style="background:linear-gradient(135deg,#16a34a,#15803d)">
        Pemetaan ODP & ODC Pekanbaru
      </div>
      <div class="box-grid">
        <div class="info-card">Leaflet Map<br><small class="muted">Interactive GIS</small></div>
        <div class="info-card">ODP List<br><small class="muted">CRUD Functionality</small></div>
        <div class="info-card">Technician Dashboard<br><small class="muted">Real-time Updates</small></div>
      </div>
    `;
  }

  else if (p.id === "Video Editing") {
    modalBody.innerHTML = `
      <div class="hero-rect" style="background:linear-gradient(135deg,#2563eb,#4f46e5)">
        Video gallery • Highlights • Promo cuts
      </div>
      <div class="video-wrapper" style="margin:20px auto; display:flex; justify-content:center;">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/9nVgx5Kr0AQ?autoplay=1&mute=1&si=RJJPyaODWVJ1sD7f"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <div class="box-grid">
        <div class="info-card">Promo 30s<br><small class="muted">CapCut edit</small></div>
        <div class="info-card">Highlight Reel<br><small class="muted">15 clips</small></div>
        <div class="info-card">Social Link<br><small class="muted">TikTok • YouTube</small></div>
      </div>
    `;
  }

  else {
    modalBody.innerHTML = `<p>Pilih proyek lain untuk melihat detailnya.</p>`;
  }
}

// === Tahun otomatis di footer ===
document.getElementById("year").textContent = new Date().getFullYear();
