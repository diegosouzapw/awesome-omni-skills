---
name: brooks-lint-v2
description: "Brooks Lint workflow skill. Use this skill when the user needs AI code reviewer grounded in classic software engineering books for catching design smells, coupling issues, and architectural risks and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["code-review", "architecture", "software-design", "refactoring", "claude-code", "brooks-lint-v2", "brooks-lint", "reviewer"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "hyhmrright"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Brooks Lint

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/brooks-lint` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Brooks Lint

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: The 12 Books, How It Works, Review Categories, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you want architectural feedback beyond what linters provide
- Use before major refactors to identify structural debt
- Use when reviewing code that "works but feels wrong"
- Use when onboarding to a codebase to quickly map risk areas
- Use for design reviews before starting a new module or service
- Use when the request clearly matches the imported source intent: AI code reviewer grounded in classic software engineering books for catching design smells, coupling issues, and architectural risks.

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

1. bash # Install via Claude Code plugin marketplace # Search: "brooks-lint" in Claude Code > Extensions # Or install via NPX (Antigravity) npx antigravity-awesome-skills --claude # Then invoke: @brooks-lint
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Install via Claude Code plugin marketplace
# Search: "brooks-lint" in Claude Code > Extensions

# Or install via NPX (Antigravity)
npx antigravity-awesome-skills --claude
# Then invoke: @brooks-lint
```

#### Imported: Overview

Brooks Lint is a Claude Code skill that reviews your code through the lens of 12 classic software engineering books. Instead of checking style rules, it asks: "What would the authors of *The Pragmatic Programmer*, *Clean Code*, and *Designing Data-Intensive Applications* say about this code?"

It synthesizes the principles from landmark engineering books into actionable, structured feedback — catching design smells, tight coupling, missing abstractions, and architectural risks that linters and AI tools typically miss.

Named after Fred Brooks, author of *The Mythical Man-Month* — because the hardest bugs are conceptual, not syntactic.

#### Imported: The 12 Books

| Book | Key Principles Applied |
|------|----------------------|
| *The Pragmatic Programmer* | DRY, orthogonality, tracer bullets |
| *Clean Code* | Naming, function size, comment clarity |
| *The Mythical Man-Month* | Conceptual integrity, second-system effect |
| *Designing Data-Intensive Applications* | Data consistency, fault tolerance, scalability |
| *A Philosophy of Software Design* | Deep modules, information hiding, complexity |
| *Refactoring* | Code smells, extract method, encapsulation |
| *Working Effectively with Legacy Code* | Seams, characterization tests, dependency breaking |
| *Domain-Driven Design* | Ubiquitous language, bounded contexts, aggregates |
| *Release It!* | Stability patterns, timeouts, bulkheads, circuit breakers |
| *Structure and Interpretation of Computer Programs* | Abstraction, recursion, metalinguistic abstraction |
| *The Art of UNIX Programming* | Modularity, composability, rule of least surprise |
| *Extreme Programming Explained* | YAGNI, simple design, collective ownership |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @brooks-lint-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @brooks-lint-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @brooks-lint-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @brooks-lint-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Review a Service Class

```
@brooks-lint review src/services/PaymentService.ts
```

**Brooks Lint output:**
```
[Pragmatic Programmer] DRY violation: payment validation logic duplicated in 3 places
[Clean Code] Method processPayment() does 4 things — violates Single Responsibility
[Release It!] No timeout on external payment gateway call — risk of cascade failure
[DDIA] No idempotency key — retry on network error will double-charge
[APOSD] PaymentService knows too much about UserRepository — high coupling
```

### Example 2: Full Codebase Architecture Review

```
@brooks-lint analyze the overall architecture of this codebase
```

### Example 3: Pre-Refactor Review

```
@brooks-lint what are the biggest design smells in this module before I refactor it?
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Run @brooks-lint after writing new service layers or data pipelines
- Combine with @logic-lens for full coverage: logic bugs + design smells
- Use @brooks-lint analyze architecture weekly on growing codebases
- Focus on CRITICAL and HIGH findings first — LOW findings are style suggestions
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Run `@brooks-lint` after writing new service layers or data pipelines
- Combine with `@logic-lens` for full coverage: logic bugs + design smells
- Use `@brooks-lint analyze architecture` weekly on growing codebases
- Focus on CRITICAL and HIGH findings first — LOW findings are style suggestions

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/brooks-lint`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Additional Resources

- [GitHub Repository](https://github.com/hyhmrright/brooks-lint)
- [Dev.to Article: I Synthesized 12 Classic Engineering Books into an AI Code Reviewer](https://dev.to/hyhmrright/i-synthesized-12-classic-engineering-books-into-an-ai-code-reviewer-heres-what-it-caught-3ed1)
- [Related skill: logic-lens](https://github.com/hyhmrright/logic-lens)

#### Imported: How It Works

Brooks Lint applies each book's core principles as a review lens:

1. **Smell detection**: Flags violations of DRY, SRP, Law of Demeter, etc.
2. **Coupling analysis**: Identifies tight dependencies and missing abstraction layers
3. **Naming critique**: Applies Clean Code naming rules to variables, methods, classes
4. **Architecture review**: Checks for DDIA-style data consistency and fault tolerance gaps
5. **Stability patterns**: Flags missing timeouts, retries, and circuit breakers (Release It!)
6. **Complexity scoring**: Applies APOSD complexity metrics to identify over-engineered sections

#### Imported: Review Categories

| Category | Books Applied | What It Catches |
|----------|--------------|-----------------|
| **DRY / Duplication** | PP, Refactoring | Copy-paste code, shared logic not extracted |
| **Naming** | Clean Code, DDD | Unclear names, domain language violations |
| **Coupling** | APOSD, PP | Tight dependencies, missing interfaces |
| **Stability** | Release It! | Missing timeouts, no retry logic, no circuit breakers |
| **Data Integrity** | DDIA | Race conditions, non-idempotent operations |
| **Complexity** | APOSD, SICP | Over-engineering, unnecessary abstraction |
| **Legacy Debt** | WELC | Hard-to-test code, missing seams |
| **Domain Clarity** | DDD, XP | Anemic models, missing bounded contexts |

#### Imported: Limitations

Use this skill only when the task clearly matches the scope described above (design review and architectural analysis). Brooks Lint applies AI-powered analysis grounded in established engineering principles. It should complement — not replace — human design review for production-critical decisions. Results reflect the principles of the 12 source books and may not apply to all architectural styles or domains.
