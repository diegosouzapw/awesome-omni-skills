# 📖 Awesome Omni Skills — Documentation Hub (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**De centrale referentie voor het gebruiken, bijdragen aan en exploiteren van Awesome Omni Skills als een openbare opslagplaats voor vaardigheden, een samengesteld oppervlak voor afgeleide best practices en een gedeeld runtimeplatform.**

Standaard communitybestanden bevinden zich in de hoofdmap van de repository:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Het npm-pakket, de GitHub-repository, de gegenereerde documenten en de runtime-ingangspunten zijn nu uitgelijnd op**Awesome Omni Skills**. Huidige implementatiestatus: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Het basistraject bevindt zich nu in de actieve projectstatus en de tweede golf van categorie-uitbreiding staat al in de catalogus. Het project moet nu worden gelezen als een werkende basislijn met optionele toekomstige uitbreidingssporen:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Toekomstige uitbreiding blijft doelbewust:

- het verdiepen van `design`, `tools`, `data-ai` en `machine-learning`
- vermijd het heropenen van slapende niet-code-native categorieën totdat de huidige code-native tracks een grotere diepgang hebben
- houd daarbij het beoordelingspad voor de kwaliteitsvloer en de verbeteraars intact

Dat uitbreidingswerk wordt nu direct weerspiegeld in de live catalogus en architectuurdocumenten:

- de huidige momentopname van de catalogus in [Catalog](CATALOG.md)
- de runtime- en artefactvorm in [Codebase Analysis](architectuur/CODEBASE-ANALYSIS.md)
- de voorwaartse richting in [Agent-Native Roadmap](architectuur/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills moeten worden gelezen als drie verbonden oppervlakken:

| Oppervlakte | Wat het is | Hoe het verandert |
|:--------|:-----------|:---------------|
| 📥 `vaardigheden/` | Openbare opslagplaats voor native vaardigheden | PR's van directe bijdragers en beoordeelde externe intake op basis van repository's |
| ✨ `skills_omni/` | Samengesteld verbeterd best-practice derivaatoppervlak | Alleen privé-enhancer-metgezel-PR's |
| 🖥️ Runtime-oppervlakken | CLI, API, MCP en A2A via dezelfde gegenereerde catalogus | Automatisering van bouwen, valideren en vrijgeven |---

## 📌 Current Decisions

Deze architectuurvragen zijn in de praktijk niet langer ‘open’ en worden nu behandeld als projectbeslissingen:

1.**Distributie blijft manifest-eerst plus ondertekende archieven**
   Het machinaal leesbare manifest blijft het contract dat wordt gebruikt door CLI, API, MCP en A2A. Ondertekende archieven per vaardigheid vormen het download- en release-oppervlak bovenop dat contract.
2.**Privé- of premiumcatalogi moeten hetzelfde manifestschema hergebruiken**
   Auth en beleid moeten extern gelaagd zijn, niet door de manifest- of catalogusvorm te splitsen.
3.**MCP-configuratie zou moeten convergeren naar een paar canonieke exportfamilies**
   Awesome Omni Skills standaardiseert nu rond JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` en TOML `[mcp_servers]`, terwijl op maat gemaakte schrijvers alleen behouden blijven waar officiële clientdocumenten een andere structuur vereisen.

Deze beslissingen komen overeen met de huidige officiële MCP- en klantdocumentatie, waaronder:

- officiële MCP-register- en extensieondersteuningsrichtlijnen op `modelcontextprotocol.io`
- OpenAI Docs MCP en Codex CLI-documenten op `developers.openai.com` en `platform.openai.com`
- VS Code MCP-extensie en productdocumentatie op `code.visualstudio.com`
- clientdocumenten voor Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman en JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dok | Wat je leert |
|:----|:------------------|
| 📘 [Aan de slag](users/GETTING-STARTED.md) | Installeer, verifieer en roep uw eerste vaardigheid aan |
| 🧭 [CLI-gebruikershandleiding](users/CLI-USER-GUIDE.md) | Volledige opdrachtreferentie en real-world CLI-gebruikspatronen |
| 📗 [Gebruiksgids](users/USAGE.md) | CLI-opdrachten, installatiemodi, runtime-opdrachten en MCP-configuratiestromen |
| 📦 [Bundels](users/BUNDLES.md) | Samengestelde bundels en hun huidige beschikbaarheid |
| 📚 [Catalogus](CATALOG.md) | Automatisch gegenereerde catalogus van gepubliceerde vaardigheden |
| 🔧 [Systeemrunbook](operations/RUNBOOK.md) | Bouw, serveer, beveilig en los problemen op met de runtime |### 🏗️ If You Want to **Understand** the Runtime

| Dok | Wat je leert |
|:----|:------------------|
| 🗂️ [Projectstructuur](PROJECT-STRUCTUUR.md) | Volledige map- en bestandsreferentie voor de monorepo |
| 🗺️ [Agent-Native Roadmap](architectuur/AGENT-NATIVE-ROADMAP.md) | Architectuurevolutie, gesloten beslissingen en resterende uitbreidingsgebieden |
| 🧭 [CLI UX Roadmap](architectuur/CLI-UX-ROADMAP.md) | Historisch plan en huidige vorm van de begeleide en visuele CLI |
| 📐 [ADR-0001: Workspace Foundation](architectuur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kernmonorepo en gedeelde runtimebeslissing |
| 🔬 [Codebase-analyse](architectuur/CODEBASE-ANALYSIS.md) | Huidige runtime-samenstelling, aantallen en systeemgrenzen |
| 🌐 [Catalog API Surface](specificaties/CATALOG-API.md) | HTTP-eindpunten, filtering, beheer en downloads |
| 🧩 [CLI begeleid installatieprogramma](specs/CLI-GUIDED-INSTALLER.md) | Gedragscontract voor de begeleide installateur |
| 🖥️ [CLI Visual Shell](specificaties/CLI-VISUAL-SHELL.md) | Inkt visuele shell, statusmodel en servicehub |
| 🔌 [Lokaal MCP-zijspan](specs/LOCAL-MCP-SIDECAR.md) | Bestandssysteembewuste tools, toelatingslijstmodel en configuratieschrijven |
| 🧭 [Clientondersteuningsmatrix](specs/CLIENT-SUPPORT-MATRIX.md) | Ondersteunde CLI- en IDE-clients, schrijvers, handmatige doelen en bronreferenties |
| 📊 [Vaardigheidsclassificatie](specs/SKILL-CLASSIFICATION.md) | Taxonomie, scoringsheuristieken en metadata-artefacten |
| 🛡️ [Beveiligingsvalidatie](specs/SECURITY-VALIDATION.md) | Scanners, archieven, handtekeningen en vrijgaveverificatie |
| 📋 [Vaardigheidsmanifestspecificatie](specs/SKILL-MANIFEST.md) | Machineleesbaar manifestformaat en compatibiliteitscontract |### 🤝 If You Want to **Contribute**

| Dok | Wat je leert |
|:----|:------------------|
| 📝 [Bijdragengids](../CONTRIBUTING.md) | Repo-workflow en verwachtingen voor pull-aanvragen |
| 🌍 [Repositorybronnen](../REPOSITORY-SOURCES.md) | Hoe stel je een upstream repository voor via een normale publieke PR, nu met repo-first `auto` branch en path-ondersteuning |
| 🧾 [Skill PR-workflow](contributors/SKILL-PR-WORKFLOW.md) | Native intake, automatische verwerking van verbeteringen, publicatie van `skills_omni/` en verwachtingen van recensenten |
| 📄 [Vaardigheidssjabloon](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` met actuele frontmaterie en structuur |
| 🔬 [Vaardigheid Anatomie](bijdragers/SKILL-ANATOMY.md) | Structuur en kwaliteitsverwachtingen voor een vaardigheid |
| ✅ [Quality Bar](bijdragers/QUALITY-BAR.md) | Acceptatiecriteria voor de repository |
| 🏆 [High-Score Playbook](bijdragers/HIGH-SCORE-PLAYBOOK.md) | Wat zorgt voor hoge volwassenheid, kwaliteit, best practices en beveiligingsscores |---

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

Voor het volledige opdrachtoppervlak voor eindgebruikers gebruikt u [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

De build-pijplijn zendt de machineleesbare bestanden uit die elk runtime-oppervlak aansturen:

| Artefact | Doel |
|:---------|:--------|
| `metadata.json` | Repository-brede validatie en scoreoverzicht |
| `skills_index.json` | Repo-lokale genormaliseerde vaardigheidsindex |
| `dist/catalog.json` | Gepubliceerde catalogus voor zoeken en aanbieden |
| `dist/bundles.json` | Bundeldefinities met beschikbaarheid |
| `dist/manifests/<skill>.json` | Machineleesbaar manifest per vaardigheid |
| `dist/archives/<vaardigheid>.zip` | Vaardighedenarchief (zip) |
| `dist/archives/<skill>.tar.gz` | Vaardighedenarchief (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum-manifest |

`dist/` blijft met opzet toegewijd. Deze gegenereerde artefacten maken deel uit van het installatie-, API-, MCP-, A2A-, rook- en releasecontract.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Alleen-lezen register-API voor vaardigheden, bundels, vergelijking, installatieplanning en artefactdownloads.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

De lokale zijspan ondersteunt nu eersteklas MCP-configuratieschrijven voor:

- Claude Code
- Cursor
- VS Code- en Dev-containers
- Gemini CLI
- Antizwaartekracht
- Kiro
- Codex CLI
- Ga door
- Windsurfen
-OpenCode
- Klijn
- GitHub Copilot-CLI
- Kilocode
- Zed
- Gans### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Taaklevenscyclus, streaming, persistentie, herstartherstel en eenvoudige lokale orkestratie. Gedeelde lease-uitvoering is beschikbaar indien expliciet ingeschakeld; Redis blijft een geavanceerde gehoste optie, niet het standaard lokale pad.---

## 🗂️ Repository Map

| Pad | Doel |
|:-----|:--------|
| 📂 `vaardigheden/` | Canonieke auteursvaardigheden |
| 📖 `docs/gebruikers/` | Documentatie voor eindgebruikers |
| 🤝 `docs/bijdragers/` | Sjablonen en begeleiding voor bijdragers |
| 🏗️`docs/architectuur/` | Routekaart, ADR's en technische analyse |
| 🔧 `docs/operaties/` | Operationele runbooks |
| 📋 `docs/specificaties/` | Runtime-, protocol- en artefactcontracten |
| 📚 `docs/CATALOG.md` | Gegenereerde vaardighedencatalogus |
| 📦 `dist/` | Gegenereerde machinaal leesbare artefacten |
| 🧠 `pakketten/catalog-core/` | Runtime van gedeelde catalogus met `ICatalogStorageAdapter` DI |
| 🌐 `pakketten/server-api/` | Alleen-lezen HTTP-API met OpenAPI/Swagger UI op `/docs` |
| 🔌 `pakketten/server-mcp/` | MCP-server en lokale zijspan |
| 🤖 `pakketten/server-a2a/` | A2A-server en taakruntime |
| 🖥️`pakketten/cli/` | Unified CLI-ingangspunten, installatielogica en Ink visuele TUI (ESM-native) |
| ⚙️ `tools/scripts/` | Validatie, generatie, verificatie en tests |
| 🧪 `vitest.workspace.js` | Vitest monorepo-werkruimteconfiguratie |---

## 🧪 Release Validation

```bash
npm run smoke
```

De rookrun valideert:

- ✅ validatie van vaardigheden en het genereren van metadata
- ✅ Tooling voor hercategorisatie van taxonomie
- ✅ genereren van catalogusartefacten
- ✅ gegenereerde catalogusprijsverlaging
- ✅ archief genereren en verifiëren
- ✅ oudere integratietestsuite (Python PTY + Node TUI-beweringen)
- ✅ Vitest-unitsuite voor scoren, zoeken en filteren in de cataloguskern
- ✅ `npm pack --drooglopen`
- ✅ API-opstarten en gezondheid met OpenAPI/Swagger UI op `/docs`
- ✅ MCP-boot in `stdio`, `stream` en `sse`
- ✅ A2A-opstarten, polling, SSE-streaming, annulering en push-config-levenscyclus