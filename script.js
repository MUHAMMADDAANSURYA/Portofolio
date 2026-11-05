/* ===== EDIT DI SINI: isi link kontak. Kosongkan ("") jika belum ada. ===== */
const CONTACT = [
  { label: "Email",     href: "mailto:daansurya82@gmail.com" },
  { label: "GitHub",    href: "https://github.com/MUHAMMADDAANSURYA" },
  { label: "LinkedIn",  href: "" },   // contoh: "https://linkedin.com/in/username"
  { label: "Instagram", href: "https://instagram.com/daansurya_" },
  { label: "WhatsApp",  href: "https://wa.me/6285876274671" }
];

const SKILLS = [
  ["Backend Development", ["Google Apps Script","JavaScript","API Development","Backend Logic","Authentication","Role-Based Access","System Integration"]],
  ["Web Development", ["HTML","CSS","JavaScript","Responsive Design","Landing Page","Business Website","Portfolio Website"]],
  ["Google Workspace", ["Google Apps Script","Google Sheets","Google Forms","Google Drive","Workflow Automation"]],
  ["Artificial Intelligence", ["Python","YOLOv11","OpenCV","Computer Vision","Google Colab"]],
  ["Mobile Development", ["Kotlin","Android Studio","XML","RecyclerView"]]
];

const PROJECTS = [
  { id:"leres", featured:true, name:"LERES SAE", cat:"Web Application / Backend Development", org:"BPTI Disperindag DIY", role:"Backend Developer",
    short:"Sistem digital untuk membantu pengelolaan layanan servis, mulai dari pengajuan layanan hingga proses pengerjaan oleh teknisi.",
    overview:"LERES SAE adalah sistem digital untuk membantu pengelolaan layanan servis, mulai dari pengajuan layanan hingga proses pengerjaan oleh teknisi. Sistem ini dikembangkan agar pengelolaan data layanan menjadi lebih terstruktur dan terintegrasi.",
    problem:["Data servis dicatat secara manual","Berpotensi terjadi pekerjaan atau pencatatan ganda","Admin dan teknisi membutuhkan data yang lebih terintegrasi","Teknisi membutuhkan informasi kerusakan sebelum melakukan pekerjaan","Kebutuhan sparepart perlu diketahui lebih awal"],
    solution:"LERES SAE mengintegrasikan proses pengajuan layanan, pengelolaan data servis, penugasan teknisi, update status, dokumentasi pekerjaan, dan pengelolaan stok.",
    features:["Pengajuan layanan melalui Google Form","Manajemen data servis","Login Admin dan Teknisi","Role-Based Access","Dashboard Admin dan Teknisi","Penugasan teknisi","Update status servis","Riwayat layanan","Cek status menggunakan nomor WhatsApp","Upload bukti foto pekerjaan","Manajemen stok dan riwayat stok masuk/keluar","Manajemen berita","Manajemen lokasi"],
    tech:["Google Apps Script","Google Sheets","Google Forms","Google Drive","JavaScript","API"],
    contrib:"Mengembangkan backend dan API sistem, autentikasi Admin dan Teknisi, Role-Based Access, pengelolaan status layanan, dashboard, integrasi Google Forms dan Google Drive, sistem penugasan teknisi, serta membantu pengelolaan data stok." },
  { id:"toko", name:"Sphinx Piercing Store", cat:"E-Commerce / Web Application",
    short:"Website toko dan sistem pemesanan produk serta layanan piercing.",
    overview:"Website toko piercing dengan alur pemesanan produk dan layanan, halaman akun, serta pengelolaan pesanan.",
    features:["Katalog produk dan layanan","Pemesanan produk","Halaman akun dan login","Riwayat pesanan"],
    tech:["PHP","Firebase","JavaScript"],
    repoUrl:"https://github.com/MUHAMMADDAANSURYA/Sphinx-Pierching-main",
    contrib:"" },
  { id:"sampah", name:"Bank Sampah KRJ", cat:"Android Application",
    short:"Aplikasi Android untuk mengelola setor sampah, saldo, penarikan, riwayat transaksi, dan lokasi bank sampah.",
    overview:"Aplikasi Bank Sampah KRJ menyediakan alur pengguna dari pendaftaran dan login hingga pencatatan setoran, pengecekan saldo, penarikan uang, riwayat setoran, informasi jenis sampah, dan lokasi berbasis peta.",
    features:["Pendaftaran dan login","Dashboard pengguna","Pencatatan setor sampah","Informasi jenis sampah","Saldo dan penarikan uang","Riwayat setoran","Peta lokasi"],
    tech:["Kotlin","Android Studio","XML","RecyclerView"],
    repoUrl:"https://github.com/MUHAMMADDAANSURYA/SampahKRJ",
    contrib:"" },
  { id:"yolo", name:"Deteksi Kondisi Pisang dengan YOLOv11", cat:"Artificial Intelligence / Computer Vision",
    short:"Proyek AI untuk mendeteksi kondisi pisang menggunakan Computer Vision dan model YOLOv11.",
    overview:"Proyek Artificial Intelligence untuk mendeteksi kondisi pisang menggunakan teknologi Computer Vision dan model YOLOv11.",
    features:["Object Detection","Computer Vision","Image Processing","Model Training","Model Evaluation"],
    tech:["Python","YOLOv11","OpenCV","Google Colab"],
    contrib:"" }
];

const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const badges = a => `<ul class="badges">${a.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>`;
const list = a => `<ul>${a.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>`;

// Skills
$("#skillList").innerHTML = SKILLS.map(([t,a])=>`<div class="skill rv"><h3>${t}</h3>${badges(a)}</div>`).join("");

// Projects
const f = PROJECTS.find(p=>p.featured);
$("#featured").innerHTML = `<button class="feat rv" data-id="${f.id}" aria-label="Lihat detail ${f.name}">
  <span class="tag">Featured Project</span><h3>${f.name}</h3>
  <p class="cat">${f.cat} — ${f.org}</p><p class="d">${f.short}</p>${badges(f.tech)}
  <p style="margin:28px 0 0"><span class="view">View Details</span></p></button>`;
$("#projectGrid").innerHTML = PROJECTS.filter(p=>!p.featured).map((p,i)=>`
  <button class="card rv" data-id="${p.id}" aria-label="Lihat detail ${esc(p.name)}">
  <span class="n">Project ${String(i+2).padStart(2,"0")}</span><h3>${esc(p.name)}</h3>
  <p class="cat">${esc(p.cat)}</p><p class="d">${esc(p.short)}</p>${badges(p.tech)}
  <span class="view" style="align-self:flex-start">View Details</span></button>`).join("");
// Detail dialog
const dlg = $("#dlg");
function openProject(id){
  const p = PROJECTS.find(x=>x.id===id);
  const sec = (h,c)=> c ? `<h4>${h}</h4>${c}` : "";
  $("#dBody").innerHTML = `<h3 id="dTitle">${esc(p.name)}</h3><p style="color:var(--gold)">${esc(p.cat)}${p.org?" — "+esc(p.org):""}${p.role?" · "+esc(p.role):""}</p>
  ${sec("Overview",`<p>${esc(p.overview)}</p>`)}
  ${sec("The Problem", p.problem?list(p.problem):"")}
  ${sec("The Solution", p.solution?`<p>${esc(p.solution)}</p>`:"")}
  ${sec("Features", list(p.features))}
  ${sec("Technology", badges(p.tech))}
  ${sec("My Contribution", p.contrib?`<p>${esc(p.contrib)}</p>`:"")}
  ${sec("Source Code", p.repoUrl?`<p><a class="source-link" href="${esc(p.repoUrl)}" target="_blank" rel="noopener">Buka repository GitHub ↗</a></p>`:"")}
  ${sec("Gallery",`<div class="gal">Screenshot belum ditambahkan. Taruh gambar di folder <code>assets/</code> dan tampilkan di sini.</div>`)}`;
  dlg.showModal(); dlg.querySelector(".dlg-in").scrollTop = 0;
}
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-id]"); if(b) openProject(b.dataset.id);
  if(e.target.id==="dClose") dlg.close();
  if(e.target===dlg) dlg.close();
});

// Contact (tanpa link palsu)
$("#contactList").innerHTML = CONTACT.map(c=> c.href
  ? `<li><a href="${esc(c.href)}" target="_blank" rel="noopener"><small>${c.label}</small>Buka ${c.label}</a></li>`
  : `<li><span class="off"><small>${c.label}</small>Belum diisi</span></li>`).join("");
const first = CONTACT.find(c=>c.href);
if(first) $("#getInTouch").href = first.href;

// Nav
const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
addEventListener("scroll", ()=>nav.classList.toggle("scrolled", scrollY>20), {passive:true});
const toggle = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); document.body.style.overflow = o?"hidden":""; };
burger.addEventListener("click", ()=>toggle(burger.getAttribute("aria-expanded")!=="true"));
menu.addEventListener("click", e=>{ if(e.target.tagName==="A") toggle(false); });

// Reveal
const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }), {threshold:.12});
document.querySelectorAll(".rv, .sec h2, .timeline, .about-text").forEach(el=>{ el.classList.add("rv"); io.observe(el); });

// Subtle parallax hero
const hv = $(".hero-visual");
if(matchMedia("(pointer:fine)").matches) addEventListener("mousemove", e=>{
  hv.style.setProperty("--mx", (e.clientX/innerWidth-.5).toFixed(3));
  hv.style.setProperty("--my", (e.clientY/innerHeight-.5).toFixed(3));
});
