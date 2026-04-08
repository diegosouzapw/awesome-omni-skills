# 📖 Awesome Omni Skills — Documentation Hub (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Ang pangunahing sanggunian para sa paggamit, pag-aambag sa, at pagpapatakbo ng Mga Kahanga-hangang Omni Skills bilang isang pampublikong imbakan ng kasanayan, isang na-curate na pinakamahusay na kasanayan na derivative surface, at isang nakabahaging runtime platform.**

Ang mga karaniwang file ng komunidad ay nakatira sa root ng repositoryo:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT)

> Ang npm package, GitHub repository, mga nabuong doc, at runtime entrypoints ay nakahanay na ngayon sa**Awesome Omni Skills**. Kasalukuyang rollout state: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Ang foundation track ay naninirahan na ngayon sa aktibong estado ng proyekto, at ang pangalawang wave ng pagpapalawak ng kategorya ay nasa catalog na. Ang proyekto ay dapat na ngayong basahin bilang isang gumaganang baseline na may opsyonal na mga track sa pagpapalawak sa hinaharap:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Ang pagpapalawak sa hinaharap ay mananatiling sinadya:

- palalimin ang `design`, `tools`, `data-ai`, at `machine-learning`
- iwasang muling buksan ang mga natutulog na non-code-native na kategorya hanggang ang kasalukuyang code-native na track ay magkaroon ng mas malalim na lalim
- panatilihing buo ang kalidad ng floor at enhancer review path habang ginagawa ito

Direktang makikita ngayon ang pagpapalawak na iyon sa live na catalog at mga doc ng arkitektura:

- ang kasalukuyang snapshot ng catalog sa [Catalog](CATALOG.md)
- ang runtime at artifact na hugis sa [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- ang pasulong na direksyon sa [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Dapat basahin ang Kahanga-hangang Omni Skills bilang tatlong magkakaugnay na surface:

| Ibabaw | Ano ito | Paano ito nagbabago |
|:--------|:-----------|:--------------|
| 📥 `kasanayan/` | Pampublikong katutubong imbakan ng kasanayan | Direktang contributor PR at sinuri na batay sa repositoryo na panlabas na paggamit |
| ✨ `skills_omni/` | Na-curate ang pinahusay na pinakamahusay na kasanayan na derivative surface | Pribadong enhancer companion PRs lang |
| 🖥️ Runtime surface | CLI, API, MCP, at A2A sa parehong nabuong catalog | Build, validation, at release automation |---

## 📌 Current Decisions

Ang mga tanong sa arkitektura na ito ay hindi na "bukas" sa pagsasanay at itinuturing na ngayon bilang mga desisyon ng proyekto:

1.**Nananatiling manifest-first ang pamamahagi kasama ang mga nilagdaang archive**
   Ang manifest na nababasa ng makina ay nananatiling kontratang ginagamit ng CLI, API, MCP, at A2A. Ang mga signed per-skill archive ay ang pag-download at release surface na naka-layer sa ibabaw ng kontratang iyon.
2.**Ang mga pribado o premium na catalog ay dapat na muling gamitin ang parehong manifest schema**
   Ang auth at patakaran ay dapat na layered sa labas, hindi sa pamamagitan ng pag-forking ng manifest o catalog na hugis.
3.**Ang MCP config ay dapat magsama-sama sa ilang canonical export na pamilya**
   Nag-standardize na ngayon ang Kahanga-hangang Omni Skills sa paligid ng JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions`, at TOML `[mcp_servers]`, habang pinapanatili lamang ang mga pasadyang manunulat kung saan ang mga opisyal na doc ng client ay nangangailangan lamang ng iba't ibang istruktura.

Ang mga desisyong iyon ay umaayon sa kasalukuyang opisyal na MCP at dokumentasyon ng kliyente, kabilang ang:

- opisyal na MCP Registry at gabay sa suporta ng extension sa `modelcontextprotocol.io`
- OpenAI Docs MCP at Codex CLI docs sa `developers.openai.com` at `platform.openai.com`
- VS Code MCP extension at mga dokumento ng produkto sa `code.visualstudio.com`
- mga client doc para sa Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman, at JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Ano ang Matututuhan Mo |
|:----|:------------------|
| 📘 [Pagsisimula](mga user/GETTING-STARTED.md) | I-install, i-verify, at gamitin ang iyong unang kasanayan |
| 🧭 [CLI User Guide](users/CLI-USER-GUIDE.md) | Buong command reference at real-world na mga pattern ng paggamit ng CLI |
| 📗 [Gabay sa Paggamit](mga user/USAGE.md) | Mga CLI command, install mode, runtime command, at MCP config flows |
| 📦 [Mga Bundle](mga user/BUNDLES.md) | Mga na-curate na bundle at ang kanilang kasalukuyang availability |
| 📚 [Catalog](CATALOG.md) | Awtomatikong nabuong catalog ng mga nai-publish na kasanayan |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Buuin, ihatid, i-secure, at i-troubleshoot ang runtime |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Ano ang Matututuhan Mo |
|:----|:------------------|
| 🗂️ [Istruktura ng Proyekto](PROJECT-STRUCTURE.md) | Kumpletuhin ang direktoryo at sanggunian ng file para sa monorepo |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Ebolusyon ng arkitektura, mga saradong desisyon, at natitirang mga lugar ng pagpapalawak |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Makasaysayang plano at kasalukuyang hugis ng guided at visual na CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo at shared-runtime na desisyon |
| 🔬 [Pagsusuri ng Codebase](arkitektura/CODEBASE-ANALYSIS.md) | Kasalukuyang komposisyon ng runtime, mga bilang, at mga hangganan ng system |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | Mga endpoint ng HTTP, pag-filter, pamamahala, at pag-download |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Kontrata sa pag-uugali para sa ginabayang installer |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink visual shell, state model, at service hub |
| 🔌 [Lokal na MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Mga tool sa filesystem-aware, allowlist model, at config writing |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Mga sinusuportahang CLI at IDE na kliyente, manunulat, manu-manong target, at source reference |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taxonomy, scoring heuristics, at metadata artifacts |
| 🛡️ [Pagpapatunay ng Seguridad](specs/SECURITY-VALIDATION.md) | Mga scanner, archive, lagda, at pag-verify ng release |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Nababasa ng machine na manifest format at kontrata sa pagiging tugma |### 🤝 If You Want to **Contribute**

| Doc | Ano ang Matututuhan Mo |
|:----|:------------------|
| 📝 [Contributing Guide](../CONTRIBUTING.md) | Repo workflow at pull request na inaasahan |
| 🌍 [Repository Sources](../REPOSITORY-SOURCES.md) | Paano magmungkahi ng upstream repository sa pamamagitan ng isang normal na pampublikong PR, ngayon ay may repo-first `auto` branch at path support |
| 🧾 [Skill PR Workflow](contributors/SKILL-PR-WORKFLOW.md) | Native intake, awtomatikong pagpoproseso ng enhancer, `skills_omni/` publishing, at mga inaasahan ng reviewer |
| 📄 [Skill Template](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` na may kasalukuyang frontmatter at structure |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Istruktura at kalidad ng mga inaasahan para sa isang kasanayan |
| ✅ [Quality Bar](contributors/QUALITY-BAR.md) | Pamantayan sa pagtanggap para sa repositoryo |
| 🏆 [High-Score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Ano ang nagtutulak ng mataas na maturity, kalidad, pinakamahusay na kagawian, at mga marka ng seguridad |---

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

Para sa kumpletong end-user command surface, gamitin ang [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Ang build pipeline ay naglalabas ng mga file na nababasa ng makina na nagtutulak sa bawat runtime surface:

| Artifact | Layunin |
|:---------|:--------|
| `metadata.json` | Pagpapatunay sa buong repositoryo at buod ng marka |
| `skills_index.json` | Repo-local normalized skill index |
| `dist/catalog.json` | Nai-publish na catalog para sa paghahanap at listahan |
| `dist/bundles.json` | Mga kahulugan ng bundle na may kakayahang magamit |
| `dist/manifests/<skill>.json` | Per-skill machine-readable manifest |
| `dist/archives/<skill>.zip` | Archive ng kasanayan (zip) |
| `dist/archives/<skill>.tar.gz` | Archive ng kasanayan (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest |

Ang `dist/` ay nananatiling nakatuon sa layunin. Ang mga nabuong artifact na ito ay bahagi ng pag-install, API, MCP, A2A, usok, at kontrata sa pagpapalabas.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Read-only na registry API para sa mga kasanayan, bundle, paghahambing, pagpaplano sa pag-install, at pag-download ng artifact.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Sinusuportahan na ngayon ng lokal na sidecar ang first-class na MCP config writing para sa:

- Claude Code
- Cursor
- VS Code at Dev Container
- Gemini CLI
- Antigravity
- Kiro
- Codex CLI
- Magpatuloy
- Windsurf
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo Code
- Zed
- Gansa### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Lifecycle ng gawain, streaming, pagtitiyaga, i-restart ang pagbawi, at simple-unang lokal na orkestrasyon. Available ang shared leased execution kapag tahasang pinagana; Ang Redis ay nananatiling isang advanced na naka-host na opsyon, hindi ang default na lokal na landas.---

## 🗂️ Repository Map

| Landas | Layunin |
|:-----|:--------|
| 📂 `kasanayan/` | Mga kasanayan sa pagkakaakda ng kanonikal |
| 📖 `mga doc/user/` | Dokumentasyon ng end-user |
| 🤝 `mga doc/contributor/` | Mga template at gabay ng contributor |
| 🏗️ `docs/architecture/` | Roadmap, ADR, at teknikal na pagsusuri |
| 🔧 `docs/operations/` | Mga operational runbook |
| 📋 `docs/specs/` | Runtime, protocol, at mga kontrata ng artifact |
| 📚 `docs/CATALOG.md` | Binuo na katalogo ng kasanayan |
| 📦 `dist/` | Mga nabuong artifact na nababasa ng makina |
| 🧠 `mga pakete/catalog-core/` | Nakabahaging runtime ng catalog sa `ICatalogStorageAdapter` DI |
| 🌐 `mga pakete/server-api/` | Read-only na HTTP API na may OpenAPI/Swagger UI sa `/docs` |
| 🔌 `mga pakete/server-mcp/` | MCP server at lokal na sidecar |
| 🤖 `mga pakete/server-a2a/` | A2A server at task runtime |
| 🖥️ `mga pakete/cli/` | Pinag-isang CLI entrypoints, install logic, at Ink visual TUI (ESM-native) |
| ⚙️ `mga tool/script/` | Pagpapatunay, pagbuo, pagpapatunay, at mga pagsubok |
| 🧪 `vitest.workspace.js` | Vitest monorepo workspace configuration |---

## 🧪 Release Validation

```bash
npm run smoke
```

Ang smoke run ay nagpapatunay:

- ✅ pagpapatunay ng kasanayan at pagbuo ng metadata
- ✅ taxonomy recategorization tooling
- ✅ pagbuo ng artifact ng katalogo
- ✅ nabuong markdown ng katalogo
- ✅ pagbuo ng archive at pag-verify
- ✅ legacy integration test suite (Python PTY + Node TUI assertion)
- ✅ Vitest unit suite para sa catalog-core scoring, paghahanap, at pag-filter
- ✅ `npm pack --dry-run`
- ✅ API boot at kalusugan na may OpenAPI/Swagger UI sa `/docs`
- ✅ MCP boot sa `stdio`, `stream`, at `sse`
- ✅ A2A boot, polling, SSE streaming, cancellation, at push-config lifecycle