---
name: "git-advanced-workflows-v3"
description: "Git Advanced Workflows workflow skill. Use this skill when the user needs Master advanced Git techniques to maintain clean history, collaborate effectively, and recover from any situation with confidence and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "git-advanced-workflows-v3"
  - "git-advanced-workflows"
  - "master"
  - "advanced"
  - "git"
  - "techniques"
  - "maintain"
  - "clean"
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
date_added: "2026-04-26"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "git-advanced-workflows-v3"
family_name: "Git Advanced Workflows"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/git-advanced-workflows-v3"
upstream_skill: "skills/git-advanced-workflows-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "261"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "9e212f60f996b5db014190498c8bb4f66624629d"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "git-advanced-workflows-v3"
---

# Git Advanced Workflows

## Overview

This public intake copy packages `plugins/antigravity-bundle-oss-maintainer/skills/git-advanced-workflows` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Git Advanced Workflows Master advanced Git techniques to maintain clean history, collaborate effectively, and recover from any situation with confidence.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Advanced Techniques, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to git advanced workflows
- You need a different domain or tool outside this scope
- Cleaning up commit history before merging
- Applying specific commits across branches
- Finding commits that introduced bugs
- Working on multiple features simultaneously

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Practical Workflows

### Workflow 1: Clean Up Feature Branch Before PR

```bash
# Start with feature branch
git checkout feature/user-auth

# Interactive rebase to clean history
git rebase -i main

# Example rebase operations:
# - Squash "fix typo" commits
# - Reword commit messages for clarity
# - Reorder commits logically
# - Drop unnecessary commits

# Force push cleaned branch (safe if no one else is using it)
git push --force-with-lease origin feature/user-auth
```

### Workflow 2: Apply Hotfix to Multiple Releases

```bash
# Create fix on main
git checkout main
git commit -m "fix: critical security patch"

# Apply to release branches
git checkout release/2.0
git cherry-pick abc123

git checkout release/1.9
git cherry-pick abc123

# Handle conflicts if they arise
git cherry-pick --continue
# or
git cherry-pick --abort
```

### Workflow 3: Find Bug Introduction

```bash
# Start bisect
git bisect start
git bisect bad HEAD
git bisect good v2.1.0

# Git checks out middle commit - run tests
npm test

# If tests fail
git bisect bad

# If tests pass
git bisect good

# Git will automatically checkout next commit to test
# Repeat until bug found

# Automated version
git bisect start HEAD v2.1.0
git bisect run npm test
```

### Workflow 4: Multi-Branch Development

```bash
# Main project directory
cd ~/projects/myapp

# Create worktree for urgent bugfix
git worktree add ../myapp-hotfix hotfix/critical-bug

# Work on hotfix in separate directory
cd ../myapp-hotfix
# Make changes, commit
git commit -m "fix: resolve critical bug"
git push origin hotfix/critical-bug

# Return to main work without interruption
cd ~/projects/myapp
git fetch origin
git cherry-pick hotfix/critical-bug

# Clean up when done
git worktree remove ../myapp-hotfix
```

### Workflow 5: Recover from Mistakes

```bash
# Accidentally reset to wrong commit
git reset --hard HEAD~5  # Oh no!

# Use reflog to find lost commits
git reflog
# Output shows:
# abc123 HEAD@{0}: reset: moving to HEAD~5
# def456 HEAD@{1}: commit: my important changes

# Recover lost commits
git reset --hard def456

# Or create branch from lost commit
git branch recovery def456
```

#### Imported: Core Concepts

### 1. Interactive Rebase

Interactive rebase is the Swiss Army knife of Git history editing.

**Common Operations:**
- `pick`: Keep commit as-is
- `reword`: Change commit message
- `edit`: Amend commit content
- `squash`: Combine with previous commit
- `fixup`: Like squash but discard message
- `drop`: Remove commit entirely

**Basic Usage:**
```bash
# Rebase last 5 commits
git rebase -i HEAD~5

# Rebase all commits on current branch
git rebase -i $(git merge-base HEAD main)

# Rebase onto specific commit
git rebase -i abc123
```

### 2. Cherry-Picking

Apply specific commits from one branch to another without merging entire branches.

```bash
# Cherry-pick single commit
git cherry-pick abc123

# Cherry-pick range of commits (exclusive start)
git cherry-pick abc123..def456

# Cherry-pick without committing (stage changes only)
git cherry-pick -n abc123

# Cherry-pick and edit commit message
git cherry-pick -e abc123
```

### 3. Git Bisect

Binary search through commit history to find the commit that introduced a bug.

```bash
# Start bisect
git bisect start

# Mark current commit as bad
git bisect bad

# Mark known good commit
git bisect good v1.0.0

# Git will checkout middle commit - test it
# Then mark as good or bad
git bisect good  # or: git bisect bad

# Continue until bug found
# When done
git bisect reset
```

**Automated Bisect:**
```bash
# Use script to test automatically
git bisect start HEAD v1.0.0
git bisect run ./test.sh

# test.sh should exit 0 for good, 1-127 (except 125) for bad
```

### 4. Worktrees

Work on multiple branches simultaneously without stashing or switching.

```bash
# List existing worktrees
git worktree list

# Add new worktree for feature branch
git worktree add ../project-feature feature/new-feature

# Add worktree and create new branch
git worktree add -b bugfix/urgent ../project-hotfix main

# Remove worktree
git worktree remove ../project-feature

# Prune stale worktrees
git worktree prune
```

### 5. Reflog

Your safety net - tracks all ref movements, even deleted commits.

```bash
# View reflog
git reflog

# View reflog for specific branch
git reflog show feature/branch

# Restore deleted commit
git reflog
# Find commit hash
git checkout abc123
git branch recovered-branch

# Restore deleted branch
git reflog
git branch deleted-branch abc123
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @git-advanced-workflows-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @git-advanced-workflows-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @git-advanced-workflows-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @git-advanced-workflows-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Recovery Commands

```bash
# Abort operations in progress
git rebase --abort
git merge --abort
git cherry-pick --abort
git bisect reset

# Restore file to version from specific commit
git restore --source=abc123 path/to/file

# Undo last commit but keep changes
git reset --soft HEAD^

# Undo last commit and discard changes
git reset --hard HEAD^

# Recover deleted branch (within 90 days)
git reflog
git branch recovered-branch abc123
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always Use --force-with-lease: Safer than --force, prevents overwriting others' work
- Rebase Only Local Commits: Don't rebase commits that have been pushed and shared
- Descriptive Commit Messages: Future you will thank present you
- Atomic Commits: Each commit should be a single logical change
- Test Before Force Push: Ensure history rewrite didn't break anything
- Keep Reflog Aware: Remember reflog is your safety net for 90 days
- Branch Before Risky Operations: Create backup branch before complex rebases

### Imported Operating Notes

#### Imported: Best Practices

1. **Always Use --force-with-lease**: Safer than --force, prevents overwriting others' work
2. **Rebase Only Local Commits**: Don't rebase commits that have been pushed and shared
3. **Descriptive Commit Messages**: Future you will thank present you
4. **Atomic Commits**: Each commit should be a single logical change
5. **Test Before Force Push**: Ensure history rewrite didn't break anything
6. **Keep Reflog Aware**: Remember reflog is your safety net for 90 days
7. **Branch Before Risky Operations**: Create backup branch before complex rebases

```bash
# Safe force push
git push --force-with-lease origin feature/branch

# Create backup before risky operation
git branch backup-branch
git rebase -i main
# If something goes wrong
git reset --hard backup-branch
```

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-oss-maintainer/skills/git-advanced-workflows`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@changelog-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@commit-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@create-pr-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@distributed-tracing-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resources

- **references/git-rebase-guide.md**: Deep dive into interactive rebase
- **references/git-conflict-resolution.md**: Advanced conflict resolution strategies
- **references/git-history-rewriting.md**: Safely rewriting Git history
- **assets/git-workflow-checklist.md**: Pre-PR cleanup checklist
- **assets/git-aliases.md**: Useful Git aliases for advanced workflows
- **scripts/git-clean-branches.sh**: Clean up merged and stale branches

#### Imported: Advanced Techniques

### Rebase vs Merge Strategy

**When to Rebase:**
- Cleaning up local commits before pushing
- Keeping feature branch up-to-date with main
- Creating linear history for easier review

**When to Merge:**
- Integrating completed features into main
- Preserving exact history of collaboration
- Public branches used by others

```bash
# Update feature branch with main changes (rebase)
git checkout feature/my-feature
git fetch origin
git rebase origin/main

# Handle conflicts
git status
# Fix conflicts in files
git add .
git rebase --continue

# Or merge instead
git merge origin/main
```

### Autosquash Workflow

Automatically squash fixup commits during rebase.

```bash
# Make initial commit
git commit -m "feat: add user authentication"

# Later, fix something in that commit
# Stage changes
git commit --fixup HEAD  # or specify commit hash

# Make more changes
git commit --fixup abc123

# Rebase with autosquash
git rebase -i --autosquash main

# Git automatically marks fixup commits
```

### Split Commit

Break one commit into multiple logical commits.

```bash
# Start interactive rebase
git rebase -i HEAD~3

# Mark commit to split with 'edit'
# Git will stop at that commit

# Reset commit but keep changes
git reset HEAD^

# Stage and commit in logical chunks
git add file1.py
git commit -m "feat: add validation"

git add file2.py
git commit -m "feat: add error handling"

# Continue rebase
git rebase --continue
```

### Partial Cherry-Pick

Cherry-pick only specific files from a commit.

```bash
# Show files in commit
git show --name-only abc123

# Checkout specific files from commit
git checkout abc123 -- path/to/file1.py path/to/file2.py

# Stage and commit
git commit -m "cherry-pick: apply specific changes from abc123"
```

#### Imported: Common Pitfalls

- **Rebasing Public Branches**: Causes history conflicts for collaborators
- **Force Pushing Without Lease**: Can overwrite teammate's work
- **Losing Work in Rebase**: Resolve conflicts carefully, test after rebase
- **Forgetting Worktree Cleanup**: Orphaned worktrees consume disk space
- **Not Backing Up Before Experiment**: Always create safety branch
- **Bisect on Dirty Working Directory**: Commit or stash before bisecting

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
