---
name: "git-pr-workflows-onboard-v2"
description: "Onboard workflow skill. Use this skill when a repository handoff, maintainer transition, or first-contribution onboarding effort must preserve upstream workflow, copied support files, provenance, access expectations, and review safety before merge or transfer."
version: "0.0.1"
category: "devops"
tags:
  - "git-pr-workflows-onboard-v2"
  - "onboarding"
  - "knowledge-transfer"
  - "repository-governance"
  - "handoff"
  - "pr-workflow"
  - "provenance"
  - "access-review"
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
license: "Unknown"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "git-pr-workflows-onboard-v2"
family_name: "Onboard"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/git-pr-workflows-onboard-v2"
upstream_skill: "skills/git-pr-workflows-onboard-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "git-pr-workflows-onboard-v2"
---

# Onboard

## Overview

This skill preserves the intent of the upstream onboarding workflow while making it operational for repository-based DevOps, engineering handoff, and first-contribution work.

Use it when a new contributor, maintainer, reviewer, or inheriting team must become productive without losing repository context, workflow provenance, copied support files, or review safety.

This is not a generic employee welcome checklist. It is a review-oriented onboarding workflow for repositories, infrastructure, and delivery systems where access, ownership, environment setup, and handoff completeness must be checked before merge or transfer.

## When to Use

Activate this skill when most of the following are true:

- A repository, service, or environment is being handed off to a new owner or contributor.
- The operator must preserve the upstream workflow and copied support files rather than replacing them with a new process.
- There is risk of losing context about ownership, review routing, branch policy, release steps, or environment setup.
- The new contributor needs enough context to make a safe first change or review a pending PR.
- Access, approvals, or local/dev-container bootstrap may block onboarding.
- The handoff must leave clear provenance showing what came from upstream and what was added locally.

Do **not** use this skill as the primary workflow when:

- The task is only HR onboarding, culture introduction, or meeting scheduling.
- The repository already has a complete, validated onboarding runbook and the operator only needs to follow it.
- The operator is changing product architecture, repository structure, or governance policy rather than onboarding into the existing process.
- The request is purely to fix a broken CI pipeline or incident unrelated to handoff or onboarding readiness.

## Workflow

1. **Confirm onboarding scope and success criteria**
   - Identify whether this is first contribution, maintainer transition, repository adoption, or temporary review coverage.
   - Define the minimum successful outcome, such as: “new maintainer can review PRs safely,” “new contributor can open a compliant PR,” or “handoff receiver can bootstrap the environment and locate ownership rules.”
   - Record time constraints, sensitive environments, and whether merge authority is included.

2. **Inventory artifacts and preserve provenance**
   - List the upstream workflow documents, copied support files, templates, examples, and any local additions.
   - Preserve original intent before editing or reorganizing anything.
   - Note where provenance is tracked, such as `ORIGIN.md`, `metadata.json`, imported notes, or copied examples.
   - Separate inherited material from newly curated guidance so reviewers can audit changes.

3. **Check repository governance and access expectations**
   - Verify who owns review approval, merge decisions, environment secrets, and release authority.
   - Identify CODEOWNERS, branch protections, repository rulesets, PR templates, issue templates, and required status checks if they exist.
   - Confirm whether the onboarded person has the minimum required access for cloning, branching, reviewing, CI visibility, and deployment observation.
   - If access is missing, stop short of telling the operator to bypass controls. Document the exact missing permission and the owner who must grant it.

4. **Validate local or reproducible setup path**
   - Determine the supported setup path: native local tooling, containerized workflow, or dev container.
   - Confirm the minimum bootstrap commands, expected services, environment variables, and any non-obvious prerequisites.
   - Prefer reproducible, documented setup paths over machine-specific tribal knowledge.
   - If setup instructions are incomplete, capture the gap explicitly instead of inventing missing steps.

5. **Map the first safe contribution or review path**
   - Identify one bounded task the onboarded person can complete safely.
   - Define the expected workflow from branch creation to PR submission or review completion.
   - Include review routing, template use, test expectations, and any required evidence such as screenshots, logs, or plan notes.
   - Choose a task small enough to expose the workflow without granting unnecessary risk.

6. **Create the handoff package**
   - Deliver a concise onboarding summary covering ownership, access state, setup method, first-task recommendation, open blockers, and provenance notes.
   - Link to the exact source artifacts rather than paraphrasing everything into one long document.
   - Call out unresolved items clearly: missing access, stale docs, unowned services, ambiguous reviewers, or unverified setup instructions.

7. **Run a readiness review before merge or transfer**
   - Check whether a reviewer could understand what was preserved, what changed, and what still needs follow-up.
   - Verify that the onboarded person can identify: where to start, how to ask for review, what controls apply, and who owns escalation.
   - Use the review checklist in [`references/review-criteria.md`](references/review-criteria.md) before declaring the handoff complete.

## Examples

### Example 1: Maintainer handoff review

**Input**

```text
Repository: infra-deploy
Scenario: Original maintainer is leaving. New maintainer must review PRs and supervise releases.
Known materials: README, CONTRIBUTING.md, .github/PULL_REQUEST_TEMPLATE.md, CODEOWNERS, devcontainer.json
Problem: Release authority is unclear and local setup only works on one existing maintainer's laptop.
```

**Expected output**

```text
Handoff summary:
- Scope: Maintainer transition for infra-deploy
- Provenance preserved: upstream README, CONTRIBUTING, PR template, CODEOWNERS, devcontainer config
- Ownership findings: CODEOWNERS covers app/, but release tagging authority is undocumented
- Access findings: new maintainer can review PRs but cannot access release secrets
- Setup findings: dev container exists but was not verified against current branch; local manual setup is incomplete
- First safe task: review and merge a docs-only PR using existing template and required checks
- Blockers: release authority owner unknown; secret access pending; setup validation needed
- Recommendation: do not transfer release responsibility until bootstrap and secret-access path are verified
```

### Example 2: First-contribution onboarding

**Input**

```text
Repository: service-api
Scenario: New contributor must make a small bug fix and open a compliant PR.
Known materials: CONTRIBUTING.md, issue template, CI checks
Problem: Contributor can clone the repo but does not know branch naming, test scope, or reviewers.
```

**Expected output**

```text
Onboarding summary:
- Scope: first safe contribution
- Workflow: create feature branch, run unit tests, open PR with template, request review from API owners
- Governance: CI checks required before merge; CODEOWNERS routes review to backend team
- Setup status: local bootstrap works; test command verified
- First task: fix a labeled good-first-issue in request validation
- Open questions: none blocking first PR
```

For a longer worked review with good and bad outcomes, open [`examples/review-example.md`](examples/review-example.md).

## Best Practices

- **Do preserve provenance.** Keep a clear line between imported upstream material and local edits.
- **Do define a minimum successful outcome.** “Finish onboarding” is vague; “new reviewer can approve a low-risk PR safely” is testable.
- **Do verify ownership paths.** If review, release, or environment ownership is unclear, treat that as a handoff risk.
- **Do prefer reproducible setup.** Use documented local setup, containers, or dev containers when available.
- **Do choose a bounded first task.** The first task should exercise the workflow without requiring broad production authority.
- **Do stop and escalate on missing permissions.** Record the missing access and the responsible owner instead of suggesting workarounds.
- **Do link to source artifacts.** Point operators to the exact files that govern contribution and review behavior.

- **Do not rewrite the upstream process unless the request explicitly includes process redesign.**
- **Do not hide uncertainty.** Missing reviewers, stale docs, or unverified setup should remain visible in the handoff.
- **Do not assume merge or deployment rights.** Verify them explicitly.
- **Do not compress setup validation into “works on my machine.”** Capture the tested path and its limits.
- **Do not assign ownership without evidence from repository controls or existing practice.**

## Troubleshooting

**Symptoms:** The new contributor can clone the repository but cannot determine who must review the PR.

**Solution:** Check `CODEOWNERS`, PR templates, repository rules, team docs, and recent merged PRs. If routing is still ambiguous, document the gap as an onboarding blocker and identify the maintainer who must confirm reviewer ownership.

**Symptoms:** Setup instructions exist, but the environment fails to start or differs from current CI behavior.

**Solution:** Prefer the documented reproducible path such as a dev container or containerized bootstrap if one exists. Record the exact failing step, expected result, and branch used for validation. Do not invent missing environment variables or secret values.

**Symptoms:** The onboarded person can review code but cannot complete merge or release tasks.

**Solution:** Separate review capability from merge or release authority in the handoff summary. List the exact missing permission, the governing control, and the owner required to grant access.

**Symptoms:** Handoff notes are long, but reviewers still do not know what changed from upstream.

**Solution:** Add a concise provenance section that distinguishes preserved upstream artifacts from local curation, unresolved gaps, and newly added instructions.

**Symptoms:** The first task is too large or touches sensitive systems.

**Solution:** Reduce the task to a narrow, observable change that still exercises the target workflow, such as docs, tests, or a low-risk bug fix with standard review checks.

## Additional Resources

- [`references/review-criteria.md`](references/review-criteria.md) — Open this when you need a compact review checklist for access, ownership, provenance, setup validation, and handoff completeness.
- [`examples/review-example.md`](examples/review-example.md) — Open this when you need a worked example showing strong versus weak onboarding review outcomes.

## Related Skills

No confirmed related local skills were provided in the source context.
