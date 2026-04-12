---
name: reddit-automation
description: "Reddit Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Reddit tasks via Rube MCP (Composio): search subreddits, create posts, manage comments, and browse top content. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["reddit-automation", "automate", "reddit", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Reddit Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/reddit-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Reddit Automation via Rube MCP Automate Reddit operations through Composio's Reddit toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Reddit tasks via Rube MCP (Composio): search subreddits, create posts, manage comments, and browse top content. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit reddit
3. If connection is not ACTIVE, follow the returned auth link to complete Reddit OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. REDDITSEARCHACROSS_SUBREDDITS - Search for posts matching a query [Required]
6. query: Search terms
7. subreddit: Limit search to a specific subreddit (optional)

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `reddit`
3. If connection is not ACTIVE, follow the returned auth link to complete Reddit OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Search Reddit

**When to use**: User wants to find posts across subreddits

**Tool sequence**:
1. `REDDIT_SEARCH_ACROSS_SUBREDDITS` - Search for posts matching a query [Required]

**Key parameters**:
- `query`: Search terms
- `subreddit`: Limit search to a specific subreddit (optional)
- `sort`: Sort results by 'relevance', 'hot', 'top', 'new', 'comments'
- `time_filter`: Time range ('hour', 'day', 'week', 'month', 'year', 'all')
- `limit`: Number of results to return

**Pitfalls**:
- Search results may not include very recent posts due to indexing delay
- The `time_filter` parameter only works with certain sort options
- Results are paginated; use after/before tokens for additional pages
- NSFW content may be filtered based on account settings

### 2. Create Posts

**When to use**: User wants to submit a new post to a subreddit

**Tool sequence**:
1. `REDDIT_LIST_SUBREDDIT_POST_FLAIRS` - Get available post flairs [Optional]
2. `REDDIT_CREATE_REDDIT_POST` - Submit the post [Required]

**Key parameters**:
- `subreddit`: Target subreddit name (without 'r/' prefix)
- `title`: Post title
- `text`: Post body text (for text posts)
- `url`: Link URL (for link posts)
- `flair_id`: Flair ID from the subreddit's flair list

**Pitfalls**:
- Some subreddits require flair; use LIST_SUBREDDIT_POST_FLAIRS first
- Subreddit posting rules vary widely; karma/age restrictions may apply
- Text and URL are mutually exclusive; a post is either text or link
- Rate limits apply; avoid rapid successive post creation
- The subreddit name should not include 'r/' prefix

### 3. Manage Comments

**When to use**: User wants to comment on posts or manage existing comments

**Tool sequence**:
1. `REDDIT_RETRIEVE_POST_COMMENTS` - Get comments on a post [Optional]
2. `REDDIT_POST_REDDIT_COMMENT` - Add a comment to a post or reply to a comment [Required]
3. `REDDIT_EDIT_REDDIT_COMMENT_OR_POST` - Edit an existing comment [Optional]
4. `REDDIT_DELETE_REDDIT_COMMENT` - Delete a comment [Optional]

**Key parameters**:
- `post_id`: ID of the post (for retrieving or commenting on)
- `parent_id`: Full name of the parent (e.g., 't3_abc123' for post, 't1_xyz789' for comment)
- `body`: Comment text content
- `thing_id`: Full name of the item to edit or delete

**Pitfalls**:
- Reddit uses 'fullname' format: 't1_' prefix for comments, 't3_' for posts
- Editing replaces the entire comment body; include all desired content
- Deleted comments show as '[deleted]' but the tree structure remains
- Comment depth limits may apply in some subreddits

### 4. Browse Subreddit Content

**When to use**: User wants to view top or trending content from a subreddit

**Tool sequence**:
1. `REDDIT_GET_R_TOP` - Get top posts from a subreddit [Required]
2. `REDDIT_GET` - Get posts from a subreddit endpoint [Alternative]
3. `REDDIT_RETRIEVE_REDDIT_POST` - Get full details for a specific post [Optional]

**Key parameters**:
- `subreddit`: Subreddit name
- `time_filter`: Time range for top posts ('hour', 'day', 'week', 'month', 'year', 'all')
- `limit`: Number of posts to retrieve
- `post_id`: Specific post ID for full details

**Pitfalls**:
- Top posts with time_filter='all' returns all-time top content
- Post details include the body text but comments require a separate call
- Some posts may be removed or hidden based on subreddit rules
- NSFW posts are included unless filtered at the account level

### 5. Manage Posts

**When to use**: User wants to edit or delete their own posts

**Tool sequence**:
1. `REDDIT_EDIT_REDDIT_COMMENT_OR_POST` - Edit a post's text content [Optional]
2. `REDDIT_DELETE_REDDIT_POST` - Delete a post [Optional]
3. `REDDIT_GET_USER_FLAIR` - Get user's flair in a subreddit [Optional]

**Key parameters**:
- `thing_id`: Full name of the post (e.g., 't3_abc123')
- `body`: New text content (for editing)
- `subreddit`: Subreddit name (for flair)

**Pitfalls**:
- Only text posts can have their body edited; link posts cannot be modified
- Post titles cannot be edited after submission
- Deletion is permanent; deleted posts show as '[deleted]'
- User flair is per-subreddit and may be restricted

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Reddit connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `reddit`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @reddit-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/reddit-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/reddit-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @reddit-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/reddit-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Search Reddit | REDDIT_SEARCH_ACROSS_SUBREDDITS | query, subreddit, sort, time_filter |
| Create post | REDDIT_CREATE_REDDIT_POST | subreddit, title, text/url |
| Get post comments | REDDIT_RETRIEVE_POST_COMMENTS | post_id |
| Add comment | REDDIT_POST_REDDIT_COMMENT | parent_id, body |
| Edit comment/post | REDDIT_EDIT_REDDIT_COMMENT_OR_POST | thing_id, body |
| Delete comment | REDDIT_DELETE_REDDIT_COMMENT | thing_id |
| Delete post | REDDIT_DELETE_REDDIT_POST | thing_id |
| Get top posts | REDDIT_GET_R_TOP | subreddit, time_filter, limit |
| Browse subreddit | REDDIT_GET | subreddit |
| Get post details | REDDIT_RETRIEVE_REDDIT_POST | post_id |
| Get specific comment | REDDIT_RETRIEVE_SPECIFIC_COMMENT | comment_id |
| List post flairs | REDDIT_LIST_SUBREDDIT_POST_FLAIRS | subreddit |
| Get user flair | REDDIT_GET_USER_FLAIR | subreddit |

#### Imported: Common Patterns

### Reddit Fullname Format

**Prefixes**:
```
t1_ = Comment (e.g., 't1_abc123')
t2_ = Account (e.g., 't2_xyz789')
t3_ = Post/Link (e.g., 't3_def456')
t4_ = Message
t5_ = Subreddit
```

**Usage**:
```
1. Retrieve a post to get its fullname (t3_XXXXX)
2. Use fullname as parent_id when commenting
3. Use fullname as thing_id when editing/deleting
```

### Pagination

- Reddit uses cursor-based pagination with 'after' and 'before' tokens
- Set `limit` for items per page (max 100)
- Check response for `after` token
- Pass `after` value in subsequent requests to get next page

### Flair Resolution

```
1. Call REDDIT_LIST_SUBREDDIT_POST_FLAIRS with subreddit name
2. Find matching flair by text or category
3. Extract flair_id
4. Include flair_id when creating the post
```

#### Imported: Known Pitfalls

**Rate Limits**:
- Reddit enforces rate limits per account and per OAuth app
- Posting is limited to approximately 1 post per 10 minutes for new accounts
- Commenting has similar but less restrictive limits
- 429 errors should trigger exponential backoff

**Content Rules**:
- Each subreddit has its own posting rules and requirements
- Some subreddits are restricted or private
- Karma requirements may prevent posting in certain subreddits
- Auto-moderator rules may remove posts that match certain patterns

**ID Formats**:
- Always use fullname format (with prefix) for parent_id and thing_id
- Raw IDs without prefix will cause 'Invalid ID' errors
- Post IDs from search results may need 't3_' prefix added

**Text Formatting**:
- Reddit uses Markdown for post and comment formatting
- Code blocks, tables, and headers are supported
- Links use `text` format
- Mention users with `u/username`, subreddits with `r/subreddit`
