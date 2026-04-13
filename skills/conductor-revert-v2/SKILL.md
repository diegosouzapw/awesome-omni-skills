---
name: conductor-revert-v2
description: "Revert Track workflow skill. Use this skill when the user needs Git-aware undo by logical work unit (track, phase, or task) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["conductor-revert-v2", "conductor-revert", "git-aware", "undo", "logical", "work", "unit", "track"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Revert Track

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/conductor-revert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Revert Track Revert changes by logical work unit with full git awareness. Supports reverting entire tracks, specific phases, or individual tasks.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Pre-flight Checks, Target Selection, Commit Discovery, Execution Plan Display, Revert Execution, Plan.md Updates.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on revert track tasks or workflows
- Needing guidance, best practices, or checklists for revert track
- The task is unrelated to revert track
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Git-aware undo by logical work unit (track, phase, or task).
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
   - Check `conductor/tracks.md` exists
   - If missing: Display error and suggest running `/conductor:setup` first

2. Verify git repository:
   - Run `git status` to confirm git repo
   - Check for uncommitted changes
   - If uncommitted changes exist:

     ```
     WARNING: Uncommitted changes detected

     Files with changes:
     {list of files}

     Options:
     1. Stash changes and continue
     2. Commit changes first
     3. Cancel revert
     ```

3. Verify git is clean enough to revert:
   - No merge in progress
   - No rebase in progress
   - If issues found: Halt and explain resolution steps

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @conductor-revert-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/conductor-revert-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/conductor-revert-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @conductor-revert-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- NEVER use git reset --hard - Only use git revert
- NEVER use git push --force - Only safe push operations
- NEVER auto-resolve conflicts - Always halt for human intervention
- ALWAYS show full plan - User must see exactly what will happen
- REQUIRE explicit 'YES' - Not 'y', not enter, only 'YES'
- HALT on ANY error - Do not attempt to continue past failures
- PRESERVE history - Revert commits are preferred over history rewriting

### Imported Operating Notes

#### Imported: Safety Rules

1. **NEVER use `git reset --hard`** - Only use `git revert`
2. **NEVER use `git push --force`** - Only safe push operations
3. **NEVER auto-resolve conflicts** - Always halt for human intervention
4. **ALWAYS show full plan** - User must see exactly what will happen
5. **REQUIRE explicit 'YES'** - Not 'y', not enter, only 'YES'
6. **HALT on ANY error** - Do not attempt to continue past failures
7. **PRESERVE history** - Revert commits are preferred over history rewriting

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/conductor-revert`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Target Selection

### If argument provided:

Parse the argument format:

**Full track:** `{trackId}`

- Example: `auth_20250115`
- Reverts all commits for the entire track

**Specific phase:** `{trackId}:phase{N}`

- Example: `auth_20250115:phase2`
- Reverts commits for phase N and all subsequent phases

**Specific task:** `{trackId}:task{X.Y}`

- Example: `auth_20250115:task2.3`
- Reverts commits for task X.Y only

### If no argument:

Display guided selection menu:

```
What would you like to revert?

Currently In Progress:
1. [~] Task 2.3 in dashboard_20250112 (most recent)

Recently Completed:
2. [x] Task 2.2 in dashboard_20250112 (1 hour ago)
3. [x] Phase 1 in dashboard_20250112 (3 hours ago)
4. [x] Full track: auth_20250115 (yesterday)

Options:
5. Enter specific reference (track:phase or track:task)
6. Cancel

Select option:
```

#### Imported: Commit Discovery

### For Task Revert

1. Search git log for task-specific commits:

   ```bash
   git log --oneline --grep="{trackId}" --grep="Task {X.Y}" --all-match
   ```

2. Also find the plan.md update commit:

   ```bash
   git log --oneline --grep="mark task {X.Y} complete" --grep="{trackId}" --all-match
   ```

3. Collect all matching commit SHAs

### For Phase Revert

1. Determine task range for the phase by reading plan.md
2. Search for all task commits in that phase:

   ```bash
   git log --oneline --grep="{trackId}" | grep -E "Task {N}\.[0-9]"
   ```

3. Find phase verification commit if exists
4. Find all plan.md update commits for phase tasks
5. Collect all matching commit SHAs in chronological order

### For Full Track Revert

1. Find ALL commits mentioning the track:

   ```bash
   git log --oneline --grep="{trackId}"
   ```

2. Find track creation commits:

   ```bash
   git log --oneline -- "conductor/tracks/{trackId}/"
   ```

3. Collect all matching commit SHAs in chronological order

#### Imported: Execution Plan Display

Before any revert operations, display full plan:

```
================================================================================
                           REVERT EXECUTION PLAN
================================================================================

Target: {description of what's being reverted}

Commits to revert (in reverse chronological order):
  1. abc1234 - feat: add chart rendering (dashboard_20250112)
  2. def5678 - chore: mark task 2.3 complete (dashboard_20250112)
  3. ghi9012 - feat: add data hooks (dashboard_20250112)
  4. jkl3456 - chore: mark task 2.2 complete (dashboard_20250112)

Files that will be affected:
  - src/components/Dashboard.tsx (modified)
  - src/hooks/useData.ts (will be deleted - was created in these commits)
  - conductor/tracks/dashboard_20250112/plan.md (modified)

Plan updates:
  - Task 2.2: [x] -> [ ]
  - Task 2.3: [~] -> [ ]

================================================================================
                              !! WARNING !!
================================================================================

This operation will:
- Create {N} revert commits
- Modify {M} files
- Reset {P} tasks to pending status

This CANNOT be easily undone without manual intervention.

================================================================================

Type 'YES' to proceed, or anything else to cancel:
```

**CRITICAL: Require explicit 'YES' confirmation. Do not proceed on 'y', 'yes', or enter.**

#### Imported: Revert Execution

Execute reverts in reverse chronological order (newest first):

```
Executing revert plan...

[1/4] Reverting abc1234...
      git revert --no-edit abc1234
      ✓ Success

[2/4] Reverting def5678...
      git revert --no-edit def5678
      ✓ Success

[3/4] Reverting ghi9012...
      git revert --no-edit ghi9012
      ✓ Success

[4/4] Reverting jkl3456...
      git revert --no-edit jkl3456
      ✓ Success
```

### On Merge Conflict

If any revert produces a merge conflict:

```
================================================================================
                           MERGE CONFLICT DETECTED
================================================================================

Conflict occurred while reverting: {sha} - {message}

Conflicted files:
  - src/components/Dashboard.tsx

Options:
1. Show conflict details
2. Abort revert sequence (keeps completed reverts)
3. Open manual resolution guide

IMPORTANT: Reverts 1-{N} have been completed. You may need to manually
resolve this conflict before continuing or fully undo the revert sequence.

Select option:
```

**HALT immediately on any conflict. Do not attempt automatic resolution.**

#### Imported: Plan.md Updates

After successful git reverts, update plan.md:

1. Read current plan.md
2. For each reverted task, change marker:
   - `[x]` -> `[ ]`
   - `[~]` -> `[ ]`
3. Write updated plan.md
4. Update metadata.json:
   - Decrement `tasks.completed`
   - Update `status` if needed
   - Update `updated` timestamp

**Do NOT commit plan.md changes** - they are part of the revert operation

#### Imported: Track Status Updates

### If reverting entire track:

- In tracks.md: Change `[x]` or `[~]` to `[ ]`
- Consider offering to delete the track directory entirely

### If reverting to incomplete state:

- In tracks.md: Ensure marked as `[~]` if partially complete, `[ ]` if fully reverted

#### Imported: Verification

After revert completion:

```
================================================================================
                           REVERT COMPLETE
================================================================================

Summary:
  - Reverted {N} commits
  - Reset {P} tasks to pending
  - {M} files affected

Git log now shows:
  {recent commit history}

Plan.md status:
  - Task 2.2: [ ] Pending
  - Task 2.3: [ ] Pending

================================================================================

Verify the revert was successful:
  1. Run tests: {test command}
  2. Check application: {relevant check}

If issues are found, you may need to:
  - Fix conflicts manually
  - Re-implement the reverted tasks
  - Use 'git revert HEAD~{N}..HEAD' to undo the reverts

================================================================================
```

#### Imported: Edge Cases

### Track Never Committed

```
No commits found for track: {trackId}

The track exists but has no associated commits. This may mean:
- Implementation never started
- Commits used different format

Options:
1. Delete track directory only
2. Cancel
```

### Commits Already Reverted

```
Some commits appear to already be reverted:
  - abc1234 was reverted by xyz9876

Options:
1. Skip already-reverted commits
2. Cancel and investigate
```

### Remote Already Pushed

```
WARNING: Some commits have been pushed to remote

Commits on remote:
  - abc1234 (origin/main)
  - def5678 (origin/main)

Reverting will create new revert commits that you'll need to push.
This is the safe approach (no force push required).

Continue with revert? (YES/no):
```

#### Imported: Undo the Revert

If user needs to undo the revert itself:

```
To undo this revert operation:

  git revert HEAD~{N}..HEAD

This will create new commits that restore the reverted changes.

Alternatively, if not yet pushed:
  git reset --soft HEAD~{N}
  git checkout -- .

(Use with caution - this discards the revert commits)
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
