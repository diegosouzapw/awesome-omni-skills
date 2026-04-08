# 📖 Awesome Omni Skills — Documentation Hub (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Referensi utama untuk menggunakan, berkontribusi, dan mengoperasikan Awesome Omni Skills sebagai gudang keterampilan publik, platform turunan praktik terbaik yang dikurasi, dan platform runtime bersama.**

File komunitas standar berada di root repositori:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Paket npm, repositori GitHub, dokumen yang dihasilkan, dan titik masuk runtime kini diselaraskan di**Awesome Omni Skills**. Status peluncuran saat ini: [Peluncuran Omni Skills yang Luar Biasa](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

## 📊 Status Snapshot

<!-- generated:docs-readme-status-snapshot:start -->
| Area | State | Details |
|:-----|:------|:--------|
| 🏗️ **Runtime** | ✅ Current | Unified CLI, Ink visual shell, API, MCP, and A2A all ship from the same package |
| 📦 **Catalog** | 📌 154 skills | 154 native catalog skills across 16 active categories, with 110 curated English derivatives in `skills_omni` and 7 fully backed bundles |
| 🎯 **Install** | ✅ Current | Guided TTY install, selective `--skill` and `--bundle`, custom path support, and discovery-driven install |
| 🌐 **API** | ✅ Current | Read-only registry API with auth, admin runtime, rate limiting, CORS/IP allowlists, maintenance mode, downloads, and interactive Swagger UI on `/docs` |
| 🔌 **MCP** | ✅ Current | `stdio` · `stream` · `sse`, local sidecar mode, 9 install-capable clients, 16 config-capable clients, 33 config targets, and 20 config profiles |
| 🤖 **A2A** | ✅ Current | Simple-first local runtime with JSON/SQLite durability, restart resume, SSE streaming, cancelation, external executor mode, and optional leased coordination when explicitly enabled |
| 🛡️ **Security** | ✅ Current | Static scanner, optional ClamAV/VirusTotal, signed release artifacts, archive checksums, and release-time verification |
| 📋 **Classification** | ✅ Current | Canonical taxonomy, maturity, semantic quality spread, best-practices spread, and security scoring |
| 📁 **Archives** | ✅ Current | Per-skill `.zip` and `.tar.gz` archives with SHA-256 checksum manifests |
| 🔐 **Signing** | ✅ Current | Detached signatures enforced on release tags; local install flows consume the same manifest and checksum metadata |
| 🧬 **Intake Flow** | ✅ Current | Native skills land under `skills/` through direct contributor PRs and reviewed repository-based external-import PRs; PR automation reviews them and proposes Omni-enhanced derivatives under `skills_omni/` |
<!-- generated:docs-readme-status-snapshot:end -->

## 🔭 Current Project State

Jalur fondasi sekarang berada dalam status proyek aktif, dan gelombang perluasan kategori kedua sudah ada dalam katalog. Proyek ini sekarang harus dibaca sebagai dasar kerja dengan jalur ekspansi opsional di masa depan:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Ekspansi di masa depan tetap disengaja:

- memperdalam `desain`, `alat`, `data-ai`, dan `pembelajaran mesin`
- hindari membuka kembali kategori non-kode asli yang tidak aktif hingga trek kode asli saat ini memiliki kedalaman yang lebih kuat
- menjaga jalur peninjauan dasar dan penambah kualitas tetap utuh saat melakukannya

Pekerjaan perluasan tersebut kini tercermin langsung dalam katalog langsung dan dokumen arsitektur:

- cuplikan katalog saat ini di [Katalog](CATALOG.md)
- runtime dan bentuk artefak di [Analisis Basis Kode](arsitektur/CODEBASE-ANALYSIS.md)
- arah maju dalam [Peta Jalan Agen-Native](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Keterampilan Omni yang Luar Biasa harus dibaca sebagai tiga permukaan yang terhubung:

| Permukaan | Apa itu | Bagaimana perubahannya |
|:--------|:-----------|:---------------|
| 📥 `keterampilan/` | Repositori keterampilan asli publik | PR kontributor langsung dan meninjau masukan eksternal berbasis repositori |
| ✨ `skill_omni/` | Permukaan turunan praktik terbaik yang ditingkatkan | Hanya PR pendamping penambah pribadi |
| 🖥️ Permukaan waktu proses | CLI, API, MCP, dan A2A melalui katalog yang sama | Otomatisasi pembuatan, validasi, dan rilis |---

## 📌 Current Decisions

Pertanyaan-pertanyaan arsitektur ini tidak lagi “terbuka” dalam praktiknya dan kini diperlakukan sebagai keputusan proyek:

1.**Distribusi tetap mengutamakan manifes ditambah arsip yang ditandatangani**
   Manifes yang dapat dibaca mesin tetap merupakan kontrak yang digunakan oleh CLI, API, MCP, dan A2A. Arsip per keterampilan yang ditandatangani adalah permukaan pengunduhan dan rilis yang berlapis di atas kontrak tersebut.
2.**Katalog pribadi atau premium harus menggunakan kembali skema manifes yang sama**
   Otentikasi dan kebijakan harus berlapis secara eksternal, bukan dengan membagi bentuk manifes atau katalog.
3.**Konfigurasi MCP harus menyatu pada beberapa kelompok ekspor kanonik**
   Omni Skills yang Luar Biasa kini distandarisasi berdasarkan JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions`, dan TOML `[mcp_servers]`, sambil tetap mempertahankan penulis yang dipesan khusus jika dokumen klien resmi memerlukan struktur yang berbeda.

Keputusan tersebut selaras dengan dokumentasi resmi MCP dan klien saat ini, termasuk:

- Panduan dukungan ekstensi dan Registri MCP resmi di `modelcontextprotocol.io`
- Dokumen OpenAI Docs MCP dan Codex CLI di `developers.openai.com` dan `platform.openai.com`
- Ekstensi VS Code MCP dan dokumen produk di `code.visualstudio.com`
- dokumen klien untuk Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman, dan JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dok | Apa yang Akan Anda Pelajari |
|:----|:------------------|
| 📘 [Memulai](users/GETTING-STARTED.md) | Instal, verifikasi, dan aktifkan keterampilan pertama Anda |
| 🧭 [Panduan Pengguna CLI](pengguna/CLI-USER-GUIDE.md) | Referensi perintah lengkap dan pola penggunaan CLI dunia nyata |
| 📗 [Panduan Penggunaan](users/USAGE.md) | Perintah CLI, mode instalasi, perintah runtime, dan alur konfigurasi MCP |
| 📦 [Paket](users/BUNDLES.md) | Paket pilihan dan ketersediaannya saat ini |
| 📚 [Katalog](CATALOG.md) | Katalog keterampilan yang diterbitkan secara otomatis |
| 🔧 [Sistem Runbook](operasi/RUNBOOK.md) | Bangun, sajikan, amankan, dan pecahkan masalah runtime |### 🏗️ If You Want to **Understand** the Runtime

| Dok | Apa yang Akan Anda Pelajari |
|:----|:------------------|
| 🗂️ [Struktur Proyek](STRUKTUR-PROYEK.md) | Direktori lengkap dan referensi file untuk monorepo |
| 🗺️ [Peta Jalan Agen-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Evolusi arsitektur, keputusan tertutup, dan area perluasan yang tersisa |
| 🧭 [Peta Jalan CLI UX](arsitektur/CLI-UX-ROADMAP.md) | Rencana historis dan bentuk CLI terpandu dan visual saat ini |
| 📐 [ADR-0001: Workspace Foundation](arsitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo inti dan keputusan runtime bersama |
| 🔬 [Analisis Basis Kode](arsitektur/CODEBASE-ANALYSIS.md) | Komposisi runtime saat ini, jumlah, dan batasan sistem |
| 🌐 [Permukaan API Katalog](specs/CATALOG-API.md) | Titik akhir HTTP, pemfilteran, tata kelola, dan unduhan |
| 🧩 [Pemasang yang Dipandu CLI](spesifikasi/CLI-GUIDED-INSTALLER.md) | Kontrak perilaku untuk pemasang yang dipandu |
| 🖥️ [CLI Visual Shell](spesifikasi/CLI-VISUAL-SHELL.md) | Shell visual tinta, model status, dan hub layanan |
| 🔌 [Sespan MCP Lokal](specs/LOCAL-MCP-SIDECAR.md) | Alat yang mendukung sistem file, model daftar yang diizinkan, dan penulisan konfigurasi |
| 🧭 [Matriks Dukungan Klien](spesifikasi/CLIENT-SUPPORT-MATRIX.md) | Klien CLI dan IDE yang didukung, penulis, target manual, dan referensi sumber |
| 📊 [Klasifikasi Keterampilan](specs/SKILL-CLASSIFICATION.md) | Taksonomi, heuristik penilaian, dan artefak metadata |
| 🛡️ [Validasi Keamanan](specs/SECURITY-VALIDATION.md) | Pemindai, arsip, tanda tangan, dan verifikasi rilis |
| 📋 [Spesifikasi Manifes Keterampilan](specs/SKILL-MANIFEST.md) | Format manifes yang dapat dibaca mesin dan kontrak kompatibilitas |### 🤝 If You Want to **Contribute**

| Dok | Apa yang Akan Anda Pelajari |
|:----|:------------------|
| 📝 [Panduan Berkontribusi](../CONTRIBUTING.md) | Alur kerja repo dan ekspektasi permintaan tarik |
| 🌍 [Sumber Repositori](../REPOSITORY-SOURCES.md) | Bagaimana cara mengusulkan repositori upstream melalui PR publik normal, sekarang dengan dukungan cabang dan jalur `otomatis` yang pertama repo |
| 🧾 [Alur Kerja PR Keterampilan](contributors/SKILL-PR-WORKFLOW.md) | Asupan asli, pemrosesan penambah otomatis, penerbitan `skills_omni/`, dan ekspektasi pengulas |
| 📄 [Templat Keterampilan](kontributor/SKILL-TEMPLATE.md) | Mulai `SKILL.md` dengan frontmatter dan struktur saat ini |
| 🔬 [Anatomi Keterampilan](kontributor/SKILL-ANATOMY.md) | Struktur dan harapan kualitas untuk suatu keterampilan |
| ✅ [Bilah Kualitas](kontributor/BAR-KUALITAS.md) | Kriteria penerimaan repositori |
| 🏆 [Playbook Skor Tinggi](kontributor/PLAYBOOK-SCORE-TINGGI.md) | Apa yang mendorong skor kematangan, kualitas, praktik terbaik, dan keamanan yang tinggi |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx awesome-omni-skills                       # Guided install in TTY
npx awesome-omni-skills install --guided      # Forced guided install
npx awesome-omni-skills ui                    # Ink visual shell
npx awesome-omni-skills ui --text             # Text fallback UI
```

```bash
# 🔎 Discovery
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx awesome-omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx awesome-omni-skills install --guided --path ./my-skills --skill architecture
npx awesome-omni-skills --cursor --skill omni-figma
npx awesome-omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx awesome-omni-skills config-mcp --list-targets
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx awesome-omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx awesome-omni-skills recategorize
npx awesome-omni-skills recategorize --write

# 🔌 Services
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills api --port 3333
npx awesome-omni-skills a2a --port 3335

# 🧪 Validation
npx awesome-omni-skills smoke
npx awesome-omni-skills doctor
```

Untuk permukaan perintah pengguna akhir yang lengkap, gunakan [Panduan Pengguna CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Pipeline build memancarkan file yang dapat dibaca mesin yang menggerakkan setiap permukaan runtime:

| Artefak | Tujuan |
|:---------|:--------|
| `metadata.json` | Validasi seluruh repositori dan ringkasan skor |
| `keterampilan_index.json` | Indeks keterampilan normalisasi repo-lokal |
| `dist/catalog.json` | Katalog yang diterbitkan untuk pencarian dan pencatatan |
| `dist/bundles.json` | Bundel definisi dengan ketersediaan |
| `dist/manifests/<skill>.json` | Manifes yang dapat dibaca mesin per keterampilan |
| `dist/arsip/<keterampilan>.zip` | Arsip keterampilan (zip) |
| `dist/arsip/<keterampilan>.tar.gz` | Arsip Keterampilan (tarball) |
| `dist/arsip/<keterampilan>.checksums.txt` | Manifes checksum SHA-256 |

`dist/` tetap berkomitmen dengan sengaja. Artefak yang dihasilkan ini adalah bagian dari kontrak pemasangan, API, MCP, A2A, smoke, dan rilis.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API registri hanya-baca untuk keterampilan, bundel, perbandingan, perencanaan pemasangan, dan pengunduhan artefak.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Sidecar lokal sekarang mendukung penulisan konfigurasi MCP kelas satu untuk:

- Kode Claude
- Kursor
- Kode VS dan Kontainer Pengembang
- Gemini CLI
- Antigravitasi
- Kiro
- Kodeks CLI
- Lanjutkan
- Selancar angin
- Kode Terbuka
- Klinik
- CLI Kopilot GitHub
- Kode Kilo
- Zed
- Angsa### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Siklus hidup tugas, streaming, persistensi, mulai ulang pemulihan, dan orkestrasi lokal sederhana pertama. Eksekusi sewaan bersama tersedia jika diaktifkan secara eksplisit; Redis tetap menjadi opsi yang dihosting tingkat lanjut, bukan jalur lokal default.---

## 🗂️ Repository Map

| Jalur | Tujuan |
|:-----|:--------|
| 📂 `keterampilan/` | Keterampilan menulis kanonik |
| 📖 `dokumen/pengguna/` | Dokumentasi pengguna akhir |
| 🤝 `dokumen/kontributor/` | Templat dan panduan kontributor |
| 🏗️ `dokumen/arsitektur/` | Peta Jalan, ADR, dan Analisis Teknis |
| 🔧 `dokumen/operasi/` | Runbook operasional |
| 📋 `dokumen/spesifikasi/` | Kontrak runtime, protokol, dan artefak |
| 📚 `docs/CATALOG.md` | Katalog keterampilan yang dihasilkan |
| 📦 `dist/` | Artefak yang dapat dibaca mesin |
| 🧠 `paket/inti-katalog/` | Waktu proses katalog bersama dengan `ICatalogStorageAdapter` DI |
| 🌐 `paket/server-api/` | API HTTP hanya-baca dengan OpenAPI/Swagger UI di `/docs` |
| 🔌 `paket/server-mcp/` | Server MCP dan sespan lokal |
| 🤖 `paket/server-a2a/` | Server A2A dan runtime tugas |
| 🖥️ `paket/cli/` | Titik masuk CLI terpadu, logika pemasangan, dan TUI visual Tinta (asli ESM) |
| ⚙️ `alat/skrip/` | Validasi, pembuatan, verifikasi, dan pengujian |
| 🧪 `vitest.workspace.js` | Konfigurasi ruang kerja monorepo Vitest |---

## 🧪 Release Validation

```bash
npm run smoke
```

Smoke run memvalidasi:

- ✅ validasi keterampilan dan pembuatan metadata
- ✅ alat kategorisasi ulang taksonomi
- ✅ pembuatan artefak katalog
- ✅ menghasilkan penurunan harga katalog
- ✅ pembuatan dan verifikasi arsip
- ✅ rangkaian pengujian integrasi lama (pernyataan Python PTY + Node TUI)
- ✅ Rangkaian unit Vitest untuk penilaian inti katalog, pencarian, dan pemfilteran
- ✅ `paket npm --dry-run`
- ✅ Boot API dan kesehatan dengan OpenAPI/Swagger UI di `/docs`
- ✅ Boot MCP di `stdio`, `stream`, dan `sse`
- ✅ Boot A2A, polling, streaming SSE, pembatalan, dan siklus hidup push-config