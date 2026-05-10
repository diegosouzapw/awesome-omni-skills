---
name: "discord-automation"
description: "Discord Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Discord tasks via Rube MCP (Composio): messages, channels, roles, webhooks, reactions. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "discord-automation"
  - "automate"
  - "discord"
  - "tasks"
  - "via"
  - "rube"
  - "mcp"
  - "composio"
  - "omni-enhanced"
complexity: "intermediate"
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
family_id: "discord-automation"
family_name: "Discord Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/discord-automation"
upstream_skill: "skills/discord-automation"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "discord-automation"
---

# Discord Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/discord-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Discord Automation via Rube MCP Automate Discord operations through Composio's Discord/Discordbot toolkits via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Discord tasks via Rube MCP (Composio): messages, channels, roles, webhooks, reactions. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit discordbot (bot operations) or discord (user operations)
3. If connection is not ACTIVE, follow the returned auth link to complete Discord auth
4. Confirm connection status shows ACTIVE before running any workflows
5. DISCORDLISTMY_GUILDS - List guilds the bot belongs to [Prerequisite]
6. DISCORDBOTLISTGUILD_CHANNELS - List channels in a guild [Prerequisite]
7. DISCORDBOTCREATEMESSAGE - Send a message [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `discordbot` (bot operations) or `discord` (user operations)
3. If connection is not ACTIVE, follow the returned auth link to complete Discord auth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Send Messages

**When to use**: User wants to send messages to channels or DMs

**Tool sequence**:
1. `DISCORD_LIST_MY_GUILDS` - List guilds the bot belongs to [Prerequisite]
2. `DISCORDBOT_LIST_GUILD_CHANNELS` - List channels in a guild [Prerequisite]
3. `DISCORDBOT_CREATE_MESSAGE` - Send a message [Required]
4. `DISCORDBOT_UPDATE_MESSAGE` - Edit a sent message [Optional]

**Key parameters**:
- `channel_id`: Channel snowflake ID
- `content`: Message text (max 2000 characters)
- `embeds`: Array of embed objects for rich content
- `guild_id`: Guild ID for channel listing

**Pitfalls**:
- Bot must have SEND_MESSAGES permission in the channel
- High-frequency sends can hit per-route rate limits; respect Retry-After headers
- Only messages sent by the same bot can be edited

### 2. Send Direct Messages

**When to use**: User wants to DM a Discord user

**Tool sequence**:
1. `DISCORDBOT_CREATE_DM` - Create or get DM channel [Required]
2. `DISCORDBOT_CREATE_MESSAGE` - Send message to DM channel [Required]

**Key parameters**:
- `recipient_id`: User snowflake ID for DM
- `channel_id`: DM channel ID from CREATE_DM

**Pitfalls**:
- Cannot DM users who have DMs disabled or have blocked the bot
- CREATE_DM returns existing channel if one already exists

### 3. Manage Roles

**When to use**: User wants to create, assign, or remove roles

**Tool sequence**:
1. `DISCORDBOT_CREATE_GUILD_ROLE` - Create a new role [Optional]
2. `DISCORDBOT_ADD_GUILD_MEMBER_ROLE` - Assign role to member [Optional]
3. `DISCORDBOT_DELETE_GUILD_ROLE` - Delete a role [Optional]
4. `DISCORDBOT_GET_GUILD_MEMBER` - Get member details [Optional]
5. `DISCORDBOT_UPDATE_GUILD_MEMBER` - Update member (roles, nick, etc.) [Optional]

**Key parameters**:
- `guild_id`: Guild snowflake ID
- `user_id`: User snowflake ID
- `role_id`: Role snowflake ID
- `name`: Role name
- `permissions`: Bitwise permission value
- `color`: RGB color integer

**Pitfalls**:
- Role assignment requires MANAGE_ROLES permission
- Target role must be lower in hierarchy than bot's highest role
- DELETE permanently removes the role from all members

### 4. Manage Webhooks

**When to use**: User wants to create or use webhooks for external integrations

**Tool sequence**:
1. `DISCORDBOT_GET_GUILD_WEBHOOKS` / `DISCORDBOT_LIST_CHANNEL_WEBHOOKS` - List webhooks [Optional]
2. `DISCORDBOT_CREATE_WEBHOOK` - Create a new webhook [Optional]
3. `DISCORDBOT_EXECUTE_WEBHOOK` - Send message via webhook [Optional]
4. `DISCORDBOT_UPDATE_WEBHOOK` - Update webhook settings [Optional]

**Key parameters**:
- `webhook_id`: Webhook ID
- `webhook_token`: Webhook secret token
- `channel_id`: Channel for webhook creation
- `name`: Webhook name
- `content`/`embeds`: Message content for execution

**Pitfalls**:
- Webhook tokens are secrets; handle securely
- Webhooks can post with custom username and avatar per message
- MANAGE_WEBHOOKS permission required for creation

### 5. Manage Reactions

**When to use**: User wants to view or manage message reactions

**Tool sequence**:
1. `DISCORDBOT_LIST_MESSAGE_REACTIONS_BY_EMOJI` - List users who reacted [Optional]
2. `DISCORDBOT_DELETE_ALL_MESSAGE_REACTIONS` - Remove all reactions [Optional]
3. `DISCORDBOT_DELETE_ALL_MESSAGE_REACTIONS_BY_EMOJI` - Remove specific emoji reactions [Optional]
4. `DISCORDBOT_DELETE_USER_MESSAGE_REACTION` - Remove specific user's reaction [Optional]

**Key parameters**:
- `channel_id`: Channel ID
- `message_id`: Message snowflake ID
- `emoji_name`: URL-encoded emoji or `name:id` for custom emojis
- `user_id`: User ID for specific reaction removal

**Pitfalls**:
- Unicode emojis must be URL-encoded (e.g., '%F0%9F%91%8D' for thumbs up)
- Custom emojis use `name:id` format
- DELETE_ALL requires MANAGE_MESSAGES permission

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Discord connection via `RUBE_MANAGE_CONNECTIONS` with toolkits `discord` and `discordbot`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @discord-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @discord-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @discord-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @discord-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/discord-automation`, fails to mention provenance, or does not use any copied source files at all.
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
- `@discord-bot-architect` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List guilds | DISCORD_LIST_MY_GUILDS | (none) |
| List channels | DISCORDBOT_LIST_GUILD_CHANNELS | guild_id |
| Send message | DISCORDBOT_CREATE_MESSAGE | channel_id, content |
| Edit message | DISCORDBOT_UPDATE_MESSAGE | channel_id, message_id |
| Get messages | DISCORDBOT_LIST_MESSAGES | channel_id, limit |
| Create DM | DISCORDBOT_CREATE_DM | recipient_id |
| Create role | DISCORDBOT_CREATE_GUILD_ROLE | guild_id, name |
| Assign role | DISCORDBOT_ADD_GUILD_MEMBER_ROLE | guild_id, user_id, role_id |
| Delete role | DISCORDBOT_DELETE_GUILD_ROLE | guild_id, role_id |
| Get member | DISCORDBOT_GET_GUILD_MEMBER | guild_id, user_id |
| Update member | DISCORDBOT_UPDATE_GUILD_MEMBER | guild_id, user_id |
| Get guild | DISCORDBOT_GET_GUILD | guild_id |
| Create webhook | DISCORDBOT_CREATE_WEBHOOK | channel_id, name |
| Execute webhook | DISCORDBOT_EXECUTE_WEBHOOK | webhook_id, webhook_token |
| List webhooks | DISCORDBOT_GET_GUILD_WEBHOOKS | guild_id |
| Get reactions | DISCORDBOT_LIST_MESSAGE_REACTIONS_BY_EMOJI | channel_id, message_id, emoji_name |
| Clear reactions | DISCORDBOT_DELETE_ALL_MESSAGE_REACTIONS | channel_id, message_id |
| Test auth | DISCORDBOT_TEST_AUTH | (none) |
| Get channel | DISCORDBOT_GET_CHANNEL | channel_id |

#### Imported: Common Patterns

### Snowflake IDs

Discord uses snowflake IDs (64-bit integers as strings) for all entities:
- Guilds, channels, users, roles, messages, webhooks

### Permission Bitfields

Permissions are combined using bitwise OR:
- SEND_MESSAGES = 0x800
- MANAGE_ROLES = 0x10000000
- MANAGE_MESSAGES = 0x2000
- ADMINISTRATOR = 0x8

### Pagination

- Most list endpoints support `limit`, `before`, `after` parameters
- Messages: max 100 per request
- Reactions: max 100 per request, use `after` for pagination

#### Imported: Known Pitfalls

**Bot vs User Tokens**:
- `discordbot` toolkit uses bot tokens; `discord` uses user OAuth
- Bot operations are preferred for automation

**Rate Limits**:
- Discord enforces per-route rate limits
- Respect `Retry-After` headers on 429 responses

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
