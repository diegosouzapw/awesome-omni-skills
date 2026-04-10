# 📖 Awesome Omni Skills — Documentation Hub (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md)

> Translation snapshot for **Awesome Omni Skills** `v0.11.0`.
> Source: `docs/README.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/README.md; version=0.11.0; release=v0.11.0; english_snapshot=2026-04-02T00:00:00+00:00 -->
<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.11.0; native_skills=263; curated_skills=109; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

> **The central reference for using, contributing to, and operating Awesome Omni Skills as a public skill repository, a curated best-practice derivative surface, and a shared runtime platform.**

Standard community files live in the repository root:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> The npm package, GitHub repository, generated docs, and runtime entrypoints are now aligned on **Awesome Omni Skills**. Current rollout state: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).

---

## 📊 Status Snapshot

<!-- generated:docs-readme-status-snapshot:start -->
| Area | State | Details |
|:-----|:------|:--------|
| 🏗️ **Runtime** | ✅ Current | Unified CLI, Ink visual shell, API, MCP, and A2A all ship from the same package |
| 📦 **Catalog** | 📌 263 skills | 263 native catalog skills across 16 active categories, with 109 curated English derivatives in `skills_omni` and 7 fully backed bundles |
| 🎯 **Install** | ✅ Current | Guided TTY install, selective `--skill` and `--bundle`, custom path support, and discovery-driven install |
| 🌐 **API** | ✅ Current | Read-only registry API with auth, admin runtime, rate limiting, CORS/IP allowlists, maintenance mode, and downloads |
| 🔌 **MCP** | ✅ Current | `stdio` · `stream` · `sse`, local sidecar mode, 9 install-capable clients, 16 config-capable clients, 33 config targets, and 20 config profiles |
| 🤖 **A2A** | ✅ Current | Simple-first local runtime with JSON/SQLite durability, restart resume, SSE streaming, cancelation, external executor mode, and optional leased coordination when explicitly enabled |
| 🛡️ **Security** | ✅ Current | Static scanner, optional ClamAV/VirusTotal, signed release artifacts, archive checksums, and release-time verification |
| 📋 **Classification** | ✅ Current | Canonical taxonomy, maturity, semantic quality spread, best-practices spread, and security scoring |
| 📁 **Archives** | ✅ Current | Per-skill `.zip` and `.tar.gz` archives with SHA-256 checksum manifests |
| 🔐 **Signing** | ✅ Current | Detached signatures enforced on release tags; local install flows consume the same manifest and checksum metadata |
| 🧬 **Intake Flow** | ✅ Current | Native skills land under `skills/` through direct contributor PRs and reviewed repository-based external-import PRs; PR automation reviews them and proposes Omni-enhanced derivatives under `skills_omni/` |
<!-- generated:docs-readme-status-snapshot:end -->

## 🔭 Current Project State

The foundation track now lives in the active project state, and the second category-expansion wave is already in the catalog. The project should now be read as a working baseline with optional future expansion tracks:

<!-- generated:docs-readme-current-project-state:start -->
- public `v0.10.0` and private `v1.0.0` are the current stable release floor
- the catalog now covers 263 native skills across 16 active categories, with 217 passing validation cleanly and 46 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 109 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Future expansion stays deliberate:

- deepen `design`, `tools`, `data-ai`, and `machine-learning`
- avoid reopening dormant non-code-native categories until the current code-native tracks have stronger depth
- keep the quality floor and enhancer review path intact while doing so

That expansion work is now reflected directly in the live catalog and architecture docs:

- the current catalog snapshot in [Catalog](CATALOG.md)
- the runtime and artifact shape in [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- the forward direction in [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)

## 🔀 Repository Surfaces

Awesome Omni Skills should be read as three connected surfaces:

| Surface | What it is | How it changes |
|:--------|:-----------|:---------------|
| 📥 `skills/` | Public native skill repository | Direct contributor PRs and reviewed repository-based external intake |
| ✨ `skills_omni/` | Curated improved best-practice derivative surface | Private enhancer companion PRs only |
| 🖥️ Runtime surfaces | CLI, API, MCP, and A2A over the same generated catalog | Build, validation, and release automation |

---

## 📌 Current Decisions

These architecture questions are no longer “open” in practice and are now treated as project decisions:

1. **Distribution stays manifest-first plus signed archives**
   The machine-readable manifest remains the contract consumed by CLI, API, MCP, and A2A. Signed per-skill archives are the download and release surface layered on top of that contract.
2. **Private or premium catalogs should reuse the same manifest schema**
   Auth and policy should be layered externally, not by forking the manifest or catalog shape.
3. **MCP config should converge on a few canonical export families**
   Awesome Omni Skills now standardizes around JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions`, and TOML `[mcp_servers]`, while keeping bespoke writers only where official client docs require a different structure.

Those decisions align with current official MCP and client documentation, including:

- official MCP Registry and extension support guidance at `modelcontextprotocol.io`
- OpenAI Docs MCP and Codex CLI docs at `developers.openai.com` and `platform.openai.com`
- VS Code MCP extension and product docs at `code.visualstudio.com`
- client docs for Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman, and JetBrains AI Assistant

---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | What You'll Learn |
|:----|:------------------|
| 📘 [Getting Started](users/GETTING-STARTED.md) | Install, verify, and invoke your first skill |
| 🧭 [CLI User Guide](users/CLI-USER-GUIDE.md) | Full command reference and real-world CLI usage patterns |
| 📗 [Usage Guide](users/USAGE.md) | CLI commands, install modes, runtime commands, and MCP config flows |
| 📦 [Bundles](users/BUNDLES.md) | Curated bundles and their current availability |
| 📚 [Catalog](CATALOG.md) | Auto-generated catalog of published skills |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Build, serve, secure, and troubleshoot the runtime |

### 🏗️ If You Want to **Understand** the Runtime

| Doc | What You'll Learn |
|:----|:------------------|
| 🗂️ [Project Structure](PROJECT-STRUCTURE.md) | Complete directory and file reference for the monorepo |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Architecture evolution, closed decisions, and remaining expansion areas |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Historical plan and current shape of the guided and visual CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo and shared-runtime decision |
| 🔬 [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) | Current runtime composition, counts, and system boundaries |
| 🌐 [Catalog API Surface](specs/CATALOG-API.md) | HTTP endpoints, filtering, governance, and downloads |
| 🧩 [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) | Behavioral contract for the guided installer |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink visual shell, state model, and service hub |
| 🧬 [Skill Family, Variant, and Provenance Model](specs/SKILL-FAMILY-VARIANT-MODEL.md) | Catalog grouping, variant selection, and provenance contract |
| 🔌 [Local MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Filesystem-aware tools, allowlist model, and config writing |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Supported CLI and IDE clients, writers, manual targets, and source references |
| 📊 [Skill Classification](specs/SKILL-CLASSIFICATION.md) | Taxonomy, scoring heuristics, and metadata artifacts |
| 🛡️ [Security Validation](specs/SECURITY-VALIDATION.md) | Scanners, archives, signatures, and release verification |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Machine-readable manifest format and compatibility contract |

### 🤝 If You Want to **Contribute**

| Doc | What You'll Learn |
|:----|:------------------|
| 📝 [Contributing Guide](../CONTRIBUTING.md) | Repo workflow and pull request expectations |
| 🌍 [Repository Sources](../REPOSITORY-SOURCES.md) | How to propose an upstream repository through a normal public PR, now with repo-first `auto` branch and path support |
| 🧾 [Skill PR Workflow](contributors/SKILL-PR-WORKFLOW.md) | Native intake, automatic enhancer processing, `skills_omni/` publishing, and reviewer expectations |
| 📄 [Skill Template](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` with current frontmatter and structure |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Structure and quality expectations for a skill |
| ✅ [Quality Bar](contributors/QUALITY-BAR.md) | Acceptance criteria for the repository |
| 🏆 [High-Score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | What drives high maturity, quality, best-practices, and security scores |

---

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

For the complete end-user command surface, use [CLI User Guide](users/CLI-USER-GUIDE.md).

### 📁 Generated Artifacts

The build pipeline emits the machine-readable files that drive every runtime surface:

| Artifact | Purpose |
|:---------|:--------|
| `metadata.json` | Repository-wide validation and score summary |
| `skills_index.json` | Repo-local normalized skill index |
| `dist/catalog.json` | Published catalog for search and listing |
| `dist/bundles.json` | Bundle definitions with availability |
| `dist/manifests/<skill>.json` | Per-skill machine-readable manifest |
| `dist/archives/<skill>.zip` | Skill archive (zip) |
| `dist/archives/<skill>.tar.gz` | Skill archive (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest |

`dist/` stays committed on purpose. These generated artifacts are part of the install, API, MCP, A2A, smoke, and release contract.

### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Read-only registry API for skills, bundles, comparison, install planning, and artifact downloads.

### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

The local sidecar now supports first-class MCP config writing for:

- Claude Code
- Cursor
- VS Code and Dev Containers
- Gemini CLI
- Antigravity
- Kiro
- Codex CLI
- Continue
- Windsurf
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilo Code
- Zed
- Goose

### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Task lifecycle, streaming, persistence, restart recovery, and simple-first local orchestration. Shared leased execution is available when explicitly enabled; Redis remains an advanced hosted option, not the default local path.

---

## 🗂️ Repository Map

| Path | Purpose |
|:-----|:--------|
| 📂 `skills/` | Canonical authored skills |
| 📖 `docs/users/` | End-user documentation |
| 🤝 `docs/contributors/` | Contributor templates and guidance |
| 🏗️ `docs/architecture/` | Roadmap, ADRs, and technical analysis |
| 🔧 `docs/operations/` | Operational runbooks |
| 📋 `docs/specs/` | Runtime, protocol, and artifact contracts |
| 📚 `docs/CATALOG.md` | Generated skill catalog |
| 📦 `dist/` | Generated machine-readable artifacts |
| 🧠 `packages/catalog-core/` | Shared catalog runtime with `ICatalogStorageAdapter` DI |
| 🌐 `packages/server-api/` | Read-only HTTP API with OpenAPI/Swagger UI on `/docs` |
| 🔌 `packages/server-mcp/` | MCP server and local sidecar |
| 🤖 `packages/server-a2a/` | A2A server and task runtime |
| 🖥️ `packages/cli/` | Unified CLI entrypoints, install logic, and Ink visual TUI (ESM-native) |
| ⚙️ `tools/scripts/` | Validation, generation, verification, and tests |
| 🧪 `vitest.workspace.js` | Vitest monorepo workspace configuration |

---

## 🧪 Release Validation

```bash
npm run smoke
```

The smoke run validates:

- ✅ skill validation and metadata generation
- ✅ taxonomy recategorization tooling
- ✅ catalog artifact generation
- ✅ generated catalog markdown
- ✅ archive generation and verification
- ✅ legacy integration test suite (Python PTY + Node TUI assertions)
- ✅ Vitest unit suite for catalog-core scoring, search, and filtering
- ✅ `npm pack --dry-run`
- ✅ API boot and health with OpenAPI/Swagger UI on `/docs`
- ✅ MCP boot in `stdio`, `stream`, and `sse`
- ✅ A2A boot, polling, SSE streaming, cancelation, and push-config lifecycle
