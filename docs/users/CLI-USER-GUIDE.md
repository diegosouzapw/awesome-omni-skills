# Omni Skills CLI User Guide

This guide covers the full public CLI surface shipped by `omni-skills`.

Use this document when you want to:

- install skills or bundles
- search the catalog
- configure MCP clients
- start MCP, API, or A2A services
- use the visual terminal shell
- run diagnostics or release preflight checks

## 1. Install and Entry Modes

Install with `npx`:

```bash
npx omni-skills
```

Current entry behavior:

- in a TTY with no arguments, the CLI opens the guided install flow
- outside a TTY with no arguments, the CLI keeps the non-interactive Antigravity default
- `npx omni-skills ui` opens the visual Ink shell
- `npx omni-skills ui --text` forces the readline fallback UI

## 2. Core Commands

```bash
npx omni-skills help
```

Current commands:

- `ui`
- `find [query]`
- `recategorize`
- `install [flags]`
- `config-mcp`
- `mcp <stdio|stream|sse>`
- `api`
- `a2a`
- `smoke`
- `publish-check`
- `doctor`
- `help`

## 3. Install Flows

### Guided install

```bash
npx omni-skills
npx omni-skills install --guided
```

The guided install flow lets the operator choose:

- target client
- bundle or skill install
- custom path
- install preview before execution

### Install a single skill

```bash
npx omni-skills --skill api-design
npx omni-skills --cursor --skill omni-figma
npx omni-skills --path ./my-skills --skill architecture
```

### Install a bundle

```bash
npx omni-skills --bundle devops
npx omni-skills --codex --bundle full-stack
```

### Supported install-capable client flags

- `--antigravity`
- `--claude`
- `--cursor`
- `--codex`
- `--gemini`
- `--kiro`
- `--opencode`

If no install client flag is provided in non-interactive mode, the default target is:

```text
~/.gemini/antigravity/skills
```

## 4. Catalog Discovery

### Search skills

```bash
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx omni-skills find discovery --tool codex-cli
```

### Search and install in one flow

```bash
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
```

### Common filters

- `--category`
- `--tool`
- `--risk`
- `--sort`
- `--order`
- `--min-quality`
- `--min-best-practices`
- `--min-level`
- `--min-security`
- `--validation-status`
- `--security-status`

## 5. MCP Client Config

Use `config-mcp` to preview or write client-aware MCP config.

### List supported targets

```bash
npx omni-skills config-mcp --list-targets
```

### Preview config

```bash
npx omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

### Write config

```bash
npx omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

Current config-capable client surface includes:

- Claude settings and desktop targets
- Cursor user and workspace
- Codex TOML
- Gemini user and workspace
- Antigravity
- OpenCode user and workspace
- Cline
- GitHub Copilot CLI
- Kilo user, project, and workspace
- Kiro user and workspace
- Zed workspace
- VS Code user and workspace
- Dev Container
- Continue workspace YAML
- Junie project and user
- Windsurf user

## 6. MCP Server

### Start transports

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
```

### Start local sidecar mode

```bash
npx omni-skills mcp stream --local
npx omni-skills mcp sse --local
```

Local sidecar mode adds:

- client detection
- install preview
- install and remove flows
- MCP config writing

## 7. Catalog API

### Start the API

```bash
npx omni-skills api --port 3333
```

Useful routes:

- `GET /healthz`
- `GET /openapi.json`
- `GET /v1/skills`
- `GET /v1/search`
- `GET /v1/skills/:id/archives`
- `GET /v1/skills/:id/download/archive?format=zip`
- `GET /v1/skills/:id/download/archive/checksums`

## 8. A2A Runtime

### Start the server

```bash
npx omni-skills a2a --port 3335
```

The A2A surface supports:

- task-aware discovery
- install-plan handoff
- polling
- streaming
- cancelation
- push-notification config
- memory, JSON, and SQLite persistence

## 9. Visual Shell

```bash
npx omni-skills ui
```

The visual shell currently supports:

- guided install
- search-then-install
- MCP config flow
- service launch for MCP, API, and A2A
- recents
- favorites
- saved presets

State path:

```text
~/.omni-skills/state/ui-state.json
```

## 10. Diagnostics and Preflight

### Doctor

```bash
npx omni-skills doctor
```

Use this to inspect:

- repo state
- local install state
- runtime availability
- environment issues

### Release preflight

```bash
npx omni-skills smoke
npx omni-skills publish-check
```

These validate:

- build
- tests
- package output
- service boot
- scanner coverage
- release packaging assumptions

## 11. Taxonomy and Metadata Tools

### Preview taxonomy drift

```bash
npx omni-skills recategorize
```

### Apply canonical categories

```bash
npx omni-skills recategorize --write
```

## 12. Recommended Usage Patterns

### New user

```bash
npx omni-skills
```

### Operator configuring local MCP

```bash
npx omni-skills config-mcp --list-targets
npx omni-skills mcp stream --local
```

### Maintainer validating a release

```bash
npx omni-skills smoke
```

### Power user searching for the best skill first

```bash
npx omni-skills find security --sort quality --min-quality 95
```

## 13. Related Documents

- [GETTING-STARTED.md](./GETTING-STARTED.md)
- [USAGE.md](./USAGE.md)
- [BUNDLES.md](./BUNDLES.md)
- [../operations/RUNBOOK.md](../operations/RUNBOOK.md)
- [../specs/LOCAL-MCP-SIDECAR.md](../specs/LOCAL-MCP-SIDECAR.md)
