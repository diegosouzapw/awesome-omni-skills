---
name: google-calendar-automation
description: "Google Calendar workflow skill. Use this skill when the user needs Lightweight Google Calendar integration with standalone OAuth authentication. No MCP server required and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["google-calendar-automation", "lightweight", "google", "calendar", "integration", "standalone", "oauth", "authentication"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sanjay3290"
date_added: "2026-04-15"
date_updated: "2026-04-21"
---

# Google Calendar

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/google-calendar-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Google Calendar Lightweight Google Calendar integration with standalone OAuth authentication. No MCP server required. > ⚠️ Requires Google Workspace account. Personal Gmail accounts are not supported.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Date/Time Format, Calendar ID Format, Token Management, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to list, create, inspect, or update Google Calendar events from local scripts.
- The task requires OAuth-backed calendar automation without standing up an MCP server.
- You need quick operational access to calendars, schedules, attendees, or event details in a Workspace environment.
- Use when the request clearly matches the imported source intent: Lightweight Google Calendar integration with standalone OAuth authentication. No MCP server required.
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

#### Imported: Date/Time Format

All times use ISO 8601 format with timezone:
- UTC: `2024-01-15T10:30:00Z`
- With offset: `2024-01-15T10:30:00-05:00` (EST)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @google-calendar-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @google-calendar-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @google-calendar-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @google-calendar-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commands

All operations via `scripts/gcal.py`. Auto-authenticates on first use if not logged in.

### List Calendars
```bash
python scripts/gcal.py list-calendars
```

### List Events
```bash
# List events from primary calendar (default: next 30 days)
python scripts/gcal.py list-events

# List events with specific time range
python scripts/gcal.py list-events --time-min 2024-01-15T00:00:00Z --time-max 2024-01-31T23:59:59Z

# List events from a specific calendar
python scripts/gcal.py list-events --calendar "work@example.com"

# Limit results
python scripts/gcal.py list-events --max-results 10
```

### Get Event Details
```bash
python scripts/gcal.py get-event EVENT_ID
python scripts/gcal.py get-event EVENT_ID --calendar "work@example.com"
```

### Create Event
```bash
# Basic event
python scripts/gcal.py create-event "Team Meeting" "2024-01-15T10:00:00Z" "2024-01-15T11:00:00Z"

# Event with description and location
python scripts/gcal.py create-event "Team Meeting" "2024-01-15T10:00:00Z" "2024-01-15T11:00:00Z" \
    --description "Weekly sync" --location "Conference Room A"

# Event with attendees
python scripts/gcal.py create-event "Team Meeting" "2024-01-15T10:00:00Z" "2024-01-15T11:00:00Z" \
    --attendees user1@example.com user2@example.com

# Event on specific calendar
python scripts/gcal.py create-event "Meeting" "2024-01-15T10:00:00Z" "2024-01-15T11:00:00Z" \
    --calendar "work@example.com"
```

### Update Event
```bash
# Update event title
python scripts/gcal.py update-event EVENT_ID --summary "New Title"

# Update event time
python scripts/gcal.py update-event EVENT_ID --start "2024-01-15T14:00:00Z" --end "2024-01-15T15:00:00Z"

# Update multiple fields
python scripts/gcal.py update-event EVENT_ID \
    --summary "Updated Meeting" --description "New agenda" --location "Room B"

# Update attendees
python scripts/gcal.py update-event EVENT_ID --attendees user1@example.com user3@example.com
```

### Delete Event
```bash
python scripts/gcal.py delete-event EVENT_ID
python scripts/gcal.py delete-event EVENT_ID --calendar "work@example.com"
```

### Find Free Time
Find the first available slot for a meeting with specified attendees:
```bash
# Find 30-minute slot for yourself
python scripts/gcal.py find-free-time \
    --attendees me \
    --time-min "2024-01-15T09:00:00Z" \
    --time-max "2024-01-15T17:00:00Z" \
    --duration 30

# Find 60-minute slot with multiple attendees
python scripts/gcal.py find-free-time \
    --attendees me user1@example.com user2@example.com \
    --time-min "2024-01-15T09:00:00Z" \
    --time-max "2024-01-19T17:00:00Z" \
    --duration 60
```

### Respond to Event Invitation
```bash
# Accept an invitation
python scripts/gcal.py respond-to-event EVENT_ID accepted

# Decline an invitation
python scripts/gcal.py respond-to-event EVENT_ID declined

# Mark as tentative
python scripts/gcal.py respond-to-event EVENT_ID tentative

# Respond without notifying organizer
python scripts/gcal.py respond-to-event EVENT_ID accepted --no-notify
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/google-calendar-automation`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Calendar ID Format

- Primary calendar: Use `primary` or omit the `--calendar` flag
- Other calendars: Use the calendar ID from `list-calendars` (usually an email address)

#### Imported: Token Management

Tokens stored securely using the system keyring:
- **macOS**: Keychain
- **Windows**: Windows Credential Locker
- **Linux**: Secret Service API (GNOME Keyring, KDE Wallet, etc.)

Service name: `google-calendar-skill-oauth`

Tokens are automatically refreshed when expired using Google's cloud function.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
