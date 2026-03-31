# 📗 Usage Guide (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/USAGE.md) · 🇪🇸 [es](../../../es/docs/users/USAGE.md) · 🇫🇷 [fr](../../../fr/docs/users/USAGE.md) · 🇩🇪 [de](../../../de/docs/users/USAGE.md) · 🇮🇹 [it](../../../it/docs/users/USAGE.md) · 🇷🇺 [ru](../../../ru/docs/users/USAGE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/USAGE.md) · 🇯🇵 [ja](../../../ja/docs/users/USAGE.md) · 🇰🇷 [ko](../../../ko/docs/users/USAGE.md) · 🇸🇦 [ar](../../../ar/docs/users/USAGE.md) · 🇮🇳 [in](../../../in/docs/users/USAGE.md) · 🇹🇭 [th](../../../th/docs/users/USAGE.md) · 🇻🇳 [vi](../../../vi/docs/users/USAGE.md) · 🇮🇩 [id](../../../id/docs/users/USAGE.md) · 🇲🇾 [ms](../../../ms/docs/users/USAGE.md) · 🇳🇱 [nl](../../../nl/docs/users/USAGE.md) · 🇵🇱 [pl](../../../pl/docs/users/USAGE.md) · 🇸🇪 [sv](../../../sv/docs/users/USAGE.md) · 🇳🇴 [no](../../../no/docs/users/USAGE.md) · 🇩🇰 [da](../../../da/docs/users/USAGE.md) · 🇫🇮 [fi](../../../fi/docs/users/USAGE.md) · 🇵🇹 [pt](../../../pt/docs/users/USAGE.md) · 🇷🇴 [ro](../../../ro/docs/users/USAGE.md) · 🇭🇺 [hu](../../../hu/docs/users/USAGE.md) · 🇧🇬 [bg](../../../bg/docs/users/USAGE.md) · 🇸🇰 [sk](../../../sk/docs/users/USAGE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/USAGE.md) · 🇮🇱 [he](../../../he/docs/users/USAGE.md) · 🇵🇭 [phi](../../../phi/docs/users/USAGE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/USAGE.md)

> Translation snapshot for **Awesome Omni Skills** `v0.1.5`.
> Source: `docs/users/USAGE.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/users/USAGE.md; version=0.1.5; release=v0.1.5; english_snapshot=2026-03-31T00:00:00+00:00 -->

> **Everything you need to invoke skills, run services, and operate the Awesome Omni Skills runtime.**

> **Migration note:** as of **March 31, 2026**, the published npm package is still `omni-skills@0.1.5`. Replace `awesome-omni-skills` with `omni-skills` in runnable examples until the renamed npm package is published. See [rollout and migration status](../operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).

For full operational workflows, see the [🔧 System Runbook](../operations/RUNBOOK.md).
For the full end-user command map, see the [🧭 CLI User Guide](./CLI-USER-GUIDE.md).

---

## 📊 Current Catalog Reality

<!-- generated:usage-catalog-reality:start -->
| Status | Details |
|:-------|:--------|
| ✅ **Available now** | 55 native catalog skills across design, architecture, debugging, docs, OSS, security, DevOps, AI-engineering, data, tools, and machine-learning workflows |
| ✨ **Curated surface** | 38 English-only Omni-maintained derivatives in `skills_omni/` |
| 📦 **Bundles** | `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer`, and `oss-maintainer` are fully backed today |
| 🧪 **Validation mix** | 45 native skills pass cleanly today, and 10 remain intentionally warning-grade in the permissive intake surface |
| 🔌 **MCP reach** | 7 install-capable clients, 16 config-capable clients, 33 first-class config targets, 20 config profiles |
| 🤖 **A2A durability** | Memory, JSON, or SQLite local durability, restart resume, optional process executor, and opt-in leased coordination for shared workers |
<!-- generated:usage-catalog-reality:end -->

---

## 🖥️ Invocation by Client

| Client | How to Invoke | Skills Path |
|:-------|:-------------|:------------|
| 🔵 **Claude Code** | `>> /skill-name help me...` | `~/.claude/skills/` |
| 🟡 **Gemini CLI** | `Use @skill-name to...` | `~/.gemini/skills/` |
| 🔴 **Codex CLI** | `Use @skill-name to...` | `~/.codex/skills/` |
| 🟢 **Kiro** | Skills auto-load on demand | `~/.kiro/skills/` |
| 🟣 **Antigravity** | `Use @skill-name to...` | `~/.gemini/antigravity/skills/` |
| 🔵 **Cursor** | `@skill-name` in chat | `~/.cursor/skills/` |
| ⚪ **OpenCode** | `opencode run @skill-name` | `.opencode/skills/` |
| ⬛ **Copilot** | Paste skill content manually | N/A |

Clients such as Continue, Junie, Windsurf, Zed, VS Code, GitHub Copilot CLI, Cline, and Kilo Code primarily use the `config-mcp` flow rather than a skills directory.

---

## 💬 Prompt Patterns

### 🎨 Basic Invocation

```text
Use @omni-figma to implement this Figma design.
```

### 🔎 Discovery Invocation

```text
Use @find-skills to figure out whether Awesome Omni Skills has a skill for this workflow.
```

### 🔧 Contextual Invocation

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

---

## 📦 Installation Modes

### 🔎 Search Before Installing

```bash
npx awesome-omni-skills                       # Guided install in TTY
npx awesome-omni-skills install --guided      # Forced guided install
npx awesome-omni-skills ui                    # Ink visual hub
npx awesome-omni-skills ui --text             # Text fallback UI
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx awesome-omni-skills find figma --tool cursor --install --yes
```

### 📥 Full Library Install

```bash
npx awesome-omni-skills --cursor
```

### 🎯 One Specific Skill

```bash
npx awesome-omni-skills install --guided --path ./my-skills --skill architecture
npx awesome-omni-skills --cursor --skill omni-figma
```

### 📦 Bundle-Based Install

```bash
npx awesome-omni-skills --cursor --bundle full-stack
npx awesome-omni-skills --cursor --bundle security
npx awesome-omni-skills --cursor --bundle devops
npx awesome-omni-skills --codex --bundle ai-engineer
npx awesome-omni-skills --codex --bundle oss-maintainer
```

### 🏷️ Taxonomy Management

```bash
npx awesome-omni-skills recategorize          # Preview category drift
npx awesome-omni-skills recategorize --write  # Apply canonical categories
```

> **📌 Notes:**
> - In an interactive terminal, `npx awesome-omni-skills` now opens a guided install flow
> - `npx awesome-omni-skills ui` opens the visual Ink shell with install, discovery, and service launch actions
> - the visual shell persists recent installs, recent service launches, favorites, and named presets in `~/.omni-skills/state/ui-state.json`
> - Outside a TTY, a full-library install to the Antigravity path is still the default when no selector is provided
> - `--skill` installs only the selected published skills
> - `--bundle` expands the bundle and installs the published members declared in the curated bundle
> - `find` supports 12+ filter flags: `quality`, `best_practices`, `skill_level`, `security`, `category`, `tool`, `risk`, and more
> - `config-mcp` is the right path for MCP-capable products that do not have a first-class skills directory

---

## 🔌 Runtime Commands

The CLI is a unified operations tool, not just an installer.

### 🖥️ Visual Shell

```bash
npx awesome-omni-skills ui
```

The visual shell supports:

- guided install with known client or custom path selection
- search-then-install without memorizing flags
- guided MCP client config preview and write flows
- MCP, API, and A2A guided startup
- recent installs and service relaunches
- saved install and service presets
- favorite skills and bundles

### 🩺 Diagnostics

```bash
npx awesome-omni-skills doctor                 # Show repo and local install diagnostics
```

### 🔌 MCP Server

```bash
npx awesome-omni-skills mcp stdio             # Pipe transport
npx awesome-omni-skills mcp stream            # Streamable HTTP
npx awesome-omni-skills mcp sse               # Server-Sent Events
npx awesome-omni-skills mcp stream --local    # Local sidecar mode with filesystem tools
npx awesome-omni-skills config-mcp --list-targets
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp --write
npx awesome-omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx awesome-omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write
npx awesome-omni-skills config-mcp --target zed-workspace --transport sse --url http://127.0.0.1:3335/sse --write
```

### 🌐 HTTP API

```bash
npx awesome-omni-skills api --port 3333       # Start catalog API
```

### 🔐 Hosted API with Security

```bash
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx awesome-omni-skills api --port 3333
```

### 🤖 A2A Task Runtime

```bash
npx awesome-omni-skills a2a --port 3335
```

```bash
# Optional: persist task state to a custom file
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.json \
npx awesome-omni-skills a2a --port 3335
```

```bash
# Optional: use SQLite persistence plus the external worker executor
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_EXECUTOR=process \
npx awesome-omni-skills a2a --port 3335
```

```bash
# Optional: shared leased execution across SQLite-backed workers
OMNI_SKILLS_A2A_STORE_TYPE=sqlite \
OMNI_SKILLS_A2A_STORE_PATH=/tmp/omni-skills-a2a.sqlite \
OMNI_SKILLS_A2A_QUEUE_ENABLED=1 \
OMNI_SKILLS_A2A_LEASE_MS=30000 \
npx awesome-omni-skills a2a --port 3335
```

```bash
# JSON-RPC task flow
curl -X POST http://127.0.0.1:3335/a2a \
  -H 'content-type: application/json' \
  -d '{
    "jsonrpc": "2.0",
    "id": "demo-1",
    "method": "message/send",
    "params": {
      "message": {
        "messageId": "msg-1",
        "role": "user",
        "parts": [{ "kind": "text", "text": "discover skills for architecture reviews" }],
        "metadata": { "operation": "discover-skills" }
      }
    }
  }'
```

### 🧪 Release Checks

```bash
npx awesome-omni-skills smoke                 # Full release preflight
npx awesome-omni-skills publish-check         # Alias for smoke
```

---

## 🎯 Tips

| # | Tip |
|:--|:----|
| 1️⃣ | Reference the skill by name in your prompt |
| 2️⃣ | Provide the exact artifact, code, or design context the agent needs |
| 3️⃣ | Prefer `--skill` for a minimal install footprint |
| 4️⃣ | Use `doctor` and `smoke` before debugging packaging or runtime issues |
| 5️⃣ | Use bundles as curated domain installs now that all seven starter bundles are fully backed |
| 6️⃣ | Use `find --install --yes` for discovery + installation in one flow |
| 7️⃣ | See the [runbook](../operations/RUNBOOK.md) for auth, rate limits, signing, and verification env vars |
