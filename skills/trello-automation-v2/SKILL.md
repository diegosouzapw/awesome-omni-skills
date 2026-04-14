---
name: trello-automation-v2
description: "Trello Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Trello boards, cards, and workflows via Rube MCP (Composio). Create cards, manage lists, assign members, and search across boards programmatically and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["trello-automation-v2", "trello-automation", "automate", "trello", "boards", "cards", "and", "workflows"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Trello Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/trello-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Trello Automation via Rube MCP Automate Trello board management, card creation, and team workflows through Composio's Rube MCP integration.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Trello boards, cards, and workflows via Rube MCP (Composio). Create cards, manage lists, assign members, and search across boards programmatically.
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
2. Call RUBEMANAGECONNECTIONS with toolkit trello
3. If connection is not ACTIVE, follow the returned auth link to complete Trello auth
4. Confirm connection status shows ACTIVE before running any workflows
5. TRELLOGETMEMBERSBOARDSBYIDMEMBER - List boards to find target board ID [Prerequisite]
6. TRELLOGETBOARDSLISTSBYIDBOARD - Get lists on board to find target list ID [Prerequisite]
7. TRELLOADDCARDS - Create the card on the resolved list [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `trello`
3. If connection is not ACTIVE, follow the returned auth link to complete Trello auth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create a Card on a Board

**When to use**: User wants to add a new card/task to a Trello board

**Tool sequence**:
1. `TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER` - List boards to find target board ID [Prerequisite]
2. `TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD` - Get lists on board to find target list ID [Prerequisite]
3. `TRELLO_ADD_CARDS` - Create the card on the resolved list [Required]
4. `TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD` - Add a checklist to the card [Optional]
5. `TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST` - Add items to the checklist [Optional]

**Key parameters**:
- `idList`: 24-char hex ID (NOT list name)
- `name`: Card title
- `desc`: Card description (supports Markdown)
- `pos`: Position ('top'/'bottom')
- `due`: Due date (ISO 8601 format)

**Pitfalls**:
- Store returned id (idCard) immediately; downstream checklist operations fail without it
- Checklist payload may be nested (data.data); extract idChecklist from inner object
- One API call per checklist item; large checklists can trigger rate limits

### 2. Manage Boards and Lists

**When to use**: User wants to view, browse, or restructure board layout

**Tool sequence**:
1. `TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER` - List all boards for the user [Required]
2. `TRELLO_GET_BOARDS_BY_ID_BOARD` - Get detailed board info [Required]
3. `TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD` - Get lists (columns) on the board [Optional]
4. `TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD` - Get board members [Optional]
5. `TRELLO_GET_BOARDS_LABELS_BY_ID_BOARD` - Get labels on the board [Optional]

**Key parameters**:
- `idMember`: Use 'me' for authenticated user
- `filter`: 'open', 'starred', or 'all'
- `idBoard`: 24-char hex or 8-char shortLink (NOT board name)

**Pitfalls**:
- Some runs return boards under response.data.details[]—don't assume flat top-level array
- Lists may be nested under results[0].response.data.details—parse defensively
- ISO 8601 timestamps with trailing 'Z' must be parsed as timezone-aware

### 3. Move Cards Between Lists

**When to use**: User wants to change a card's status by moving it to another list

**Tool sequence**:
1. `TRELLO_GET_SEARCH` - Find the card by name or keyword [Prerequisite]
2. `TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD` - Get destination list ID [Prerequisite]
3. `TRELLO_UPDATE_CARDS_BY_ID_CARD` - Update card's idList to move it [Required]

**Key parameters**:
- `idCard`: Card ID from search
- `idList`: Destination list ID
- `pos`: Optional ordering within new list

**Pitfalls**:
- Search returns partial matches; verify card name before updating
- Moving doesn't update position within new list; set pos if ordering matters

### 4. Assign Members to Cards

**When to use**: User wants to assign team members to cards

**Tool sequence**:
1. `TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD` - Get member IDs from the board [Prerequisite]
2. `TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD` - Add a member to the card [Required]

**Key parameters**:
- `idCard`: Target card ID
- `value`: Member ID to assign

**Pitfalls**:
- UPDATE_CARDS_ID_MEMBERS replaces entire member list; use ADD_CARDS_ID_MEMBERS to append
- Member must have board permissions

### 5. Search and Filter Cards

**When to use**: User wants to find specific cards across boards

**Tool sequence**:
1. `TRELLO_GET_SEARCH` - Search by query string [Required]

**Key parameters**:
- `query`: Search string (supports board:, list:, label:, is:open/archived operators)
- `modelTypes`: Set to 'cards'
- `partial`: Set to 'true' for prefix matching

**Pitfalls**:
- Search indexing has delay; newly created cards may not appear for several minutes
- For exact name matching, use TRELLO_GET_BOARDS_CARDS_BY_ID_BOARD and filter locally
- Query uses word tokenization; common words may be ignored as stop words

### 6. Add Comments and Attachments

**When to use**: User wants to add context to an existing card

**Tool sequence**:
1. `TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD` - Post a comment on the card [Required]
2. `TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD` - Attach a file or URL [Optional]

**Key parameters**:
- `text`: Comment text (1-16384 chars, supports Markdown and @mentions)
- `url` OR `file`: Attachment source (not both)
- `name`: Attachment display name
- `mimeType`: File MIME type

**Pitfalls**:
- Comments don't support file attachments; use the attachment tool separately
- Attachment deletion is irreversible

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Trello connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `trello`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @trello-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/trello-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/trello-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @trello-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/trello-automation`, fails to mention provenance, or does not use the support pack at all.
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
| List user's boards | TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER | idMember='me', filter='open' |
| Get board details | TRELLO_GET_BOARDS_BY_ID_BOARD | idBoard (24-char hex) |
| List board lists | TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD | idBoard |
| Create card | TRELLO_ADD_CARDS | idList, name, desc, pos, due |
| Update card | TRELLO_UPDATE_CARDS_BY_ID_CARD | idCard, idList (to move) |
| Search cards | TRELLO_GET_SEARCH | query, modelTypes='cards' |
| Add checklist | TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD | idCard, name |
| Add comment | TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD | idCard, text |
| Assign member | TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD | idCard, value (member ID) |
| Attach file/URL | TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD | idCard, url OR file |
| Get board members | TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD | idBoard |
| Batch read | TRELLO_GET_BATCH | urls (comma-separated paths) |

#### Imported: Common Patterns

### ID Resolution
Always resolve display names to IDs before operations:
- **Board name → Board ID**: `TRELLO_GET_MEMBERS_BOARDS_BY_ID_MEMBER` with idMember='me'
- **List name → List ID**: `TRELLO_GET_BOARDS_LISTS_BY_ID_BOARD` with resolved board ID
- **Card name → Card ID**: `TRELLO_GET_SEARCH` with query string
- **Member name → Member ID**: `TRELLO_GET_BOARDS_MEMBERS_BY_ID_BOARD`

### Pagination
Most list endpoints return all items. For boards with 1000+ cards, use `limit` and `before` parameters on card listing endpoints.

### Rate Limits
300 requests per 10 seconds per token. Use `TRELLO_GET_BATCH` for bulk read operations to stay within limits.

#### Imported: Known Pitfalls

- **ID Requirements**: Nearly every tool requires IDs, not display names. Always resolve names to IDs first.
- **Board ID Format**: Board IDs must be 24-char hex or 8-char shortLink. URL slugs like 'my-board' are NOT valid.
- **Search Delays**: Search indexing has delays; newly created/updated cards may not appear immediately.
- **Nested Responses**: Response data is often nested (data.data or data.details[]); parse defensively.
- **Rate Limiting**: 300 req/10s per token. Batch reads with TRELLO_GET_BATCH.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
