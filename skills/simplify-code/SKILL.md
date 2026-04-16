---
name: simplify-code
description: "Simplify Code workflow skill. Use this skill when the user needs Review a diff for clarity and safe simplifications, then optionally apply low-risk fixes and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["simplify-code", "review", "diff", "for", "clarity", "and", "safe", "simplifications"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Simplify Code

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/simplify-code` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Simplify Code Review changed code for reuse, quality, efficiency, and clarity issues. Use Codex sub-agents to review in parallel, then optionally apply only high-confidence, behavior-preserving fixes.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Modes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks to simplify, clean up, refactor, or review changed code.
- When you want high-confidence, behavior-preserving improvements on a scoped diff.
- targeted tests for the touched module
- typecheck or compile for the touched target
- formatter or lint check if that is the project's real safety gate
- Use when the request clearly matches the imported source intent: Review a diff for clarity and safe simplifications, then optionally apply low-risk fixes.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Files or paths explicitly named by the user
2. Current git changes
3. Files edited earlier in the current Codex turn
4. Most recently modified tracked files, only if the user asked for a review but there is no diff
5. unstaged work: git diff
6. staged work: git diff --cached
7. branch or commit comparison explicitly requested by the user: use that exact diff target

### Imported Workflow Notes

#### Imported: Step 1: Determine the Scope and Diff Command

Prefer this scope order:

1. Files or paths explicitly named by the user
2. Current git changes
3. Files edited earlier in the current Codex turn
4. Most recently modified tracked files, only if the user asked for a review but there is no diff

If there is no clear scope, stop and say so briefly.

When using git changes, determine the smallest correct diff command based on the repo state:

- unstaged work: `git diff`
- staged work: `git diff --cached`
- branch or commit comparison explicitly requested by the user: use that exact diff target
- mixed staged and unstaged work: review both

Do not assume `git diff HEAD` is the right default when a smaller diff is available.

Before reviewing standards or applying fixes, read the repo's local instruction files and relevant project docs for the touched area. Prefer the closest applicable guidance, such as:

- `AGENTS.md`
- repo workflow docs
- architecture or style docs for the touched module

Use those instructions to distinguish real issues from intentional local patterns.

#### Imported: Step 2: Launch Four Review Sub-Agents in Parallel

Use Codex sub-agents when the scope is large enough for parallel review to help. For a tiny diff or one very small file, it is acceptable to review locally instead.

When spawning sub-agents:

- give each sub-agent the same scope
- tell each sub-agent to inspect only its assigned review role
- ask for concise, structured findings only
- ask each sub-agent to report file, line or symbol, problem, recommended fix, and confidence

Use four review roles.

### Sub-Agent 1: Code Reuse Review

Review the changes for reuse opportunities:

1. Search for existing helpers, utilities, or shared abstractions that already solve the same problem.
2. Flag duplicated functions or near-duplicate logic introduced in the change.
3. Flag inline logic that should call an existing helper instead of re-implementing it.

Recommended sub-agent role: `explorer` for broad codebase lookup, or `reviewer` if a stronger review pass is more useful than wide search.

### Sub-Agent 2: Code Quality Review

Review the same changes for code quality issues:

1. Redundant state, cached values, or derived values stored unnecessarily
2. Parameter sprawl caused by threading new arguments through existing call chains
3. Copy-paste with slight variation that should become a shared abstraction
4. Leaky abstractions or ownership violations across module boundaries
5. Stringly-typed values where existing typed contracts, enums, or constants already exist

Recommended sub-agent role: `reviewer`

### Sub-Agent 3: Efficiency Review

Review the same changes for efficiency issues:

1. Repeated work, duplicate reads, duplicate API calls, or unnecessary recomputation
2. Sequential work that could safely run concurrently
3. New work added to startup, render, request, or other hot paths without clear need
4. Pre-checks for existence when the operation itself can be attempted directly and errors handled
5. Memory growth, missing cleanup, or listener/subscription leaks
6. Overly broad reads or scans when the code only needs a subset

Recommended sub-agent role: `reviewer`

### Sub-Agent 4: Clarity and Standards Review

Review the same changes for clarity, local standards, and balance:

1. Violations of local project conventions or module patterns
2. Unnecessary complexity, deep nesting, weak names, or redundant comments
3. Overly compact or clever code that reduces readability
4. Over-simplification that collapses separate concerns into one unclear unit
5. Dead code, dead abstractions, or indirection without value

Recommended sub-agent role: `reviewer`

Only report issues that materially improve maintainability, correctness, or cost. Do not churn code just to make it look different.

#### Imported: Step 3: Aggregate Findings

Wait for all review sub-agents to complete, then merge their findings.

Normalize findings into this shape:

1. File and line or nearest symbol
2. Category: reuse, quality, efficiency, or clarity
3. Why it is a problem
4. Recommended fix
5. Confidence: high, medium, or low

Discard weak, duplicative, or instruction-conflicting findings before editing.

#### Imported: Step 4: Fix Issues Carefully

In `review-only` mode, stop after reporting findings.

In `safe-fixes` or `fix-and-validate` mode:

- Apply only high-confidence, behavior-preserving fixes
- Skip subjective refactors that need product or architectural judgment
- Preserve local patterns when they are intentional or instruction-backed
- Keep edits scoped to the reviewed files unless a small adjacent change is required to complete the fix correctly

Prefer fixes like:

- replacing duplicated code with an existing helper
- removing redundant state or dead code
- simplifying control flow without changing behavior
- narrowing overly broad operations
- renaming unclear locals when the scope is contained

Do not stage, commit, or push changes as part of this skill.

#### Imported: Step 6: Summarize Outcome

Close with a brief result:

- what was reviewed
- what was fixed, if anything
- what was intentionally left alone
- whether validation ran

If the code is already clean for this rubric, say that directly instead of manufacturing edits.

#### Imported: Modes

Choose the mode from the user's request:

- `review-only`: user asks to review, audit, or check the changes
- `safe-fixes`: user asks to simplify, clean up, or refactor the changes
- `fix-and-validate`: same as `safe-fixes`, but also run the smallest relevant validation after edits

If the user does not specify, default to:

- `review-only` for "review", "audit", or "check"
- `safe-fixes` for "simplify", "clean up", or "refactor"

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @simplify-code to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @simplify-code against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @simplify-code for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @simplify-code using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/simplify-code`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@shellcheck-configuration` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shodan-reconnaissance` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
