# 🏛️ Architecture & System Overview

> **An end-to-end map of how Awesome Omni Skills works — the content model, the shared catalog core, the four runtime surfaces, and the generation/validation/release pipeline that ties them together.**

This is the single document to read first to understand *what the project does and how the pieces connect*. It is an architecture-level overview; each subsystem links out to its detailed spec under [`docs/specs/`](specs/).

> **ℹ️ Source of truth for live numbers.** All headline metrics in this repo are generated from [`data/project_status.json`](../data/project_status.json) and injected into docs via `npm run docs:render`. The figures quoted here describe the architecture and are accurate as of the current snapshot, but the canonical, always-current numbers live in the generated tables in [`README.md`](../README.md) and [`docs/README.md`](README.md).

---

## 1. What the project is

Awesome Omni Skills is two things at once:

1. **A public skill catalog** — thousands of reusable `SKILL.md` playbooks that teach an AI coding assistant how to perform a workflow well, plus a curated, best-practice-enhanced derivative surface.
2. **A self-installing runtime** — one npm package (`npx awesome-omni-skills`) that exposes the same generated catalog through **four surfaces**: a CLI, an HTTP API, an MCP server, and an A2A (Agent-to-Agent) server.

The project is a **Node ≥22 monorepo** (npm workspaces) with a **Python generation/validation pipeline** in `tools/scripts/`. The catalog content lives in `skills/` and `skills_omni/`; the machine-readable artifacts that every runtime consumes are generated into `dist/` and committed on purpose.

---

## 2. The big picture

```text
 AUTHORING                 skills/  (native intake, any language)
 (source of truth)         skills_omni/  (curated English derivatives)
        │                        └── each skill = a SKILL.md (YAML frontmatter + markdown body)
        ▼
 VALIDATION & SCORING      tools/scripts/validate_skills.py + skill_metadata.py
        │                  → per-skill metadata.json + repo-root metadata.json
        │                  → quality / best-practices / security scores, taxonomy, security scan
        ▼
 GENERATION                tools/scripts/generate_index.py, build_catalog_db.js, ...
        │                  → skills_index.json
        │                  → dist/catalog.json · dist/catalog.db (SQLite FTS5)
        │                  → dist/manifests/<id>.json · dist/archives/<id>.{zip,tar.gz,checksums}
        │                  → dist/bundles.json · data/project_status.json
        ▼
 SHARED DATA LAYER         packages/catalog-core  (@omni-skills/catalog-core)
        │                  pure functions: search, get, compare, recommend, bundles, install-plan
        │                  pluggable SearchAdapter: SQLite FTS5 ↔ in-memory fallback
        ▼
 RUNTIME SURFACES          CLI            API (:3333)      MCP (:3334)      A2A (:3335)
                           packages/cli   server-api       server-mcp       server-a2a
                           ▲ all four read the SAME generated catalog through catalog-core ▲
```

The defining principle: **catalog logic is implemented once** in `catalog-core` and surfaced four ways. The servers and CLI add only transport, auth, and (for A2A) task state — never their own copy of search or scoring.

---

## 3. The content model

### 3.1 Two authoring surfaces

| Surface | What it is | How it changes | Provenance file |
|:--|:--|:--|:--|
| `skills/` | **Native intake** — community/upstream skills, any language, possibly rough | Direct contributor PRs **and** reviewed `external-import/*` PRs | `ORIGIN.md` (upstream repo, commit, license) |
| `skills_omni/` | **Curated derivatives** — enhanced, English-only, the recommended default | **Only** the private enhancer pipeline; direct public edits are rejected | `ATTRIBUTION.md` + `OMNI_ENHANCED.json` |

A contributor only ever authors a `SKILL.md`. Everything else (`metadata.json`, manifests, archives, the entire `skills_omni/` surface) is generated or automation-owned. `skills_omni/` is a **one-way surface** — its `OMNI_ENHANCED.json` carries `loop_prevention_rule: curated-output-only` so the intake pipeline never re-ingests Omni's own output.

### 3.2 Families & variants

The same capability can exist as several records: a native skill, its `--omni` curated derivative, and separately-sourced `-v2`/`-v3` intakes. These are grouped into **families**:

- A **family** (`family_id`) is one user-facing capability.
- A **variant** is one concrete installable record: `native`, `omni`, `v2`…`v6`, `official`, `community`.
- The `-v2`/`-v3` directory suffix marks a **distinct upstream intake**, *not* an in-place edit.
- The omni variant's catalog id is `<slug>--omni`.
- Default-variant resolution is deterministic and prefers the enhanced surface: `is_default_variant > omni > official > native > community > id`. So "install `sentry`" resolves to `sentry--omni` when a curated derivative exists.

See [Skill Family, Variant & Provenance Model](specs/SKILL-FAMILY-VARIANT-MODEL.md).

### 3.3 Frontmatter

Every `SKILL.md` carries machine-readable YAML frontmatter: `name`, `description`, `version` (per-skill, independent of the npm version), `category`, `tags`, `complexity`, `risk`, `tools`, `source`, `author`, `date_added`, `date_updated`. Curated `skills_omni/` skills add the full family/variant/provenance block (`family_id`, `variant_id`, `upstream_*`, `curation_surface`, `replaces`, …). See [Skill Anatomy](contributors/SKILL-ANATOMY.md) and [Skill Manifest](specs/SKILL-MANIFEST.md).

### 3.4 Categories & bundles

- **Taxonomy:** 18 canonical categories, 17 currently active (see [Skill Classification](specs/SKILL-CLASSIFICATION.md)). Raw categories are normalized via aliases, then keyword-inferred if still unmapped.
- **Bundles:** curated groupings defined by hand in [`data/bundles.json`](../data/bundles.json) (7 bundles: `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer`, `oss-maintainer`). The build resolves each bundle's `skill_ids` against the published catalog into `dist/bundles.json` with availability counts. **Bundle backing is build-state dependent:** the bundle definitions reference idealized curated ids, so in a catalog assembled mostly from automated community intake a bundle may be only *partially* backed (e.g. some members not yet present). Consumers should read the `availability` field rather than assuming every member resolves. See [Bundles](users/BUNDLES.md).

---

## 4. The shared data layer — `catalog-core`

`@omni-skills/catalog-core` is a dependency-light library (only `better-sqlite3`) that every surface consumes. It centralizes:

- **Loading** `dist/catalog.json`, `dist/manifests/<id>.json`, and `data/bundles.json` through an injectable `ICatalogStorageAdapter` (the default `FileSystemAdapter` enforces path-traversal containment).
- **Search** behind a pluggable `SearchAdapter`:
  - `SQLiteSearchAdapter` reads `dist/catalog.db` (FTS5 porter + trigram for typo tolerance) for fast browse/filter at scale.
  - `MemorySearchAdapter` is the fallback when the `.db` is missing, the driver is unbuilt, or the schema is stale — selection is automatic and logged, never a crash.
  - Both share one JS scorer (`search-utils.js`), so keyword ranking is identical regardless of backend.
- **Public API:** `listSkills`, `getSkill`, `searchSkills`/`searchFamilies`, `recommendSkills`, `compareSkills`, `listBundles`, `buildInstallPlan`, `getHealthSnapshot`, and a family of path-safe `resolve*File` download helpers (which return `null` — never throw — for missing or escaping paths).

**Performance contract:** `catalog-core` does **no** caching of its own. Long-lived consumers (like the CLI's `catalog-runtime.js`) load the catalog once and reuse a single `searchAdapter`; the bare `index.js` path re-parses the ~14 MB catalog and reopens SQLite per call. See [Catalog API Surface](specs/CATALOG-API.md).

---

## 5. The four runtime surfaces

All four are launched from the CLI and read the same generated catalog.

### 5.1 CLI — `packages/cli`

The user-facing front door, published as `npx awesome-omni-skills`. `cli.js` is a **thin router that spawns child Node processes** for the heavy work (installer, servers, visual UI) and translates flags into child env vars. Command groups:

| Group | Commands | Purpose |
|:--|:--|:--|
| Discovery | `find` / `search` | Query the catalog with rich filters (`--category`, `--tool`, `--min-quality`, `--sort`, …); `--install`/`--yes` to install a match |
| Install | `install` (+ 9 client flags, `--target-id`, `--path`, `--skill`, `--bundle`, `--guided`) | Copy skills into a target; `install-target`/`targets` manages custom destinations |
| MCP config | `config-mcp` | Preview/write MCP client config across the 33 targets |
| Services | `mcp`, `api`, `a2a` | Boot the runtime servers |
| Visual / ops | `ui` (Ink shell, `--text` fallback), `doctor`, `smoke`/`publish-check` | Interactive shell, diagnostics, release preflight |
| Taxonomy | `recategorize` / `taxonomy` | Run the Python recategorizer |

Two install modes: a **full** install `git clone`s the repo; a **selective/bundle** install fetches per-skill manifests and artifacts over `raw.githubusercontent.com` (overridable via `OMNI_SKILLS_SOURCE_ROOT` / `OMNI_SKILLS_RAW_BASE_URL`). A symlink-escape guard prevents copying files outside the repo root. The **default target is Antigravity** (`~/.gemini/antigravity/skills`).

> **Non-obvious behavior:** with no command in a TTY, the CLI opens the Ink visual shell; with no command and *no* TTY (e.g. CI), it silently runs the legacy default full install into Antigravity.

The Ink visual shell (`ui.mjs`) is a screen-stack UI with install/service funnels, a search-first catalog explorer, persisted settings (theme, language, screen-reader mode), 3 themes, and full i18n. See [CLI Guided Installer](specs/CLI-GUIDED-INSTALLER.md) and [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md).

### 5.2 API — `packages/server-api` (default `:3333`)

A read-only Express 5 catalog API. Routes under `/v1`: `skills`, `families`, `search` (with `?group=families`), `compare`, `bundles`, `install/plan`, plus path-safe download endpoints for manifests, entrypoints, artifacts, archives, signatures, and checksums. OpenAPI 3.1 is served at `/docs` via Swagger UI.

Governance lives in the shared `http-runtime.js` (also reused by the MCP server's network transports): bearer/API-key auth, an admin route, token-bucket rate limiting, CORS and IP allowlists (`net.BlockList`), audit logging, maintenance mode, and security headers. **All of these are disabled by default** — an unconfigured server is open and unauthenticated, bound to `127.0.0.1`. Downloads are defended in depth (id regex + `..` checks + a resolved-path-stays-in-repo check + `dotfiles: deny`). See [Catalog API Surface](specs/CATALOG-API.md).

### 5.3 MCP — `packages/server-mcp` (default `:3334`)

An MCP server (`@modelcontextprotocol/sdk`) with `stdio`, `stream` (Streamable HTTP), and `sse` transports. It always exposes **5 read-only tools** (`search_skills`, `get_skill`, `compare_skills`, `recommend_skills`, `preview_install`), 3 resources, and 2 prompts. In **local sidecar mode** (`OMNI_SKILLS_MCP_MODE=local`) it adds 5 filesystem tools (`detect_clients`, `list_installed_skills`, `install_skills`, `remove_skills`, `configure_client_mcp`).

The sidecar is what powers MCP-config writing across many clients (see §6). Every filesystem write is gated by a per-client path allowlist (escape hatch: `OMNI_SKILLS_LOCAL_ALLOWLIST`), and install/config operations are **dry-run by default**. HTTP/SSE transports create a fresh MCP server instance per session. See [Local MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md).

### 5.4 A2A — `packages/server-a2a` (default `:3335`)

An Agent-to-Agent server exposing `GET /.well-known/agent.json` (the AgentCard) and a JSON-RPC 2.0 `POST /a2a`. It implements a full long-running **task lifecycle**:

- **States:** `submitted → working → completed`, with `input-required`/`auth-required` interrupts and terminal `canceled`/`failed`/`rejected`/`unknown`.
- **Methods:** `message/send`, `message/stream` (SSE), `tasks/get`, `tasks/cancel`, `tasks/resubscribe` (resumable via `Last-Event-Id`), and `tasks/pushNotificationConfig/*`.
- **Operations:** three catalog operations — `discover-skills`, `recommend-stack`, `prepare-install-plan` — and it can infer intent (skill/bundle/tool ids) from free-text messages.
- **Operational tiers (all env-gated):** stores (`memory`/`json`/`sqlite`), executors (`inline`/external `process` worker), and coordinators (`store`/`redis`) with leases and a poll/queue worker for multi-instance and restart recovery.

> A2A is "simple-first": the default is a local JSON store with inline execution. The package still self-describes as an "initial scaffold", but the lifecycle, persistence, SSE replay, and push notifications are substantially implemented. Note: A2A does **not** use the shared `http-runtime` governance layer.

---

## 6. Two client matrices (don't conflate them)

These are the project's "universal installer" selling point — and the most commonly confused part:

| Matrix | Count | Lives in | Driven by | What it does |
|:--|:--|:--|:--|:--|
| **Install clients** | **9** | `packages/install-targets` | `install` command | Where skill files are copied: `--claude`, `--cursor`, `--gemini`, `--codex`, `--kiro`, `--antigravity` (default), `--goose`, `--qwen`, `--opencode` |
| **MCP config** | **16** client families / **33** targets / **20** profiles | `server-mcp/local-sidecar.js` | `config-mcp` command | Where MCP server config is written: JSON/YAML/TOML files for Claude, Cursor, VS Code, Gemini, Antigravity, Kiro, Codex, OpenCode, Cline, Kilo, Copilot, Zed, Continue, Junie, Windsurf, Goose |

They overlap only in the 8 install-capable clients that also have an MCP-config story; `qwen-code` is install-capable but has no MCP-config target. See [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md).

---

## 7. The quality & security pipeline

`validate_skills.py` (orchestrator) + `skill_metadata.py` (the ~2,856-line engine) validate every skill and compute three deterministic 0–100 scores plus support-realness sub-scores.

- **Permissive intake, strict gate.** In normal mode the **only** hard ERRORs are: a missing `SKILL.md`, double-escaped-quote frontmatter in a `skills_omni/` skill, and **any critical-severity security finding**. Everything else (missing fields, bad enums, short bodies) is a non-blocking WARN — so rough native intake is accepted and the enhancer normalizes it later.
- **Security as the real gate.** A single critical pattern (`curl|sh`, `rm -rf /`, `mkfs`/`dd`, or **prompt-injection / exfiltration** attempts embedded in a skill) becomes an ERROR and fails the whole `npm run validate`. ClamAV and VirusTotal are wired but **off by default** (hash-lookup only, never uploads); they are required only in release verification.
- **Anti-gaming caps.** Explicit `max_score` ceilings block a perfect 100 without structural completeness (≥5 workflow steps, a table, ≥3 related skills, real support material). Script-bearing skills can never score "perfect". Boilerplate/trivial support files are detected and penalized.
- **Levels** `l1`/`l2`/`l3` classify maturity (metadata / instructions / resources) but are descriptive, not pass/fail.

See [Skill Classification](specs/SKILL-CLASSIFICATION.md), [Quality Bar](contributors/QUALITY-BAR.md), [High-Score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md), and [Security Validation](specs/SECURITY-VALIDATION.md).

---

## 8. The build & generation pipeline

`npm run build` chains ~15 stages in a strict, dependency-ordered sequence. Each stage consumes the previous stage's output:

```text
identity:check → validate → verify:scanners → index → verify:archives
   → catalog → build:db → project:status → docs:render
   → registry:sync-txt → registry:render → i18n:render
   → docs:render:check → registry:check → i18n:check
```

| Stage | Produces |
|:--|:--|
| `validate` | `metadata.json` (repo + per-skill), scores, taxonomy |
| `index` | `skills_index.json`, `dist/catalog.json`, `dist/bundles.json`, `dist/manifests/*`, reproducible `dist/archives/*` |
| `catalog` | `docs/CATALOG.md` |
| `build:db` | `dist/catalog.db` (SQLite FTS5 + trigram) |
| `project:status` | `data/project_status.json` (+ `catalog_hash`) |
| `docs:render` | injects generated blocks into 8 docs (see §9) |
| `registry:*` | `REPOSITORY-SOURCES.md` from `SOURCES.txt` |
| `i18n:render` | `docs/i18n/**` (31 locales) |
| `*:check` | fail the build if any generated artifact drifted from a fresh regen |

**Determinism is a design goal:** archives are byte-reproducible, `project_status` honors `SOURCE_DATE_EPOCH`, and timestamps use a stable "max of source dates" rule. CI then runs `git diff --exit-code` over generated artifacts, so a stale commit fails. The `.githooks/pre-commit` hook (installed via `npm run hooks:install`) regenerates and stages these artifacts on every commit.

### 8.1 Single source of truth for docs

Two state files anchor the whole system:

- [`data/project_identity.json`](../data/project_identity.json) — **hand-authored, stable**: names, URLs, surface paths, runtime surfaces, paired private repo.
- [`data/project_status.json`](../data/project_status.json) — **generated, live**: skill counts, scores, client counts, i18n languages, validation tallies, `catalog_hash`.

`render_project_docs.py` injects values from these into bounded `<!-- generated:<id>:start --> … <!-- generated:<id>:end -->` blocks across **8 files** (`README.md`, `docs/README.md`, `CONTRIBUTING.md`, `docs/users/GETTING-STARTED.md`, `docs/users/USAGE.md`, `docs/contributors/QUALITY-BAR.md`, `docs/contributors/HIGH-SCORE-PLAYBOOK.md`, `docs/specs/SKILL-CLASSIFICATION.md`).

> **🚫 Never hand-edit text inside `generated:*` or `registry:*` markers.** Change the data and run `npm run project:status && npm run docs:render`. Edit only the prose *outside* the markers.

The generated artifacts in `dist/` are committed deliberately because they are part of the install, API, MCP, A2A, smoke, and release contract — consumers expect them present without running a build.

---

## 9. Internationalization — two separate systems

A frequent point of confusion: there are **two i18n subsystems with different locale sets**.

| System | Locales | Location | What it covers |
|:--|:--|:--|:--|
| **Documentation i18n** | **31** | `docs/i18n/<lang>/` | Translated doc mirrors, generated by `generate_i18n.py` (heading-keyword translation; bodies stay English). Excludes `en` (source) and `hi` (folded into `in`). |
| **Runtime i18n** | **33** | `packages/i18n-runtime/src/locales/` | Full per-namespace JSON (`common`, `cli`, `tui`, `errors`, `web`) for the CLI/TUI, consumed by `runtime-i18n.js`. Adds `en` and `hi`. |

Locale resolution precedence: `--lang` > `OMNI_SKILLS_LANG` > saved preference > system `LANG` > `en`. RTL is handled for `ar` and `he`. The `web` namespace is **pre-staged for a browser UI that is not yet built** (there is no `packages/web` yet).

---

## 10. Contribution, enhancement & release lifecycle

```text
 CONTRIBUTE                          VALIDATE & REVIEW              ENHANCE (private)            RELEASE
 ─────────                           ─────────────────             ────────────────            ───────
 direct PR to skills/      ┐         validate.yml:                 enhance-pr-skills.yml:       merge to main
                           ├──────▶  · identity + scope guard ──▶  · self-hosted runner    ──▶  auto-release-skill-merges.yml:
 external-import/* PR      ┘         · npm run build               · OmniRouter (cx/gpt-5.4)     · detect skill-surface change
                                     · npm test                    · materialize skills_omni/    · bump (99-rollover) + sign
 propose upstream:                   · committed-artifacts gate    · open companion PR           · npm publish + GitHub Release
 SOURCES.txt → REPOSITORY-SOURCES.md skill-review.yml (3rd-party)    skills-omni/pr-<N>          v* tag → release.yml (verify)
```

- **Two native intake paths**, both landing in `skills/` and hitting the same validator: direct contributor PRs, and maintainer-operated `external-import/*` branches that import reviewed upstream repos.
- **Proposing an upstream repo** is repo-first: add a URL to [`SOURCES.txt`](../SOURCES.txt) → it becomes a candidate row in [`REPOSITORY-SOURCES.md`](../REPOSITORY-SOURCES.md). Merging a row does *not* merge intake — it feeds the private external-sync runtime.
- **The private enhancer** (`omni-skills-private`, a gitignored paired Python repo) runs on PRs touching `skills/**`, calls a pinned model over a LAN OmniRouter, and opens a companion `skills-omni/pr-<N>` PR that materializes curated derivatives with `ATTRIBUTION.md`. A scope guard (`validate_contribution_scope.py`) blocks direct human edits to `skills_omni/` by requiring the automation's exact PR signature.
- **Three release paths:** content-driven auto-release on `main`, tag-driven `release.yml` (bounded ClamAV/VirusTotal + signed artifacts + npm provenance), and a manual `workflow_dispatch` fallback. Versioning is a repo-local base-100 rollover (`0.12.99 → 0.13.0 → 1.0.0`).

There are 7 GitHub workflows in total: `validate.yml`, `release.yml`, `auto-release-skill-merges.yml`, `enhance-pr-skills.yml`, `manual-release-fallback.yml`, `skill-review.yml`, `sync-repository-metadata.yml`. See [Contributing](../CONTRIBUTING.md) and [Skill PR Workflow](contributors/SKILL-PR-WORKFLOW.md).

---

## 11. Testing

| Layer | Command | What it covers |
|:--|:--|:--|
| Unit | `npm run test:unit` (Vitest workspace) | `catalog-core` scoring/search/filter (the only package with coverage gates: 85/80); other packages `passWithNoTests` |
| E2E | `npm run test:e2e` | Real CLI specs: commands, discovery, install, server boot/health |
| TUI | `npm run test:tui` | Ink shell harness + Python PTY driver |
| Legacy | `npm run test:legacy` | A deprecated, do-not-extend suite, still wired into `npm test` |
| Smoke | `npm run smoke` | Full release preflight: build, pack dry-run, and API/MCP/A2A boot+health on free ports |

`server-mcp` and `server-a2a` are the thinnest-tested surfaces today.

---

## 12. Licensing

The repository is **dual-licensed**:

- [`LICENSE`](../LICENSE) — **MIT** for code and tooling.
- [`LICENSE-CONTENT`](../LICENSE-CONTENT) — **CC BY 4.0** for documentation and skill content, *unless a more specific upstream license applies*.

This split matters because the catalog re-publishes community/upstream skill content; native skills track their upstream `license` in `ORIGIN.md`, and the private external-sync runtime enforces per-source license governance.

---

## 13. Current state & known rough edges

**Snapshot (generated source of truth: [`data/project_status.json`](../data/project_status.json)):**

- Version `v0.12.9` (all 7 workspace packages in lockstep; paired private floor `v1.0.1`).
- **4,715 published skills** = **3,092 native** + **1,623 curated**, in **2,349 families**.
- 17 active categories · 7 bundles · 9 install clients · 16 MCP client families / 33 config targets / 20 profiles.
- Validation: 4,073 passed / 642 warn / 0 errors. Average quality 88.5 · best-practices 99.3 · security 93.1. Maturity l1=0 · l2=4,450 · l3=265.

> **Terminology note:** the `native_skill_count` field in `project_status.json` is actually the **total** published count (native + curated = 4,715), not native-only. The native/curated split is 3,092 / 1,623.

**Known rough edges & in-flight work (from `_tasks/` initiatives):**

- **Bundles are currently only partially backed** — bundle definitions reference idealized curated ids not all present in the automated community catalog.
- **Family grouping uses a temporary fallback** — `-v2`/`-v3` dirs surface both as variants of a base family and as standalone families until all skills carry stable `family_id`.
- **Archive signing is wired but off by default** (signature status `unsigned` in this snapshot).
- **A browser/web UI is staged but not built** — the `web` i18n namespace exists across all 33 runtime locales, but there is no `packages/web`.
- Roadmap themes in `_tasks/`: SQLite FTS5 search at scale (`new-search`), the family/variant/provenance model (`ajustes-finais`), and a utility-weighted enhancer/scorer (`new-enhanced`).

---

## 14. Where to go next

| If you want to… | Read |
|:--|:--|
| Install and use skills | [Getting Started](users/GETTING-STARTED.md) · [CLI User Guide](users/CLI-USER-GUIDE.md) · [Usage](users/USAGE.md) |
| Operate the runtime | [Runbook](users/RUNBOOK.md) |
| Understand the directory layout | [Project Structure](PROJECT-STRUCTURE.md) |
| Dive into a subsystem | [`docs/specs/`](specs/) — API, installer, visual shell, sidecar, classification, security, manifest, family/variant |
| Contribute a skill | [Contributing](../CONTRIBUTING.md) · [Skill PR Workflow](contributors/SKILL-PR-WORKFLOW.md) · [Skill Anatomy](contributors/SKILL-ANATOMY.md) |
| Understand the curated/enhancer surface | [Enhanced Skill Standard](specs/ENHANCED-SKILL-STANDARD.md) · [Enhanced Support Family Policy](specs/ENHANCED-SUPPORT-FAMILY-POLICY.md) · [Enhanced Skill Profiles](specs/ENHANCED-SKILL-PROFILES.md) · [Enhanced Upstream Comparison](specs/ENHANCED-UPSTREAM-COMPARISON.md) |
