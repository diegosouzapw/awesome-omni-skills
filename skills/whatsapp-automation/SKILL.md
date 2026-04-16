---
name: whatsapp-automation
description: "WhatsApp Business Automation via Rube MCP workflow skill. Use this skill when the user needs Automate WhatsApp Business tasks via Rube MCP (Composio): send messages, manage templates, upload media, and handle contacts. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["whatsapp-automation", "automate", "whatsapp", "business", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# WhatsApp Business Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/whatsapp-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# WhatsApp Business Automation via Rube MCP Automate WhatsApp Business operations through Composio's WhatsApp toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate WhatsApp Business tasks via Rube MCP (Composio): send messages, manage templates, upload media, and handle contacts. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit whatsapp
3. If connection is not ACTIVE, follow the returned auth link to complete WhatsApp Business setup
4. Confirm connection status shows ACTIVE before running any workflows
5. WHATSAPPGETPHONE_NUMBERS - List available business phone numbers [Prerequisite]
6. WHATSAPPSENDMESSAGE - Send a text message [Required]
7. to: Recipient phone number in international format (e.g., '+14155551234')

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `whatsapp`
3. If connection is not ACTIVE, follow the returned auth link to complete WhatsApp Business setup
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Send a Text Message

**When to use**: User wants to send a text message to a WhatsApp contact

**Tool sequence**:
1. `WHATSAPP_GET_PHONE_NUMBERS` - List available business phone numbers [Prerequisite]
2. `WHATSAPP_SEND_MESSAGE` - Send a text message [Required]

**Key parameters**:
- `to`: Recipient phone number in international format (e.g., '+14155551234')
- `body`: Message text content
- `phone_number_id`: Business phone number ID to send from

**Pitfalls**:
- Phone numbers must be in international E.164 format with country code
- Messages outside the 24-hour window require approved templates
- The 24-hour window starts when the customer last messaged you
- Business-initiated conversations require template messages first

### 2. Send Template Messages

**When to use**: User wants to send pre-approved template messages for outbound communication

**Tool sequence**:
1. `WHATSAPP_GET_MESSAGE_TEMPLATES` - List available templates [Prerequisite]
2. `WHATSAPP_GET_TEMPLATE_STATUS` - Check template approval status [Optional]
3. `WHATSAPP_SEND_TEMPLATE_MESSAGE` - Send the template message [Required]

**Key parameters**:
- `template_name`: Name of the approved template
- `language_code`: Template language (e.g., 'en_US')
- `to`: Recipient phone number
- `components`: Template variable values and parameters

**Pitfalls**:
- Templates must be approved by Meta before use
- Template variables must match the expected count and format
- Sending unapproved or rejected templates returns errors
- Language code must match an approved translation of the template

### 3. Send Media Messages

**When to use**: User wants to send images, documents, or other media

**Tool sequence**:
1. `WHATSAPP_UPLOAD_MEDIA` - Upload media to WhatsApp servers [Required]
2. `WHATSAPP_SEND_MEDIA_BY_ID` - Send media using the uploaded media ID [Required]
   OR
3. `WHATSAPP_SEND_MEDIA` - Send media using a public URL [Alternative]

**Key parameters**:
- `media_url`: Public URL of the media (for SEND_MEDIA)
- `media_id`: ID from upload response (for SEND_MEDIA_BY_ID)
- `type`: Media type ('image', 'document', 'audio', 'video', 'sticker')
- `caption`: Optional caption for the media

**Pitfalls**:
- Uploaded media IDs are temporary and expire after a period
- Media size limits vary by type (images: 5MB, videos: 16MB, documents: 100MB)
- Supported formats: images (JPEG, PNG), videos (MP4, 3GPP), documents (PDF, etc.)
- SEND_MEDIA requires a publicly accessible HTTPS URL

### 4. Reply to Messages

**When to use**: User wants to reply to an incoming WhatsApp message

**Tool sequence**:
1. `WHATSAPP_SEND_REPLY` - Send a reply to a specific message [Required]

**Key parameters**:
- `message_id`: ID of the message being replied to
- `to`: Recipient phone number
- `body`: Reply text content

**Pitfalls**:
- message_id must be from a message received within the 24-hour window
- Replies appear as quoted messages in the conversation
- The original message must still exist (not deleted) for the quote to display

### 5. Manage Business Profile and Templates

**When to use**: User wants to view or manage their WhatsApp Business profile

**Tool sequence**:
1. `WHATSAPP_GET_BUSINESS_PROFILE` - Get business profile details [Optional]
2. `WHATSAPP_GET_PHONE_NUMBERS` - List registered phone numbers [Optional]
3. `WHATSAPP_GET_PHONE_NUMBER` - Get details for a specific number [Optional]
4. `WHATSAPP_CREATE_MESSAGE_TEMPLATE` - Create a new template [Optional]
5. `WHATSAPP_GET_MESSAGE_TEMPLATES` - List all templates [Optional]

**Key parameters**:
- `phone_number_id`: Business phone number ID
- `template_name`: Name for the new template
- `category`: Template category (MARKETING, UTILITY, AUTHENTICATION)
- `language`: Template language code

**Pitfalls**:
- New templates require Meta review before they can be used
- Template names must be lowercase with underscores (no spaces)
- Category affects pricing and approval criteria
- Templates have specific formatting requirements for headers, body, and buttons

### 6. Share Contacts

**When to use**: User wants to send contact information via WhatsApp

**Tool sequence**:
1. `WHATSAPP_SEND_CONTACTS` - Send contact cards [Required]

**Key parameters**:
- `to`: Recipient phone number
- `contacts`: Array of contact objects with name, phone, email details

**Pitfalls**:
- Contact objects must follow the WhatsApp Business API contact schema
- At least a name field is required for each contact
- Phone numbers in contacts should include country codes

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active WhatsApp connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `whatsapp`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas
- WhatsApp Business API account required (not regular WhatsApp)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @whatsapp-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @whatsapp-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @whatsapp-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @whatsapp-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/whatsapp-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@typescript-pro` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-a11y` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-component` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-page` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Send message | WHATSAPP_SEND_MESSAGE | to, body |
| Send template | WHATSAPP_SEND_TEMPLATE_MESSAGE | template_name, to, language_code |
| Upload media | WHATSAPP_UPLOAD_MEDIA | (file params) |
| Send media by ID | WHATSAPP_SEND_MEDIA_BY_ID | media_id, to, type |
| Send media by URL | WHATSAPP_SEND_MEDIA | media_url, to, type |
| Reply to message | WHATSAPP_SEND_REPLY | message_id, to, body |
| Send contacts | WHATSAPP_SEND_CONTACTS | to, contacts |
| Get media | WHATSAPP_GET_MEDIA | media_id |
| List phone numbers | WHATSAPP_GET_PHONE_NUMBERS | (none) |
| Get phone number | WHATSAPP_GET_PHONE_NUMBER | phone_number_id |
| Get business profile | WHATSAPP_GET_BUSINESS_PROFILE | phone_number_id |
| Create template | WHATSAPP_CREATE_MESSAGE_TEMPLATE | template_name, category, language |
| List templates | WHATSAPP_GET_MESSAGE_TEMPLATES | (none) |
| Check template status | WHATSAPP_GET_TEMPLATE_STATUS | template_id |

#### Imported: Common Patterns

### 24-Hour Messaging Window

- Customers must message you first to open a conversation window
- Within 24 hours of their last message, you can send free-form messages
- After 24 hours, only approved template messages can be sent
- Template messages can re-open the conversation window

### Phone Number Resolution

```
1. Call WHATSAPP_GET_PHONE_NUMBERS
2. Extract phone_number_id for your business number
3. Use phone_number_id in all send operations
```

### Media Upload Flow

```
1. Call WHATSAPP_UPLOAD_MEDIA with the file
2. Extract media_id from response
3. Call WHATSAPP_SEND_MEDIA_BY_ID with media_id
4. OR use WHATSAPP_SEND_MEDIA with a public URL directly
```

#### Imported: Known Pitfalls

**Phone Number Format**:
- Always use E.164 format: +[country code][number] (e.g., '+14155551234')
- Do not include dashes, spaces, or parentheses
- Country code is required; local numbers without it will fail

**Messaging Restrictions**:
- Business-initiated messages require templates outside the 24-hour window
- Template messages cost money per conversation
- Rate limits apply per phone number and per account

**Media Handling**:
- Uploaded media expires; use promptly after upload
- Media URLs must be publicly accessible HTTPS
- Stickers have specific requirements (WebP format, 512x512 pixels)

**Template Management**:
- Template review can take up to 24 hours
- Rejected templates need to be fixed and resubmitted
- Template variables use double curly braces: {{1}}, {{2}}, etc.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
