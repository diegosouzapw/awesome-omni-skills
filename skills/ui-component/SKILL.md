---
name: ui-component
description: "UI Component workflow skill. Use this skill when the user needs Generate a new UI component that follows StyleSeed Toss conventions for structure, tokens, accessibility, and component ergonomics and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["ui", "components", "design-system", "frontend", "styleseed", "ui-component", "generate", "new"]
complexity: beginner
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "bitjaru"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# UI Component

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ui-component` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# UI Component

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Output, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need a new UI primitive or composed component inside a StyleSeed-based project
- Use when you want a component to match the existing Toss seed conventions
- Use when a component should be reusable, typed, and design-token driven
- Use when the AI might otherwise invent spacing, colors, or interaction patterns
- Use when the request clearly matches the imported source intent: Generate a new UI component that follows StyleSeed Toss conventions for structure, tokens, accessibility, and component ergonomics.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Part of [StyleSeed](https://github.com/bitjaru/styleseed), this skill generates components that respect the Toss seed's design language instead of improvising ad hoc markup and styling. It emphasizes semantic tokens, predictable typing, reusable variants, and mobile-friendly accessibility defaults.

#### Imported: How It Works

### Step 1: Read the Local Design Context

Before generating code, inspect the seed's source of truth:
- `CLAUDE.md` for conventions
- `css/theme.css` for semantic tokens
- at least one representative component from `components/ui/`

If the user already has a better local example, follow the local codebase over a generic template.

### Step 2: Choose the Correct Home

Place the output where it belongs:
- `src/components/ui/` for primitives and low-level building blocks
- `src/components/patterns/` for composed sections or multi-part patterns

Do not create a new primitive if an existing one can be extended safely.

### Step 3: Follow the Structural Rules

Use these defaults unless the host project strongly disagrees:
- function declaration instead of a `const` component
- `React.ComponentProps<>` or equivalent native prop typing
- `className` passthrough support
- `cn()` or the project's standard class merger
- `data-slot` for component identification
- CVA or equivalent only when variants are genuinely needed

### Step 4: Use Semantic Tokens Only

Do not hardcode visual values if the design system has a token for them.

Preferred examples:
- `bg-card`
- `text-foreground`
- `text-muted-foreground`
- `border-border`
- `shadow-[var(--shadow-card)]`

### Step 5: Preserve StyleSeed Typography and Spacing

- Use the scale already defined by the seed
- Prefer multiples of 6px
- Use logical spacing utilities where supported
- Keep display and heading text tight, body text readable, captions restrained

### Step 6: Bake in Accessibility

- Touch targets should be at least 44x44px for interactive elements
- Keyboard focus must be visible
- Pass through `aria-*` attributes where appropriate
- Respect reduced-motion preferences for nonessential motion

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ui-component to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ui-component against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ui-component for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ui-component using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Compose from existing primitives before inventing new ones
- Keep the component API small and predictable
- Prefer semantic layout classes over arbitrary values
- Export named components unless the host project uses another standard consistently
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Compose from existing primitives before inventing new ones
- Keep the component API small and predictable
- Prefer semantic layout classes over arbitrary values
- Export named components unless the host project uses another standard consistently

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ui-component`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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
- [Source skill](https://github.com/bitjaru/styleseed/blob/main/seeds/toss/.claude/skills/ui-component/SKILL.md)

#### Imported: Output

Provide:
1. The generated component
2. The target path
3. Any required imports or dependencies
4. Notes on variants, tokens, or follow-up integration work

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
