# 📖 Awesome Omni Skills — Documentation Hub (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Den sentrale referansen for å bruke, bidra til og drifte Awesome Omni Skills som et offentlig ferdighetslager, en kuratert beste-praksis-derivatoverflate og en delt kjøretidsplattform.**

Standard fellesskapsfiler lever i depotroten:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_DUCT.md)

> npm-pakken, GitHub-depotet, genererte dokumenter og kjøretidsinngangspunkter er nå justert på**Awesome Omni Skills**. Nåværende utrullingsstatus: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Grunnsporet lever nå i den aktive prosjekttilstanden, og den andre kategoriutvidelsesbølgen er allerede i katalogen. Prosjektet skal nå leses som en fungerende baseline med valgfrie fremtidige utvidelsesspor:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Fremtidig utvidelse forblir bevisst:

- utdype `design`, `verktøy`, `data-ai` og `maskinlæring`
- unngå å gjenåpne sovende ikke-kodebaserte kategorier til de nåværende kodeinnfødte sporene har sterkere dybde
- Hold kvalitetsgulvet og forsterkerens gjennomgangsbane intakt mens du gjør det

Dette utvidelsesarbeidet gjenspeiles nå direkte i den levende katalogen og arkitekturdokumentene:

- det gjeldende øyeblikksbildet av katalogen i [Catalog](CATALOG.md)
- kjøretiden og artefaktformen i [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- retningen fremover i [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills bør leses som tre sammenhengende overflater:

| Overflate | Hva er det | Hvordan det endrer seg |
|:--------|:-----------|:--------------|
| 📥 `ferdigheter/` | Offentlig innfødt ferdighetslager | Direkte bidragsytere PR-er og gjennomgått depotbasert eksternt inntak |
| ✨ `ferdigheter_omni/` | Kuratert forbedret beste praksis derivatoverflate | Kun medfølgende PR-er for private forsterkere |
| 🖥️ Runtime overflater | CLI, API, MCP og A2A over den samme genererte katalogen | Bygg, validering og utgivelsesautomatisering |---

## 📌 Current Decisions

Disse arkitekturspørsmålene er ikke lenger "åpne" i praksis og behandles nå som prosjektbeslutninger:

1.**Distribusjonen forblir manifest-først pluss signerte arkiver**
   Det maskinlesbare manifestet forblir kontrakten som brukes av CLI, API, MCP og A2A. Signerte per-skill-arkiver er nedlastings- og utgivelsesoverflaten lagt på toppen av kontrakten.
2.**Private eller premiumkataloger bør gjenbruke det samme manifestskjemaet**
   Autentisering og policy bør legges på lag eksternt, ikke ved å splitte manifestet eller katalogformen.
3.**MCP-konfigurasjon bør konvergere på noen få kanoniske eksportfamilier**
   Awesome Omni Skills standardiserer nå rundt JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` og TOML `[mcp_servers]`, mens skreddersydde forfattere kun beholdes der offisielle klientdokumenter krever en annen struktur.

Disse avgjørelsene stemmer overens med gjeldende offisielle MCP og klientdokumentasjon, inkludert:

- offisiell MCP-register og utvidelsesstøtteveiledning på `modelcontextprotocol.io`
- OpenAI Docs MCP og Codex CLI-dokumenter på `developers.openai.com` og `platform.openai.com`
- VS Code MCP-utvidelse og produktdokumenter på `code.visualstudio.com`
- klientdokumenter for Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman og JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dok | Hva du vil lære |
|:----|:------------------------|
| 📘 [Kom i gang](brukere/KOMME I GANG.md) | Installer, verifiser og påkall din første ferdighet |
| 🧭 [CLI User Guide](users/CLI-USER-GUIDE.md) | Full kommandoreferanse og virkelige CLI-bruksmønstre |
| 📗 [Bruksveiledning](users/USAGE.md) | CLI-kommandoer, installasjonsmoduser, kjøretidskommandoer og MCP-konfigurasjonsflyter |
| 📦 [Bundler](brukere/BUNDLES.md) | Utvalgte pakker og deres nåværende tilgjengelighet |
| 📚 [Katalog](CATALOG.md) | Autogenerert katalog over publiserte ferdigheter |
| 🔧 [System Runbook](operasjoner/RUNBOOK.md) | Bygg, server, sikre og feilsøk kjøretiden |### 🏗️ If You Want to **Understand** the Runtime

| Dok | Hva du vil lære |
|:----|:------------------------|
| 🗂️ [Prosjektstruktur](PROSJEKT-STRUKTUR.md) | Komplett katalog og filreferanse for monorepo |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Arkitekturutvikling, lukkede beslutninger og gjenværende utvidelsesområder |
| 🧭 [CLI UX Roadmap](arkitektur/CLI-UX-ROADMAP.md) | Historisk plan og nåværende form for den guidede og visuelle CLI |
| 📐 [ADR-0001: Workspace Foundation](arkitektur/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kjerne monorepo og delt kjøretidsbeslutning |
| 🔬 [Kodebaseanalyse](arkitektur/CODEBASE-ANALYSIS.md) | Gjeldende kjøretidssammensetning, tellinger og systemgrenser |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | HTTP-endepunkter, filtrering, styring og nedlastinger |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Atferdskontrakt for den veiledede installatøren |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Blekkvisuelt skall, tilstandsmodell og servicehub |
| 🔌 [Lokal MCP sidevogn](spesifikasjoner/LOCAL-MCP-SIDECAR.md) | Filsystembevisste verktøy, tillatelseslistemodell og konfigurasjonsskriving |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Støttede CLI- og IDE-klienter, skribenter, manuelle mål og kildereferanser |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taksonomi, poengheuristikk og metadataartefakter |
| 🛡️ [Sikkerhetsvalidering](specs/SECURITY-VALIDATION.md) | Skannere, arkiver, signaturer og utgivelsesbekreftelse |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Maskinlesbart manifestformat og kompatibilitetskontrakt |### 🤝 If You Want to **Contribute**

| Dok | Hva du vil lære |
|:----|:------------------------|
| 📝 [Bidragsveiledning](../CONTRIBUTING.md) | Forventninger til repo-arbeidsflyt og pull-forespørsel |
| 🌍 [Repository Sources](../REPOSITORY-SOURCES.md) | Hvordan foreslå et oppstrøms depot gjennom en vanlig offentlig PR, nå med repo-første "auto" gren og banestøtte |
| 🧾 [Skill PR Workflow](bidragsytere/SKILL-PR-WORKFLOW.md) | Innebygd inntak, automatisk forsterkerbehandling, `skills_omni/`-publisering og anmelderforventninger |
| 📄 [Skill Template](bidragsytere/SKILL-MAL.md) | Starter `SKILL.md` med aktuell frontmaterie og struktur |
| 🔬 [Skill Anatomy](bidragsytere/SKILL-ANATOMY.md) | Struktur og kvalitetsforventninger til en ferdighet |
| ✅ [Kvalitetslinje](bidragsytere/QUALITY-BAR.md) | Akseptkriterier for depotet |
| 🏆 [High-Score Playbook](bidragsytere/HIGH-SCORE-PLAYBOOK.md) | Hva driver høy modenhet, kvalitet, beste praksis og sikkerhetspoeng |---

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

For den komplette sluttbrukerkommandooverflaten, bruk [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Bygg-pipelinen sender ut de maskinlesbare filene som driver hver kjøretidsoverflate:

| Artefakt | Formål |
|:--------|:--------|
| `metadata.json` | Repository-wide validering og poengsummeny |
| `skills_index.json` | Repo-lokal normalisert ferdighetsindeks |
| `dist/catalog.json` | Publisert katalog for søk og oppføring |
| `dist/bundles.json` | Buntdefinisjoner med tilgjengelighet |
| `dist/manifests/<skill>.json` | Maskinlesbart manifest per ferdighet |
| `dist/archives/<skill>.zip` | Ferdighetsarkiv (zip) |
| `dist/archives/<skill>.tar.gz` | Ferdighetsarkiv (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest |

`dist/` forblir begått med vilje. Disse genererte artefaktene er en del av installasjons-, API-, MCP-, A2A-, røyk- og frigjøringskontrakten.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Skrivebeskyttet register-API for ferdigheter, pakker, sammenligning, installasjonsplanlegging og artefaktnedlastinger.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Den lokale sidevognen støtter nå førsteklasses MCP-konfigurasjonsskriving for:

- Claude Code
- Markør
- VS Code og Dev Containers
- Gemini CLI
- Antigravitasjon
- Kiro
- Codex CLI
- Fortsett
- Vindsurfing
- Åpenkode
- Cline
- GitHub Copilot CLI
- Kilokode
- Zed
- Gås### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Oppgavelivssyklus, strømming, utholdenhet, restart gjenoppretting og enkel-første lokal orkestrering. Delt leid utførelse er tilgjengelig når den er eksplisitt aktivert; Redis forblir et avansert vertsalternativ, ikke den lokale standardbanen.---

## 🗂️ Repository Map

| Sti | Formål |
|:-----|:--------|
| 📂 `ferdigheter/` | Kanoniske forfatterferdigheter |
| 📖 `dokumenter/brukere/` | Sluttbrukerdokumentasjon |
| 🤝 `dokumenter/bidragsytere/` | Bidragsyter maler og veiledning |
| 🏗️ `docs/architecture/` | Veikart, ADRs og teknisk analyse |
| 🔧 `docs/operations/` | Operative runbooks |
| 📋 `docs/specs/` | Kjøretids-, protokoll- og artefaktkontrakter |
| 📚 `docs/CATALOG.md` | Generert ferdighetskatalog |
| 📦 `dist/` | Genererte maskinlesbare artefakter |
| 🧠 `pakker/katalog-kjerne/` | Delt katalogkjøring med `ICatalogStorageAdapter` DI |
| 🌐 `pakker/server-api/` | Skrivebeskyttet HTTP API med OpenAPI/Swagger UI på `/docs` |
| 🔌 `pakker/server-mcp/` | MCP-server og lokal sidevogn |
| 🤖 `pakker/server-a2a/` | A2A-server og oppgavekjøring |
| 🖥️ `pakker/cli/` | Unified CLI entrypoints, install logic, and Ink visual TUI (ESM-native) |
| ⚙️ `verktøy/skript/` | Validering, generering, verifisering og tester |
| 🧪 `vitest.workspace.js` | Vitest monorepo arbeidsområdekonfigurasjon |---

## 🧪 Release Validation

```bash
npm run smoke
```

Røykløpet bekrefter:

- ✅ ferdighetsvalidering og generering av metadata
- ✅ verktøy for taksonomi-rekategorisering
- ✅ katalogartefaktgenerering
- ✅ generert katalognedskrivning
- ✅ arkivgenerering og verifisering
- ✅ eldre integrasjonstestpakke (Python PTY + Node TUI-påstander)
- ✅ Vitest-enhetssuite for katalogkjernescore, søk og filtrering
- ✅ `npm pack --dry-run`
- ✅ API-oppstart og helse med OpenAPI/Swagger UI på `/docs`
- ✅ MCP-oppstart i 'stdio', 'stream' og 'sse'
- ✅ A2A-oppstart, polling, SSE-streaming, kansellering og push-config livssyklus