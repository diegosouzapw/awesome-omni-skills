# 🗂️ Project Structure (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Direktori lengkap dan referensi file untuk monorepo Awesome Omni Skills.**---

## 📊 At a Glance

```text
awesome-omni-skills/
├── .github/                    # GitHub Actions and PR templates
├── .githooks/                  # Local Git hooks
├── data/                       # Static project data and bundle definitions
├── dist/                       # Generated runtime artifacts (committed)
├── docs/                       # All project documentation
├── packages/                   # Monorepo workspaces (runtime code)
├── skills/                     # Native skill catalog (154 skills)
├── skills_omni/                # Curated English derivatives (110 skills)
├── tools/                      # Build, validation, and test scripts
└── [root files]                # Package config, community files, licenses
```

---

## 📂 Directory Reference

### `skills/`

>**Katalog keterampilan asli.**Ini adalah permukaan konten publik utama proyek.

Berisi**154**direktori keterampilan, masing-masing dengan minimal buku pedoman `SKILL.md`. Keterampilan yang lebih besar dapat mencakup subdirektori `agen/`, `referensi/`, `contoh/`, `skrip/`, dan `aset/`.

Keterampilan tiba melalui dua jalur penerimaan:
-**PR kontributor langsung**— manusia mengirimkan keterampilan secara langsung
-**Impor eksternal berbasis repositori**— meninjau PR `impor-eksternal/*` dari repositori upstream

| Apa isinya | Contoh |
|:-----------------|:--------|
| `skill/omni-figma/SKILL.md` | Keterampilan desain-ke-kode Figma |
| `keterampilan/arsitektur/SKILL.md` | Tinjauan arsitektur dan keterampilan perencanaan |
| `keterampilan/<nama>/metadata.json` | Klasifikasi dan penilaian yang dibuat secara otomatis |---

### `skills_omni/`

>**Derivatif khusus bahasa Inggris yang disempurnakan.**Dikelola oleh saluran penyempurnaan pribadi.

Berisi**110**direktori keterampilan yang ditingkatkan yang mencerminkan dan meningkatkan rekan-rekan asli mereka di `keterampilan/`. Permukaan ini**tidak terbuka untuk kontribusi publik langsung**— permukaan ini hanya diisi oleh pipeline penambah otomatis.

Setiap turunan mempertahankan atribusi ke sumber aslinya sambil memberikan standar editorial yang lebih tinggi, selalu dalam bahasa Inggris.---

### `packages/`

>**Ruang kerja monorepo.**Semua kode Node.js runtime ada di sini.

| Paket | npm Nama | Tujuan |
|:--------|:---------|:--------|
| 📂 `paket/inti-katalog/` | `@omni-skills/catalog-core` | Waktu proses katalog bersama dengan injeksi ketergantungan `ICatalogStorageAdapter`. Menyediakan logika pencarian, penilaian, perbandingan, rekomendasi, dan rencana pemasangan yang digunakan oleh semua permukaan server |
| 📂 `paket/cli/` | (tempat paket root) | Titik masuk CLI terpadu, penginstal terpandu, TUI visual tinta, diagnostik, pemeriksaan asap, dan peluncur layanan. ESM-asli |
| 📂 `paket/target instalasi/` | `@omni-skills/install-targets` | Registri 9 klien yang mampu menginstal (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) dengan resolusi jalur dan pemetaan bendera |
| 📂 `paket/server-api/` | `@omni-skills/server-api` | API katalog HTTP hanya-baca dengan OpenAPI 3.1, UI Swagger di `/docs`, autentikasi, pembatasan kecepatan, daftar izin CORS/IP, unduhan, dan waktu proses admin |
| 📂 `paket/server-mcp/` | `@omni-skills/server-mcp` | Server MCP mendukung transport `stdio`, `stream`, dan `sse`. Mode sespan lokal menambahkan alat instal/hapus yang sadar sistem file dan penulisan konfigurasi MCP yang sadar klien untuk 16 klien berkemampuan konfigurasi |
| 📂 `paket/server-a2a/` | `@omni-skills/server-a2a` | Runtime tugas A2A (Agen-ke-Agen) dengan persistensi JSON/SQLite, pemulihan mulai ulang, streaming SSE, pembatalan, mode pelaksana eksternal, dan koordinasi sewaan opsional |

Setiap paket memiliki direktori `package.json`, `src/` sendiri, dan (kecuali `install-targets`) `vitest.config.js` untuk pengujian unit.---

### `dist/`

>**Artefak runtime yang dihasilkan.**Sengaja berkomitmen pada kontrol versi.

File-file ini adalah output yang dapat dibaca mesin yang digunakan oleh instalasi CLI, respons API, alat MCP, tugas A2A, pengujian asap, dan verifikasi rilis. Mereka dibuat ulang oleh `npm run build`.

| Jalur | Tujuan |
|:-----|:--------|
| `dist/catalog.json` | Katalog yang diterbitkan dengan 154 keterampilan, skor, dan metadata |
| `dist/bundles.json` | Definisi bundel dengan status ketersediaan anggota |
| `dist/manifests/<skill>.json` | Manifes yang dapat dibaca mesin per keterampilan |
| `dist/arsip/<keterampilan>.zip` | Arsip ZIP per keterampilan untuk diunduh |
| `dist/arsip/<keterampilan>.tar.gz` | Arsip tarball per keterampilan untuk diunduh |
| `dist/arsip/<keterampilan>.checksums.txt` | Manifes checksum SHA-256 per arsip |
| `dist/arsip/<keterampilan>.zip.sig` | Tanda tangan terpisah (hanya waktu rilis, gitignored) |
| `dist/catatan-rilis.md` | Catatan rilis yang dibuat secara otomatis (gitignored) |
| `dist/penandatanganan/` | Materi kunci publik yang diturunkan (gitignored) |

>**Mengapa `dist/` dikomit?**Karena merupakan bagian dari kontrak pemasangan, API, MCP, A2A, dan rilis. Konsumen mengharapkan file-file ini ada tanpa menjalankan build.---

### `data/`

>**File data proyek statis.**Definisi yang dikontrol sumber yang mendorong perilaku build dan runtime.

| Berkas | Tujuan |
|:-----|:--------|
| `data/bundel.json` | Definisi bundel yang dikurasi (daftar anggota keterampilan per bundel) |
| `data/project_identity.json` | Identitas proyek kanonik: nama, deskripsi, beranda, topik GitHub, definisi permukaan runtime, dan daftar klien |
| `data/project_status.json` | Cuplikan metrik proyek yang dihasilkan: jumlah keterampilan, skor, jumlah klien, jumlah kategori, dan sebaran kualitas |---

### `docs/`

>**Semua dokumentasi proyek.**Diselenggarakan berdasarkan audiens.

| Jalur | Penonton | Konten |
|:-----|:---------|:--------|
| `docs/README.md` | Semuanya | Pusat dokumentasi — indeks pusat untuk semua dokumen |
| `docs/CATALOG.md` | Pengguna | Katalog yang dibuat secara otomatis mencantumkan 154 keterampilan dengan skor |
| `docs/PROYEK-STRUKTUR.md` | Semuanya | File ini — referensi direktori proyek |
| `dokumen/pengguna/` | Pengguna akhir | Memulai, panduan pengguna CLI, panduan penggunaan, bundel, runbook |
| `dokumen/kontributor/` | Kontributor | Anatomi keterampilan, templat, alur kerja PR, bilah kualitas, pedoman skor tinggi |
| `dokumen/spesifikasi/` | Arsitek | API, sespan MCP, penginstal CLI, shell visual, matriks dukungan klien, klasifikasi, keamanan, dan spesifikasi manifes |
| `dokumen/i18n/` | Pengguna internasional | Terjemahan root README yang dibuat secara otomatis dalam 32 bahasa |#### `docs/users/`

| Berkas | Tujuan |
|:-----|:--------|
| `MEMULAI.md` | Instal, verifikasi, dan aktifkan keterampilan dalam waktu kurang dari 2 menit |
| `CLI-USER-GUIDE.md` | Referensi perintah lengkap dengan skenario langkah demi langkah |
| `PENGGUNAAN.md` | Perintah CLI, mode instalasi, perintah runtime, dan alur konfigurasi MCP |
| `BUNDEL.md` | Paket pilihan dan ketersediaannya saat ini |
| `PELUNCURAN-Keterampilan-OMNI-LUAR BIASA.md` | Ubah merek status migrasi dan laporan penerimaan |
| `RUNBOOK.md` | Referensi operasional (juga ditautkan sebagai `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Berkas | Tujuan |
|:-----|:--------|
| `KETERAMPILAN-ANATOMI.md` | Struktur dan harapan kualitas untuk suatu keterampilan |
| `TEMPLATE-KETERAMPILAN.md` | Mulai `SKILL.md` dengan materi depan saat ini |
| `SKILL-PR-WORKFLOW.md` | Asupan asli, pemrosesan penambah, dan ekspektasi pengulas |
| `BARANG-KUALITAS.md` | Kriteria penerimaan dan tolok ukur saat ini |
| `PLAYBOOK-SKOR TINGGI.md` | Apa yang mendorong skor kematangan, kualitas, praktik terbaik, dan keamanan yang tinggi |#### `docs/specs/`

| Berkas | Tujuan |
|:-----|:--------|
| `KATALOG-API.md` | Titik akhir HTTP, pemfilteran, tata kelola, dan unduhan |
| `CLI-GUIDED-INSTALLER.md` | Kontrak perilaku untuk pemasang yang dipandu |
| `CLI-VISUAL-SHELL.md` | Shell visual tinta, model status, dan hub layanan |
| `LOKAL-MCP-SIDECAR.md` | Alat yang mendukung sistem file, model daftar yang diizinkan, dan penulisan konfigurasi |
| `KLIEN-DUKUNGAN-MATRIX.md` | Referensi klien dan penulis lengkap di 9 instalasi + 16 klien konfigurasi |
| `KLASIFIKASI KETERAMPILAN.md` | Taksonomi, heuristik penilaian, dan artefak metadata |
| `VALIDASI-KEAMANAN.md` | Pemindai, arsip, tanda tangan, dan verifikasi rilis |
| `KETERAMPILAN-MANIFEST.md` | Format manifes yang dapat dibaca mesin dan kontrak kompatibilitas |#### `docs/i18n/`

Berisi**32**direktori bahasa, masing-masing dengan `README.md` yang diterjemahkan. Bahasa meliputi: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Terjemahan dibuat secara otomatis oleh `npm run i18n:render` dan divalidasi oleh `npm run i18n:check`.---

### `tools/`

>**Membangun, memvalidasi, dan menguji infrastruktur.**Terutama skrip Python yang digunakan oleh perintah `npm run`.#### `tools/scripts/`

| Skrip | Perintah npm | Tujuan |
|:-------|:------------|:--------|
| `validasi_skills.py` | `npm jalankan validasi` | Memvalidasi semua file `SKILL.md` dan membuat ulang `metadata.json` |
| `skill_metadata.py` | (diimpor dengan validasi) | Validator monolitik inti: penguraian materi depan, taksonomi, penilaian, pemindaian keamanan |
| `mengkategorikan ulang_skills.py` | `npm jalankan taksonomi:laporan` | Menampilkan atau menerapkan normalisasi kategori kanonik |
| `hasilkan_index.py` | `npm jalankan indeks` | Menghasilkan manifes, arsip, dan checksum `dist/` |
| `build_catalog.js` | `npm jalankan katalog` | Menghasilkan `docs/CATALOG.md` dari `skills_index.json` |
| `hasilkan_project_status.py` | `npm menjalankan proyek:status` | Menghasilkan `data/project_status.json` dengan metrik saat ini |
| `render_project_docs.py` | `npm jalankan dokumen:render` | Pembaruan menghasilkan blok di README, dokumen, dan CONTRIBUTING |
| `hasilkan_i18n.py` | `npm jalankan i18n:render` | Menghasilkan atau memperbarui terjemahan `docs/i18n/` |
| `repositori_sumber.py` | `npm jalankan registri:render` | Merender dan memvalidasi `REPOSITORY-SOURCES.md` |
| `verifikasi_proyek_identitas.py` | `npm jalankan identitas:periksa` | Memverifikasi penyelarasan identitas package.json, README, dan repo |
| `verifikasi_arsip.py` | `npm jalankan verifikasi: arsip` | Memverifikasi integritas arsip dan tanda tangan opsional |
| `verifikasi_keamanan_scanners.py` | `npm jalankan verifikasi: pemindai` | Mengonfirmasi cakupan pemindai dalam metadata yang dihasilkan |
| `hasilkan_release_notes.py` | `npm jalankan rilis:catatan` | Menghasilkan catatan rilis khusus dari metadata dan riwayat git |
| `next_release_version.py` | `npm jalankan rilis: versi berikutnya` | Menghitung versi semver berikutnya menggunakan kebijakan patch-to-10 |
| `sync_repo_version.py` | `npm jalankan rilis: versi sinkronisasi` | Menyinkronkan versi di seluruh paket ruang kerja |
| `sinkronisasi_github_repo_metadata.py` | `npm jalankan repo:metadata:print` | Mencetak atau menerapkan deskripsi GitHub, beranda, dan topik |
| `validasi_kontribusi_scope.py` | (CI) | Memvalidasi batasan cakupan kontribusi PR |
| `install_githooks.js` | `npm jalankan kait:instal` | Menginstal hook pra-komit lokal |#### `tools/scripts/tests/`

Rangkaian pengujian integrasi dan TUI yang digunakan oleh `npm test`:
- Tes Python PTY lama
- Pernyataan node TUI
- Orkestra pelari uji---

### `.github/`

>**Tindakan GitHub dan templat komunitas.**#### `.github/workflows/`

| Alur Kerja | Pemicu | Tujuan |
|:---------|:--------|:--------|
| `validasi.yml` | Dorong/PR ke `utama` | Bangun, uji, dan konfirmasi artefak yang dihasilkan telah dikomit |
| `rilis.yml` | Tag push `v*` atau pengiriman manual | Pemindai tingkat rilis, penandatanganan, penerbitan npm, Rilis GitHub |
| `penggabungan-keterampilan-pelepasan-otomatis.yml` | Gabungkan ke `utama` menyentuh `keterampilan/*` | Peningkatan versi otomatis, penandaan, dan pelepasan pada perubahan keterampilan |
| `meningkatkan-pr-skills.yml` | PR dengan perubahan keterampilan | Menjalankan saluran penyempurna pribadi dan memposting PR pendamping |
| `sinkronisasi-repositori-metadata.yml` | Perubahan pada `data/project_identity.json` | Menyinkronkan deskripsi GitHub, beranda, dan topik |#### `.github/pull_request_template.md`

Templat PR default dengan daftar periksa untuk kontribusi keterampilan dan runtime.---

### `.githooks/`

>**Local Git hooks.**Diinstal melalui `npm run hooks:install`.

| Berkas | Tujuan |
|:-----|:--------|
| `pra-komit` | Menjalankan validasi dasar sebelum mengizinkan komit |---

## 📄 Root Files Reference

| Berkas | Tujuan |
|:-----|:--------|
| `BACA.md` | Proyek README yang dapat dilihat publik dengan spanduk pahlawan, panduan pemasangan, dan ikhtisar fitur lengkap |
| `KONTRIBUSI.md` | Panduan kontributor dengan alur kerja keterampilan, waktu proses, dan penerimaan |
| ` KEAMANAN.md` | Petunjuk kebijakan keamanan, cakupan, dan pelaporan kerentanan |
| `CODE_OF_CONDUCT.md` | Perjanjian Kontributor v2.1 |
| ` SUMBER-REPOSITORI.md` | Registri publik dari repositori hulu yang diusulkan untuk asupan eksternal |
| `LISENSI` | Lisensi MIT (kode dan perkakas) |
| `ISI LISENSI` | CC BY 4.0 (dokumentasi dan konten keterampilan) |
| `paket.json` | Paket root monorepo: skrip, dependensi, titik masuk bin, file, dan konfigurasi ruang kerja |
| `paket-lock.json` | npm lockfile (dibuat secara otomatis) |
| `metadata.json` | Validasi seluruh repositori dan ringkasan skor (dihasilkan oleh `npm run validasi`) |
| `keterampilan_index.json` | Indeks keterampilan normalisasi repo-lokal (dihasilkan oleh `npm run validasi`) |
| `.gitignore` | Pengecualian kontrol versi — terutama `dist/`**tidak**diabaikan |
| `.npmabaikan` | Tidak termasuk `__pycache__/` dan `*.pyc` dari tarball npm |
| `.node-versi` | Penyematan versi Node.js: `22` |
| `.nvmrc` | penyematan versi nvm: `22` (cermin `.node-version`) |
| `vitest.config.js` | Konfigurasi Root Vitest yang mereferensikan semua 5 konfigurasi pengujian tingkat paket |
| `vitest.workspace.js` | Definisi ruang kerja Vitest untuk eksekusi pengujian monorepo-aware |---

## 🔄 Build Pipeline Flow

```text
npm run validate          →  metadata.json, skills_index.json, per-skill metadata.json
npm run index             →  dist/manifests/, dist/archives/, dist/archives/*.checksums.txt
npm run catalog           →  docs/CATALOG.md
npm run project:status    →  data/project_status.json
npm run docs:render       →  updates generated blocks in README.md, docs/README.md, CONTRIBUTING.md
npm run registry:render   →  updates REPOSITORY-SOURCES.md status block
npm run i18n:render       →  docs/i18n/*/README.md (32 languages)
```

Semua hal di atas dijalankan secara berurutan sebagai bagian dari `npm run build`.