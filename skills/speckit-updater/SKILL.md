---
name: speckit-updater
description: "SpecKit Safe Update workflow skill. Use this skill when the user needs SpecKit Safe Update and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["speckit-updater", "speckit", "safe", "update", "cli-automation"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# SpecKit Safe Update

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/speckit-updater` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# SpecKit Safe Update This skill provides safe update capabilities for GitHub SpecKit installations, preserving customizations while applying template updates. Installation: Available via plugin (/plugin marketplace add NotMyself/claude-plugins then /plugin install speckit-updater) or manual Git clone. See README.md for details.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Features, Architecture, Exit Codes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to update or install SpecKit templates while preserving project customizations.
- You want a safe approval flow around update, rollback, or version-specific SpecKit operations.
- The task is to operate the SpecKit updater conversationally instead of running raw commands blindly.
- Run the update orchestrator script without any flags (conversational mode):
- Parse the output for markers:
- [PROMPTFORAPPROVAL] - Update scenario (existing SpecKit installation)

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Features

- **Customization Preservation**: Automatically detects and preserves user customizations using normalized file hashing
- **Intelligent Conflict Resolution**: Guides through conflicts one-at-a-time with 4 options: merge editor, keep mine, use new, skip
- **Version Tracking**: Maintains `.specify/manifest.json` with file hashes, version info, and backup history
- **Automatic Backups**: Creates timestamped backups in `.specify/backups/` with automatic retention management
- **Fail-Fast with Rollback**: Automatically rolls back on any error, restoring pre-update state
- **Dry-Run Mode**: `--check-only` shows exactly what would change without applying updates
- **Constitution Integration**: Notifies when constitution template has updates (run `/speckit.constitution`)
- **Custom Command Safety**: User-created commands never overwritten, even with `--force`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @speckit-updater to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @speckit-updater against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @speckit-updater for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @speckit-updater using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commands

### /speckit-updater

Updates SpecKit templates, commands, and scripts while preserving customizations.

**Usage:**
- `/speckit-updater` - Interactive update/install with conversational approval workflow (recommended for Claude Code)
- `/speckit-updater -Proceed` - Proceed with update/install after approval (used by Claude after user confirms)
- `/speckit-updater -CheckOnly` - Check for updates without applying
- `/speckit-updater -Version v0.0.72` - Update to specific version
- `/speckit-updater -Force` - Force overwrite SpecKit files (preserves custom commands)
- `/speckit-updater -Rollback` - Restore from previous backup
- `/speckit-updater -Auto` - DEPRECATED: Use conversational workflow instead (shows warning, maps to -Proceed)

**Fresh Installation (No .specify/ directory):**
- First invocation shows installation offer with `[PROMPT_FOR_INSTALL]` marker
- Claude Code presents natural question to user (e.g., "Would you like me to install SpecKit?")
- User approves via conversational response (e.g., "yes", "proceed", "install it")
- Claude re-invokes with `-Proceed` flag automatically (implementation detail hidden from user)
- Script creates `.specify/` structure, downloads templates, creates manifest
- Exit code 0 throughout (awaiting approval is not an error)
- Consistent with update flow: both use conversational approval workflow

**Process:**
1. Validates prerequisites (Git installed, clean Git state, write permissions)
2. Loads or creates manifest (.specify/manifest.json)
3. Fetches target version from GitHub Releases API
4. Compares file hashes to identify customizations
5. Creates timestamped backup
6. Applies selective updates preserving customized files
7. Opens VSCode merge editor for conflicts (Flow A: one at a time)
8. Automatically invokes /speckit.constitution for constitution updates
9. Updates manifest with new version
10. Manages backup retention (keeps last 5)

**When you invoke this command, I will:**
1. Execute the update-orchestrator.ps1 script
2. Parse output for markers (`[PROMPT_FOR_APPROVAL]` for updates, `[PROMPT_FOR_INSTALL]` for fresh installations)
3. **For updates**: Present Markdown summary of proposed changes
4. **For installations**: Ask naturally if you want to install SpecKit (without mentioning `-Proceed` flag)
5. Wait for your approval via chat conversation
6. After approval: automatically re-invoke with `-Proceed` flag to execute
7. Guide you through conflict resolution one file at a time (updates only)
8. Open VSCode diff/merge tools as needed (updates only)
9. Report results with detailed summary

**Conversational Workflow:** The skill uses a two-step approval process:
- **Step 1**: Outputs summary → script exits → waits for approval
- **Step 2**: After approval, Claude re-invokes with `-Proceed` → applies updates

**Requirements:**
- Git installed and in PATH
- Internet connection for fetching updates from GitHub
- Write permissions to .specify/ and .claude/ directories
- Clean or staged Git working directory

**The script is located at:** `{skill_path}/scripts/update-wrapper.ps1` (entry point) and `{skill_path}/scripts/update-orchestrator.ps1` (main logic)

**Entry point command:**
```powershell
pwsh -NoProfile -Command "& '{skill_path}/scripts/update-wrapper.ps1' [parameters]"
```

**Note:** Both PowerShell-style (`-CheckOnly`) and Linux-style (`--check-only`) flags are supported via the wrapper script.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/speckit-updater`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@server-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Architecture

### Modules
- **HashUtils**: Normalized hashing (handles line endings, trailing whitespace, BOM)
- **VSCodeIntegration**: Context detection, Quick Pick, diff/merge editor integration
- **GitHubApiClient**: GitHub Releases API interaction (unauthenticated, 60 req/hour)
- **ManifestManager**: Manifest CRUD operations with caching
- **BackupManager**: Backup creation, restoration, and retention management
- **ConflictDetector**: File state analysis and conflict detection

### Workflow
1. Prerequisites validation (critical checks must pass, warnings allow continuation)
2. Manifest loading/creation (safe default: assume all files customized if no manifest)
3. GitHub API query for target version
4. File state analysis (6 actions: add/remove/merge/preserve/update/skip)
5. User confirmation with change preview
6. Backup creation (timestamped, excludes backups directory)
7. Selective file updates (fail-fast with automatic rollback)
8. Conflict resolution (Flow A: one-at-a-time, VSCode merge editor)
9. Manifest update (version, file hashes, customization flags)
10. Backup cleanup (keep 5 most recent, requires confirmation)
11. Detailed summary display

#### Imported: Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Prerequisites not met |
| 3 | Network/API error |
| 4 | Git error |
| 5 | User cancelled |
| 6 | Rollback required (automatic) |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
