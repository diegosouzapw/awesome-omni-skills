# 📖 Awesome Omni Skills — Documentation Hub (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Ústredná referencia pre používanie, prispievanie a prevádzkovanie úžasných Omni Skills ako verejného úložiska zručností, kurátorského odvodeného povrchu s osvedčenými postupmi a zdieľanej runtime platformy.**

Štandardné komunitné súbory žijú v koreňovom adresári úložiska:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.m

> Balík npm, úložisko GitHub, generované dokumenty a vstupné body runtime sú teraz zarovnané na**Awesome Omni Skills**. Aktuálny stav zavádzania: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Základová dráha teraz žije v aktívnom stave projektu a druhá kategória rozšírenia je už v katalógu. Projekt by sa teraz mal chápať ako pracovný základ s voliteľnými budúcimi postupmi rozšírenia:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Budúca expanzia zostáva zámerná:

- prehĺbiť „dizajn“, „nástroje“, „data-ai“ a „strojové učenie“
- vyhýbajte sa opätovnému otváraniu spiacich nekódových pôvodných kategórií, kým súčasné kódové natívne stopy nebudú mať väčšiu hĺbku
- ponechajte pritom neporušenú cestu kontroly kvality a zlepšovača

Táto rozširovacia práca sa teraz odráža priamo v živom katalógu a dokumentoch o architektúre:

- aktuálna snímka katalógu v [Katalóg](CATALOG.md)
- runtime a tvar artefaktu v [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- smer vpred v [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills by sa mali chápať ako tri spojené povrchy:

| Povrch | Čo to je | Ako sa mení |
|:--------|:-----------|:----------------|
| 📥 `zručnosti/` | Verejný archív natívnych zručností | PR priamych prispievateľov a preskúmaný externý príjem založený na úložisku |
| ✨ `skills_omni/` | Upravený vylepšený povrch derivátu podľa osvedčených postupov | Súkromné ​​PR len doplnkové PR |
| 🖥️ Behové povrchy | CLI, API, MCP a A2A cez rovnaký vygenerovaný katalóg | Automatizácia zostavovania, overovania a uvoľňovania |---

## 📌 Current Decisions

Tieto otázky architektúry už nie sú v praxi „otvorené“ a teraz sa s nimi zaobchádza ako s projektovými rozhodnutiami:

1.**Distribúcia zostáva manifestovaná ako prvá plus podpísané archívy**
   Strojovo čitateľný manifest zostáva zmluvou spotrebovanou CLI, API, MCP a A2A. Podpísané archívy pre jednotlivé zručnosti sú povrchom na stiahnutie a uvoľnenie, ktorý je navrstvený na tejto zmluve.
2.**Súkromné alebo prémiové katalógy by mali znova používať rovnakú schému manifestu**
   Autorizácia a politika by mali byť vrstvené externe, nie rozvetvením manifestu alebo tvaru katalógu.
3.**Konfigurácia MCP by mala konvergovať na niekoľkých kanonických exportných rodinách**
   Awesome Omni Skills sa teraz štandardizuje okolo JSON `mcpServers`, JSON `serverov`, JSON `context_servers`, YAML `mcpServers`, YAML `rozšírení` a TOML `[mcp_servers]`, pričom ponecháva zákazkové zapisovače len tam, kde oficiálne klientske dokumenty vyžadujú odlišné dokumenty.

Tieto rozhodnutia sú v súlade s aktuálnou oficiálnou dokumentáciou MCP a klientskou dokumentáciou vrátane:

- oficiálny register MCP a pokyny na podporu rozšírenia na `modelcontextprotocol.io`
- Dokumenty OpenAI Docs MCP a Codex CLI na stránkach `developers.openai.com` a `platform.openai.com`
- Rozšírenie VS Code MCP a produktové dokumenty na `code.visualstudio.com`
- klientske dokumenty pre Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman a JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Čo sa naučíte |
|:----|:------------------|
| 📘 [Začíname](používatelia/GETTING-STARTED.md) | Nainštalujte, overte a vyvolajte svoju prvú zručnosť |
| 🧭 [Používateľská príručka CLI](používatelia/CLI-USER-GUIDE.md) | Úplná referencia príkazov a vzory používania CLI v reálnom svete |
| 📗 [Sprievodca používaním](používatelia/USAGE.md) | Príkazy CLI, režimy inštalácie, príkazy runtime a toky konfigurácie MCP |
| 📦 [Bundles](používatelia/BUNDLES.md) | Vybrané balíky a ich aktuálna dostupnosť |
| 📚 [Katalóg](CATALOG.md) | Automaticky generovaný katalóg publikovaných zručností |
| 🔧 [Súbor systému](operácie/RUNBOOK.md) | Zostavte, obsluhujte, zabezpečte a odstraňovajte problémy s runtime |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Čo sa naučíte |
|:----|:------------------|
| 🗂️ [Štruktúra projektu](PROJECT-STRUCTURE.md) | Kompletná referencia na adresár a súbor pre monorepo |
| 🗺️ [Agent-Native Roadmap](architektúra/AGENT-NATIVE-ROADMAP.md) | Vývoj architektúry, uzavreté rozhodnutia a zostávajúce oblasti expanzie |
| 🧭 [CLI UX Roadmap](architektúra/CLI-UX-ROADMAP.md) | Historický plán a súčasná podoba riadeného a vizuálneho CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Rozhodnutie o základnom monorepo a zdieľanom čase |
| 🔬 [Analýza kódovej bázy](architektúra/CODEBASE-ANALYSIS.md) | Aktuálne zloženie runtime, počty a hranice systému |
| 🌐 [Katalógový API povrch](špecifikácie/CATALOG-API.md) | Koncové body HTTP, filtrovanie, riadenie a sťahovanie |
| 🧩 [CLI Guided Installer](špecifikácie/CLI-GUIDED-INSTALLER.md) | Zmluva o správaní pre inštalatéra so sprievodcom |
| 🖥️ [CLI Visual Shell](špecifikácie/CLI-VISUAL-SHELL.md) | Atramentové vizuálne puzdro, model stavu a servisné centrum |
| 🔌 [Miestny MCP Sidecar](špecifikácie/LOCAL-MCP-SIDECAR.md) | Nástroje podporujúce súborový systém, model zoznamu povolených a zapisovanie konfigurácií |
| 🧭 [Klientska podpora Matica](špecifikácie/CLIENT-SUPPORT-MATRIX.md) | Podporovaní klienti CLI a IDE, zapisovače, manuálne ciele a zdrojové odkazy |
| 📊 [Klasifikácia schopností](špecifikácie/KLASIFIKÁCIA ZRUČNOSTÍ.md) | Taxonómia, heuristika hodnotenia a artefakty metadát |
| 🛡️ [Overenie zabezpečenia](špecifikácie/SECURITY-VALIDATION.md) | Skenery, archívy, podpisy a overenie vydania |
| 📋 [Skill Manifest Spec](špecifikácie/SKILL-MANIFEST.md) | Strojovo čitateľný formát manifestu a zmluva o kompatibilite |### 🤝 If You Want to **Contribute**

| Doc | Čo sa naučíte |
|:----|:------------------|
| 📝 [Sprievodca prispievaním](../CONTRIBUTING.md) | Repo workflow a očakávané požiadavky na stiahnutie |
| 🌍 [Zdroje úložiska](../REPOSITORY-SOURCES.md) | Ako navrhnúť upstream úložisko prostredníctvom normálneho verejného PR, teraz s podporou repo-first `auto` vetvy a cesty |
| 🧾 [Skill PR Workflow](prispievatelia/SKILL-PR-WORKFLOW.md) | Natívny príjem, automatické spracovanie zosilňovačov, publikovanie `skills_omni/` a očakávania recenzentov |
| 📄 [Šablóna zručností](prispievatelia/ŠABLÓNA SKILL-TEMPLATE.md) | Štartér `SKILL.md` s aktuálnym frontmaterom a štruktúrou |
| 🔬 [Skill Anatomy](prispievatelia/SKILL-ANATOMY.md) | Štruktúra a kvalita predpokladov pre zručnosť |
| ✅ [Quality Bar](prispievatelia/QUALITY-BAR.md) | Kritériá prijatia pre archív |
| 🏆 [High-Score Playbook](prispievatelia/HIGH-SCORE-PLAYBOOK.md) | Čo poháňa vysokú vyspelosť, kvalitu, osvedčené postupy a skóre bezpečnosti |---

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

Úplnú plochu príkazov pre koncového používateľa nájdete v [Príručka používateľa CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Zostavovací kanál vydáva strojovo čitateľné súbory, ktoré riadia každý povrch runtime:

| Artefakt | Účel |
|:---------|:--------|
| `metadata.json` | Overenie v celom úložisku a súhrn skóre |
| `skills_index.json` | Repo-miestny normalizovaný index zručností |
| `dist/catalog.json` | Publikovaný katalóg na vyhľadávanie a výpis |
| `dist/bundles.json` | Definície balíkov s dostupnosťou |
| `dist/manifests/<skill>.json` | Strojovo čitateľný manifest pre jednotlivé zručnosti |
| `dist/archives/<skill>.zip` | Archív zručností (zip) |
| `dist/archives/<skill>.tar.gz` | Archív zručností (tarball) |
| `dist/archives/<skill>.checksums.txt` | Manifest kontrolného súčtu SHA-256 |

`dist/` zostáva zadaný zámerne. Tieto vygenerované artefakty sú súčasťou zmluvy o inštalácii, API, MCP, A2A, dyme a vydaní.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API registra len na čítanie pre zručnosti, balíky, porovnávanie, plánovanie inštalácie a sťahovanie artefaktov.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Miestny postranný vozík teraz podporuje prvotriedny zápis konfigurácie MCP pre:

- Claude Code
- Kurzor
- VS kód a Dev kontajnery
- Gemini CLI
- Antigravitácia
- Kiro
- Codex CLI
- Pokračuj
- Windsurfing
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilový kód
- Zed
- Husi### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Životný cyklus úlohy, streamovanie, pretrvávanie, obnovenie reštartu a jednoduchá lokálna orchestrácia. Zdieľané prenajaté vykonávanie je dostupné, keď je explicitne povolené; Redis zostáva pokročilou hostovanou možnosťou, nie predvolenou miestnou cestou.---

## 🗂️ Repository Map

| Cesta | Účel |
|:-----|:--------|
| 📂 `zručnosti/` | Kanonické autorské zručnosti |
| 📖 `dokumenty/používatelia/` | Dokumentácia pre koncového používateľa |
| 🤝 `dokumenty/prispievatelia/` | Šablóny prispievateľov a pokyny |
| 🏗️ `docs/architecture/` | Plán, ADR a technická analýza |
| 🔧 `dokumenty/operácie/` | Prevádzkové príručky |
| 📋 `dokumenty/špecifikácie/` | Runtime, protokoly a kontrakty artefaktov |
| 📚 `docs/CATALOG.md` | Vygenerovaný katalóg zručností |
| 📦 `dist/` | Generované strojovo čitateľné artefakty |
| 🧠 `balíky/katalógové jadro/` | Runtime zdieľaného katalógu s `ICatalogStorageAdapter` DI |
| 🌐 `packages/server-api/` | HTTP API iba na čítanie s používateľským rozhraním OpenAPI/Swagger na `/docs` |
| 🔌 `packages/server-mcp/` | Server MCP a lokálny postranný vozík |
| 🤖 `balíčky/server-a2a/` | Spustenie servera a úloh A2A |
| 🖥️ `packages/cli/` | Zjednotené vstupné body CLI, logika inštalácie a atramentové vizuálne TUI (ESM-native) |
| ⚙️ `nástroje/skripty/` | Validácia, generovanie, overovanie a testy |
| 🧪 `vitest.workspace.js` | Konfigurácia pracovného priestoru Vitest monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

Dymový chod potvrdzuje:

- ✅ overenie zručností a generovanie metadát
- ✅ nástroje na rekategorizáciu taxonómie
- ✅ generovanie artefaktov z katalógu
- ✅ vygenerovaná katalógová značka
- ✅generovanie a overenie archívu
- ✅ starší integračný testovací balík (Python PTY + tvrdenia Node TUI)
- ✅ Súprava jednotiek Vitest na hodnotenie, vyhľadávanie a filtrovanie podľa katalógu
- ✅ `npm pack --suchý chod`
- ✅ Spúšťanie a stav API s používateľským rozhraním OpenAPI/Swagger na `/docs`
- ✅ Zavedenie MCP v `stdio`, `stream` a `sse`
- ✅ A2A boot, prieskum, streamovanie SSE, zrušenie a životný cyklus push-config