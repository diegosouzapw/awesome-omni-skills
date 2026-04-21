---
name: hierarchical-agent-memory
description: "Hierarchical Agent Memory (HAM) workflow skill. Use this skill when the user needs Scoped CLAUDE.md memory system that reduces context token spend. Creates directory-level context files, tracks savings via dashboard, and routes agents to the right sub-context and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["hierarchical-agent-memory", "scoped", "claude", "memory", "system", "reduces", "context", "token"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-21"
---

# Hierarchical Agent Memory (HAM)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hierarchical-agent-memory` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Hierarchical Agent Memory (HAM) Scoped memory system that gives AI coding agents a cheat sheet for each directory instead of re-reading your entire project every prompt. Root CLAUDE.md holds global context (~200 tokens), subdirectory CLAUDE.md files hold scoped context (~250 tokens each), and a .memory/ layer stores decisions, patterns, and an inbox for unconfirmed inferences.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Context Routing, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you want to reduce input token costs across Claude Code sessions
- Use when your project has 3+ directories and the agent keeps re-reading the same files
- Use when you want directory-scoped context instead of one monolithic CLAUDE.md
- Use when you want a dashboard to visualize token savings, session history, and context health
- Use when setting up a new project and want structured agent memory from day one
- Use when the request clearly matches the imported source intent: Scoped CLAUDE.md memory system that reduces context token spend. Creates directory-level context files, tracks savings via dashboard, and routes agents to the right sub-context.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: How It Works

### Step 1: Setup ("go ham")

Auto-detects your project platform and maturity, then generates the memory structure:

```
project/
├── CLAUDE.md              # Root context (~200 tokens)
├── .memory/
│   ├── decisions.md       # Architecture Decision Records
│   ├── patterns.md        # Reusable patterns
│   ├── inbox.md           # Inferred items awaiting confirmation
│   └── audit-log.md       # Audit history
└── src/
    ├── api/CLAUDE.md      # Scoped context for api/
    ├── components/CLAUDE.md
    └── lib/CLAUDE.md
```

### Step 2: Context Routing

The root CLAUDE.md includes a routing section that tells the agent exactly which sub-context to load:

```markdown

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hierarchical-agent-memory to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hierarchical-agent-memory against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hierarchical-agent-memory for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hierarchical-agent-memory using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commands

| Trigger | What it does |
|---|---|
| `go ham` | Set up HAM — auto-detect platform, generate CLAUDE.md files |
| `ham savings` | Show token and cost savings report |
| `ham dashboard` | Launch the interactive web dashboard |
| `ham audit` | Health check on memory files |
| `ham insights` | Generate actionable insights from session data |
| `ham route` | Add/update Context Routing section in root CLAUDE.md |
| `ham carbon` | Show energy and carbon efficiency data |

#### Imported: Examples

### Example 1: First-time setup

```
User: go ham

Agent: HAM setup complete. Created 8 files.
  - CLAUDE.md (root)
  - .memory/decisions.md
  - .memory/patterns.md
  - .memory/inbox.md
  - src/api/CLAUDE.md
  - src/components/CLAUDE.md
  - src/lib/CLAUDE.md
  - src/utils/CLAUDE.md

Baseline captured in .memory/baseline.json
Run "HAM savings" to see your token and cost savings.
```

### Example 2: Checking savings

```
User: ham savings

Agent:
  Before HAM: ~7,500 tokens/prompt
  After HAM:    ~450 tokens/prompt
  Savings:    7,050 tokens (94%)

  Monthly projection (1,500 prompts):
    Sonnet: ~$31.73 saved
    Opus:   ~$158.63 saved
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep root CLAUDE.md under 60 lines / 250 tokens
- Keep subdirectory CLAUDE.md files under 75 lines each
- Run ham audit every 2 weeks to catch stale or missing context files
- Use ham route after adding new directories to keep routing current
- Review .memory/inbox.md periodically — confirm or reject inferred items
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- Keep root CLAUDE.md under 60 lines / 250 tokens
- Keep subdirectory CLAUDE.md files under 75 lines each
- Run `ham audit` every 2 weeks to catch stale or missing context files
- Use `ham route` after adding new directories to keep routing current
- Review `.memory/inbox.md` periodically — confirm or reject inferred items

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hierarchical-agent-memory`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Context Routing

→ api: src/api/CLAUDE.md
→ components: src/components/CLAUDE.md
→ lib: src/lib/CLAUDE.md
```

The agent reads root, then immediately loads the relevant subdirectory context — no guessing.

### Step 3: Dashboard ("ham dashboard")

Launches a web dashboard at localhost:7777 that visualizes:
- Token savings (HAM-on vs HAM-off sessions)
- Daily token and cost trends
- Per-directory session breakdown
- Context file health (missing/stale/inherited CLAUDE.md coverage)
- Routing compliance (how often the agent follows the routing map)
- Carbon/energy estimates

#### Imported: Limitations

- Token estimates use ~4 chars = 1 token approximation, not a real tokenizer
- Baseline savings comparisons are estimates based on typical agent behavior
- Dashboard requires Node.js 18+ and reads session data from `~/.claude/projects/`
- Context routing detection relies on CLAUDE.md read order in session JSONL files
- Does not auto-update subdirectory CLAUDE.md content — you maintain those manually or via `ham audit`
- Carbon estimates use regional grid averages, not real-time energy data
