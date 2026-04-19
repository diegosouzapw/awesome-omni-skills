---
name: circleci-automation-v2
description: "CircleCI Automation via Rube MCP workflow skill. Use this skill when the user needs Automate CircleCI tasks via Rube MCP (Composio): trigger pipelines, monitor workflows/jobs, retrieve artifacts and test metadata. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["circleci-automation-v2", "circleci-automation", "automate", "circleci", "tasks", "via", "rube", "mcp"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# CircleCI Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/circleci-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# CircleCI Automation via Rube MCP Automate CircleCI CI/CD operations through Composio's CircleCI toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate CircleCI tasks via Rube MCP (Composio): trigger pipelines, monitor workflows/jobs, retrieve artifacts and test metadata. Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit circleci
3. If connection is not ACTIVE, follow the returned auth link to complete CircleCI authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. CIRCLECITRIGGERPIPELINE - Trigger a new pipeline on a project [Required]
6. CIRCLECILISTWORKFLOWSBYPIPELINE_ID - Monitor resulting workflows [Optional]
7. project_slug: Project identifier in format gh/org/repo or bb/org/repo

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `circleci`
3. If connection is not ACTIVE, follow the returned auth link to complete CircleCI authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Trigger a Pipeline

**When to use**: User wants to start a new CI/CD pipeline run

**Tool sequence**:
1. `CIRCLECI_TRIGGER_PIPELINE` - Trigger a new pipeline on a project [Required]
2. `CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID` - Monitor resulting workflows [Optional]

**Key parameters**:
- `project_slug`: Project identifier in format `gh/org/repo` or `bb/org/repo`
- `branch`: Git branch to run the pipeline on
- `tag`: Git tag to run the pipeline on (mutually exclusive with branch)
- `parameters`: Pipeline parameter key-value pairs

**Pitfalls**:
- `project_slug` format is `{vcs}/{org}/{repo}` (e.g., `gh/myorg/myrepo`)
- `branch` and `tag` are mutually exclusive; providing both causes an error
- Pipeline parameters must match those defined in `.circleci/config.yml`
- Triggering returns a pipeline ID; workflows start asynchronously

### 2. Monitor Pipelines and Workflows

**When to use**: User wants to check the status of pipelines or workflows

**Tool sequence**:
1. `CIRCLECI_LIST_PIPELINES_FOR_PROJECT` - List recent pipelines for a project [Required]
2. `CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID` - List workflows within a pipeline [Required]
3. `CIRCLECI_GET_PIPELINE_CONFIG` - View the pipeline configuration used [Optional]

**Key parameters**:
- `project_slug`: Project identifier in `{vcs}/{org}/{repo}` format
- `pipeline_id`: UUID of a specific pipeline
- `branch`: Filter pipelines by branch name
- `page_token`: Pagination cursor for next page of results

**Pitfalls**:
- Pipeline IDs are UUIDs, not numeric IDs
- Workflows inherit the pipeline ID; a single pipeline can have multiple workflows
- Workflow states include: success, running, not_run, failed, error, failing, on_hold, canceled, unauthorized
- `page_token` is returned in responses for pagination; continue until absent

### 3. Inspect Job Details

**When to use**: User wants to drill into a specific job's execution details

**Tool sequence**:
1. `CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID` - Find workflow containing the job [Prerequisite]
2. `CIRCLECI_GET_JOB_DETAILS` - Get detailed job information [Required]

**Key parameters**:
- `project_slug`: Project identifier
- `job_number`: Numeric job number (not UUID)

**Pitfalls**:
- Job numbers are integers, not UUIDs (unlike pipeline and workflow IDs)
- Job details include executor type, parallelism, start/stop times, and status
- Job statuses: success, running, not_run, failed, retried, timedout, infrastructure_fail, canceled

### 4. Retrieve Build Artifacts

**When to use**: User wants to download or list artifacts produced by a job

**Tool sequence**:
1. `CIRCLECI_GET_JOB_DETAILS` - Confirm job completed successfully [Prerequisite]
2. `CIRCLECI_GET_JOB_ARTIFACTS` - List all artifacts from the job [Required]

**Key parameters**:
- `project_slug`: Project identifier
- `job_number`: Numeric job number

**Pitfalls**:
- Artifacts are only available after job completion
- Each artifact has a `path` and `url` for download
- Artifact URLs may require authentication headers to download
- Large artifacts may have download size limits

### 5. Review Test Results

**When to use**: User wants to check test outcomes for a specific job

**Tool sequence**:
1. `CIRCLECI_GET_JOB_DETAILS` - Verify job ran tests [Prerequisite]
2. `CIRCLECI_GET_TEST_METADATA` - Retrieve test results and metadata [Required]

**Key parameters**:
- `project_slug`: Project identifier
- `job_number`: Numeric job number

**Pitfalls**:
- Test metadata requires the job to have uploaded test results (JUnit XML format)
- If no test results were uploaded, the response will be empty
- Test metadata includes classname, name, result, message, and run_time fields
- Failed tests include failure messages in the `message` field

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active CircleCI connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `circleci`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @circleci-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @circleci-automation-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @circleci-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @circleci-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/circleci-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@chrome-extension-developer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@churn-prevention-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cirq-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@citation-management-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| Trigger pipeline | CIRCLECI_TRIGGER_PIPELINE | project_slug, branch, parameters |
| List pipelines | CIRCLECI_LIST_PIPELINES_FOR_PROJECT | project_slug, branch |
| List workflows | CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID | pipeline_id |
| Get pipeline config | CIRCLECI_GET_PIPELINE_CONFIG | pipeline_id |
| Get job details | CIRCLECI_GET_JOB_DETAILS | project_slug, job_number |
| Get job artifacts | CIRCLECI_GET_JOB_ARTIFACTS | project_slug, job_number |
| Get test metadata | CIRCLECI_GET_TEST_METADATA | project_slug, job_number |

#### Imported: Common Patterns

### Project Slug Format

```
Format: {vcs_type}/{org_name}/{repo_name}
- GitHub:    gh/myorg/myrepo
- Bitbucket: bb/myorg/myrepo
```

### Pipeline -> Workflow -> Job Hierarchy

```
1. Call CIRCLECI_LIST_PIPELINES_FOR_PROJECT to get pipeline IDs
2. Call CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID with pipeline_id
3. Extract job numbers from workflow details
4. Call CIRCLECI_GET_JOB_DETAILS with job_number
```

### Pagination

- Check response for `next_page_token` field
- Pass token as `page_token` in next request
- Continue until `next_page_token` is absent or null

#### Imported: Known Pitfalls

**ID Formats**:
- Pipeline IDs: UUIDs (e.g., `5034460f-c7c4-4c43-9457-de07e2029e7b`)
- Workflow IDs: UUIDs
- Job numbers: Integers (e.g., `123`)
- Do NOT mix up UUIDs and integers between different endpoints

**Project Slugs**:
- Must include VCS prefix: `gh/` for GitHub, `bb/` for Bitbucket
- Organization and repo names are case-sensitive
- Incorrect slug format causes 404 errors

**Rate Limits**:
- CircleCI API has per-endpoint rate limits
- Implement exponential backoff on 429 responses
- Avoid rapid polling; use reasonable intervals (5-10 seconds)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
