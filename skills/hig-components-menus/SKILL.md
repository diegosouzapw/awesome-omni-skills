---
name: hig-components-menus
description: "Apple HIG: Menus and Buttons workflow skill. Use this skill when the user needs Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-components-menus", "check", "for", "claude", "apple-design-context", "asking", "questions", "use"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Apple HIG: Menus and Buttons

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-components-menus` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Menus and Buttons Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

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
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/action-button.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/buttons.md` | Adds the next most relevant copied source file without loading the entire package |
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

1. **Component recommendation** -- which menu or button type and why.
2. **Visual hierarchy** -- placement, sizing, grouping within the interface.
3. **Platform-specific behavior** across iOS, iPadOS, macOS, visionOS.
4. **Keyboard shortcuts** (macOS) -- standard and custom shortcuts for menu items and toolbar actions.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-menus to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-components-menus against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-components-menus for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-components-menus using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Menus should be contextual and predictable. Standard items in standard locations. Follow platform conventions for ordering and grouping.
- Use standard button styles. System-defined styles communicate affordance and maintain visual consistency. Prefer them over custom designs.
- Toolbars for frequent actions. Most commonly used commands in the toolbar. Rarely used actions belong in menus.
- Menu bar is the primary command interface on macOS. Every command reachable from the menu bar. Toolbars and context menus supplement, not replace.
- Context menus for secondary actions. Right-click or long-press, relevant to the item under the pointer. Never put a command only in a context menu.
- Pop-up buttons for mutually exclusive choices. Select exactly one option from a set.
- Pull-down buttons for action lists. No current selection; they offer a set of commands.

### Imported Operating Notes

#### Imported: Key Principles

1. **Menus should be contextual and predictable.** Standard items in standard locations. Follow platform conventions for ordering and grouping.

2. **Use standard button styles.** System-defined styles communicate affordance and maintain visual consistency. Prefer them over custom designs.

3. **Toolbars for frequent actions.** Most commonly used commands in the toolbar. Rarely used actions belong in menus.

4. **Menu bar is the primary command interface on macOS.** Every command reachable from the menu bar. Toolbars and context menus supplement, not replace.

5. **Context menus for secondary actions.** Right-click or long-press, relevant to the item under the pointer. Never put a command only in a context menu.

6. **Pop-up buttons for mutually exclusive choices.** Select exactly one option from a set.

7. **Pull-down buttons for action lists.** No current selection; they offer a set of commands.

8. **Action buttons consolidate related actions** behind a single icon in toolbars or title bars.

9. **Disclosure controls for progressive disclosure.** Show or hide additional content.

10. **Dock menus: short and focused** on the most useful actions when the app is running.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-components-menus`, fails to mention provenance, or does not use any copied source files at all.
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
| `references` | copied reference notes, guides, or background material from upstream | `references/action-button.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [action-button.md](references/action-button.md)
- [buttons.md](references/buttons.md)
- [context-menus.md](references/context-menus.md)
- [disclosure-controls.md](references/disclosure-controls.md)
- [action-button.md](references/action-button.md)
- [buttons.md](references/buttons.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [menus.md](references/menus.md) | General menu design | Item ordering, grouping, shortcuts |
| [context-menus.md](references/context-menus.md) | Context menus | Right-click, long press, secondary actions |
| [dock-menus.md](references/dock-menus.md) | Dock menus | macOS app-level actions, running state |
| [edit-menus.md](references/edit-menus.md) | Edit menus | Undo, copy, paste, standard items |
| [the-menu-bar.md](references/the-menu-bar.md) | Menu bar | macOS primary command interface, structure |
| [toolbars.md](references/toolbars.md) | Toolbars | Frequent actions, customization, placement |
| [buttons.md](references/buttons.md) | Buttons | System styles, sizing, affordance |
| [action-button.md](references/action-button.md) | Action button | Grouped secondary actions, toolbar use |
| [pop-up-buttons.md](references/pop-up-buttons.md) | Pop-up buttons | Mutually exclusive choice selection |
| [pull-down-buttons.md](references/pull-down-buttons.md) | Pull-down buttons | Action lists, no current selection |
| [disclosure-controls.md](references/disclosure-controls.md) | Disclosure controls | Progressive disclosure, show/hide |

#### Imported: Questions to Ask

1. Which platforms?
2. Primary or secondary action?
3. How many actions need to be available?
4. macOS menu bar app?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
