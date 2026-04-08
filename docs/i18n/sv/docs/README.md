# 📖 Awesome Omni Skills — Documentation Hub (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Den centrala referensen för att använda, bidra till och driva Awesome Omni Skills som ett offentligt färdighetsarkiv, en utvald yta för bästa praxis och en delad körtidsplattform.**

Standardgemenskapsfiler finns i arkivets rot:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_DUCT.md)

> Paketet npm, GitHub-förrådet, genererade dokument och runtime-ingångspunkter är nu anpassade till**Awesome Omni Skills**. Aktuellt utbyggnadstillstånd: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Grundspåret lever nu i det aktiva projekttillståndet, och den andra kategoriexpansionsvågen finns redan i katalogen. Projektet bör nu läsas som en fungerande baslinje med valfria framtida expansionsspår:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Framtida expansion förblir avsiktlig:

- fördjupa "design", "verktyg", "data-ai" och "maskininlärning"
- undvik att återöppna vilande icke-kod-infödda kategorier tills de nuvarande kod-native spåren har starkare djup
- Håll kvalitetsgolvet och granskningsvägen för förstärkare intakt medan du gör det

Det expansionsarbetet återspeglas nu direkt i livekatalogen och arkitekturdokumenten:

- den aktuella katalogens ögonblicksbild i [Catalog](CATALOG.md)
- körtiden och artefaktformen i [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- riktningen framåt i [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills bör läsas som tre sammankopplade ytor:

| Yta | Vad det är | Hur det förändras |
|:--------|:-----------|:--------------|
| 📥 `färdigheter/` | Offentligt arkiv för inhemska färdigheter | Direkta bidragsgivares PR och granskade förvarsbaserade externa intag |
| ✨ `skills_omni/` | Kurerad förbättrad bästa praxis derivatyta | Endast privata förstärkare följeslagare |
| 🖥️ Runtime ytor | CLI, API, MCP och A2A över samma genererade katalog | Bygg, validera och släpp automatisering |---

## 📌 Current Decisions

Dessa arkitekturfrågor är inte längre "öppna" i praktiken och behandlas nu som projektbeslut:

1.**Distributionen förblir manifest-först plus signerade arkiv**
   Det maskinläsbara manifestet förblir kontraktet som konsumeras av CLI, API, MCP och A2A. Undertecknade arkiv per färdighet är nedladdnings- och frisläppningsytan som ligger i lager ovanpå det kontraktet.
2.**Privata eller premiumkataloger bör återanvända samma manifestschema**
   Autentisering och policy bör lagras externt, inte genom att dela manifest- eller katalogformen.
3.**MCP-konfiguration bör konvergera på några kanoniska exportfamiljer**
   Awesome Omni Skills standardiserar nu kring JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` och TOML `[mcp_servers]`, samtidigt som skräddarsydda skribenter endast behålls där officiella klientdokument kräver en annan struktur.

Dessa beslut överensstämmer med nuvarande officiella MCP och kunddokumentation, inklusive:

- officiell vägledning för MCP-registret och förlängningsstöd på `modelcontextprotocol.io`
- OpenAI Docs MCP och Codex CLI-dokument på `developers.openai.com` och `platform.openai.com`
- VS Code MCP-tillägg och produktdokumentation på `code.visualstudio.com`
- klientdokument för Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman och JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 📘 [Komma igång](användare/KOMMA Igång.md) | Installera, verifiera och åberopa din första färdighet |
| 🧭 [CLI User Guide](users/CLI-USER-GUIDE.md) | Fullständig kommandoreferens och verkliga CLI-användningsmönster |
| 📗 [Användningsguide](users/USAGE.md) | CLI-kommandon, installationslägen, runtime-kommandon och MCP-konfigurationsflöden |
| 📦 [Bundles](users/BUNDLES.md) | Utvalda paket och deras nuvarande tillgänglighet |
| 📚 [Katalog](CATALOG.md) | Autogenererad katalog över publicerade färdigheter |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Bygg, betjäna, säkra och felsök körtiden |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 🗂️ [Projektstruktur](PROJECT-STRUCTURE.md) | Komplett katalog och filreferens för monorepo |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturutveckling, slutna beslut och återstående expansionsområden |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Historisk plan och nuvarande form av den guidade och visuella CLI |
| 📐 [ADR-0001: Workspace Foundation](arkitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo och shared runtime-beslut |
| 🔬 [Kodbasanalys](arkitektur/CODEBASE-ANALYSIS.md) | Aktuell körtidssammansättning, antal och systemgränser |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | HTTP-slutpunkter, filtrering, styrning och nedladdningar |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Beteendekontrakt för den guidade installatören |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Bläck visuellt skal, tillståndsmodell och servicenav |
| 🔌 [Local MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Filsystemmedvetna verktyg, godkännandelistamodell och konfigurationsskrivning |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Stöds CLI- och IDE-klienter, skribenter, manuella mål och källreferenser |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taxonomi, poängheuristik och metadataartefakter |
| 🛡️ [Säkerhetsvalidering](specs/SECURITY-VALIDATION.md) | Skannrar, arkiv, signaturer och verifiering av release |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Maskinläsbart manifestformat och kompatibilitetskontrakt |### 🤝 If You Want to **Contribute**

| Doc | Vad du kommer att lära dig |
|:----|:------------------------|
| 📝 [Bidragsguide](../CONTRIBUTING.md) | Repo arbetsflöde och förväntningar på pull begäran |
| 🌍 [Repository Sources](../REPOSITORY-SOURCES.md) | Hur man föreslår ett uppströmsförvar genom en normal offentlig PR, nu med repo-först "auto" filial och vägstöd |
| 🧾 [Skill PR Workflow](bidragsgivare/SKILL-PR-WORKFLOW.md) | Inbyggt intag, automatisk förstärkarbearbetning, `skills_omni/`-publicering och granskares förväntningar |
| 📄 [Skill Template](contributors/SKILL-MALL.md) | Starter `SKILL.md` med aktuell frontmateria och struktur |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Struktur och kvalitetsförväntningar på en kompetens |
| ✅ [Kvalitetsfält](medverkande/QUALITY-BAR.md) | Acceptanskriterier för förvaret |
| 🏆 [High-Score Playbook](bidragsgivare/HIGH-SCORE-PLAYBOOK.md) | Vad driver hög mognad, kvalitet, bästa praxis och säkerhetspoäng |---

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

Använd [CLI User Guide](users/CLI-USER-GUIDE.md) för den fullständiga kommandoytan för slutanvändare.### 📁 Generated Artifacts

Byggpipelinen sänder ut de maskinläsbara filerna som driver varje runtime-yta:

| Artefakt | Syfte |
|:--------|:--------|
| `metadata.json` | Förvarsomfattande validering och poängsammanfattning |
| `skills_index.json` | Repo-lokalt normaliserat skicklighetsindex |
| `dist/catalog.json` | Publicerad katalog för sökning och listning |
| `dist/bundles.json` | Paketdefinitioner med tillgänglighet |
| `dist/manifests/<skill>.json` | Maskinläsbart manifest per färdighet |
| `dist/archives/<skill>.zip` | Skicklighetsarkiv (zip) |
| `dist/archives/<skill>.tar.gz` | Skicklighetsarkiv (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest |

`dist/` förblir begått med avsikt. Dessa genererade artefakter är en del av installations-, API-, MCP-, A2A-, rök- och releasekontraktet.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Skrivskyddat register-API för färdigheter, paket, jämförelse, installationsplanering och nedladdningar av artefakter.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Den lokala sidovagnen stöder nu förstklassig MCP-konfigurationsskrivning för:

- Claude Code
- Markör
- VS Code och Dev Containers
- Gemini CLI
- Antigravitation
- Kiro
- Codex CLI
- Fortsätt
- Vindsurfa
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilokod
- Zed
- Gås### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Uppgiftens livscykel, streaming, persistens, återstart av återställning och enkel-först lokal orkestrering. Delad leasingutförande är tillgängligt när det är uttryckligen aktiverat; Redis förblir ett avancerat värdalternativ, inte den lokala standardsökvägen.---

## 🗂️ Repository Map

| Väg | Syfte |
|:-----|:--------|
| 📂 `färdigheter/` | Kanoniska författade färdigheter |
| 📖 `docs/users/` | Slutanvändardokumentation |
| 🤝 `dokument/bidragsgivare/` | Bidragsgivare mallar och vägledning |
| 🏗️ `docs/architecture/` | Färdkarta, ADR och teknisk analys |
| 🔧 `docs/operations/` | Operationella runbooks |
| 📋 `docs/specs/` | Körtid, protokoll och artefaktkontrakt |
| 📚 `docs/CATALOG.md` | Genererad färdighetskatalog |
| 📦 `dist/` | Genererade maskinläsbara artefakter |
| 🧠 `paket/katalog-kärna/` | Delad katalogkörning med `ICatalogStorageAdapter` DI |
| 🌐 `paket/server-api/` | Skrivskyddat HTTP API med OpenAPI/Swagger UI på `/docs` |
| 🔌 `paket/server-mcp/` | MCP-server och lokal sidovagn |
| 🤖 `paket/server-a2a/` | A2A-server och uppgiftskörning |
| 🖥️ `paket/cli/` | Unified CLI-ingångspunkter, installationslogik och Ink Visual TUI (ESM-native) |
| ⚙️ `verktyg/skript/` | Validering, generering, verifiering och tester |
| 🧪 `vitest.workspace.js` | Vitest monorepo arbetsyta konfiguration |---

## 🧪 Release Validation

```bash
npm run smoke
```

Rökkörningen bekräftar:

- ✅ kompetensvalidering och generering av metadata
- ✅ verktyg för omkategorisering av taxonomi
- ✅ katalogartefaktgenerering
- ✅ genererad katalognedsättning
- ✅ arkivgenerering och verifiering
- ✅ äldre integrationstestsvit (Python PTY + Node TUI-påståenden)
- ✅ Vitest-enhetssvit för poängsättning, sökning och filtrering i katalogkärnan
- ✅ `npm pack --dry-run`
- ✅ API-start och hälsa med OpenAPI/Swagger UI på `/docs`
- ✅ MCP-start i "stdio", "stream" och "sse".
- ✅ A2A-start, polling, SSE-streaming, annullering och push-config livscykel