---
name: hig-components-controls
description: "Apple HIG: Selection and Input Controls workflow skill. Use this skill when the user needs Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-components-controls", "check", "for", "claude", "apple-design-context", "asking", "questions", "use"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Apple HIG: Selection and Input Controls

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-components-controls` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Selection and Input Controls Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/combo-boxes.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/controls.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Output Format

1. **Control recommendation with rationale** and why alternatives are less suitable.
2. **State management** -- how the control communicates current state and whether changes apply immediately or on confirmation.
3. **Validation approach** -- when to show errors and how to communicate rules.
4. **Accessibility** -- labels, traits, hints for VoiceOver.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-controls to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-components-controls against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-components-controls for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-components-controls using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Clear current state. Users must always see what is selected. Toggles show on/off, segmented controls highlight the active segment, pickers display the current selection.
- Prefer standard system controls. Built-in controls provide consistency and accessibility. Custom controls introduce a learning curve and may break assistive features.
- Toggles for binary states. On or off. In Settings-style screens, changes take effect immediately. In modal forms, changes commit on confirmation.
- Segmented controls for mutually exclusive options. 2-5 items, roughly equal importance, short labels.
- Sliders for continuous values. When precise numeric input is not critical. Provide min/max labels or icons for range endpoints.
- Pickers for long option lists. Too many options for a segmented control. Works well for dates, times, structured data.
- Steppers for small, precise adjustments. Increment/decrement in fixed steps. Display current value next to the stepper with reasonable min/max bounds.

### Imported Operating Notes

#### Imported: Key Principles

1. **Clear current state.** Users must always see what is selected. Toggles show on/off, segmented controls highlight the active segment, pickers display the current selection.

2. **Prefer standard system controls.** Built-in controls provide consistency and accessibility. Custom controls introduce a learning curve and may break assistive features.

3. **Toggles for binary states.** On or off. In Settings-style screens, changes take effect immediately. In modal forms, changes commit on confirmation.

4. **Segmented controls for mutually exclusive options.** 2-5 items, roughly equal importance, short labels.

5. **Sliders for continuous values.** When precise numeric input is not critical. Provide min/max labels or icons for range endpoints.

6. **Pickers for long option lists.** Too many options for a segmented control. Works well for dates, times, structured data.

7. **Steppers for small, precise adjustments.** Increment/decrement in fixed steps. Display current value next to the stepper with reasonable min/max bounds.

8. **Text fields for short, single-line input.** Text views for multi-line. Configure keyboard type to match expected input (email, URL, number).

9. **Combo boxes: text input + selection list.** macOS. Type a value or choose from a predefined list when custom values are valid.

10. **Token fields: discrete values as visual tokens.** macOS. For email recipients, tags, or collections of discrete items.

11. **Gauges and rating indicators display values.** Gauges show a value within a range. Rating indicators show ratings (often stars). Display-only; use interactive variants for input.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-components-controls`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-actions-templates` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/combo-boxes.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [combo-boxes.md](references/combo-boxes.md)
- [controls.md](references/controls.md)
- [gauges.md](references/gauges.md)
- [labels.md](references/labels.md)
- [combo-boxes.md](references/combo-boxes.md)
- [controls.md](references/controls.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [controls.md](references/controls.md) | General controls | States, affordance, system controls |
| [toggles.md](references/toggles.md) | Toggles | On/off, immediate effect |
| [segmented-controls.md](references/segmented-controls.md) | Segmented controls | 2-5 options, equal weight |
| [sliders.md](references/sliders.md) | Sliders | Continuous range, min/max labels |
| [steppers.md](references/steppers.md) | Steppers | Fixed steps, bounded values |
| [pickers.md](references/pickers.md) | Pickers | Dates, times, long option sets |
| [combo-boxes.md](references/combo-boxes.md) | Combo boxes | macOS, type or select, custom values |
| [text-fields.md](references/text-fields.md) | Text fields | Short input, keyboard types, validation |
| [text-views.md](references/text-views.md) | Text views | Multi-line, comments, descriptions |
| [labels.md](references/labels.md) | Labels | Placement, VoiceOver support |
| [token-fields.md](references/token-fields.md) | Token fields | macOS, chips, tags, recipients |
| [virtual-keyboards.md](references/virtual-keyboards.md) | Virtual keyboards | Email, URL, number keyboard types |
| [rating-indicators.md](references/rating-indicators.md) | Rating indicators | Star ratings, display-only |
| [gauges.md](references/gauges.md) | Gauges | Level indicators, range display |

#### Imported: Questions to Ask

1. What type of data? (Boolean, choice from fixed set, numeric, free-form text?)
2. How many options?
3. Which platforms? (Combo boxes and token fields are macOS-only)
4. Settings screen or inline form?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
