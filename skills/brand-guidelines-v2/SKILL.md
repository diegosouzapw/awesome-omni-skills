---
name: brand-guidelines-v2
description: "Brand Guidelines workflow skill. Use this skill when the user needs Write copy following Sentry brand guidelines. Use when writing UI text, error messages, empty states, onboarding flows, 404 pages, documentation, marketing copy, or any user-facing content. Covers both Plain Speech (default) and Sentry Voice tones and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["brand-guidelines-v2", "brand-guidelines", "write", "copy", "following", "sentry", "brand", "guidelines"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Brand Guidelines

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/brand-guidelines` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Brand Guidelines Write user-facing copy following Sentry's brand guidelines.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Tone Selection, Plain Speech (Default), Sentry Voice, Anti-Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to write or rewrite user-facing copy in Sentry's voice.
- The task involves UI text, onboarding, empty states, docs, marketing copy, or other branded content.
- You need guidance on when to use Plain Speech versus Sentry Voice.
- Use when the request clearly matches the imported source intent: Write copy following Sentry brand guidelines. Use when writing UI text, error messages, empty states, onboarding flows, 404 pages, documentation, marketing copy, or any user-facing content. Covers both Plain Speech....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

#### Imported: Tone Selection

Choose the appropriate tone based on context:

| Use Plain Speech | Use Sentry Voice |
|------------------|------------------|
| Product UI (buttons, labels, forms) | 404 pages |
| Documentation | Empty states |
| Error messages | Onboarding flows |
| Settings pages | Loading states |
| Transactional emails | "What's New" announcements |
| Help text | Marketing copy |

**Default to Plain Speech** unless the context specifically calls for personality.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @brand-guidelines-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/brand-guidelines-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/brand-guidelines-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @brand-guidelines-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Dash Usage

| Type | Use | Example |
|------|-----|---------|
| Hyphen (-) | Compound words, ranges | "real-time", "1-10" |
| En-dash (--) | Ranges, relationships | "2023--2024", "parent--child" |
| Em-dash (---) | Interruption, emphasis | "Errors---even small ones---matter" |

In most UI contexts, use hyphens. Reserve en-dashes for date ranges and em-dashes for longer prose.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use American English spelling (color, not colour)
- Use Title Case for headings and page titles
- Use Sentence case for body text, buttons, and labels
- No exclamation marks in UI text (exception: celebratory moments)
- No periods in short UI labels or button text
- Use periods in complete sentences and help text
- No ALL CAPS except for acronyms (API, SDK, URL)

### Imported Operating Notes

#### Imported: General Rules

### Spelling and Grammar

- Use **American English** spelling (color, not colour)
- Use **Title Case** for headings and page titles
- Use **Sentence case** for body text, buttons, and labels

### Punctuation

- **No exclamation marks** in UI text (exception: celebratory moments)
- **No periods** in short UI labels or button text
- **Use periods** in complete sentences and help text
- **No ALL CAPS** except for acronyms (API, SDK, URL)

### Word Choices

| Avoid | Prefer |
|-------|--------|
| Please | (omit) |
| Sorry | (be specific about the problem) |
| Error occurred | Something went wrong |
| Invalid | (explain what's wrong) |
| Success! | (describe what happened) |
| Oops | (be specific) |

#### Imported: UI Element Guidelines

### Buttons

- Use action verbs: "Save", "Delete", "Create"
- Be specific: "Create Project" not just "Create"
- Max 2-3 words when possible
- No periods or exclamation marks

### Error Messages

1. Say what happened
2. Say why (if helpful)
3. Say what to do next

**Good:** "Could not save changes. Check your connection and try again."
**Bad:** "Error: Save failed."

### Empty States

1. Explain what would normally be here
2. Provide a clear action to populate the state
3. Sentry Voice is appropriate here

**Good:** "No projects yet. Create your first project to start tracking errors."

### Confirmation Dialogs

- Make the action clear in the title
- Explain consequences if destructive
- Use specific button labels ("Delete Project", not "OK")

### Tooltips and Help Text

- Keep under 2 sentences
- Explain the "why", not just the "what"
- Link to docs for complex topics

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/brand-guidelines`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: References

- [Sentry Voice Guidelines](https://develop.sentry.dev/frontend/sentry-voice/)
- [Sentry Frontend Handbook](https://develop.sentry.dev/frontend/)

#### Imported: Plain Speech (Default)

Plain Speech is clear, direct, and functional. Use it for most UI elements.

### Rules

1. **Be concise** - Use the fewest words needed
2. **Be direct** - Tell users what to do, not what they can do
3. **Use active voice** - "Save your changes" not "Your changes will be saved"
4. **Avoid jargon** - Use simple words users understand
5. **Be specific** - "3 errors found" not "Some errors found"

### Examples

| Instead of | Write |
|------------|-------|
| "Click here to save your changes" | "Save" |
| "You can filter results by date" | "Filter by date" |
| "An error has occurred" | "Something went wrong" |
| "Please enter a valid email address" | "Enter a valid email" |
| "Are you sure you want to delete?" | "Delete this item?" |

#### Imported: Sentry Voice

Sentry Voice adds personality in appropriate moments. It's empathetic, self-aware, and occasionally snarky.

### Principles

1. **Empathetic snark** - Direct frustration at the situation, never the user
2. **Self-aware** - Acknowledge the absurdity of software
3. **Fun but functional** - Personality should enhance, not obscure meaning
4. **Earned moments** - Only use when users have time to appreciate it

### Examples

**404 Pages:**
> "This page doesn't exist. Maybe it never did. Maybe it was a dream. Either way, let's get you back on track."

**Empty States:**
> "No errors yet. Enjoy this moment of peace while it lasts."

**Onboarding:**
> "Let's get your first error. Don't worry, it's not as scary as it sounds."

**Loading States:**
> "Crunching the numbers..."
> "Fetching your data..."

### When NOT to Use Sentry Voice

- Error messages (users are frustrated)
- Settings pages (users are focused)
- Documentation (users need information)
- Billing/payment flows (users need trust)

#### Imported: Anti-Patterns

Avoid these common mistakes:

- **Robot speak:** "Item has been successfully deleted" -> "Deleted"
- **Passive voice:** "Changes were saved" -> "Changes saved"
- **Unnecessary words:** "In order to" -> "To"
- **Hedging:** "This might cause..." -> "This will cause..."
- **Double negatives:** "Not unlike..." -> "Similar to..."
- **Marketing speak in UI:** "Supercharge your workflow" -> "Speed up your workflow"

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
