---
name: vercel-automation-v2
description: "Vercel Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Vercel tasks via Rube MCP (Composio): manage deployments, domains, DNS, env vars, projects, and teams. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["vercel-automation-v2", "vercel-automation", "automate", "vercel", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Vercel Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/vercel-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Vercel Automation via Rube MCP Automate Vercel platform operations through Composio's Vercel toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Vercel tasks via Rube MCP (Composio): manage deployments, domains, DNS, env vars, projects, and teams. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit vercel
3. If connection is not ACTIVE, follow the returned auth link to complete Vercel OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. VERCELLISTALLDEPLOYMENTS or VERCELGET_DEPLOYMENTS - List deployments with filters [Required]
6. VERCELGETDEPLOYMENT or VERCELGETDEPLOYMENT_DETAILS - Get specific deployment info [Optional]
7. VERCELGETDEPLOYMENTLOGS or VERCELGETRUNTIMELOGS - View build/runtime logs [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `vercel`
3. If connection is not ACTIVE, follow the returned auth link to complete Vercel OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Monitor and Inspect Deployments

**When to use**: User wants to list, inspect, or debug deployments

**Tool sequence**:
1. `VERCEL_LIST_ALL_DEPLOYMENTS` or `VERCEL_GET_DEPLOYMENTS` - List deployments with filters [Required]
2. `VERCEL_GET_DEPLOYMENT` or `VERCEL_GET_DEPLOYMENT_DETAILS` - Get specific deployment info [Optional]
3. `VERCEL_GET_DEPLOYMENT_LOGS` or `VERCEL_GET_RUNTIME_LOGS` - View build/runtime logs [Optional]
4. `VERCEL_GET_DEPLOYMENT_EVENTS` - Get deployment event timeline [Optional]
5. `VERCEL_LIST_DEPLOYMENT_CHECKS` - View deployment check results [Optional]

**Key parameters**:
- `projectId`: Filter deployments by project
- `state`: Filter by deployment state (e.g., 'READY', 'ERROR', 'BUILDING')
- `limit`: Number of deployments to return
- `target`: Filter by environment ('production', 'preview')
- `deploymentId` or `idOrUrl`: Specific deployment identifier

**Pitfalls**:
- Deployment IDs and URLs are both accepted as identifiers in most endpoints
- Build logs and runtime logs are separate; use the appropriate tool
- `VERCEL_GET_DEPLOYMENT_LOGS` returns build logs; `VERCEL_GET_RUNTIME_LOGS` returns serverless function logs
- Deployment events include status transitions and are useful for debugging timing issues

### 2. Create and Manage Deployments

**When to use**: User wants to trigger a new deployment

**Tool sequence**:
1. `VERCEL_LIST_PROJECTS` - Find the target project [Prerequisite]
2. `VERCEL_CREATE_NEW_DEPLOYMENT` - Trigger a new deployment [Required]
3. `VERCEL_GET_DEPLOYMENT` - Monitor deployment progress [Optional]

**Key parameters**:
- `name`: Project name for the deployment
- `target`: Deployment target ('production' or 'preview')
- `gitSource`: Git repository source with ref/branch info
- `files`: Array of file objects for file-based deployments

**Pitfalls**:
- Either `gitSource` or `files` must be provided, not both
- Git-based deployments require proper repository integration
- Production deployments update the production domain alias automatically
- Deployment creation is asynchronous; poll with GET_DEPLOYMENT for status

### 3. Manage Environment Variables

**When to use**: User wants to add, list, or remove environment variables for a project

**Tool sequence**:
1. `VERCEL_LIST_PROJECTS` - Find the project ID [Prerequisite]
2. `VERCEL_LIST_ENV_VARIABLES` - List existing env vars [Required]
3. `VERCEL_ADD_ENVIRONMENT_VARIABLE` - Add a new env var [Optional]
4. `VERCEL_DELETE_ENVIRONMENT_VARIABLE` - Remove an env var [Optional]

**Key parameters**:
- `projectId`: Target project identifier
- `key`: Environment variable name
- `value`: Environment variable value
- `target`: Array of environments ('production', 'preview', 'development')
- `type`: Variable type ('plain', 'secret', 'encrypted', 'sensitive')

**Pitfalls**:
- Environment variable names must be unique per target environment
- `type: 'secret'` variables cannot be read back after creation; only the ID is returned
- Deleting an env var requires both `projectId` and the env var `id` (not the key name)
- Changes require a new deployment to take effect

### 4. Manage Domains and DNS

**When to use**: User wants to configure custom domains or manage DNS records

**Tool sequence**:
1. `VERCEL_GET_DOMAIN` - Check domain status and configuration [Required]
2. `VERCEL_GET_DOMAIN_CONFIG` - Get DNS/SSL configuration details [Optional]
3. `VERCEL_LIST_PROJECT_DOMAINS` - List domains attached to a project [Optional]
4. `VERCEL_GET_DNS_RECORDS` - List DNS records for a domain [Optional]
5. `VERCEL_CREATE_DNS_RECORD` - Add a new DNS record [Optional]
6. `VERCEL_UPDATE_DNS_RECORD` - Modify an existing DNS record [Optional]

**Key parameters**:
- `domain`: Domain name (e.g., 'example.com')
- `name`: DNS record name/subdomain
- `type`: DNS record type ('A', 'AAAA', 'CNAME', 'MX', 'TXT', 'SRV')
- `value`: DNS record value
- `ttl`: Time-to-live in seconds

**Pitfalls**:
- Domain must be added to the Vercel account before DNS management
- SSL certificates are auto-provisioned but may take time for new domains
- CNAME records at the apex domain are not supported; use A records instead
- MX records require priority values

### 5. Manage Projects

**When to use**: User wants to list, inspect, or update project settings

**Tool sequence**:
1. `VERCEL_LIST_PROJECTS` - List all projects [Required]
2. `VERCEL_GET_PROJECT` - Get detailed project information [Optional]
3. `VERCEL_UPDATE_PROJECT` - Modify project settings [Optional]

**Key parameters**:
- `idOrName`: Project ID or name for lookup
- `name`: Project name for updates
- `framework`: Framework preset (e.g., 'nextjs', 'vite', 'remix')
- `buildCommand`: Custom build command override
- `rootDirectory`: Root directory if not repo root

**Pitfalls**:
- Project names are globally unique within a team/account
- Changing framework settings affects subsequent deployments
- `rootDirectory` is relative to the repository root

### 6. Team Management

**When to use**: User wants to view team info or list team members

**Tool sequence**:
1. `VERCEL_LIST_TEAMS` - List all teams the user belongs to [Required]
2. `VERCEL_GET_TEAM` - Get detailed team information [Optional]
3. `VERCEL_GET_TEAM_MEMBERS` - List members of a specific team [Optional]

**Key parameters**:
- `teamId`: Team identifier
- `limit`: Number of results per page
- `role`: Filter members by role

**Pitfalls**:
- Team operations require appropriate team-level permissions
- Personal accounts have no teams; team endpoints return empty results
- Member roles include 'OWNER', 'MEMBER', 'DEVELOPER', 'VIEWER'

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Vercel connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `vercel`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @vercel-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @vercel-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @vercel-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @vercel-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/vercel-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List projects | VERCEL_LIST_PROJECTS | limit |
| Get project details | VERCEL_GET_PROJECT | idOrName |
| Update project | VERCEL_UPDATE_PROJECT | idOrName, name, framework |
| List deployments | VERCEL_LIST_ALL_DEPLOYMENTS | projectId, state, limit |
| Get deployment | VERCEL_GET_DEPLOYMENT | idOrUrl |
| Create deployment | VERCEL_CREATE_NEW_DEPLOYMENT | name, target, gitSource |
| Deployment logs | VERCEL_GET_DEPLOYMENT_LOGS | deploymentId |
| Runtime logs | VERCEL_GET_RUNTIME_LOGS | deploymentId |
| List env vars | VERCEL_LIST_ENV_VARIABLES | projectId |
| Add env var | VERCEL_ADD_ENVIRONMENT_VARIABLE | projectId, key, value, target |
| Delete env var | VERCEL_DELETE_ENVIRONMENT_VARIABLE | projectId, id |
| Get domain | VERCEL_GET_DOMAIN | domain |
| Get domain config | VERCEL_GET_DOMAIN_CONFIG | domain |
| List DNS records | VERCEL_GET_DNS_RECORDS | domain |
| Create DNS record | VERCEL_CREATE_DNS_RECORD | domain, name, type, value |
| Update DNS record | VERCEL_UPDATE_DNS_RECORD | domain, recordId |
| List project domains | VERCEL_LIST_PROJECT_DOMAINS | projectId |
| List teams | VERCEL_LIST_TEAMS | (none) |
| Get team | VERCEL_GET_TEAM | teamId |
| Get team members | VERCEL_GET_TEAM_MEMBERS | teamId, limit |

#### Imported: Common Patterns

### ID Resolution

**Project name -> Project ID**:
```
1. Call VERCEL_LIST_PROJECTS
2. Find project by name in response
3. Extract id field for subsequent operations
```

**Domain -> DNS Records**:
```
1. Call VERCEL_GET_DNS_RECORDS with domain name
2. Extract record IDs for update/delete operations
```

### Pagination

- Use `limit` parameter to control page size
- Check response for pagination tokens or `next` fields
- Continue fetching until no more pages are indicated

#### Imported: Known Pitfalls

**Deployment States**:
- States include: INITIALIZING, ANALYZING, BUILDING, DEPLOYING, READY, ERROR, CANCELED, QUEUED
- Only READY deployments are live and serving traffic
- ERROR deployments should be inspected via logs for failure details

**Environment Variables**:
- Secret type vars are write-only; values cannot be retrieved after creation
- Env vars are scoped to environments (production, preview, development)
- A redeployment is needed for env var changes to take effect

**Rate Limits**:
- Vercel API has rate limits per endpoint
- Implement backoff on 429 responses
- Batch operations where possible to reduce API calls

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
