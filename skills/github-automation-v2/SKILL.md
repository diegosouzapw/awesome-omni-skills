---
name: github-automation-v2
description: "GitHub Automation via Rube MCP workflow skill. Use this skill when the user needs Automate GitHub repositories, issues, pull requests, branches, CI/CD, and permissions via Rube MCP (Composio). Manage code workflows, review PRs, search code, and handle deployments programmatically and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["github-automation-v2", "github-automation", "automate", "github", "repositories", "issues", "pull", "requests"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# GitHub Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/github-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# GitHub Automation via Rube MCP Automate GitHub repository management, issue tracking, pull request workflows, branch operations, and CI/CD through Composio's GitHub toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate GitHub repositories, issues, pull requests, branches, CI/CD, and permissions via Rube MCP (Composio). Manage code workflows, review PRs, search code, and handle deployments programmatically.
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
2. Call RUBEMANAGECONNECTIONS with toolkit github
3. If connection is not ACTIVE, follow the returned auth link to complete GitHub OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. GITHUBLISTREPOSITORIESFORTHEAUTHENTICATEDUSER - Find target repo if unknown [Prerequisite]
6. GITHUBLISTREPOSITORY_ISSUES - List existing issues (includes PRs) [Required]
7. GITHUBCREATEAN_ISSUE - Create a new issue [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `github`
3. If connection is not ACTIVE, follow the returned auth link to complete GitHub OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Issues

**When to use**: User wants to create, list, or manage GitHub issues

**Tool sequence**:
1. `GITHUB_LIST_REPOSITORIES_FOR_THE_AUTHENTICATED_USER` - Find target repo if unknown [Prerequisite]
2. `GITHUB_LIST_REPOSITORY_ISSUES` - List existing issues (includes PRs) [Required]
3. `GITHUB_CREATE_AN_ISSUE` - Create a new issue [Required]
4. `GITHUB_CREATE_AN_ISSUE_COMMENT` - Add comments to an issue [Optional]
5. `GITHUB_SEARCH_ISSUES_AND_PULL_REQUESTS` - Search across repos by keyword [Optional]

**Key parameters**:
- `owner`: Repository owner (username or org), case-insensitive
- `repo`: Repository name without .git extension
- `title`: Issue title (required for creation)
- `body`: Issue description (supports Markdown)
- `labels`: Array of label names
- `assignees`: Array of GitHub usernames
- `state`: 'open', 'closed', or 'all' for filtering

**Pitfalls**:
- `GITHUB_LIST_REPOSITORY_ISSUES` returns both issues AND pull requests; check `pull_request` field to distinguish
- Only users with push access can set assignees, labels, and milestones; they are silently dropped otherwise
- Pagination: `per_page` max 100; iterate pages until empty

### 2. Manage Pull Requests

**When to use**: User wants to create, review, or merge pull requests

**Tool sequence**:
1. `GITHUB_FIND_PULL_REQUESTS` - Search and filter PRs [Required]
2. `GITHUB_GET_A_PULL_REQUEST` - Get detailed PR info including mergeable status [Required]
3. `GITHUB_LIST_PULL_REQUESTS_FILES` - Review changed files [Optional]
4. `GITHUB_CREATE_A_PULL_REQUEST` - Create a new PR [Required]
5. `GITHUB_CREATE_AN_ISSUE_COMMENT` - Post review comments [Optional]
6. `GITHUB_LIST_CHECK_RUNS_FOR_A_REF` - Verify CI status before merge [Optional]
7. `GITHUB_MERGE_A_PULL_REQUEST` - Merge after explicit user approval [Required]

**Key parameters**:
- `head`: Source branch with changes (must exist; for cross-repo: 'username:branch')
- `base`: Target branch to merge into (e.g., 'main')
- `title`: PR title (required unless `issue` number provided)
- `merge_method`: 'merge', 'squash', or 'rebase'
- `state`: 'open', 'closed', or 'all'

**Pitfalls**:
- `GITHUB_CREATE_A_PULL_REQUEST` fails with 422 if base/head are invalid, identical, or already merged
- `GITHUB_MERGE_A_PULL_REQUEST` can be rejected if PR is draft, closed, or branch protection applies
- Always verify mergeable status with `GITHUB_GET_A_PULL_REQUEST` immediately before merging
- Require explicit user confirmation before calling MERGE

### 3. Manage Repositories and Branches

**When to use**: User wants to create repos, manage branches, or update repo settings

**Tool sequence**:
1. `GITHUB_LIST_REPOSITORIES_FOR_THE_AUTHENTICATED_USER` - List user's repos [Required]
2. `GITHUB_GET_A_REPOSITORY` - Get detailed repo info [Optional]
3. `GITHUB_CREATE_A_REPOSITORY_FOR_THE_AUTHENTICATED_USER` - Create personal repo [Required]
4. `GITHUB_CREATE_AN_ORGANIZATION_REPOSITORY` - Create org repo [Alternative]
5. `GITHUB_LIST_BRANCHES` - List branches [Required]
6. `GITHUB_CREATE_A_REFERENCE` - Create new branch from SHA [Required]
7. `GITHUB_UPDATE_A_REPOSITORY` - Update repo settings [Optional]

**Key parameters**:
- `name`: Repository name
- `private`: Boolean for visibility
- `ref`: Full reference path (e.g., 'refs/heads/new-branch')
- `sha`: Commit SHA to point the new reference to
- `default_branch`: Default branch name

**Pitfalls**:
- `GITHUB_CREATE_A_REFERENCE` only creates NEW references; use `GITHUB_UPDATE_A_REFERENCE` for existing ones
- `ref` must start with 'refs/' and contain at least two slashes
- `GITHUB_LIST_BRANCHES` paginates via `page`/`per_page`; iterate until empty page
- `GITHUB_DELETE_A_REPOSITORY` is permanent and irreversible; requires admin privileges

### 4. Search Code and Commits

**When to use**: User wants to find code, files, or commits across repositories

**Tool sequence**:
1. `GITHUB_SEARCH_CODE` - Search file contents and paths [Required]
2. `GITHUB_SEARCH_CODE_ALL_PAGES` - Multi-page code search [Alternative]
3. `GITHUB_SEARCH_COMMITS_BY_AUTHOR` - Search commits by author/date/org [Required]
4. `GITHUB_LIST_COMMITS` - List commits for a specific repo [Alternative]
5. `GITHUB_GET_A_COMMIT` - Get detailed commit info [Optional]
6. `GITHUB_GET_REPOSITORY_CONTENT` - Get file content [Optional]

**Key parameters**:
- `q`: Search query with qualifiers (`language:python`, `repo:owner/repo`, `extension:js`)
- `owner`/`repo`: For repo-specific commit listing
- `author`: Filter by commit author
- `since`/`until`: ISO 8601 date range for commits

**Pitfalls**:
- Code search only indexes files under 384KB on default branch
- Maximum 1000 results returned from code search
- `GITHUB_SEARCH_COMMITS_BY_AUTHOR` requires keywords in addition to qualifiers; qualifier-only queries are not allowed
- `GITHUB_LIST_COMMITS` returns 409 on empty repos

### 5. Manage CI/CD and Deployments

**When to use**: User wants to view workflows, check CI status, or manage deployments

**Tool sequence**:
1. `GITHUB_LIST_REPOSITORY_WORKFLOWS` - List GitHub Actions workflows [Required]
2. `GITHUB_GET_A_WORKFLOW` - Get workflow details by ID or filename [Optional]
3. `GITHUB_CREATE_A_WORKFLOW_DISPATCH_EVENT` - Manually trigger a workflow [Required]
4. `GITHUB_LIST_CHECK_RUNS_FOR_A_REF` - Check CI status for a commit/branch [Required]
5. `GITHUB_LIST_DEPLOYMENTS` - List deployments [Optional]
6. `GITHUB_GET_A_DEPLOYMENT_STATUS` - Get deployment status [Optional]

**Key parameters**:
- `workflow_id`: Numeric ID or filename (e.g., 'ci.yml')
- `ref`: Git reference (branch/tag) for workflow dispatch
- `inputs`: JSON string of workflow inputs matching `on.workflow_dispatch.inputs`
- `environment`: Filter deployments by environment name

**Pitfalls**:
- `GITHUB_CREATE_A_WORKFLOW_DISPATCH_EVENT` requires the workflow to have `workflow_dispatch` trigger configured
- Full path `.github/workflows/main.yml` is auto-stripped to just `main.yml`
- Inputs max 10 key-value pairs; must match workflow's `on.workflow_dispatch.inputs` definitions

### 6. Manage Users and Permissions

**When to use**: User wants to check collaborators, permissions, or branch protection

**Tool sequence**:
1. `GITHUB_LIST_REPOSITORY_COLLABORATORS` - List repo collaborators [Required]
2. `GITHUB_GET_REPOSITORY_PERMISSIONS_FOR_A_USER` - Check specific user's access [Optional]
3. `GITHUB_GET_BRANCH_PROTECTION` - Inspect branch protection rules [Required]
4. `GITHUB_UPDATE_BRANCH_PROTECTION` - Update protection settings [Optional]
5. `GITHUB_ADD_A_REPOSITORY_COLLABORATOR` - Add/update collaborator [Optional]

**Key parameters**:
- `affiliation`: 'outside', 'direct', or 'all' for collaborator filtering
- `permission`: Filter by 'pull', 'triage', 'push', 'maintain', 'admin'
- `branch`: Branch name for protection rules
- `enforce_admins`: Whether protection applies to admins

**Pitfalls**:
- `GITHUB_GET_BRANCH_PROTECTION` returns 404 for unprotected branches; treat as no protection rules
- Determine push ability from `permissions.push` or `role_name`, not display labels
- `GITHUB_LIST_REPOSITORY_COLLABORATORS` paginates; iterate all pages
- `GITHUB_GET_REPOSITORY_PERMISSIONS_FOR_A_USER` may be inconclusive for non-collaborators

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active GitHub connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `github`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @github-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @github-automation-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @github-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @github-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/github-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@game-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gdb-cli-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gdpr-data-handling-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gemini-api-dev-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List repos | `GITHUB_LIST_REPOSITORIES_FOR_THE_AUTHENTICATED_USER` | `type`, `sort`, `per_page` |
| Get repo | `GITHUB_GET_A_REPOSITORY` | `owner`, `repo` |
| Create issue | `GITHUB_CREATE_AN_ISSUE` | `owner`, `repo`, `title`, `body` |
| List issues | `GITHUB_LIST_REPOSITORY_ISSUES` | `owner`, `repo`, `state` |
| Find PRs | `GITHUB_FIND_PULL_REQUESTS` | `repo`, `state`, `author` |
| Create PR | `GITHUB_CREATE_A_PULL_REQUEST` | `owner`, `repo`, `head`, `base`, `title` |
| Merge PR | `GITHUB_MERGE_A_PULL_REQUEST` | `owner`, `repo`, `pull_number`, `merge_method` |
| List branches | `GITHUB_LIST_BRANCHES` | `owner`, `repo` |
| Create branch | `GITHUB_CREATE_A_REFERENCE` | `owner`, `repo`, `ref`, `sha` |
| Search code | `GITHUB_SEARCH_CODE` | `q` |
| List commits | `GITHUB_LIST_COMMITS` | `owner`, `repo`, `author`, `since` |
| Search commits | `GITHUB_SEARCH_COMMITS_BY_AUTHOR` | `q` |
| List workflows | `GITHUB_LIST_REPOSITORY_WORKFLOWS` | `owner`, `repo` |
| Trigger workflow | `GITHUB_CREATE_A_WORKFLOW_DISPATCH_EVENT` | `owner`, `repo`, `workflow_id`, `ref` |
| Check CI | `GITHUB_LIST_CHECK_RUNS_FOR_A_REF` | `owner`, `repo`, ref |
| List collaborators | `GITHUB_LIST_REPOSITORY_COLLABORATORS` | `owner`, `repo` |
| Branch protection | `GITHUB_GET_BRANCH_PROTECTION` | `owner`, `repo`, `branch` |

#### Imported: Common Patterns

### ID Resolution
- **Repo name -> owner/repo**: `GITHUB_LIST_REPOSITORIES_FOR_THE_AUTHENTICATED_USER`
- **PR number -> PR details**: `GITHUB_FIND_PULL_REQUESTS` then `GITHUB_GET_A_PULL_REQUEST`
- **Branch name -> SHA**: `GITHUB_GET_A_BRANCH`
- **Workflow name -> ID**: `GITHUB_LIST_REPOSITORY_WORKFLOWS`

### Pagination
All list endpoints use page-based pagination:
- `page`: Page number (starts at 1)
- `per_page`: Results per page (max 100)
- Iterate until response returns fewer results than `per_page`

### Safety
- Always verify PR mergeable status before merge
- Require explicit user confirmation for destructive operations (merge, delete)
- Check CI status with `GITHUB_LIST_CHECK_RUNS_FOR_A_REF` before merging

#### Imported: Known Pitfalls

- **Issues vs PRs**: `GITHUB_LIST_REPOSITORY_ISSUES` returns both; check `pull_request` field
- **Pagination limits**: `per_page` max 100; always iterate pages until empty
- **Branch creation**: `GITHUB_CREATE_A_REFERENCE` fails with 422 if reference already exists
- **Merge guards**: Merge can fail due to branch protection, failing checks, or draft status
- **Code search limits**: Only files <384KB on default branch; max 1000 results
- **Commit search**: Requires search text keywords alongside qualifiers
- **Destructive actions**: Repo deletion is irreversible; merge cannot be undone
- **Silent permission drops**: Labels, assignees, milestones silently dropped without push access

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
