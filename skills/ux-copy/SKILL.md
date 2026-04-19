---
name: ux-copy
description: "UX Copy workflow skill. Use this skill when the user needs Generate UX microcopy in StyleSeed's Toss-inspired voice for buttons, empty states, errors, toasts, confirmations, and form guidance and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["ux", "copywriting", "microcopy", "frontend", "styleseed", "ux-copy", "generate", "toss-inspired"]
complexity: beginner
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "bitjaru"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# UX Copy

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ux-copy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# UX Copy

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Common Patterns, Output, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need button labels, helper text, toasts, empty states, or error messages
- Use when a feature has functional UI but weak or robotic wording
- Use when you want consistent product voice across a flow
- Use when confirmation dialogs or state feedback need better phrasing
- Use when the request clearly matches the imported source intent: Generate UX microcopy in StyleSeed's Toss-inspired voice for buttons, empty states, errors, toasts, confirmations, and form guidance.
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

Part of [StyleSeed](https://github.com/bitjaru/styleseed), this skill generates concise product copy for common UI states. It follows the Toss-inspired tone: casual but polite, direct, active, and specific enough to help the user recover or proceed.

#### Imported: Common Patterns

### Buttons

Use a short action verb plus object when needed.

### Empty States

Start with a friendly observation, then suggest the next action.

### Errors

Explain what happened in user-facing language and what to do next. Do not surface raw internal error strings.

### Toasts

Confirm the result quickly. Add an undo action for reversible destructive behavior.

### Forms

Use clear labels, useful placeholders, specific helper text, and corrective error messages.

### Confirmation Dialogs

State the action in plain language and explain the consequence if the decision is risky or irreversible.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ux-copy to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ux-copy against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ux-copy for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ux-copy using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- casual but polite
- active voice over passive voice
- positive framing where it stays honest
- plain language instead of internal jargon
- concise wording where every word earns its place
- Make the next action obvious
- Avoid generic labels like "Submit" or "OK" when the action can be named precisely

### Imported Operating Notes

#### Imported: Tone Rules

- casual but polite
- active voice over passive voice
- positive framing where it stays honest
- plain language instead of internal jargon
- concise wording where every word earns its place

#### Imported: Best Practices

- Make the next action obvious
- Avoid generic labels like "Submit" or "OK" when the action can be named precisely
- Blame the system, not the user, when something fails
- Keep error and empty states useful even without visual context

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ux-copy`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- [Source skill](https://github.com/bitjaru/styleseed/blob/main/seeds/toss/.claude/skills/ux-copy/SKILL.md)

#### Imported: Output

Return:
1. The requested microcopy grouped by UI surface
2. Notes on tone or localization considerations if relevant
3. Any places where the UX likely needs a structural fix in addition to better copy

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
