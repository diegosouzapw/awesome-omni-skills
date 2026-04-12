---
name: hig-components-dialogs
description: "Apple HIG: Presentation Components workflow skill. Use this skill when the user needs Apple HIG guidance for presentation components including alerts, action sheets, popovers, sheets, and digit entry views and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-components-dialogs", "apple", "hig", "guidance", "for", "presentation", "components", "including"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Apple HIG: Presentation Components

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-components-dialogs` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Apple HIG: Presentation Components Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Questions to Ask.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple HIG guidance for presentation components including alerts, action sheets, popovers, sheets, and digit entry views.
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

1. **Recommended presentation type with rationale** and why alternatives are less suitable.
2. **Content guidelines** -- title, message, button labels per Apple's tone and brevity rules.
3. **Dismiss behavior** -- how the user dismisses and what happens (save, discard, cancel).
4. **Alternatives** -- when the scenario might not need a modal at all (inline feedback, undo, progressive disclosure).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-components-dialogs to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/hig-components-dialogs/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/hig-components-dialogs/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @hig-components-dialogs using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Alerts: sparingly, for critical situations. Errors needing attention, destructive action confirmations, or information requiring acknowledgment. They interrupt flow and demand a response.
- Sheets: focused tasks that maintain context. Slides in from the edge (or attaches to a window on macOS). Use for creating items, editing settings, multi-step forms.
- Popovers: non-modal on iPad and Mac. Appear next to the trigger element, dismissed by tapping outside. For additional information, options, or controls without taking over the screen.
- Action sheets: choosing among actions. Present when picking from multiple actions, especially if one is destructive. iPhone: slide up from bottom. iPad: appear as popovers.
- Minimize interruptions. Before reaching for a modal, consider inline presentation or making the action undoable instead.
- Concise, actionable alert text. Short descriptive title. Brief message body if needed. Button labels should be specific verbs ("Delete", "Save"), not "OK".
- Mark destructive actions clearly. Destructive button style (red text). Place destructive buttons where users are less likely to tap reflexively.

### Imported Operating Notes

#### Imported: Key Principles

1. **Alerts: sparingly, for critical situations.** Errors needing attention, destructive action confirmations, or information requiring acknowledgment. They interrupt flow and demand a response.

2. **Sheets: focused tasks that maintain context.** Slides in from the edge (or attaches to a window on macOS). Use for creating items, editing settings, multi-step forms.

3. **Popovers: non-modal on iPad and Mac.** Appear next to the trigger element, dismissed by tapping outside. For additional information, options, or controls without taking over the screen.

4. **Action sheets: choosing among actions.** Present when picking from multiple actions, especially if one is destructive. iPhone: slide up from bottom. iPad: appear as popovers.

5. **Minimize interruptions.** Before reaching for a modal, consider inline presentation or making the action undoable instead.

6. **Concise, actionable alert text.** Short descriptive title. Brief message body if needed. Button labels should be specific verbs ("Delete", "Save"), not "OK".

7. **Mark destructive actions clearly.** Destructive button style (red text). Place destructive buttons where users are less likely to tap reflexively.

8. **Provide a cancel option** for alerts and action sheets with multiple actions. On action sheets, cancel appears at the bottom, separated.

9. **Digit entry: focused and accessible.** Appropriately sized input fields, automatic advancement between digits, support for paste and autofill.

10. **Adapt presentation to platform.** The same interaction may use different components on iPhone, iPad, Mac, and visionOS.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-components-dialogs`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/action-sheets.md` |
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
| [alerts.md](references/alerts.md) | Alerts | Button ordering, title/message text, confirmation, destructive actions |
| [action-sheets.md](references/action-sheets.md) | Action sheets | Multiple actions, cancel option, destructive handling |
| [popovers.md](references/popovers.md) | Popovers | Non-modal, dismiss on tap outside, iPad/Mac |
| [sheets.md](references/sheets.md) | Sheets | Modal task, context preservation |
| [digit-entry-views.md](references/digit-entry-views.md) | Digit entry | PIN input, autofill, auto-advance |

#### Imported: Questions to Ask

1. What information or action does the presentation need?
2. Blocking or non-blocking?
3. Which platforms?
4. How often does this appear?
