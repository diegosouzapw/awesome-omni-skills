---
name: figma-automation-v2
description: "Figma Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Figma tasks via Rube MCP (Composio): files, components, design tokens, comments, exports. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["figma-automation-v2", "figma-automation", "automate", "figma", "tasks", "via", "rube", "mcp"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Figma Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/figma-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Figma Automation via Rube MCP Automate Figma operations through Composio's Figma toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Figma tasks via Rube MCP (Composio): files, components, design tokens, comments, exports. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit figma
3. If connection is not ACTIVE, follow the returned auth link to complete Figma auth
4. Confirm connection status shows ACTIVE before running any workflows
5. FIGMADISCOVERFIGMA_RESOURCES - Extract IDs from Figma URLs [Prerequisite]
6. FIGMAGETFILE_JSON - Get file data (simplified by default) [Required]
7. FIGMAGETFILE_NODES - Get specific node data [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `figma`
3. If connection is not ACTIVE, follow the returned auth link to complete Figma auth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Get File Data and Components

**When to use**: User wants to inspect Figma design files or extract component information

**Tool sequence**:
1. `FIGMA_DISCOVER_FIGMA_RESOURCES` - Extract IDs from Figma URLs [Prerequisite]
2. `FIGMA_GET_FILE_JSON` - Get file data (simplified by default) [Required]
3. `FIGMA_GET_FILE_NODES` - Get specific node data [Optional]
4. `FIGMA_GET_FILE_COMPONENTS` - List published components [Optional]
5. `FIGMA_GET_FILE_COMPONENT_SETS` - List component sets [Optional]

**Key parameters**:
- `file_key`: File key from URL (e.g., 'abc123XYZ' from figma.com/design/abc123XYZ/...)
- `ids`: Comma-separated node IDs (NOT an array)
- `depth`: Tree traversal depth (2 for pages and top-level children)
- `simplify`: True for AI-friendly format (70%+ size reduction)

**Pitfalls**:
- Only supports Design files; FigJam boards and Slides return 400 errors
- `ids` must be a comma-separated string, not an array
- Node IDs may be dash-formatted (1-541) in URLs but need colon format (1:541) for API
- Broad ids/depth can trigger oversized payloads (413); narrow scope or reduce depth
- Response data may be in `data_preview` instead of `data`

### 2. Export and Render Images

**When to use**: User wants to export design assets as images

**Tool sequence**:
1. `FIGMA_GET_FILE_JSON` - Find node IDs to export [Prerequisite]
2. `FIGMA_RENDER_IMAGES_OF_FILE_NODES` - Render nodes as images [Required]
3. `FIGMA_DOWNLOAD_FIGMA_IMAGES` - Download rendered images [Optional]
4. `FIGMA_GET_IMAGE_FILLS` - Get image fill URLs [Optional]

**Key parameters**:
- `file_key`: File key
- `ids`: Comma-separated node IDs to render
- `format`: 'png', 'svg', 'jpg', or 'pdf'
- `scale`: Scale factor (0.01-4.0) for PNG/JPG
- `images`: Array of {node_id, file_name, format} for downloads

**Pitfalls**:
- Images return as node_id-to-URL map; some IDs may be null (failed renders)
- URLs are temporary (valid ~30 days)
- Images capped at 32 megapixels; larger requests auto-scaled down

### 3. Extract Design Tokens

**When to use**: User wants to extract design tokens for development

**Tool sequence**:
1. `FIGMA_EXTRACT_DESIGN_TOKENS` - Extract colors, typography, spacing [Required]
2. `FIGMA_DESIGN_TOKENS_TO_TAILWIND` - Convert to Tailwind config [Optional]

**Key parameters**:
- `file_key`: File key
- `include_local_styles`: Include local styles (default true)
- `include_variables`: Include Figma variables
- `tokens`: Full tokens object from extraction (for Tailwind conversion)

**Pitfalls**:
- Tailwind conversion requires the full tokens object including total_tokens and sources
- Do not strip fields from the extraction response before passing to conversion

### 4. Manage Comments and Versions

**When to use**: User wants to view or add comments, or inspect version history

**Tool sequence**:
1. `FIGMA_GET_COMMENTS_IN_A_FILE` - List all file comments [Optional]
2. `FIGMA_ADD_A_COMMENT_TO_A_FILE` - Add a comment [Optional]
3. `FIGMA_GET_REACTIONS_FOR_A_COMMENT` - Get comment reactions [Optional]
4. `FIGMA_GET_VERSIONS_OF_A_FILE` - Get version history [Optional]

**Key parameters**:
- `file_key`: File key
- `as_md`: Return comments in Markdown format
- `message`: Comment text
- `comment_id`: Comment ID for reactions

**Pitfalls**:
- Comments can be positioned on specific nodes using client_meta
- Reply comments cannot be nested (only one level of replies)

### 5. Browse Projects and Teams

**When to use**: User wants to list team projects or files

**Tool sequence**:
1. `FIGMA_GET_PROJECTS_IN_A_TEAM` - List team projects [Optional]
2. `FIGMA_GET_FILES_IN_A_PROJECT` - List project files [Optional]
3. `FIGMA_GET_TEAM_STYLES` - List team published styles [Optional]

**Key parameters**:
- `team_id`: Team ID from URL (figma.com/files/team/TEAM_ID/...)
- `project_id`: Project ID

**Pitfalls**:
- Team ID cannot be obtained programmatically; extract from Figma URL
- Only published styles/components are returned by team endpoints

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Figma connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `figma`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @figma-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @figma-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @figma-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @figma-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/figma-automation`, fails to mention provenance, or does not use any copied source files at all.
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
| Parse URL | FIGMA_DISCOVER_FIGMA_RESOURCES | figma_url |
| Get file JSON | FIGMA_GET_FILE_JSON | file_key, ids, depth |
| Get nodes | FIGMA_GET_FILE_NODES | file_key, ids |
| Render images | FIGMA_RENDER_IMAGES_OF_FILE_NODES | file_key, ids, format |
| Download images | FIGMA_DOWNLOAD_FIGMA_IMAGES | file_key, images |
| Get component | FIGMA_GET_COMPONENT | file_key, node_id |
| File components | FIGMA_GET_FILE_COMPONENTS | file_key |
| Component sets | FIGMA_GET_FILE_COMPONENT_SETS | file_key |
| Design tokens | FIGMA_EXTRACT_DESIGN_TOKENS | file_key |
| Tokens to Tailwind | FIGMA_DESIGN_TOKENS_TO_TAILWIND | tokens |
| File comments | FIGMA_GET_COMMENTS_IN_A_FILE | file_key |
| Add comment | FIGMA_ADD_A_COMMENT_TO_A_FILE | file_key, message |
| File versions | FIGMA_GET_VERSIONS_OF_A_FILE | file_key |
| Team projects | FIGMA_GET_PROJECTS_IN_A_TEAM | team_id |
| Project files | FIGMA_GET_FILES_IN_A_PROJECT | project_id |
| Team styles | FIGMA_GET_TEAM_STYLES | team_id |
| File styles | FIGMA_GET_FILE_STYLES | file_key |
| Image fills | FIGMA_GET_IMAGE_FILLS | file_key |

#### Imported: Common Patterns

### URL Parsing

Extract IDs from Figma URLs:
```
1. Call FIGMA_DISCOVER_FIGMA_RESOURCES with figma_url
2. Extract file_key, node_id, team_id from response
3. Convert dash-format node IDs (1-541) to colon format (1:541)
```

### Node Traversal

```
1. Call FIGMA_GET_FILE_JSON with depth=2 for overview
2. Identify target nodes from the response
3. Call again with specific ids and higher depth for details
```

#### Imported: Known Pitfalls

**File Type Support**:
- GET_FILE_JSON only supports Design files (figma.com/design/ or figma.com/file/)
- FigJam boards (figma.com/board/) and Slides (figma.com/slides/) are NOT supported

**Node ID Formats**:
- URLs use dash format: `node-id=1-541`
- API uses colon format: `1:541`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
