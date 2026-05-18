---
name: tokenwise
description: "TokenWise \u2014 Measurement-Driven Model Router workflow skill. Use this skill when the user needs Measurement-driven model router for Claude Code. Routes Haiku/Sonnet/Opus per task class, logs every routed task with real $ numbers, and A/B tests cheaper tiers before you trust the savings and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["model-routing", "token-optimization", "cost-reduction", "anthropic", "haiku", "sonnet", "opus", "claude-code"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "CodeShuX"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# TokenWise — Measurement-Driven Model Router

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/tokenwise` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# TokenWise — Measurement-Driven Model Router

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Routing taxonomy, Privacy, Limitations, Source.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Cutting Claude Code token spend without sacrificing output quality
- Validating whether Haiku/Sonnet is "good enough" for a specific task class before trusting auto-routing
- Auditing where Opus tokens are actually being burned
- Logging per-session cost data for finance or chargeback
- Use when the request clearly matches the imported source intent: Measurement-driven model router for Claude Code. Routes Haiku/Sonnet/Opus per task class, logs every routed task with real $ numbers, and A/B tests cheaper tiers before you trust the savings.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. In any Claude Code session: /plugin marketplace add CodeShuX/tokenwise /plugin install tokenwise@tokenwise Then run /tokenwise:install and follow the guided prompts.
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Install

In any Claude Code session:

```
/plugin marketplace add CodeShuX/tokenwise
/plugin install tokenwise@tokenwise
```

Then run `/tokenwise:install` and follow the guided prompts.

#### Imported: Overview

A Claude Code skill that auto-routes subtasks to the cheapest model that can handle them (Haiku for grunt work, Sonnet for scoped reasoning, Opus only for synthesis), then logs every routed task to a local NDJSON with real token + cost numbers. Includes an A/B test subcommand that runs the same task across multiple tiers and scores quality, so the routing decisions are verified against the user's real workload — not estimated.

Anthropic's own bug tracker (Issue #27665) reports 93.8% of Max-subscriber Claude Code tokens flow to Opus. Existing routers (claude-router, wshobson, VoltAgent) either pin models statically or route by vibes-based heuristics with no measurement. TokenWise fills the measurement gap.

#### Imported: Routing taxonomy

| Tier | Model | Task class |
|---|---|---|
| Mechanical | Haiku 4.5 | file reads, grep, format, rename, simple edits, doc lookups |
| Scoped reasoning | Sonnet 4.6 | single-file refactor, scoped research, test writing |
| Synthesis | Opus 4.7 | architecture decisions, multi-file refactor, security review |

Safety caps:
- Haiku never spawns further subagents
- Max spawn depth = 2
- Subagents that need a smarter model return to parent — they never escalate on their own
- Tasks under 100 chars with no file context run inline (subagent overhead > savings)
- Subagent context >30k tokens bumps a tier

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tokenwise to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tokenwise against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tokenwise for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tokenwise using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Subcommands

- `/tokenwise:install` — guided installer with diff preview, automatic backups, and `--dry-run` mode
- `/tokenwise:report` — per-session token + cost summary vs all-Opus baseline
- `/tokenwise:summary [--week|--month|--all]` — historical aggregate with trend
- `/tokenwise:ab "<task>"` — A/B test the same task at multiple tiers, generates a markdown comparison
- `/tokenwise:undo` — restore CLAUDE.md / settings.json from backup

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/tokenwise`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Privacy

Zero telemetry. All logs in `.tokenwise/log.ndjson` local to the project. Task descriptions truncated to 80 chars and stripped of file contents before logging. No analytics endpoint exists in the source.

#### Imported: Limitations

- Token counts approximate to ±2% vs Anthropic billing
- A/B test mode costs extra tokens (one task × N tiers) — intentional one-time validation
- Anthropic-only by design (use LiteLLM or OpenRouter for cross-vendor)
- Subagent `model:` param has known silent-fail bugs on some Claude Code builds — skill probes for this at install and refuses to configure if routing is broken

#### Imported: Source

- Repo: https://github.com/CodeShuX/tokenwise
- License: MIT
- Author: CodeShuX
