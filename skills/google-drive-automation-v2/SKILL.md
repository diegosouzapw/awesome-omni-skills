---
name: google-drive-automation-v2
description: "Google Drive workflow skill. Use this skill when the user needs Lightweight Google Drive integration with standalone OAuth authentication. No MCP server required. Full read/write access and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["google-drive-automation-v2", "google-drive-automation", "lightweight", "google", "drive", "integration", "standalone", "oauth"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sanjay3290"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Google Drive

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/google-drive-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Google Drive Lightweight Google Drive integration with standalone OAuth authentication. No MCP server required. Full read/write access. > Requires Google Workspace account. Personal Gmail accounts are not supported.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Search Query Formats, File ID Format, Download Limitations, Token Management.

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
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Authenticate with Google (opens browser): bash python scripts/auth.py login Check authentication status: bash python scripts/auth.py status Logout when needed: bash python scripts/auth.py logout
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
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
Use @google-drive-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/google-drive-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/google-drive-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @google-drive-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/google-drive-automation`, fails to mention provenance, or does not use the support pack at all.
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
