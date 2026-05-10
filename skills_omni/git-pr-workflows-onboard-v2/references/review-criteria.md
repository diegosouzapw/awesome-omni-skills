# Repository Onboarding Review Criteria

Use this checklist during repository onboarding, maintainer transition, or first-contribution handoff review.

## 1. Scope and success criteria

Pass if all are true:

- The onboarding type is explicit: first contribution, review coverage, maintainer transition, or repository adoption.
- The minimum successful outcome is testable.
- Time-sensitive or sensitive-scope constraints are documented.

Warning signs:

- “Complete onboarding” with no measurable outcome.
- Release or production responsibility implied but not stated.

## 2. Provenance and artifact preservation

Pass if all are true:

- Imported upstream files or workflows are identified.
- Local curation is distinguishable from inherited material.
- Reviewers can tell what was preserved, what was added, and what remains unresolved.

Warning signs:

- Handoff note rewrites everything but does not point back to source files.
- Operators cannot tell whether a process came from upstream or from the current editor.

## 3. Ownership and governance

Pass if all are true:

- Review ownership is identified from evidence such as CODEOWNERS, team docs, templates, or recent practice.
- Merge and release authority are confirmed separately when relevant.
- Repository controls such as branch protection, rulesets, or required checks are acknowledged when they affect onboarding.

Warning signs:

- Reviewer ownership inferred from guesswork.
- New maintainer is assumed to have release authority because they can review PRs.

## 4. Access readiness

Pass if all are true:

- Required capabilities are listed: clone, branch, CI visibility, review, merge, secret or environment access if needed.
- Missing permissions are documented as blockers or follow-ups.
- No unsafe bypasses are suggested.

Warning signs:

- “Access pending” with no owner or next step.
- Setup depends on secrets that the new operator cannot obtain through a documented path.

## 5. Environment bootstrap validation

Pass if all are true:

- Supported setup path is identified: local native, containerized, or dev container.
- The validation status is clear: verified, partially verified, or unverified.
- Important prerequisites or drift risks are called out.

Warning signs:

- Setup instructions exist but were never tested against the current branch.
- Known drift between local setup and CI is omitted.

## 6. First-task safety

Pass if all are true:

- The first task is small, observable, and appropriate to current access.
- The task exercises the intended workflow without overexposing sensitive systems.
- Expected tests, review routing, and evidence are named.

Warning signs:

- First task requires production access before setup or ownership is validated.
- Task is so large that onboarding success becomes impossible to assess.

## 7. Handoff completeness

Pass if all are true:

- The final package includes scope, ownership findings, access state, setup status, first task, blockers, and provenance notes.
- Open questions are explicit rather than buried.
- Reviewer can decide whether handoff is complete, partial, or blocked.

Warning signs:

- Long narrative with no decision-ready summary.
- Blocking gaps mixed into general notes without priority.

## Quick decision labels

- **Ready:** onboarding target can perform the agreed first action safely.
- **Partially ready:** workflow is mostly usable but one or more non-critical follow-ups remain.
- **Blocked:** unresolved ownership, access, or setup gaps prevent safe first action.

## Failure-mode matrix

| Failure mode | Likely cause | What to record |
|---|---|---|
| Reviewer unclear | Missing CODEOWNERS or inconsistent practice | Evidence checked, gap found, owner needed to confirm routing |
| Setup instructions stale | Docs drifted from current branch or CI | Failing step, tested branch, expected vs observed behavior |
| Release handoff incomplete | Review rights mistaken for release authority | Separate review capability from release permission and secret ownership |
| Provenance unclear | Local edits mixed with imported material | Which artifacts are upstream, which are curated locally, and why |
| First task too risky | Scope chosen before access/ownership review | Safer first task recommendation and reason for deferral |
