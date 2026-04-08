# 📖 Awesome Omni Skills — Documentation Hub (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Keskeinen viite Awesome Omni Skillsin käyttöön, edistämiseen ja käyttämiseen julkisena taitovarastona, kuratoituna parhaiden käytäntöjen johdannaispintana ja jaettuna ajonaikaisena alustana.**

Vakioyhteisötiedostot ovat arkiston juuressa:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`KÄYTTÖKOODI.md`](../CODE_OF_OF)

> Npm-paketti, GitHub-tietovarasto, luodut asiakirjat ja ajonaikaiset aloituspisteet on nyt kohdistettu**Awesome Omni Skillsin**mukaan. Nykyinen käyttöönottotila: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Perusrata elää nyt aktiivisessa projektitilassa ja toinen kategoria-laajennusaalto on jo luettelossa. Projektia pitäisi nyt lukea toimivana lähtökohtana, jossa on valinnaisia ​​tulevia laajennusraitoja:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Tuleva laajentaminen on tarkoituksellista:

- syventää "design", "työkalut", "data-ai" ja "koneoppiminen"
- Vältä uinuvien ei-koodattujen luokkien avaamista uudelleen, kunnes nykyiset koodinatiivikappaleet ovat syvempiä
- Pidä laatulattia ja tehostimen tarkistuspolku ennallaan samalla

Tämä laajennustyö näkyy nyt suoraan live-luettelossa ja arkkitehtuuridokumenteissa:

- nykyisen luettelon tilannekuva kohteessa [Katalogi](CATALOG.md)
- suoritusaika ja artefaktin muoto [Codebase Analysis] -sovelluksessa (architecture/CODEBASE-ANALYSIS.md)
- eteenpäin suunta [Agent-Native Roadmap]:ssa (architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills -taidot tulisi lukea kolmena toisiinsa liittyvänä pinnana:

| Pinta | Mikä se on | Miten se muuttuu |
|:--------|:-----------|:----------------|
| 📥 `taidot/` | Julkinen natiivitaitovarasto | Suoran avustajan PR:t ja tarkistettu tietovarastopohjainen ulkoinen vastaanotto |
| ✨ `skills_omni/` | Kuratoitu, parannettu parhaiden käytäntöjen johdannaispinta | Vain yksityiset tehostajakumppanit |
| 🖥️ Ajonaikaiset pinnat | CLI, API, MCP ja A2A saman luodun luettelon kautta | Rakennus-, validointi- ja julkaisuautomaatio |---

## 📌 Current Decisions

Nämä arkkitehtuurikysymykset eivät ole enää "avoimia" käytännössä ja niitä käsitellään nyt projektipäätöksinä:

1.**Jakelu pysyy luettelossa ensin plus allekirjoitetut arkistot**
   Koneluettava luettelo pysyy CLI:n, API:n, MCP:n ja A2A:n käyttämänä sopimuksena. Allekirjoitetut taitokohtaiset arkistot ovat lataus- ja julkaisupinta kerrostettuna kyseisen sopimuksen päälle.
2.**Yksityisten tai premium-luetteloiden tulee käyttää uudelleen samaa luettelomallia**
   Auth ja käytäntö tulee kerrostaa ulkoisesti, ei haaroittamalla luettelon tai luettelon muotoa.
3.**MCP-kokoonpanon tulisi konvergoida muutamaan ensisijaiseen vientiperheeseen**
   Awesome Omni Skills standardoituu nyt JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` ja TOML `[mcp_servers]` ympärille, mutta säilytetään vain virallisia asiakasrakenteita edellyttäviä asiakirjoja.

Nämä päätökset ovat yhdenmukaisia nykyisen virallisen MCP- ja asiakasdokumentaation kanssa, mukaan lukien:

- virallinen MCP-rekisteri- ja laajennustukiohjeet osoitteessa "modelcontextprotocol.io".
- OpenAI Docs MCP- ja Codex CLI -asiakirjat osoitteessa "developers.openai.com" ja "platform.openai.com"
- VS Coden MCP-laajennus ja tuotedokumentit osoitteessa "code.visualstudio.com".
- asiakasdokumentit Claude Codelle, Cursorille, Continuelle, Junielle, Kirolle, OpenCodelle, Clinelle, Kilo Codelle, GitHub Copilot CLI:lle, Zedille, Gooselle, Postmanille ja JetBrains AI Assistantille---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Mitä opit |
|:----|:-------------------|
| 📘 [Aloitus](users/GETTING-STARTED.md) | Asenna, tarkista ja käynnistä ensimmäinen taitosi |
| 🧭 [CLI-käyttöopas](users/CLI-USER-GUIDE.md) | Täysi komentoviittaus ja todelliset CLI-käyttötavat |
| 📗 [Käyttöopas](users/USAGE.md) | CLI-komennot, asennustilat, ajonaikaiset komennot ja MCP-määritysvirrat |
| 📦 [Numput](users/BUNDLES.md) | Kuroidut paketit ja niiden nykyinen saatavuus |
| 📚 [Katalogi](CATALOG.md) | Automaattisesti luotu luettelo julkaistuista taidoista |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Rakenna, palvele, suojaa ja suorita vianmääritys |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Mitä opit |
|:----|:-------------------|
| 🗂️ [Projektin rakenne](PROJECT-STRUCTURE.md) | Täydellinen hakemisto- ja tiedostoviite monorepon |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkkitehtuurin kehitys, suljetut päätökset ja jäljellä olevat laajennusalueet |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Ohjatun ja visuaalisen CLI:n historiallinen suunnitelma ja nykyinen muoto |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Ydin monorepo ja jaettu ajonaikainen päätös |
| 🔬 [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) | Nykyinen ajonaikainen koostumus, määrät ja järjestelmän rajat |
| 🌐 [Katalogisovellusliittymän pinta](specs/CATALOG-API.md) | HTTP-päätepisteet, suodatus, hallinta ja lataukset |
| 🧩 [CLI-opastettu asennusohjelma](specs/CLI-GUIDED-INSTALLER.md) | Ohjatun asentajan käyttäytymissopimus |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Musteen visuaalinen kuori, tilamalli ja palvelukeskus |
| 🔌 [Paikallinen MCP-sivuvaunu](specs/LOCAL-MCP-SIDECAR.md) | Tiedostojärjestelmätietoiset työkalut, sallittujen luettelomalli ja asetusten kirjoittaminen |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Tuetut CLI- ja IDE-asiakkaat, kirjoittajat, manuaaliset kohteet ja lähdeviitteet |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taksonomia, pisteytysheuristiikka ja metatietojen artefaktit |
| 🛡️ [Turvallisuusvahvistus](specs/SECURITY-VALIDATION.md) | Skannerit, arkistot, allekirjoitukset ja julkaisun vahvistus |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Koneluettava luettelomuoto ja yhteensopivuussopimus |### 🤝 If You Want to **Contribute**

| Doc | Mitä opit |
|:----|:-------------------|
| 📝 [Käyttäjäopas](../CONTRIBUTING.md) | Repo työnkulku ja vetopyynnön odotukset |
| 🌍 [Arkistolähteet](../REPOSITORY-SOURCES.md) | Kuinka ehdottaa ylävirran arkistoa tavallisen julkisen PR:n kautta, nyt repo-first "auto" haara- ja polkutuella |
| 🧾 [Skill PR-työnkulku](contributors/SKILL-PR-WORKFLOW.md) | Alkuperäinen otto, automaattinen tehostimen käsittely, `skills_omni/` -julkaisu ja arvioijan odotukset |
| 📄 [Skill Template](contributors/SKILL-TEMPLATE.md) | Startti `SKILL.md` nykyisellä frontmatterilla ja rakenteella |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Taidon rakenne ja laatuvaatimukset |
| ✅ [Laatupalkki](contributors/QUALITY-BAR.md) | Arkiston hyväksymiskriteerit |
| 🏆 [High-score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Mikä edistää korkeaa kypsymistä, laatua, parhaita käytäntöjä ja turvallisuuspisteitä |---

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

Täydellisen loppukäyttäjän komentopinnan saat käyttämällä [CLI-käyttöopasta](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Rakennusputki lähettää koneellisesti luettavat tiedostot, jotka ohjaavat jokaista ajonaikaista pintaa:

| Artefaktti | Tarkoitus |
|:---------|:--------|
| `metadata.json` | Tietovaraston laajuinen validointi ja tulosten yhteenveto |
| `skills_index.json` | Repo-paikallinen normalisoitu taitoindeksi |
| `dist/catalog.json` | Julkaistu luettelo hakua ja luettelointia varten |
| `dist/bundles.json` | Nipun määritelmät saatavuudella |
| `dist/manifests/<taito>.json` | Koneluettava luettelo taitokohtaisesti |
| `dist/archives/<taito>.zip` | Taitoarkisto (zip) |
| `dist/archives/<taito>.tar.gz` | Taitoarkisto (tarball) |
| `dist/archives/<taito>.checksums.txt` | SHA-256-tarkistussummaluettelo |

`dist/` pysyy tarkoituksella sitoutuneena. Nämä luodut artefaktit ovat osa asennus-, API-, MCP-, A2A-, savu- ja julkaisusopimusta.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Vain luku -rekisterisovellusliittymä taitojen, pakettien, vertailun, asennuksen suunnittelun ja artefaktien lataamiseen.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Paikallinen sivuvaunu tukee nyt ensiluokkaista MCP-asetusten kirjoittamista:

- Claude Code
- Kursori
- VS Code ja Dev Containers
- Gemini CLI
- Antigravitaatio
- Kiro
- Codex CLI
- Jatka
- Purjelautailu
- OpenCode
- Cline
- GitHub Copilot CLI
- kilokoodi
- Zed
- Hanhi### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Tehtävän elinkaari, suoratoisto, pysyvyys, uudelleenkäynnistyksen palautus ja yksinkertainen ensin paikallinen orkestrointi. Jaettu vuokrattu toteutus on käytettävissä, kun se on erikseen otettu käyttöön; Redis on edelleen kehittynyt isännöity vaihtoehto, ei oletusarvoinen paikallinen polku.---

## 🗂️ Repository Map

| Polku | Tarkoitus |
|:-----|:--------|
| 📂 `taidot/` | Kanoniset taidot |
| 📖 `dokumentit/käyttäjät/` | Loppukäyttäjän dokumentaatio |
| 🤝 `asiakirjat/avustajat/` | Osallistujien mallit ja ohjeet |
| 🏗️ `docs/architecture/` | Etenemissuunnitelma, ADR:t ja tekninen analyysi |
| 🔧 `asiakirjat/toiminnot/` | Operatiiviset runbookit |
| 📋 `docs/specs/` | Suoritusaika-, protokolla- ja artefaktisopimukset |
| 📚 `docs/CATALOG.md` | Luotu taitoluettelo |
| 📦 `dist/` | Luodut koneellisesti luettavat esineet |
| 🧠 `paketit/catalog-core/` | Jaettu luettelon suoritusaika ICatalogStorageAdapter DI:n kanssa |
| 🌐 `paketit/palvelin-api/` | Vain luku -muotoinen HTTP-sovellusliittymä OpenAPI/Swagger-käyttöliittymällä kohteessa "/docs" |
| 🔌 `paketit/palvelin-mcp/` | MCP-palvelin ja paikallinen sivuvaunu |
| 🤖 `paketit/palvelin-a2a/` | A2A-palvelin ja tehtävän suoritusaika |
| 🖥️ `paketit/cli/` | Yhdistetyt CLI-alkupisteet, asennuslogiikka ja Ink-visuaalinen TUI (ESM-natiivi) |
| ⚙️ `työkalut/skriptit/` | Validointi, generointi, todentaminen ja testit |
| 🧪 `vitest.workspace.js` | Vitest monorepo -työtilan kokoonpano |---

## 🧪 Release Validation

```bash
npm run smoke
```

Savuajo vahvistaa:

- ✅ taitojen validointi ja metatietojen luominen
- ✅ taksonomian uudelleenluokittelutyökalut
- ✅ katalogin artefaktien sukupolvi
- ✅ luotu katalogi
- ✅ arkiston luonti ja tarkistus
- ✅ vanha integraatiotestipaketti (Python PTY + Node TUI väitteet)
- ✅ Vitest-yksikköpaketti luetteloiden ydinpisteiden määrittämiseen, hakuun ja suodattamiseen
- ✅ `npm pack --dry-run`
- ✅ API-käynnistys ja kunto OpenAPI/Swagger-käyttöliittymällä `/docsissa'
- ✅ MCP-käynnistys "stdio", "stream" ja "sse" kohdissa
- ✅ A2A-käynnistyksen, kyselyn, SSE-suoratoiston, peruutuksen ja push-config-elinkaari