---
name: git-pr-workflows-git-workflow
description: "Complete Git Workflow with Multi-Agent Orchestration workflow skill. Use this skill when the user needs Orchestrate a comprehensive git workflow from code review through PR creation, leveraging specialized agents for quality assurance, testing, and deployment readiness. This workflow implements modern g and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["git-pr-workflows-git-workflow", "orchestrate", "comprehensive", "git", "review", "creation", "leveraging", "specialized"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Complete Git Workflow with Multi-Agent Orchestration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/git-pr-workflows-git-workflow` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Complete Git Workflow with Multi-Agent Orchestration Orchestrate a comprehensive git workflow from code review through PR creation, leveraging specialized agents for quality assurance, testing, and deployment readiness. This workflow implements modern git best practices including Conventional Commits, automated testing, and structured PR creation. [Extended thinking: This workflow coordinates multiple specialized agents to ensure code quality before commits are made. The code-reviewer agent performs initial quality checks, test-automator ensures all tests pass, and deployment-engineer verifies production readiness. By orchestrating these agents sequentially with context passing, we prevent broken code from entering the repository while maintaining high velocity. The workflow supports both trunk-based and feature-branch strategies with configurable options for different team needs.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Configuration, Phase 1: Pre-Commit Review and Analysis, Phase 2: Testing and Validation, Phase 3: Commit Message Generation, Phase 4: Branch Strategy and Push Preparation, Phase 5: Pull Request Creation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on complete git workflow with multi-agent orchestration tasks or workflows
- Needing guidance, best practices, or checklists for complete git workflow with multi-agent orchestration
- The task is unrelated to complete git workflow with multi-agent orchestration
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Orchestrate a comprehensive git workflow from code review through PR creation, leveraging specialized agents for quality assurance, testing, and deployment readiness. This workflow implements modern g.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Immediate Revert: Create revert PR with git revert <commit-hash>
6. Feature Flag Disable: If using feature flags, disable immediately
7. Hotfix Branch: For critical issues, create hotfix branch from main

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Rollback Procedures

In case of issues after merge:

1. **Immediate Revert**: Create revert PR with `git revert <commit-hash>`
2. **Feature Flag Disable**: If using feature flags, disable immediately
3. **Hotfix Branch**: For critical issues, create hotfix branch from main
4. **Communication**: Notify team via designated channels
5. **Root Cause Analysis**: Document issue in postmortem template

#### Imported: Configuration

**Target branch**: $ARGUMENTS (defaults to 'main' if not specified)

**Supported flags**:
- `--skip-tests`: Skip automated test execution (use with caution)
- `--draft-pr`: Create PR as draft for work-in-progress
- `--no-push`: Perform all checks but don't push to remote
- `--squash`: Squash commits before pushing
- `--conventional`: Enforce Conventional Commits format strictly
- `--trunk-based`: Use trunk-based development workflow
- `--feature-branch`: Use feature branch workflow (default)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @git-pr-workflows-git-workflow to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @git-pr-workflows-git-workflow against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @git-pr-workflows-git-workflow for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @git-pr-workflows-git-workflow using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/git-pr-workflows-git-workflow`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-gift` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@design-taste-frontend` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Best Practices Reference

- **Commit Frequency**: Commit early and often, but ensure each commit is atomic
- **Branch Naming**: `(feature|bugfix|hotfix|docs|chore)/<ticket-id>-<brief-description>`
- **PR Size**: Keep PRs under 400 lines for effective review
- **Review Response**: Address review comments within 24 hours
- **Merge Strategy**: Squash for feature branches, merge for release branches
- **Sign-Off**: Require at least 2 approvals for main branch changes

#### Imported: Phase 1: Pre-Commit Review and Analysis

### 1. Code Quality Assessment
- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Review all uncommitted changes for code quality issues. Check for: 1) Code style violations, 2) Security vulnerabilities, 3) Performance concerns, 4) Missing error handling, 5) Incomplete implementations. Generate a detailed report with severity levels (critical/high/medium/low) and provide specific line-by-line feedback. Output format: JSON with {issues: [], summary: {critical: 0, high: 0, medium: 0, low: 0}, recommendations: []}"
- Expected output: Structured code review report for next phase

### 2. Dependency and Breaking Change Analysis
- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Analyze the changes for: 1) New dependencies or version changes, 2) Breaking API changes, 3) Database schema modifications, 4) Configuration changes, 5) Backward compatibility issues. Context from previous review: [insert issues summary]. Identify any changes that require migration scripts or documentation updates."
- Context from previous: Code quality issues that might indicate breaking changes
- Expected output: Breaking change assessment and migration requirements

#### Imported: Phase 2: Testing and Validation

### 1. Test Execution and Coverage
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Execute all test suites for the modified code. Run: 1) Unit tests, 2) Integration tests, 3) End-to-end tests if applicable. Generate coverage report and identify any untested code paths. Based on review issues: [insert critical/high issues], ensure tests cover the problem areas. Provide test results in format: {passed: [], failed: [], skipped: [], coverage: {statements: %, branches: %, functions: %, lines: %}, untested_critical_paths: []}"
- Context from previous: Critical code review issues that need test coverage
- Expected output: Complete test results and coverage metrics

### 2. Test Recommendations and Gap Analysis
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Based on test results [insert summary] and code changes, identify: 1) Missing test scenarios, 2) Edge cases not covered, 3) Integration points needing verification, 4) Performance benchmarks needed. Generate test implementation recommendations prioritized by risk. Consider the breaking changes identified: [insert breaking changes]."
- Context from previous: Test results, breaking changes, untested paths
- Expected output: Prioritized list of additional tests needed

#### Imported: Phase 3: Commit Message Generation

### 1. Change Analysis and Categorization
- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Analyze all changes and categorize them according to Conventional Commits specification. Identify the primary change type (feat/fix/docs/style/refactor/perf/test/build/ci/chore/revert) and scope. For changes: [insert file list and summary], determine if this should be a single commit or multiple atomic commits. Consider test results: [insert test summary]."
- Context from previous: Test results, code review summary
- Expected output: Commit structure recommendation

### 2. Conventional Commit Message Creation
- Use Task tool with subagent_type="llm-application-dev::prompt-engineer"
- Prompt: "Create Conventional Commits format message(s) based on categorization: [insert categorization]. Format: <type>(<scope>): <subject> with blank line then <body> explaining what and why (not how), then <footer> with BREAKING CHANGE: if applicable. Include: 1) Clear subject line (50 chars max), 2) Detailed body explaining rationale, 3) References to issues/tickets, 4) Co-authors if applicable. Consider the impact: [insert breaking changes if any]."
- Context from previous: Change categorization, breaking changes
- Expected output: Properly formatted commit message(s)

#### Imported: Phase 4: Branch Strategy and Push Preparation

### 1. Branch Management
- Use Task tool with subagent_type="cicd-automation::deployment-engineer"
- Prompt: "Based on workflow type [--trunk-based or --feature-branch], prepare branch strategy. For feature branch: ensure branch name follows pattern (feature|bugfix|hotfix)/<ticket>-<description>. For trunk-based: prepare for direct main push with feature flag strategy if needed. Current branch: [insert branch], target: [insert target branch]. Verify no conflicts with target branch."
- Expected output: Branch preparation commands and conflict status

### 2. Pre-Push Validation
- Use Task tool with subagent_type="cicd-automation::deployment-engineer"
- Prompt: "Perform final pre-push checks: 1) Verify all CI checks will pass, 2) Confirm no sensitive data in commits, 3) Validate commit signatures if required, 4) Check branch protection rules, 5) Ensure all review comments addressed. Test summary: [insert test results]. Review status: [insert review summary]."
- Context from previous: All previous validation results
- Expected output: Push readiness confirmation or blocking issues

#### Imported: Phase 5: Pull Request Creation

### 1. PR Description Generation
- Use Task tool with subagent_type="documentation-generation::docs-architect"
- Prompt: "Create comprehensive PR description including: 1) Summary of changes (what and why), 2) Type of change checklist, 3) Testing performed summary from [insert test results], 4) Screenshots/recordings if UI changes, 5) Deployment notes from [insert deployment considerations], 6) Related issues/tickets, 7) Breaking changes section if applicable: [insert breaking changes], 8) Reviewer checklist. Format as GitHub-flavored Markdown."
- Context from previous: All validation results, test outcomes, breaking changes
- Expected output: Complete PR description in Markdown

### 2. PR Metadata and Automation Setup
- Use Task tool with subagent_type="cicd-automation::deployment-engineer"
- Prompt: "Configure PR metadata: 1) Assign appropriate reviewers based on CODEOWNERS, 2) Add labels (type, priority, component), 3) Link related issues, 4) Set milestone if applicable, 5) Configure merge strategy (squash/merge/rebase), 6) Set up auto-merge if all checks pass. Consider draft status: [--draft-pr flag]. Include test status: [insert test summary]."
- Context from previous: PR description, test results, review status
- Expected output: PR configuration commands and automation rules

#### Imported: Success Criteria

- ✅ All critical and high-severity code issues resolved
- ✅ Test coverage maintained or improved (target: >80%)
- ✅ All tests passing (unit, integration, e2e)
- ✅ Commit messages follow Conventional Commits format
- ✅ No merge conflicts with target branch
- ✅ PR description complete with all required sections
- ✅ Branch protection rules satisfied
- ✅ Security scanning completed with no critical vulnerabilities
- ✅ Performance benchmarks within acceptable thresholds
- ✅ Documentation updated for any API changes

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
