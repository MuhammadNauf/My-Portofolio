/* Portfolio data */
const projects = [
  {
    id: "find-barbershop",
    title: "Find Barbershop",
    subtitle: "Pencarian & peta interaktif lokasi barbershop Pekanbaru",
    theme: "thumb-blue"
  },
  {
    id: "pemetaan-jaringan",
    title: "Pemetaan Jaringan Telkom Akses",
    subtitle: "SIG untuk ODP & ODC — monitoring jaringan fiber",
    theme: "thumb-green"
  },
  {
    id: "media-java",
    title: "Media Pembelajaran Java",
    subtitle: "Materi interaktif dan animasi pembelajaran (Adobe Animate)",
    theme: "thumb-orange"
  },
  {
    id: "perpustakaan",
    title: "Perpustakaan Online",
    subtitle: "Sistem perpustakaan berbasis PHP & MySQL (XAMPP)",
    theme: "thumb-violet"
  },
  {
    id: "pemetaan-wifi",
    title: "Pemetaan WiFi IndiHome",
    subtitle: "Pemetaan pelanggan & titik instalasi WiFi",
    theme: "thumb-red"
  },
  {
    id: "Video Editing",
    title: "Video Editing — Clipp.ID - Riau24Official",
    subtitle: "Breaking news Editing, Podcast, Youtube, Thumbnail",
    theme: "thumb-blue",
    external: true,
    link: "https://www.tiktok.com/@clipper19951?_r=1&_t=ZS-91GuSJiJFrw"
  }
];

/* DOM refs */
const grid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBody = document.getElementById('modalBody');
const switchDesktop = document.getElementById('switchDesktop');
const switchMobile = document.getElementById('switchMobile');
const externalLink = document.getElementById('externalLink');
const closeModalBtn = document.getElementById('closeModal');
const closeModalBottom = document.getElementById('closeModalBottom'); // may be undefined in some markup
const yearEl = document.getElementById('year');

let current = null;
let currentView = 'desktop';

/* add cards */
function createCards(){
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-id', p.id);
    card.innerHTML = `
      <div class="card-top">
        <div class="card-thumb">
          <div class="thumb-box ${p.theme}">${p.title}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="content">
          <h3>${p.title}</h3>
          <p>${p.subtitle}</p>
        </div>
      </div>
      <div class="accent"></div>
    `;
    card.addEventListener('click',()=> openProject(p));
    grid.appendChild(card);
  });
}

/* open modal */
function openProject(p){
  current = p;
  currentView = 'desktop';
  modalTitle.textContent = p.title;
  modalSubtitle.textContent = p.subtitle;
  // external link
  if(p.external){
    externalLink.href = p.link;
    externalLink.classList.remove('hidden');
  } else {
    externalLink.classList.add('hidden');
  }
  // show desktop by default
  renderDesktopMockup(p);
  showModal();
}

/* render desktop mockups - different per project */
function renderDesktopMockup(p){
  modalBody.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'desktop-mockup';

  // tailor content by project id
  if(p.id === 'find-barbershop'){
    container.innerHTML = `
      <div class="desktop-title muted">${p.title} — Desktop View</div>
      <div class="hero-rect" style="background:linear-gradient(135deg,#2563eb,#4f46e5)">Map preview • Search bar • markers</div>
      <div class="box-grid">
        <div class="info-card">Nearest Barbershop<br><small class="muted">1.2 km — Open</small></div>
        <div class="info-card">Rating & Reviews<br><small class="muted">4.7 (120)</small></div>
        <div class="info-card">Quick Actions<br><small class="muted">Booking • Directions</small></div>
      </div>
    `;
  } else if(p.id === 'pemetaan-jaringan'){
    container.innerHTML = `
      <div class="desktop-title muted">${p.title} — Desktop View</div>
      <div class="hero-rect" style="background:linear-gradient(135deg,#059669,#10b981)">Map ODP/ODC • Layer: Gangguan</div>
      <div class="box-grid">
        <div class="info-card">Status: Gangguan<br><small class="muted">ODP-23 — High</small></div>
        <div class="info-card">Petugas Terdekat<br><small class="muted">Teknisi: Rudi</small></div>
        <div class="info-card">Last Updated<br><small class="muted">2 jam lalu</small></div>
      </div>
      <div class="info-blocks">
        <div class="info-card">Filter kecamatan • warna status</div>
        <div class="info-card">Export laporan (CSV/PDF)</div>
      </div>
    `;
  } else if(p.id === 'media-java'){
    container.innerHTML = `
      <div class="desktop-title muted">${p.title} — Desktop View</div>
      <div class="hero-rect" style="background:linear-gradient(135deg,#fb923c,#f97316)">Interactive animation • Timeline • Quiz</div>
      <div class="box-grid">
        <div class="info-card">Lesson 1: Variables<br><small class="muted">03:20</small></div>
        <div class="info-card">Lesson 2: Loops<br><small class="muted">05:10</small></div>
        <div class="info-card">Interactive Quiz<br><small class="muted">10 questions</small></div>
      </div>
    `;
  } else if(p.id === 'perpustakaan'){
    container.innerHTML = `
      <div class="desktop-title muted">${p.title} — Desktop View</div>
      <div class="hero-rect" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)">Catalog • Borrowing • Return</div>
      <div class="box-grid">
        <div class="info-card">Search Books<br><small class="muted">by title, author, ISBN</small></div>
        <div class="info-card">Pengembalian<br><small class="muted">Status: On time</small></div>
        <div class="info-card">Admin Panel<br><small class="muted">CRUD buku & anggota</small></div>
      </div>
    `;
  } else if(p.id === 'pemetaan-wifi'){
    container.innerHTML = `
      <div class="desktop-title muted">${p.title} — Desktop View</div>
      <div class="hero-rect" style="background:linear-gradient(135deg,#ef4444,#fb7185)">Customer map • signal heatmap</div>
      <div class="box-grid">
        <div class="info-card">Modem Baru<br><small class="muted">Installed: 12</small></div>
        <div class="info-card">Ticket queue<br><small class="muted">3 open</small></div>
        <div class="info-card">Coverage Map<br><small class="muted">Area Pekanbaru</small></div>
      </div>
    `;
  } else if(p.id === 'clipper'){
    container.innerHTML = `
      <div class="desktop-title muted">${p.title} — Desktop View</div>
      <div class="hero-rect" style="background:linear-gradient(135deg,#2563eb,#4f46e5)">Video gallery • Highlights • Promo cuts</div>
      <div class="box-grid">
        <div class="info-card">Promo 30s<br><small class="muted">CapCut edit</small></div>
        <div class="info-card">Highlight Reel<br><small class="muted">15 clips</small></div>
        <div class="info-card">Social Link<br><small class="muted">TikTok • YouTube</small></div>
      </div>
    `;
  } else {
    container.innerHTML = `<div class="desktop-title muted">${p.title} — Desktop View</div><div class="hero-rect">Generic preview</div>`;
  }

  modalBody.appendChild(container);
}

/* render mobile mockups */
function renderMobileMockup(p){
  modalBody.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'mobile-mockup';

  if(p.id === 'find-barbershop'){
    container.innerHTML = `
      <div class="mobile-hero" style="background:linear-gradient(135deg,#2563eb,#4f46e5)">Find Barbershop</div>
      <div style="margin-top:12px; width:100%">
        <div style="background:#111;padding:10px;border-radius:8px;margin-bottom:8px">Search bar • ketik lokasi</div>
        <div style="background:#111;padding:10px;border-radius:8px;margin-bottom:8px">Barbershop A • 0.8 km</div>
        <div style="background:#111;padding:10px;border-radius:8px">Barbershop B • 1.2 km</div>
      </div>
    `;
  } else if(p.id === 'pemetaan-jaringan'){
    container.innerHTML = `
      <div class="mobile-hero" style="background:linear-gradient(135deg,#059669,#10b981)">Pemetaan Jaringan</div>
      <div style="margin-top:12px;width:100%">
        <div style="background:#111;padding:10px;border-radius:8px;margin-bottom:8px">ODP-23 • Gangguan</div>
        <div style="background:#111;padding:10px;border-radius:8px">Tindakan: Kirim teknisi</div>
      </div>
    `;
  } else if(p.id === 'media-java'){
    container.innerHTML = `
      <div class="mobile-hero" style="background:linear-gradient(135deg,#fb923c,#f97316)">Belajar Java</div>
      <div style="margin-top:12px;width:100%">
        <div style="background:#111;padding:10px;border-radius:8px;margin-bottom:8px">Lesson 1: Variables</div>
        <div style="background:#111;padding:10px;border-radius:8px">Quiz: 5 soal</div>
      </div>
    `;
  } else if(p.id === 'perpustakaan'){
    container.innerHTML = `
      <div class="mobile-hero" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)">Perpustakaan</div>
      <div style="margin-top:12px;width:100%">
        <div style="background:#111;padding:10px;border-radius:8px;margin-bottom:8px">Cari buku...</div>
        <div style="background:#111;padding:10px;border-radius:8px">Buku tersedia: 12</div>
      </div>
    `;
  } else if(p.id === 'pemetaan-wifi'){
    container.innerHTML = `
      <div class="mobile-hero" style="background:linear-gradient(135deg,#ef4444,#fb7185)">Pemetaan WiFi</div>
      <div style="margin-top:12px;width:100%">
        <div style="background:#111;padding:10px;border-radius:8px;margin-bottom:8px">Pelanggan baru • 3</div>
        <div style="background:#111;padding:10px;border-radius:8px">Ticket: #452</div>
      </div>
    `;
  } else if(p.id === 'clipper'){
    container.innerHTML = `
      <div class="mobile-hero" style="background:linear-gradient(135deg,#2563eb,#4f46e5)">Clipp.ID • TikTok</div>
      <div style="margin-top:12px;width:100%">
        <div style="background:#111;padding:10px;border-radius:8px;margin-bottom:8px">Clip 1 • 00:30</div>
        <div style="background:#111;padding:10px;border-radius:8px">Clip 2 • 01:10</div>
      </div>
    `;
  } else {
    container.innerHTML = `<div class="mobile-hero">Mobile preview</div>`;
  }

  modalBody.appendChild(container);
}

/* show/hide modal */
function showModal(){
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.documentElement.style.overflow = 'hidden';
}
function hideModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.documentElement.style.overflow = 'auto';
}

/* switch handlers */
switchDesktop.addEventListener('click', ()=>{
  if(currentView === 'desktop') return;
  currentView = 'desktop';
  switchDesktop.classList.add('active');
  switchMobile.classList.remove('active');
  renderDesktopMockup(current);
});
switchMobile.addEventListener('click', ()=>{
  if(currentView === 'mobile') return;
  currentView = 'mobile';
  switchMobile.classList.add('active');
  switchDesktop.classList.remove('active');
  renderMobileMockup(current);
});

/* close modal interactions */
document.getElementById('modalBackdrop').addEventListener('click', hideModal);
closeModalBtn.addEventListener('click', hideModal);
const closeBottom = document.getElementById('closeModalBottom');
if(closeBottom) closeBottom.addEventListener('click', hideModal);

/* init */
createCards();
yearEl.textContent = new Date().getFullYear();

/* accessibility: escape to close */
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && modal.classList.contains('show')) hideModal();
});

