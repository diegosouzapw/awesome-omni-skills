---
name: box-automation
description: "Box Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Box operations including file upload/download, content search, folder management, collaboration, metadata queries, and sign requests through Composio's Box toolkit and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["box-automation", "automate", "box", "operations", "including", "file", "upload", "download"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-14"
---

# Box Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/box-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Box Automation via Rube MCP Automate Box operations including file upload/download, content search, folder management, collaboration, metadata queries, and sign requests through Composio's Box toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Box operations including file upload/download, content search, folder management, collaboration, metadata queries, and sign requests through Composio's Box toolkit.
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
2. Call RUBEMANAGECONNECTIONS with toolkit box
3. If connection is not ACTIVE, follow the returned auth link to complete Box OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. BOXSEARCHFOR_CONTENT - Find the target folder if path is unknown [Prerequisite]
6. BOXGETFOLDERINFORMATION - Verify folder exists and get folderid [Prerequisite]
7. BOXLISTITEMSINFOLDER - Browse folder contents and discover file IDs [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `box`
3. If connection is not ACTIVE, follow the returned auth link to complete Box OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Upload and Download Files

**When to use**: User wants to upload files to Box or download files from it

**Tool sequence**:
1. `BOX_SEARCH_FOR_CONTENT` - Find the target folder if path is unknown [Prerequisite]
2. `BOX_GET_FOLDER_INFORMATION` - Verify folder exists and get folder_id [Prerequisite]
3. `BOX_LIST_ITEMS_IN_FOLDER` - Browse folder contents and discover file IDs [Optional]
4. `BOX_UPLOAD_FILE` - Upload a file to a specific folder [Required for upload]
5. `BOX_DOWNLOAD_FILE` - Download a file by file_id [Required for download]
6. `BOX_CREATE_ZIP_DOWNLOAD` - Bundle multiple files/folders into a zip [Optional]

**Key parameters**:
- `parent_id`: Folder ID for upload destination (use `"0"` for root folder)
- `file`: FileUploadable object with `s3key`, `mimetype`, and `name` for uploads
- `file_id`: Unique file identifier for downloads
- `version`: Optional file version ID for downloading specific versions
- `fields`: Comma-separated list of attributes to return

**Pitfalls**:
- Uploading to a folder with existing filenames can trigger conflict behavior; decide overwrite vs rename semantics
- Files over 50MB should use chunk upload APIs (not available via standard tools)
- The `attributes` part of upload must come before the `file` part or you get HTTP 400 with `metadata_after_file_contents`
- File IDs and folder IDs are numeric strings extractable from Box web app URLs (e.g., `https://*.app.box.com/files/123` gives file_id `"123"`)

### 2. Search and Browse Content

**When to use**: User wants to find files, folders, or web links by name, content, or metadata

**Tool sequence**:
1. `BOX_SEARCH_FOR_CONTENT` - Full-text search across files, folders, and web links [Required]
2. `BOX_LIST_ITEMS_IN_FOLDER` - Browse contents of a specific folder [Optional]
3. `BOX_GET_FILE_INFORMATION` - Get detailed metadata for a specific file [Optional]
4. `BOX_GET_FOLDER_INFORMATION` - Get detailed metadata for a specific folder [Optional]
5. `BOX_QUERY_FILES_FOLDERS_BY_METADATA` - Search by metadata template values [Optional]
6. `BOX_LIST_RECENTLY_ACCESSED_ITEMS` - List recently accessed items [Optional]

**Key parameters**:
- `query`: Search string supporting operators (`""` exact match, `AND`, `OR`, `NOT` - uppercase only)
- `type`: Filter by `"file"`, `"folder"`, or `"web_link"`
- `ancestor_folder_ids`: Limit search to specific folders (comma-separated IDs)
- `file_extensions`: Filter by file type (comma-separated, no dots)
- `content_types`: Search in `"name"`, `"description"`, `"file_content"`, `"comments"`, `"tags"`
- `created_at_range` / `updated_at_range`: Date filters as comma-separated RFC3339 timestamps
- `limit`: Results per page (default 30)
- `offset`: Pagination offset (max 10000)
- `folder_id`: For `LIST_ITEMS_IN_FOLDER` (use `"0"` for root)

**Pitfalls**:
- Queries with offset > 10000 are rejected with HTTP 400
- `BOX_SEARCH_FOR_CONTENT` requires either `query` or `mdfilters` parameter
- Misconfigured filters can silently omit expected items; validate with small test queries first
- Boolean operators (`AND`, `OR`, `NOT`) must be uppercase
- `BOX_LIST_ITEMS_IN_FOLDER` requires pagination via `marker` or `offset`/`usemarker`; partial listings are common
- Standard folders sort items by type first (folders before files before web links)

### 3. Manage Folders

**When to use**: User wants to create, update, move, copy, or delete folders

**Tool sequence**:
1. `BOX_GET_FOLDER_INFORMATION` - Verify folder exists and check permissions [Prerequisite]
2. `BOX_CREATE_FOLDER` - Create a new folder [Required for create]
3. `BOX_UPDATE_FOLDER` - Rename, move, or update folder settings [Required for update]
4. `BOX_COPY_FOLDER` - Copy a folder to a new location [Optional]
5. `BOX_DELETE_FOLDER` - Move folder to trash [Required for delete]
6. `BOX_PERMANENTLY_REMOVE_FOLDER` - Permanently delete a trashed folder [Optional]

**Key parameters**:
- `name`: Folder name (no `/`, `\`, trailing spaces, or `.`/`..`)
- `parent__id`: Parent folder ID (use `"0"` for root)
- `folder_id`: Target folder ID for operations
- `parent.id`: Destination folder ID for moves via `BOX_UPDATE_FOLDER`
- `recursive`: Set `true` to delete non-empty folders
- `shared_link`: Object with `access`, `password`, `permissions` for creating shared links on folders
- `description`, `tags`: Optional metadata fields

**Pitfalls**:
- `BOX_DELETE_FOLDER` moves to trash by default; use `BOX_PERMANENTLY_REMOVE_FOLDER` for permanent deletion
- Non-empty folders require `recursive: true` for deletion
- Root folder (ID `"0"`) cannot be copied or deleted
- Folder names cannot contain `/`, `\`, non-printable ASCII, or trailing spaces
- Moving folders requires setting `parent.id` via `BOX_UPDATE_FOLDER`

### 4. Share Files and Manage Collaborations

**When to use**: User wants to share files, manage access, or handle collaborations

**Tool sequence**:
1. `BOX_GET_FILE_INFORMATION` - Get file details and current sharing status [Prerequisite]
2. `BOX_LIST_FILE_COLLABORATIONS` - List who has access to a file [Required]
3. `BOX_UPDATE_COLLABORATION` - Change access level or accept/reject invitations [Required]
4. `BOX_GET_COLLABORATION` - Get details of a specific collaboration [Optional]
5. `BOX_UPDATE_FILE` - Create shared links, lock files, or update permissions [Optional]
6. `BOX_UPDATE_FOLDER` - Create shared links on folders [Optional]

**Key parameters**:
- `collaboration_id`: Unique collaboration identifier
- `role`: Access level (`"editor"`, `"viewer"`, `"co-owner"`, `"owner"`, `"previewer"`, `"uploader"`, `"viewer uploader"`, `"previewer uploader"`)
- `status`: `"accepted"`, `"pending"`, or `"rejected"` for collaboration invites
- `file_id`: File to share or manage
- `lock__access`: Set to `"lock"` to lock a file
- `permissions__can__download`: `"company"` or `"open"` for download permissions

**Pitfalls**:
- Only certain roles can invite collaborators; insufficient permissions cause authorization errors
- `can_view_path` increases load time for the invitee's "All Files" page; limit to 1000 per user
- Collaboration expiration requires enterprise admin settings to be enabled
- Nested parameter names use double underscores (e.g., `lock__access`, `parent__id`)

### 5. Box Sign Requests

**When to use**: User wants to manage document signature requests

**Tool sequence**:
1. `BOX_LIST_BOX_SIGN_REQUESTS` - List all signature requests [Required]
2. `BOX_GET_BOX_SIGN_REQUEST_BY_ID` - Get details of a specific sign request [Optional]
3. `BOX_CANCEL_BOX_SIGN_REQUEST` - Cancel a pending sign request [Optional]

**Key parameters**:
- `sign_request_id`: UUID of the sign request
- `shared_requests`: Set `true` to include requests where user is a collaborator (not owner)
- `senders`: Filter by sender emails (requires `shared_requests: true`)
- `limit` / `marker`: Pagination parameters

**Pitfalls**:
- Requires Box Sign to be enabled for the enterprise account
- Deleted sign files or parent folders cause requests to not appear in listings
- Only the creator can cancel a sign request
- Sign request statuses include: `converting`, `created`, `sent`, `viewed`, `signed`, `declined`, `cancelled`, `expired`, `error_converting`, `error_sending`

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Box connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `box`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @box-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @box-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @box-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @box-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/box-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-arizeaiobservabilityeval-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Search content | `BOX_SEARCH_FOR_CONTENT` | `query`, `type`, `ancestor_folder_ids` |
| List folder items | `BOX_LIST_ITEMS_IN_FOLDER` | `folder_id`, `limit`, `marker` |
| Get file info | `BOX_GET_FILE_INFORMATION` | `file_id`, `fields` |
| Get folder info | `BOX_GET_FOLDER_INFORMATION` | `folder_id`, `fields` |
| Upload file | `BOX_UPLOAD_FILE` | `file`, `parent_id` |
| Download file | `BOX_DOWNLOAD_FILE` | `file_id` |
| Create folder | `BOX_CREATE_FOLDER` | `name`, `parent__id` |
| Update folder | `BOX_UPDATE_FOLDER` | `folder_id`, `name`, `parent` |
| Copy folder | `BOX_COPY_FOLDER` | `folder_id`, `parent__id` |
| Delete folder | `BOX_DELETE_FOLDER` | `folder_id`, `recursive` |
| Permanently delete folder | `BOX_PERMANENTLY_REMOVE_FOLDER` | folder_id |
| Update file | `BOX_UPDATE_FILE` | `file_id`, `name`, `parent__id` |
| Delete file | `BOX_DELETE_FILE` | `file_id`, `if_match` |
| List collaborations | `BOX_LIST_FILE_COLLABORATIONS` | `file_id` |
| Update collaboration | `BOX_UPDATE_COLLABORATION` | `collaboration_id`, `role` |
| Get collaboration | `BOX_GET_COLLABORATION` | `collaboration_id` |
| Query by metadata | `BOX_QUERY_FILES_FOLDERS_BY_METADATA` | `from`, `ancestor_folder_id`, `query` |
| List collections | `BOX_LIST_ALL_COLLECTIONS` | (none) |
| List collection items | `BOX_LIST_COLLECTION_ITEMS` | `collection_id` |
| List sign requests | `BOX_LIST_BOX_SIGN_REQUESTS` | `limit`, `marker` |
| Get sign request | `BOX_GET_BOX_SIGN_REQUEST_BY_ID` | `sign_request_id` |
| Cancel sign request | `BOX_CANCEL_BOX_SIGN_REQUEST` | `sign_request_id` |
| Recent items | `BOX_LIST_RECENTLY_ACCESSED_ITEMS` | (none) |
| Create zip download | `BOX_CREATE_ZIP_DOWNLOAD` | item IDs |

#### Imported: Common Patterns

### ID Resolution
Box uses numeric string IDs for all entities:
- **Root folder**: Always ID `"0"`
- **File ID from URL**: `https://*.app.box.com/files/123` gives file_id `"123"`
- **Folder ID from URL**: `https://*.app.box.com/folder/123` gives folder_id `"123"`
- **Search to ID**: Use `BOX_SEARCH_FOR_CONTENT` to find items, then extract IDs from results
- **ETag**: Use `if_match` with file's ETag for safe concurrent delete operations

### Pagination
Box supports two pagination methods:
- **Offset-based**: Use `offset` + `limit` (max offset 10000)
- **Marker-based**: Set `usemarker: true` and follow `marker` from responses (preferred for large datasets)
- Always paginate to completion to avoid partial results

### Nested Parameters
Box tools use double underscore notation for nested objects:
- `parent__id` for parent folder reference
- `lock__access`, `lock__expires__at`, `lock__is__download__prevented` for file locks
- `permissions__can__download` for download permissions

#### Imported: Known Pitfalls

### ID Formats
- All IDs are numeric strings (e.g., `"123456"`, not integers)
- Root folder is always `"0"`
- File and folder IDs can be extracted from Box web app URLs

### Rate Limits
- Box API has per-endpoint rate limits
- Search and list operations should use pagination responsibly
- Bulk operations should include delays between requests

### Parameter Quirks
- `fields` parameter changes response shape: when specified, only mini representation + requested fields are returned
- Search requires either `query` or `mdfilters`; both are optional individually but one must be present
- `BOX_UPDATE_FILE` with `lock` set to `null` removes the lock (raw API only)
- Metadata query `from` field format: `enterprise_{enterprise_id}.templateKey` or `global.templateKey`

### Permissions
- Deletions fail without sufficient permissions; always handle error responses
- Collaboration roles determine what operations are allowed
- Enterprise settings may restrict certain sharing options

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
