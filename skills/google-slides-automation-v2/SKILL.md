---
name: google-slides-automation-v2
description: "Google Slides workflow skill. Use this skill when the user needs Lightweight Google Slides integration with standalone OAuth authentication. No MCP server required. Full read/write access and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["google-slides-automation-v2", "google-slides-automation", "lightweight", "google", "slides", "integration", "standalone", "oauth"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sanjay3290"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Google Slides

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/google-slides-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Google Slides Lightweight Google Slides integration with standalone OAuth authentication. No MCP server required. Full read/write access. > Requires Google Workspace account. Personal Gmail accounts are not supported.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Slide Layouts, Presentation ID Format, Output Format, Token Management, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to create, inspect, or modify Google Slides presentations from local automation.
- The task involves reading slide text, adding/removing slides, or batch updating presentation content.
- You want Slides automation for Workspace documents without using an MCP server.
- Use when the request clearly matches the imported source intent: Lightweight Google Slides integration with standalone OAuth authentication. No MCP server required. Full read/write access.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Authenticate with Google (opens browser): bash python scripts/auth.py login Check authentication status: bash python scripts/auth.py status Logout when needed: bash python scripts/auth.py logout
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: First-Time Setup

Authenticate with Google (opens browser):
```bash
python scripts/auth.py login
```

Check authentication status:
```bash
python scripts/auth.py status
```

Logout when needed:
```bash
python scripts/auth.py logout
```

#### Imported: Slide Layouts

Available layouts for `add-slide --layout`:
- `BLANK` - Empty slide (default)
- `TITLE` - Title slide
- `TITLE_AND_BODY` - Title with body text
- `TITLE_AND_TWO_COLUMNS` - Title with two text columns
- `TITLE_ONLY` - Title bar only
- `SECTION_HEADER` - Section divider
- `ONE_COLUMN_TEXT` - Single column text
- `MAIN_POINT` - Main point highlight
- `BIG_NUMBER` - Large number display

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @google-slides-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @google-slides-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @google-slides-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @google-slides-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Read Commands

All operations via `scripts/slides.py`. Auto-authenticates on first use if not logged in.

```bash
# Get all text content from a presentation
python scripts/slides.py get-text "1abc123xyz789"
python scripts/slides.py get-text "https://docs.google.com/presentation/d/1abc123xyz789/edit"

# Find presentations by search query
python scripts/slides.py find "quarterly report"
python scripts/slides.py find "project proposal" --limit 5

# Get presentation metadata (title, slide count, slide object IDs)
python scripts/slides.py get-metadata "1abc123xyz789"
```

#### Imported: Write Commands

```bash
# Create a new empty presentation
python scripts/slides.py create "Q4 Sales Report"

# Add a blank slide to the end
python scripts/slides.py add-slide "1abc123xyz789"

# Add a slide with a specific layout
python scripts/slides.py add-slide "1abc123xyz789" --layout TITLE_AND_BODY

# Add a slide at a specific position (0-based index)
python scripts/slides.py add-slide "1abc123xyz789" --layout TITLE --at 0

# Find and replace text across all slides
python scripts/slides.py replace-text "1abc123xyz789" "old text" "new text"
python scripts/slides.py replace-text "1abc123xyz789" "Draft" "Final" --match-case

# Delete a slide by object ID (use get-metadata to find IDs)
python scripts/slides.py delete-slide "1abc123xyz789" "g123abc456"

# Batch update (advanced - for formatting, inserting shapes, images, etc.)
python scripts/slides.py batch-update "1abc123xyz789" '[{"replaceAllText":{"containsText":{"text":"foo"},"replaceText":"bar"}}]'
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/google-slides-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@gitlab-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitops-workflow-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@global-chat-agent-discovery-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Presentation ID Format

You can use either:
- Direct presentation ID: `1abc123xyz789`
- Full Google Slides URL: `https://docs.google.com/presentation/d/1abc123xyz789/edit`

The scripts automatically extract the ID from URLs.

#### Imported: Output Format

### get-text
Returns extracted text from all slides, including:
- Presentation title
- Text from shapes/text boxes on each slide
- Table data with cell contents

### find
Returns list of matching presentations:
```json
{
  "presentations": [
    {"id": "1abc...", "name": "Q4 Report", "modifiedTime": "2024-01-15T..."}
  ],
  "nextPageToken": "..."
}
```

### get-metadata
Returns presentation details:
```json
{
  "presentationId": "1abc...",
  "title": "My Presentation",
  "slideCount": 15,
  "pageSize": {"width": {...}, "height": {...}},
  "hasMasters": true,
  "hasLayouts": true
}
```

#### Imported: Token Management

Tokens stored securely using the system keyring:
- **macOS**: Keychain
- **Windows**: Windows Credential Locker
- **Linux**: Secret Service API (GNOME Keyring, KDE Wallet, etc.)

Service name: `google-slides-skill-oauth`

Automatically refreshes expired tokens using Google's cloud function.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
