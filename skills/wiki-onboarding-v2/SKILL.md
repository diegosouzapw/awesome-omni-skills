---
name: wiki-onboarding-v2
description: "Wiki Onboarding Guide Generator workflow skill. Use this skill when the user needs Generate two complementary onboarding documents that together give any engineer \u2014 from newcomer to principal \u2014 a complete understanding of a codebase. Use when user asks for onboarding docs or getting-started guides, user runs /deep-wiki, or user wants to help new team members understand a codebase and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["wiki-onboarding-v2", "wiki-onboarding", "generate", "two", "complementary", "onboarding", "documents", "together"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Wiki Onboarding Guide Generator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/wiki-onboarding` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Wiki Onboarding Guide Generator Generate two complementary onboarding documents that together give any engineer — from newcomer to principal — a complete understanding of a codebase.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Language Detection, Guide 1: Principal-Level Onboarding, Guide 2: Zero-to-Hero Contributor Guide, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks for onboarding docs or getting-started guides
- User runs /deep-wiki:onboard command
- User wants to help new team members understand a codebase
- Use when the request clearly matches the imported source intent: Generate two complementary onboarding documents that together give any engineer — from newcomer to principal — a complete understanding of a codebase. Use when user asks for onboarding docs or getting-started guides,....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

#### Imported: Language Detection

Scan the repository for build files to determine the primary language for code examples:
- `package.json` / `tsconfig.json` → TypeScript/JavaScript
- `*.csproj` / `*.sln` → C# / .NET
- `Cargo.toml` → Rust
- `pyproject.toml` / `setup.py` / `requirements.txt` → Python
- `go.mod` → Go
- `pom.xml` / `build.gradle` → Java

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @wiki-onboarding-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @wiki-onboarding-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @wiki-onboarding-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @wiki-onboarding-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/wiki-onboarding`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Guide 1: Principal-Level Onboarding

**Audience**: Senior/staff+ engineers who need the "why" behind decisions.

### Required Sections

1. **System Philosophy & Design Principles** — What invariants does the system maintain? What were the key design choices and why?
2. **Architecture Overview** — Component map with Mermaid diagram. What owns what, communication patterns.
3. **Key Abstractions & Interfaces** — The load-bearing abstractions everything depends on
4. **Decision Log** — Major architectural decisions with context, alternatives considered, trade-offs
5. **Dependency Rationale** — Why each major dependency was chosen, what it replaced
6. **Data Flow & State** — How data moves through the system (traced from actual code, not guessed)
7. **Failure Modes & Error Handling** — What breaks, how errors propagate, recovery patterns
8. **Performance Characteristics** — Bottlenecks, scaling limits, hot paths
9. **Security Model** — Auth, authorization, trust boundaries, data sensitivity
10. **Testing Strategy** — What's tested, what isn't, testing philosophy
11. **Operational Concerns** — Deployment, monitoring, feature flags, configuration
12. **Known Technical Debt** — Honest assessment of shortcuts and their risks

### Rules
- Every claim backed by `(file_path:line_number)` citation
- Minimum 3 Mermaid diagrams (architecture, data flow, dependency graph)
- All Mermaid diagrams use dark-mode colors (see wiki-vitepress skill)
- Focus on WHY decisions were made, not just WHAT exists

#### Imported: Guide 2: Zero-to-Hero Contributor Guide

**Audience**: New contributors who need step-by-step practical guidance.

### Required Sections

1. **What This Project Does** — 2-3 sentence elevator pitch
2. **Prerequisites** — Tools, versions, accounts needed
3. **Environment Setup** — Step-by-step with exact commands, expected output at each step
4. **Project Structure** — Annotated directory tree (what lives where and why)
5. **Your First Task** — End-to-end walkthrough of adding a simple feature
6. **Development Workflow** — Branch strategy, commit conventions, PR process
7. **Running Tests** — How to run tests, what to test, how to add a test
8. **Debugging Guide** — Common issues and how to diagnose them
9. **Key Concepts** — Domain-specific terminology explained with code examples
10. **Code Patterns** — "If you want to add X, follow this pattern" templates
11. **Common Pitfalls** — Mistakes every new contributor makes and how to avoid them
12. **Where to Get Help** — Communication channels, documentation, key contacts
13. **Glossary** — Terms used in the codebase that aren't obvious
14. **Quick Reference Card** — Cheat sheet of most-used commands and patterns

### Rules
- All code examples in the detected primary language
- Every command must be copy-pasteable
- Include expected output for verification steps
- Use Mermaid for workflow diagrams (dark-mode colors)
- Ground all claims in actual code — cite `(file_path:line_number)`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
