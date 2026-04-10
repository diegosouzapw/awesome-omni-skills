# Awesome Omni Skills Rollout And Current Project Status

> **Operational snapshot for the canonical package, generated docs pipeline, runtime surfaces, and release readiness of the source-controlled project.**

---

## Snapshot

- Date validated: **April 10, 2026**
- Canonical GitHub repo: `diegosouzapw/awesome-omni-skills`
- Canonical source-controlled package: `awesome-omni-skills@0.11.0`
- Canonical runnable command: `npx awesome-omni-skills`
- Current public catalog state in source control: **263** native skills, **109** curated derivatives, and **7** starter bundles
- Current runtime surfaces in source control: **CLI**, **API**, **MCP**, **A2A**, and **Web**
- Current docs automation path: `project:status -> docs:render -> i18n:render`

---

## Rollout Checklist

| Area | Status | Notes |
|:-----|:-------|:------|
| GitHub repository rename | ✅ Complete | Canonical repo slug is `awesome-omni-skills` |
| Source-controlled package rename | ✅ Complete | Root `package.json` and workspace references are on `awesome-omni-skills@0.11.0` |
| Canonical CLI alias | ✅ Complete | Public documentation and examples use `npx awesome-omni-skills` |
| Docs rendering automation | ✅ Complete | `project:status`, `docs:render`, and `i18n:render` are in the build path |
| Family-aware discovery surface | ✅ Complete | CLI, API, and Web expose families, bundles, compare, recommend, and resolve flows |
| Web dashboard runtime | ✅ Complete | `packages/server-web` is shipped and launchable from CLI and TUI |
| Visual shell service orchestration | ✅ Complete | TUI can launch Web, API, MCP, and A2A plus inspect and stop managed services |
| Release validation baseline | ✅ Complete | Source-controlled release gates include tests, pack verification, and quick smoke probes |

---

## What Is Canonical Now

- The project name is **Awesome Omni Skills**.
- The source-controlled package version is **0.11.0**.
- The canonical install and runtime entrypoint is `npx awesome-omni-skills`.
- The published command surface includes install, discovery, runtime servers, managed service control, and Web dashboard launch flows.
- The docs folder is rendered from the same status sources used by the build and translation pipeline.

### Current runtime surface

The current operator surface is no longer just install plus API. The canonical local runtime now includes:

- CLI and visual terminal UI
- Catalog API
- MCP read-only and local sidecar transports
- A2A runtime
- Web dashboard with browser-first catalog search and compare

### Current discovery surface

Operators can now inspect the catalog through:

- `find` and `search`
- `skill`
- `families`
- `bundles` and `bundle`
- `compare`
- `recommend`
- `health`

This same discovery model is shared across the CLI, HTTP API, MCP responses, and Web dashboard.

---

## Migration Notes

### Historical compatibility

- Older references to `npx omni-skills` should be treated as stale documentation or historical context only.
- Older references to the pre-`0.11.x` catalog counts should be treated as outdated generated state.
- Older documentation paths under `docs/operations/*` and `docs/architecture/*` have been consolidated into the current `docs/users/*` and `docs/specs/*` structure.

### Current operator guidance

- Use `npx awesome-omni-skills` with no arguments in a TTY to open the visual terminal UI.
- Use `npx awesome-omni-skills web` for the browser dashboard.
- Use `npx awesome-omni-skills status`, `stop`, and `start` to manage background services consistently.
- Use `npx awesome-omni-skills smoke --quick` when you want runtime-only verification without a full build and pack cycle.

---

## Acceptance Report

The current source-controlled status was revalidated against the repo state on April 10, 2026.

### Local validation commands

These commands are part of the current acceptance baseline:

- `npm test`
- `npm pack --dry-run`
- `node packages/cli/src/bin/cli.js smoke --quick`
- `npm run project:status`
- `npm run docs:render`
- `npm run i18n:render`

### Acceptance outcome

- the package version, docs, and generated status files now target the same `0.11.0` release line
- the canonical docs now describe the Web dashboard and managed runtime commands
- the catalog API docs now cover families, recommendations, compare, and selection resolution
- the visual shell specification now reflects current service launch and control behavior

---

## Current Project State

The rollout work is now best understood as **complete for the current release line**.

What remains is normal product maintenance:

1. keep generated docs and `docs/i18n/*` aligned whenever catalog totals, versions, or runtime surfaces change
2. keep CLI help, API spec, and TUI behavior synchronized when new commands or runtime options are added
3. keep release verification green across `npm test`, `npm pack --dry-run`, and `smoke --quick`
