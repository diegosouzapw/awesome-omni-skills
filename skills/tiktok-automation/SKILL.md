---
name: tiktok-automation
description: "TikTok Automation via Rube MCP workflow skill. Use this skill when the user needs Automate TikTok tasks via Rube MCP (Composio): upload/publish videos, post photos, manage content, and view user profiles/stats. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["tiktok-automation", "automate", "tiktok", "tasks", "via", "rube", "mcp", "composio"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# TikTok Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/tiktok-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# TikTok Automation via Rube MCP Automate TikTok content creation and profile operations through Composio's TikTok toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate TikTok tasks via Rube MCP (Composio): upload/publish videos, post photos, manage content, and view user profiles/stats. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit tiktok
3. If connection is not ACTIVE, follow the returned auth link to complete TikTok OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. TIKTOKUPLOADVIDEO or TIKTOKUPLOADVIDEOS - Upload video file(s) [Required]
6. TIKTOKFETCHPUBLISH_STATUS - Check upload/processing status [Required]
7. TIKTOKPUBLISHVIDEO - Publish the uploaded video [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `tiktok`
3. If connection is not ACTIVE, follow the returned auth link to complete TikTok OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Upload and Publish a Video

**When to use**: User wants to upload a video and publish it to TikTok

**Tool sequence**:
1. `TIKTOK_UPLOAD_VIDEO` or `TIKTOK_UPLOAD_VIDEOS` - Upload video file(s) [Required]
2. `TIKTOK_FETCH_PUBLISH_STATUS` - Check upload/processing status [Required]
3. `TIKTOK_PUBLISH_VIDEO` - Publish the uploaded video [Required]

**Key parameters for upload**:
- `video`: Video file object with `s3key`, `mimetype`, `name`
- `title`: Video title/caption

**Key parameters for publish**:
- `publish_id`: ID returned from upload step
- `title`: Video caption text
- `privacy_level`: 'PUBLIC_TO_EVERYONE', 'MUTUAL_FOLLOW_FRIENDS', 'FOLLOWER_OF_CREATOR', 'SELF_ONLY'
- `disable_duet`: Disable duet feature
- `disable_stitch`: Disable stitch feature
- `disable_comment`: Disable comments

**Pitfalls**:
- Video upload and publish are TWO separate steps; upload first, then publish
- After upload, poll FETCH_PUBLISH_STATUS until processing is complete before publishing
- Video must meet TikTok requirements: MP4/WebM format, max 10 minutes, max 4GB
- Caption/title has character limits; check current TikTok guidelines
- Privacy level strings are case-sensitive and must match exactly
- Processing may take 30-120 seconds depending on video size

### 2. Post a Photo

**When to use**: User wants to post a photo to TikTok

**Tool sequence**:
1. `TIKTOK_POST_PHOTO` - Upload and post a photo [Required]
2. `TIKTOK_FETCH_PUBLISH_STATUS` - Check processing status [Optional]

**Key parameters**:
- `photo`: Photo file object with `s3key`, `mimetype`, `name`
- `title`: Photo caption text
- `privacy_level`: Privacy setting for the post

**Pitfalls**:
- Photo posts are a newer TikTok feature; availability may vary by account type
- Supported formats: JPEG, PNG, WebP
- Image size and dimension limits apply; check current TikTok guidelines

### 3. List and Manage Videos

**When to use**: User wants to view their published videos

**Tool sequence**:
1. `TIKTOK_LIST_VIDEOS` - List user's published videos [Required]

**Key parameters**:
- `max_count`: Number of videos to return per page
- `cursor`: Pagination cursor for next page

**Pitfalls**:
- Only returns the authenticated user's own videos
- Response includes video metadata: id, title, create_time, share_url, duration, etc.
- Pagination uses cursor-based approach; check for `has_more` and `cursor` in response
- Recently published videos may not appear immediately in the list

### 4. View User Profile and Stats

**When to use**: User wants to check their TikTok profile info or account statistics

**Tool sequence**:
1. `TIKTOK_GET_USER_PROFILE` - Get full profile information [Required]
2. `TIKTOK_GET_USER_STATS` - Get account statistics [Optional]
3. `TIKTOK_GET_USER_BASIC_INFO` - Get basic user info [Alternative]

**Key parameters**: (no required parameters; returns data for authenticated user)

**Pitfalls**:
- Profile data is for the authenticated user only; cannot view other users' profiles
- Stats include follower count, following count, video count, likes received
- `GET_USER_PROFILE` returns more details than `GET_USER_BASIC_INFO`
- Stats may have slight delays; not real-time

### 5. Check Publish Status

**When to use**: User wants to check the status of a content upload or publish operation

**Tool sequence**:
1. `TIKTOK_FETCH_PUBLISH_STATUS` - Poll for status updates [Required]

**Key parameters**:
- `publish_id`: The publish ID from a previous upload/publish operation

**Pitfalls**:
- Status values include processing, success, and failure states
- Poll at reasonable intervals (5-10 seconds) to avoid rate limits
- Failed publishes include error details in the response
- Content moderation may cause delays or rejections after processing

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active TikTok connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `tiktok`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tiktok-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tiktok-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tiktok-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tiktok-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/tiktok-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@tmux` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@todoist-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-design` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-use-guardian` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Upload video | TIKTOK_UPLOAD_VIDEO | video, title |
| Upload multiple videos | TIKTOK_UPLOAD_VIDEOS | videos |
| Publish video | TIKTOK_PUBLISH_VIDEO | publish_id, title, privacy_level |
| Post photo | TIKTOK_POST_PHOTO | photo, title, privacy_level |
| List videos | TIKTOK_LIST_VIDEOS | max_count, cursor |
| Get profile | TIKTOK_GET_USER_PROFILE | (none) |
| Get user stats | TIKTOK_GET_USER_STATS | (none) |
| Get basic info | TIKTOK_GET_USER_BASIC_INFO | (none) |
| Check publish status | TIKTOK_FETCH_PUBLISH_STATUS | publish_id |

#### Imported: Common Patterns

### Video Publish Flow

```
1. Upload video via TIKTOK_UPLOAD_VIDEO -> get publish_id
2. Poll TIKTOK_FETCH_PUBLISH_STATUS with publish_id until complete
3. If status is ready, call TIKTOK_PUBLISH_VIDEO with final settings
4. Optionally poll status again to confirm publication
```

### Pagination

- Use `cursor` from previous response for next page
- Check `has_more` boolean to determine if more results exist
- `max_count` controls page size

#### Imported: Known Pitfalls

**Content Requirements**:
- Videos: MP4/WebM, max 4GB, max 10 minutes
- Photos: JPEG/PNG/WebP
- Captions: Character limits vary by region
- Content must comply with TikTok community guidelines

**Authentication**:
- OAuth tokens have scopes; ensure video.upload and video.publish are authorized
- Tokens expire; re-authenticate if operations fail with 401

**Rate Limits**:
- TikTok API has strict rate limits per application
- Implement exponential backoff on 429 responses
- Upload operations have daily limits

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Publish IDs are strings; use exactly as returned

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
