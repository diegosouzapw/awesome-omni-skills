---
name: sred-project-organizer-v2
description: "SRED Project Organization workflow skill. Use this skill when the user needs Take a list of projects and their related documentation, and organize them into the SRED format for submission and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["sred-project-organizer-v2", "sred-project-organizer", "take", "list", "projects", "and", "related", "documentation"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SRED Project Organization

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/sred-project-organizer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SRED Project Organization SRED expects projects to be presented in a particular format. Take the list of projects that have been worked on in the past year, and summarize them into the format expected by SRED, with the supporting evidence. Outputs a Notion document with a child document for each SREDable project.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: [Project Name].

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to turn a prior-year work summary into SRED-formatted project documents.
- The task involves classifying projects as SREDable, collecting evidence, and organizing output in Notion.
- You already have or are ready to generate the upstream work summary that this organizer depends on.
- Use when the request clearly matches the imported source intent: Take a list of projects and their related documentation, and organize them into the SRED format for submission.
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

1. The notion links to a valid document that roughly matches this format:
2. All the projects in the Work Summary have been classified as SREDable or not.
3. The project description should be no more than 100 words.
4. The project goals should be no more than 100 words.
5. What was a challenge or problem we did not have the answer to?
6. Is there prior art that we could use to base our problem solving on?
7. If not, why?

### Imported Workflow Notes

#### Imported: Step 1

Prompt the user for a link a Notion document, which is a Work Summary for the previous year produced by the `sred-work-summary` skill.

Ensure:
- The notion links to a valid document that roughly matches this format:

```markdown
# Projects

#### Imported: Step 2

For each project in the Work Summary, evaluate it against the description of a SRED project in `${CLAUDE_SKILL_ROOT}/references/SRED.md`. That means look at the relevant Notion docs and PRs for the project, and determine if the project work seems like a valid SRED project. Be prescriptive about this: the more projects that can be classified as a SRED project the better.

Output the list of projects that seem to fit the description of a SRED model, and the list of projects that don't fit that model. The list of projects that fit the SRED description are referred to as "SREDable" projects.

Ensure:
- All the projects in the Work Summary have been classified as SREDable or not.

#### Imported: Step 3

Ask the user whether the list of SREDable projects is correct. Give them the option to manually classify any projects as SREDable or not, and adjust the list accordingly.

#### Imported: Step 4

Create a private Notion document called "SRED Project Descriptions". Output the full link to this document.

#### Imported: Step 5

For each SREDable project, go through a series of steps.

*Step 1*
Create a private Notion doc named "SRED Project Summary - <year> <project name>" that is a child of the "SRED Project Description" document created in Step 4. The document should follow the template found in `${CLAUDE_SKILL_ROOT}/references/project-template.md`.

*Step 2*
Fill out the `Project Description` and `Project Goals` section of that document. Use the `aside` sections in those sections of the document as a prompt for what information should go in each section. Use all the information for each project gathered in the Work Summary. Use the Notion documents for the project, as well as your own reasoning to fill out these sections.

Ensure:
- The project description should be no more than 100 words.
- The project goals should be no more than 100 words.

*Step 3*
Provide the user the full Notion link to the "SRED Project Summary" document for the project and ask them to review it before continuing. Make any changes they ask for.

*Step 4*
Each project will have one or more Uncertainties. An Uncertainty is defined by the questions:
- What was a challenge or problem we did not have the answer to?
- Is there prior art that we could use to base our problem solving on?
- If not, why?

Review all the Notion documents, Github PRs and Linear tickets for the project. Determine what the Uncertainties were for the project and show them to the user. Ask the user whether these are correct or should be adjusted in some way.

Ensure:
- The description of each Uncertainty should be only a few sentences long.

*Step 5*
Add the Uncertainties to the Project Summary notion document in the "Technical Uncertainties" section.

Ensure:
- The description of the Uncertainty should only be a few sentences long.

*Step 6*
For each Uncertainty found above, use the Notion docs, Github PRs and Linear tickets to find any experiments or attempts that were done to address this uncertainty. Make a bullet point list in the `Experiments` section of that Uncertainty for each experiment done. Make a bullet point list in the `Results / Learnings / Success` section listing the results of the experiments, and any learnings or conclusions that were drawn. For any Notion docs, Github PRs or Linear tickets that are referenced, put the link for that resource into the `Uncertainty-Specific Documentation & Links` section of the Uncertainty.

Ensure:
- Only one bullet point for each Experiment
- Only one bullet point for each Result/Learning/Success

*Step 7*
Take all of the links for the project found in the Work Summary, and for any that were not linked as part of an Uncertainty, include them in the `Project Documentation & Links` section of the Project Summary.

Ensure:
- Provide a list of all the specific links, not a summary or a general link for Github notifications.
- Check that every link is directly related to the project and/or its uncertainties.

*Step 8*
Provide the user with the link to the Project Summary document again, and ask the user to review it before moving on to the next SREDable Project. Remind the user to fill out the Participants section of the document.

#### Imported: Step 6

Provide a link to the "SRED Project Descriptions" notion document.

#### Imported: [Project Name]

*Summary*: [X] PRs, [X] Notion docs, [X] Linear tickets

### Pull Requests [X]
*[repository name]
[Links to all the PRs]
- [link] - [Merge date]

### Notion Docs [X]
[Links to all the Notion docs]
- [link] - [Creation date]

### Linear Tickets [X]
- [link] - [Creation date]
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sred-project-organizer-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/sred-project-organizer-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/sred-project-organizer-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @sred-project-organizer-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

Example work summary: https://www.notion.so/sentry/SRED-Work-Summary-2026-30a8b10e4b5d81f5bc8df3553da55220

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/sred-project-organizer`, fails to mention provenance, or does not use the support pack at all.
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

Summary of what constitutes a project and how it should be organized: `${CLAUDE_SKILL_ROOT}/references/SRED.md`
Notion Template of the summary for a specific project: `${CLAUDE_SKILL_ROOT}/references/project-template.md`

#### Imported: Resources

Full documentation on the SRED program: https://www.canada.ca/en/revenue-agency/services/scientific-research-experimental-development-tax-incentive-program.html
