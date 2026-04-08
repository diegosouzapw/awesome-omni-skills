# 📖 Awesome Omni Skills — Documentation Hub (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Referința centrală pentru utilizarea, contribuția și operarea Awesome Omni Skills ca depozit public de abilități, o suprafață derivată de cele mai bune practici și o platformă de rulare partajată.**

Fișierele comunității standard trăiesc în rădăcina depozitului:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_D_CONDUCT.md)

> Pachetul npm, depozitul GitHub, documentele generate și punctele de intrare din timpul de execuție sunt acum aliniate la**Awesome Omni Skills**. Starea actuală de lansare: [Awesome Omni Skills Rollout](operațiuni/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Pista de fundație trăiește acum în starea activă a proiectului, iar al doilea val de extindere a categoriei este deja în catalog. Proiectul ar trebui să fie citit acum ca o bază de lucru cu piste opționale de extindere viitoare:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Extinderea viitoare rămâne deliberată:

- aprofundați `design`, `instrumente`, `data-ai` și `machine-learning`
- evitați redeschiderea categoriilor latente non-native de cod până când melodiile native de cod actuale au o adâncime mai mare
- păstrați intactă calea de evaluare a nivelului de calitate și a îmbunătățitorului în timp ce faceți acest lucru

Această activitate de extindere este acum reflectată direct în catalogul live și documentele de arhitectură:

- instantaneul actual al catalogului în [Catalog](CATALOG.md)
- runtime și forma artefactului în [Codebase Analysis](arhitectură/CODEBASE-ANALYSIS.md)
- direcția înainte în [Agent-Native Roadmap](arhitectură/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills ar trebui citite ca trei suprafețe conectate:

| Suprafata | Ce este | Cum se schimbă |
|:--------|:------------|:----------------|
| 📥 `skills/` | Magazin public de competențe native | PR-urile contribuitorilor directi și aportul extern revizuit bazat pe depozit |
| ✨ `skills_omni/` | Suprafață derivată îmbunătățită de cele mai bune practici | Numai PR-uri însoțitoare de îmbunătățire privat |
| 🖥️ Suprafețe de rulare | CLI, API, MCP și A2A prin același catalog generat | Crearea, validarea și automatizarea lansării |---

## 📌 Current Decisions

Aceste întrebări de arhitectură nu mai sunt „deschise” în practică și sunt acum tratate ca decizii de proiect:

1.**Distribuția rămâne în primul rând manifest, plus arhivele semnate**
   Manifestul care poate fi citit de mașină rămâne contractul consumat de CLI, API, MCP și A2A. Arhivele semnate pentru fiecare abilitate sunt suprafața de descărcare și lansare stratificată deasupra contractului respectiv.
2.**Cataloagele private sau premium ar trebui să refolosească aceeași schemă manifest**
   Autentificarea și politica ar trebui să fie stratificate în exterior, nu prin bifurcarea formei manifest sau catalog.
3.**Configurația MCP ar trebui să convergă pe câteva familii de export canonice**
   Awesome Omni Skills standardizează acum în jurul JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` și TOML `[mcp_servers]`, păstrând în același timp scriitorii personalizați numai acolo unde documentele oficiale necesită o structură client diferită.

Aceste decizii se aliniază cu documentația oficială actuală a MCP și a clientului, inclusiv:

- Registrul MCP oficial și ghidul de asistență pentru extensii la `modelcontextprotocol.io`
- Documente OpenAI Docs MCP și Codex CLI la `developers.openai.com` și `platform.openai.com`
- Extensia VS Code MCP și documente despre produs la `code.visualstudio.com`
- documente client pentru Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman și JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Ce vei învăța |
|:----|:------------------|
| 📘 [Getting Started](users/GETTING-STARTED.md) | Instalează, verifică și invocă prima ta abilitate |
| 🧭 [Ghid de utilizare CLI](utilizatori/CLI-USER-GUIDE.md) | Referință de comandă completă și modele de utilizare CLI din lumea reală |
| 📗 [Ghid de utilizare](users/USAGE.md) | Comenzi CLI, moduri de instalare, comenzi de rulare și fluxuri de configurare MCP |
| 📦 [Pachete](utilizatori/BUNDLES.md) | Pachetele organizate și disponibilitatea lor curentă |
| 📚 [Catalog](CATALOG.md) | Catalog autogenerat de competențe publicate |
| 🔧 [System Runbook](operațiuni/RUNBOOK.md) | Creați, serviți, asigurați și depanați timpul de execuție |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Ce vei învăța |
|:----|:------------------|
| 🗂️ [Structura Proiectului](PROJECT-STRUCTURE.md) | Directorul complet și referința la fișier pentru monorepo |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Evoluția arhitecturii, deciziile închise și zonele de expansiune rămase |
| 🧭 [Foaie de parcurs CLI UX](architecture/CLI-UX-ROADMAP.md) | Planul istoric și forma actuală a CLI-ului ghidat și vizual |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo de bază și decizie de execuție partajată |
| 🔬 [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) | Compoziția curentă a timpului de execuție, numărătoarea și limitele sistemului |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | Puncte finale HTTP, filtrare, guvernare și descărcări |
| 🧩 [CLI Guided Installer](specificații/CLI-GUIDED-INSTALLER.md) | Contract comportamental pentru instalatorul ghidat |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Înveliș vizual cu cerneală, model de stare și centru de servicii |
| 🔌 [Local MCP Sidecar](specificații/LOCAL-MCP-SIDECAR.md) | Instrumente care știe sistemul de fișiere, modelul listei de permise și scrierea configurațiilor |
| 🧭 [Client Support Matrix](specificații/CLIENT-SUPPORT-MATRIX.md) | Clienți CLI și IDE acceptați, scriitori, ținte manuale și referințe surse |
| 📊 [Clasificarea aptitudinilor](specs/CLASIFICARE-ABILITATE.md) | Taxonomie, euristici de punctare și artefacte de metadate |
| 🛡️ [Validare de securitate](specs/SECURITY-VALIDATION.md) | Scanere, arhive, semnături și verificarea eliberării |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Format manifest citibil de mașină și contract de compatibilitate |### 🤝 If You Want to **Contribute**

| Doc | Ce vei învăța |
|:----|:------------------|
| 📝 [Ghid de contribuție](../CONTRIBUTING.md) | Fluxul de lucru repo și așteptările solicitărilor de extragere |
| 🌍 [Surse de depozit](../REPOSITORY-SOURCES.md) | Cum să propui un depozit în amonte printr-un PR public normal, acum cu suport pentru ramura `auto` repo-first și calea |
| 🧾 [Skill PR Workflow](contributori/SKILL-PR-WORKFLOW.md) | Aportul nativ, procesarea automată a amplificatorului, publicarea `skills_omni/` și așteptările recenzenților |
| 📄 [Șablon de aptitudini](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` cu frontmateria și structura actuală |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Structura și așteptările de calitate pentru o abilitate |
| ✅ [Bara de calitate](contributors/QALITY-BAR.md) | Criterii de acceptare pentru depozit |
| 🏆 [High-Score Playbook](colaboratori/HIGH-SCORE-PLAYBOOK.md) | Ceea ce determină o maturitate ridicată, calitate, cele mai bune practici și scoruri de securitate |---

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

Pentru întreaga suprafață de comandă a utilizatorului final, utilizați [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Conducta de compilare emite fișierele care pot fi citite de mașină care conduc fiecare suprafață de rulare:

| Artefact | Scop |
|:---------|:--------|
| `metadata.json` | Validarea la nivelul depozitului și rezumatul scorului |
| `skills_index.json` | Indicele de calificare normalizat repo-local |
| `dist/catalog.json` | Catalog publicat pentru căutare și listare |
| `dist/bundles.json` | Definiții pachete cu disponibilitate |
| `dist/manifests/<skill>.json` | Manifest citibil de mașină pentru fiecare abilitate |
| `dist/archives/<skill>.zip` | Arhiva de aptitudini (zip) |
| `dist/archives/<skill>.tar.gz` | Arhiva de aptitudini (tarball) |
| `dist/archives/<skill>.checksums.txt` | Manifestul sumei de control SHA-256 |

`dist/` rămâne săvârșit intenționat. Aceste artefacte generate fac parte din contractul de instalare, API, MCP, A2A, fum și lansare.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API de registru numai pentru citire pentru competențe, pachete, comparație, planificare a instalării și descărcări de artefacte.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Sidecarul local acceptă acum scrierea de configurare MCP de primă clasă pentru:

- Claude Code
- Cursor
- VS Code și Dev Containers
- Gemeni CLI
- Antigravitație
- Kiro
- Codex CLI
- Continuă
- Windsurf
- OpenCode
- Cline
- CLI GitHub Copilot
- Cod Kilo
- Zed
- Gâscă### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Ciclul de viață al sarcinilor, fluxul în flux, persistența, recuperarea repornirii și orchestrarea locală mai întâi simplă. Execuția închiriată partajată este disponibilă atunci când este activată în mod explicit; Redis rămâne o opțiune găzduită avansată, nu calea locală implicită.---

## 🗂️ Repository Map

| Calea | Scop |
|:-----|:--------|
| 📂 `skills/` | Abilități de autor canonic |
| 📖 `docs/users/` | Documentația utilizatorului final |
| 🤝 `docs/contributors/` | Șabloane și îndrumări pentru colaboratori |
| 🏗️ `docs/architecture/` | Foaia de parcurs, ADR-uri și analiză tehnică |
| 🔧 `docs/operations/` | Runbook-uri operaționale |
| 📋 `docs/specs/` | Contracte de execuție, protocol și artefact |
| 📚 `docs/CATALOG.md` | Catalog de competențe generat |
| 📦 `dist/` | Artefacte generate de citire automată |
| 🧠 `pachete/catalog-core/` | Timpul de rulare a catalogului partajat cu `ICatalogStorageAdapter` DI |
| 🌐 `pachete/server-api/` | API HTTP numai pentru citire cu OpenAPI/Swagger UI pe `/docs` |
| 🔌 `pachete/server-mcp/` | Server MCP și sidecar local |
| 🤖 `pachete/server-a2a/` | Server A2A și timp de rulare a sarcinilor |
| 🖥️ `packages/cli/` | Puncte de intrare CLI unificate, logica de instalare și TUI vizual Ink (ESM-native) |
| ⚙️ `instrumente/scripturi/` | Validare, generare, verificare și teste |
| 🧪 `vitest.workspace.js` | Vitest monorepo workspace configuration |---

## 🧪 Release Validation

```bash
npm run smoke
```

Cursa de fum validează:

- ✅ validarea abilităților și generarea de metadate
- ✅ instrumente de recategorizare taxonomie
- ✅ generarea de artefacte de catalog
- ✅ reducere de catalog generată
- ✅ generarea și verificarea arhivei
- ✅ suită de teste de integrare moștenită (aserțiuni Python PTY + Node TUI)
- ✅ Suita de unități Vitest pentru scoring-core de catalog, căutare și filtrare
- ✅ `npm pack --dry-run`
- ✅ Boot API și sănătate cu OpenAPI/Swagger UI pe `/docs`
- ✅ Pornire MCP în `stdio`, `stream` și `sse`
- ✅ Pornire A2A, sondare, streaming SSE, anulare și ciclu de viață push-config