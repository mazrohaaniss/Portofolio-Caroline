# Prompt: Website Portofolio Pribadi — Caroline Maharani Surya Putri

## 1. Ringkasan Proyek
Buatkan website portofolio pribadi satu halaman (single page, bisa scroll dengan anchor navigation) untuk:

- **Nama:** Caroline Maharani Surya Putri
- **Profesi/Status:** Mahasiswa Administrasi Publik (fresh graduate) — fokus Kebijakan Publik, Pemerintahan Daerah & Manajemen Pelayanan Publik
- **Lokasi:** Semarang, Jawa Tengah, Indonesia
- **Kontak:** +62 858-4201-1683 | carolinemaharanisp@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/caroline-maharani-bb8b29424

Gaya desain: **clean, profesional, tapi tidak kaku** — modern, hangat, sedikit playful di detail (micro-interaction, rounded corner, subtle animation), terinspirasi dari referensi: https://portofolio-anis.vercel.app/ (struktur navigasi, layout section, dan flow scroll-nya jadi acuan, tapi palet warna & nuansa berbeda sesuai poin 2).

## 2. Tema Visual & Color Palette
Gunakan nuansa **mocha & cream** (warm, earthy, elegan):

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-cream` | `#F5EDE4` | Background utama |
| `--color-cream-soft` | `#FBF6F0` | Background section alternatif / card |
| `--color-mocha` | `#6F4E37` | Warna aksen utama, heading, tombol |
| `--color-mocha-dark` | `#4A3428` | Teks judul besar / hover state |
| `--color-mocha-light` | `#A9836C` | Aksen sekunder, border, icon |
| `--color-latte` | `#D9C4B0` | Divider, background chip/badge |
| `--color-text` | `#3B2E26` | Teks body |
| `--color-white` | `#FFFFFF` | Kontras di card/tombol |

Tipografi: gunakan pasangan font serif elegan (misal *Playfair Display* / *Fraunces*) untuk heading dan sans-serif modern (misal *Inter* / *Poppins*) untuk body — supaya kesan profesional tapi tetap hangat, tidak kaku.

Elemen desain yang disarankan:
- Rounded corners (soft, radius 12–24px) di semua card/foto/button.
- Subtle shadow, hindari border tegas/kotak keras.
- Micro-animation saat scroll (fade-in/slide-up ringan, gunakan intersection observer atau library ringan seperti Framer Motion / AOS).
- Foto profil ditampilkan dalam bentuk bulat atau rounded-square dengan sedikit border aksen mocha.
- Navigasi sticky di atas dengan smooth scroll ke tiap section.

## 3. Struktur Halaman (urutan section)

### A. Hero Section
- Foto formal (file: `Foto_Caroline.jpeg`) — tampilkan dalam bingkai bulat/rounded, background hero pakai warna cream.
- Nama lengkap besar: **Caroline Maharani Surya Putri**
- Sub-headline singkat: *"Mahasiswa Administrasi Publik — fokus pada Kebijakan Publik, Pemerintahan Daerah & Manajemen Pelayanan Publik"*
- Lokasi: Semarang, Jawa Tengah, Indonesia
- Tombol CTA: "Hubungi Saya" (scroll ke Contact) dan/atau "Lihat LinkedIn" (link ke LinkedIn di atas)

### B. About Me
Tulis ulang (parafrase, jangan copy-paste kaku) ringkasan berikut menjadi 1 paragraf pendek yang hangat dan personal:

> Lulusan baru Universitas Diponegoro, Program Studi Administrasi Publik, dengan fokus pada kebijakan publik, pemerintahan daerah, dan manajemen pelayanan publik. Memiliki pengalaman magang di lembaga legislatif provinsi (DPRD Provinsi Jawa Tengah) pada bidang hubungan masyarakat dan koordinasi administratif untuk pimpinan lembaga. Aktif berorganisasi di berbagai kepanitiaan kampus dengan pengalaman di koordinasi acara, administrasi keuangan, dan komunikasi visual. Memiliki rekam jejak berkembang dari anggota divisi hingga kepala divisi di berbagai organisasi kemahasiswaan, serta pribadi yang adaptif dan mampu bekerja dalam tim.

Boleh tambahkan 3–4 highlight singkat (chip/badge) di bawah paragraf, contoh: `Kebijakan Publik` `Manajemen Pelayanan Publik` `Koordinasi Acara` `Administrasi Keuangan` `Desain Grafis (Canva)`.

### C. Experience (Pengalaman Kerja & Organisasi)
Tampilkan dalam bentuk timeline atau card, dikelompokkan jadi dua sub-bagian: **Pengalaman Magang/Kerja** dan **Pengalaman Organisasi & Kepanitiaan**. Gunakan data berikut apa adanya (boleh dirapikan formatnya, jangan hilangkan poin penting):

**Pengalaman Kerja / Magang**
1. **Internship, Divisi Hubungan Masyarakat (Humas)** — DPRD Provinsi Jawa Tengah (Jul–Agu 2024)
   - Mendukung Divisi Humas dalam pengarsipan dokumen terkait kegiatan tim Humas.
   - Membantu penyusunan laporan mengenai peristiwa terkini dan kegiatan kelembagaan yang sedang berlangsung.
   - Berpartisipasi dalam kunjungan dinas luar bersama staf Humas.
2. **Internship, Kantor Wakil Ketua I** — DPRD Provinsi Jawa Tengah (Jan–Feb 2025)
   - Membantu staf Wakil Ketua I dalam penyusunan Surat Perintah Perjalanan Dinas (SPPD) untuk anggota dan staf.
   - Berpartisipasi dalam kunjungan dinas luar dan membantu penyusunan laporan hasil kunjungan lapangan.
3. **Internship, Front Office** — Luvido Residence (Nov 2022–Feb 2023)
   - Menyambut dan melayani tamu selama proses check-in dan check-out.
   - Mengelola reservasi kamar dan memantau ketersediaan kamar.
   - Memberikan informasi kepada tamu mengenai fasilitas dan layanan hotel.
   - Berkoordinasi dengan tim housekeeping dan concierge.

**Pengalaman Organisasi & Kepanitiaan**
1. **Staf Divisi Bakat dan Minat** — HMPS Administrasi Publik, Universitas Diponegoro (Feb–Des 2023)
2. **Divisi Publikasi, Desain & Dokumentasi (PDD)** — Anggota hingga Kepala Divisi — PARC, Si Nomi, Research School (Anggota); Public Cup (Kepala Divisi) (2023)
3. **Divisi Acara** — Anggota hingga Kepala Divisi — Visiting Day, LKMM-PD (Anggota); PUBLIKUSTIK (Kepala Divisi) (Agu–Nov 2023)
4. **Wakil Ketua & Sekretaris** — PORSENI (Pekan Olahraga dan Seni) (Mar 2023)
5. **Fasilitator** — PMB (Penerimaan Mahasiswa Baru) (Agu 2023)
6. **Bendahara & Kepala Divisi Penggalangan Dana** — GREET MOMENT (Sep 2023)

(Detail bullet lengkap ada di CV terlampir, `CV_Caroline_Maharani_2026.pdf` — gunakan itu sebagai sumber lengkap untuk deskripsi tiap poin di atas.)

### D. Sertifikat (Certificates)
Tampilkan dalam bentuk grid card, masing-masing dengan thumbnail/preview dan judul:

1. **Sertifikat Kompetensi BNSP** — Supervisor Sumber Daya Manusia (Manajemen Sumber Daya Manusia), No. 70209 3341 4 0004103 2025, berlaku 3 tahun, diterbitkan 12 Agustus 2025. (file: `Sertifikat_BNSP.pdf`)
2. **Introduction to Data Science** — Cisco Networking Academy, selesai 25 Mei 2025. (file: `Sertifikat_Data_Science.pdf`)
3. **Fungsionaris Bidang Minat dan Bakat, HMPS Administrasi Publik** — ORMAWA 2023, FISIP Universitas Diponegoro, No. 629/UN7.F7/SR/V/2024. (file: `Sertifikat_Anggota_HMPS.pdf`)

Beri tombol/link "Lihat Sertifikat" yang membuka file PDF terkait di tab baru.

### E. Skills
Kelompokkan jadi beberapa kategori, tampilkan sebagai chip/badge atau progress bar minimalis (jangan terlalu teknis seperti skill developer):

- **Kebijakan & Pemerintahan Publik**: Analisis Kebijakan Publik, Administrasi Pemerintahan Daerah, Manajemen Pelayanan Publik
- **Koordinasi & Manajemen Acara**: Perencanaan acara end-to-end, Rundown & evaluasi kegiatan
- **Administrasi Keuangan**: Pengelolaan anggaran, Pelaporan keuangan
- **Komunikasi Visual & Desain**: Canva, Poster/Banner/Infografis
- **Dukungan Administratif**: Pengarsipan dokumen, Penyusunan SPPD
- **Perangkat Digital**: Microsoft Word, Excel, PowerPoint
- **Soft Skill**: Kerja sama tim, Komunikasi interpersonal, Adaptif
- **Bahasa**: Bahasa Indonesia (Native), Bahasa Inggris (Pasif)

### F. Contact
- Email: carolinemaharanisp@gmail.com
- WhatsApp/Telepon: +62 858-4201-1683
- LinkedIn: https://www.linkedin.com/in/caroline-maharani-bb8b29424 (tombol dengan ikon LinkedIn)
- Lokasi: Semarang, Jawa Tengah, Indonesia
- Boleh tambahkan form kontak sederhana (nama, email, pesan) — tidak wajib fungsional ke backend, minimal `mailto:` link atau tampilan saja.

## 4. Fitur Edit dengan Proteksi Password
Tambahkan fitur **"Edit Mode"** yang bisa diakses pemilik portofolio untuk mengubah konten (teks, foto, file sertifikat, dll) langsung dari halaman:

- Sediakan tombol kecil (misal ikon gear/pensil) di pojok layar (contoh: floating button di kanan bawah) bertuliskan **"Edit"**.
- Saat tombol ini diklik, muncul modal/popup yang meminta **password**.
- Password yang benar: `tanyaaku`
- Jika password benar → masuk ke **Edit Mode**: semua bagian teks (About Me, Experience, Skills, Contact) menjadi editable (misal `contenteditable` atau form input), foto profil dan file sertifikat bisa diganti/upload ulang.
- Jika password salah → tampilkan pesan error, tidak bisa masuk edit mode.
- Sediakan tombol "Simpan" untuk menyimpan perubahan dan "Keluar dari Edit Mode".
- Untuk penyimpanan data (teks & referensi file), gunakan penyimpanan yang paling sederhana dan sesuai kemampuan project (misal local storage / file JSON / database ringan — sesuaikan dengan stack yang dipakai di project Antigravity ini), yang penting perubahan tersimpan dan muncul kembali saat halaman dibuka ulang.
- Pastikan password TIDAK terekspos di kode sisi client secara polos jika memungkinkan (misal simpan di environment variable / backend check), tapi jika keterbatasan stack hanya izinkan client-side check, tetap implementasikan dengan password di atas.

## 5. Konten Lampiran yang Tersedia
Gunakan file-file berikut sebagai sumber data/aset (letakkan di folder assets project):
- `Foto_Caroline.jpeg` → foto profil di Hero Section
- `CV_Caroline_Maharani_2026.pdf` → sumber lengkap data Experience
- `Sertifikat_Anggota_HMPS.pdf`
- `Sertifikat_Data_Science.pdf`
- `Sertifikat_BNSP.pdf`

## 6. Requirement Teknis Tambahan
- Fully responsive (mobile, tablet, desktop).
- Navigasi sticky dengan anchor link ke tiap section (Home, About, Experience, Sertifikat, Skills, Contact).
- Gunakan smooth scroll behavior.
- Optimalkan gambar (lazy load) agar loading cepat.
- SEO dasar: title tag, meta description, favicon.
- Tambahkan subtle scroll animation (fade-in/slide-up) di tiap section supaya terasa modern dan tidak kaku, tapi tetap ringan (tidak berlebihan/animasi ramai).
