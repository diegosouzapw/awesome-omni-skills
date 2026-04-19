---
name: confluence-automation-v2
description: "Confluence Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Confluence page creation, content search, space management, labels, and hierarchy navigation via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["confluence-automation-v2", "confluence-automation", "automate", "confluence", "page", "creation", "content", "search"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Confluence Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/confluence-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Confluence Automation via Rube MCP Automate Confluence operations including page creation and updates, content search with CQL, space management, label tagging, and page hierarchy navigation through Composio's Confluence toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Confluence page creation, content search, space management, labels, and hierarchy navigation via Rube MCP (Composio). Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit confluence
3. If connection is not ACTIVE, follow the returned auth link to complete Confluence OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. CONFLUENCEGETSPACES - List spaces to find the target space ID [Prerequisite]
6. CONFLUENCESEARCHCONTENT - Find existing page to avoid duplicates or locate parent [Optional]
7. CONFLUENCEGETPAGEBYID - Get current page content and version number before updating [Prerequisite for updates]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `confluence`
3. If connection is not ACTIVE, follow the returned auth link to complete Confluence OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Update Pages

**When to use**: User wants to create new documentation or update existing Confluence pages

**Tool sequence**:
1. `CONFLUENCE_GET_SPACES` - List spaces to find the target space ID [Prerequisite]
2. `CONFLUENCE_SEARCH_CONTENT` - Find existing page to avoid duplicates or locate parent [Optional]
3. `CONFLUENCE_GET_PAGE_BY_ID` - Get current page content and version number before updating [Prerequisite for updates]
4. `CONFLUENCE_CREATE_PAGE` - Create a new page in a space [Required for creation]
5. `CONFLUENCE_UPDATE_PAGE` - Update an existing page with new content and incremented version [Required for updates]
6. `CONFLUENCE_ADD_CONTENT_LABEL` - Tag the page with labels after creation [Optional]

**Key parameters**:
- `spaceId`: Space ID or key (e.g., `"DOCS"`, `"12345678"`) -- space keys are auto-converted to IDs
- `title`: Page title (must be unique within a space)
- `parentId`: Parent page ID for creating child pages; omit to place under space homepage
- `body.storage.value`: HTML/XHTML content in Confluence storage format
- `body.storage.representation`: Must be `"storage"` for create operations
- `version.number`: For updates, must be current version + 1
- `version.message`: Optional change description

**Pitfalls**:
- Confluence enforces unique page titles per space; creating a page with a duplicate title will fail
- `UPDATE_PAGE` requires `version.number` set to current version + 1; always fetch current version first with `GET_PAGE_BY_ID`
- Content must be in Confluence storage format (XHTML), not plain text or Markdown
- `CREATE_PAGE` uses `body.storage.value` while `UPDATE_PAGE` uses `body.value` with `body.representation`
- `GET_PAGE_BY_ID` requires a numeric long ID, not a UUID or string

### 2. Search Content

**When to use**: User wants to find pages, blog posts, or content across Confluence

**Tool sequence**:
1. `CONFLUENCE_SEARCH_CONTENT` - Keyword search with intelligent relevance ranking [Required]
2. `CONFLUENCE_CQL_SEARCH` - Advanced search using Confluence Query Language [Alternative]
3. `CONFLUENCE_GET_PAGE_BY_ID` - Hydrate full content for selected search results [Optional]
4. `CONFLUENCE_GET_PAGES` - Browse pages sorted by date when search relevance is weak [Fallback]

**Key parameters for SEARCH_CONTENT**:
- `query`: Search text matched against page titles with intelligent ranking
- `spaceKey`: Limit search to a specific space
- `limit`: Max results (default 25, max 250)
- `start`: Pagination offset (0-based)

**Key parameters for CQL_SEARCH**:
- `cql`: CQL query string (e.g., `text ~ "API docs" AND space = DOCS AND type = page`)
- `expand`: Comma-separated properties (e.g., `content.space`, `content.body.storage`)
- `excerpt`: `highlight`, `indexed`, or `none`
- `limit`: Max results (max 250; reduced to 25-50 when using body expansions)

**CQL operators and fields**:
- Fields: `text`, `title`, `label`, `space`, `type`, `creator`, `lastModified`, `created`, `ancestor`
- Operators: `=`, `!=`, `~` (contains), `!~`, `>`, `<`, `>=`, `<=`, `IN`, `NOT IN`
- Functions: `currentUser()`, `now("-7d")`, `now("-30d")`
- Example: `title ~ "meeting" AND lastModified > now("-7d") ORDER BY lastModified DESC`

**Pitfalls**:
- `CONFLUENCE_SEARCH_CONTENT` fetches up to 300 pages and applies client-side filtering -- not a true full-text search
- `CONFLUENCE_CQL_SEARCH` is the real full-text search; use `text ~ "term"` for content body search
- HTTP 429 rate limits can occur; throttle to ~2 requests/second with backoff
- Using body expansions in CQL_SEARCH may reduce max results to 25-50
- Search indexing is not immediate; recently created pages may not appear

### 3. Manage Spaces

**When to use**: User wants to list, create, or inspect Confluence spaces

**Tool sequence**:
1. `CONFLUENCE_GET_SPACES` - List all spaces with optional filtering [Required]
2. `CONFLUENCE_GET_SPACE_BY_ID` - Get detailed metadata for a specific space [Optional]
3. `CONFLUENCE_CREATE_SPACE` - Create a new space with key and name [Optional]
4. `CONFLUENCE_GET_SPACE_PROPERTIES` - Retrieve custom metadata stored as space properties [Optional]
5. `CONFLUENCE_GET_SPACE_CONTENTS` - List pages, blog posts, or attachments in a space [Optional]
6. `CONFLUENCE_GET_LABELS_FOR_SPACE` - List labels on a space [Optional]

**Key parameters**:
- `key`: Space key -- alphanumeric only, no underscores or hyphens (e.g., `DOCS`, `PROJECT1`)
- `name`: Human-readable space name
- `type`: `global` or `personal`
- `status`: `current` (active) or `archived`
- `spaceKey`: For GET_SPACE_CONTENTS, filters by space key
- `id`: Numeric space ID for GET_SPACE_BY_ID (NOT the space key)

**Pitfalls**:
- Space keys must be alphanumeric only (no underscores, hyphens, or special characters)
- `GET_SPACE_BY_ID` requires numeric space ID, not the space key; use `GET_SPACES` to find numeric IDs
- Clickable space URLs may need assembly: join `_links.webui` (relative) with `_links.base`
- Default pagination is 25; set `limit` explicitly (max 200 for spaces)

### 4. Navigate Page Hierarchy and Labels

**When to use**: User wants to explore page trees, child pages, ancestors, or manage labels

**Tool sequence**:
1. `CONFLUENCE_SEARCH_CONTENT` - Find the target page ID [Prerequisite]
2. `CONFLUENCE_GET_CHILD_PAGES` - List direct children of a parent page [Required]
3. `CONFLUENCE_GET_PAGE_ANCESTORS` - Get the full ancestor chain for a page [Optional]
4. `CONFLUENCE_GET_LABELS_FOR_PAGE` - List labels on a specific page [Optional]
5. `CONFLUENCE_ADD_CONTENT_LABEL` - Add labels to a page [Optional]
6. `CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT` - List labels across all content in a space [Optional]
7. `CONFLUENCE_GET_PAGE_VERSIONS` - Audit edit history for a page [Optional]

**Key parameters**:
- `id`: Page ID for child pages, ancestors, labels, and versions
- `cursor`: Opaque pagination cursor for GET_CHILD_PAGES (from `_links.next`)
- `limit`: Items per page (max 250 for child pages)
- `sort`: Child page sort options: `id`, `-id`, `created-date`, `-created-date`, `modified-date`, `-modified-date`, `child-position`, `-child-position`

**Pitfalls**:
- `GET_CHILD_PAGES` only returns direct children, not nested descendants; recurse for full tree
- Pagination for GET_CHILD_PAGES uses cursor-based pagination (not start/limit)
- Verify the correct page ID from search before using as parent; search can return similar titles
- `GET_PAGE_VERSIONS` requires the page ID, not a version number

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Confluence connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `confluence`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @confluence-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @confluence-automation-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @confluence-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @confluence-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/confluence-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@comprehensive-review-pr-enhance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-use-agents-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-vision-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@concise-planning-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List spaces | `CONFLUENCE_GET_SPACES` | `type`, `status`, `limit` |
| Get space by ID | `CONFLUENCE_GET_SPACE_BY_ID` | `id` |
| Create space | `CONFLUENCE_CREATE_SPACE` | `key`, `name`, `type` |
| Space contents | `CONFLUENCE_GET_SPACE_CONTENTS` | `spaceKey`, `type`, `status` |
| Space properties | `CONFLUENCE_GET_SPACE_PROPERTIES` | `id`, `key` |
| Search content | `CONFLUENCE_SEARCH_CONTENT` | `query`, `spaceKey`, `limit` |
| CQL search | `CONFLUENCE_CQL_SEARCH` | `cql`, `expand`, `limit` |
| List pages | `CONFLUENCE_GET_PAGES` | `spaceId`, `sort`, `limit` |
| Get page by ID | `CONFLUENCE_GET_PAGE_BY_ID` | `id` (integer) |
| Create page | `CONFLUENCE_CREATE_PAGE` | `title`, `spaceId`, `body` |
| Update page | `CONFLUENCE_UPDATE_PAGE` | `id`, `title`, `body`, `version` |
| Delete page | `CONFLUENCE_DELETE_PAGE` | `id` |
| Child pages | `CONFLUENCE_GET_CHILD_PAGES` | `id`, `limit`, `sort` |
| Page ancestors | `CONFLUENCE_GET_PAGE_ANCESTORS` | `id` |
| Page labels | `CONFLUENCE_GET_LABELS_FOR_PAGE` | `id` |
| Add label | `CONFLUENCE_ADD_CONTENT_LABEL` | content ID, label |
| Page versions | `CONFLUENCE_GET_PAGE_VERSIONS` | `id` |
| Space labels | `CONFLUENCE_GET_LABELS_FOR_SPACE` | space ID |

#### Imported: Common Patterns

### ID Resolution
Always resolve human-readable names to IDs before operations:
- **Space key -> Space ID**: `CONFLUENCE_GET_SPACES` with `spaceKey` filter, or `CREATE_PAGE` accepts space keys directly
- **Page title -> Page ID**: `CONFLUENCE_SEARCH_CONTENT` with `query` param, then extract page ID
- **Space ID from URL**: Extract numeric ID from Confluence URLs or use GET_SPACES

### Pagination
Confluence uses two pagination styles:
- **Offset-based** (most endpoints): `start` (0-based offset) + `limit` (page size). Increment `start` by `limit` until fewer results than `limit` are returned.
- **Cursor-based** (GET_CHILD_PAGES, GET_PAGES): Use the `cursor` from `_links.next` in the response. Continue until no `next` link is present.

### Content Formatting
- Pages use Confluence storage format (XHTML), not Markdown
- Basic elements: `<p>`, `<h1>`-`<h6>`, `<strong>`, `<em>`, `<code>`, `<ul>`, `<ol>`, `<li>`
- Tables: `<table><tbody><tr><th>` / `<td>` structure
- Macros: `<ac:structured-macro ac:name="code">` for code blocks, etc.
- Always wrap content in proper XHTML tags

#### Imported: Known Pitfalls

### ID Formats
- Space IDs are numeric (e.g., `557060`); space keys are short strings (e.g., `DOCS`)
- Page IDs are numeric long values for GET_PAGE_BY_ID; some tools accept UUID format
- `GET_SPACE_BY_ID` requires numeric ID, not the space key
- `GET_PAGE_BY_ID` takes an integer, not a string

### Rate Limits
- HTTP 429 can occur on search endpoints; honor Retry-After header
- Throttle to ~2 requests/second with exponential backoff and jitter
- Body expansion in CQL_SEARCH reduces result limits to 25-50

### Content Format
- Content must be Confluence storage format (XHTML), not Markdown or plain text
- Invalid XHTML will cause page creation/update to fail
- `CREATE_PAGE` nests body under `body.storage.value`; `UPDATE_PAGE` uses `body.value` + `body.representation`

### Version Conflicts
- Updates require exact next version number (current + 1)
- Concurrent edits can cause version conflicts; always fetch current version immediately before updating
- Title changes during update must still be unique within the space

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
