---
name: "docusign-automation-v2"
description: "DocuSign Automation via Rube MCP workflow skill. Use this skill when the user needs Automate DocuSign tasks via Rube MCP (Composio): templates, envelopes, signatures, document management. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "docusign-automation-v2"
  - "docusign-automation"
  - "automate"
  - "docusign"
  - "tasks"
  - "via"
  - "rube"
  - "mcp"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-16"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "docusign-automation-v2"
family_name: "DocuSign Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/docusign-automation-v2"
upstream_skill: "skills/docusign-automation-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "docusign-automation-v2"
---

# DocuSign Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/docusign-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# DocuSign Automation via Rube MCP Automate DocuSign e-signature workflows through Composio's DocuSign toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate DocuSign tasks via Rube MCP (Composio): templates, envelopes, signatures, document management. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit docusign
3. If connection is not ACTIVE, follow the returned auth link to complete DocuSign OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. DOCUSIGNLISTALL_TEMPLATES - List all available templates [Required]
6. DOCUSIGNGETTEMPLATE - Get detailed template information [Optional]
7. For listing: Optional search/filter parameters

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `docusign`
3. If connection is not ACTIVE, follow the returned auth link to complete DocuSign OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Browse and Select Templates

**When to use**: User wants to find available document templates for sending

**Tool sequence**:
1. `DOCUSIGN_LIST_ALL_TEMPLATES` - List all available templates [Required]
2. `DOCUSIGN_GET_TEMPLATE` - Get detailed template information [Optional]

**Key parameters**:
- For listing: Optional search/filter parameters
- For details: `templateId` (from list results)
- Response includes template `templateId`, `name`, `description`, roles, and fields

**Pitfalls**:
- Template IDs are GUIDs (e.g., '12345678-abcd-1234-efgh-123456789012')
- Templates define recipient roles with signing tabs; understand roles before creating envelopes
- Large template libraries require pagination; check for continuation tokens
- Template access depends on account permissions

### 2. Create and Send Envelopes from Templates

**When to use**: User wants to send documents for signature using a pre-built template

**Tool sequence**:
1. `DOCUSIGN_LIST_ALL_TEMPLATES` - Find the template to use [Prerequisite]
2. `DOCUSIGN_GET_TEMPLATE` - Review template roles and fields [Optional]
3. `DOCUSIGN_CREATE_ENVELOPE_FROM_TEMPLATE` - Create the envelope [Required]
4. `DOCUSIGN_SEND_ENVELOPE` - Send the envelope for signing [Required]

**Key parameters**:
- For CREATE_ENVELOPE_FROM_TEMPLATE:
  - `templateId`: Template to use
  - `templateRoles`: Array of role assignments with `roleName`, `name`, `email`
  - `status`: 'created' (draft) or 'sent' (send immediately)
  - `emailSubject`: Custom subject line for the signing email
  - `emailBlurb`: Custom message in the signing email
- For SEND_ENVELOPE:
  - `envelopeId`: Envelope ID from creation response

**Pitfalls**:
- `templateRoles` must match the role names defined in the template exactly (case-sensitive)
- Setting `status` to 'sent' during creation sends immediately; use 'created' for drafts
- If status is 'sent' at creation, no need to call SEND_ENVELOPE separately
- Each role requires at minimum `roleName`, `name`, and `email`
- `emailSubject` overrides the template's default email subject

### 3. Monitor Envelope Status

**When to use**: User wants to check the status of sent envelopes or track signing progress

**Tool sequence**:
1. `DOCUSIGN_GET_ENVELOPE` - Get envelope details and status [Required]

**Key parameters**:
- `envelopeId`: Envelope identifier (GUID)
- Response includes `status`, `recipients`, `sentDateTime`, `completedDateTime`

**Pitfalls**:
- Envelope statuses: 'created', 'sent', 'delivered', 'signed', 'completed', 'declined', 'voided'
- 'delivered' means the email was opened, not that the document was signed
- 'completed' means all recipients have signed
- Recipients array shows individual signing status per recipient
- Envelope IDs are GUIDs; always resolve from creation or search results

### 4. Add Templates to Existing Envelopes

**When to use**: User wants to add additional documents or templates to an existing envelope

**Tool sequence**:
1. `DOCUSIGN_GET_ENVELOPE` - Verify envelope exists and is in draft state [Prerequisite]
2. `DOCUSIGN_ADD_TEMPLATES_TO_DOCUMENT_IN_ENVELOPE` - Add template to envelope [Required]

**Key parameters**:
- `envelopeId`: Target envelope ID
- `documentId`: Document ID within the envelope
- `templateId`: Template to add

**Pitfalls**:
- Envelope must be in 'created' (draft) status to add templates
- Cannot add templates to already-sent envelopes
- Document IDs are sequential within an envelope (starting from '1')
- Adding a template merges its fields and roles into the existing envelope

### 5. Manage Envelope Lifecycle

**When to use**: User wants to send, void, or manage draft envelopes

**Tool sequence**:
1. `DOCUSIGN_GET_ENVELOPE` - Check current envelope status [Prerequisite]
2. `DOCUSIGN_SEND_ENVELOPE` - Send a draft envelope [Optional]

**Key parameters**:
- `envelopeId`: Envelope to manage
- For sending: envelope must be in 'created' status with all required recipients

**Pitfalls**:
- Only 'created' (draft) envelopes can be sent
- Sent envelopes cannot be unsent; they can only be voided
- Voiding an envelope notifies all recipients
- All required recipients must have valid email addresses before sending

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active DocuSign connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `docusign`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @docusign-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @docusign-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @docusign-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @docusign-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/docusign-automation`, fails to mention provenance, or does not use any copied source files at all.
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
| List templates | DOCUSIGN_LIST_ALL_TEMPLATES | (optional filters) |
| Get template | DOCUSIGN_GET_TEMPLATE | templateId |
| Create envelope | DOCUSIGN_CREATE_ENVELOPE_FROM_TEMPLATE | templateId, templateRoles, status |
| Send envelope | DOCUSIGN_SEND_ENVELOPE | envelopeId |
| Get envelope status | DOCUSIGN_GET_ENVELOPE | envelopeId |
| Add template to envelope | DOCUSIGN_ADD_TEMPLATES_TO_DOCUMENT_IN_ENVELOPE | envelopeId, documentId, templateId |

#### Imported: Common Patterns

### ID Resolution

**Template name -> Template ID**:
```
1. Call DOCUSIGN_LIST_ALL_TEMPLATES
2. Find template by name in results
3. Extract templateId (GUID format)
```

**Envelope tracking**:
```
1. Store envelopeId from CREATE_ENVELOPE_FROM_TEMPLATE response
2. Call DOCUSIGN_GET_ENVELOPE periodically to check status
3. Check recipient-level status for individual signing progress
```

### Template Role Mapping

When creating an envelope from a template:
```
1. Call DOCUSIGN_GET_TEMPLATE to see defined roles
2. Map each role to actual recipients:
   {
     "roleName": "Signer 1",     // Must match template role name exactly
     "name": "John Smith",
     "email": "john@example.com"
   }
3. Include ALL required roles in templateRoles array
```

### Envelope Status Flow

```
created (draft) -> sent -> delivered -> signed -> completed
                       \-> declined
                       \-> voided (by sender)
```

#### Imported: Known Pitfalls

**Template Roles**:
- Role names are case-sensitive; must match template definition exactly
- All required roles must be assigned when creating an envelope
- Missing role assignments cause envelope creation to fail

**Envelope Status**:
- 'delivered' means email opened, NOT document signed
- 'completed' is the final successful state (all parties signed)
- Status transitions are one-way; cannot revert to previous states

**GUIDs**:
- All DocuSign IDs (templates, envelopes) are GUID format
- Always resolve names to GUIDs via list/search endpoints
- Do not hardcode GUIDs; they are unique per account

**Rate Limits**:
- DocuSign API has per-account rate limits
- Bulk envelope creation should be throttled
- Polling envelope status should use reasonable intervals (30-60 seconds)

**Response Parsing**:
- Response data may be nested under `data` key
- Recipient information is nested within envelope response
- Date fields use ISO 8601 format
- Parse defensively with fallbacks for optional fields

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
