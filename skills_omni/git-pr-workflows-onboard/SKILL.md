---
name: "git-pr-workflows-onboard"
description: "Onboard workflow skill. Use this skill when the user needs to onboard a repository, start a new contributor safely, verify setup and access, map the contribution path, or prepare a clean handoff while preserving upstream workflow, copied support files, and provenance."
version: "0.0.1"
category: "devops"
tags:
  - "git-pr-workflows-onboard"
  - "onboarding"
  - "repository-onboarding"
  - "developer-setup"
  - "knowledge-transfer"
  - "handoff"
  - "access-review"
  - "contribution-workflow"
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
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "git-pr-workflows-onboard"
family_name: "Onboard"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/git-pr-workflows-onboard"
upstream_skill: "skills/git-pr-workflows-onboard"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "git-pr-workflows-onboard"
---

# Onboard

## Overview

This skill turns repository onboarding into an executable, reviewable workflow.

Use it when the operator needs to help a new engineer, contractor, maintainer, or reviewer become productive in an existing repository without guessing hidden setup steps or breaking the established contribution process.

The skill preserves the original intent of the upstream onboarding workflow while improving operational clarity, reproducibility, and handoff quality. It is especially useful when onboarding must retain provenance, copied support files, and upstream workflow expectations during repository intake, migration, or transition.

## When to Use

Activate this skill when the request involves one or more of these outcomes:
- getting a new contributor from zero access to a verified local setup
- documenting or reviewing repository onboarding readiness
- checking whether a repo has enough instructions for someone else to contribute safely
- preparing a handoff between maintainers, teams, or vendors
- preserving upstream workflow and provenance while making the onboarding path easier to execute
- identifying missing access, setup, review, or documentation controls before work begins

Do **not** use this skill as the primary workflow when the task is mainly:
- fixing a single build error with no onboarding or handoff scope
- performing deep architecture analysis unrelated to contributor ramp-up
- writing generic HR onboarding material unrelated to a repository or contribution workflow
- executing privileged access changes that require a separate approval workflow

## Operator Focus

| Area | What to confirm | Minimum evidence |
| --- | --- | --- |
| Provenance | Upstream source, copied files, and workflow assumptions are preserved | ORIGIN notes, source link, unchanged upstream artifacts where required |
| Access | Required repo, package, secret, CI, and environment access is known | List of required systems and who grants access |
| Reproducibility | A new contributor can set up the environment without tribal knowledge | Documented commands, versions, and expected success signals |
| Contribution path | The contributor knows how to branch, test, commit, and open a PR | CONTRIBUTING path, branch rules, PR expectations |
| Safety | Sensitive credentials and protected workflows are handled correctly | Least-privilege guidance, no secret copying into docs or chat |
| Handoff | Another operator can continue the process without re-discovery | Open issues, blockers, milestone status, next actions |

## Workflow

1. **Define the onboarding target**
   - Identify who is being onboarded: engineer, maintainer, reviewer, contractor, or migration recipient.
   - Confirm the expected end state: local setup works, first PR is possible, or ownership handoff is ready.
   - Record any constraints such as restricted access, platform limitations, or preserved upstream workflow requirements.

2. **Inventory the repository entry points**
   - Locate `README`, `CONTRIBUTING`, environment files, devcontainer files, Docker setup, CI config, and ownership or review rules.
   - Note whether setup instructions are centralized or scattered across multiple files.
   - Check for missing basics: prerequisites, supported versions, test commands, branch naming, PR flow, or escalation path.

3. **Map required access before setup begins**
   - Identify every system the newcomer needs: repository hosting, package registry, cloud account, issue tracker, CI logs, secrets manager, and communication channels.
   - Separate mandatory access from optional access.
   - Flag approvals that must be requested before setup, especially if missing access would block package install, test execution, or PR review.

4. **Validate environment reproducibility**
   - Follow the documented setup path exactly as written when possible.
   - Prefer reproducible environments such as dev containers or Docker-based setup when the repository supports them.
   - Capture concrete success criteria: dependency install completes, tests run, app starts, linters pass, or sample command output matches expectations.
   - If setup requires undocumented assumptions, record them as onboarding gaps instead of silently patching around them.

5. **Trace the contribution workflow end to end**
   - Confirm how a contributor should create a branch, run checks, format code, execute tests, and open a pull request.
   - Check whether CODEOWNERS, protected branches, mandatory checks, templates, or review gates affect the path.
   - Verify the expected first contribution size: typo fix, documentation update, small bug fix, or safe starter issue.

6. **Produce the onboarding assessment or handoff**
   - Summarize what works, what is missing, and what blocks progress.
   - Separate findings into: ready now, needs clarification, needs access, and unsafe to proceed.
   - Include the next recommended action for the operator or recipient.
   - Preserve provenance, copied support files, and upstream workflow notes in the final handoff.

## Examples

### Example 1: Repository onboarding assessment

**Input**
```text
Onboard a new backend engineer to this repository. Keep the upstream workflow intact and tell me whether they can reach a first PR without asking the original maintainer for hidden steps.
```

**Expected output shape**
```text
Onboarding status: Partially ready

Ready now:
- README explains clone, install, and local run commands.
- CI config shows required test suite.
- CONTRIBUTING explains branch and PR naming.

Missing or unclear:
- No documented Node version.
- Package registry access requirement is not documented.
- CODEOWNERS requires review from platform-team, but escalation path is missing.

Blocking issues:
- npm install fails without private registry token.
- New contributor cannot access CI logs to debug failures.

Recommended next steps:
1. Add required Node version and package registry login instructions.
2. Document who grants registry and CI access.
3. Validate a starter change path with a docs-only PR.
```

### Example 2: Handoff-oriented onboarding summary

**Input**
```text
Prepare a clean handoff for another maintainer. Preserve provenance and copied support files from the upstream source.
```

**Expected output shape**
```text
Handoff summary:
- Upstream source preserved in ORIGIN notes.
- Local support files copied without functional edits.
- Setup path validated through devcontainer.
- Protected branch policy requires 1 approving review and passing CI.
- Remaining blocker: production secret rotation process is undocumented and must stay with current owner until approved transfer.
```

Open `examples/review-example.md` for a worked before/after review example.

## Best Practices

Do:
- Treat onboarding as a verifiable path, not a motivational checklist.
- Distinguish documented setup from assumed setup; undocumented assumptions are findings.
- Prefer least-privilege access and escalate only the missing permissions needed for the next milestone.
- Capture exact success signals for setup, such as a passing test command or successful app startup.
- Use the smallest safe first contribution to validate the full workflow.
- Preserve upstream provenance and workflow notes during migration or intake.

Do not:
- Paste secrets, tokens, or credentials into onboarding docs, tickets, or chat transcripts.
- Mark onboarding complete just because the repository cloned successfully.
- Rewrite the team workflow during onboarding unless the operator explicitly asks for a process redesign.
- Hide blockers by using personal access or undocumented admin shortcuts.
- Assume review, branch protection, or package registry access is already in place.

## Troubleshooting

**Symptoms:** Clone works, but dependency installation fails with authentication or 404 errors.

**Solution:** Check whether the repository depends on a private package registry, internal mirror, or scoped package token. Document the registry URL, the required credential type, who grants access, and a safe verification command. Do not store live credentials in the repository or onboarding notes.

**Symptoms:** The local environment starts, but tests fail with version mismatch or missing toolchain errors.

**Solution:** Compare the documented runtime and tool versions with actual project files such as `.nvmrc`, `package.json`, `Dockerfile`, devcontainer config, or CI definitions. Normalize the onboarding instructions around the version source of truth and record the expected success command.

**Symptoms:** A new contributor can make a change locally but cannot open or merge a PR.

**Solution:** Review branch protection, CODEOWNERS, PR template requirements, and mandatory status checks. Confirm whether fork-based contribution is required or whether direct branches are allowed. Document the approval path and expected reviewers.

**Symptoms:** Setup succeeds only when an experienced maintainer provides undocumented steps over chat.

**Solution:** Treat every hidden step as an onboarding defect. Move those steps into the repository docs or handoff notes, then re-run the setup path from the documented state only.

**Symptoms:** Handoff appears complete, but the next maintainer still cannot safely operate the repository.

**Solution:** Verify that the handoff includes access dependencies, environment validation evidence, open blockers, escalation contacts, and provenance notes. If any of those are missing, the handoff is incomplete even if the codebase itself is intact.

## Additional Resources

- [references/review-criteria.md](references/review-criteria.md) — Open this when you need a compact rubric for judging onboarding completeness, access readiness, environment reproducibility, contribution-path clarity, and handoff quality.
- [examples/review-example.md](examples/review-example.md) — Open this when you want a concrete example of how to assess a repository's onboarding state and present findings clearly.

## Related Skills

No related local skills were provided in the source context. Keep this skill focused on repository onboarding, contribution readiness, and handoff quality.
