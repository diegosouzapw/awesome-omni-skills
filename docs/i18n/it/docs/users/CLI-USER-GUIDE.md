# 🧭 Awesome Omni Skills CLI User Guide (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/CLI-USER-GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/users/CLI-USER-GUIDE.md) · 🇪🇸 [es](../../../es/docs/users/CLI-USER-GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/users/CLI-USER-GUIDE.md) · 🇩🇪 [de](../../../de/docs/users/CLI-USER-GUIDE.md) · 🇮🇹 [it](../../../it/docs/users/CLI-USER-GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/users/CLI-USER-GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/CLI-USER-GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/users/CLI-USER-GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/users/CLI-USER-GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/users/CLI-USER-GUIDE.md) · 🇮🇳 [in](../../../in/docs/users/CLI-USER-GUIDE.md) · 🇹🇭 [th](../../../th/docs/users/CLI-USER-GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/users/CLI-USER-GUIDE.md) · 🇮🇩 [id](../../../id/docs/users/CLI-USER-GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/users/CLI-USER-GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/users/CLI-USER-GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/users/CLI-USER-GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/users/CLI-USER-GUIDE.md) · 🇳🇴 [no](../../../no/docs/users/CLI-USER-GUIDE.md) · 🇩🇰 [da](../../../da/docs/users/CLI-USER-GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/users/CLI-USER-GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/users/CLI-USER-GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/users/CLI-USER-GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/users/CLI-USER-GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/users/CLI-USER-GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/users/CLI-USER-GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/users/CLI-USER-GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/CLI-USER-GUIDE.md) · 🇮🇱 [he](../../../he/docs/users/CLI-USER-GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/users/CLI-USER-GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/CLI-USER-GUIDE.md)

> Translation snapshot for **Awesome Omni Skills** `v0.12.0`.
> Source: `docs/users/CLI-USER-GUIDE.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/users/CLI-USER-GUIDE.md; version=0.12.0; release=v0.12.0; english_snapshot=2026-04-11T17:05:17-03:00 -->

> **The full public CLI surface shipped by `awesome-omni-skills`.**

> **Package status:** the public CLI, npm package, and documentation now use the same canonical command surface. See [rollout and migration status](../../../../users/AWESOME-OMNI-SKILLS-ROLLOUT.md).

This guide is meant to be operational, not just referential. It covers:

- how the CLI behaves when you run it with no arguments
- step-by-step walkthroughs for the main install and runtime scenarios
- the real option surface exposed by the current entrypoint and installer
- when to use the visual TUI, the text fallback UI, or direct commands

---

## 1️⃣ Quick Decision Guide

| Goal | Start Here |
|:-----|:-----------|
| Install skills for the first time | [2️⃣ Entry Modes](#2️⃣-entry-modes) and [3️⃣ Step-by-Step Scenarios](#3️⃣-step-by-step-scenarios) |
| Install one skill or one bundle fast | [3.2 Install Directly](#32-install-directly-with-flags) |
| Search before installing | [3.3 Search Before You Install](#33-search-before-you-install) |
| Use the rich TUI | [3.4 Use the Visual Shell](#34-use-the-visual-shell) |
| Configure a client to talk to MCP | [3.5 Configure an MCP Client](#35-configure-an-mcp-client) |
| Start MCP, API, or A2A services | [3.6 Start Runtime Services](#36-start-runtime-services) |
| Run diagnostics or release checks | [3.7 Diagnostics and Preflight](#37-diagnostics-and-preflight) |
| Look up all flags by command | [4️⃣ Command Reference](#4️⃣-command-reference) |

---

## 2️⃣ Entry Modes

The same package supports several entry behaviors.

```bash
npx awesome-omni-skills
```

### 🎭 What Happens When You Start the CLI

| Context | Result |
|:--------|:-------|
| 🖥️ TTY + no arguments | Opens the **visual shell** |
| ⚙️ Non-TTY + no arguments | Runs the installer backend directly |
| 🎨 `npx awesome-omni-skills ui` | Opens the **Ink visual shell** |
| 📝 `npx awesome-omni-skills ui --text` | Opens the **readline text fallback** UI |
| 🧭 `npx awesome-omni-skills install --guided` | Opens the **text guided installer** |
| ❓ `npx awesome-omni-skills help` | Prints the top-level command reference |

### 📌 Important Defaults

- Default non-interactive install target: `~/.gemini/antigravity/skills`
- Default visual shell state path: `~/.omni-skills/state/ui-state.json`
- The CLI entrypoint supports both:
  - `npx awesome-omni-skills <command> ...`
  - `npm run cli -- <command> ...`

---

## 3️⃣ Step-by-Step Scenarios

This section is the practical walkthrough. If you want the fastest path to get something done, start here.

### 3.1 First-Time Install

#### Scenario A: you want the CLI to guide you visually

```bash
npx awesome-omni-skills
```

What happens:

1. The CLI detects that you are in an interactive terminal.
2. It opens the visual shell.
3. You choose the install path from the home screen.
4. You choose the target destination:
   - a known client such as Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, or OpenCode
   - a saved custom target you registered earlier
   - or a one-off custom path
5. You choose the install scope:
   - full library
   - one skill
   - one bundle
   - search then install
6. The CLI shows an install preview with the resolved path and equivalent command.
7. You confirm execution.

#### Scenario B: you want the text guided flow explicitly

```bash
npx awesome-omni-skills install --guided
```

Use this when:

- you are in a TTY and want to skip the visual shell
- you are teaching someone else how to use the installer
- you want the preview/confirm screen before writing files

#### Scenario C: you are in a non-interactive environment

```bash
npx awesome-omni-skills
```

Outside a TTY, the CLI does not open the guided flow. It delegates directly to the installer backend and uses the default Antigravity path unless you pass an explicit target.

---

### 3.2 Install Directly With Flags

Use direct flags when you already know what you want.

#### Install the full library into a known client

```bash
npx awesome-omni-skills --cursor
npx awesome-omni-skills --codex
npx awesome-omni-skills --claude
npx awesome-omni-skills --goose
npx awesome-omni-skills --qwen
```

#### Install one specific skill

```bash
npx awesome-omni-skills --cursor --skill omni-figma
npx awesome-omni-skills --codex --skill api-design
npx awesome-omni-skills --path ./my-skills --skill architecture
```

#### Install one bundle

```bash
npx awesome-omni-skills --cursor --bundle full-stack
npx awesome-omni-skills --codex --bundle ai-engineer
npx awesome-omni-skills --bundle devops
```

#### Install to multiple known clients in one run

```bash
npx awesome-omni-skills --cursor --gemini --bundle design
npx awesome-omni-skills --codex --claude --skill omni-figma
```

#### Install from a custom directory instead of a known client

```bash
npx awesome-omni-skills --path ./skills-local --skill architecture
npx awesome-omni-skills --path ./agent-skills --bundle security
```

#### Register a reusable custom target once and install through it later

```bash
npx awesome-omni-skills install-target add --name "Team CLI" --path ~/.team-cli/skills
npx awesome-omni-skills install-target list
npx awesome-omni-skills --target-id custom-team-cli --skill architecture
```

Use this when:

- a CLI or IDE supports `SKILL.md` directories but is not one of the built-ins
- you want a stable destination id for automation and repeated installs
- your team has an internal CLI with its own skills directory

#### Install a specific published version or tag

```bash
npx awesome-omni-skills --cursor --bundle full-stack --version 0.12.0
npx awesome-omni-skills --cursor --skill omni-figma --tag v0.12.0
```

Use these when you need reproducibility against a known public release.

#### Repeat `--skill` or `--bundle` in direct installer mode

```bash
npx awesome-omni-skills --cursor --skill api-design --skill auth-flows
npx awesome-omni-skills --codex --bundle design --bundle security
```

This works in direct installer mode. The guided flow is intentionally narrower and only resolves one skill or one bundle at a time.

---

### 3.3 Search Before You Install

Use `find` when you know the problem you want to solve, but not the exact skill id.

#### Search the published catalog

```bash
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 90 --min-security 90
npx awesome-omni-skills find discovery --tool codex-cli
```

What happens:

1. The CLI queries the generated local catalog.
2. It prints matching skills with:
   - description
   - category
   - risk
   - level
   - best-practices score
   - quality score
   - security score
   - compatible tools
3. It also prints matching bundles when relevant.

#### Search and install in one command

```bash
npx awesome-omni-skills find figma --tool cursor --install --yes
npx awesome-omni-skills find foundation --bundle essentials --install --yes
```

How it behaves:

1. The CLI searches the catalog.
2. If you passed `--bundle`, it prefers that bundle for installation.
3. Otherwise it selects the best matching skill, or prompts if there are multiple interactive matches.
4. It builds the equivalent install command.
5. With `--yes`, it executes immediately.

#### Export machine-readable search results

```bash
npx awesome-omni-skills find figma --json
```

Use this when you want to automate selection or pipe results into another tool.

#### Example filter combinations

```bash
npx awesome-omni-skills find mcp --category tools --sort quality --order desc
npx awesome-omni-skills find audit --risk medium --min-security 95
npx awesome-omni-skills find agent --validation-status passed --security-status clean
npx awesome-omni-skills find frontend --min-level 3 --min-best-practices 90
```

---

### 3.4 Use the Visual Shell

The TUI is the richest operator surface for install, discovery, and runtime launch.

```bash
npx awesome-omni-skills ui
```

What the visual shell covers:

1. Home hub with grouped actions.
2. Install cockpit with built-in targets, saved custom targets, and one-off custom paths.
3. Search-first catalog explorer.
4. Runtime cockpit for MCP, API, A2A, and MCP client config.
5. Recent actions, favorites, and saved presets.
6. Theme, compact mode, and accessibility settings.

#### Register a custom CLI or IDE directly from the TUI

In the visual shell:

1. Open `Install skills`.
2. Choose `Register custom target`.
3. Enter a label such as `Team CLI`.
4. Enter the skills directory path such as `~/.team-cli/skills`.
5. Continue into full-library, single-skill, bundle, or search-first install.

The TUI saves that target in your CLI state file, and future installs can reuse it without retyping the path.

#### When to use `ui --text`

```bash
npx awesome-omni-skills ui --text
```

Use the text fallback when:

- you are in a terminal that does not behave well with Ink
- you are in screen sharing or serial terminal sessions
- you want a simpler menu-driven flow

#### Screen reader scenarios

```bash
INK_SCREEN_READER=true npx awesome-omni-skills ui
```

The TUI also stores its own screen-reader preference:

- `auto`
- `on`
- `off`

---

### 3.5 Configure an MCP Client

Use `config-mcp` to preview or write client-specific MCP config.

#### Scenario A: list supported targets first

```bash
npx awesome-omni-skills config-mcp --list-targets
```

Do this when you want to see the exact target ids before writing anything.

#### Scenario B: interactive guided config selection

```bash
npx awesome-omni-skills config-mcp
```

When run in a TTY with no explicit `--client`, `--target`, or `--file`, the CLI guides you through:

1. choosing a config target
2. choosing a transport
3. filling the MCP URL when needed
4. optionally writing the config

#### Scenario C: preview config for a known target

```bash
npx awesome-omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp
```

This prints:

- target path
- config format/profile
- effective transport
- server name
- preview config text
- follow-up recipes and instructions

#### Scenario D: write config immediately

```bash
npx awesome-omni-skills config-mcp \
  --target windsurf-user \
  --transport sse \
  --url http://127.0.0.1:3335/sse \
  --write
```

#### Scenario E: preview as JSON for automation

```bash
npx awesome-omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp \
  --json
```

---

### 3.6 Start Runtime Services

#### MCP server

Read-only mode:

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
```

Local sidecar mode:

```bash
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills mcp sse --local
npx awesome-omni-skills mcp stdio --local
```

Use local sidecar mode when you want filesystem-aware tools such as install preview, install/remove flows, and config writing.

#### Catalog API

```bash
npx awesome-omni-skills api --port 3333
npx awesome-omni-skills api --host 127.0.0.1 --port 3333
```

Useful routes after startup:

- `GET /healthz`
- `GET /openapi.json`
- `GET /v1/skills`
- `GET /v1/search`
- `GET /v1/bundles`

#### A2A runtime

```bash
npx awesome-omni-skills a2a --port 3335
npx awesome-omni-skills a2a --host 127.0.0.1 --port 3335
npx awesome-omni-skills a2a --host 127.0.0.1 --port 3335 --base-url http://127.0.0.1:3335
```

Optional persistence examples:

```bash
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx awesome-omni-skills a2a --port 3335

OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
npx awesome-omni-skills a2a --port 3335
```

---

### 3.7 Diagnostics and Preflight

#### Doctor

```bash
npx awesome-omni-skills doctor
```

Use `doctor` when you want a quick read on:

- repo roots and packaged scripts
- install target paths
- API, MCP, and A2A entrypoints
- common next commands

#### Release preflight

```bash
npx awesome-omni-skills smoke
npx awesome-omni-skills publish-check
```

What it does by default:

1. build and validation pipeline
2. tests
3. `npm pack --dry-run`
4. service boot/probe checks for API, MCP, and A2A

Skip flags:

```bash
npx awesome-omni-skills smoke --skip-build
npx awesome-omni-skills smoke --skip-test
npx awesome-omni-skills smoke --skip-pack
npx awesome-omni-skills smoke --skip-services
```

---

### 3.8 Taxonomy and Metadata Maintenance

These commands are mainly for maintainers and repo operators.

```bash
npx awesome-omni-skills recategorize
npx awesome-omni-skills recategorize --write
```

Use:

- `recategorize` to preview category drift
- `recategorize --write` to apply canonical categories

---

## 4️⃣ Command Reference

This section lists the concrete command surfaces and flags.

### 4.1 `ui`

```bash
npx awesome-omni-skills ui
npx awesome-omni-skills ui --text
```

| Flag | Meaning |
|:-----|:--------|
| `--text` | Use the readline menu fallback instead of Ink |

Notes:

- `ui` requires an interactive TTY
- `ui --text` remains useful even in TTY when you want a simpler surface
- `OMNI_SKILLS_UI_TEXT=1` also forces the text fallback

---

### 4.2 `install` and Direct Install Flags

These can be used through:

```bash
npx awesome-omni-skills install ...
npx awesome-omni-skills --cursor --skill omni-figma
```

#### Target selection flags

| Flag | Target |
|:-----|:-------|
| `--antigravity` | `~/.gemini/antigravity/skills` |
| `--claude` | `~/.claude/skills` |
| `--cursor` | `~/.cursor/skills` |
| `--codex` | `$CODEX_HOME/skills` or `~/.codex/skills` |
| `--gemini` | `~/.gemini/skills` |
| `--goose` | `~/.agents/skills` |
| `--kiro` | `~/.kiro/skills` |
| `--qwen` | `.qwen/skills` in the current project |
| `--opencode` | `.opencode/skills` in the current project |
| `--target-id <id>` | A saved custom install target from local CLI state |
| `--path <dir>` | Custom install directory |

#### Selection flags

| Flag | Meaning |
|:-----|:--------|
| `--skill <id>` | Install only the selected skill; repeatable in direct installer mode |
| `--bundle <id>` | Install a published bundle; repeatable in direct installer mode |
| `--guided` | Force the guided TTY install flow |

#### Release selection flags

| Flag | Meaning |
|:-----|:--------|
| `--version <ver>` | Checkout tag `v<ver>` after clone |
| `--tag <tag>` | Checkout an exact git tag |

Examples:

```bash
npx awesome-omni-skills install --guided
npx awesome-omni-skills --cursor --skill omni-figma
npx awesome-omni-skills --goose --bundle essentials
npx awesome-omni-skills --qwen --skill api-design
npx awesome-omni-skills --target-id custom-team-cli --skill architecture
npx awesome-omni-skills --codex --bundle full-stack
npx awesome-omni-skills --cursor --version 0.12.0 --bundle design
```

---

### 4.3 `find` / `search`

```bash
npx awesome-omni-skills find <query> [flags]
npx awesome-omni-skills search <query> [flags]
```

#### Search flags

| Flag | Meaning |
|:-----|:--------|
| `--category <id>` | Filter by category |
| `--tool <id>` | Filter by supported tool |
| `--client <id>` | Alias for tool-oriented filtering |
| `--risk <id>` | Filter by risk |
| `--sort <field>` | Sort field |
| `--order <asc\|desc>` | Sort order |
| `--limit <n>` | Maximum results |
| `--min-quality <n>` | Minimum quality score |
| `--min-best-practices <n>` | Minimum best-practices score |
| `--min-level <n>` | Minimum maturity level |
| `--min-security <n>` | Minimum security score |
| `--validation-status <id>` | Filter by validation state |
| `--security-status <id>` | Filter by security state |
| `--no-bundles` | Hide bundle matches |
| `--json` | Output machine-readable JSON |

#### Install-through-search flags

| Flag | Meaning |
|:-----|:--------|
| `--install` | Turn the selected search result into an install command |
| `--yes` | Execute the generated install command immediately |
| `--target-id <id>` | Install the selected result into a saved custom target |
| `--path <dir>` | Install search result into a custom path |
| `--bundle <id>` | Prefer a specific bundle when using `--install` |

Examples:

```bash
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --tool codex-cli --min-security 90
npx awesome-omni-skills find figma --json
npx awesome-omni-skills find figma --tool cursor --install --yes
npx awesome-omni-skills find architecture --install --target-id custom-team-cli --yes
npx awesome-omni-skills find deploy --bundle devops --install --yes
```

---

### 4.4 `config-mcp`

```bash
npx awesome-omni-skills config-mcp [flags]
```

| Flag | Meaning |
|:-----|:--------|
| `--list-targets` | Print supported config targets |
| `--client <id>` | Hint the client family |
| `--target <id>` | Use a known target id such as `continue-workspace` |
| `--config-target <id>` | Alias for `--target` |
| `--file <path>` | Use an explicit config file path |
| `--transport <stdio\|stream\|sse>` | Choose transport |
| `--url <url>` | MCP endpoint for `stream` or `sse` |
| `--server-name <name>` | Override default server name `omni-skills` |
| `--write` | Write the config instead of previewing |
| `--json` | Emit preview as JSON |
| `--no-prompt` | Skip interactive write prompt after preview |
| `--stdio` | Transport shortcut |
| `--stream` | Transport shortcut |
| `--sse` | Transport shortcut |

Examples:

```bash
npx awesome-omni-skills config-mcp --list-targets
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
npx awesome-omni-skills config-mcp --file ./mcp.json --transport stdio --write
```

This is the right path for MCP-capable tools that do not expose a first-class skills directory. The current config surface covers clients and IDEs such as Continue, Junie, Windsurf, VS Code, Zed, Cline, GitHub Copilot CLI, Kilo Code, Goose, OpenCode, and Claude Desktop.

---

### 4.5 `mcp`

```bash
npx awesome-omni-skills mcp <stdio|stream|sse> [flags]
```

| Flag | Meaning |
|:-----|:--------|
| `--local` | Run MCP in local sidecar mode instead of read-only mode |
| `--host <host>` | Bind host override |
| `--port <port>` | Bind port override |

Examples:

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills mcp sse --local --host 127.0.0.1 --port 3335
```

---

### 4.6 `api`

```bash
npx awesome-omni-skills api [flags]
```

| Flag | Meaning |
|:-----|:--------|
| `--host <host>` | Bind host override |
| `--port <port>` | Bind port override |

Examples:

```bash
npx awesome-omni-skills api --port 3333
npx awesome-omni-skills api --host 127.0.0.1 --port 3333
```

---

### 4.7 `a2a`

```bash
npx awesome-omni-skills a2a [flags]
```

| Flag | Meaning |
|:-----|:--------|
| `--host <host>` | Bind host override |
| `--port <port>` | Bind port override |
| `--base-url <url>` | Override the externally advertised base URL |

Examples:

```bash
npx awesome-omni-skills a2a --port 3335
npx awesome-omni-skills a2a --host 127.0.0.1 --port 3335 --base-url http://127.0.0.1:3335
```

---

### 4.8 `doctor`

```bash
npx awesome-omni-skills doctor
```

No flags today. Use it when you need a fast environment snapshot.

---

### 4.9 `smoke` and `publish-check`

```bash
npx awesome-omni-skills smoke [flags]
npx awesome-omni-skills publish-check [flags]
```

`publish-check` is an alias for `smoke`.

| Flag | Meaning |
|:-----|:--------|
| `--skip-build` | Skip build and validation pipeline |
| `--skip-test` | Skip test suite |
| `--skip-pack` | Skip `npm pack --dry-run` |
| `--skip-services` | Skip service boot/probe checks |

Examples:

```bash
npx awesome-omni-skills smoke
npx awesome-omni-skills smoke --skip-pack
npx awesome-omni-skills publish-check --skip-services
```

---

### 4.10 `recategorize`

```bash
npx awesome-omni-skills recategorize
npx awesome-omni-skills recategorize --write
```

| Flag | Meaning |
|:-----|:--------|
| `--write` | Apply canonical category changes instead of previewing |

---

### 4.11 `help`

```bash
npx awesome-omni-skills help
```

Use this for the shortest built-in command map.

---

## 5️⃣ Practical Workflows

### 🆕 New user

```bash
npx awesome-omni-skills
```

Use the guided install and stop there.

### 🔎 Search first, then install to Cursor

```bash
npx awesome-omni-skills find figma --tool cursor --install --yes
```

### 🎨 Use the TUI instead of memorizing flags

```bash
npx awesome-omni-skills ui
```

### 🔌 Configure Continue to talk to local MCP

```bash
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills config-mcp \
  --target continue-workspace \
  --transport stream \
  --url http://127.0.0.1:3334/mcp \
  --write
```

### 🌐 Expose the catalog over HTTP

```bash
npx awesome-omni-skills api --port 3333
```

### 🤖 Stand up the A2A surface

```bash
npx awesome-omni-skills a2a --port 3335
```

### 🧪 Validate before a release or npm publish

```bash
npx awesome-omni-skills smoke
```

---

## 6️⃣ Notes and Gotchas

- In a TTY, `npx awesome-omni-skills` opens guided install, not the full-library direct installer.
- `ui` requires an interactive terminal. Use `ui --text` if you want a menu flow in simpler terminals.
- `find --install` can prompt for a target client when you did not pass one and the selected skill supports multiple install-capable tools.
- `config-mcp` is the right tool for MCP-capable clients that do not use a native skills directory.
- The direct installer supports multi-target installs and repeatable `--skill`/`--bundle` flags; the guided flow is intentionally narrower.
- `publish-check` and `smoke` are the same command path today.

---

## 📖 Related Documents

| Doc | What It Covers |
|:----|:--------------|
| 🚀 [Getting Started](../../../../users/GETTING-STARTED.md) | Install and verify in under 2 minutes |
| 📗 [Usage Guide](../../../../users/USAGE.md) | Broader usage patterns, runtime notes, and examples |
| 📦 [Bundles](../../../../users/BUNDLES.md) | Curated skill collections |
| 🔧 [System Runbook](../../../../users/RUNBOOK.md) | Operational reference |
| 🔌 [Local MCP Sidecar](../../../../specs/LOCAL-MCP-SIDECAR.md) | Filesystem tools and config writing |
