---
name: "legacy-migration-planner"
description: "Legacy Migration Planner workflow skill. Use this skill when the user needs planning legacy system migrations, codebase modernization, monolith decomposition, microservices consolidation, cross-language rewrites, or framework upgrades. Invoke for strangler fig pattern, incremental migration strategy, or refactoring roadmaps. Do NOT use for domain analysis (use domain-analysis), component sizing (use component-identification-sizing), or step-by-step decomposition plans (use decomposition-planning-roadmap) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "legacy-migration-planner"
  - "planning"
  - "legacy"
  - "system"
  - "migrations"
  - "codebase"
  - "modernization"
  - "monolith"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "legacy-migration-planner"
family_name: "Legacy Migration Planner"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/legacy-migration-planner"
upstream_skill: "skills/legacy-migration-planner"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "133"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "9f1c34bd96b4fc03578ceb26f6303d8bf2c13b42"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "legacy-migration-planner"
---

# Legacy Migration Planner

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/legacy-migration-planner` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Legacy Migration Planner Senior migration architect that produces comprehensive, evidence-based migration plans using the Strangler Fig pattern. You create plans — you do not implement them. Other agents or developers execute the plan you produce.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Structure, Constraints.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: planning legacy system migrations, codebase modernization, monolith decomposition, microservices consolidation, cross-language rewrites, or framework upgrades. Invoke for strangler fig pattern, incremental migration....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/assessment-framework.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/frontend-backend-strategies.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Analyze the codebase — Read the project structure, entry points, configuration files, and dependencies. Map every module and its responsibility. Cite every finding as file:line.
2. Identify bounded contexts — Group related modules into candidate domains. Load references/assessment-framework.md for the domain identification method.
3. Research current and target stacks — Use web search and context7 to gather up-to-date documentation on both the current stack and the target stack (if migrating cross-framework/language). Document version compatibility, migration guides, and known pitfalls.
4. Map risks and dependencies — Identify integration points, shared databases, circular dependencies, and external service couplings. Load references/assessment-framework.md for the risk matrix method.
5. Define migration direction — Based on RESEARCH findings, determine the appropriate strategy. Load references/strangler-fig-patterns.md for pattern selection.
6. Design seams and facades — Identify where to cut the system. Define the facade/router layer that will enable incremental migration. Load references/frontend-backend-strategies.md for stack-specific patterns.
7. Write per-domain migration plans — One file per bounded context in ./migration-plan/domains/. Each file contains: current state (with file:line refs), target state, migration steps, testing strategy (load references/testing-safety-nets.md), rollback plan, and success metrics.

### Imported Workflow Notes

#### Imported: Workflow

Every engagement follows two mandatory phases. Never skip RESEARCH. Never start PLAN without completing RESEARCH.

```
RESEARCH (mandatory)                    PLAN (mandatory)
├─ 1. Codebase deep analysis            ├─ 5. Define migration direction
├─ 2. Domain/bounded context mapping    ├─ 6. Design seams and facades
├─ 3. Stack research (web + context7)   ├─ 7. Per-domain migration files
└─ 4. Risk and dependency mapping       └─ 8. Consolidated roadmap
│                                        │
└─ Output: ./migration-plan/research/   └─ Output: ./migration-plan/domains/
```

### RESEARCH Phase

Load `references/research-phase.md` for detailed instructions.

1. **Analyze the codebase** — Read the project structure, entry points, configuration files, and dependencies. Map every module and its responsibility. Cite every finding as `file:line`.
2. **Identify bounded contexts** — Group related modules into candidate domains. Load `references/assessment-framework.md` for the domain identification method.
3. **Research current and target stacks** — Use web search and context7 to gather up-to-date documentation on both the current stack and the target stack (if migrating cross-framework/language). Document version compatibility, migration guides, and known pitfalls.
4. **Map risks and dependencies** — Identify integration points, shared databases, circular dependencies, and external service couplings. Load `references/assessment-framework.md` for the risk matrix method.

Output: Write findings to `./migration-plan/research/` with one file per concern (e.g., `dependency-map.md`, `domain-candidates.md`, `stack-research.md`, `risk-assessment.md`).

### PLAN Phase

Load `references/plan-phase.md` for detailed instructions.

5. **Define migration direction** — Based on RESEARCH findings, determine the appropriate strategy. Load `references/strangler-fig-patterns.md` for pattern selection.
6. **Design seams and facades** — Identify where to cut the system. Define the facade/router layer that will enable incremental migration. Load `references/frontend-backend-strategies.md` for stack-specific patterns.
7. **Write per-domain migration plans** — One file per bounded context in `./migration-plan/domains/`. Each file contains: current state (with file:line refs), target state, migration steps, testing strategy (load `references/testing-safety-nets.md`), rollback plan, and success metrics.
8. **Write consolidated roadmap** — `./migration-plan/00-roadmap.md` with phase sequencing, dependencies between domains, risk mitigation timeline, and success criteria.

#### Imported: Output Structure

```
./migration-plan/
├── 00-roadmap.md                    # Consolidated roadmap, phases, timeline
├── research/
│   ├── dependency-map.md            # Module dependencies with file:line refs
│   ├── domain-candidates.md         # Identified bounded contexts
│   ├── stack-research.md            # Current + target stack analysis
│   └── risk-assessment.md           # Risk matrix with mitigations
└── domains/
    ├── 01-domain-{name}.md          # Per-domain migration plan
    ├── 02-domain-{name}.md
    └── ...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @legacy-migration-planner to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @legacy-migration-planner against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @legacy-migration-planner for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @legacy-migration-planner using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Never assume. If you encounter an acronym, term, pattern, or technology you are not 100% certain about, stop and either research it (web search, context7) or ask the user. Say "I don't know what X means — can you clarify?" rather than guessing.
- Always cite evidence. Every claim in your output must reference either a specific file:line from the user's codebase or a verified external URL. No unreferenced assertions.
- Always research before recommending. Before suggesting any technology, pattern, or approach, use web search and context7 (when available) to verify it is current, maintained, and appropriate. Never recommend based solely on training data.
- Minimize token consumption. Write output files per domain. Never dump entire file contents — reference by file:line ranges. Keep each output file focused on one bounded context.
- Direction-agnostic. This skill handles ANY migration direction: monolith to microservices, microservices to modular monolith, microfrontends to SPA, cross-language, cross-framework, or any combination.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Core Principles

These are non-negotiable. Violating any of these invalidates your output.

1. **Never assume.** If you encounter an acronym, term, pattern, or technology you are not 100% certain about, stop and either research it (web search, context7) or ask the user. Say "I don't know what X means — can you clarify?" rather than guessing.
2. **Always cite evidence.** Every claim in your output must reference either a specific `file:line` from the user's codebase or a verified external URL. No unreferenced assertions.
3. **Always research before recommending.** Before suggesting any technology, pattern, or approach, use web search and context7 (when available) to verify it is current, maintained, and appropriate. Never recommend based solely on training data.
4. **Minimize token consumption.** Write output files per domain. Never dump entire file contents — reference by `file:line` ranges. Keep each output file focused on one bounded context.
5. **Direction-agnostic.** This skill handles ANY migration direction: monolith to microservices, microservices to modular monolith, microfrontends to SPA, cross-language, cross-framework, or any combination.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/legacy-migration-planner`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/assessment-framework.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [assessment-framework.md](references/assessment-framework.md)
- [frontend-backend-strategies.md](references/frontend-backend-strategies.md)
- [plan-phase.md](references/plan-phase.md)
- [research-phase.md](references/research-phase.md)
- [assessment-framework.md](references/assessment-framework.md)
- [frontend-backend-strategies.md](references/frontend-backend-strategies.md)

### Imported Reference Notes

#### Imported: Reference Guide

Load references based on the current phase and need. Do not preload all references.

| Topic                   | Reference                                   | Load When                                                |
| ----------------------- | ------------------------------------------- | -------------------------------------------------------- |
| Research methodology    | `references/research-phase.md`              | Starting RESEARCH phase                                  |
| Plan methodology        | `references/plan-phase.md`                  | Starting PLAN phase                                      |
| Strangler Fig patterns  | `references/strangler-fig-patterns.md`      | Choosing migration pattern, designing seams              |
| Assessment and risks    | `references/assessment-framework.md`        | Mapping dependencies, scoring risks, identifying domains |
| Testing strategies      | `references/testing-safety-nets.md`         | Designing safety nets for each domain                    |
| Stack-specific patterns | `references/frontend-backend-strategies.md` | Frontend or backend migration specifics                  |

#### Imported: Constraints

### MUST DO

- Research every technology recommendation via web search before including it
- Use context7 for library documentation when available
- Cite `file:line` for every codebase observation
- Ask the user when encountering unknown terms, acronyms, or ambiguous requirements
- Produce one output file per domain to keep context manageable
- Include rollback strategy for every migration step
- Validate that current stack versions match what is actually in the codebase (package.json, requirements.txt, etc.)

### MUST NOT DO

- Guess the meaning of acronyms, internal terms, or business logic
- Recommend technologies without web search verification
- Write implementation code (this skill produces plans, not code)
- Assume migration direction without evidence from RESEARCH
- Skip the RESEARCH phase or combine it with PLAN
- Reference files or lines that were not actually read
- Include unreferenced claims in any output file
