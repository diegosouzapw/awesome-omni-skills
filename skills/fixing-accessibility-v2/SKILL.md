---
name: fixing-accessibility-v2
description: "fixing-accessibility workflow skill. Use this skill when the user needs Audit and fix HTML accessibility issues including ARIA labels, keyboard navigation, focus management, color contrast, and form errors. Use when adding interactive controls, forms, dialogs, or reviewing WCAG compliance and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: design
tags: ["fixing-accessibility-v2", "fixing-accessibility", "audit", "and", "fix", "html", "accessibility", "issues"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# fixing-accessibility

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/fixing-accessibility` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# fixing-accessibility Fix accessibility issues.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: how to use, common fixes, review guidance, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- adding or changing buttons, links, inputs, menus, dialogs, tabs, dropdowns
- building forms, validation, error states, helper text
- implementing keyboard shortcuts or custom interactions
- working on focus states, focus trapping, or modal behavior
- rendering icon-only controls
- adding hover-only interactions or hidden content

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

#### Imported: how to use

- `/fixing-accessibility`
  Apply these constraints to any UI work in this conversation.

- `/fixing-accessibility <file>`
  Review the file against all rules below and report:
  - violations (quote the exact line or snippet)
  - why it matters (one short sentence)
  - a concrete fix (code-level suggestion)

Do not rewrite large parts of the UI. Prefer minimal, targeted fixes.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @fixing-accessibility-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/fixing-accessibility-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/fixing-accessibility-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @fixing-accessibility-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- priority - category - impact
- 1 - accessible names - critical
- 2 - keyboard access - critical
- 3 - focus and dialogs - critical
- 4 - semantics - high
- 5 - forms and errors - high
- 6 - announcements - medium-high

### Imported Operating Notes

#### Imported: rule categories by priority

| priority | category | impact |
|----------|----------|--------|
| 1 | accessible names | critical |
| 2 | keyboard access | critical |
| 3 | focus and dialogs | critical |
| 4 | semantics | high |
| 5 | forms and errors | high |
| 6 | announcements | medium-high |
| 7 | contrast and states | medium |
| 8 | media and motion | low-medium |
| 9 | tool boundaries | critical |

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/fixing-accessibility`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
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

#### Imported: quick reference

### 1. accessible names (critical)

- every interactive control must have an accessible name
- icon-only buttons must have aria-label or aria-labelledby
- every input, select, and textarea must be labeled
- links must have meaningful text (no “click here”)
- decorative icons must be aria-hidden

### 2. keyboard access (critical)

- do not use div or span as buttons without full keyboard support
- all interactive elements must be reachable by Tab
- focus must be visible for keyboard users
- do not use tabindex greater than 0
- Escape must close dialogs or overlays when applicable

### 3. focus and dialogs (critical)

- modals must trap focus while open
- restore focus to the trigger on close
- set initial focus inside dialogs
- opening a dialog should not scroll the page unexpectedly

### 4. semantics (high)

- prefer native elements (button, a, input) over role-based hacks
- if a role is used, required aria attributes must be present
- lists must use ul or ol with li
- do not skip heading levels
- tables must use th for headers when applicable

### 5. forms and errors (high)

- errors must be linked to fields using aria-describedby
- required fields must be announced
- invalid fields must set aria-invalid
- helper text must be associated with inputs
- disabled submit actions must explain why

### 6. announcements (medium-high)

- critical form errors should use aria-live
- loading states should use aria-busy or status text
- toasts must not be the only way to convey critical information
- expandable controls must use aria-expanded and aria-controls

### 7. contrast and states (medium)

- ensure sufficient contrast for text and icons
- hover-only interactions must have keyboard equivalents
- disabled states must not rely on color alone
- do not remove focus outlines without a visible replacement

### 8. media and motion (low-medium)

- images must have correct alt text (meaningful or empty)
- videos with speech should provide captions when relevant
- respect prefers-reduced-motion for non-essential motion
- avoid autoplaying media with sound

### 9. tool boundaries (critical)

- prefer minimal changes, do not refactor unrelated code
- do not add aria when native semantics already solve the problem
- do not migrate UI libraries unless requested

#### Imported: common fixes

```html
<!-- icon-only button: add aria-label -->
<!-- before --> <button><svg>...</svg></button>
<!-- after -->  <button aria-label="Close"><svg aria-hidden="true">...</svg></button>

<!-- div as button: use native element -->
<!-- before --> <div onclick="save()">Save</div>
<!-- after -->  <button onclick="save()">Save</button>

<!-- form error: link with aria-describedby -->
<!-- before --> <input id="email" /> <span>Invalid email</span>
<!-- after -->  <input id="email" aria-describedby="email-err" aria-invalid="true" /> <span id="email-err">Invalid email</span>
```

#### Imported: review guidance

- fix critical issues first (names, keyboard, focus, tool boundaries)
- prefer native HTML before adding aria
- quote the exact snippet, state the failure, propose a small fix
- for complex widgets (menu, dialog, combobox), prefer established accessible primitives over custom behavior

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
