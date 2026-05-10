---
name: "dropbox-automation"
description: "Dropbox Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Dropbox file management, sharing, search, uploads, downloads, and folder operations via Rube MCP (Composio). Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "dropbox-automation"
  - "automate"
  - "dropbox"
  - "file"
  - "management"
  - "sharing"
  - "search"
  - "uploads"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "dropbox-automation"
family_name: "Dropbox Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/dropbox-automation"
upstream_skill: "skills/dropbox-automation"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "dropbox-automation"
---

# Dropbox Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/dropbox-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Dropbox Automation via Rube MCP Automate Dropbox operations including file upload/download, search, folder management, sharing links, batch operations, and metadata retrieval through Composio's Dropbox toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Dropbox file management, sharing, search, uploads, downloads, and folder operations via Rube MCP (Composio). Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit dropbox
3. If connection is not ACTIVE, follow the returned auth link to complete Dropbox OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. DROPBOXSEARCHFILEORFOLDER - Search by query string with optional path scope and filters [Required]
6. DROPBOXSEARCHCONTINUE - Paginate through additional results using cursor [Required if has_more]
7. DROPBOXGETMETADATA - Validate and get canonical path for a search result [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `dropbox`
3. If connection is not ACTIVE, follow the returned auth link to complete Dropbox OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Search for Files and Folders

**When to use**: User wants to find files or folders by name, content, or type

**Tool sequence**:
1. `DROPBOX_SEARCH_FILE_OR_FOLDER` - Search by query string with optional path scope and filters [Required]
2. `DROPBOX_SEARCH_CONTINUE` - Paginate through additional results using cursor [Required if has_more]
3. `DROPBOX_GET_METADATA` - Validate and get canonical path for a search result [Optional]
4. `DROPBOX_READ_FILE` - Read file content to verify it is the intended document [Optional]

**Key parameters**:
- `query`: Search string (case-insensitive, 1+ non-whitespace characters)
- `options.path`: Scope search to a folder (e.g., `"/Documents"`); empty string for root
- `options.file_categories`: Filter by type (`"image"`, `"document"`, `"pdf"`, `"folder"`, etc.)
- `options.file_extensions`: Filter by extension (e.g., `["jpg", "png"]`)
- `options.filename_only`: Set `true` to match filenames only (not content)
- `options.max_results`: Results per page (default 100, max 1000)

**Pitfalls**:
- Search returns `has_more: true` with a `cursor` when more results exist; MUST continue to avoid silently missing matches
- Maximum 10,000 matches total across all pages of search + search_continue
- `DROPBOX_GET_METADATA` returned `path_display` may differ in casing from user input; always use the returned canonical path
- File content from `DROPBOX_READ_FILE` may be returned as base64-encoded `file_content_bytes`; decode before parsing

### 2. Upload and Download Files

**When to use**: User wants to upload files to Dropbox or download files from it

**Tool sequence**:
1. `DROPBOX_UPLOAD_FILE` - Upload a file to a specified path [Required for upload]
2. `DROPBOX_READ_FILE` - Download/read a file from Dropbox [Required for download]
3. `DROPBOX_DOWNLOAD_ZIP` - Download an entire folder as a zip file [Optional]
4. `DROPBOX_SAVE_URL` - Save a file from a public URL directly to Dropbox [Optional]
5. `DROPBOX_GET_SHARED_LINK_FILE` - Download a file from a shared link URL [Optional]
6. `DROPBOX_EXPORT_FILE` - Export non-downloadable files like Dropbox Paper to markdown/HTML [Optional]

**Key parameters**:
- `path`: Dropbox path (must start with `/`, e.g., `"/Documents/report.pdf"`)
- `mode`: `"add"` (default, fail on conflict) or `"overwrite"` for uploads
- `autorename`: `true` to auto-rename on conflict instead of failing
- `content`: FileUploadable object with `s3key`, `mimetype`, and `name` for uploads
- `url`: Public URL for `DROPBOX_SAVE_URL`
- `export_format`: `"markdown"`, `"html"`, or `"plain_text"` for Paper docs

**Pitfalls**:
- `DROPBOX_SAVE_URL` is asynchronous and may take up to 15 minutes for large files
- `DROPBOX_DOWNLOAD_ZIP` folder must be under 20 GB with no single file over 4 GB and fewer than 10,000 entries
- `DROPBOX_READ_FILE` content may be base64-encoded; check response format
- Shared link downloads via `DROPBOX_GET_SHARED_LINK_FILE` may require `link_password` for protected links

### 3. Share Files and Manage Links

**When to use**: User wants to create sharing links or manage existing shared links

**Tool sequence**:
1. `DROPBOX_GET_METADATA` - Confirm file/folder exists and get canonical path [Prerequisite]
2. `DROPBOX_LIST_SHARED_LINKS` - Check for existing shared links to avoid duplicates [Prerequisite]
3. `DROPBOX_CREATE_SHARED_LINK` - Create a new shared link [Required]
4. `DROPBOX_GET_SHARED_LINK_METADATA` - Resolve a shared link URL to metadata [Optional]
5. `DROPBOX_LIST_SHARED_FOLDERS` - List all shared folders the user has access to [Optional]

**Key parameters**:
- `path`: File or folder path for link creation
- `settings.audience`: `"public"`, `"team"`, or `"no_one"`
- `settings.access`: `"viewer"` or `"editor"`
- `settings.expires`: ISO 8601 expiration date (e.g., `"2026-12-31T23:59:59Z"`)
- `settings.require_password` / `settings.link_password`: Password protection
- `settings.allow_download`: Boolean for download permission
- `direct_only`: For `LIST_SHARED_LINKS`, set `true` to only return direct links (not parent folder links)

**Pitfalls**:
- `DROPBOX_CREATE_SHARED_LINK` fails with 409 Conflict if a shared link already exists for the path; check with `DROPBOX_LIST_SHARED_LINKS` first
- Always validate path with `DROPBOX_GET_METADATA` before creating links to avoid `path/not_found` errors
- Reuse existing links from `DROPBOX_LIST_SHARED_LINKS` instead of creating duplicates
- `requested_visibility` is deprecated; use `audience` for newer implementations

### 4. Manage Folders (Create, Move, Delete)

**When to use**: User wants to create, move, rename, or delete files and folders

**Tool sequence**:
1. `DROPBOX_CREATE_FOLDER` - Create a single folder [Required for create]
2. `DROPBOX_CREATE_FOLDER_BATCH` - Create multiple folders at once [Optional]
3. `DROPBOX_MOVE_FILE_OR_FOLDER` - Move or rename a single file/folder [Required for move]
4. `DROPBOX_MOVE_BATCH` - Move multiple items at once [Optional]
5. `DROPBOX_DELETE_FILE_OR_FOLDER` - Delete a single file or folder [Required for delete]
6. `DROPBOX_DELETE_BATCH` - Delete multiple items at once [Optional]
7. `DROPBOX_COPY_FILE_OR_FOLDER` - Copy a file or folder to a new location [Optional]
8. `DROPBOX_CHECK_MOVE_BATCH` / `DROPBOX_CHECK_FOLDER_BATCH` - Poll async batch job status [Required for batch ops]

**Key parameters**:
- `path`: Target path (must start with `/`, case-sensitive)
- `from_path` / `to_path`: Source and destination for move/copy operations
- `autorename`: `true` to auto-rename on conflict
- `entries`: Array of `{from_path, to_path}` for batch moves; array of paths for batch creates
- `allow_shared_folder`: Set `true` to allow moving shared folders
- `allow_ownership_transfer`: Set `true` if move changes ownership

**Pitfalls**:
- All paths are case-sensitive and must start with `/`
- Paths must NOT end with `/` or whitespace
- Batch operations may be asynchronous; poll with `DROPBOX_CHECK_MOVE_BATCH` or `DROPBOX_CHECK_FOLDER_BATCH`
- `DROPBOX_FILES_MOVE_BATCH` (v1) has "all or nothing" behavior - if any entry fails, entire batch fails
- `DROPBOX_MOVE_BATCH` (v2) is preferred over `DROPBOX_FILES_MOVE_BATCH` (v1)
- Maximum 1000 entries per batch delete/move; 10,000 paths per batch folder create
- Case-only renaming is not supported in batch move operations

### 5. List Folder Contents

**When to use**: User wants to browse or enumerate files in a Dropbox folder

**Tool sequence**:
1. `DROPBOX_LIST_FILES_IN_FOLDER` - List contents of a folder [Required]
2. `DROPBOX_LIST_FOLDERS` - Alternative folder listing with deleted entries support [Optional]
3. `DROPBOX_GET_METADATA` - Get details for a specific item [Optional]

**Key parameters**:
- `path`: Folder path (empty string `""` for root)
- `recursive`: `true` to list all nested contents
- `limit`: Max results per request (default/max 2000)
- `include_deleted`: `true` to include deleted but recoverable items
- `include_media_info`: `true` to get photo/video metadata

**Pitfalls**:
- Use empty string `""` for root folder, not `"/"`
- Recursive listings can be very large; use `limit` to control page size
- Results may paginate via cursor even with small limits
- `DROPBOX_LIST_FILES_IN_FOLDER` returns 409 Conflict with `path/not_found` for incorrect paths

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Dropbox connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `dropbox`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @dropbox-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @dropbox-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @dropbox-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @dropbox-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/dropbox-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@devops-deploy` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@devops-troubleshooter` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@differential-review` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@discord-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Search files | `DROPBOX_SEARCH_FILE_OR_FOLDER` | `query`, `options.path` |
| Continue search | `DROPBOX_SEARCH_CONTINUE` | `cursor` |
| List folder | `DROPBOX_LIST_FILES_IN_FOLDER` | `path`, `recursive`, `limit` |
| List folders | `DROPBOX_LIST_FOLDERS` | `path`, `recursive` |
| Get metadata | `DROPBOX_GET_METADATA` | `path` |
| Read/download file | `DROPBOX_READ_FILE` | `path` |
| Upload file | `DROPBOX_UPLOAD_FILE` | `path`, `content`, `mode` |
| Save URL to Dropbox | `DROPBOX_SAVE_URL` | `path`, `url` |
| Download folder zip | `DROPBOX_DOWNLOAD_ZIP` | `path` |
| Export Paper doc | `DROPBOX_EXPORT_FILE` | `path`, `export_format` |
| Download shared link | `DROPBOX_GET_SHARED_LINK_FILE` | `url` |
| Create shared link | `DROPBOX_CREATE_SHARED_LINK` | `path`, `settings` |
| List shared links | `DROPBOX_LIST_SHARED_LINKS` | `path`, `direct_only` |
| Shared link metadata | `DROPBOX_GET_SHARED_LINK_METADATA` | `url` |
| List shared folders | `DROPBOX_LIST_SHARED_FOLDERS` | `limit` |
| Create folder | `DROPBOX_CREATE_FOLDER` | `path` |
| Create folders batch | `DROPBOX_CREATE_FOLDER_BATCH` | `paths` |
| Move file/folder | `DROPBOX_MOVE_FILE_OR_FOLDER` | `from_path`, `to_path` |
| Move batch | `DROPBOX_MOVE_BATCH` | `entries` |
| Delete file/folder | `DROPBOX_DELETE_FILE_OR_FOLDER` | `path` |
| Delete batch | `DROPBOX_DELETE_BATCH` | `entries` |
| Copy file/folder | `DROPBOX_COPY_FILE_OR_FOLDER` | `from_path`, `to_path` |
| Check batch status | `DROPBOX_CHECK_MOVE_BATCH` | `async_job_id` |

#### Imported: Common Patterns

### ID Resolution
- **Path-based**: Most Dropbox tools use path strings (e.g., `"/Documents/file.pdf"`)
- **ID-based**: Some tools accept `id:...` format (e.g., `"id:4g0reWVRsAAAAAAAAAAAQ"`)
- **Canonical path**: Always use `path_display` or `path_lower` from `DROPBOX_GET_METADATA` responses for subsequent calls
- **Shared link URL**: Use `DROPBOX_GET_SHARED_LINK_METADATA` to resolve URLs to paths/IDs

### Pagination
Dropbox uses cursor-based pagination across most endpoints:
- Search: Follow `has_more` + `cursor` with `DROPBOX_SEARCH_CONTINUE` (max 10,000 total matches)
- Folder listing: Follow cursor from response until no more pages
- Shared links: Follow `has_more` + `cursor` in `DROPBOX_LIST_SHARED_LINKS`
- Batch job status: Poll with `DROPBOX_CHECK_MOVE_BATCH` / `DROPBOX_CHECK_FOLDER_BATCH`

### Async Operations
Several Dropbox operations run asynchronously:
- `DROPBOX_SAVE_URL` - returns job ID; poll or set `wait: true` (up to 120s default)
- `DROPBOX_MOVE_BATCH` / `DROPBOX_FILES_MOVE_BATCH` - may return job ID
- `DROPBOX_CREATE_FOLDER_BATCH` - may return job ID
- `DROPBOX_DELETE_BATCH` - returns job ID

#### Imported: Known Pitfalls

### Path Formats
- All paths must start with `/` (except empty string for root in some endpoints)
- Paths must NOT end with `/` or contain trailing whitespace
- Paths are case-sensitive for write operations
- `path_display` from API may differ in casing from user input; always prefer API-returned paths

### Rate Limits
- Dropbox API has per-endpoint rate limits; batch operations help reduce call count
- Search is limited to 10,000 total matches across all pagination
- `DROPBOX_SAVE_URL` has a 15-minute timeout for large files

### File Content
- `DROPBOX_READ_FILE` may return content as base64-encoded `file_content_bytes`
- Non-downloadable files (Dropbox Paper, Google Docs) require `DROPBOX_EXPORT_FILE` instead
- Download URLs from shared links require proper authentication headers

### Sharing
- Creating a shared link when one already exists returns a 409 Conflict error
- Always check `DROPBOX_LIST_SHARED_LINKS` before creating new links
- Shared folder access may not appear in standard path listings; use `DROPBOX_LIST_SHARED_FOLDERS`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
