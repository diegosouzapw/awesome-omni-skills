---
name: idea-os
description: "idea-os workflow skill. Use this skill when the user needs Five-phase pipeline (triage \u2192 clarify \u2192 research \u2192 PRD \u2192 plan) that turns a raw idea into four linked files: clarifying questions, deep research, a PRD with non-goals and metrics, and a phased execution plan with mermaid user journey and kill criteria and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["product-management", "prd", "market-research", "mvp", "idea-validation", "jtbd", "swot", "competitor-analysis"]
complexity: intermediate
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "Slashworks-biz"
date_added: "2026-04-19"
date_updated: "2026-04-21"
---

# idea-os

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/idea-os` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# idea-os An operating system for turning a raw idea into a build-ready plan. Takes a rough problem statement and produces four files: clarifying questions, deep research, a PRD, and a phased execution plan with platform/stack picks, a user-journey diagram, and kill criteria.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Full source.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a user shares a raw product idea or problem statement and wants a structured pipeline from clarifying questions through deep research, PRD, and a phased execution plan.
- Use when the user says "I have an idea for…", "help me build X", "validate and plan this concept", or "what should I build?" — and wants files they can take forward, not a one-shot answer.
- Use when a non-technical founder, PM, or hobbyist needs structure to bridge the gap between "idea" and "Monday morning's build queue".
- Do not use for quick sanity-check feedback on a half-formed idea (use idea-refine instead) or for editing an existing PRD (use product-management instead).
- Use when the request clearly matches the imported source intent: Five-phase pipeline (triage → clarify → research → PRD → plan) that turns a raw idea into four linked files: clarifying questions, deep research, a PRD with non-goals and metrics, and a phased execution plan with....
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

idea-os is a 5-phase sequential pipeline where each phase's output feeds the next — research shapes the PRD, PRD shapes the plan, plan's kill criteria tie back to research insights. Unlike single-command PRD generators, idea-os refuses to write a PRD until research is done, and refuses to write a plan until the PRD is stable. Depth and vocabulary adapt to a two-axis classification (complexity × builder sophistication) so a first-time builder isn't drowning in jargon and a founder gets full rigor.

Source: https://github.com/Slashworks-biz/idea-os — full skill, 11 reference files, 4 asset templates, and a 590-line worked example.

#### Imported: How It Works

### Phase 1 — Triage

Classify the idea on two axes before anything else. Depth of research/PRD/plan and question count scale with complexity; vocabulary scales with sophistication.

- **Idea tier (T1/T2/T3)** — T1 = weekend utility, T2 = SaaS MVP or AI wrapper, T3 = marketplace / B2B SaaS / regulated.
- **Sophistication (S1/S2/S3)** — S1 = non-technical, no framework names; S2 = hobbyist, introduce frameworks with definitions; S3 = founder/senior PM, full vocabulary.

State the classification in one line (e.g. "T2 · S2 — moderate SaaS, builder has shipped before") before proceeding.

### Phase 2 — Clarify

Write `questions.md` with 4–18 questions (count scales with complexity), grouped: Who and Pain · Scope and Wedge · Constraints and Goals. Every question must be actionable — the answer has to change what you build. Generic questions are rejected.

After writing, stop and wait for answers. Do not proceed to research until answered or autonomous-mode assumptions are declared.

### Phase 3 — Research

Write `research.md` using WebSearch + WebFetch. Minimum: 5 WebSearches, 2 WebFetches on named competitors, 1 source per TAM number, date on every source. Anything unsourced gets flagged `[assumption]`.

Required sections: problem validation, JTBD, market (TAM/SAM/SOM top-down + bottom-up), competitors (direct/indirect/substitutes + positioning map), SWOT, distribution (first-100-users channel fit), risks, and 3–7 non-obvious insights.

### Phase 4 — PRD

Write `PRD.md` with: falsifiable problem statement, named personas, ranked JTBD, non-goals (mandatory — it's where bad PRDs die), leading and lagging metrics.

### Phase 5 — Plan

Write `plan.md` with: user journey (text + mermaid), platform recommendation tied to research findings, stack in conservative/modern/cutting-edge matrix, phased build (MVP → v1 → target) with kill criteria per phase and first-100-users distribution per phase, metrics per phase, and 3–5 immediate next actions.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @idea-os to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @idea-os against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @idea-os for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @idea-os using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Non-technical founder with a consumer-app idea

User: "I want to build a habit tracker for people with ADHD."

idea-os classifies T2 · S1, writes 8 plain-language clarifying questions, runs research with sourced competitor pricing and community signal from ADHD subreddits, produces a PRD with ADHD-specific non-goals (no streaks, no punishment mechanics), and a plan with a single-screen MVP and a kill criterion tied to 14-day retention.

### Example 2: Founder with a B2B SaaS idea

User: "I'm thinking about procurement software for mid-market manufacturers."

idea-os classifies T3 · S3, writes 18 questions including procurement-cycle specifics, runs research with Wardley-map option and Porter 5 forces, produces a PRD with tiered personas (buyer/approver/IT), and a plan with a phase-1 kill criterion tied to paid-pilot close rate.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/idea-os`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Requires user input between phases for best results; if answers are missing, outputs depend on explicit assumptions.
- Produces planning artifacts (`questions.md`, `research.md`, `PRD.md`, `plan.md`) but does not execute build or deployment work.
- Source quality determines output quality; weak or outdated references can reduce recommendation accuracy.
- Better suited to new-idea validation and early planning than late-stage optimization of an existing shipped product.

#### Imported: Full source

Full 11-reference skill, 4 asset templates, worked example, and MIT license at https://github.com/Slashworks-biz/idea-os. This antigravity entry is a reference copy — the upstream repo is where ongoing development lives.
