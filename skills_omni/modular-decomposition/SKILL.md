---
name: "modular-decomposition"
description: "Modular Decomposition workflow skill. Use this skill when the user needs Runs a sequenced monolith-to-modular pipeline that sizes and inventories components, finds shared domain duplication, addresses flattening and hierarchy issues, analyzes coupling, then groups components into candidate domain-aligned units, with optional embedded DDD strategic analysis for bounded contexts. Use when asking how to split a monolith, size components before extraction, find duplicated domain logic, clean up module hierarchy, measure coupling between modules, or group components into services. Do NOT use for phased extraction roadmaps or prioritization without the prior analysis steps (use decomposition-planning-roadmap after this pipeline), end-to-end legacy migration strategy writeups (use legacy-migration-planner), pure infrastructure capacity sizing, or when you only need DDD without the structural pipeline (install domain-analysis standalone) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "product"
tags:
  - "modular-decomposition"
  - "runs"
  - "sequenced"
  - "monolith-to-modular"
  - "pipeline"
  - "sizes"
  - "and"
  - "inventories"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-19"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "modular-decomposition"
family_name: "Modular Decomposition"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/modular-decomposition"
upstream_skill: "skills/modular-decomposition"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "133"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "9f1c34bd96b4fc03578ceb26f6303d8bf2c13b42"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "modular-decomposition"
---

# Modular Decomposition

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/modular-decomposition` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Modular Decomposition This skill runs the Patterns 1–5 analysis pipeline before service extraction. Each pattern is plain markdown under references/; load the file for that step and execute it against the user’s codebase.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How to Use, Prerequisites, Pattern 6 — planning and extraction, Bounded contexts and DDD strategic design.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Runs a sequenced monolith-to-modular pipeline that sizes and inventories components, finds shared domain duplication, addresses flattening and hierarchy issues, analyzes coupling, then groups components into candidate....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/domain-analysis-examples.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/domain-analysis-quick-reference.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Step - Pattern - Primary reference
2. 1 - Identify and size components - references/pattern-01-identify-and-size.md (optional: pattern-01-identify-and-size-quick-reference.md)
3. 2 - Common domain detection - references/pattern-02-common-domain.md (optional: pattern-02-common-domain-quick-reference.md)
4. 3 - Flattening / hierarchy - references/pattern-03-flattening.md (optional: pattern-03-flattening-quick-reference.md)
5. 4 - Coupling analysis - references/pattern-04-coupling.md
6. 5 - Domain identification and grouping - references/pattern-05-domain-grouping.md (optional: pattern-05-domain-grouping-quick-reference.md)
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Ordered workflow (Patterns 1–5)

| Step | Pattern                            | Primary reference                                                                                          |
| ---- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1    | Identify and size components       | `references/pattern-01-identify-and-size.md` (optional: `pattern-01-identify-and-size-quick-reference.md`) |
| 2    | Common domain detection            | `references/pattern-02-common-domain.md` (optional: `pattern-02-common-domain-quick-reference.md`)         |
| 3    | Flattening / hierarchy             | `references/pattern-03-flattening.md` (optional: `pattern-03-flattening-quick-reference.md`)               |
| 4    | Coupling analysis                  | `references/pattern-04-coupling.md`                                                                        |
| 5    | Domain identification and grouping | `references/pattern-05-domain-grouping.md` (optional: `pattern-05-domain-grouping-quick-reference.md`)     |

#### Imported: How to Use

### Quick start (what users can say)

- **Full pipeline:** “Run modular decomposition Patterns 1 through 5 on this repo,” “Analyze this monolith for splitting—inventory, coupling, and domain grouping.”
- **Single early step:** “Identify and size components here,” “Find duplicated domain logic across modules,” “Analyze coupling between our packages.”
- **With DDD lens:** “Group components into domains and check bounded contexts,” “Use DDD strategic design on this codebase before we group services.”

If the user only wants **extraction order, phases, or migration roadmap** after analysis exists, use **decomposition-planning-roadmap** instead. If they need a **full legacy migration plan** (strangler fig, research, multi-stack), use **legacy-migration-planner** as well or instead of this skill when that is the primary ask.

### How the agent should run it

1. **Scope:** Confirm the task is structural analysis (inventory → coupling → grouping), not roadmap authoring. If unclear, ask once whether they want the full ordered pipeline or a subset.
2. **Order:** Run patterns **1 → 2 → 3 → 4 → 5** in that order. Do not skip a step unless the user explicitly limits scope; if they do, state which patterns were skipped and how that limits later conclusions.
3. **Load references:** For each pattern, open the matching `references/pattern-NN-*.md` file and follow its instructions. Use the optional `*-quick-reference.md` for the same number when a short checklist is enough.
4. **Carry context forward:** Reuse outputs from earlier patterns in later ones (e.g. component inventory from Pattern 1 informs coupling in 4 and grouping in 5). Reference concrete paths, modules, or tables from previous steps.
5. **Domain language (Pattern 5):** If subdomains or bounded contexts need grounding beyond structure, read `references/domain-analysis.md` **before or alongside** Pattern 5. Optionally open `references/domain-analysis-quick-reference.md` or `references/domain-analysis-examples.md` for condensed rules or illustrations.
6. **Deliver:** Produce clear, actionable findings per pattern or one consolidated report—always tied to evidence from the repository (files, dependencies, metrics), not generic advice.

### Usage examples

**Example 1 — Full pipeline**

```
User: "We're going to split this monolith—run the full decomposition analysis (Patterns 1–5)."

Agent: Execute patterns 1→5 in order, loading each references/pattern-NN-*.md, preserving outputs between steps, then summarize cross-cutting recommendations.
```

**Example 2 — Coupling after inventory**

```
User: "We already have a rough module list—focus on coupling (Pattern 4) and then domain grouping (Pattern 5)."

Agent: If no prior inventory exists in the thread, either run Pattern 1 briefly or derive an explicit module list from the repo before 4 and 5. State any assumptions.
```

**Example 3 — DDD before grouping**

```
User: "Map bounded contexts and language, then group components into domains."

Agent: Read references/domain-analysis.md (and optional quick reference/examples) in parallel with or immediately before Pattern 5; align Pattern 5 groupings with linguistic boundaries where evidence supports it.
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @modular-decomposition to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @modular-decomposition against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @modular-decomposition for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @modular-decomposition using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/modular-decomposition`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@modular-design-principles` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@documentation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@context-engineering` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@find-skills` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/domain-analysis-examples.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [domain-analysis-examples.md](references/domain-analysis-examples.md)
- [domain-analysis-quick-reference.md](references/domain-analysis-quick-reference.md)
- [domain-analysis.md](references/domain-analysis.md)
- [pattern-01-identify-and-size-quick-reference.md](references/pattern-01-identify-and-size-quick-reference.md)
- [domain-analysis-examples.md](references/domain-analysis-examples.md)
- [domain-analysis-quick-reference.md](references/domain-analysis-quick-reference.md)

### Imported Reference Notes

#### Imported: Prerequisites

- Complete **Pattern N** before starting Pattern N+1 unless the user explicitly narrows scope. Later patterns depend on earlier results (for example, inventory and structure inform coupling and grouping).
- If business vocabulary, subdomains, or bounded contexts are uncertain, use `references/domain-analysis.md` **before or alongside Pattern 5** (see Bounded contexts below).

#### Imported: Pattern 6 — planning and extraction

**Pattern 6** (_create domain services / extraction_) is not duplicated here. After Pattern 5, switch to **decomposition-planning-roadmap** for phased extraction order, milestones, and migration-style planning. For full legacy migration strategy (strangler-fig, cross-stack rewrites, research-heavy plans), optionally use **legacy-migration-planner** in addition.

#### Imported: Bounded contexts and DDD strategic design

- **Patterns 1–4** focus on **structural** inventory, duplication, hierarchy, and **coupling** between parts of the codebase.
- **Pattern 5** produces **candidate** groupings aligned with **solution-space** boundaries (which components belong together as services).
- **Strategic DDD** (subdomains, bounded contexts, ubiquitous language) is covered in `references/domain-analysis.md`, with optional `domain-analysis-quick-reference.md` and `domain-analysis-examples.md`. Use it when you need to validate or refine boundaries against business language, not only folder structure.
