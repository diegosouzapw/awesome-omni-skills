---
name: openclaw-github-repo-commander
description: "OpenClaw GitHub Repo Commander workflow skill. Use this skill when the user needs 7-stage super workflow for GitHub repo audit, cleanup, PR review, and competitor analysis and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["github", "git", "repository", "audit", "cleanup", "workflow", "devtools", "automation"]
complexity: beginner
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "wd041216-bit"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# OpenClaw GitHub Repo Commander

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/openclaw-github-repo-commander` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# OpenClaw GitHub Repo Commander

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Security & Safety Notes, Source Repository, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to audit a repository for secrets, junk files, or low-quality content
- Use when the user says "clean up my repo", "optimize my GitHub project", or "audit this library"
- Use when reviewing or creating pull requests with structured analysis
- Use when comparing your project against competitors on GitHub
- Use when running /super-workflow or /openclaw-github-repo-commander on a repo URL
- Use when the request clearly matches the imported source intent: 7-stage super workflow for GitHub repo audit, cleanup, PR review, and competitor analysis.

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

#### Imported: Overview

A structured 7-stage super workflow for comprehensive GitHub repository management. This skill automates repository auditing, cleanup, competitor benchmarking, and optimization — turning a messy repo into a clean, well-documented, production-ready project.

#### Imported: How It Works

### Stage 1: Intake
Clone the target repository, define success criteria, and establish baseline metrics.

### Stage 2: Execution
Run `scripts/repo-audit.sh` — automated checks for:
- Hardcoded secrets (`ghp_`, `sk-`, `AKIA`, etc.)
- Tracked `node_modules/` or build artifacts
- Empty directories
- Large files (>1MB)
- Missing `.gitignore` coverage
- Broken internal README links

### Stage 3: Reflection
Deep manual review beyond automation: content quality, documentation consistency, structural issues, version mismatches.

### Stage 4: Competitor Analysis
Search GitHub for similar repositories. Compare documentation standards, feature coverage, star counts, and community adoption.

### Stage 5: Synthesis
Consolidate all findings into a prioritized action plan (P0 critical / P1 important / P2 nice-to-have).

### Stage 6: Iteration
Execute the plan: delete low-value files, fix security issues, upgrade documentation, add CI workflows, update changelogs.

### Stage 7: Validation
Re-run the audit script (target: 7/7 PASS), verify all changes, push to GitHub, and deliver a full report.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @openclaw-github-repo-commander to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @openclaw-github-repo-commander against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @openclaw-github-repo-commander for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @openclaw-github-repo-commander using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Full Repo Audit

```
/openclaw-github-repo-commander https://github.com/owner/my-repo
```

Runs all 7 stages and produces a detailed before/after report.

### Example 2: Quick Cleanup

```
Clean up my GitHub repo — remove junk files, fix secrets, add .gitignore
```

### Example 3: Competitor Benchmarking

```
Compare my skill repo with the top 5 similar repos on GitHub
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Always run Stage 7 validation before pushing
- ✅ Use semantic commit messages: chore:, fix:, docs:
- ✅ Check the pr_todo.json file for pending reviewer requests
- ❌ Don't skip Stage 4 — competitor analysis reveals blind spots
- ❌ Don't commit node_modules/ or .env files
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Always run Stage 7 validation before pushing
- ✅ Use semantic commit messages: `chore:`, `fix:`, `docs:`
- ✅ Check the `pr_todo.json` file for pending reviewer requests
- ❌ Don't skip Stage 4 — competitor analysis reveals blind spots
- ❌ Don't commit `node_modules/` or `.env` files

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/openclaw-github-repo-commander`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@mtls-configuration` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@multi-advisor` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@multi-agent-brainstorming` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@multi-agent-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Security & Safety Notes

- The audit script scans for common secret patterns but excludes `.github/workflows/` to avoid false positives
- All `gh` CLI operations use the user's existing authentication — no credentials are stored by this skill
- The skill never modifies files without explicit user confirmation in Stage 6

#### Imported: Source Repository

[github.com/wd041216-bit/openclaw-github-repo-commander](https://github.com/wd041216-bit/openclaw-github-repo-commander)

**License**: MIT | **Version**: 4.0.0

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
