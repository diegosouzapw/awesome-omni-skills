---
name: uncle-bob-craft-v2
description: "Uncle Bob Craft workflow skill. Use this skill when the user needs performing code review, writing or refactoring code, or discussing architecture; complements clean-code and does not replace project linter/formatter and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["clean-code", "clean-architecture", "solid", "code-review", "craftsmanship", "uncle-bob", "uncle-bob-craft-v2", "uncle-bob-craft"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "antigravity-contributors"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Uncle Bob Craft

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/uncle-bob-craft` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Uncle Bob Craft Apply Robert C. Martin (Uncle Bob) criteria for code review and production: Clean Code, Clean Architecture, The Clean Coder, Clean Agile, and design-pattern discipline. This skill is complementary to the existing @clean-code skill (which focuses on the Clean Code book) and to your project's linter/formatter—it does not replace them.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Aggregators by Source, Design Patterns: Use vs Misuse, Smells and Heuristics (Summary), Review vs Production, How It Works, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Code review: Apply Dependency Rule, boundaries, SOLID, and smell heuristics; suggest concrete refactors.
- Refactoring: Decide what to extract, where to draw boundaries, and whether a design pattern is justified.
- Architecture discussion: Check layer boundaries, dependency direction, and separation of concerns.
- Design patterns: Assess correct use vs cargo-cult or overuse before introducing a pattern.
- Estimation and professionalism: Apply Clean Coder ideas (saying no, sustainable pace, three-point estimates).
- Agile practices: Reference Clean Agile (Iron Cross, TDD, refactoring, pair programming) when discussing process.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

This skill aggregates principles from Uncle Bob's body of work for **reviewing** and **writing** code: naming and functions (via `@clean-code`), architecture and boundaries (Clean Architecture), professionalism and estimation (The Clean Coder), agile values and practices (Clean Agile), and design-pattern use vs misuse. Use it to evaluate structure, dependencies, SOLID in context, code smells, and professional practices. It provides craft and design criteria only—not syntax or style enforcement, which remain the responsibility of your linter and formatter.

#### Imported: Aggregators by Source

| Source | Focus | Where to go |
|--------|--------|-------------|
| **Clean Code** | Names, functions, comments, formatting, tests, classes, smells | Use `@clean-code` for detail; this skill references it for review/production. |
| **Clean Architecture** | Dependency Rule, layers, boundaries, SOLID in architecture | See [reference.md](./reference.md) and [references/clean-architecture.md](./references/clean-architecture.md). |
| **The Clean Coder** | Professionalism, estimation, saying no, sustainable pace | See [reference.md](./reference.md) and [references/clean-coder.md](./references/clean-coder.md). |
| **Clean Agile** | Values, Iron Cross, TDD, refactoring, pair programming | See [reference.md](./reference.md) and [references/clean-agile.md](./references/clean-agile.md). |
| **Design patterns** | When to use, misuse, cargo cult | See [reference.md](./reference.md) and [references/design-patterns.md](./references/design-patterns.md). |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @uncle-bob-craft-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/uncle-bob-craft-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/uncle-bob-craft-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @uncle-bob-craft-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Code review prompt (copy-pasteable)

Use this to ask for an Uncle Bob–oriented review:

```markdown
Please review this change using Uncle Bob craft criteria (@uncle-bob-craft):
1. Dependency Rule and boundaries — do dependencies point inward?
2. SOLID in context — any violations in the touched code?
3. Smells — list rigidity, fragility, immobility, viscosity, needless complexity/repetition, or opacity.
4. Suggest one or two concrete refactors (e.g., extract function, invert dependency).
Do not duplicate lint/format; focus on structure and design.
```

### Example 2: Before/after (extract and name)

**Before (opacity, does more than one thing):**

```python
def process(d):
    if d.get("t") == 1:
        d["x"] = d["a"] * 1.1
    elif d.get("t") == 2:
        d["x"] = d["a"] * 1.2
    return d
```

**After (clear intent, single level of abstraction):**

```python
def apply_discount(amount: float, discount_type: int) -> float:
    if discount_type == 1:
        return amount * 1.1
    if discount_type == 2:
        return amount * 1.2
    return amount

def process(order: dict) -> dict:
    order["x"] = apply_discount(order["a"], order.get("t", 0))
    return order
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Use @clean-code for naming, functions, comments, and formatting; use this skill for architecture, boundaries, SOLID, smells, and process.
- ✅ In review, name the smell or principle (e.g., "Dependency Rule violation: use case imports from the web framework").
- ✅ Suggest at least one concrete refactor per review (extract, rename, invert dependency).
- ✅ Run the project linter and formatter separately; this skill does not replace them.
- ❌ Do not use this skill to enforce syntax or style; that is the linter's job.
- ❌ Do not add design patterns without a clear duplication or variation reason.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Use `@clean-code` for naming, functions, comments, and formatting; use this skill for architecture, boundaries, SOLID, smells, and process.
- ✅ In review, name the smell or principle (e.g., "Dependency Rule violation: use case imports from the web framework").
- ✅ Suggest at least one concrete refactor per review (extract, rename, invert dependency).
- ✅ Run the project linter and formatter separately; this skill does not replace them.
- ❌ Do not use this skill to enforce syntax or style; that is the linter's job.
- ❌ Do not add design patterns without a clear duplication or variation reason.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/uncle-bob-craft`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/clean-agile.md` |
| `examples` | prompt packets and usage templates | `examples/code-review-checklist.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Design Patterns: Use vs Misuse

- **Use patterns** when they solve a real design problem (e.g., variation in behavior, lifecycle, or cross-cutting concern), not to look "enterprise."
- **Avoid cargo cult**: Do not add Factory/Strategy/Repository just because the codebase "should" have them; add them when duplication or rigidity justifies the abstraction.
- **Signs of misuse**: Pattern name in every class name, layers that only delegate without logic, patterns that make simple code harder to follow.
- **Rule of thumb**: Introduce a pattern when you feel the third duplication or the second reason to change; name the pattern in code or docs so intent is clear.

#### Imported: Smells and Heuristics (Summary)

| Smell / Heuristic | Meaning |
|-------------------|--------|
| **Rigidity** | Small change forces many edits. |
| **Fragility** | Changes break unrelated areas. |
| **Immobility** | Hard to reuse in another context. |
| **Viscosity** | Easy to hack, hard to do the right thing. |
| **Needless complexity** | Speculative or unused abstraction. |
| **Needless repetition** | DRY violated; same idea in multiple places. |
| **Opacity** | Code is hard to understand. |

Full lists (including heuristics C1–T9-style) are in [reference.md](./reference.md). Use these in review to name issues and suggest refactors (extract, move dependency, introduce boundary).

#### Imported: Review vs Production

| Context | Apply |
|---------|--------|
| **Code review** | Dependency Rule and boundaries; SOLID in context; list smells; suggest one or two concrete refactors (e.g., extract function, invert dependency); check tests and professionalism (tests present, no obvious pressure hacks). |
| **Writing new code** | Prefer small functions and single responsibility; depend inward (Clean Architecture); write tests first when doing TDD; avoid patterns until duplication or variation justifies them. |
| **Refactoring** | Identify one smell at a time; refactor in small steps with tests green; improve names and structure before adding behavior. |

#### Imported: How It Works

### When reviewing code

1. **Boundaries and Dependency Rule**: Check that dependencies point inward (e.g., use cases do not depend on UI or DB details). See [references/clean-architecture.md](./references/clean-architecture.md).
2. **SOLID in context**: Check Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion where they apply to the changed code.
3. **Smells**: Scan for rigidity, fragility, immobility, viscosity, needless complexity/repetition, opacity; list them with file/area.
4. **Concrete suggestions**: Propose one or two refactors (e.g., "Extract this into a function named X," "Introduce an interface so this layer does not depend on the concrete DB client").
5. **Tests and craft**: Note if tests exist and if the change respects sustainable pace (no obvious "we'll fix it later" comments that violate professionalism).

### When writing or refactoring code

1. Prefer **small, single-purpose** functions and classes; use `@clean-code` for naming and structure.
2. Keep **dependencies pointing inward**; put business rules in the center, adapters at the edges.
3. Introduce **design patterns** only when duplication or variation justifies them.
4. Refactor in **small steps** with tests staying green.

#### Imported: Common Pitfalls

- **Problem:** Treating every class as needing a Factory or Strategy.  
  **Solution:** Introduce patterns only when you have a real design need (third duplication, second axis of change).

- **Problem:** Review only listing "violates SOLID" without saying where or how.  
  **Solution:** Point to the file/function and which principle (e.g., "SRP: this function parses and persists; split into parse and persist").

- **Problem:** Skipping the project linter because "we applied Uncle Bob."  
  **Solution:** This skill is about craft and design; always run the project's lint and format.

#### Imported: Limitations

- **Does not replace the project linter or formatter.** Run lint and format separately; this skill gives design and craft criteria only.
- **Does not replace automated tests.** It can remind you to write tests (Clean Coder, Clean Agile) but does not run or generate them.
- **Complementary to tooling.** Use it alongside existing CI, lint, and test suites.
- **No syntax or style enforcement.** It focuses on structure, dependencies, smells, and professional practice, not on brace style or line length.
- **Summaries, not the books.** Full Clean Code heuristics, component principles (REP/CCP/CRP, ADP/SDP/SAP), and detailed stories are in the books; we reference the most used parts. See [reference.md](./reference.md) "Scope and attribution."
