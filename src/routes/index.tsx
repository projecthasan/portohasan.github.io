import { createFileRoute } from "@tanstack/react-router";
import hasanudinPhoto from "@/assets/hasanudin.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasanudin — Videographer & Video Editor" },
      { name: "description", content: "Portofolio videografi sinematik Hasanudin, Videographer & Video Editor." },
      { property: "og:title", content: "Hasanudin — Videographer & Video Editor" },
      { property: "og:description", content: "Portofolio videografi sinematik Hasanudin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ===== LINK PENTING — ganti di sini =====
const WA_NUMBER = "6285817015295";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo Hasanudin, saya tertarik untuk bekerja sama setelah melihat portofolio Anda",
)}`;
const IG_LINK = "https://instagram.com/hasnud__?utm_source=qr&cplk=a2g3NTZsdzd3bWpn";
const EMAIL_LINK = "mailto:hasanudin251198@gmail.com";
const CV_LINK = "#"; // TODO: ganti dengan link file CV (mis. Google Drive)

// Ganti `url` dengan link YouTube/Vimeo, dan `thumb` dengan URL gambar thumbnail
const projects = [
  {
    title: "Bumper",
    desc: "Bumper pembuka dengan ritme cepat dan transisi dinamis — perkenalan brand dalam hitungan detik.",
    url: "https://youtu.be/XVD6M0jmLyI?si=5QNBEId25NsXksc7",
    thumb: "https://i.ytimg.com/vi/XVD6M0jmLyI/mqdefault.jpg",
  },
  {
    title: "Pernah Ikut Kompetisi Video",
    desc: "Karya yang diikutkan dalam kompetisi video — storytelling dan color grading menjadi andalan.",
    url: "https://youtu.be/QIWAQAhRRpw?si=ILq6tQ68VMAHu3vu",
    thumb: "https://i.ytimg.com/vi/QIWAQAhRRpw/mqdefault.jpg",
  },
  {
    title: "Terus Belajar & Mensyukuri Hidup",
    desc: "Film pendek personal tentang perjalanan belajar dan mensyukuri setiap momen dalam hidup.",
    url: "https://youtu.be/u5V09Xt5S30?si=HR1vnsTIdzHMiP5c",
    thumb: "https://i.ytimg.com/vi/u5V09Xt5S30/mqdefault.jpg",
  },
  {
    title: "Kompetisi Asian Games 2018",
    desc: "Video lomba merayakan Asian Games 2018 — energi pertandingan dikemas dalam format vertikal (Shorts).",
    url: "https://youtube.com/shorts/Nq4fo9QRUXc?si=MnSlwjI4eqYx03Rz",
    thumb: "https://i.ytimg.com/vi/Nq4fo9QRUXc/mqdefault.jpg",
  },
  {
    title: "Senja",
    desc: "Shorts bertema senja dengan warna pudar dan lapisan bayangan ukiran — suasana sendu yang dibangun lewat cahaya lembut dan transisi halus.",
    url: "https://youtube.com/shorts/krfUeRg5u-4?si=p4RFZRC7kckbPQts",
    thumb: "https://i.ytimg.com/vi/krfUeRg5u-4/oardefault.jpg",
  },
];
const skills = ["Adobe Premiere", "CapCut", "Canva", "3D Blender", "After Effects"];

const btn = "inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold transition hover:-translate-y-0.5";
const primary = `${btn} bg-primary text-primary-foreground shadow-glow`;
const outline = `${btn} border border-border text-foreground hover:border-primary hover:text-primary`;

function Index() {
  return (
    <main className="bg-background text-foreground">
      <section className="bg-hero relative flex min-h-screen items-center px-6">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Videographer & Video Editor</p>
          <h1 className="text-6xl font-extrabold tracking-tight md:text-8xl">Hasanudin<span className="text-primary">.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Setiap frame adalah cerita. Saya mengubah momen menjadi visual sinematik yang menggerakkan emosi dan meninggalkan kesan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portofolio" className={primary}>Lihat Portofolio</a>
            {/* Tombol WhatsApp dengan pesan otomatis */}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={outline}>Hubungi Saya</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[280px_1fr]">
          {/* Foto Hasanudin */}
          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-glow">
              <img src={hasanudinPhoto.url} alt="Hasanudin, videografer & video editor"
                className="aspect-[3/4] w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Tentang Saya</p>
            <h2 className="mt-3 text-4xl font-bold">Bercerita lewat lensa & timeline.</h2>
            <p className="mt-6 text-muted-foreground">
              Saya Hasanudin, videografer dan editor video yang berfokus pada storytelling visual. Berpengalaman menangani
              konten komersial, dokumenter, event, hingga media sosial — dari pengambilan gambar, editing, color grading,
              sampai motion graphics dan animasi 3D.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{s}</span>
              ))}
            </div>
            {/* Ganti CV_LINK di atas dengan link CV */}
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className={`${primary} mt-8`}>Download CV</a>
          </div>
        </div>
      </section>

      <section id="portofolio" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Karya Pilihan</p>
          <h2 className="mt-3 text-4xl font-bold">Galeri Videografi</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              // Setiap kartu membuka link video di tab baru
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary">
                <div className="relative flex aspect-video items-center justify-center bg-secondary">
                  {p.thumb ? <img src={p.thumb} alt={p.title} className="h-full w-full object-cover" loading="lazy" /> : (
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110">▶</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold group-hover:text-primary">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Mari berkarya bersama<span className="text-primary">.</span></h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className={outline}>Instagram</a>
          <a href={EMAIL_LINK} className={outline}>Email</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={primary}>WhatsApp</a>
        </div>
        <p className="mt-12 text-sm text-muted-foreground">© {new Date().getFullYear()} Hasanudin. All rights reserved.</p>
      </footer>
    </main>
  );
}
