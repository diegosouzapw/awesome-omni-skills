---
name: google-drive-automation
description: "Google Drive workflow skill. Use this skill when the user needs Lightweight Google Drive integration with standalone OAuth authentication. No MCP server required. Full read/write access and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["google-drive-automation", "lightweight", "google", "drive", "integration", "standalone", "oauth", "authentication"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sanjay3290"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Google Drive

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/google-drive-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Google Drive Lightweight Google Drive integration with standalone OAuth authentication. No MCP server required. Full read/write access. > Requires Google Workspace account. Personal Gmail accounts are not supported.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Search Query Formats, File ID Format, Download Limitations, Token Management, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to search, list, upload, download, move, or organize Google Drive files and folders.
- The task requires direct Drive read/write automation through local scripts in a Workspace account.
- You want file-level Drive operations without introducing an MCP server dependency.
- Use when the request clearly matches the imported source intent: Lightweight Google Drive integration with standalone OAuth authentication. No MCP server required. Full read/write access.
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

#### Imported: Search Query Formats

The search command supports multiple query formats:

| Format | Example | Description |
|--------|---------|-------------|
| Full-text | `"quarterly report"` | Searches file contents and names |
| Title | `"title:budget"` | Searches file names only |
| URL | `https://drive.google.com/...` | Extracts and uses file/folder ID |
| Folder ID | `1ABC123...` | Lists folder contents (25+ char IDs) |
| Native query | `mimeType='application/pdf'` | Pass-through Drive query syntax |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @google-drive-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @google-drive-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @google-drive-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @google-drive-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Read Commands

All operations via `scripts/drive.py`. Auto-authenticates on first use if not logged in.

```bash
# Search for files (full-text search)
python scripts/drive.py search "quarterly report"

# Search by title only
python scripts/drive.py search "title:budget"

# Search using Google Drive URL (extracts ID automatically)
python scripts/drive.py search "https://drive.google.com/drive/folders/1ABC123..."

# Search files shared with you
python scripts/drive.py search --shared-with-me

# Search with pagination
python scripts/drive.py search "report" --limit 5 --page-token "..."

# Find a folder by exact name
python scripts/drive.py find-folder "Project Documents"

# List files in root Drive
python scripts/drive.py list

# List files in a specific folder
python scripts/drive.py list 1ABC123xyz --limit 20

# Download a file
python scripts/drive.py download 1ABC123xyz ./downloads/report.pdf
```

#### Imported: Write Commands

```bash
# Upload a file to Drive root
python scripts/drive.py upload ~/Documents/report.pdf

# Upload to a specific folder
python scripts/drive.py upload ~/Documents/report.pdf --folder 1ABC123xyz

# Upload with a custom name
python scripts/drive.py upload ~/Documents/report.pdf --name "Q4 Report.pdf"

# Create a new folder
python scripts/drive.py create-folder "Project Documents"

# Create a folder inside another folder
python scripts/drive.py create-folder "Attachments" --parent 1ABC123xyz

# Move a file to a different folder
python scripts/drive.py move FILE_ID DESTINATION_FOLDER_ID

# Copy a file
python scripts/drive.py copy FILE_ID
python scripts/drive.py copy FILE_ID --name "Report Copy" --folder 1ABC123xyz

# Rename a file or folder
python scripts/drive.py rename FILE_ID "New Name.pdf"

# Move a file to trash
python scripts/drive.py trash FILE_ID
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/google-drive-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: File ID Format

Google Drive uses long IDs like `1ABC123xyz_-abc123`. Get IDs from:
- `search` results
- `find-folder` results
- `list` results
- Google Drive URLs

#### Imported: Download Limitations

- Regular files (PDFs, images, etc.) download directly
- Google Docs/Sheets/Slides cannot be downloaded via this tool
- For Google Workspace files, use export or dedicated tools

#### Imported: Token Management

Tokens stored securely using the system keyring:
- **macOS**: Keychain
- **Windows**: Windows Credential Locker
- **Linux**: Secret Service API (GNOME Keyring, KDE Wallet, etc.)

Service name: `google-drive-skill-oauth`

Automatically refreshes expired tokens using Google's cloud function.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
