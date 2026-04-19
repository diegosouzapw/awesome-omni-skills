---
name: webflow-automation
description: "Webflow Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Webflow CMS collections, site publishing, page management, asset uploads, and ecommerce orders via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["webflow-automation", "automate", "webflow", "cms", "collections", "site", "publishing", "page"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Webflow Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/webflow-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Webflow Automation via Rube MCP Automate Webflow operations including CMS collection management, site publishing, page inspection, asset uploads, and ecommerce order retrieval through Composio's Webflow toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Webflow CMS collections, site publishing, page management, asset uploads, and ecommerce orders via Rube MCP (Composio). Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit webflow
3. If connection is not ACTIVE, follow the returned auth link to complete Webflow OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. WEBFLOWLISTWEBFLOWSITES - List sites to find the target siteid [Prerequisite]
6. WEBFLOWLISTCOLLECTIONS - List all collections for the site [Prerequisite]
7. WEBFLOWGETCOLLECTION - Get collection schema to find valid field slugs [Prerequisite for create/update]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `webflow`
3. If connection is not ACTIVE, follow the returned auth link to complete Webflow OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage CMS Collection Items

**When to use**: User wants to create, update, list, or delete items in Webflow CMS collections (blog posts, products, team members, etc.)

**Tool sequence**:
1. `WEBFLOW_LIST_WEBFLOW_SITES` - List sites to find the target site_id [Prerequisite]
2. `WEBFLOW_LIST_COLLECTIONS` - List all collections for the site [Prerequisite]
3. `WEBFLOW_GET_COLLECTION` - Get collection schema to find valid field slugs [Prerequisite for create/update]
4. `WEBFLOW_LIST_COLLECTION_ITEMS` - List existing items with filtering and pagination [Optional]
5. `WEBFLOW_GET_COLLECTION_ITEM` - Get a specific item's full details [Optional]
6. `WEBFLOW_CREATE_COLLECTION_ITEM` - Create a new item with field data [Required for creation]
7. `WEBFLOW_UPDATE_COLLECTION_ITEM` - Update an existing item's fields [Required for updates]
8. `WEBFLOW_DELETE_COLLECTION_ITEM` - Permanently remove an item [Optional]
9. `WEBFLOW_PUBLISH_SITE` - Publish changes to make them live [Optional]

**Key parameters for CREATE_COLLECTION_ITEM**:
- `collection_id`: 24-character hex string from LIST_COLLECTIONS
- `field_data`: Object with field slug keys (NOT display names); must include `name` and `slug`
- `field_data.name`: Display name for the item
- `field_data.slug`: URL-friendly identifier (lowercase, hyphens, no spaces)
- `is_draft`: Boolean to create as draft (default false)

**Key parameters for UPDATE_COLLECTION_ITEM**:
- `collection_id`: Collection identifier
- `item_id`: 24-character hex MongoDB ObjectId of the existing item
- `fields`: Object with field slug keys and new values
- `live`: Boolean to publish changes immediately (default false)

**Field value types**:
- Text/Email/Link/Date: string
- Number: integer or float
- Boolean: true/false
- Image: `{"url": "...", "alt": "...", "fileId": "..."}`
- Multi-reference: array of reference ID strings
- Multi-image: array of image objects
- Option: option ID string

**Pitfalls**:
- Field keys must use the exact field `slug` from the collection schema, NOT display names
- Always call `GET_COLLECTION` first to retrieve the schema and identify correct field slugs
- `CREATE_COLLECTION_ITEM` requires `name` and `slug` in `field_data`
- `UPDATE_COLLECTION_ITEM` cannot create new items; it requires a valid existing `item_id`
- `item_id` must be a 24-character hexadecimal MongoDB ObjectId
- Slug must be lowercase alphanumeric with hyphens: `^[a-z0-9]+(?:-[a-z0-9]+)*$`
- CMS items are staged; use `PUBLISH_SITE` or set `live: true` to push to production

### 2. Manage Sites and Publishing

**When to use**: User wants to list sites, inspect site configuration, or publish staged changes

**Tool sequence**:
1. `WEBFLOW_LIST_WEBFLOW_SITES` - List all accessible sites [Required]
2. `WEBFLOW_GET_SITE_INFO` - Get detailed site metadata including domains and settings [Optional]
3. `WEBFLOW_PUBLISH_SITE` - Deploy all staged changes to live site [Required for publishing]

**Key parameters for PUBLISH_SITE**:
- `site_id`: Site identifier from LIST_WEBFLOW_SITES
- `custom_domains`: Array of custom domain ID strings (from GET_SITE_INFO)
- `publish_to_webflow_subdomain`: Boolean to publish to `{shortName}.webflow.io`
- At least one of `custom_domains` or `publish_to_webflow_subdomain` must be specified

**Pitfalls**:
- `PUBLISH_SITE` republishes ALL staged changes for selected domains -- verify no unintended drafts are pending
- Rate limit: 1 successful publish per minute
- For sites without custom domains, must set `publish_to_webflow_subdomain: true`
- `custom_domains` expects domain IDs (hex strings), not domain names
- Publishing is a production action -- always confirm with the user first

### 3. Manage Pages

**When to use**: User wants to list pages, inspect page metadata, or examine page DOM structure

**Tool sequence**:
1. `WEBFLOW_LIST_WEBFLOW_SITES` - Find the target site_id [Prerequisite]
2. `WEBFLOW_LIST_PAGES` - List all pages for a site with pagination [Required]
3. `WEBFLOW_GET_PAGE` - Get detailed metadata for a specific page [Optional]
4. `WEBFLOW_GET_PAGE_DOM` - Get the DOM/content node structure of a static page [Optional]

**Key parameters**:
- `site_id`: Site identifier (required for list pages)
- `page_id`: 24-character hex page identifier
- `locale_id`: Optional locale filter for multi-language sites
- `limit`: Max results per page (max 100)
- `offset`: Pagination offset

**Pitfalls**:
- `LIST_PAGES` paginates via offset/limit; iterate when sites have many pages
- Page IDs are 24-character hex strings matching pattern `^[0-9a-fA-F]{24}$`
- `GET_PAGE_DOM` returns the node structure, not rendered HTML
- Pages include both static and CMS-driven pages

### 4. Upload Assets

**When to use**: User wants to upload images, files, or other assets to a Webflow site

**Tool sequence**:
1. `WEBFLOW_LIST_WEBFLOW_SITES` - Find the target site_id [Prerequisite]
2. `WEBFLOW_UPLOAD_ASSET` - Upload a file with base64-encoded content [Required]

**Key parameters**:
- `site_id`: Site identifier
- `file_name`: Name of the file (e.g., `"logo.png"`)
- `file_content`: Base64-encoded binary content of the file (NOT a placeholder or URL)
- `content_type`: MIME type (e.g., `"image/png"`, `"image/jpeg"`, `"application/pdf"`)
- `md5`: MD5 hash of the raw file bytes (32-character hex string)
- `asset_folder_id`: Optional folder placement

**Pitfalls**:
- `file_content` must be actual base64-encoded data, NOT a variable reference or placeholder
- `md5` must be computed from the raw bytes, not from the base64 string
- This is a two-step process internally: generates an S3 pre-signed URL, then uploads
- Large files may encounter timeouts; keep uploads reasonable in size

### 5. Manage Ecommerce Orders

**When to use**: User wants to view ecommerce orders from a Webflow site

**Tool sequence**:
1. `WEBFLOW_LIST_WEBFLOW_SITES` - Find the site with ecommerce enabled [Prerequisite]
2. `WEBFLOW_LIST_ORDERS` - List all orders with optional status filtering [Required]
3. `WEBFLOW_GET_ORDER` - Get detailed information for a specific order [Optional]

**Key parameters**:
- `site_id`: Site identifier (must have ecommerce enabled)
- `order_id`: Specific order identifier for detailed retrieval
- `status`: Filter orders by status

**Pitfalls**:
- Ecommerce must be enabled on the Webflow site for order endpoints to work
- Order endpoints are read-only; no create/update/delete for orders through these tools

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Webflow connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `webflow`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @webflow-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @webflow-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @webflow-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @webflow-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/webflow-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List sites | `WEBFLOW_LIST_WEBFLOW_SITES` | (none) |
| Get site info | `WEBFLOW_GET_SITE_INFO` | `site_id` |
| Publish site | `WEBFLOW_PUBLISH_SITE` | `site_id`, `custom_domains` or `publish_to_webflow_subdomain` |
| List collections | `WEBFLOW_LIST_COLLECTIONS` | `site_id` |
| Get collection schema | `WEBFLOW_GET_COLLECTION` | `collection_id` |
| List collection items | `WEBFLOW_LIST_COLLECTION_ITEMS` | `collection_id`, `limit`, `offset` |
| Get collection item | `WEBFLOW_GET_COLLECTION_ITEM` | `collection_id`, `item_id` |
| Create collection item | `WEBFLOW_CREATE_COLLECTION_ITEM` | `collection_id`, `field_data` |
| Update collection item | `WEBFLOW_UPDATE_COLLECTION_ITEM` | `collection_id`, `item_id`, `fields` |
| Delete collection item | `WEBFLOW_DELETE_COLLECTION_ITEM` | `collection_id`, `item_id` |
| List pages | `WEBFLOW_LIST_PAGES` | `site_id`, `limit`, `offset` |
| Get page | `WEBFLOW_GET_PAGE` | `page_id` |
| Get page DOM | `WEBFLOW_GET_PAGE_DOM` | `page_id` |
| Upload asset | `WEBFLOW_UPLOAD_ASSET` | `site_id`, `file_name`, `file_content`, `content_type`, `md5` |
| List orders | `WEBFLOW_LIST_ORDERS` | `site_id`, `status` |
| Get order | `WEBFLOW_GET_ORDER` | `site_id`, `order_id` |

#### Imported: Common Patterns

### ID Resolution
Webflow uses 24-character hexadecimal IDs throughout:
- **Site ID**: `WEBFLOW_LIST_WEBFLOW_SITES` -- find by name, capture `id`
- **Collection ID**: `WEBFLOW_LIST_COLLECTIONS` with `site_id`
- **Item ID**: `WEBFLOW_LIST_COLLECTION_ITEMS` with `collection_id`
- **Page ID**: `WEBFLOW_LIST_PAGES` with `site_id`
- **Domain IDs**: `WEBFLOW_GET_SITE_INFO` -- found in `customDomains` array
- **Field slugs**: `WEBFLOW_GET_COLLECTION` -- found in collection `fields` array

### Pagination
Webflow uses offset-based pagination:
- `offset`: Starting index (0-based)
- `limit`: Items per page (max 100)
- Increment offset by limit until fewer results than limit are returned
- Available on: LIST_COLLECTION_ITEMS, LIST_PAGES

### CMS Workflow
Typical CMS content creation flow:
1. Get site_id from LIST_WEBFLOW_SITES
2. Get collection_id from LIST_COLLECTIONS
3. Get field schema from GET_COLLECTION (to learn field slugs)
4. Create/update items using correct field slugs
5. Publish site to make changes live

#### Imported: Known Pitfalls

### ID Formats
- All Webflow IDs are 24-character hexadecimal strings (MongoDB ObjectIds)
- Example: `580e63fc8c9a982ac9b8b745`
- Pattern: `^[0-9a-fA-F]{24}$`
- Invalid IDs return 404 errors

### Field Slugs vs Display Names
- CMS operations require field `slug` values, NOT display names
- A field with displayName "Author Name" might have slug `author-name`
- Always call `GET_COLLECTION` to discover correct field slugs
- Using wrong field names silently ignores the data or causes validation errors

### Publishing
- `PUBLISH_SITE` deploys ALL staged changes, not just specific items
- Rate limited to 1 publish per minute
- Must specify at least one domain target (custom or webflow subdomain)
- This is a production-affecting action; always confirm intent

### Authentication Scopes
- Different operations require different OAuth scopes: `sites:read`, `cms:read`, `cms:write`, `pages:read`
- A 403 error typically means missing OAuth scopes
- Check connection permissions if operations fail with authorization errors

### Destructive Operations
- `DELETE_COLLECTION_ITEM` permanently removes CMS items
- `PUBLISH_SITE` makes all staged changes live immediately
- Always confirm with the user before executing these actions

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
