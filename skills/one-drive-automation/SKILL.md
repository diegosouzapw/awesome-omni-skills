---
name: one-drive-automation
description: "OneDrive Automation via Rube MCP workflow skill. Use this skill when the user needs Automate OneDrive file management, search, uploads, downloads, sharing, permissions, and folder operations via Rube MCP (Composio). Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["one-drive-automation", "automate", "onedrive", "file", "management", "search", "uploads", "downloads"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# OneDrive Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/one-drive-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# OneDrive Automation via Rube MCP Automate OneDrive operations including file upload/download, search, folder management, sharing links, permissions management, and drive browsing through Composio's OneDrive toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate OneDrive file management, search, uploads, downloads, sharing, permissions, and folder operations via Rube MCP (Composio). Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit one_drive
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. ONEDRIVEGET_DRIVE - Verify drive access and get drive details [Prerequisite]
6. ONEDRIVESEARCH_ITEMS - Keyword search across filenames, metadata, and content [Required]
7. ONEDRIVEONEDRIVELISTITEMS - List all items in the root of a drive [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `one_drive`
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Search and Browse Files

**When to use**: User wants to find files or browse folder contents in OneDrive

**Tool sequence**:
1. `ONE_DRIVE_GET_DRIVE` - Verify drive access and get drive details [Prerequisite]
2. `ONE_DRIVE_SEARCH_ITEMS` - Keyword search across filenames, metadata, and content [Required]
3. `ONE_DRIVE_ONEDRIVE_LIST_ITEMS` - List all items in the root of a drive [Optional]
4. `ONE_DRIVE_GET_ITEM` - Get detailed metadata for a specific item, expand children [Optional]
5. `ONE_DRIVE_ONEDRIVE_FIND_FILE` - Find a specific file by exact name in a folder [Optional]
6. `ONE_DRIVE_ONEDRIVE_FIND_FOLDER` - Find a specific folder by name [Optional]
7. `ONE_DRIVE_LIST_DRIVES` - List all accessible drives [Optional]

**Key parameters**:
- `q`: Search query (plain keywords only, NOT KQL syntax)
- `search_scope`: `"root"` (folder hierarchy) or `"drive"` (includes shared items)
- `top`: Max items per page (default 200)
- `skip_token`: Pagination token from `@odata.nextLink`
- `select`: Comma-separated fields to return (e.g., `"id,name,webUrl,size"`)
- `orderby`: Sort order (e.g., `"name asc"`, `"name desc"`)
- `item_id`: Item ID for `GET_ITEM`
- `expand_relations`: Array like `["children"]` or `["thumbnails"]` for `GET_ITEM`
- `user_id`: `"me"` (default) or specific user ID/email

**Pitfalls**:
- `ONE_DRIVE_SEARCH_ITEMS` does NOT support KQL operators (`folder:`, `file:`, `filetype:`, `path:`); these are treated as literal text
- Wildcard characters (`*`, `?`) are NOT supported and are auto-removed; use file extension keywords instead (e.g., `"pdf"` not `"*.pdf"`)
- `ONE_DRIVE_ONEDRIVE_LIST_ITEMS` returns only root-level contents; use recursive `ONE_DRIVE_GET_ITEM` with `expand_relations: ["children"]` for deeper levels
- Large folders paginate; always follow `skip_token` / `@odata.nextLink` until exhausted
- Some drive ID formats may return "ObjectHandle is Invalid" errors due to Microsoft Graph API limitations

### 2. Upload and Download Files

**When to use**: User wants to upload files to OneDrive or download files from it

**Tool sequence**:
1. `ONE_DRIVE_ONEDRIVE_FIND_FOLDER` - Locate the target folder [Prerequisite]
2. `ONE_DRIVE_ONEDRIVE_UPLOAD_FILE` - Upload a file to a specified folder [Required for upload]
3. `ONE_DRIVE_DOWNLOAD_FILE` - Download a file by item ID [Required for download]
4. `ONE_DRIVE_GET_ITEM` - Get file details before download [Optional]

**Key parameters**:
- `file`: FileUploadable object with `s3key`, `mimetype`, and `name` for uploads
- `folder`: Destination path (e.g., `"/Documents/Reports"`) or folder ID for uploads
- `item_id`: File's unique identifier for downloads
- `file_name`: Desired filename with extension for downloads
- `drive_id`: Specific drive ID (for SharePoint or OneDrive for Business)
- `user_id`: `"me"` (default) or specific user identifier

**Pitfalls**:
- Upload automatically renames on conflict (no overwrite option by default)
- Large files are automatically handled via chunking
- `drive_id` overrides `user_id` when both are provided
- Item IDs vary by platform: OneDrive for Business uses `01...` prefix, OneDrive Personal uses `HASH!NUMBER` format
- Item IDs are case-sensitive; use exactly as returned from API

### 3. Share Files and Manage Permissions

**When to use**: User wants to share files/folders or manage who has access

**Tool sequence**:
1. `ONE_DRIVE_ONEDRIVE_FIND_FILE` or `ONE_DRIVE_ONEDRIVE_FIND_FOLDER` - Locate the item [Prerequisite]
2. `ONE_DRIVE_GET_ITEM_PERMISSIONS` - Check current permissions [Prerequisite]
3. `ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM` - Grant access to specific users [Required]
4. `ONE_DRIVE_CREATE_LINK` - Create a shareable link [Optional]
5. `ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA` - Update item metadata [Optional]

**Key parameters**:
- `item_id`: The file or folder to share
- `recipients`: Array of objects with `email` or `object_id`
- `roles`: Array with `"read"` or `"write"`
- `send_invitation`: `true` to send notification email, `false` for silent permission grant
- `require_sign_in`: `true` to require authentication to access
- `message`: Custom message for invitation (max 2000 characters)
- `expiration_date_time`: ISO 8601 date for permission expiry
- `retain_inherited_permissions`: `true` (default) to keep existing inherited permissions

**Pitfalls**:
- Using wrong `item_id` with `INVITE_USER_TO_DRIVE_ITEM` changes permissions on unintended items; always verify first
- Write or higher roles are impactful; get explicit user confirmation before granting
- `GET_ITEM_PERMISSIONS` returns inherited and owner entries; do not assume response only reflects recent changes
- `permissions` cannot be expanded via `ONE_DRIVE_GET_ITEM`; use the separate permissions endpoint
- At least one of `require_sign_in` or `send_invitation` must be `true`

### 4. Manage Folders (Create, Move, Delete, Copy)

**When to use**: User wants to create, move, rename, delete, or copy files and folders

**Tool sequence**:
1. `ONE_DRIVE_ONEDRIVE_FIND_FOLDER` - Locate source and destination folders [Prerequisite]
2. `ONE_DRIVE_ONEDRIVE_CREATE_FOLDER` - Create a new folder [Required for create]
3. `ONE_DRIVE_MOVE_ITEM` - Move a file or folder to a new location [Required for move]
4. `ONE_DRIVE_COPY_ITEM` - Copy a file or folder (async operation) [Required for copy]
5. `ONE_DRIVE_DELETE_ITEM` - Move item to recycle bin [Required for delete]
6. `ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA` - Rename or update item properties [Optional]

**Key parameters**:
- `name`: Folder name for creation or new name for rename/copy
- `parent_folder`: Path (e.g., `"/Documents/Reports"`) or folder ID for creation
- `itemId`: Item to move
- `parentReference`: Object with `id` (destination folder ID) for moves: `{"id": "folder_id"}`
- `item_id`: Item to copy or delete
- `parent_reference`: Object with `id` and optional `driveId` for copy destination
- `@microsoft.graph.conflictBehavior`: `"fail"`, `"replace"`, or `"rename"` for copies
- `if_match`: ETag for optimistic concurrency on deletes

**Pitfalls**:
- `ONE_DRIVE_MOVE_ITEM` does NOT support cross-drive moves; use `ONE_DRIVE_COPY_ITEM` for cross-drive transfers
- `parentReference` for moves requires folder ID (not folder name); resolve with `ONEDRIVE_FIND_FOLDER` first
- `ONE_DRIVE_COPY_ITEM` is asynchronous; response provides a URL to monitor progress
- `ONE_DRIVE_DELETE_ITEM` moves to recycle bin, not permanent deletion
- Folder creation auto-renames on conflict (e.g., "New Folder" becomes "New Folder 1")
- Provide either `name` or `parent_reference` (or both) for `ONE_DRIVE_COPY_ITEM`

### 5. Track Changes and Drive Information

**When to use**: User wants to monitor changes or get drive/quota information

**Tool sequence**:
1. `ONE_DRIVE_GET_DRIVE` - Get drive properties and metadata [Required]
2. `ONE_DRIVE_GET_QUOTA` - Check storage quota (total, used, remaining) [Optional]
3. `ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA` - Track changes in SharePoint site drives [Optional]
4. `ONE_DRIVE_GET_ITEM_VERSIONS` - Get version history of a file [Optional]

**Key parameters**:
- `drive_id`: Drive identifier (or `"me"` for personal drive)
- `site_id`: SharePoint site identifier for delta tracking
- `token`: Delta token (`"latest"` for current state, URL for next page, or timestamp)
- `item_id`: File ID for version history

**Pitfalls**:
- Delta queries are only available for SharePoint site drives via `ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA`
- Token `"latest"` returns current delta token without items (useful as starting point)
- Deep or large drives can take several minutes to crawl; use batching and resume logic

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active OneDrive connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `one_drive`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @one-drive-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/one-drive-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/one-drive-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @one-drive-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/one-drive-automation`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| Search files | `ONE_DRIVE_SEARCH_ITEMS` | `q`, `search_scope`, `top` |
| List root items | `ONE_DRIVE_ONEDRIVE_LIST_ITEMS` | `user_id`, `select`, `top` |
| Get item details | `ONE_DRIVE_GET_ITEM` | `item_id`, `expand_relations` |
| Find file by name | `ONE_DRIVE_ONEDRIVE_FIND_FILE` | `name`, `folder` |
| Find folder by name | `ONE_DRIVE_ONEDRIVE_FIND_FOLDER` | `name`, `folder` |
| Upload file | `ONE_DRIVE_ONEDRIVE_UPLOAD_FILE` | `file`, `folder` |
| Download file | `ONE_DRIVE_DOWNLOAD_FILE` | `item_id`, `file_name` |
| Create folder | `ONE_DRIVE_ONEDRIVE_CREATE_FOLDER` | `name`, `parent_folder` |
| Move item | `ONE_DRIVE_MOVE_ITEM` | `itemId`, `parentReference` |
| Copy item | `ONE_DRIVE_COPY_ITEM` | `item_id`, `parent_reference`, `name` |
| Delete item | `ONE_DRIVE_DELETE_ITEM` | `item_id` |
| Share with users | `ONE_DRIVE_INVITE_USER_TO_DRIVE_ITEM` | `item_id`, `recipients`, `roles` |
| Create share link | `ONE_DRIVE_CREATE_LINK` | `item_id`, link type |
| Get permissions | `ONE_DRIVE_GET_ITEM_PERMISSIONS` | `item_id` |
| Update metadata | `ONE_DRIVE_UPDATE_DRIVE_ITEM_METADATA` | `item_id`, fields |
| Get drive info | `ONE_DRIVE_GET_DRIVE` | `drive_id` |
| List drives | `ONE_DRIVE_LIST_DRIVES` | user/group/site scope |
| Get quota | `ONE_DRIVE_GET_QUOTA` | (none) |
| Track changes | `ONE_DRIVE_LIST_SITE_DRIVE_ITEMS_DELTA` | `site_id`, `token` |
| Version history | `ONE_DRIVE_GET_ITEM_VERSIONS` | `item_id` |

#### Imported: Common Patterns

### ID Resolution
- **User**: Use `"me"` for authenticated user or specific user email/GUID
- **Item ID from find**: Use `ONE_DRIVE_ONEDRIVE_FIND_FILE` or `ONE_DRIVE_ONEDRIVE_FIND_FOLDER` to get item IDs
- **Item ID from search**: Extract from `ONE_DRIVE_SEARCH_ITEMS` results
- **Drive ID**: Use `ONE_DRIVE_LIST_DRIVES` or `ONE_DRIVE_GET_DRIVE` to discover drives
- **Folder path to ID**: Use `ONE_DRIVE_ONEDRIVE_FIND_FOLDER` with path, then extract ID from response

ID formats vary by platform:
- OneDrive for Business/SharePoint: `01NKDM7HMOJTVYMDOSXFDK2QJDXCDI3WUK`
- OneDrive Personal: `D4648F06C91D9D3D!54927`

### Pagination
OneDrive uses token-based pagination:
- Follow `@odata.nextLink` or `skip_token` until no more pages
- Set `top` for page size (varies by endpoint)
- `ONE_DRIVE_ONEDRIVE_LIST_ITEMS` auto-handles pagination internally
- Aggressive parallel requests can trigger HTTP 429; honor `Retry-After` headers

### Path vs ID
Most OneDrive tools accept either paths or IDs:
- **Paths**: Start with `/` (e.g., `"/Documents/Reports"`)
- **IDs**: Use unique item identifiers from API responses
- **Item paths for permissions**: Use `:/path/to/item:/` format

#### Imported: Known Pitfalls

### ID Formats
- Item IDs are case-sensitive and platform-specific
- Never use web URLs, sharing links, or manually constructed identifiers as item IDs
- Always use IDs exactly as returned from Microsoft Graph API

### Rate Limits
- Aggressive parallel `ONE_DRIVE_GET_ITEM` calls can trigger HTTP 429 Too Many Requests
- Honor `Retry-After` headers and implement throttling
- Deep drive crawls should use batching with delays

### Search Limitations
- No KQL support; use plain keywords only
- No wildcard characters; use extension keywords (e.g., `"pdf"` not `"*.pdf"`)
- No path-based filtering in search; use folder listing instead
- `q='*'` wildcard-only queries return HTTP 400 invalidRequest

### Parameter Quirks
- `drive_id` overrides `user_id` when both are provided
- `permissions` cannot be expanded via `GET_ITEM`; use dedicated permissions endpoint
- Move operations require folder IDs in `parentReference`, not folder names
- Copy operations are asynchronous; response provides monitoring URL
