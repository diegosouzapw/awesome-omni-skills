---
name: expo-cicd-workflows
description: "EAS Workflows Skill workflow skill. Use this skill when the user needs Helps understand and write EAS workflow YAML files for Expo projects. Use this skill when the user asks about CI/CD or workflows in an Expo or EAS context, mentions .eas/workflows/, or wants help with EAS build pipelines or deployment automation and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["expo-cicd-workflows", "helps", "understand", "and", "write", "eas", "yaml", "files"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-22"
---

# EAS Workflows Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/expo-cicd-workflows` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# EAS Workflows Skill Help developers write and edit EAS CI/CD workflow YAML files.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Top-Level Structure, Expressions, Validation, Answering Questions, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to create, edit, or validate .eas/workflows/*.yml files for an Expo project.
- The task involves EAS build pipelines, deployment automation, workflow triggers, or Expo CI/CD configuration.
- You need schema-backed workflow guidance rather than relying on stale memorized syntax.
- Use when the request clearly matches the imported source intent: Helps understand and write EAS workflow YAML files for Expo projects. Use this skill when the user asks about CI/CD or workflows in an Expo or EAS context, mentions .eas/workflows/, or wants help with EAS build....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Fetch the schema to get current job types, parameters, and allowed values
2. Validate that required fields are present for each job type
3. Verify job references in needs and after exist in the workflow
4. Check that expressions reference valid contexts and outputs
5. Ensure if conditions respect the schema's length constraints
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Workflow File Location

Workflows live in `.eas/workflows/*.yml` (or `.yaml`).

#### Imported: Generating Workflows

When generating or editing workflows:

1. Fetch the schema to get current job types, parameters, and allowed values
2. Validate that required fields are present for each job type
3. Verify job references in `needs` and `after` exist in the workflow
4. Check that expressions reference valid contexts and outputs
5. Ensure `if` conditions respect the schema's length constraints

#### Imported: Top-Level Structure

A workflow file has these top-level keys:

- `name` — Display name for the workflow
- `on` — Triggers that start the workflow (at least one required)
- `jobs` — Job definitions (required)
- `defaults` — Shared defaults for all jobs
- `concurrency` — Control parallel workflow runs

Consult the schema for the full specification of each section.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @expo-cicd-workflows to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @expo-cicd-workflows against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @expo-cicd-workflows for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @expo-cicd-workflows using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/expo-cicd-workflows`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Documentation

Fetch these resources before generating or validating workflow files. Use the fetch script (implemented using Node.js) in this skill's `scripts/` directory; it caches responses using ETags for efficiency:

```bash
# Fetch resources
node {baseDir}/scripts/fetch.js <url>
```

1. **JSON Schema** — https://api.expo.dev/v2/workflows/schema
   - It is NECESSARY to fetch this schema
   - Source of truth for validation
   - All job types and their required/optional parameters
   - Trigger types and configurations
   - Runner types, VM images, and all enums

2. **Syntax Documentation** — https://raw.githubusercontent.com/expo/expo/refs/heads/main/docs/pages/eas/workflows/syntax.mdx
   - Overview of workflow YAML syntax
   - Examples and English explanations
   - Expression syntax and contexts

3. **Pre-packaged Jobs** — https://raw.githubusercontent.com/expo/expo/refs/heads/main/docs/pages/eas/workflows/pre-packaged-jobs.mdx
   - Documentation for supported pre-packaged job types
   - Job-specific parameters and outputs

Do not rely on memorized values; these resources evolve as new features are added.

#### Imported: Expressions

Use `${{ }}` syntax for dynamic values. The schema defines available contexts:

- `github.*` — GitHub repository and event information
- `inputs.*` — Values from `workflow_dispatch` inputs
- `needs.*` — Outputs and status from dependent jobs
- `jobs.*` — Job outputs (alternative syntax)
- `steps.*` — Step outputs within custom jobs
- `workflow.*` — Workflow metadata

#### Imported: Validation

After generating or editing a workflow file, validate it against the schema:

```sh
# Install dependencies if missing
[ -d "{baseDir}/scripts/node_modules" ] || npm install --prefix {baseDir}/scripts

node {baseDir}/scripts/validate.js <workflow.yml> [workflow2.yml ...]
```

The validator fetches the latest schema and checks the YAML structure. Fix any reported errors before considering the workflow complete.

#### Imported: Answering Questions

When users ask about available options (job types, triggers, runner types, etc.), fetch the schema and derive the answer from it rather than relying on potentially outdated information.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
