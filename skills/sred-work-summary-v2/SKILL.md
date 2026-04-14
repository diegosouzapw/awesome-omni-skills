---
name: sred-work-summary-v2
description: "SRED Work Summary workflow skill. Use this skill when the user needs Go back through the previous year of work and create a Notion doc that groups relevant links into projects that can then be documented as SRED projects and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["sred-work-summary-v2", "sred-work-summary", "back", "the", "previous", "year", "work", "and"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SRED Work Summary

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/sred-work-summary` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SRED Work Summary Collect all the Github PRs, Notion docs and Linear tickets a person completed in a given year. Group the links from all of those into projects. Put everything into a private Notion document and return a link to that document.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, [Project Name], Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to gather a year's worth of PRs, Notion docs, and Linear tickets into project groupings for SRED preparation.
- The task is to build the upstream Notion work summary before writing individual SRED project descriptions.
- You need a repeatable collection workflow across GitHub, Notion, and Linear for a fixed time window.
- Use when the request clearly matches the imported source intent: Go back through the previous year of work and create a Notion doc that groups relevant links into projects that can then be documented as SRED projects.
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

1. All the repositories listed are in the getsentry Github organization.
2. If the Work Summary already exists, stop execution.
3. All the Github PRs were created or merged in the time window and was opened by the user.
4. All the Notion docs were created in the time window and were created by the user.
5. All the Linear tickets were opened or completed in the time window and were assigned to the user when they were completed.
6. There is a link for all the Github PRs in the Work Summary
7. There is a link for all the Notion docs in the Work Summary

### Imported Workflow Notes

#### Imported: Process

### Step 1

```bash
# Get the current year
date +%Y
```

The output of this command is the current year.
The current year minus one is the previous year.

### Step 2

Collect all of the required information from the user:

*Github Username*: What is the github username of the user?

*Github Repositories*: Which Github repositories should be searched for PRs?

The user can either specify a comma separated list, or provide a directory that contains repositories. In the second case use this command in the specified directory:

```bash
# Find github repos
find . -maxdepth 2 -name ".git" -type d | sed 's/\/.git$//' | sort
```

Ensure:
- All the repositories listed are in the `getsentry` Github organization.

The output of this is hereafter referred to as the "user repos".

*Incidents*: Ask if the user wants to include incident documents.

The answer is either yes or no. If the answer is no, that will exclude certain documents from the search later on.

*Other Users*: Ask if there are any other users who might have created Notion documents.

This should be a comma separated list of names. Remember this as the "other users".

### Step 3

Create a private Notion document entitled "SRED Work Summary [current year]". This document will be referred to as the Work Summary.

If a document with this name already exists, notify the user to rename the existing document and stop executing.

Ensure:
- If the Work Summary already exists, stop execution.

### Step 4

The time window is Feb. 1 of the previous year until Jan. 31 of the current year
Find all Github PRs created by the given github username in the time window for the user repos.
If the user does not want to include incident documents, ignore any Github PRs with `INC-X`, `inc-X` in the title or description.
Use either the Github MCP or the `gh` command to do this.

Find all the Notion documents the user created in the time window.
If the user does not want to include incident documents, ignore any Notion Documents with `INC-XXXX` in the title.
Use the Notion MCP to do this.

Find all the Linear tickets the user was assigned in the time window.
If the user does not want to include incident documents, ignore any Linear tickets with `INC-XXXX` in the title.
Use the Linear MCP to do this.

Ensure:
- All the Github PRs were created or merged in the time window and was opened by the user.
- All the Notion docs were created in the time window and were created by the user.
- All the Linear tickets were opened or completed in the time window and were assigned to the user when they were completed.

### Step 5

For each of the Github PRs, Notion documents and Linear tickets found in Step 4, put a link into the private document created in Step 3.

Ensure:
- There is a link for all the Github PRs in the Work Summary
- There is a link for all the Notion docs in the Work Summary
- There is a link for all the Linear tickets in the Work Summary
- DO NOT truncate the lists of links. DO NOT use shorteners like "...and 75 more". Make sure that the full set of all Github PRs, Notion documents and Linear tickets is visible in the document.

### Step 6

Use your own intelligence to group all the Github, Notion and Linear ticket links in the Work Summary document into projects. The format of this document is shown below.

```markdown
# Projects

#### Imported: Prerequisites

Before starting make sure that Github, Notion and Linear can be accessed. Notion and Linear should be connected using an MCP. Github can be connected with an MCP, but if you have access to the `gh` CLI tool, you can use that instead.

If any of these can't be accessed, prompt the user to grant access before proceeding.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sred-work-summary-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/sred-work-summary-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/sred-work-summary-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @sred-work-summary-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/sred-work-summary`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resources

This is an example Working Summary document for the year 2025: https://www.notion.so/sentry/Work-Summary-Feb-2025-Jan-2026-3068b10e4b5d81d3a40cfa6ad3fe1078?source=copy_link

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

For Github PRs, use both the title of the PR and the description of the PR for grouping.
For Notion documents, use the full document for grouping.
For Linear tickets use the title of the ticket and the description of the ticket.

Ensure:
- All the links in the file are assigned to a project.
- The file follows the format specified above.
- DO NOT truncate the lists of links. DO NOT use shorteners like "...and 75 more". Make sure that the full set of all Github PRs, Notion documents and Linear tickets is visible in the document.

### Step 7

Search for notion documents created by the "other users". Take any that are relevant to the projects in the Work Summary and add links to those Notion documents into the Work Summary in the appropriate project.

### Step 8

Return a link to the Work Summary Notion doc to the user.

Ensure:
- The actual Notion document link is in the final output.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
