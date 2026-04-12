---
name: hig-components-controls
description: "Apple HIG: Selection and Input Controls workflow skill. Use this skill when the user needs Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-components-controls", "check", "for", "claude", "apple-design-context", "asking", "questions", "use"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Apple HIG: Selection and Input Controls

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-components-controls` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Apple HIG: Selection and Input Controls Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Questions to Ask.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: Output Format

1. **Control recommendation with rationale** and why alternatives are less suitable.
2. **State management** -- how the control communicates current state and whether changes apply immediately or on confirmation.
3. **Validation approach** -- when to show errors and how to communicate rules.
4. **Accessibility** -- labels, traits, hints for VoiceOver.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-controls to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/hig-components-controls/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/hig-components-controls/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @hig-components-controls using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-components-controls`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/combo-boxes.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
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
