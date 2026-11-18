# rel. — Portofolio M. Erel (OOTS 2026)

Website portofolio interaktif **M. Erel** (Siswa Jurusan PPLG **SMKN 8 Semarang** & Wakil Ketua Ekstrakurikuler **SNAPANDEV**), dibangun menggunakan **SvelteKit (Svelte 5)**, **Tailwind CSS v4**, **TypeScript**, dan **Resend API**.

---

## Tech Stack (Ketentuan OOTS 2026)

- **Framework**: [Svelte 5](https://svelte.dev/) & [SvelteKit 3](https://svelte.dev/docs/kit) (`@sveltejs/adapter-vercel`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) + Custom Liquid Glass & 3D CSS
- **Language**: [TypeScript](https://www.typescriptlang.org/) (`strict: true`)
- **Email Service**: [Resend](https://resend.com/) (`POST /api/contact` & SvelteKit Form Action `?/kirim`)

---

## Struktur Proyek

```text
├── src/
│   ├── lib/
│   │   ├── data.ts               # Data portofolio & interface TypeScript (Education, Experience, Skills, Projects)
│   │   ├── portfolio-engine.ts   # Engine interaktif 3D orbit, timeline NLE, & photocard board
│   │   └── index.ts
│   ├── routes/
│   │   ├── api/contact/
│   │   │   └── +server.ts        # Endpoint API pengirim email via Resend
│   │   ├── +layout.svelte        # Root layout Svelte 5
│   │   ├── +page.svelte          # Halaman utama portofolio interaktif
│   │   ├── +page.server.ts       # Server form action (?/kirim) terintegrasi Resend
│   │   └── layout.css            # Konfigurasi Tailwind CSS v4 & stylesheet utama
│   ├── app.d.ts
│   ├── app.html
│   └── env.ts                    # Definisi variabel environment SvelteKit 3 (RESEND_API_KEY, RESEND_TO)
├── static/
│   └── assets/                   # Aset gambar, foto karya, dan ikon software/pendidikan (.webp)
├── .env.example
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Menjalankan Secara Lokal

1. Salin `.env.example` menjadi `.env` dan isi kredensial Resend:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   RESEND_TO=owekmessi@gmail.com
   ```
2. Install dependencies & jalankan server development:
   ```bash
   bun install
   bun run dev
   ```
3. Build untuk produksi (Vercel):
   ```bash
   bun run build
   ```
