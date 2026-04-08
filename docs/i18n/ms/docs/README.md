# 📖 Awesome Omni Skills — Documentation Hub (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Rujukan utama untuk menggunakan, menyumbang kepada dan mengendalikan Kemahiran Omni Hebat sebagai repositori kemahiran awam, permukaan terbitan amalan terbaik yang dipilih susun dan platform masa jalan yang dikongsi.**

Fail komuniti standard hidup dalam akar repositori:
[`README.md`](../README.md) · [`MENYUMBANG.md`](../MENYUMBANG.md) · [`KESELAMATAN.md`](../SECURITY.md) · [`KOD_KELAKUAN.md`](../CODE_md)

> Pakej npm, repositori GitHub, dokumen yang dijana dan titik masuk masa jalan kini diselaraskan pada**Kemahiran Omni Hebat**. Keadaan pelancaran semasa: [Pelancaran Kemahiran Omni Hebat](operasi/KEMAHIRAN-OMNI-KEMAHIRAN-KEHEBATAN.md).---

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

Landasan asas kini berada dalam keadaan projek aktif, dan gelombang pengembangan kategori kedua sudah ada dalam katalog. Projek itu kini harus dibaca sebagai garis dasar yang berfungsi dengan trek pengembangan masa depan pilihan:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Pengembangan masa depan tetap disengajakan:

- mendalami `reka bentuk`, `alat`, `data-ai` dan `pembelajaran mesin`
- elakkan membuka semula kategori bukan kod asli yang tidak aktif sehingga trek kod asli semasa mempunyai kedalaman yang lebih kukuh
- pastikan lantai kualiti dan laluan semakan penambah utuh semasa berbuat demikian

Kerja pengembangan itu kini ditunjukkan secara langsung dalam katalog langsung dan dokumen seni bina:

- petikan katalog semasa dalam [Catalog](CATALOG.md)
- masa jalanan dan bentuk artifak dalam [Analisis Pangkalan Kod](architecture/CODEBASE-ANALYSIS.md)
- arah hadapan dalam [Peta Hala Tuju Ejen-Native](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Kemahiran Omni Hebat harus dibaca sebagai tiga permukaan yang bersambung:

| Permukaan | Apa itu | Bagaimana ia berubah |
|:--------|:-----------|:--------------|
| 📥 `kemahiran/` | Repositori kemahiran asli awam | PR penyumbang langsung dan pengambilan luaran berasaskan repositori yang disemak |
| ✨ `kemahiran_omni/` | Permukaan terbitan amalan terbaik yang dipilih susun | PR sahabat penambah peribadi sahaja |
| 🖥️ Permukaan masa jalan | CLI, API, MCP dan A2A melalui katalog terjana yang sama | Bina, pengesahan dan keluarkan automasi |---

## 📌 Current Decisions

Soalan seni bina ini tidak lagi "terbuka" dalam amalan dan kini dianggap sebagai keputusan projek:

1.**Pengedaran kekal didahulukan dengan nyata dan arkib bertandatangan**
   Manifes yang boleh dibaca mesin kekal sebagai kontrak yang digunakan oleh CLI, API, MCP dan A2A. Arkib setiap kemahiran yang ditandatangani ialah permukaan muat turun dan keluaran berlapis di atas kontrak itu.
2.**Katalog peribadi atau premium hendaklah menggunakan semula skema manifes yang sama**
   Pengesahan dan dasar harus berlapis secara luaran, bukan dengan memotong bentuk manifes atau katalog.
3.**Konfigurasi MCP harus bertumpu pada beberapa keluarga eksport berkanun**
   Kemahiran Omni Hebat kini menyeragamkan sekitar JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` dan TOML `[mcp_servers]`, sambil memastikan penulis yang dipesan lebih dahulu hanya memerlukan dokumen struktur rasmi yang berbeza.

Keputusan tersebut sejajar dengan MCP rasmi semasa dan dokumentasi pelanggan, termasuk:

- Pendaftaran MCP rasmi dan panduan sokongan sambungan di `modelcontextprotocol.io`
- Dokumen OpenAI Docs MCP dan Codex CLI di `developers.openai.com` dan `platform.openai.com`
- Sambungan MCP Kod VS dan dokumen produk di `code.visualstudio.com`
- dokumen pelanggan untuk Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman dan JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Apa yang Anda Akan Pelajari |
|:----|:------------------|
| 📘 [Bermula](pengguna/BERMULA.md) | Pasang, sahkan dan gunakan kemahiran pertama anda |
| 🧭 [Panduan Pengguna CLI](pengguna/CLI-USER-GUIDE.md) | Rujukan arahan penuh dan corak penggunaan CLI dunia sebenar |
| 📗 [Panduan Penggunaan](pengguna/USAGE.md) | Perintah CLI, mod pemasangan, arahan masa jalan dan aliran konfigurasi MCP |
| 📦 [Bundles](pengguna/BUNDLES.md) | Himpunan dipilih susun dan ketersediaan semasanya |
| 📚 [Katalog](KATALOG.md) | Katalog jana automatik kemahiran diterbitkan |
| 🔧 [Buku Jalan Sistem](operasi/BUKU RUNBOOK.md) | Bina, layan, selamatkan dan selesaikan masalah masa jalan |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Apa yang Anda Akan Pelajari |
|:----|:------------------|
| 🗂️ [Struktur Projek](PROJEK-STRUKTUR.md) | Direktori lengkap dan rujukan fail untuk monorepo |
| 🗺️ [Pelan Hala Tuju Ejen-Native](seni bina/AGENT-NATIVE-ROADMAP.md) | Evolusi seni bina, keputusan tertutup dan kawasan pengembangan yang tinggal |
| 🧭 [Pelan Hala Tuju CLI UX](seni bina/CLI-UX-ROADMAP.md) | Pelan sejarah dan bentuk semasa CLI berpandu dan visual |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGEN-NATIVE-WORKSPACE.md) | Monorepo teras dan keputusan masa jalanan bersama |
| 🔬 [Analisis Pangkalan Kod](architecture/CODEBASE-ANALYSIS.md) | Komposisi masa jalan semasa, kiraan dan sempadan sistem |
| 🌐 [Permukaan API Katalog](spesifikasi/KATALOG-API.md) | Titik akhir HTTP, penapisan, tadbir urus dan muat turun |
| 🧩 [Pemasang Berpandu CLI](spesifikasi/CLI-GUIDED-INSTALLER.md) | Kontrak kelakuan untuk pemasang berpandu |
| 🖥️ [CLI Visual Shell](spesifikasi/CLI-VISUAL-SHELL.md) | Cangkang visual dakwat, model keadaan dan hab perkhidmatan |
| 🔌 [Kereta Side MCP Tempatan](spesifikasi/LOCAL-MCP-SIDECAR.md) | Alat yang menyedari sistem fail, model senarai yang dibenarkan dan penulisan konfigurasi |
| 🧭 [Matriks Sokongan Pelanggan](spesifikasi/CLIENT-SUPPORT-MATRIX.md) | Pelanggan CLI dan IDE yang disokong, penulis, sasaran manual dan rujukan sumber |
| 📊 [Klasifikasi Kemahiran](spesifikasi/KLASIFIKASI KEMAHIRAN.md) | Taksonomi, heuristik pemarkahan dan artifak metadata |
| 🛡️ [Pengesahan Keselamatan](specs/SECURITY-VALIDATION.md) | Pengimbas, arkib, tandatangan dan pengesahan keluaran |
| 📋 [Spesifikasi Manifes Kemahiran](spesifikasi/KEMAHIRAN-MANIFEST.md) | Format manifes boleh dibaca mesin dan kontrak keserasian |### 🤝 If You Want to **Contribute**

| Doc | Apa yang Anda Akan Pelajari |
|:----|:------------------|
| 📝 [Panduan Menyumbang](../MENYUMBANG.md) | Repo aliran kerja dan jangkaan permintaan tarik |
| 🌍 [Sumber Repositori](../REPOSITORY-SOURCES.md) | Bagaimana untuk mencadangkan repositori huluan melalui PR awam biasa, kini dengan repo-first `auto` cawangan dan sokongan laluan |
| 🧾 [Aliran Kerja PR Kemahiran](penyumbang/KEMAHIRAN-PR-ALIRAN KERJA.md) | Pengambilan asli, pemprosesan penambah automatik, penerbitan `kemahiran_omni/` dan jangkaan pengulas |
| 📄 [Templat Kemahiran](penyumbang/TEMPLATE-KEMAHIRAN.md) | Pemula `SKILL.md` dengan frontmatter dan struktur semasa |
| 🔬 [Anatomi Kemahiran](penyumbang/ANATOMI-KEMAHIRAN.md) | Struktur dan jangkaan kualiti untuk sesuatu kemahiran |
| ✅ [Bar Kualiti](penyumbang/BAR KUALITI.md) | Kriteria penerimaan untuk repositori |
| 🏆 [Buku Main Skor Tinggi](penyumbang/BUKU-MAIN-SKOR-TINGGI.md) | Perkara yang mendorong kematangan tinggi, kualiti, amalan terbaik dan skor keselamatan |---

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

Untuk permukaan arahan pengguna akhir yang lengkap, gunakan [Panduan Pengguna CLI](pengguna/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Talian paip binaan mengeluarkan fail yang boleh dibaca mesin yang memacu setiap permukaan masa jalan:

| Artifak | Tujuan |
|:---------|:--------|
| `metadata.json` | Pengesahan seluruh repositori dan ringkasan skor |
| `indeks_kemahiran.json` | Indeks kemahiran ternormal repo-lokal |
| `dist/catalog.json` | Katalog yang diterbitkan untuk carian dan penyenaraian |
| `dist/bundles.json` | Takrif himpunan dengan ketersediaan |
| `dist/manifests/<skill>.json` | Manifes boleh dibaca mesin setiap kemahiran |
| `dist/archives/<skill>.zip` | Arkib kemahiran (zip) |
| `dist/archives/<skill>.tar.gz` | Arkib kemahiran (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifes |

`dist/` tetap komited dengan sengaja. Artifak yang dijana ini adalah sebahagian daripada kontrak pemasangan, API, MCP, A2A, asap dan pelepasan.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API pendaftaran baca sahaja untuk kemahiran, himpunan, perbandingan, perancangan pemasangan dan muat turun artifak.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Kereta sampingan tempatan kini menyokong penulisan konfigurasi MCP kelas pertama untuk:

- Kod Claude
- Kursor
- Kod VS dan Bekas Dev
- Gemini CLI
- Antigraviti
- Kiro
- Codex CLI
- Teruskan
- Luncur Angin
- OpenCode
- Cline
- GitHub Copilot CLI
- Kod Kilo
- Zed
- Angsa### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Kitaran hayat tugas, penstriman, ketekunan, mulakan semula pemulihan dan orkestrasi tempatan yang mudah dahulu. Pelaksanaan pajakan bersama tersedia apabila didayakan secara eksplisit; Redis kekal sebagai pilihan dihoskan lanjutan, bukan laluan tempatan lalai.---

## 🗂️ Repository Map

| Laluan | Tujuan |
|:-----|:--------|
| 📂 `kemahiran/` | Kemahiran mengarang kanonik |
| 📖 `dokumen/pengguna/` | Dokumentasi pengguna akhir |
| 🤝 `dokumen/penyumbang/` | Templat dan panduan penyumbang |
| 🏗️ `dokumen/seni bina/` | Pelan hala tuju, ADR dan analisis teknikal |
| 🔧 `dokumen/operasi/` | Buku jalan operasi |
| 📋 `dokumen/spesifikasi/` | Kontrak masa jalan, protokol dan artifak |
| 📚 `docs/CATALOG.md` | Katalog kemahiran yang dijana |
| 📦 `dist/` | Artifak yang boleh dibaca mesin yang dihasilkan |
| 🧠 `pakej/teras-katalog/` | Masa jalan katalog dikongsi dengan `ICatalogStorageAdapter` DI |
| 🌐 `pakej/pelayan-api/` | API HTTP baca sahaja dengan UI OpenAPI/Swagger pada `/docs` |
| 🔌 `pakej/pelayan-mcp/` | Pelayan MCP dan kereta sampingan tempatan |
| 🤖 `pakej/pelayan-a2a/` | Pelayan A2A dan masa jalan tugas |
| 🖥️ `pakej/cli/` | Titik masuk CLI bersatu, pasang logik dan TUI visual Dakwat (ESM-asli) |
| ⚙️ `alat/skrip/` | Pengesahan, penjanaan, pengesahan dan ujian |
| 🧪 `vitest.workspace.js` | Konfigurasi ruang kerja monorepo Vitest |---

## 🧪 Release Validation

```bash
npm run smoke
```

Larian asap mengesahkan:

- ✅ pengesahan kemahiran dan penjanaan metadata
- ✅ alatan pengkategorian semula taksonomi
- ✅ penjanaan artifak katalog
- ✅ penurunan harga katalog yang dijana
- ✅ penjanaan arkib dan pengesahan
- ✅ suite ujian integrasi lama (Python PTY + Penegasan TUI Nod)
- ✅ Suite unit Vitest untuk pemarkahan teras katalog, carian dan penapisan
- ✅ `pek npm --dry-run`
- ✅ But dan kesihatan API dengan OpenAPI/Swagger UI pada `/docs`
- ✅ But MCP dalam `stdio`, `strim` dan `sse`
- ✅ But A2A, tinjauan pendapat, penstriman SSE, pembatalan dan kitaran hayat konfigurasi tekan