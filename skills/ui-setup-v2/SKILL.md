---
name: ui-setup-v2
description: "UI Setup workflow skill. Use this skill when the user needs Interactive StyleSeed setup wizard for choosing app type, brand color, visual style, typography, and the first screen scaffold and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: design
tags: ["ui", "design-system", "setup", "frontend", "styleseed", "ui-setup-v2", "ui-setup", "interactive"]
complexity: advanced
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "bitjaru"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# UI Setup

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ui-setup` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# UI Setup

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Output, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you are starting a new app with the StyleSeed Toss seed
- Use when you copied the seed into an existing project and need to personalize it
- Use when you want the AI to ask one design decision at a time instead of guessing
- Use when you need a first page scaffold after selecting colors, font, and app type
- Use when the request clearly matches the imported source intent: Interactive StyleSeed setup wizard for choosing app type, brand color, visual style, typography, and the first screen scaffold.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

#### Imported: Overview

Part of [StyleSeed](https://github.com/bitjaru/styleseed), this setup wizard turns a raw project into a design-system-guided workspace. It collects the minimum brand and product context needed to configure tokens, pick a visual direction, and generate an initial page without drifting into generic UI.

#### Imported: How It Works

### Step 1: Ask One Question at a Time

Do not front-load the full questionnaire. Ask a single question, wait for the answer, store it, then continue.

### Step 2: Capture the App Type

Identify the product shape before touching tokens or layout recipes.

Suggested buckets:
- SaaS dashboard
- E-commerce
- Fintech
- Social or content
- Productivity or internal tool
- Other with a short freeform description

Use the answer to choose the page composition pattern and the type of first screen to scaffold.

### Step 3: Choose the Brand Color

Offer a few safe defaults plus a custom hex option. Once selected:
- update the light theme brand token
- update the dark theme brand token with a lighter accessible variant
- keep all other colors semantic rather than hardcoding the brand everywhere

If the project uses the StyleSeed Toss seed, the main target is `css/theme.css`.

### Step 4: Offer an Optional Visual Reference

Ask whether the user wants to borrow the feel of an established brand or design language. Good examples include Stripe, Linear, Vercel, Notion, Spotify, Supabase, and Airbnb.

Use the reference to influence density, tone, and composition, not to clone assets or trademarks.

### Step 5: Pick Typography

Confirm the font direction:
- keep the default stack
- swap to a preferred font if already installed or available
- preserve hierarchy rules for display, heading, body, and caption text

If the seed is present, update the font-related files rather than scattering overrides across components.

### Step 6: Generate the First Screen

Ask for:
- app name
- first page or screen name
- a one-sentence purpose for that page

Then scaffold the page using the seed's page shell, top bar, navigation, spacing scale, and card structure.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ui-setup-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/ui-setup-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/ui-setup-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @ui-setup-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the interaction conversational, but deterministic
- Make brand color changes through tokens, not component-by-component edits
- Use an inspiration brand as a reference, not as a permission slip to copy
- Prefer semantic tokens and reusable patterns over page-specific CSS
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Keep the interaction conversational, but deterministic
- Make brand color changes through tokens, not component-by-component edits
- Use an inspiration brand as a reference, not as a permission slip to copy
- Prefer semantic tokens and reusable patterns over page-specific CSS

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ui-setup`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Additional Resources

- [StyleSeed repository](https://github.com/bitjaru/styleseed)
- [StyleSeed Toss seed](https://github.com/bitjaru/styleseed/tree/main/seeds/toss)
- [Source skill](https://github.com/bitjaru/styleseed/blob/main/seeds/toss/.claude/skills/ui-setup/SKILL.md)

#### Imported: Output

Return:
1. The captured setup decisions
2. The files or tokens updated
3. The first page or scaffold created
4. Any follow-up recommendations for components, patterns, accessibility, or copy

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
