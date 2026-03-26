# Usage Guide

This guide describes both how to invoke installed skills and how to operate the Omni Skills runtime.

For full operational workflows, see the [System Runbook](../operations/runbook.md).

## Current Catalog Reality

The current published catalog is intentionally small.

- available now: `omni-figma`, `find-skills`
- bundle metadata exists, but most referenced members are still not published
- prompts and examples below therefore focus on the skills that actually ship today

## Invocation by Tool

| Tool | How to invoke a skill | Skills path |
| :--- | :-------------------- | :---------- |
| Claude Code | `>> /skill-name help me...` | `~/.claude/skills/` |
| Gemini CLI | `Use @skill-name to...` | `~/.gemini/skills/` |
| Codex CLI | `Use @skill-name to...` | `~/.codex/skills/` |
| Kiro | Skills auto-load on demand | `~/.kiro/skills/` or `.kiro/skills/` |
| Antigravity | `Use @skill-name to...` | `~/.gemini/antigravity/skills/` |
| Cursor | `@skill-name` in chat | `~/.cursor/skills/` |
| OpenCode | `opencode run @skill-name` | `.agents/skills/` |
| Copilot | Paste skill content manually | N/A |

## Prompt Patterns

Basic invocation:

```text
Use @omni-figma to implement this Figma design.
```

Discovery invocation:

```text
Use @find-skills to figure out whether Omni Skills already has a skill or bundle for this workflow.
```

With concrete context:

```text
Use @omni-figma to convert this Figma frame into React components.
Keep the existing design system and map the node to code when possible.
```

## Installation Modes

```bash
# Search before installing
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes

# Full library for a target
npx omni-skills --cursor

# One published skill
npx omni-skills --cursor --skill omni-figma

# One bundle selector
npx omni-skills --cursor --bundle full-stack

# Taxonomy maintenance for contributors
npx omni-skills recategorize
npx omni-skills recategorize --write
```

Notes:

- full install is still the default when no selector is provided
- `--skill` installs only the selected published skills
- `--bundle` expands the bundle and installs only the currently available members
- missing bundle members are surfaced as warnings in install plans
- `find` can filter and sort by `quality`, `best_practices`, `skill_level`, and `security`
- generated manifests now expose archive downloads, checksum manifests, and security metadata

## Runtime Commands

The CLI is no longer just an installer.

```bash
# Local diagnostics
npx omni-skills doctor

# MCP transports
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse

# Local MCP sidecar mode
npx omni-skills mcp stream --local

# HTTP API
npx omni-skills api --port 3333

# Hosted API with bearer auth and rate limiting
OMNI_SKILLS_HTTP_BEARER_TOKEN=replace-me \
OMNI_SKILLS_RATE_LIMIT_MAX=60 \
OMNI_SKILLS_RATE_LIMIT_WINDOW_MS=60000 \
npx omni-skills api --port 3333

# A2A scaffold
npx omni-skills a2a --port 3335

# Release smoke checks
npx omni-skills smoke
```

## Tips

1. Reference the skill by name.
2. Provide the exact artifact, code, or design context the agent needs.
3. Prefer `--skill` when you want a minimal install footprint.
4. Use `doctor` and `smoke` before debugging packaging or runtime issues.
5. Treat bundles as curated selectors, not as proof that every listed skill is already published.
6. Use `find --install --yes` when you want discovery and installation in one flow.
7. Use the runbook when you need the hosted env vars for auth, rate limits, signing, or archive verification.
