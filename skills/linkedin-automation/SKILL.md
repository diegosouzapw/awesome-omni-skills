---
name: linkedin-automation
description: "LinkedIn Automation via Rube MCP workflow skill. Use this skill when the user needs Automate LinkedIn tasks via Rube MCP (Composio): create posts, manage profile, company info, comments, and image uploads. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["linkedin-automation", "automate", "linkedin", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# LinkedIn Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/linkedin-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# LinkedIn Automation via Rube MCP Automate LinkedIn operations through Composio's LinkedIn toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate LinkedIn tasks via Rube MCP (Composio): create posts, manage profile, company info, comments, and image uploads. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit linkedin
3. If connection is not ACTIVE, follow the returned auth link to complete LinkedIn OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. LINKEDINGETMY_INFO - Get authenticated user's profile info [Prerequisite]
6. LINKEDINREGISTERIMAGE_UPLOAD - Register image upload if post includes an image [Optional]
7. LINKEDINCREATELINKEDINPOST - Publish the post [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `linkedin`
3. If connection is not ACTIVE, follow the returned auth link to complete LinkedIn OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create a LinkedIn Post

**When to use**: User wants to publish a text post on LinkedIn

**Tool sequence**:
1. `LINKEDIN_GET_MY_INFO` - Get authenticated user's profile info [Prerequisite]
2. `LINKEDIN_REGISTER_IMAGE_UPLOAD` - Register image upload if post includes an image [Optional]
3. `LINKEDIN_CREATE_LINKED_IN_POST` - Publish the post [Required]

**Key parameters**:
- `text`: Post content text
- `visibility`: 'PUBLIC' or 'CONNECTIONS'
- `media_title`: Title for attached media
- `media_description`: Description for attached media

**Pitfalls**:
- Must retrieve user profile URN via GET_MY_INFO before creating a post
- Image uploads require a two-step process: register upload first, then include the asset in the post
- Post text has character limits enforced by LinkedIn API
- Visibility defaults may vary; always specify explicitly

### 2. Get Profile Information

**When to use**: User wants to retrieve their LinkedIn profile or company details

**Tool sequence**:
1. `LINKEDIN_GET_MY_INFO` - Get authenticated user's profile [Required]
2. `LINKEDIN_GET_COMPANY_INFO` - Get company page details [Optional]

**Key parameters**:
- No parameters needed for GET_MY_INFO (uses authenticated user)
- `organization_id`: Company/organization ID for GET_COMPANY_INFO

**Pitfalls**:
- GET_MY_INFO returns the authenticated user only; cannot look up other users
- Company info requires the numeric organization ID, not the company name or vanity URL
- Some profile fields may be restricted based on OAuth scopes granted

### 3. Manage Post Images

**When to use**: User wants to upload and attach images to LinkedIn posts

**Tool sequence**:
1. `LINKEDIN_REGISTER_IMAGE_UPLOAD` - Register an image upload with LinkedIn [Required]
2. Upload the image binary to the returned upload URL [Required]
3. `LINKEDIN_GET_IMAGES` - Verify uploaded image status [Optional]
4. `LINKEDIN_CREATE_LINKED_IN_POST` - Create post with the image asset [Required]

**Key parameters**:
- `owner`: URN of the image owner (user or organization)
- `image_id`: ID of the uploaded image for GET_IMAGES

**Pitfalls**:
- The upload is a two-phase process: register then upload binary
- Image asset URN from registration must be used when creating the post
- Supported formats typically include JPG, PNG, and GIF
- Large images may take time to process before they are available

### 4. Comment on Posts

**When to use**: User wants to comment on an existing LinkedIn post

**Tool sequence**:
1. `LINKEDIN_CREATE_COMMENT_ON_POST` - Add a comment to a post [Required]

**Key parameters**:
- `post_id`: The URN or ID of the post to comment on
- `text`: Comment content
- `actor`: URN of the commenter (user or organization)

**Pitfalls**:
- Post ID must be a valid LinkedIn URN format
- The actor URN must match the authenticated user or a managed organization
- Rate limits apply to comment creation; avoid rapid-fire comments

### 5. Delete a Post

**When to use**: User wants to remove a previously published LinkedIn post

**Tool sequence**:
1. `LINKEDIN_DELETE_LINKED_IN_POST` - Delete the specified post [Required]

**Key parameters**:
- `post_id`: The URN or ID of the post to delete

**Pitfalls**:
- Deletion is permanent and cannot be undone
- Only the post author or organization admin can delete a post
- The post_id must be the exact URN returned when the post was created

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active LinkedIn connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `linkedin`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @linkedin-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/linkedin-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/linkedin-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @linkedin-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/linkedin-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Get my profile | LINKEDIN_GET_MY_INFO | (none) |
| Create post | LINKEDIN_CREATE_LINKED_IN_POST | text, visibility |
| Get company info | LINKEDIN_GET_COMPANY_INFO | organization_id |
| Register image upload | LINKEDIN_REGISTER_IMAGE_UPLOAD | owner |
| Get uploaded images | LINKEDIN_GET_IMAGES | image_id |
| Delete post | LINKEDIN_DELETE_LINKED_IN_POST | post_id |
| Comment on post | LINKEDIN_CREATE_COMMENT_ON_POST | post_id, text, actor |

#### Imported: Common Patterns

### ID Resolution

**User URN from profile**:
```
1. Call LINKEDIN_GET_MY_INFO
2. Extract user URN (e.g., 'urn:li:person:XXXXXXXXXX')
3. Use URN as actor/owner in subsequent calls
```

**Organization ID from company**:
```
1. Call LINKEDIN_GET_COMPANY_INFO with organization_id
2. Extract organization URN for posting as a company page
```

### Image Upload Flow

- Call REGISTER_IMAGE_UPLOAD to get upload URL and asset URN
- Upload the binary image to the provided URL
- Use the asset URN when creating a post with media
- Verify with GET_IMAGES if upload status is uncertain

#### Imported: Known Pitfalls

**Authentication**:
- LinkedIn OAuth tokens have limited scopes; ensure required permissions are granted
- Tokens expire; re-authenticate if API calls return 401 errors

**URN Formats**:
- LinkedIn uses URN identifiers (e.g., 'urn:li:person:ABC123')
- Always use the full URN format, not just the alphanumeric ID portion
- Organization URNs differ from person URNs

**Rate Limits**:
- LinkedIn API has strict daily rate limits on post creation and comments
- Implement backoff strategies for bulk operations
- Monitor 429 responses and respect Retry-After headers

**Content Restrictions**:
- Posts have character limits enforced by the API
- Some content types (polls, documents) may require additional API features
- HTML markup in post text is not supported
