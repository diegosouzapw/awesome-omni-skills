---
name: canva-automation-v2
description: "Canva Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Canva tasks via Rube MCP (Composio): designs, exports, folders, brand templates, autofill. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["canva-automation-v2", "canva-automation", "automate", "canva", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-25"
---

# Canva Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/canva-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Canva Automation via Rube MCP Automate Canva design operations through Composio's Canva toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Canva tasks via Rube MCP (Composio): designs, exports, folders, brand templates, autofill. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit canva
3. If connection is not ACTIVE, follow the returned auth link to complete Canva OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. CANVALISTUSER_DESIGNS - List all designs with optional filters [Required]
6. query: Search term to filter designs by name
7. continuation: Pagination token from previous response

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `canva`
3. If connection is not ACTIVE, follow the returned auth link to complete Canva OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Browse Designs

**When to use**: User wants to find existing designs or browse their Canva library

**Tool sequence**:
1. `CANVA_LIST_USER_DESIGNS` - List all designs with optional filters [Required]

**Key parameters**:
- `query`: Search term to filter designs by name
- `continuation`: Pagination token from previous response
- `ownership`: Filter by 'owned', 'shared', or 'any'
- `sort_by`: Sort field (e.g., 'modified_at', 'title')

**Pitfalls**:
- Results are paginated; follow `continuation` token until absent
- Deleted designs may still appear briefly; check design status
- Search is substring-based, not fuzzy matching

### 2. Create and Design

**When to use**: User wants to create a new Canva design from scratch or from a template

**Tool sequence**:
1. `CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST` - Browse available brand templates [Optional]
2. `CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET` - Create a new design [Required]

**Key parameters**:
- `design_type`: Type of design (e.g., 'Presentation', 'Poster', 'SocialMedia')
- `title`: Name for the new design
- `asset_id`: Optional asset to include in the design
- `width` / `height`: Custom dimensions in pixels

**Pitfalls**:
- Design type must match Canva's predefined types exactly
- Custom dimensions have minimum and maximum limits
- Asset must be uploaded first via CANVA_CREATE_ASSET_UPLOAD_JOB before referencing

### 3. Upload Assets

**When to use**: User wants to upload images or files to Canva for use in designs

**Tool sequence**:
1. `CANVA_CREATE_ASSET_UPLOAD_JOB` - Initiate the asset upload [Required]
2. `CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS` - Poll until upload completes [Required]

**Key parameters**:
- `name`: Display name for the asset
- `url`: Public URL of the file to upload (for URL-based uploads)
- `job_id`: Upload job ID returned from step 1 (for status polling)

**Pitfalls**:
- Upload is asynchronous; you MUST poll the job status until it completes
- Supported formats include PNG, JPG, SVG, MP4, GIF
- File size limits apply; large files may take longer to process
- The `job_id` from CREATE returns the ID needed for status polling
- Status values: 'in_progress', 'success', 'failed'

### 4. Export Designs

**When to use**: User wants to download or export a Canva design as PDF, PNG, or other format

**Tool sequence**:
1. `CANVA_LIST_USER_DESIGNS` - Find the design to export [Prerequisite]
2. `CANVA_CREATE_CANVA_DESIGN_EXPORT_JOB` - Start the export process [Required]
3. `CANVA_GET_DESIGN_EXPORT_JOB_RESULT` - Poll until export completes and get download URL [Required]

**Key parameters**:
- `design_id`: ID of the design to export
- `format`: Export format ('pdf', 'png', 'jpg', 'svg', 'mp4', 'gif', 'pptx')
- `pages`: Specific page numbers to export (array)
- `quality`: Export quality ('regular', 'high')
- `job_id`: Export job ID for polling status

**Pitfalls**:
- Export is asynchronous; you MUST poll the job result until it completes
- Download URLs from completed exports expire after a limited time
- Large designs with many pages take longer to export
- Not all formats support all design types (e.g., MP4 only for animations)
- Poll interval: wait 2-3 seconds between status checks

### 5. Organize with Folders

**When to use**: User wants to create folders or organize designs into folders

**Tool sequence**:
1. `CANVA_POST_FOLDERS` - Create a new folder [Required]
2. `CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER` - Move designs into folders [Optional]

**Key parameters**:
- `name`: Folder name
- `parent_folder_id`: Parent folder for nested organization
- `item_id`: ID of the design or asset to move
- `folder_id`: Target folder ID

**Pitfalls**:
- Folder names must be unique within the same parent folder
- Moving items between folders updates their location immediately
- Root-level folders have no parent_folder_id

### 6. Autofill from Brand Templates

**When to use**: User wants to generate designs by filling brand template placeholders with data

**Tool sequence**:
1. `CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST` - List available brand templates [Required]
2. `CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB` - Start autofill with data [Required]

**Key parameters**:
- `brand_template_id`: ID of the brand template to use
- `title`: Title for the generated design
- `data`: Key-value mapping of placeholder names to replacement values

**Pitfalls**:
- Template placeholders must match exactly (case-sensitive)
- Autofill is asynchronous; poll for completion
- Only brand templates support autofill, not regular designs
- Data values must match the expected type for each placeholder (text, image URL)

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Canva connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `canva`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @canva-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @canva-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @canva-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @canva-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/canva-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@cal-com-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calendly-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@canvas-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@carrier-relationship-management-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List designs | CANVA_LIST_USER_DESIGNS | query, continuation |
| Create design | CANVA_CREATE_CANVA_DESIGN_WITH_OPTIONAL_ASSET | design_type, title |
| Upload asset | CANVA_CREATE_ASSET_UPLOAD_JOB | name, url |
| Check upload | CANVA_FETCH_ASSET_UPLOAD_JOB_STATUS | job_id |
| Export design | CANVA_CREATE_CANVA_DESIGN_EXPORT_JOB | design_id, format |
| Get export | CANVA_GET_DESIGN_EXPORT_JOB_RESULT | job_id |
| Create folder | CANVA_POST_FOLDERS | name, parent_folder_id |
| Move to folder | CANVA_MOVE_ITEM_TO_SPECIFIED_FOLDER | item_id, folder_id |
| List templates | CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST | (none) |
| Autofill template | CANVA_INITIATE_CANVA_DESIGN_AUTOFILL_JOB | brand_template_id, data |

#### Imported: Common Patterns

### Async Job Pattern

Many Canva operations are asynchronous:
```
1. Initiate job (upload, export, autofill) -> get job_id
2. Poll status endpoint with job_id every 2-3 seconds
3. Check for 'success' or 'failed' status
4. On success, extract result (asset_id, download_url, design_id)
```

### ID Resolution

**Design name -> Design ID**:
```
1. Call CANVA_LIST_USER_DESIGNS with query=design_name
2. Find matching design in results
3. Extract id field
```

**Brand template name -> Template ID**:
```
1. Call CANVA_ACCESS_USER_SPECIFIC_BRAND_TEMPLATES_LIST
2. Find template by name
3. Extract brand_template_id
```

### Pagination

- Check response for `continuation` token
- Pass token in next request's `continuation` parameter
- Continue until `continuation` is absent or empty

#### Imported: Known Pitfalls

**Async Operations**:
- Uploads, exports, and autofills are all asynchronous
- Always poll job status; do not assume immediate completion
- Download URLs from exports expire; use them promptly

**Asset Management**:
- Assets must be uploaded before they can be used in designs
- Upload job must reach 'success' status before the asset_id is valid
- Supported formats vary; check Canva documentation for current limits

**Rate Limits**:
- Canva API has rate limits per endpoint
- Implement exponential backoff for bulk operations
- Batch operations where possible to reduce API calls

**Response Parsing**:
- Response data may be nested under `data` key
- Job status responses include different fields based on completion state
- Parse defensively with fallbacks for optional fields

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
