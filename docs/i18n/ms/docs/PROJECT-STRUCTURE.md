# 🗂️ Project Structure (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Lengkapkan direktori dan rujukan fail untuk monorepo Kemahiran Omni Hebat.**---

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

>**Katalog kemahiran asli.**Ini ialah permukaan kandungan awam utama projek.

Mengandungi**154**direktori kemahiran, setiap satu dengan sekurang-kurangnya buku main `SKILL.md`. Kemahiran yang lebih besar mungkin termasuk subdirektori `ejen/`, `rujukan/`, `contoh/`, `skrip/` dan `aset/`.

Kemahiran tiba melalui dua laluan pengambilan:
-**PR penyumbang langsung**— manusia menyerahkan kemahiran secara langsung
-**Import luar berasaskan repositori**— menyemak semula PR `import-luar/*` daripada repositori huluan

| Kandungannya | Contoh |
|:-----------------|:--------|
| `kemahiran/omni-figma/SKILL.md` | Kemahiran reka bentuk ke kod Figma |
| `kemahiran/seni bina/KEMAHIRAN.md` | Kajian seni bina dan kemahiran merancang |
| `kemahiran/<nama>/metadata.json` | Pengelasan dan pemarkahan yang dijana secara automatik |---

### `skills_omni/`

>**Derivatif bahasa Inggeris yang dipertingkatkan yang disusun susun.**Dikekalkan oleh saluran paip peningkatan persendirian.

Mengandungi**110**direktori kemahiran dipertingkatkan yang mencerminkan dan menambah baik rakan asli mereka dalam `kemahiran/`. Permukaan ini**tidak dibuka untuk sumbangan orang ramai secara langsung**— ia diisi secara eksklusif oleh saluran paip penambah automatik.

Setiap derivatif mengekalkan atribusi kepada sumber asalnya sambil menyediakan standard editorial yang lebih tinggi, sentiasa dalam bahasa Inggeris.---

### `packages/`

>**Ruang kerja monorepo.**Semua kod Node.js masa jalan tinggal di sini.

| Pakej | npm Nama | Tujuan |
|:--------|:---------|:--------|
| 📂 `pakej/teras-katalog/` | `@omni-skills/catalog-core` | Masa jalan katalog dikongsi dengan suntikan pergantungan `ICatalogStorageAdapter`. Menyediakan carian, pemarkahan, perbandingan, pengesyoran dan logik pelan pemasangan yang digunakan oleh semua permukaan pelayan |
| 📂 `pakej/cli/` | (root package bin) | Titik masuk CLI bersatu, pemasang berpandu, TUI visual dakwat, diagnostik, pemeriksaan asap dan pelancar perkhidmatan. ESM asli |
| 📂 `pakej/sasaran-pasang/` | `@omni-skills/install-targets` | Pendaftaran 9 pelanggan berkebolehan memasang (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) dengan resolusi laluan dan pemetaan bendera |
| 📂 `pakej/pelayan-api/` | `@omni-skills/server-api` | API Katalog HTTP baca sahaja dengan OpenAPI 3.1, UI Swagger pada `/docs`, pengesahan, pengehadan kadar, senarai dibenarkan CORS/IP, muat turun dan masa jalan pentadbir |
| 📂 `pakej/pelayan-mcp/` | `@omni-skills/server-mcp` | Pelayan MCP menyokong pengangkutan `stdio`, `strim` dan `sse`. Mod sidecar tempatan menambah alat pemasangan/keluarkan sistem fail yang sedar dan penulisan konfigurasi MCP yang sedar pelanggan untuk 16 pelanggan yang mampu konfigurasi |
| 📂 `pakej/pelayan-a2a/` | `@omni-skills/server-a2a` | Masa jalan tugas A2A (Agent-to-Agent) dengan ketekunan JSON/SQLite, mulakan semula pemulihan, penstriman SSE, pembatalan, mod pelaksana luaran dan penyelarasan pajakan pilihan |

Setiap pakej mempunyai direktori `package.json`, `src/` sendiri dan (kecuali `install-targets`) `vitest.config.js` untuk ujian unit.---

### `dist/`

>**Artifak masa jalan yang dihasilkan.**Dengan sengaja komited terhadap kawalan versi.

Fail ini ialah output yang boleh dibaca mesin yang digunakan oleh pemasangan CLI, respons API, alat MCP, tugas A2A, ujian asap dan pengesahan keluaran. Ia dijana semula oleh `npm run build`.

| Laluan | Tujuan |
|:-----|:--------|
| `dist/catalog.json` | Katalog diterbitkan dengan kesemua 154 kemahiran, markah dan metadata |
| `dist/bundles.json` | Takrif himpunan dengan status ketersediaan ahli |
| `dist/manifests/<skill>.json` | Manifes boleh dibaca mesin setiap kemahiran |
| `dist/archives/<skill>.zip` | Arkib ZIP setiap kemahiran untuk dimuat turun |
| `dist/archives/<skill>.tar.gz` | Arkib tarball per kemahiran untuk dimuat turun |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifes setiap arkib |
| `dist/archives/<skill>.zip.sig` | Tandatangan terpisah (masa keluaran sahaja, ditandakan) |
| `dist/release-notes.md` | Nota keluaran yang dijana secara automatik (diabaikan) |
| `dist/signing/` | Bahan kunci awam yang diperolehi (diabaikan) |

>**Mengapa `dist/` dilakukan?**Kerana ia adalah sebahagian daripada kontrak pemasangan, API, MCP, A2A dan pelepasan. Pengguna mengharapkan fail ini hadir tanpa menjalankan binaan.---

### `data/`

>**Fail data projek statik.**Takrifan dikawal sumber yang mendorong gelagat binaan dan masa jalan.

| Fail | Tujuan |
|:-----|:--------|
| `data/bundles.json` | Takrif himpunan dipilih susun (senarai ahli kemahiran setiap himpunan) |
| `data/project_identity.json` | Identiti projek kanonik: nama, perihalan, halaman utama, topik GitHub, takrif permukaan masa jalan dan senarai klien |
| `data/project_status.json` | Syot kilat metrik projek yang dijana: kiraan kemahiran, markah, kiraan pelanggan, kiraan kategori dan hamparan kualiti |---

### `docs/`

>**Semua dokumentasi projek.**Dianjurkan oleh penonton.

| Laluan | Khalayak | Kandungan |
|:-----|:---------|:--------|
| `docs/README.md` | Semua orang | Hab dokumentasi — indeks pusat kepada semua dokumen |
| `docs/CATALOG.md` | Pengguna | Katalog jana automatik menyenaraikan semua 154 kemahiran dengan markah |
| `docs/PROJECT-STRUCTURE.md` | Semua orang | Fail ini — rujukan direktori projek |
| `dokumen/pengguna/` | Pengguna akhir | Bermula, panduan pengguna CLI, panduan penggunaan, himpunan, buku panduan |
| `docs/contributors/` | Penyumbang | Anatomi kemahiran, templat, aliran kerja PR, bar kualiti, buku main skor tinggi |
| `dokumen/spesifikasi/` | Arkitek | API, kereta sampingan MCP, pemasang CLI, cangkerang visual, matriks sokongan pelanggan, klasifikasi, keselamatan dan spesifikasi manifes |
| `docs/i18n/` | Pengguna antarabangsa | Terjemahan yang dijana secara automatik bagi akar README dalam 32 bahasa |#### `docs/users/`

| Fail | Tujuan |
|:-----|:--------|
| `BERMULA.md` | Pasang, sahkan dan gunakan kemahiran dalam masa kurang dari 2 minit |
| `CLI-GUIDE-GUIDE.md` | Rujukan arahan penuh dengan senario langkah demi langkah |
| `USAGE.md` | Perintah CLI, mod pemasangan, arahan masa jalan dan aliran konfigurasi MCP |
| `BUNDLES.md` | Himpunan dipilih susun dan ketersediaan semasanya |
| `KEMAHIRAN-OMNI-MEGEMPARKAN.md` | Penjenamaan semula status penghijrahan dan laporan penerimaan |
| `RUNBOOK.md` | Rujukan operasi (juga dipautkan sebagai `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Fail | Tujuan |
|:-----|:--------|
| `ANATOMI-KEMAHIRAN.md` | Struktur dan jangkaan kualiti untuk sesuatu kemahiran |
| `TEMPLAT-KEMAHIRAN.md` | Pemula `SKILL.md` dengan frontmatter semasa |
| `KEMAHIRAN-PR-ALIRAN KERJA.md` | Pengambilan asli, pemprosesan penambah dan jangkaan pengulas |
| `BAR KUALITI.md` | Kriteria penerimaan dan penanda aras semasa |
| `BUKU-MAIN-SKOR-TINGGI.md` | Perkara yang mendorong kematangan tinggi, kualiti, amalan terbaik dan skor keselamatan |#### `docs/specs/`

| Fail | Tujuan |
|:-----|:--------|
| `KATALOG-API.md` | Titik akhir HTTP, penapisan, tadbir urus dan muat turun |
| `CLI-GUIDED-INSTALLER.md` | Kontrak kelakuan untuk pemasang berpandu |
| `CLI-VISUAL-SHELL.md` | Cangkang visual dakwat, model keadaan dan hab perkhidmatan |
| `LOCAL-MCP-SIDECAR.md` | Alat yang menyedari sistem fail, model senarai yang dibenarkan dan penulisan konfigurasi |
| `MATRIX-SOKONGAN-PELANGGAN.md` | Rujukan pelanggan dan penulis penuh merentas 9 pemasangan + 16 pelanggan konfigurasi |
| `KLASIFIKASI-KEMAHIRAN.md` | Taksonomi, heuristik pemarkahan dan artifak metadata |
| `SECURITY-VALIDATION.md` | Pengimbas, arkib, tandatangan dan pengesahan keluaran |
| `KEMAHIRAN-MANIFEST.md` | Format manifes boleh dibaca mesin dan kontrak keserasian |#### `docs/i18n/`

Mengandungi**32**direktori bahasa, setiap satu dengan terjemahan `README.md`. Bahasa termasuk: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Terjemahan dijana secara automatik oleh `npm run i18n:render` dan disahkan oleh `npm run i18n:check`.---

### `tools/`

>**Bina, pengesahan dan uji infrastruktur.**Terutamanya skrip Python digunakan oleh arahan `npm run`.#### `tools/scripts/`

| Skrip | Perintah npm | Tujuan |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Mengesahkan semua fail `SKILL.md` dan menjana semula `metadata.json` |
| `metadata_kemahiran.py` | (diimport melalui pengesahan) | Pengesah monolitik teras: penghuraian bahan hadapan, taksonomi, pemarkahan, pengimbasan keselamatan |
| `recategorize_skills.py` | `npm menjalankan taksonomi:laporan` | Menunjukkan atau menggunakan normalisasi kategori kanonik |
| `generate_index.py` | `npm run index` | Menghasilkan manifes `dist/`, arkib dan jumlah semak |
| `build_catalog.js` | `npm run catalog` | Menghasilkan `docs/CATALOG.md` daripada `skills_index.json` |
| `generate_project_status.py` | `npm menjalankan projek:status` | Menghasilkan `data/project_status.json` dengan metrik semasa |
| `render_project_docs.py` | `npm run docs:render` | Kemas kini blok yang dijana dalam README, dokumen dan MENYUMBANG |
| `generate_i18n.py` | `npm run i18n:render` | Menjana atau mengemas kini terjemahan `docs/i18n/` |
| `repository_sources.py` | `npm run registry:render` | Memaparkan dan mengesahkan `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Mengesahkan penjajaran identiti package.json, README dan repo |
| `verify_archives.py` | `npm run verify:archives` | Mengesahkan integriti arkib dan tandatangan pilihan |
| `verify_security_scanners.py` | `npm run verify:scanners` | Mengesahkan liputan pengimbas dalam metadata yang dijana |
| `generate_release_notes.py` | `npm run release:notes` | Menjana nota keluaran tersuai daripada metadata dan sejarah git |
| `next_release_version.py` | `npm run release:next-version` | Mengira versi semver seterusnya menggunakan dasar patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Menyegerakkan versi merentas pakej ruang kerja |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Mencetak atau menggunakan perihalan, halaman utama dan topik GitHub |
| `sahkan_contribution_scope.py` | (CI) | Mengesahkan sempadan skop sumbangan PR |
| `install_githooks.js` | `npm run hooks:install` | Memasang cangkuk prakomit tempatan |#### `tools/scripts/tests/`

Penyepaduan dan suite ujian TUI yang digunakan oleh `npm test`:
- Ujian PTY Python Legasi
- Penegasan TUI nod
- Orkestra pelari ujian---

### `.github/`

>**Tindakan GitHub dan templat komuniti.**#### `.github/workflows/`

| Aliran kerja | Pencetus | Tujuan |
|:---------|:--------|:--------|
| `validate.yml` | Tekan/PR ke `utama` | Membina, menguji dan mengesahkan artifak yang dijana adalah komited |
| `release.yml` | Tekan teg `v*` atau penghantaran manual | Pengimbas gred keluaran, tandatangan, terbitan npm, Keluaran GitHub |
| `auto-release-skill-merges.yml` | Bercantum ke `utama` menyentuh `kemahiran/*` | Bonjolan, teg dan keluaran versi automatik pada perubahan kemahiran |
| `meningkatkan-kemahiran-pr.yml` | PR dengan perubahan kemahiran | Menjalankan saluran paip penambah peribadi dan menyiarkan rakan PR |
| `sync-repository-metadata.yml` | Perubahan kepada `data/project_identity.json` | Menyegerakkan perihalan GitHub, halaman utama dan topik |#### `.github/pull_request_template.md`

Templat PR lalai dengan senarai semak untuk sumbangan kemahiran dan masa jalan.---

### `.githooks/`

>**Kait Git Tempatan.**Dipasang melalui `npm run hooks:install`.

| Fail | Tujuan |
|:-----|:--------|
| `pra-komit` | Menjalankan pengesahan asas sebelum membenarkan komit |---

## 📄 Root Files Reference

| Fail | Tujuan |
|:-----|:--------|
| `README.md` | Projek yang menghadap awam README dengan sepanduk wira, panduan pemasangan dan gambaran keseluruhan ciri penuh |
| `MENYUMBANG.md` | Panduan penyumbang dengan kemahiran, masa jalan dan aliran kerja pengambilan |
| `SECURITY.md` | Dasar keselamatan, skop dan arahan pelaporan kerentanan |
| `CODE_OF_CONDUCT.md` | Perjanjian Penyumbang v2.1 |
| `REPOSITORY-SOURCES.md` | Pendaftaran awam cadangan repositori huluan untuk pengambilan luaran |
| `LESEN` | Lesen MIT (kod dan perkakas) |
| `KANDUNGAN LESEN` | CC BY 4.0 (dokumentasi dan kandungan kemahiran) |
| `package.json` | Pakej monorepo akar: skrip, kebergantungan, titik masuk bin, fail dan konfigurasi ruang kerja |
| `package-lock.json` | npm lockfile (dijana secara automatik) |
| `metadata.json` | Pengesahan seluruh repositori dan ringkasan skor (dijana oleh `npm run validate`) |
| `indeks_kemahiran.json` | Indeks kemahiran ternormal repo-lokal (dijana oleh `npm run validate`) |
| `.giignore` | Pengecualian kawalan versi — terutamanya `dist/` adalah**tidak**diabaikan |
| `.npmignore` | Tidak termasuk `__pycache__/` dan `*.pyc` daripada tarball npm |
| `.node-version` | Node.js versi menyemat: `22` |
| `.nvmrc` | penyematan versi nvm: `22` (cermin `.node-version`) |
| `vitest.config.js` | Konfigurasi Root Vitest merujuk kepada semua 5 konfigurasi ujian peringkat pakej |
| `vitest.workspace.js` | Definisi ruang kerja Vitest untuk pelaksanaan ujian monorepo-aware |---

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

Semua di atas dijalankan secara berurutan sebagai sebahagian daripada `npm run build`.