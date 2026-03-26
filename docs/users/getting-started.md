# Getting Started

This guide reflects the current repository state, not the aspirational future catalog.

Right now:

- the runtime is in place
- the public catalog currently exposes 2 published skills: `omni-figma` and `find-skills`
- bundle metadata exists, but many bundle members are still not published as installable skills

## Step 1: Install

Default install:

```bash
npx omni-skills
```

Focused install of the published skill:

```bash
npx omni-skills --cursor --skill omni-figma
```

Catalog discovery:

```bash
npx omni-skills find figma
```

Bundle-based install preview:

```bash
npx omni-skills --codex --bundle full-stack
```

The `full-stack` bundle currently resolves to `omni-figma` and warns about the missing members it references.

## Step 2: Verify

```bash
# Antigravity (default target)
test -d ~/.gemini/antigravity/skills && echo "Skills installed"

# Cursor
test -d ~/.cursor/skills && echo "Skills installed"

# OpenCode workspace install
test -d .agents/skills && echo "Skills installed"
```

## Step 3: Use the Published Skill

Prompt example:

```text
Use @omni-figma to implement this Figma design.
```

## Step 4: Optional Runtime Services

Start the local MCP sidecar:

```bash
npx omni-skills mcp stream --local
```

Start the catalog API:

```bash
npx omni-skills api --port 3333
```

Start the A2A scaffold:

```bash
npx omni-skills a2a --port 3335
```

## What a Skill Is

A skill is a structured markdown playbook in `SKILL.md` that gives an agent:

- task-specific context
- execution steps
- guardrails
- examples and supporting references

## Next Steps

- [Usage Guide](usage.md)
- [Bundles](bundles.md)
- [Catalog](../CATALOG.md)
- [Documentation Hub](../README.md)
