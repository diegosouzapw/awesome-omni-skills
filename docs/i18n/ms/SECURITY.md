# 🛡️ Security Policy (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Jika anda menemui isu keselamatan dalam Kemahiran Omni Hebat, jangan buka isu awam dahulu.**

Sila laporkan melalui salah satu saluran peribadi ini:

| Saluran | Bagaimana |
|:--------|:----|
| 🔒 Nasihat Keselamatan GitHub | [Buka nasihat peribadi](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Hubungan Terus | Hubungi terus penyelenggara |### 📋 Include in Your Report

- 📁 Komponen atau laluan terjejas
- 🔄 Langkah pembiakan
- ⚠️ Penilaian kesan
- 🧪 Sebarang bahan bukti konsep yang diperlukan untuk mengesahkan isu tersebut

>**⏱️ Kami menyasarkan untuk mengakui laporan dalam masa 48 jam**dan mengutamakan pembaikan mengikut impak.---

## 🎯 Scope

Dasar ini meliputi masa jalan dan permukaan kandungan repositori:

| Komponen | Laluan |
|:----------|:-----|
| 🖥️ CLI dan pemasang | `pakej/cli/` |
| 📚 Masa jalan katalog kongsi | `pakej/teras-katalog/` |
| 🔌 Pasang sasaran | `pakej/sasaran-pasang/` |
| ⚙️ Bina dan skrip pengesahan | `alat/skrip/` |
| 📦 Artifak katalog yang dijana | `dist/` |
| 🌐 Pakej API, MCP dan A2A | `pakej/pelayan-api/` · `pakej/pelayan-mcp/` · `pakej/pelayan-a2a/` |
| 🧠 Kandungan kemahiran | `kemahiran/` — terutamanya arahan shell, akses rangkaian, aliran bukti kelayakan atau panduan sensitif keselamatan |---

## 🔐 Current Security Model

Repositori bergantung pada kawalan keselamatan berikut:### 🧠 Skill-Level Controls

| Kawalan | Penerangan |
|:--------|:-----------|
| 🏷️ Bidang risiko | Metadata kemahiran termasuk tahap `risiko` yang diisytiharkan |
| 📊 Pemarkahan | Pengesahan mengira markah kematangan, amalan terbaik, kualiti dan keselamatan |
| 🔍 Pengimbas statik | Memeriksa `SKILL.md`, fail berbungkus dan skrip pembantu, dan menyekat penemuan kritikal daripada memasuki katalog awam |
| 🦠 Keluarkan pengesahan perisian hasad | Keluaran yang diterbitkan disahkan dengan kedua-dua ClamAV dan VirusTotal sebelum penerbitan |### 🚫 Hard Content Blocks

Repositori awam tidak menerima kemahiran yang menghalang pintu keselamatan kritikal. Penyekat keras semasa termasuk:

- kandungan jauh disalurkan terus ke dalam pelaksanaan shell
- arahan yang cuba mendedahkan gesaan, rahsia atau konteks masa jalan tersembunyi

Apabila pengesah menjumpai salah satu daripada corak tersebut, kemahiran itu tidak memasuki katalog awam. Dalam pengambilan repositori luar, adik-beradik yang sah masih boleh diteruskan manakala kemahiran yang disekat dikecualikan dan dilaporkan secara berasingan.### 🖥️ Runtime Controls

| Kawalan | Penerangan |
|:--------|:-----------|
| 📁 Keselamatan laluan | Aliran pemasangan menggunakan semakan keselamatan laluan |
| 🔒 Allowlist menulis | Tulisan sampingan MCP tempatan dikekang oleh senarai yang dibenarkan |
| 👁️ Lalai larian kering | Alat berorientasikan tulis lalai kepada larian kering melainkan dilumpuhkan secara eksplisit |
| 🔐 Pengesahan & had | Pengesahan pembawa/kunci API, pengesahan masa jalan pentadbir, pengehadan kadar, senarai dibenarkan CORS/IP |
| 📋 Audit | Pengelogan audit, mod penyelenggaraan dan ID permintaan |### 📦 Release Controls

| Kawalan | Penerangan |
|:--------|:-----------|
| ✅ Checksum manifes | Jumlah semak SHA-256 untuk arkib yang dijana |
| ✍️ Tandatangan | Pengesahan tandatangan terpisah dalam CI sebelum penerbitan |
| 🦠 Pintu pengimbas dwi | ClamAV dan VirusTotal kedua-duanya dikehendaki melengkapkan dengan bersih untuk penerbitan keluaran |
| 🧪 Semakan asap | Latihan permukaan masa jalan yang dihantar sebelum dikeluarkan |---

## 🔮 What Is Still Open

> Kerja keselamatan utama yang tinggal ialah**bukan**pengerasan garis dasar. Item terbuka ialah:

| Kawasan | Status |
|:-----|:-------|
| 🏢 Tadbir urus perusahaan | Identiti luaran, dasar get laluan dan integrasi WAF di atas kawalan semasa dalam proses |
| 🔌 Penulis klien MCP | Penulis yang lebih luas hanya apabila kontrak konfigurasi awam cukup stabil |
| 📊 Penapisan pengimbas | Penambahbaikan berterusan supaya kemahiran yang luar biasa kekal jelas dipisahkan daripada yang tersusun dengan baik |---

## ⚠️ Risk Levels in Skills

Setiap kemahiran mengisytiharkan satu daripada tahap `risiko` ini:

| Tahap Risiko | Maksudnya |
|:-----------|:--------|
| 🟢 `selamat` | Tiada operasi yang merosakkan dijangka |
| 🟡 `berhati-hati` | Boleh mengubah suai fail atau berinteraksi dengan sistem luaran |
| 🔴 `menyerang` | Ujian keselamatan atau aliran kerja lawan yang memerlukan kebenaran jelas |
| ⛔ `kritikal` | Berimpak tinggi atau operasi peringkat sistem |---

## 📋 Disclosure Notes

Oleh kerana Awesome Omni Skills menghantar pembantu boleh laku, alatan tempatan yang menyedari sistem fail dan penulis konfigurasi khusus pelanggan, kelas kerentanan ini harus dianggap sebagai**keutamaan tinggi**walaupun ia kelihatan "tempatan sahaja":

| Kategori | Contoh |
|:---------|:---------|
| 📁 Laluan lintasan | Melarikan direktori melalui pemasangan kemahiran atau laluan konfigurasi |
| 🔗 Keselamatan Symlink | Symlink berikut semasa pemasangan atau pengekstrakan arkib |
| 🖥️ Pelaksanaan perintah | Suntikan arahan sewenang-wenangnya melalui kandungan kemahiran atau skrip |
| 📦 Pengesahan arkib | Pintasan checksum atau pengesahan tandatangan |
| 🔓 Pintasan pengesahan | Pengehadan kadar atau pintasan pengesahan pada API/MCP |
| 🔌 Pintasan senarai benar | Pemintasan senarai dibenarkan kereta sampingan tempatan |
| 🦠 Pengelakan pengimbas | Kelas negatif palsu dalam pengimbas statik atau luaran |