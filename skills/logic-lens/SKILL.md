---
name: logic-lens
description: "Logic Lens workflow skill. Use this skill when the user needs AI-powered Claude Code skill that performs deep code review using formal logic and reasoning frameworks to detect bugs, anti-patterns, and security risks beyond what linters catch and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["code-review", "logic-analysis", "debugging", "security-review", "claude-code", "logic-lens", "ai-powered", "claude"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "hyhmrright"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Logic Lens

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/logic-lens` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Logic Lens

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, The 9 Risk Categories, Benchmark Results, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you want a thorough logic review before merging a PR
- Use when a bug seems hard to find and standard linters aren't helping
- Use when reviewing security-sensitive code paths (auth, payments, file access)
- Use when refactoring complex business logic
- Use when onboarding to a new codebase and need to understand risk areas
- Use when the request clearly matches the imported source intent: AI-powered Claude Code skill that performs deep code review using formal logic and reasoning frameworks to detect bugs, anti-patterns, and security risks beyond what linters catch.

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

1. bash # Install via Claude Code plugin marketplace # Search: "logic-lens" in Claude Code > Extensions # Or install via NPX (Antigravity) npx antigravity-awesome-skills --claude # Then invoke: @logic-lens
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
# Search: "logic-lens" in Claude Code > Extensions

# Or install via NPX (Antigravity)
npx antigravity-awesome-skills --claude
# Then invoke: @logic-lens
```

#### Imported: Overview

Logic Lens is a Claude Code skill that performs deep, logic-driven code review using formal reasoning frameworks. Unlike traditional linters that check syntax and style, Logic Lens analyzes your code for logical errors, race conditions, security vulnerabilities, type mismatches, and algorithmic flaws that only appear when you reason through the code's behavior.

Powered by structured AI analysis, Logic Lens applies systematic logical inspection across 9 risk categories: null/undefined handling, type safety, concurrency, resource management, security injection, boundary conditions, algorithm correctness, state management, and API contract violations.

#### Imported: How It Works

Logic Lens uses Claude Code's reasoning capabilities to:

1. Parse code structure and build a mental model of data flow
2. Apply formal logic checks across 9 risk categories
3. Trace execution paths for edge cases and boundary conditions
4. Identify security anti-patterns (injection, privilege escalation, data leakage)
5. Report findings with severity levels and actionable fix suggestions

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @logic-lens to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @logic-lens against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @logic-lens for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @logic-lens using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Review a Single File

```
@logic-lens review src/auth/login.ts for security issues
```

**Logic Lens output:**
```
[CRITICAL] SQL Injection risk at line 42: user input concatenated into query string
[HIGH] Missing rate limiting on login attempts
[MEDIUM] Password comparison uses == instead of timing-safe comparison
[LOW] Error messages may leak valid usernames (user enumeration)
```

### Example 2: Full Repository Scan

```
@logic-lens scan the entire codebase and prioritize by severity
```

### Example 3: Pre-PR Review

```
@logic-lens review all files changed in this branch before I open a PR
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Run @logic-lens on authentication and payment code before every release
- Combine with @lint-and-validate for full coverage: style + logic
- Review the CRITICAL and HIGH findings first; LOW findings can be deferred
- Use @logic-lens on legacy code you are about to modify to understand risk surface
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Run `@logic-lens` on authentication and payment code before every release
- Combine with `@lint-and-validate` for full coverage: style + logic
- Review the CRITICAL and HIGH findings first; LOW findings can be deferred
- Use `@logic-lens` on legacy code you are about to modify to understand risk surface

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/logic-lens`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [GitHub Repository](https://github.com/hyhmrright/logic-lens)
- [Dev.to Article: Why AI Code Review Misses the Most Dangerous Bugs](https://dev.to/hyhmrright/why-ai-code-review-misses-the-most-dangerous-bugs-logic-lens-fixes-that-4a8l)
- [Claude Code Skills Documentation](https://docs.anthropic.com/claude-code)

#### Imported: The 9 Risk Categories

| Category | What It Checks |
|----------|----------------|
| **Null/Undefined** | Missing null checks, optional chaining gaps |
| **Type Safety** | Implicit coercions, any-typed boundaries |
| **Concurrency** | Race conditions, shared mutable state |
| **Resource Management** | Unclosed handles, memory leaks |
| **Security Injection** | SQL/XSS/Command injection, path traversal |
| **Boundary Conditions** | Off-by-one errors, integer overflow |
| **Algorithm Correctness** | Wrong complexity, incorrect assumptions |
| **State Management** | Inconsistent state, missing rollbacks |
| **API Contracts** | Undocumented side effects, broken interfaces |

#### Imported: Benchmark Results

Logic Lens was tested against real-world codebases and caught issues missed by ESLint, TypeScript strict mode, and Snyk:

- **47% of critical bugs** found were invisible to linters
- **Race conditions** detected in async code that static analysis missed
- **Security vulnerabilities** identified before deployment in CI pipeline

#### Imported: Limitations

Use this skill only when the task clearly matches the scope described above (code review and logic analysis). Logic Lens provides AI-powered analysis and should be combined with human review for production-critical decisions. Do not treat the output as a substitute for environment-specific testing or security audits.
