# 🛡️ Security Policy (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Kung makatuklas ka ng isyu sa seguridad sa Awesome Omni Skills, huwag munang magbukas ng pampublikong isyu.**

Mangyaring mag-ulat sa pamamagitan ng isa sa mga pribadong channel na ito:

| Channel | Paano |
|:--------|:----|
| 🔒 GitHub Security Advisory | [Magbukas ng pribadong advisory](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Direktang Pakikipag-ugnayan | Direktang makipag-ugnayan sa mga tagapangasiwa |### 📋 Include in Your Report

- 📁 Apektadong bahagi o landas
- 🔄 Mga hakbang sa pagpaparami
- ⚠️ Pagsusuri ng epekto
- 🧪 Anumang proof-of-concept na materyal na kailangan para ma-verify ang isyu

>**⏱️ Nilalayon naming kilalanin ang mga ulat sa loob ng 48 oras**at unahin ang mga pag-aayos ayon sa epekto.---

## 🎯 Scope

Sinasaklaw ng patakarang ito ang runtime ng repositoryo at mga surface ng content:

| Bahagi | Landas |
|:----------|:-----|
| 🖥️ CLI at installer | `mga pakete/cli/` |
| 📚 Nakabahaging runtime ng catalog | `packages/catalog-core/` |
| 🔌 Mag-install ng mga target | `packages/install-targets/` |
| ⚙️ Gumawa at mga script ng pagpapatunay | `mga tool/script/` |
| 📦 Mga nabuong artifact ng catalog | `dist/` |
| 🌐 API, MCP, at A2A packages | `packages/server-api/` · `packages/server-mcp/` · `packages/server-a2a/` |
| 🧠 Nilalaman ng kasanayan | `skills/` — lalo na ang mga shell command, network access, credential flows, o security-sensitive na gabay |---

## 🔐 Current Security Model

Ang repository ay umaasa sa mga sumusunod na kontrol sa seguridad:### 🧠 Skill-Level Controls

| Kontrolin | Paglalarawan |
|:--------|:-----------|
| 🏷️ Field ng peligro | Kasama sa metadata ng kasanayan ang isang ipinahayag na antas ng `panganib` |
| 📊 Pagmamarka | Kinakalkula ng pagpapatunay ang maturity, pinakamahusay na kagawian, kalidad, at mga marka ng seguridad |
| 🔍 Static scanner | Sinusuri ang `SKILL.md`, mga naka-package na file, at mga script ng helper, at hinaharangan ang mga kritikal na natuklasan sa pagpasok sa pampublikong catalog |
| 🦠 Ilabas ang pag-verify ng malware | Ang mga nai-publish na release ay na-verify sa parehong ClamAV at VirusTotal bago i-publish |### 🚫 Hard Content Blocks

Ang pampublikong repositoryo ay hindi tumatanggap ng mga kasanayang nagtutulak sa kritikal na gate ng seguridad. Kasama sa kasalukuyang mga hard blocker ang:

- malayuang nilalaman na direktang ipinapatupad sa shell execution
- mga tagubilin na nagtatangkang magbunyag ng mga senyas, lihim, o nakatagong konteksto ng runtime

Kapag nahanap ng validator ang isa sa mga pattern na iyon, hindi papasok ang kasanayan sa pampublikong catalog. Sa external-repository intake, ang mga wastong kapatid ay maaari pa ring magpatuloy habang ang mga naka-block na kasanayan ay hindi kasama at iniulat nang hiwalay.### 🖥️ Runtime Controls

| Kontrolin | Paglalarawan |
|:--------|:-----------|
| 📁 Kaligtasan sa daan | Ang mga daloy ng pag-install ay gumagamit ng mga pagsusuri sa kaligtasan ng landas |
| 🔒 Allowlist writes | Lokal na MCP sidecar ay nagsusulat na pinigilan ng isang allowlist |
| 👁️ Mga default na dry-run | Ang mga tool na nakatuon sa pagsulat ay default sa dry-run maliban kung tahasang hindi pinagana |
| 🔐 Pagpapahayag at mga limitasyon | Bearer/API-key auth, admin runtime auth, rate limiting, CORS/IP allowlists |
| 📋 Pag-audit | Audit logging, maintenance mode, at request ID |### 📦 Release Controls

| Kontrolin | Paglalarawan |
|:--------|:-----------|
| ✅ Checksum manifests | Mga checksum ng SHA-256 para sa mga nabuong archive |
| ✍️ Mga Lagda | Detached signature verification sa CI bago i-publish |
| 🦠 Dual scanner gate | Parehong kinakailangan ang ClamAV at VirusTotal na kumpletuhin nang malinis para sa release publication |
| 🧪 Mga pagsusuri sa usok | Mag-ehersisyo sa mga runtime surface bago ilabas |---

## 🔮 What Is Still Open

> Ang pangunahing gawaing panseguridad na natitira ay**hindi**baseline hardening. Ang mga bukas na item ay:

| Lugar | Katayuan |
|:-----|:-------|
| 🏢 Pamamahala ng negosyo | Panlabas na pagkakakilanlan, patakaran sa gateway, at pagsasama ng WAF sa itaas ng mga kasalukuyang nasa prosesong kontrol |
| 🔌 Mga manunulat ng kliyente ng MCP | Ang mga mas malawak na manunulat lamang kapag ang mga kontrata ng pampublikong config ay sapat na matatag |
| 📊 Pagpino ng scanner | Ang patuloy na pagpipino upang ang mga pambihirang kasanayan ay manatiling malinaw na nakahiwalay sa mga mahusay lamang ang pagkakaayos |---

## ⚠️ Risk Levels in Skills

Ang bawat kasanayan ay nagdedeklara ng isa sa mga antas ng `panganib` na ito:

| Antas ng Panganib | Ibig sabihin |
|:-----------|:--------|
| 🟢 `ligtas` | Walang inaasahang mapanirang operasyon |
| 🟡 `pag-iingat` | Maaaring baguhin ang mga file o makipag-ugnayan sa mga panlabas na system |
| 🔴 `nakakasakit` | Pagsusuri sa seguridad o adversarial workflow na nangangailangan ng tahasang awtorisasyon |
| ⛔ `kritikal` | Mga operasyong may mataas na epekto o antas ng system |---

## 📋 Disclosure Notes

Dahil ang Awesome Omni Skills ay nagpapadala ng mga executable helper, filesystem-aware local tooling, at client-specific config writers, ang mga vulnerability class na ito ay dapat ituring bilang**high priority**kahit na "lokal lang" ang mga ito:

| Kategorya | Mga halimbawa |
|:---------|:---------|
| 📁 Path traversal | Directory escape sa pamamagitan ng skill install o config paths |
| 🔗 Kaligtasan ng Symlink | Symlink na sumusunod sa panahon ng pag-install o pagkuha ng archive |
| 🖥️ Pagpapatupad ng utos | Arbitrary command injection sa pamamagitan ng nilalaman ng kasanayan o mga script |
| 📦 Pag-verify ng archive | Bypass ng checksum o signature verification |
| 🔓 Awth bypass | Rate-limiting o authentication bypass sa API/MCP |
| 🔌 Allowlist bypass | Lokal na sidecar allowlist circumvention |
| 🦠 Pag-iwas sa scanner | Maling-negatibong mga klase sa static o panlabas na mga scanner |