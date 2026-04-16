---
name: telegram-automation
description: "Telegram Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Telegram tasks via Rube MCP (Composio): send messages, manage chats, share photos/documents, and handle bot commands. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["telegram-automation", "automate", "telegram", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Telegram Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/telegram-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Telegram Automation via Rube MCP Automate Telegram operations through Composio's Telegram toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Telegram tasks via Rube MCP (Composio): send messages, manage chats, share photos/documents, and handle bot commands. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit telegram
3. If connection is not ACTIVE, follow the returned auth link to configure the Telegram bot
4. Confirm connection status shows ACTIVE before running any workflows
5. TELEGRAMGETME - Verify bot identity and connection [Prerequisite]
6. TELEGRAMGETCHAT - Get chat details and verify access [Optional]
7. TELEGRAMSENDMESSAGE - Send a text message [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `telegram`
3. If connection is not ACTIVE, follow the returned auth link to configure the Telegram bot
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Send Messages

**When to use**: User wants to send text messages to a Telegram chat

**Tool sequence**:
1. `TELEGRAM_GET_ME` - Verify bot identity and connection [Prerequisite]
2. `TELEGRAM_GET_CHAT` - Get chat details and verify access [Optional]
3. `TELEGRAM_SEND_MESSAGE` - Send a text message [Required]

**Key parameters**:
- `chat_id`: Numeric chat ID or channel username (e.g., '@channelname')
- `text`: Message text content
- `parse_mode`: 'HTML' or 'MarkdownV2' for formatting
- `disable_notification`: Send silently without notification sound
- `reply_to_message_id`: Message ID to reply to

**Pitfalls**:
- Bot must be a member of the chat/group to send messages
- MarkdownV2 requires escaping special characters: `_*[]()~>#+-=|{}.!`
- HTML mode supports limited tags: `<b>`, `<i>`, `<code>`, `<pre>`, `<a>`
- Messages have a 4096 character limit; split longer content

### 2. Send Photos and Documents

**When to use**: User wants to share images or files in a Telegram chat

**Tool sequence**:
1. `TELEGRAM_SEND_PHOTO` - Send an image [Optional]
2. `TELEGRAM_SEND_DOCUMENT` - Send a file/document [Optional]

**Key parameters**:
- `chat_id`: Target chat ID
- `photo`: Photo URL or file_id (for SEND_PHOTO)
- `document`: Document URL or file_id (for SEND_DOCUMENT)
- `caption`: Optional caption for the media

**Pitfalls**:
- Photo captions have a 1024 character limit
- Document captions also have a 1024 character limit
- Files up to 50MB can be sent via bot API
- Photos are compressed by Telegram; use SEND_DOCUMENT for uncompressed images

### 3. Manage Chats

**When to use**: User wants to get chat information or manage chat settings

**Tool sequence**:
1. `TELEGRAM_GET_CHAT` - Get detailed chat information [Required]
2. `TELEGRAM_GET_CHAT_ADMINISTRATORS` - List chat admins [Optional]
3. `TELEGRAM_GET_CHAT_MEMBERS_COUNT` - Get member count [Optional]
4. `TELEGRAM_EXPORT_CHAT_INVITE_LINK` - Generate invite link [Optional]

**Key parameters**:
- `chat_id`: Target chat ID or username

**Pitfalls**:
- Bot must be an administrator to export invite links
- GET_CHAT returns different fields for private chats vs groups vs channels
- Member count may be approximate for very large groups
- Admin list does not include regular members

### 4. Edit and Delete Messages

**When to use**: User wants to modify or remove previously sent messages

**Tool sequence**:
1. `TELEGRAM_EDIT_MESSAGE` - Edit a sent message [Optional]
2. `TELEGRAM_DELETE_MESSAGE` - Delete a message [Optional]

**Key parameters**:
- `chat_id`: Chat where the message is located
- `message_id`: ID of the message to edit or delete
- `text`: New text content (for edit)

**Pitfalls**:
- Bots can only edit their own messages
- Messages can only be deleted within 48 hours of sending
- In groups, bots with delete permissions can delete any message
- Editing a message removes its 'edited' timestamp history

### 5. Forward Messages and Get Updates

**When to use**: User wants to forward messages or retrieve recent updates

**Tool sequence**:
1. `TELEGRAM_FORWARD_MESSAGE` - Forward a message to another chat [Optional]
2. `TELEGRAM_GET_UPDATES` - Get recent bot updates/messages [Optional]
3. `TELEGRAM_GET_CHAT_HISTORY` - Get chat message history [Optional]

**Key parameters**:
- `from_chat_id`: Source chat for forwarding
- `chat_id`: Destination chat for forwarding
- `message_id`: Message to forward
- `offset`: Update offset for GET_UPDATES
- `limit`: Number of updates to retrieve

**Pitfalls**:
- Forwarded messages show the original sender attribution
- GET_UPDATES returns a limited window of recent updates
- Chat history access may be limited by bot permissions and chat type
- Use offset to avoid processing the same update twice

### 6. Manage Bot Commands

**When to use**: User wants to set or update bot command menu

**Tool sequence**:
1. `TELEGRAM_SET_MY_COMMANDS` - Set the bot's command list [Required]
2. `TELEGRAM_ANSWER_CALLBACK_QUERY` - Respond to inline button presses [Optional]

**Key parameters**:
- `commands`: Array of command objects with `command` and `description`
- `callback_query_id`: ID of the callback query to answer

**Pitfalls**:
- Commands must start with '/' and be lowercase
- Command descriptions have a 256 character limit
- Callback queries must be answered within 10 seconds or they expire
- Setting commands replaces the entire command list

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Telegram connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `telegram`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas
- Telegram Bot Token required (created via @BotFather)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @telegram-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @telegram-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @telegram-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @telegram-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/telegram-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@sympy` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@systems-programming-rust-project` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tailwind-design-system` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tailwind-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Verify bot | TELEGRAM_GET_ME | (none) |
| Send message | TELEGRAM_SEND_MESSAGE | chat_id, text, parse_mode |
| Send photo | TELEGRAM_SEND_PHOTO | chat_id, photo, caption |
| Send document | TELEGRAM_SEND_DOCUMENT | chat_id, document, caption |
| Edit message | TELEGRAM_EDIT_MESSAGE | chat_id, message_id, text |
| Delete message | TELEGRAM_DELETE_MESSAGE | chat_id, message_id |
| Forward message | TELEGRAM_FORWARD_MESSAGE | chat_id, from_chat_id, message_id |
| Get chat info | TELEGRAM_GET_CHAT | chat_id |
| Get chat admins | TELEGRAM_GET_CHAT_ADMINISTRATORS | chat_id |
| Get member count | TELEGRAM_GET_CHAT_MEMBERS_COUNT | chat_id |
| Export invite link | TELEGRAM_EXPORT_CHAT_INVITE_LINK | chat_id |
| Get updates | TELEGRAM_GET_UPDATES | offset, limit |
| Get chat history | TELEGRAM_GET_CHAT_HISTORY | chat_id |
| Set bot commands | TELEGRAM_SET_MY_COMMANDS | commands |
| Answer callback | TELEGRAM_ANSWER_CALLBACK_QUERY | callback_query_id |

#### Imported: Common Patterns

### Chat ID Resolution

**From username**:
```
1. Use '@username' format as chat_id (for public channels/groups)
2. For private chats, numeric chat_id is required
3. Call GET_CHAT with username to retrieve numeric ID
```

**From GET_UPDATES**:
```
1. Call TELEGRAM_GET_UPDATES
2. Extract chat.id from message objects
3. Use numeric chat_id in subsequent calls
```

### Message Formatting

- Use `parse_mode: 'HTML'` for `<b>bold</b>`, `<i>italic</i>`, `<code>code</code>`
- Use `parse_mode: 'MarkdownV2'` for `*bold*`, `_italic_`, `` `code` ``
- Escape special chars in MarkdownV2: `_ * [ ] ( ) ~ > # + - = | { } . !`
- Omit parse_mode for plain text without formatting

#### Imported: Known Pitfalls

**Bot Permissions**:
- Bots must be added to groups/channels to interact
- Admin permissions needed for: deleting messages, exporting invite links, managing members
- Bots cannot initiate conversations; users must start them first

**Rate Limits**:
- 30 messages per second to the same group
- 20 messages per minute to the same user in groups
- Bulk operations should implement delays between calls
- API returns 429 Too Many Requests when limits are hit

**Chat Types**:
- Private chat: One-on-one with the bot
- Group: Multi-user chat (bot must be added)
- Supergroup: Enhanced group with admin features
- Channel: Broadcast-only (bot must be admin to post)

**Message Limits**:
- Text messages: 4096 characters max
- Captions: 1024 characters max
- File uploads: 50MB max via bot API
- Inline keyboard buttons: 8 per row

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
