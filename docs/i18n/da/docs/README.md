# 📖 Awesome Omni Skills — Documentation Hub (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Den centrale reference til at bruge, bidrage til og drive Awesome Omni Skills som et offentligt færdighedslager, en kureret best-practice-afledt overflade og en delt runtime-platform.**

Standard fællesskabsfiler findes i lagerroden:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_DUCT.md)

> npm-pakken, GitHub-lageret, genererede dokumenter og runtime-indgangspunkter er nu justeret på**Awesome Omni Skills**. Aktuel udrulningstilstand: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Grundsporet lever nu i den aktive projekttilstand, og den anden kategori-udvidelsesbølge er allerede i kataloget. Projektet skal nu læses som en fungerende baseline med valgfrie fremtidige ekspansionsspor:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Fremtidig udvidelse forbliver bevidst:

- uddybe `design`, `værktøjer`, `data-ai` og `machine-learning`
- undgå at genåbne slumrende ikke-kodeindfødte kategorier, indtil de nuværende kodeindfødte spor har stærkere dybde
- Hold kvalitetsgulvet og forbedrerens gennemgang intakt, mens du gør det

Dette udvidelsesarbejde afspejles nu direkte i livekataloget og arkitekturdokumenterne:

- det aktuelle katalog-øjebliksbillede i [Catalog](CATALOG.md)
- Runtime og artefaktformen i [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- den fremadrettede retning i [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills skal læses som tre forbundne overflader:

| Overflade | Hvad er det | Hvordan det ændrer sig |
|:--------|:-----------|:--------------|
| 📥 `færdigheder/` | Offentligt native færdighedslager | Direkte bidragyder-PR'er og revideret lagerbaseret eksternt indtag |
| ✨ `skills_omni/` | Kurateret forbedret best-practice afledt overflade | Kun private enhancer-ledsager PR'er |
| 🖥️ Runtime overflader | CLI, API, MCP og A2A over det samme genererede katalog | Byg, validering og frigivelsesautomatisering |---

## 📌 Current Decisions

Disse arkitekturspørgsmål er ikke længere "åbne" i praksis og behandles nu som projektbeslutninger:

1.**Distribution forbliver manifest-først plus signerede arkiver**
   Det maskinlæsbare manifest forbliver kontrakten, der forbruges af CLI, API, MCP og A2A. Underskrevne per-skill-arkiver er download- og frigivelsesoverfladen lagt oven på den kontrakt.
2.**Private eller premium-kataloger bør genbruge det samme manifest-skema**
   Godkendelse og politik bør være lagdelt eksternt, ikke ved at forkaste manifestet eller katalogformen.
3.**MCP-konfiguration bør konvergere på nogle få kanoniske eksportfamilier**
   Awesome Omni Skills standardiserer nu omkring JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` og TOML `[mcp_servers]`, mens skræddersyede forfattere kun bevares, hvor officielle klientdokumenter kræver en anden struktur.

Disse beslutninger stemmer overens med den nuværende officielle MCP og klientdokumentation, herunder:

- officiel MCP-registrering og udvidelsesstøttevejledning på `modelcontextprotocol.io`
- OpenAI Docs MCP og Codex CLI-dokumenter på `developers.openai.com` og `platform.openai.com`
- VS Code MCP-udvidelse og produktdokumenter på `code.visualstudio.com`
- klientdokumenter til Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman og JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Hvad du vil lære |
|:----|:------------------------|
| 📘 [Kom godt i gang](brugere/KOM I GANG.md) | Installer, bekræft og påkald din første færdighed |
| 🧭 [CLI-brugervejledning](users/CLI-USER-GUIDE.md) | Fuld kommandoreference og CLI-brugsmønstre i den virkelige verden |
| 📗 [Brugsvejledning](brugere/USAGE.md) | CLI-kommandoer, installationstilstande, runtime-kommandoer og MCP-konfigurationsflow |
| 📦 [Bundler](brugere/BUNDLES.md) | Kurerede bundter og deres nuværende tilgængelighed |
| 📚 [Katalog](CATALOG.md) | Autogenereret katalog over offentliggjorte færdigheder |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Byg, servér, sikre og fejlfind kørselstiden |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Hvad du vil lære |
|:----|:------------------------|
| 🗂️ [Projektstruktur](PROJECT-STRUCTURE.md) | Komplet mappe og filreference for monorepo |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturudvikling, lukkede beslutninger og resterende udvidelsesområder |
| 🧭 [CLI UX-køreplan](arkitektur/CLI-UX-ROADMAP.md) | Historisk plan og nuværende form af den guidede og visuelle CLI |
| 📐 [ADR-0001: Workspace Foundation](arkitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo og shared runtime-beslutning |
| 🔬 [Kodebaseanalyse](arkitektur/CODEBASE-ANALYSIS.md) | Nuværende runtime-sammensætning, tællinger og systemgrænser |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | HTTP-slutpunkter, filtrering, styring og downloads |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Adfærdskontrakt for den guidede installatør |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Blækvisuel skal, tilstandsmodel og servicehub |
| 🔌 [Local MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Filsystembevidste værktøjer, tilladelseslistemodel og konfigurationsskrivning |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Understøttede CLI- og IDE-klienter, skribenter, manuelle mål og kildehenvisninger |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taksonomi, scoreheuristik og metadataartefakter |
| 🛡️ [Sikkerhedsvalidering](specs/SECURITY-VALIDATION.md) | Scannere, arkiver, signaturer og udgivelsesbekræftelse |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Maskinlæsbart manifestformat og kompatibilitetskontrakt |### 🤝 If You Want to **Contribute**

| Doc | Hvad du vil lære |
|:----|:------------------------|
| 📝 [Bidragende vejledning](../CONTRIBUTING.md) | Forventninger til repo-workflow og pull-anmodninger |
| 🌍 [Repository Sources](../REPOSITORY-SOURCES.md) | Hvordan man foreslår et opstrøms depot gennem en normal offentlig PR, nu med repo-første "auto" filial og sti support |
| 🧾 [Skill PR Workflow](bidragydere/SKILL-PR-WORKFLOW.md) | Native indtag, automatisk enhancer-behandling, `skills_omni/`-publicering og anmeldernes forventninger |
| 📄 [Skill Template](bidragsydere/SKILL-TEMPLATE.md) | Starter `SKILL.md` med aktuel frontmaterie og struktur |
| 🔬 [Skill Anatomy](bidragsydere/SKILL-ANATOMY.md) | Struktur og kvalitetsforventninger til en færdighed |
| ✅ [Kvalitetsbar](bidragydere/QUALITY-BAR.md) | Acceptkriterier for depotet |
| 🏆 [High-Score Playbook](bidragydere/HIGH-SCORE-PLAYBOOK.md) | Hvad driver høj modenhed, kvalitet, bedste praksis og sikkerhedsresultater |---

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

Brug [CLI User Guide](users/CLI-USER-GUIDE.md) for at få den komplette slutbrugerkommandooverflade.### 📁 Generated Artifacts

Byggepipelinen udsender de maskinlæsbare filer, der driver hver runtime-overflade:

| Artefakt | Formål |
|:--------|:--------|
| `metadata.json` | Repository-dækkende validering og resultatoversigt |
| `skills_index.json` | Repo-lokalt normaliseret færdighedsindeks |
| `dist/catalog.json` | Udgivet katalog til søgning og liste |
| `dist/bundles.json` | Bundle definitioner med tilgængelighed |
| `dist/manifests/<skill>.json` | Maskinlæsbart manifest pr. færdighed |
| `dist/archives/<skill>.zip` | Færdighedsarkiv (zip) |
| `dist/archives/<skill>.tar.gz` | Færdighedsarkiv (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrolsummanifest |

`dist/` forbliver begået med vilje. Disse genererede artefakter er en del af installations-, API-, MCP-, A2A-, røg- og frigivelseskontrakten.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Skrivebeskyttet registrerings-API til færdigheder, bundter, sammenligning, installationsplanlægning og artefaktdownloads.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Den lokale sidevogn understøtter nu førsteklasses MCP-konfigurationsskrivning til:

- Claude Code
- Markør
- VS Code og Dev Containere
- Gemini CLI
- Antigravitation
- Kiro
- Codex CLI
- Fortsæt
- Windsurfing
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo kode
- Zed
- Gås### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Opgavelivscyklus, streaming, vedholdenhed, genstart gendannelse og simpel-først lokal orkestrering. Delt leaset udførelse er tilgængelig, når den udtrykkeligt er aktiveret; Redis forbliver en avanceret hostet mulighed, ikke den lokale standardsti.---

## 🗂️ Repository Map

| Sti | Formål |
|:-----|:--------|
| 📂 `færdigheder/` | Kanoniske forfatterfærdigheder |
| 📖 `dokumenter/brugere/` | Slutbrugerdokumentation |
| 🤝 `dokumenter/bidragydere/` | Bidragyderskabeloner og vejledning |
| 🏗️ `docs/architecture/` | Køreplan, ADR'er og teknisk analyse |
| 🔧 `docs/operations/` | Operationelle runbooks |
| 📋 `docs/specs/` | Runtime, protokol og artefaktkontrakter |
| 📚 `docs/CATALOG.md` | Genereret færdighedskatalog |
| 📦 `dist/` | Genererede maskinlæsbare artefakter |
| 🧠 `pakker/katalog-kerne/` | Delt katalogkørselstid med `ICatalogStorageAdapter` DI |
| 🌐 `pakker/server-api/` | Skrivebeskyttet HTTP API med OpenAPI/Swagger UI på `/docs` |
| 🔌 `pakker/server-mcp/` | MCP-server og lokal sidevogn |
| 🤖 `pakker/server-a2a/` | A2A-server og opgavekørsel |
| 🖥️ `pakker/cli/` | Unified CLI entrypoints, installer logik og Ink visual TUI (ESM-native) |
| ⚙️ `værktøjer/scripts/` | Validering, generering, verifikation og test |
| 🧪 `vitest.workspace.js` | Vitest monorepo arbejdsområde konfiguration |---

## 🧪 Release Validation

```bash
npm run smoke
```

Røgløbet bekræfter:

- ✅ færdighedsvalidering og metadatagenerering
- ✅ værktøj til taksonomi-rekategorisering
- ✅ katalog artefaktgenerering
- ✅ genereret katalogmarkdown
- ✅ arkivgenerering og verifikation
- ✅ ældre integrationstestsuite (Python PTY + Node TUI-påstande)
- ✅ Vitest enhedssuite til katalogkernescoring, søgning og filtrering
- ✅ `npm pack --dry-run`
- ✅ API-start og sundhed med OpenAPI/Swagger UI på `/docs`
- ✅ MCP-start i 'stdio', 'stream' og 'sse'
- ✅ A2A boot, polling, SSE streaming, annullering og push-config livscyklus