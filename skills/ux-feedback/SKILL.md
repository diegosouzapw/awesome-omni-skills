---
name: ux-feedback
description: "UX Feedback workflow skill. Use this skill when the user needs Add loading, empty, error, and success feedback states to StyleSeed components and pages with practical mobile-first rules and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["ux", "states", "loading", "error-handling", "styleseed", "ux-feedback", "add", "empty"]
complexity: beginner
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "bitjaru"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# UX Feedback

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ux-feedback` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# UX Feedback

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: The Four Required States, Output, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a component or page fetches, mutates, or depends on async data
- Use when a flow currently renders only the success path
- Use when a card, list, or page needs better state communication
- Use when the product needs clear recovery and confirmation behavior
- Use when the request clearly matches the imported source intent: Add loading, empty, error, and success feedback states to StyleSeed components and pages with practical mobile-first rules.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

Part of [StyleSeed](https://github.com/bitjaru/styleseed), this skill ensures data-dependent UI does not stop at the happy path. It adds the four core feedback states every serious product needs: loading, empty, error, and success.

#### Imported: The Four Required States

### Loading

Use skeletons that match the final layout. Avoid spinners inside cards unless the pattern genuinely requires them. Delay skeletons slightly to avoid flashes on fast responses.

### Empty

Provide a friendly explanation and a next action. Zero values should still render meaningfully instead of disappearing.

### Error

Use plain-language failure messages and always offer recovery where possible. Localize failures to the affected card or section if the rest of the page can still work.

### Success

Use toasts or equivalent lightweight confirmation for completed actions. Add undo for reversible destructive changes.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ux-feedback to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ux-feedback against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ux-feedback for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ux-feedback using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Match loading placeholders to the real layout
- Keep partial failure isolated whenever possible
- Make recovery obvious, not hidden in logs or developer tools
- Use success feedback sparingly but clearly
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Match loading placeholders to the real layout
- Keep partial failure isolated whenever possible
- Make recovery obvious, not hidden in logs or developer tools
- Use success feedback sparingly but clearly

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ux-feedback`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@trpc-fullstack` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@trust-calibrator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@turborepo-caching` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tutorial-engineer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [StyleSeed repository](https://github.com/bitjaru/styleseed)
- [Source skill](https://github.com/bitjaru/styleseed/blob/main/seeds/toss/.claude/skills/ux-feedback/SKILL.md)

#### Imported: Output

Return:
1. The data-dependent areas identified
2. The loading, empty, error, and success states added for each one
3. Any reusable empty-state or toast patterns created
4. Follow-up work needed for analytics, retries, or accessibility

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
