---
name: instagram-automation
description: "Instagram Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Instagram tasks via Rube MCP (Composio): create posts, carousels, manage media, get insights, and publishing limits. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["instagram-automation", "automate", "instagram", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Instagram Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/instagram-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Instagram Automation via Rube MCP Automate Instagram operations through Composio's Instagram toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Instagram tasks via Rube MCP (Composio): create posts, carousels, manage media, get insights, and publishing limits. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit instagram
3. If connection is not ACTIVE, follow the returned auth link to complete Instagram/Facebook OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. INSTAGRAMGETUSER_INFO - Get Instagram user ID [Prerequisite]
6. INSTAGRAMCREATEMEDIA_CONTAINER - Create a media container with the image/video URL [Required]
7. INSTAGRAMGETPOST_STATUS - Check if the media container is ready [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `instagram`
3. If connection is not ACTIVE, follow the returned auth link to complete Instagram/Facebook OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create a Single Image/Video Post

**When to use**: User wants to publish a single photo or video to Instagram

**Tool sequence**:
1. `INSTAGRAM_GET_USER_INFO` - Get Instagram user ID [Prerequisite]
2. `INSTAGRAM_CREATE_MEDIA_CONTAINER` - Create a media container with the image/video URL [Required]
3. `INSTAGRAM_GET_POST_STATUS` - Check if the media container is ready [Optional]
4. `INSTAGRAM_CREATE_POST` or `INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH` - Publish the container [Required]

**Key parameters**:
- `image_url`: Public URL of the image to post
- `video_url`: Public URL of the video to post
- `caption`: Post caption text
- `ig_user_id`: Instagram Business account user ID

**Pitfalls**:
- Media URLs must be publicly accessible; private/authenticated URLs will fail
- Video containers may take time to process; poll GET_POST_STATUS before publishing
- Caption supports hashtags and mentions but has a 2200 character limit
- Publishing a container that is not yet finished processing returns an error

### 2. Create a Carousel Post

**When to use**: User wants to publish multiple images/videos in a single carousel post

**Tool sequence**:
1. `INSTAGRAM_CREATE_MEDIA_CONTAINER` - Create individual containers for each media item [Required, repeat per item]
2. `INSTAGRAM_CREATE_CAROUSEL_CONTAINER` - Create the carousel container referencing all media containers [Required]
3. `INSTAGRAM_GET_POST_STATUS` - Check carousel container readiness [Optional]
4. `INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH` - Publish the carousel [Required]

**Key parameters**:
- `children`: Array of media container IDs for the carousel
- `caption`: Carousel post caption
- `ig_user_id`: Instagram Business account user ID

**Pitfalls**:
- Carousels require 2-10 media items; fewer or more will fail
- Each child container must be created individually before the carousel container
- All child containers must be fully processed before creating the carousel
- Mixed media (images + videos) is supported in carousels

### 3. Get Media and Insights

**When to use**: User wants to view their posts or analyze post performance

**Tool sequence**:
1. `INSTAGRAM_GET_IG_USER_MEDIA` or `INSTAGRAM_GET_USER_MEDIA` - List user's media [Required]
2. `INSTAGRAM_GET_IG_MEDIA` - Get details for a specific post [Optional]
3. `INSTAGRAM_GET_POST_INSIGHTS` or `INSTAGRAM_GET_IG_MEDIA_INSIGHTS` - Get metrics for a post [Optional]
4. `INSTAGRAM_GET_USER_INSIGHTS` - Get account-level insights [Optional]

**Key parameters**:
- `ig_user_id`: Instagram Business account user ID
- `media_id`: ID of the specific media post
- `metric`: Metrics to retrieve (e.g., impressions, reach, engagement)
- `period`: Time period for insights (e.g., day, week, lifetime)

**Pitfalls**:
- Insights are only available for Business/Creator accounts
- Some metrics require minimum follower counts
- Insight data may have a delay of up to 48 hours
- The `period` parameter must match the metric type

### 4. Check Publishing Limits

**When to use**: User wants to verify they can publish before attempting a post

**Tool sequence**:
1. `INSTAGRAM_GET_IG_USER_CONTENT_PUBLISHING_LIMIT` - Check remaining publishing quota [Required]

**Key parameters**:
- `ig_user_id`: Instagram Business account user ID

**Pitfalls**:
- Instagram enforces a 25 posts per 24-hour rolling window limit
- Publishing limit resets on a rolling basis, not at midnight
- Check limits before bulk posting operations to avoid failures

### 5. Get Media Comments and Children

**When to use**: User wants to view comments on a post or children of a carousel

**Tool sequence**:
1. `INSTAGRAM_GET_IG_MEDIA_COMMENTS` - List comments on a media post [Required]
2. `INSTAGRAM_GET_IG_MEDIA_CHILDREN` - List children of a carousel post [Optional]

**Key parameters**:
- `media_id`: ID of the media post
- `ig_media_id`: Alternative media ID parameter

**Pitfalls**:
- Comments may be paginated; follow pagination cursors for complete results
- Carousel children are returned as individual media objects
- Comment moderation settings on the account affect what is returned

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Instagram connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `instagram`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas
- Instagram Business or Creator account required (personal accounts not supported)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @instagram-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @instagram-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @instagram-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @instagram-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/instagram-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@impress` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Get user info | INSTAGRAM_GET_USER_INFO | (none) |
| Create media container | INSTAGRAM_CREATE_MEDIA_CONTAINER | image_url/video_url, caption |
| Create carousel | INSTAGRAM_CREATE_CAROUSEL_CONTAINER | children, caption |
| Publish post | INSTAGRAM_CREATE_POST | ig_user_id, creation_id |
| Publish media | INSTAGRAM_POST_IG_USER_MEDIA_PUBLISH | ig_user_id, creation_id |
| Check post status | INSTAGRAM_GET_POST_STATUS | ig_container_id |
| List user media | INSTAGRAM_GET_IG_USER_MEDIA | ig_user_id |
| Get media details | INSTAGRAM_GET_IG_MEDIA | ig_media_id |
| Get post insights | INSTAGRAM_GET_POST_INSIGHTS | media_id, metric |
| Get user insights | INSTAGRAM_GET_USER_INSIGHTS | ig_user_id, metric, period |
| Get publishing limit | INSTAGRAM_GET_IG_USER_CONTENT_PUBLISHING_LIMIT | ig_user_id |
| Get media comments | INSTAGRAM_GET_IG_MEDIA_COMMENTS | ig_media_id |
| Get carousel children | INSTAGRAM_GET_IG_MEDIA_CHILDREN | ig_media_id |

#### Imported: Common Patterns

### ID Resolution

**Instagram User ID**:
```
1. Call INSTAGRAM_GET_USER_INFO
2. Extract ig_user_id from response
3. Use in all subsequent API calls
```

**Media Container Status Check**:
```
1. Call INSTAGRAM_CREATE_MEDIA_CONTAINER
2. Extract container_id from response
3. Poll INSTAGRAM_GET_POST_STATUS with container_id
4. Wait until status is 'FINISHED' before publishing
```

### Two-Phase Publishing

- Phase 1: Create media container(s) with content URLs
- Phase 2: Publish the container after it finishes processing
- Always check container status between phases for video content
- For carousels, all children must complete Phase 1 before creating the carousel container

#### Imported: Known Pitfalls

**Media URLs**:
- All image/video URLs must be publicly accessible HTTPS URLs
- URLs behind authentication, CDN restrictions, or that require cookies will fail
- Temporary URLs (pre-signed S3, etc.) may expire before processing completes

**Rate Limits**:
- 25 posts per 24-hour rolling window
- API rate limits apply separately from publishing limits
- Implement exponential backoff for 429 responses

**Account Requirements**:
- Only Business or Creator Instagram accounts are supported
- Personal accounts cannot use the Instagram Graph API
- The account must be connected to a Facebook Page

**Response Parsing**:
- Media IDs are numeric strings
- Insights data may be nested under different response keys
- Pagination uses cursor-based tokens

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
