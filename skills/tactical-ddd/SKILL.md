---
name: tactical-ddd
description: "Tactical DDD \u2014 Rich Domain Modeling workflow skill. Use this skill when the user needs Detects anemic domain models, validates and refactors them into rich domain models, and enforces tactical DDD patterns (Entities, Value Objects, Aggregates, Domain Services, Domain Events). Use when the user asks to validate, review, or check domain models or DDD code; detect anemia; refactor domain objects; improve encapsulation; or mentions terms like \"anemic model\", \"rich domain\", \"aggregate\", \"value object\", \"domain event\", \"ubiquitous language\", \"is this good DDD\", \"does this follow DDD\", or \"check my domain\". Do NOT use for module or service boundary design, architectural decomposition, strategic DDD context mapping, or code outside the domain layer (DTOs, controllers, infrastructure adapters) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["tactical-ddd", "detects", "anemic", "domain", "models", "validates", "and", "refactors"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-05-10"
date_updated: "2026-05-10"
---

# Tactical DDD — Rich Domain Modeling

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/tactical-ddd` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Tactical DDD — Rich Domain Modeling

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quick Anemia Signals (scan first), Output Format, Anemia Diagnosis: <ClassName>.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Detects anemic domain models, validates and refactors them into rich domain models, and enforces tactical DDD patterns (Entities, Value Objects, Aggregates, Domain Services, Domain Events). Use when the user asks to....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `detection.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `refactoring.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Intent - Phases to run
2. "validate / review / check / is this correct?" - Phase 1 + 2 only → report findings, ask before refactoring
3. "fix / refactor / improve / clean up" - Phase 1 + 2 + 3
4. "how should I design / model this?" - Load reference.md directly
5. Has unique identity tracked over time? - Has invariants tying multiple objects? - → Building Block
6. Yes - — - Entity
7. No - — - Value Object

### Imported Workflow Notes

#### Imported: Workflow

Determine the user's intent first:

| Intent | Phases to run |
|--------|--------------|
| "validate / review / check / is this correct?" | Phase 1 + 2 only → report findings, ask before refactoring |
| "fix / refactor / improve / clean up" | Phase 1 + 2 + 3 |
| "how should I design / model this?" | Load [reference.md](reference.md) directly |

### Phase 1 — Detect
Load [detection.md](detection.md) and scan the target code for anemia signals. Produce a severity score and list of affected classes.

### Phase 2 — Assess
For each affected class, determine the correct building block:

| Has unique identity tracked over time? | Has invariants tying multiple objects? | → Building Block |
|----------------------------------------|----------------------------------------|-----------------|
| Yes | — | **Entity** |
| No | — | **Value Object** |
| Yes (root) + children with shared invariants | Yes | **Aggregate** |
| Operation spans multiple Aggregates/doesn't belong to any | — | **Domain Service** |

Prefer Value Objects over Entities. Prefer small Aggregates over large ones.

**If intent was validate/review**: stop here. Report findings using the output format below. Ask "Would you like me to apply these fixes?" before proceeding.

### Phase 3 — Refactor
Load [refactoring.md](refactoring.md) for step-by-step moves. Apply in this order:
1. Replace setter chains with a single expressive method
2. Move service logic into the Aggregate that owns it
3. Add business guards at the top of each method
4. Publish a Domain Event after each successful state change
5. Replace primitive types with Value Objects

For deep pattern questions (boundary design, event modeling, service vs. entity decision), load [reference.md](reference.md).

---

#### Imported: Quick Anemia Signals (scan first)

```
public setX() / public setY()        → behaviour should be encapsulated
service.doX(entity, ...)              → logic likely belongs in entity
entity.setA(); entity.setB(); ...     → setter chain = missing intent method
no domain methods beyond getters      → pure data bag
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tactical-ddd to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tactical-ddd against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tactical-ddd for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tactical-ddd using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Behaviour with data — Objects own both state and the operations that change it
- Ubiquitous Language — Method names come from the domain, not CRUD (commitTo, not setStatus)
- Small Aggregates — Root + Value Objects by default; add child Entities only for true invariants
- One transaction = one Aggregate — Cross-Aggregate rules use eventual consistency via Domain Events
- Reference by ID — Never hold object references to other Aggregates
- Value Objects first — Use Entities only when individual identity is essential
- Domain Services sparingly — Excessive services → anemic model

### Imported Operating Notes

#### Imported: Golden Rules

1. **Behaviour with data** — Objects own both state and the operations that change it
2. **Ubiquitous Language** — Method names come from the domain, not CRUD (`commitTo`, not `setStatus`)
3. **Small Aggregates** — Root + Value Objects by default; add child Entities only for true invariants
4. **One transaction = one Aggregate** — Cross-Aggregate rules use eventual consistency via Domain Events
5. **Reference by ID** — Never hold object references to other Aggregates
6. **Value Objects first** — Use Entities only when individual identity is essential
7. **Domain Services sparingly** — Excessive services → anemic model
8. **Protect invariants** — The Aggregate is the last line of defence; never trust the caller

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/tactical-ddd`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@debugging` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@documentation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@architecture` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@context-engineering` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [detection.md](detection.md)
- [refactoring.md](refactoring.md)
- [reference.md](reference.md)

### Imported Reference Notes

#### Imported: Output Format

When reviewing code, report:

```

#### Imported: Anemia Diagnosis: <ClassName>

Severity: [None | Mild | Moderate | Severe]

Issues:
- <description of problem>

Recommended refactoring:
- <specific move from refactoring.md>
```

When refactoring, show a before/after diff for each class touched.
