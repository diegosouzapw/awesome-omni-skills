---
name: "modular-design-principles"
description: "Modular Design Principles workflow skill. Use this skill when the user needs > and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "devops"
tags:
  - "modular-design-principles"
  - "devops"
  - "references"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-19"
date_updated: "2026-04-23"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "modular-design-principles"
family_name: "Modular Design Principles"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/modular-design-principles"
upstream_skill: "skills/modular-design-principles"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "86"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "29ff729f034dd9078242a895821e8b31be09d362"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "modular-design-principles"
---

# Modular Design Principles

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/modular-design-principles` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Modular Design Principles Use this skill when reasoning about structure and boundaries in any codebase. It intentionally avoids framework names, folder conventions, and tooling — map principles to your stack locally.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What to load, Layered mental model, Typical violations (stated abstractly), Sub-units inside a bounded context, Architecture compliance pass, Quick checklist (before proposing structure).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- # - Criterion - Question
- 1 - Language - Do the sub-areas use different vocabulary or conflicting definitions of the same word?
- 2 - Rate of change - Do parts change on different cadences or for unrelated reasons (most edits touch one side)?
- 3 - Scale / SLO - Do parts need different throughput, latency, or availability targets?
- 4 - Consistency - Do they need different transaction boundaries (cannot share one atomic write model cleanly)?
- 5 - Ownership - Would different teams or clear ownership lines reduce conflict and review churn?

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/principles.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/principles.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Scope and language — Name the context; list core nouns/verbs (ubiquitous language). Reject vague names that collide with other contexts.
2. Responsibilities — What decisions happen only here? What is explicitly out of scope?
3. State ownership — Which facts are authoritative in this context? Where are they stored conceptually (even if storage tech is undecided)?
4. Public contract — Operations and/or events other contexts may use. Version or evolve this contract intentionally.
5. Integrations — For each neighbor: sync call, async message, shared read model, or batch sync? Document consistency (immediate, eventual) and failure behavior.
6. Invariants and lifecycles — What must always be true inside this boundary? What starts/completes a lifecycle?
7. Isolation check — Can you test core behavior without spinning up unrelated contexts (fakes at ports)?

### Imported Workflow Notes

#### Imported: Creating a bounded context (workflow)

Use when introducing a **new** cohesive area of the system (greenfield module or extracted domain).

1. **Scope and language** — Name the context; list core nouns/verbs (**ubiquitous language**). Reject vague names that collide with other contexts.
2. **Responsibilities** — What decisions happen **only** here? What is explicitly *out* of scope?
3. **State ownership** — Which facts are **authoritative** in this context? Where are they stored conceptually (even if storage tech is undecided)?
4. **Public contract** — Operations and/or events other contexts may use. Version or evolve this contract intentionally.
5. **Integrations** — For each neighbor: sync call, async message, shared read model, or batch sync? Document **consistency** (immediate, eventual) and **failure** behavior.
6. **Invariants and lifecycles** — What must always be true inside this boundary? What starts/completes a lifecycle?
7. **Isolation check** — Can you test core behavior **without** spinning up unrelated contexts (fakes at ports)?
8. **Observability** — How will you trace a request or job through **this** context with clear identifiers?

**Cross-module interaction** (while designing): prefer the **minimal** contract; define **timeouts**, **retries**, **idempotency** for async; avoid “temporary” direct store access as a shortcut.

---

#### Imported: What to load

| Task | Where |
|------|--------|
| Principles table + violations + workflows (this file) | `SKILL.md` |
| Per-principle definition, agent rules, abstract examples | `references/principles.md` |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @modular-design-principles to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @modular-design-principles against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @modular-design-principles for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @modular-design-principles using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- # - Principle - Intent
- 1 - Well-defined boundaries - A small, stable public surface; everything else is internal. Consumers depend on contracts, not internals.
- 2 - Composability - Modules can be used alone or combined without special knowledge of each other’s internals.
- 3 - Independence - No hidden shared mutable state across boundaries; each module should be testable in isolation (with fakes or test doubles at the edges).
- 4 - Individual scale - Resources (compute, storage, rate limits, batch size) can be tuned per module where it matters, without rewriting others.
- 5 - Explicit communication - Cross-module interaction uses documented contracts (APIs, events, messages, shared types) — not incidental coupling.
- 6 - Replaceability - Dependencies on other modules are expressed through interfaces or protocols so implementations can change.

### Imported Operating Notes

#### Imported: The ten principles

| # | Principle | Intent |
|---|-----------|--------|
| 1 | **Well-defined boundaries** | A small, stable **public surface**; everything else is internal. Consumers depend on contracts, not internals. |
| 2 | **Composability** | Modules can be used alone or combined without special knowledge of each other’s internals. |
| 3 | **Independence** | No hidden shared mutable state across boundaries; each module should be testable in isolation (with fakes or test doubles at the edges). |
| 4 | **Individual scale** | Resources (compute, storage, rate limits, batch size) can be tuned **per module** where it matters, without rewriting others. |
| 5 | **Explicit communication** | Cross-module interaction uses **documented contracts** (APIs, events, messages, shared types) — not incidental coupling. |
| 6 | **Replaceability** | Dependencies on other modules are expressed through **interfaces or protocols** so implementations can change. |
| 7 | **Deployment independence** | Modules do not assume they share a process, host, or release cadence unless that is an explicit architectural decision. |
| 8 | **State isolation** | Each module **owns** its persistent state and naming; no silent sharing of the same logical data store or ambiguous global names across boundaries. |
| 9 | **Observability** | Each module can be diagnosed on its own: logs, metrics, traces, health — attributable to the unit that emitted them. |
| 10 | **Fail independence** | Failures are **contained** (timeouts, bulkheads, circuit breaking, idempotency) so one module’s outage does not blindly cascade. |

**Principle 8** is often the hardest: ambiguous ownership of data or names is a frequent source of “works until it doesn’t” integration bugs.

For **depth** (rules for agents + abstract examples per principle), load `references/principles.md`.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/modular-design-principles`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@modular-decomposition` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@docker-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@kubernetes` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@terraform` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/principles.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [principles.md](references/principles.md)
- [principles.md](references/principles.md)

### Imported Reference Notes

#### Imported: Layered mental model

- **Composition roots** (applications, hosts, runners): wire modules together; keep orchestration thin.
- **Modules / bounded contexts**: cohesive units of behavior and data ownership; each should be understandable and testable on its own.
- **Shared kernels** (use sparingly): only stable, truly cross-cutting concepts; resist turning them into a grab-bag of “everything everyone needs.”

How you physically lay this out (mono repo, multi repo, packages, libraries) is a **delivery choice**, not the definition of modularity. The principles below still apply.

---

#### Imported: Typical violations (stated abstractly)

1. **Colliding concepts** — the same name or schema for different things in different modules, or duplicate “global” definitions that diverge over time.
2. **Reach-through persistence** — one module reading or writing another module’s tables, buckets, or documents **without** going through an agreed contract.
3. **Centralized data ownership** — a single persistence layer that registers and exposes **all** stores for **all** modules, encouraging hidden coupling.
4. **Logic at the edge** — business rules in transport adapters (HTTP handlers, UI, CLI) instead of domain/application code.
5. **Edge talking to storage directly** — adapters depending on low-level persistence APIs instead of use cases or application services.
6. **Unscoped transactions** — writes that span boundaries without clear transaction ownership and failure semantics.
7. **Leaky exports** — repositories, internal services, or implementation types exposed as the module’s public API.
8. **Facades that aren’t thin** — “public” entry points that embed querying, mapping, or policy instead of delegating to the right layer inside the module.

---

#### Imported: Sub-units inside a bounded context

Sometimes one outer boundary is right, but inside it there are **named sub-areas** (subdomains, feature areas). Principles still apply **within** the context.

**Ownership**

- Each sub-unit should **own** its slice of model and persistence concerns where possible — avoid one mega registration layer that wires **every** store and repository for **every** sub-unit in one place (encourages reach-through and hidden coupling).

**Cross-sub-unit access**

- Prefer **internal application APIs** or **thin internal facades** (same context, explicit surface) over peers importing each other’s storage types directly.
- For async flows, prefer **enriched payloads** so handlers do not **chat** across sub-units for data that could travel with the event/command.

**Shared kernel inside the context**

- Small, stable shared types or enums can live in a **narrow shared area** — but resist a growing “utils” dump that becomes the real coupling point.

**Anti-pattern:** A single “persistence” or “data” sub-module that becomes the **only** place that knows about all tables/documents for all sub-units, and everyone else reaches through it — same problems as cross-context reach-through, **inside** the boundary.

---

#### Imported: Architecture compliance pass

Use for **reviews** or **audits** without assuming tooling. Treat items as **signals**, not proof — confirm with domain experts.

### Dependency and API signals

- **Inbound vs outbound:** Dependencies should align with your chosen architecture (e.g. domain at the center, adapters outside). **Inward** leaks of infrastructure types into core logic are a smell.
- **Public surface:** Can you list **exported** operations/events/types without including storage or internal services? If not, boundaries are leaky.
- **Neighbor imports:** Types or clients from **module A** used in **module B** — are they only **contract** types, or persistence/implementation types?

### Persistence and data signals

- **Reach-through:** References to another context’s **physical** data (schema, collection, bucket name) outside an agreed contract.
- **Naming collisions:** Same logical name for different things, or shared global IDs without a documented mapping rule.
- **Transaction ownership:** Writes that span contexts without a clear **saga**, **outbox**, or **single-owner** rule and documented failure cases.

### Operational signals

- **Blame:** Incidents where “we don’t know which module owns this row/behavior” → ownership or observability gap.
- **Cascades:** One dependency’s slowdown or failure takes down unrelated user journeys → missing **timeouts**, **bulkheads**, or **degradation** paths.

### Severity heuristic (for reporting)

| Tier | Meaning |
|------|--------|
| **P0** | Data corruption risk, security boundary violation, or cross-context persistence with no contract |
| **P1** | Unclear ownership, leaky public API, missing failure semantics at boundaries |
| **P2** | Observability gaps, composability smells, tech debt that increases future coupling |

**Maturity note:** Scoring is **qualitative** unless the team defines numeric gates. Use trends: fewer P0/P1 over time, clearer contracts.

---

#### Imported: Quick checklist (before proposing structure)

- [ ] Public API is minimal; internals are not exported casually.
- [ ] Names and storage ownership are unambiguous per module.
- [ ] No cross-module persistence shortcuts without an explicit contract.
- [ ] Business rules sit behind a clear application/domain layer, not only in adapters.
- [ ] Cross-module calls have explicit failure and timeout behavior.
- [ ] Observability can answer “which module failed and why?” without spelunking.
- [ ] If the context has sub-units: each has clear ownership; no monolithic “registers everything” persistence grab-bag.

---

#### Imported: Relationship to stack-specific skills

When a project has **concrete conventions** (framework modules, DI, repository patterns, folder layout, codegen, CI checks), prefer those documents for **how** to implement. Use **this** skill for **why** boundaries exist and **what** good modular design optimizes for — so stack-specific advice stays aligned with the same principles.
