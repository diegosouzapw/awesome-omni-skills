# Client Support Matrix

This document tracks the practical client surface for Omni Skills across three inputs:

1. the `9router` dashboard inventory in `/home/diegosouzapw/dev/proxys/9router`
2. the current Omni Skills MCP sidecar implementation
3. current official documentation for each client or IDE

It is the working source of truth for deciding which clients get first-class `config-mcp` support, which ones stay manual-only, and which ones are only candidates.

---

## Scope

This matrix is about **client configuration for MCP**.

It is not the same as:

- skill installation support
- API compatibility
- A2A support
- ACP or other non-MCP protocols

Some products in the matrix consume MCP but do **not** have a meaningful “skills directory”, so they only receive config-target support.

---

## 9router Inventory

The `9router` dashboard currently groups these CLI tools or IDE clients:

- Claude Code
- OpenAI Codex
- Factory Droid
- OpenClaw
- Cursor
- Cline
- Kilo Code
- Continue
- Antigravity
- GitHub Copilot
- OpenCode
- Kiro AI

Local sources:

- [`9router/app/docs/CLI-TOOLS.md`](/home/diegosouzapw/dev/proxys/9router/app/docs/CLI-TOOLS.md)
- [`9router/src/shared/constants/cliTools.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliTools.ts)
- [`9router/src/shared/constants/cliCompatProviders.ts`](/home/diegosouzapw/dev/proxys/9router/src/shared/constants/cliCompatProviders.ts)

---

## First-Class Support

These clients now have a stable, explicit story in Omni Skills via `config-mcp --target ...`.

| Client | Status | Config Targets | Notes |
|:-------|:-------|:---------------|:------|
| Claude Code | ✅ First-class | `workspace`, `claude-project`, `claude-user-settings`, `claude-user`, `claude-desktop` | Typed `mcpServers` config with Claude-specific allow/deny controls |
| Cursor | ✅ First-class | `cursor-workspace`, `cursor-user` | JSON `mcpServers` targets |
| VS Code | ✅ First-class | `vscode`, `vscode-user`, `vscode-insiders-user`, `devcontainer` | Uses `servers` root |
| Gemini CLI | ✅ First-class | `gemini-user`, `gemini-workspace` | JSON settings + global MCP allow/exclude controls |
| Antigravity | ✅ First-class | `antigravity-user` | JSON `mcpServers` target |
| Kiro | ✅ First-class | `kiro-user`, `kiro-workspace`, `kiro-user-legacy` | Kiro-specific disabled/auto-approve fields |
| Codex CLI | ✅ First-class | `codex-user` | TOML `mcp_servers` tables |
| Continue | ✅ First-class | `continue-workspace` | Dedicated YAML server document |
| Windsurf | ✅ First-class | `windsurf-user` | JSON `mcpServers` target with `serverUrl` entries |
| OpenCode | ✅ First-class | `opencode-workspace`, `opencode-user` | Official `opencode.json` / user config using top-level `mcp` |
| Cline | ✅ First-class | `cline-user` | `cline_mcp_settings.json` with `mcpServers` |
| GitHub Copilot CLI | ✅ First-class | `copilot-user`, `copilot-repo` | `mcp-config.json` or repo-scoped `.github/mcp.json` |
| Kilo Code | ✅ First-class | `kilo-user`, `kilo-project`, `kilo-workspace` | Kilo CLI uses `kilo.json`; workspace integration uses `.kilocode/mcp.json` |
| Zed | ✅ First-class | `zed-workspace` | `.zed/settings.json` with `context_servers` |

---

## Current Gaps

These clients from `9router` are **not** yet first-class writer targets in Omni Skills:

| Client | Current State | Why |
|:-------|:--------------|:----|
| Factory Droid | ⚠️ Manual/custom only | No stable public MCP config shape found in primary docs during this pass |
| OpenClaw | ⚠️ Manual/custom only | Same issue as Factory Droid |

The sidecar can still be used with `--file` or custom paths for advanced users, but Omni Skills should not invent first-class writers without stable public config docs.

---

## Additional IDEs Worth Supporting

These are outside the original `9router` list, but they are realistic expansion targets because they have official MCP-facing documentation.

| Client / IDE | Recommendation | Reason |
|:-------------|:---------------|:-------|
| JetBrains AI Assistant | 🟡 Manual/snippet next | Official MCP client support exists, but the primary workflow is UI-driven, not a stable public file path |
| Roo Code | 🟡 Investigate next | Public docs confirm MCP support, but a stable cross-platform config path needs stronger confirmation before we add a writer |
| VS Code Copilot Chat | 🟢 Already covered indirectly | Omni Skills already covers the underlying MCP file locations used by VS Code |
| Zed ACP / Agent Servers | 🟡 Separate track | This is adjacent, but it is ACP/agent-server territory, not just MCP config writing |

---

## Official Sources Used

The decisions above were checked against current primary sources:

- [Anthropic Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [OpenAI Codex CLI MCP](https://platform.openai.com/docs/codex/cli)
- [Cursor MCP](https://docs.cursor.com/tools)
- [Continue MCP](https://docs.continue.dev/customize/tools)
- [Kiro MCP](https://kiro.dev/docs/mcp)
- [OpenCode MCP](https://opencode.ai/docs/mcp-servers/)
- [Cline MCP](https://docs.cline.bot/mcp)
- [Kilo Code MCP](https://kilo.ai/docs/automate/mcp/using-in-kilo-code)
- [GitHub Copilot CLI MCP](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/cli-command-reference)
- [Zed MCP](https://zed.dev/docs/ai/mcp)
- [JetBrains AI Assistant MCP](https://www.jetbrains.com/help/ai-assistant/configure-an-mcp-server.html)
- [Roo Code MCP](https://docs.roocode.com/features/mcp)

---

## Implementation Notes

The current Omni Skills sidecar intentionally distinguishes three support levels:

- **install-capable clients**
  - have a known skills directory and can use `install_skills`
- **config-capable clients**
  - have a stable config target and can use `configure_client_mcp`
- **manual/snippet clients**
  - documented, but without a safe first-class file writer yet

That separation keeps the product honest.

Not every MCP-capable product should be treated as a skill-install target.

---

## Next Expansion Candidates

If we keep expanding, the highest-signal follow-ups are:

1. JetBrains AI Assistant manual/snippet mode
2. Roo Code first-class target once the config path is validated well enough
3. optional ACP support research for Zed agent servers
4. revisit Factory Droid and OpenClaw only if stable public MCP docs appear
