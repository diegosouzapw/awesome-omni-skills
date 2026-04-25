---
name: microsoft-teams-automation
description: "Microsoft Teams Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Microsoft Teams tasks via Rube MCP (Composio): send messages, manage channels, create meetings, handle chats, and search messages. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["microsoft-teams-automation", "automate", "microsoft", "teams", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Microsoft Teams Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/microsoft-teams-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Microsoft Teams Automation via Rube MCP Automate Microsoft Teams operations through Composio's Microsoft Teams toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Microsoft Teams tasks via Rube MCP (Composio): send messages, manage channels, create meetings, handle chats, and search messages. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit microsoft_teams
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. MICROSOFTTEAMSTEAMS_LIST - List teams to find target team [Prerequisite]
6. MICROSOFTTEAMSTEAMSLISTCHANNELS - List channels in the team [Prerequisite]
7. MICROSOFTTEAMSTEAMSPOSTCHANNEL_MESSAGE - Post the message [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `microsoft_teams`
3. If connection is not ACTIVE, follow the returned auth link to complete Microsoft OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Send Channel Messages

**When to use**: User wants to post a message to a Teams channel

**Tool sequence**:
1. `MICROSOFT_TEAMS_TEAMS_LIST` - List teams to find target team [Prerequisite]
2. `MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS` - List channels in the team [Prerequisite]
3. `MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE` - Post the message [Required]

**Key parameters**:
- `team_id`: UUID of the team (from TEAMS_LIST)
- `channel_id`: Channel ID (from LIST_CHANNELS, format: '19:...@thread.tacv2')
- `content`: Message text or HTML
- `content_type`: 'text' or 'html'

**Pitfalls**:
- team_id must be a valid UUID format
- channel_id must be in thread format (e.g., '19:abc@thread.tacv2')
- TEAMS_LIST may paginate (~100 items/page); follow @odata.nextLink to find all teams
- LIST_CHANNELS can return 403 if user lacks access to the team
- Messages over ~28KB can trigger 400/413 errors; split long content
- Throttling may return 429; use exponential backoff (1s/2s/4s)

### 2. Send Chat Messages

**When to use**: User wants to send a direct or group chat message

**Tool sequence**:
1. `MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS` - List existing chats [Optional]
2. `MICROSOFT_TEAMS_LIST_USERS` - Find users for new chats [Optional]
3. `MICROSOFT_TEAMS_TEAMS_CREATE_CHAT` - Create a new chat [Optional]
4. `MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE` - Send the message [Required]

**Key parameters**:
- `chat_id`: Chat ID (from GET_ALL_CHATS or CREATE_CHAT)
- `content`: Message content
- `content_type`: 'text' or 'html'
- `chatType`: 'oneOnOne' or 'group' (for CREATE_CHAT)
- `members`: Array of member objects (for CREATE_CHAT)

**Pitfalls**:
- CREATE_CHAT requires the authenticated user as one of the members
- oneOnOne chats return existing chat if one already exists between the two users
- group chats require at least one member with 'owner' role
- member user_odata_bind must use full Microsoft Graph URL format
- Chat filter support is very limited; filter client-side when needed

### 3. Create Online Meetings

**When to use**: User wants to schedule a Microsoft Teams meeting

**Tool sequence**:
1. `MICROSOFT_TEAMS_LIST_USERS` - Find participant user IDs [Optional]
2. `MICROSOFT_TEAMS_CREATE_MEETING` - Create the meeting [Required]

**Key parameters**:
- `subject`: Meeting title
- `start_date_time`: ISO 8601 start time (e.g., '2024-08-15T10:00:00Z')
- `end_date_time`: ISO 8601 end time (must be after start)
- `participants`: Array of user objects with user_id and role

**Pitfalls**:
- end_date_time must be strictly after start_date_time
- Participants require valid Microsoft user_id (GUID) values, not emails
- This creates a standalone meeting not linked to a calendar event
- For calendar-linked meetings, use OUTLOOK_CALENDAR_CREATE_EVENT with is_online_meeting=true

### 4. Manage Teams and Channels

**When to use**: User wants to list, create, or manage teams and channels

**Tool sequence**:
1. `MICROSOFT_TEAMS_TEAMS_LIST` - List all accessible teams [Required]
2. `MICROSOFT_TEAMS_GET_TEAM` - Get details for a specific team [Optional]
3. `MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS` - List channels in a team [Optional]
4. `MICROSOFT_TEAMS_GET_CHANNEL` - Get channel details [Optional]
5. `MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL` - Create a new channel [Optional]
6. `MICROSOFT_TEAMS_LIST_TEAM_MEMBERS` - List team members [Optional]
7. `MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM` - Add a member to the team [Optional]

**Key parameters**:
- `team_id`: Team UUID
- `channel_id`: Channel ID in thread format
- `filter`: OData filter string (e.g., "startsWith(displayName,'Project')")
- `select`: Comma-separated properties to return

**Pitfalls**:
- TEAMS_LIST pagination: follow @odata.nextLink in large tenants
- Private/shared channels may be omitted unless permissions align
- GET_CHANNEL returns 404 if team_id or channel_id is wrong
- Always source IDs from list operations; do not guess ID formats

### 5. Search Messages

**When to use**: User wants to find messages across Teams chats and channels

**Tool sequence**:
1. `MICROSOFT_TEAMS_SEARCH_MESSAGES` - Search with KQL syntax [Required]

**Key parameters**:
- `query`: KQL search query (supports from:, sent:, attachments, boolean logic)

**Pitfalls**:
- Newly posted messages may take 30-60 seconds to appear in search
- Search is eventually consistent; do not rely on it for immediate delivery confirmation
- Use message listing tools for real-time message verification

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Microsoft Teams connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `microsoft_teams`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @microsoft-teams-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @microsoft-teams-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @microsoft-teams-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @microsoft-teams-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/microsoft-teams-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List teams | MICROSOFT_TEAMS_TEAMS_LIST | filter, select, top |
| Get team details | MICROSOFT_TEAMS_GET_TEAM | team_id |
| List channels | MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS | team_id, filter |
| Get channel | MICROSOFT_TEAMS_GET_CHANNEL | team_id, channel_id |
| Create channel | MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL | team_id, displayName |
| Post to channel | MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE | team_id, channel_id, content |
| List chats | MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS | user_id, limit |
| Create chat | MICROSOFT_TEAMS_TEAMS_CREATE_CHAT | chatType, members, topic |
| Post to chat | MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE | chat_id, content |
| Create meeting | MICROSOFT_TEAMS_CREATE_MEETING | subject, start_date_time, end_date_time |
| List users | MICROSOFT_TEAMS_LIST_USERS | filter, select, top |
| List team members | MICROSOFT_TEAMS_LIST_TEAM_MEMBERS | team_id |
| Add team member | MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM | team_id, user_id |
| Search messages | MICROSOFT_TEAMS_SEARCH_MESSAGES | query |
| Get chat message | MICROSOFT_TEAMS_GET_CHAT_MESSAGE | chat_id, message_id |
| List joined teams | MICROSOFT_TEAMS_LIST_USER_JOINED_TEAMS | (none) |

#### Imported: Common Patterns

### Team and Channel ID Resolution

```
1. Call MICROSOFT_TEAMS_TEAMS_LIST
2. Find team by displayName
3. Extract team id (UUID format)
4. Call MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS with team_id
5. Find channel by displayName
6. Extract channel id (19:...@thread.tacv2 format)
```

### User Resolution

```
1. Call MICROSOFT_TEAMS_LIST_USERS
2. Filter by displayName or email
3. Extract user id (UUID format)
4. Use for meeting participants, chat members, or team operations
```

### Pagination

- Teams/Users: Follow @odata.nextLink URL for next page
- Chats: Auto-paginates up to limit; use top for page size (max 50)
- Use `top` parameter to control page size
- Continue until @odata.nextLink is absent

#### Imported: Known Pitfalls

**Authentication and Permissions**:
- Different operations require different Microsoft Graph permissions
- 403 errors indicate insufficient permissions or team access
- Some operations require admin consent in the Azure AD tenant

**ID Formats**:
- Team IDs: UUID format (e.g., '87b0560f-fc0d-4442-add8-b380ca926707')
- Channel IDs: Thread format (e.g., '19:abc123@thread.tacv2')
- Chat IDs: Various formats (e.g., '19:meeting_xxx@thread.v2')
- User IDs: UUID format
- Never guess IDs; always resolve from list operations

**Rate Limits**:
- Microsoft Graph enforces throttling
- 429 responses include Retry-After header
- Keep requests to a few per second
- Batch operations help reduce total request count

**Message Formatting**:
- HTML content_type supports rich formatting
- Adaptive cards require additional handling
- Message size limit is approximately 28KB
- Split long content into multiple messages

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
