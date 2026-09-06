# 📁 Portofolio — Caroline Maharani Surya Putri

Dokumen ini berisi struktur folder proyek, palet warna, dan mapping konten (berdasarkan CV, sertifikat, dan foto yang dikirim) untuk website portofolio Caroline. Stack: **React + Vite + Tailwind CSS (JavaScript, bukan TypeScript)**.

---

## 1. Struktur Folder Proyek

```
portofolio-caroline/
├── public/
│   ├── Formal.jpeg
│   ├── CV_Caroline_Maharani_2026.pdf
│   ├── Sertifikat_BNSP.pdf
│   ├── Sertifikat_Data_Science.pdf
│   └── Sertifikat_Anggota_HMPS.pdf
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Organization.jsx
│   │   │   ├── Awards.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Badge.jsx
│   │       ├── Card.jsx
│   │       └── SectionTitle.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── tailwind.config.js
```

> Catatan: section `Projects.jsx` pada contoh diganti jadi **`Organization.jsx`** karena CV Caroline lebih menonjolkan pengalaman organisasi & kepanitiaan (bukan portofolio proyek teknis). Kalau kamu tetap mau ada bagian "Projects", tinggal tambahkan file kosong sebagai placeholder.

---

## 2. Palet Warna — Mocha + Cream

Gunakan token warna berikut di `tailwind.config.js` supaya konsisten di semua komponen:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#FFFDF9",
          100: "#FBF3E7",
          200: "#F5E6D3",
          300: "#EFD9BF",
        },
        mocha: {
          100: "#D8C3A5",
          200: "#B99470",
          300: "#8B5E3C",
          400: "#6F4518",
          500: "#4A2E1E",
          600: "#3B2417",
          700: "#2B1A10",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

**Panduan pemakaian:**
- Background utama → `cream-50` / `cream-100`
- Background section alternatif → `cream-200`
- Teks judul → `mocha-600` / `mocha-700`
- Teks body → `mocha-500`
- Aksen tombol / badge / border → `mocha-300` dengan hover `mocha-400`
- Card → background `cream-50`, border tipis `mocha-100`, shadow lembut

---

## 3. Data Konten — `src/data/portfolio.js`

```js
// src/data/portfolio.js

export const profile = {
  name: "Caroline Maharani Surya Putri",
  title:
    "Mahasiswa Administrasi Publik — Kebijakan Publik, Pemerintahan Daerah & Manajemen Pelayanan Publik",
  location: "Semarang, Jawa Tengah, Indonesia",
  phone: "+62 858-4201-1683",
  email: "carolinemaharanisp@gmail.com",
  photo: "/Formal.jpeg",
  cv: "/CV_Caroline_Maharani_2026.pdf",
  summary:
    "Lulusan baru (fresh graduate) Universitas Diponegoro, Program Studi Administrasi Publik, dengan fokus pada kebijakan publik, pemerintahan daerah, dan manajemen pelayanan publik. Memadukan dasar akademik dalam kajian kebijakan dengan pengalaman magang langsung di lembaga legislatif provinsi (DPRD Provinsi Jawa Tengah), meliputi dukungan hubungan masyarakat dan koordinasi administratif untuk pimpinan lembaga. Memiliki pengalaman organisasi yang luas dari berbagai kepanitiaan kampus, mencakup koordinasi acara, administrasi keuangan, dan komunikasi visual.",
};

export const education = [
  {
    institution: "Universitas Diponegoro — Semarang, Indonesia",
    degree: "Sarjana Administrasi Publik (S1 Administrasi Publik)",
    period: "2022 – 2026",
  },
];

export const skills = [
  {
    title: "Kebijakan & Pemerintahan Publik",
    description:
      "Dasar akademik dalam analisis kebijakan publik, administrasi pemerintahan daerah, dan manajemen pelayanan publik, diperkuat melalui perkuliahan dan pengalaman magang di lembaga legislatif.",
  },
  {
    title: "Koordinasi Acara & Program",
    description:
      "Pengalaman merencanakan dan menjalankan kegiatan kepanitiaan secara menyeluruh, mulai dari konsep dan rundown hingga pelaksanaan dan evaluasi pasca-acara.",
  },
  {
    title: "Administrasi Keuangan",
    description:
      "Mengelola anggaran penggalangan dana dan pelaporan keuangan sebagai Bendahara, dengan menjaga transparansi dan akuntabilitas penggunaan dana.",
  },
  {
    title: "Komunikasi Visual & Desain Grafis",
    description:
      "Membuat poster, banner, dan infografis untuk publikasi organisasi menggunakan Canva dan perangkat desain lainnya.",
  },
  {
    title: "Dukungan Administratif",
    description:
      "Membantu pengarsipan dokumen, laporan kegiatan, dan penyusunan Surat Perintah Perjalanan Dinas (SPPD) selama masa magang di lembaga legislatif.",
  },
  {
    title: "Kerja Sama Tim & Komunikasi",
    description:
      "Kemampuan interpersonal dan komunikasi yang kuat, terbentuk melalui koordinasi lintas divisi dalam organisasi kemahasiswaan.",
  },
  {
    title: "Perangkat Digital",
    description:
      "Mahir mengoperasikan Microsoft Office (Word, Excel, PowerPoint) untuk pelaporan, dokumentasi, dan presentasi.",
  },
];

export const additionalSkills = [
  "Komunikasi",
  "Kerja Sama Tim",
  "Pengoperasian Microsoft Office",
  "Pemecahan Masalah",
  "Desain Grafis",
];

export const languages = [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "Bahasa Inggris", level: "Pasif" },
];

export const experience = [
  {
    role: "Internship, Divisi Hubungan Masyarakat (Humas)",
    company: "Dewan Perwakilan Rakyat Daerah (DPRD) Provinsi Jawa Tengah",
    period: "Jul – Agu 2024",
    points: [
      "Mendukung Divisi Humas dalam pengarsipan dokumen terkait kegiatan tim Humas.",
      "Membantu penyusunan laporan mengenai peristiwa terkini dan kegiatan kelembagaan yang sedang berlangsung.",
      "Berpartisipasi dalam kunjungan dinas luar bersama staf Humas.",
    ],
  },
  {
    role: "Internship, Kantor Wakil Ketua I",
    company: "Dewan Perwakilan Rakyat Daerah (DPRD) Provinsi Jawa Tengah",
    period: "Jan – Feb 2025",
    points: [
      "Membantu staf Wakil Ketua I dalam penyusunan Surat Perintah Perjalanan Dinas (SPPD) untuk anggota dan staf.",
      "Berpartisipasi dalam kunjungan dinas luar dan membantu penyusunan laporan hasil kunjungan lapangan.",
    ],
  },
  {
    role: "Internship, Front Office",
    company: "Luvido Residence",
    period: "Nov 2022 – Feb 2023",
    points: [
      "Menyambut dan melayani tamu selama proses check-in dan check-out.",
      "Mengelola reservasi kamar dan memantau ketersediaan kamar.",
      "Memberikan informasi kepada tamu mengenai fasilitas dan layanan hotel.",
      "Berkoordinasi dengan tim housekeeping dan concierge untuk memastikan kenyamanan tamu.",
    ],
  },
];

export const organizations = [
  {
    role: "Staf Divisi Bakat dan Minat",
    org: "HMPS Administrasi Publik, Universitas Diponegoro",
    period: "Feb – Des 2023",
    points: [
      "Mengelola dan mengembangkan program non-akademik yang mendukung bakat dan minat mahasiswa di lingkungan Program Studi Administrasi Publik.",
      "Merancang dan menyelenggarakan kegiatan, termasuk pelatihan dan kompetisi antar-angkatan, untuk mempererat hubungan antarmahasiswa.",
    ],
  },
  {
    role: "Divisi Publikasi, Desain & Dokumentasi (PDD) — Anggota hingga Kepala Divisi",
    org: "PARC, Si Nomi, Research School (Anggota); Public Cup (Kepala Divisi)",
    period: "2023",
    points: [
      "Mengelola komunikasi visual dan penyebaran informasi untuk kegiatan organisasi di berbagai kepanitiaan.",
      "Membuat dan menyebarkan konten publikasi melalui media sosial, serta mendokumentasikan kegiatan melalui foto dan video.",
      "Sebagai Kepala Divisi untuk Public Cup, memimpin tim strategi publikasi, pengelolaan media sosial, dan dokumentasi acara.",
    ],
  },
  {
    role: "Divisi Acara — Anggota hingga Kepala Divisi",
    org: "Visiting Day, LKMM-PD (Anggota); PUBLIKUSTIK (Kepala Divisi)",
    period: "Agu – Nov 2023",
    points: [
      "Merancang konsep dan rundown acara, serta berkoordinasi dengan berbagai pemangku kepentingan.",
      "Sebagai Kepala Divisi PUBLIKUSTIK, memimpin tim acara dari perencanaan hingga evaluasi akhir.",
    ],
  },
  {
    role: "Wakil Ketua & Sekretaris",
    org: "PORSENI (Pekan Olahraga dan Seni)",
    period: "Mar 2023",
    points: [
      "Mengoordinasikan kelancaran acara dan mendukung ketua dalam pengambilan keputusan.",
      "Menyusun laporan kegiatan pasca-acara.",
    ],
  },
  {
    role: "Fasilitator",
    org: "PMB (Penerimaan Mahasiswa Baru)",
    period: "Agu 2023",
    points: [
      "Membimbing dan mendampingi mahasiswa baru agar dapat beradaptasi dengan kehidupan kampus.",
    ],
  },
  {
    role: "Bendahara & Kepala Divisi Penggalangan Dana",
    org: "GREET MOMENT",
    period: "Sep 2023",
    points: [
      "Mengelola keuangan organisasi serta memastikan transparansi penggunaan dana.",
      "Menyusun laporan keuangan rinci dan mengawasi kegiatan penggalangan dana.",
    ],
  },
];

export const certifications = [
  {
    title: "Manajemen Sumber Daya Manusia — Kualifikasi Supervisor",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "12 Agustus 2025",
    file: "/Sertifikat_BNSP.pdf",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "25 Mei 2025",
    file: "/Sertifikat_Data_Science.pdf",
  },
  {
    title: "Fungsionaris Bidang Minat dan Bakat — HMPS Administrasi Publik",
    issuer: "Fakultas Ilmu Sosial dan Ilmu Politik, Universitas Diponegoro",
    date: "2024",
    file: "/Sertifikat_Anggota_HMPS.pdf",
  },
];

export const contact = {
  email: "carolinemaharanisp@gmail.com",
  phone: "+62 858-4201-1683",
  location: "Semarang, Jawa Tengah, Indonesia",
};
```

---

## 4. Peta Komponen ke Data

| Komponen | Sumber Data | Fungsi |
|---|---|---|
| `Hero.jsx` | `profile` | Nama, tagline, foto, tombol download CV |
| `About.jsx` | `profile.summary`, `education` | Ringkasan diri + riwayat pendidikan |
| `Experience.jsx` | `experience` | Pengalaman kerja/magang |
| `Organization.jsx` | `organizations` | Pengalaman organisasi & kepanitiaan |
| `Awards.jsx` | `certifications` | Sertifikat (BNSP, Data Science, HMPS) dengan link PDF |
| `Skills.jsx` | `skills`, `additionalSkills`, `languages` | Keahlian utama & bahasa |
| `Contact.jsx` | `contact` | Info kontak & form/CTA |
| `Navbar.jsx` / `Footer.jsx` | `profile`, `contact` | Navigasi & penutup halaman |

---

## 5. Catatan Desain (Mocha + Cream)

- Nuansa hangat & profesional — cocok untuk latar belakang administrasi publik/pemerintahan.
- Section berselang-seling `cream-50` ↔ `cream-200` agar ada kedalaman tanpa kontras tajam.
- Badge skill & tag sertifikat pakai outline `mocha-300`, teks `mocha-600`.
- Foto formal (`Formal.jpeg`) ditampilkan bulat (`rounded-full`) di Hero dengan border tipis `mocha-200`.
- Font heading: **Poppins** (tegas, modern), font body: **Inter** (mudah dibaca).

---

*File ini adalah dokumen spesifikasi/blueprint — gunakan sebagai acuan saat scaffolding proyek React + Vite + Tailwind.*
