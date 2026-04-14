---
name: conductor-implement-v2
description: "Implement Track workflow skill. Use this skill when the user needs Execute tasks from a track's implementation plan following TDD workflow and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["conductor-implement-v2", "conductor-implement", "execute", "tasks", "track", "implementation", "plan", "following"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Implement Track

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/conductor-implement` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Implement Track Execute tasks from a track's implementation plan, following the workflow rules defined in conductor/workflow.md.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Pre-flight Checks, Track Selection, Context Loading, Track Status Update, Task Execution Loop, Error Handling During Implementation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on implement track tasks or workflows
- Needing guidance, best practices, or checklists for implement track
- The task is unrelated to implement track
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Execute tasks from a track's implementation plan following TDD workflow.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Pre-flight Checks

1. Verify Conductor is initialized:
   - Check `conductor/product.md` exists
   - Check `conductor/workflow.md` exists
   - Check `conductor/tracks.md` exists
   - If missing: Display error and suggest running `/conductor:setup` first

2. Load workflow configuration:
   - Read `conductor/workflow.md`
   - Parse TDD strictness level
   - Parse commit strategy
   - Parse verification checkpoint rules

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @conductor-implement-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/conductor-implement-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/conductor-implement-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @conductor-implement-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- NEVER skip verification checkpoints - Always wait for user approval between phases
- STOP on any failure - Do not attempt to continue past errors
- Follow workflow.md strictly - TDD, commit strategy, and verification rules are mandatory
- Keep plan.md updated - Task status must reflect actual progress
- Commit frequently - Each task completion should be committed
- Track all commits - Record commit hashes in metadata.json for potential revert
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Critical Rules

1. **NEVER skip verification checkpoints** - Always wait for user approval between phases
2. **STOP on any failure** - Do not attempt to continue past errors
3. **Follow workflow.md strictly** - TDD, commit strategy, and verification rules are mandatory
4. **Keep plan.md updated** - Task status must reflect actual progress
5. **Commit frequently** - Each task completion should be committed
6. **Track all commits** - Record commit hashes in metadata.json for potential revert

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/conductor-implement`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Track Selection

### If argument provided:

- Validate track exists: `conductor/tracks/{argument}/plan.md`
- If not found: Search for partial matches, suggest corrections

### If no argument:

1. Read `conductor/tracks.md`
2. Parse for incomplete tracks (status `[ ]` or `[~]`)
3. Display selection menu:

   ```
   Select a track to implement:

   In Progress:
   1. [~] auth_20250115 - User Authentication (Phase 2, Task 3)

   Pending:
   2. [ ] nav-fix_20250114 - Navigation Bug Fix
   3. [ ] dashboard_20250113 - Dashboard Feature

   Enter number or track ID:
   ```

#### Imported: Context Loading

Load all relevant context for implementation:

1. Track documents:
   - `conductor/tracks/{trackId}/spec.md` - Requirements
   - `conductor/tracks/{trackId}/plan.md` - Task list
   - `conductor/tracks/{trackId}/metadata.json` - Progress state

2. Project context:
   - `conductor/product.md` - Product understanding
   - `conductor/tech-stack.md` - Technical constraints
   - `conductor/workflow.md` - Process rules

3. Code style (if exists):
   - `conductor/code_styleguides/{language}.md`

#### Imported: Track Status Update

Update track to in-progress:

1. In `conductor/tracks.md`:
   - Change `[ ]` to `[~]` for this track

2. In `conductor/tracks/{trackId}/metadata.json`:
   - Set `status: "in_progress"`
   - Update `updated` timestamp

#### Imported: Task Execution Loop

For each incomplete task in plan.md (marked with `[ ]`):

### 1. Task Identification

Parse plan.md to find next incomplete task:

- Look for lines matching `- [ ] Task X.Y: {description}`
- Track current phase from structure

### 2. Task Start

Mark task as in-progress:

- Update plan.md: Change `[ ]` to `[~]` for current task
- Announce: "Starting Task X.Y: {description}"

### 3. TDD Workflow (if TDD enabled in workflow.md)

**Red Phase - Write Failing Test:**

```
Following TDD workflow for Task X.Y...

Step 1: Writing failing test
```

- Create test file if needed
- Write test(s) for the task functionality
- Run tests to confirm they fail
- If tests pass unexpectedly: HALT, investigate

**Green Phase - Implement:**

```
Step 2: Implementing minimal code to pass test
```

- Write minimum code to make test pass
- Run tests to confirm they pass
- If tests fail: Debug and fix

**Refactor Phase:**

```
Step 3: Refactoring while keeping tests green
```

- Clean up code
- Run tests to ensure still passing

### 4. Non-TDD Workflow (if TDD not strict)

- Implement the task directly
- Run any existing tests
- Manual verification as needed

### 5. Task Completion

**Commit changes** (following commit strategy from workflow.md):

```bash
git add -A
git commit -m "{commit_prefix}: {task description} ({trackId})"
```

**Update plan.md:**

- Change `[~]` to `[x]` for completed task
- Commit plan update:

```bash
git add conductor/tracks/{trackId}/plan.md
git commit -m "chore: mark task X.Y complete ({trackId})"
```

**Update metadata.json:**

- Increment `tasks.completed`
- Update `updated` timestamp

### 6. Phase Completion Check

After each task, check if phase is complete:

- Parse plan.md for phase structure
- If all tasks in current phase are `[x]`:

**Run phase verification:**

```
Phase {N} complete. Running verification...
```

- Execute verification tasks listed for the phase
- Run full test suite: `npm test` / `pytest` / etc.

**Report and wait for approval:**

```
Phase {N} Verification Results:
- All phase tasks: Complete
- Tests: {passing/failing}
- Verification: {pass/fail}

Approve to continue to Phase {N+1}?
1. Yes, continue
2. No, there are issues to fix
3. Pause implementation
```

**CRITICAL: Wait for explicit user approval before proceeding to next phase.**

#### Imported: Error Handling During Implementation

### On Tool Failure

```
ERROR: {tool} failed with: {error message}

Options:
1. Retry the operation
2. Skip this task and continue
3. Pause implementation
4. Revert current task changes
```

- HALT and present options
- Do NOT automatically continue

### On Test Failure

```
TESTS FAILING after Task X.Y

Failed tests:
- {test name}: {failure reason}

Options:
1. Attempt to fix
2. Rollback task changes
3. Pause for manual intervention
```

### On Git Failure

```
GIT ERROR: {error message}

This may indicate:
- Uncommitted changes from outside Conductor
- Merge conflicts
- Permission issues

Options:
1. Show git status
2. Attempt to resolve
3. Pause for manual intervention
```

#### Imported: Track Completion

When all phases and tasks are complete:

### 1. Final Verification

```
All tasks complete. Running final verification...
```

- Run full test suite
- Check all acceptance criteria from spec.md
- Generate verification report

### 2. Update Track Status

In `conductor/tracks.md`:

- Change `[~]` to `[x]` for this track
- Update the "Updated" column

In `conductor/tracks/{trackId}/metadata.json`:

- Set `status: "complete"`
- Set `phases.completed` to total
- Set `tasks.completed` to total
- Update `updated` timestamp

In `conductor/tracks/{trackId}/plan.md`:

- Update header status to `[x] Complete`

### 3. Documentation Sync Offer

```
Track complete! Would you like to sync documentation?

This will update:
- conductor/product.md (if new features added)
- conductor/tech-stack.md (if new dependencies added)
- README.md (if applicable)

1. Yes, sync documentation
2. No, skip
```

### 4. Cleanup Offer

```
Track {trackId} is complete.

Cleanup options:
1. Archive - Move to conductor/tracks/_archive/
2. Delete - Remove track directory
3. Keep - Leave as-is
```

### 5. Completion Summary

```
Track Complete: {track title}

Summary:
- Track ID: {trackId}
- Phases completed: {N}/{N}
- Tasks completed: {M}/{M}
- Commits created: {count}
- Tests: All passing

Next steps:
- Run /conductor:status to see project progress
- Run /conductor:new-track for next feature
```

#### Imported: Progress Tracking

Maintain progress in `metadata.json` throughout:

```json
{
  "id": "auth_20250115",
  "title": "User Authentication",
  "type": "feature",
  "status": "in_progress",
  "created": "2025-01-15T10:00:00Z",
  "updated": "2025-01-15T14:30:00Z",
  "current_phase": 2,
  "current_task": "2.3",
  "phases": {
    "total": 3,
    "completed": 1
  },
  "tasks": {
    "total": 12,
    "completed": 7
  },
  "commits": [
    "abc1234: feat: add login form (auth_20250115)",
    "def5678: feat: add password validation (auth_20250115)"
  ]
}
```

#### Imported: Resumption

If implementation is paused and resumed:

1. Load `metadata.json` for current state
2. Find current task from `current_task` field
3. Check if task is `[~]` in plan.md
4. Ask user:

   ```
   Resuming track: {title}

   Last task in progress: Task {X.Y}: {description}

   Options:
   1. Continue from where we left off
   2. Restart current task
   3. Show progress summary first
   ```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
