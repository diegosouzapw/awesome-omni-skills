---
name: render-automation
description: "Render Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Render tasks via Rube MCP (Composio): services, deployments, projects. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["render-automation", "automate", "render", "tasks", "via", "rube", "mcp", "composio"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Render Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/render-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Render Automation via Rube MCP Automate Render cloud platform operations through Composio's Render toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Render tasks via Rube MCP (Composio): services, deployments, projects. Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit render
3. If connection is not ACTIVE, follow the returned auth link to complete Render authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. RENDERLISTSERVICES - List all services with optional filters [Required]
6. name: Filter services by name substring
7. type: Filter by service type ('webservice', 'staticsite', 'privateservice', 'backgroundworker', 'cron_job')

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `render`
3. If connection is not ACTIVE, follow the returned auth link to complete Render authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Browse Services

**When to use**: User wants to find or inspect Render services (web services, static sites, workers, cron jobs)

**Tool sequence**:
1. `RENDER_LIST_SERVICES` - List all services with optional filters [Required]

**Key parameters**:
- `name`: Filter services by name substring
- `type`: Filter by service type ('web_service', 'static_site', 'private_service', 'background_worker', 'cron_job')
- `limit`: Maximum results per page (default 20, max 100)
- `cursor`: Pagination cursor from previous response

**Pitfalls**:
- Service types must match exact enum values: 'web_service', 'static_site', 'private_service', 'background_worker', 'cron_job'
- Pagination uses cursor-based approach; follow `cursor` until absent
- Name filter is substring-based, not exact match
- Service IDs follow the format 'srv-xxxxxxxxxxxx'
- Default limit is 20; set higher for comprehensive listing

### 2. Trigger Deployments

**When to use**: User wants to manually deploy or redeploy a service

**Tool sequence**:
1. `RENDER_LIST_SERVICES` - Find the service to deploy [Prerequisite]
2. `RENDER_TRIGGER_DEPLOY` - Trigger a new deployment [Required]
3. `RENDER_RETRIEVE_DEPLOY` - Monitor deployment progress [Optional]

**Key parameters**:
- For TRIGGER_DEPLOY:
  - `serviceId`: Service ID to deploy (required, format: 'srv-xxxxxxxxxxxx')
  - `clearCache`: Set `true` to clear build cache before deploying
- For RETRIEVE_DEPLOY:
  - `serviceId`: Service ID
  - `deployId`: Deploy ID from trigger response (format: 'dep-xxxxxxxxxxxx')

**Pitfalls**:
- `serviceId` is required; resolve via LIST_SERVICES first
- Service IDs start with 'srv-' prefix
- Deploy IDs start with 'dep-' prefix
- `clearCache: true` forces a clean build; takes longer but resolves cache-related issues
- Deployment is asynchronous; use RETRIEVE_DEPLOY to poll status
- Triggering a deploy while another is in progress may queue the new one

### 3. Monitor Deployment Status

**When to use**: User wants to check the progress or result of a deployment

**Tool sequence**:
1. `RENDER_RETRIEVE_DEPLOY` - Get deployment details and status [Required]

**Key parameters**:
- `serviceId`: Service ID (required)
- `deployId`: Deployment ID (required)
- Response includes `status`, `createdAt`, `updatedAt`, `finishedAt`, `commit`

**Pitfalls**:
- Both `serviceId` and `deployId` are required
- Deploy statuses include: 'created', 'build_in_progress', 'update_in_progress', 'live', 'deactivated', 'build_failed', 'update_failed', 'canceled'
- 'live' indicates successful deployment
- 'build_failed' or 'update_failed' indicate deployment errors
- Poll at reasonable intervals (10-30 seconds) to avoid rate limits

### 4. Manage Projects

**When to use**: User wants to list and organize Render projects

**Tool sequence**:
1. `RENDER_LIST_PROJECTS` - List all projects [Required]

**Key parameters**:
- `limit`: Maximum results per page (max 100)
- `cursor`: Pagination cursor from previous response

**Pitfalls**:
- Projects group related services together
- Pagination uses cursor-based approach
- Project IDs are used for organizational purposes
- Not all services may be assigned to a project

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Render connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `render`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @render-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @render-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @render-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @render-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/render-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@programmatic-seo` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@progressive-estimation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@progressive-web-app` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@project-development` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List services | RENDER_LIST_SERVICES | name, type, limit, cursor |
| Trigger deploy | RENDER_TRIGGER_DEPLOY | serviceId, clearCache |
| Get deploy status | RENDER_RETRIEVE_DEPLOY | serviceId, deployId |
| List projects | RENDER_LIST_PROJECTS | limit, cursor |

#### Imported: Common Patterns

### ID Resolution

**Service name -> Service ID**:
```
1. Call RENDER_LIST_SERVICES with name=service_name
2. Find service by name in results
3. Extract id (format: 'srv-xxxxxxxxxxxx')
```

**Deployment lookup**:
```
1. Store deployId from RENDER_TRIGGER_DEPLOY response
2. Call RENDER_RETRIEVE_DEPLOY with serviceId and deployId
3. Check status for completion
```

### Deploy and Monitor Pattern

```
1. RENDER_LIST_SERVICES -> find service by name -> get serviceId
2. RENDER_TRIGGER_DEPLOY with serviceId -> get deployId
3. Loop: RENDER_RETRIEVE_DEPLOY with serviceId + deployId
4. Check status: 'live' = success, 'build_failed'/'update_failed' = error
5. Continue polling until terminal state reached
```

### Pagination

- Use `cursor` from response for next page
- Continue until `cursor` is absent or results are empty
- Both LIST_SERVICES and LIST_PROJECTS use cursor-based pagination
- Set `limit` to max (100) for fewer pagination rounds

#### Imported: Known Pitfalls

**Service IDs**:
- Always prefixed with 'srv-' (e.g., 'srv-abcd1234efgh')
- Deploy IDs prefixed with 'dep-' (e.g., 'dep-d2mqkf9r0fns73bham1g')
- Always resolve service names to IDs via LIST_SERVICES

**Service Types**:
- Must use exact enum values when filtering
- Available types: web_service, static_site, private_service, background_worker, cron_job
- Different service types have different deployment behaviors

**Deployment Behavior**:
- Deployments are asynchronous; always poll for completion
- Clear cache deploys take longer but resolve stale cache issues
- Failed deploys do not roll back automatically; the previous version stays live
- Concurrent deploy triggers may be queued

**Rate Limits**:
- Render API has rate limits
- Avoid rapid polling; use 10-30 second intervals
- Bulk operations should be throttled

**Response Parsing**:
- Response data may be nested under `data` key
- Timestamps use ISO 8601 format
- Parse defensively with fallbacks for optional fields

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
