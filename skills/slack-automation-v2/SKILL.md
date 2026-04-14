---
name: slack-automation-v2
description: "Slack Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Slack workspace operations including messaging, search, channel management, and reaction workflows through Composio's Slack toolkit and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["slack-automation-v2", "slack-automation", "automate", "slack", "workspace", "operations", "including", "messaging"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Slack Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/slack-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Slack Automation via Rube MCP Automate Slack workspace operations including messaging, search, channel management, and reaction workflows through Composio's Slack toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Slack workspace operations including messaging, search, channel management, and reaction workflows through Composio's Slack toolkit.
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
2. Call RUBEMANAGECONNECTIONS with toolkit slack
3. If connection is not ACTIVE, follow the returned auth link to complete Slack OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. SLACKFINDCHANNELS - Resolve channel name to channel ID [Prerequisite]
6. SLACKLISTALLCHANNELS - Fallback if FINDCHANNELS returns empty/ambiguous results [Fallback]
7. SLACKFINDUSERS - Resolve user for DMs or @mentions [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `slack`
3. If connection is not ACTIVE, follow the returned auth link to complete Slack OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Send Messages to Channels

**When to use**: User wants to post a message to a Slack channel or DM

**Tool sequence**:
1. `SLACK_FIND_CHANNELS` - Resolve channel name to channel ID [Prerequisite]
2. `SLACK_LIST_ALL_CHANNELS` - Fallback if FIND_CHANNELS returns empty/ambiguous results [Fallback]
3. `SLACK_FIND_USERS` - Resolve user for DMs or @mentions [Optional]
4. `SLACK_OPEN_DM` - Open/reuse a DM channel if messaging a user directly [Optional]
5. `SLACK_SEND_MESSAGE` - Post the message with resolved channel ID [Required]
6. `SLACK_UPDATES_A_SLACK_MESSAGE` - Edit the posted message if corrections needed [Optional]

**Key parameters**:
- `channel`: Channel ID or name (without '#' prefix)
- `markdown_text`: Preferred field for formatted messages (supports headers, bold, italic, code blocks)
- `text`: Raw text fallback (deprecated in favor of markdown_text)
- `thread_ts`: Timestamp of parent message to reply in a thread
- `blocks`: Block Kit layout blocks (deprecated, use markdown_text)

**Pitfalls**:
- `SLACK_FIND_CHANNELS` requires `query` param; missing it errors with "Invalid request data provided"
- `SLACK_SEND_MESSAGE` requires valid channel plus one of markdown_text/text/blocks/attachments
- Invalid block payloads return error=invalid_blocks (max 50 blocks)
- Replies become top-level posts if `thread_ts` is omitted
- Persist `response.data.channel` and `response.data.message.ts` from SEND_MESSAGE for edit/thread operations

### 2. Search Messages and Conversations

**When to use**: User wants to find specific messages across the workspace

**Tool sequence**:
1. `SLACK_FIND_CHANNELS` - Resolve channel for scoped search with `in:#channel` [Optional]
2. `SLACK_FIND_USERS` - Resolve user for author filter with `from:@user` [Optional]
3. `SLACK_SEARCH_MESSAGES` - Run keyword search across accessible conversations [Required]
4. `SLACK_FETCH_MESSAGE_THREAD_FROM_A_CONVERSATION` - Expand threads for relevant hits [Required]

**Key parameters**:
- `query`: Search string supporting modifiers (`in:#channel`, `from:@user`, `before:YYYY-MM-DD`, `after:YYYY-MM-DD`, `has:link`, `has:file`)
- `count`: Results per page (max 100), or total with auto_paginate=true
- `sort`: 'score' (relevance) or 'timestamp' (chronological)
- `sort_dir`: 'asc' or 'desc'

**Pitfalls**:
- Validation fails if `query` is missing/empty
- `ok=true` can still mean no hits (`response.data.messages.total=0`)
- Matches are under `response.data.messages.matches` (sometimes also `response.data_preview.messages.matches`)
- `match.text` may be empty/truncated; key info can appear in `matches[].attachments[]`
- Thread expansion via FETCH_MESSAGE_THREAD can truncate when `response.data.has_more=true`; paginate via `response_metadata.next_cursor`

### 3. Manage Channels and Users

**When to use**: User wants to list channels, users, or workspace info

**Tool sequence**:
1. `SLACK_FETCH_TEAM_INFO` - Validate connectivity and get workspace identity [Required]
2. `SLACK_LIST_ALL_CHANNELS` - Enumerate public channels [Required]
3. `SLACK_LIST_CONVERSATIONS` - Include private channels and DMs [Optional]
4. `SLACK_LIST_ALL_USERS` - List workspace members [Required]
5. `SLACK_RETRIEVE_CONVERSATION_INFORMATION` - Get detailed channel metadata [Optional]
6. `SLACK_LIST_USER_GROUPS_FOR_TEAM_WITH_OPTIONS` - List user groups [Optional]

**Key parameters**:
- `cursor`: Pagination cursor from `response_metadata.next_cursor`
- `limit`: Results per page (default varies; set explicitly for large workspaces)
- `types`: Channel types filter ('public_channel', 'private_channel', 'im', 'mpim')

**Pitfalls**:
- Workspace metadata is nested under `response.data.team`, not top-level
- `SLACK_LIST_ALL_CHANNELS` returns public channels only; use `SLACK_LIST_CONVERSATIONS` for private/IM coverage
- `SLACK_LIST_ALL_USERS` can hit HTTP 429 rate limits; honor Retry-After header
- Always paginate via `response_metadata.next_cursor` until empty; de-duplicate by `id`

### 4. React to and Thread Messages

**When to use**: User wants to add reactions or manage threaded conversations

**Tool sequence**:
1. `SLACK_SEARCH_MESSAGES` or `SLACK_FETCH_CONVERSATION_HISTORY` - Find the target message [Prerequisite]
2. `SLACK_ADD_REACTION_TO_AN_ITEM` - Add an emoji reaction [Required]
3. `SLACK_FETCH_ITEM_REACTIONS` - List reactions on a message [Optional]
4. `SLACK_REMOVE_REACTION_FROM_ITEM` - Remove a reaction [Optional]
5. `SLACK_SEND_MESSAGE` - Reply in thread using `thread_ts` [Optional]
6. `SLACK_FETCH_MESSAGE_THREAD_FROM_A_CONVERSATION` - Read full thread [Optional]

**Key parameters**:
- `channel`: Channel ID where the message lives
- `timestamp` / `ts`: Message timestamp (unique identifier like '1234567890.123456')
- `name`: Emoji name without colons (e.g., 'thumbsup', 'wave::skin-tone-3')
- `thread_ts`: Parent message timestamp for threaded replies

**Pitfalls**:
- Reactions require exact channel ID + message timestamp pair
- Emoji names use Slack's naming convention without colons
- `SLACK_FETCH_CONVERSATION_HISTORY` only returns main channel timeline, NOT threaded replies
- Use `SLACK_FETCH_MESSAGE_THREAD_FROM_A_CONVERSATION` with parent's `thread_ts` to get thread replies

### 5. Schedule Messages

**When to use**: User wants to schedule a message for future delivery

**Tool sequence**:
1. `SLACK_FIND_CHANNELS` - Resolve channel ID [Prerequisite]
2. `SLACK_SCHEDULE_MESSAGE` - Schedule the message with `post_at` timestamp [Required]

**Key parameters**:
- `channel`: Resolved channel ID
- `post_at`: Unix timestamp for delivery (up to 120 days in advance)
- `text` / `blocks`: Message content

**Pitfalls**:
- Scheduling is limited to 120 days in advance
- `post_at` must be a Unix timestamp, not ISO 8601

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Slack connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `slack`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @slack-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/slack-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/slack-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @slack-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/slack-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Find channels | `SLACK_FIND_CHANNELS` | `query` |
| List all channels | `SLACK_LIST_ALL_CHANNELS` | `limit`, `cursor`, `types` |
| Send message | `SLACK_SEND_MESSAGE` | `channel`, `markdown_text` |
| Edit message | `SLACK_UPDATES_A_SLACK_MESSAGE` | `channel`, `ts`, `markdown_text` |
| Search messages | `SLACK_SEARCH_MESSAGES` | `query`, `count`, `sort` |
| Get thread | `SLACK_FETCH_MESSAGE_THREAD_FROM_A_CONVERSATION` | `channel`, `ts` |
| Add reaction | `SLACK_ADD_REACTION_TO_AN_ITEM` | `channel`, `name`, `timestamp` |
| Find users | `SLACK_FIND_USERS` | `search_query` or `email` |
| List users | `SLACK_LIST_ALL_USERS` | `limit`, `cursor` |
| Open DM | `SLACK_OPEN_DM` | user IDs |
| Schedule message | `SLACK_SCHEDULE_MESSAGE` | `channel`, `post_at`, `text` |
| Get channel info | `SLACK_RETRIEVE_CONVERSATION_INFORMATION` | channel ID |
| Channel history | `SLACK_FETCH_CONVERSATION_HISTORY` | `channel`, `oldest`, `latest` |
| Workspace info | `SLACK_FETCH_TEAM_INFO` | (none) |

#### Imported: Common Patterns

### ID Resolution
Always resolve display names to IDs before operations:
- **Channel name -> Channel ID**: `SLACK_FIND_CHANNELS` with `query` param
- **User name -> User ID**: `SLACK_FIND_USERS` with `search_query` or `email`
- **DM channel**: `SLACK_OPEN_DM` with resolved user IDs

### Pagination
Most list endpoints use cursor-based pagination:
- Follow `response_metadata.next_cursor` until empty
- Set explicit `limit` values (e.g., 100-200) for reliable paging
- De-duplicate results by `id` across pages

### Message Formatting
- Prefer `markdown_text` over `text` or `blocks` for formatted messages
- Use `<@USER_ID>` format to mention users (not @username)
- Use `\n` for line breaks in markdown_text

#### Imported: Known Pitfalls

- **Channel resolution**: `SLACK_FIND_CHANNELS` can return empty results if channel is private and bot hasn't been invited
- **Rate limits**: `SLACK_LIST_ALL_USERS` and other list endpoints can hit HTTP 429; honor Retry-After header
- **Nested responses**: Results may be nested under `response.data.results[0].response.data` in wrapped executions
- **Thread vs channel**: `SLACK_FETCH_CONVERSATION_HISTORY` returns main timeline only; use `SLACK_FETCH_MESSAGE_THREAD_FROM_A_CONVERSATION` for thread replies
- **Message editing**: Requires both `channel` and original message `ts`; persist these from SEND_MESSAGE response
- **Search delays**: Recently posted messages may not appear in search results immediately
- **Scope limitations**: Missing OAuth scopes can cause 403 errors; check with `SLACK_GET_APP_PERMISSION_SCOPES`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
