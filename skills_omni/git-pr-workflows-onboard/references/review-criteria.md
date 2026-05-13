# Repository Onboarding Review Criteria

Use this rubric when assessing whether a repository is ready for a new contributor or maintainer.

## 1. Entry-Point Documentation

Check whether a new contributor can quickly find:
- purpose of the repository
- local setup steps
- required runtime or tool versions
- test, lint, and build commands
- contribution expectations
- maintainer or escalation contacts

### Review questions
- Is there one clear starting document?
- Do setup steps appear in a usable sequence?
- Are prerequisites explicit rather than implied?
- Are platform-specific differences documented where they matter?

### Findings to record
- Missing prerequisite versions
- Conflicting setup instructions across files
- README explains usage but not contribution path

## 2. Access and Dependency Readiness

Check whether onboarding depends on systems outside the repository:
- source control permissions
- private package registries
- cloud or infrastructure accounts
- secret managers
- issue tracker or project board access
- CI visibility or log access
- communication channels needed for approvals

### Review questions
- Which access is mandatory before first contribution?
- Which access is only needed later?
- Is the granting path documented?
- Can a newcomer verify access safely without using production credentials?

### Findings to record
- Setup blocked by undocumented registry token
- CI logs unavailable to new contributors
- Approval owner unknown for required systems

## 3. Environment Reproducibility

Prefer documented, repeatable setup over tribal knowledge.

Evidence can include:
- devcontainer configuration
- Docker-based local environment
- pinned runtime versions
- lockfiles and setup scripts
- CI definitions that mirror local validation steps

### Review questions
- Can the setup be reproduced from a clean machine?
- Is there a source of truth for runtime versions?
- Are local and CI commands aligned?
- Are expected success signals documented?

### Findings to record
- CI uses a different runtime version than README
- Local setup works only after undocumented manual fixes
- Test data or seed steps are missing

## 4. Contribution Path Clarity

A new contributor should know exactly how to move from local change to accepted pull request.

Look for:
- CONTRIBUTING guidance
- branch naming or fork model
- commit conventions when enforced
- pull request template or checklist
- required status checks
- CODEOWNERS or mandatory review rules

### Review questions
- What is the smallest safe first contribution?
- Are protected branch rules discoverable?
- Is the review path obvious?
- Are docs-only changes treated differently from code changes?

### Findings to record
- First PR path unclear
- CODEOWNERS creates hidden review dependency
- Required checks exist in CI but are not documented for contributors

## 5. Safety and Least Privilege

Onboarding should reduce risk, not normalize unsafe shortcuts.

Check for:
- no credentials committed or pasted into docs
- least-privilege access recommendations
- safe local alternatives to production access
- clear boundaries for who can approve privileged changes

### Review questions
- Does onboarding instruct users to request only the permissions needed for the next milestone?
- Are temporary personal workarounds replacing proper access requests?
- Are sensitive systems separated from standard contributor setup?

### Findings to record
- Docs suggest sharing tokens out of band
- New contributor needs broad production access for a docs change
- Local setup requires unsafe copying of secrets into plaintext files

## 6. Milestone-Based Readiness

Evaluate onboarding against milestones instead of a vague "done" state.

Suggested milestones:
1. clone and read the repo
2. install dependencies and start the environment
3. run tests or lint successfully
4. make a small local change
5. open a PR that satisfies checks and review rules
6. hand off status and known blockers cleanly

### Review questions
- Which milestone is currently blocked?
- What evidence proves the highest completed milestone?
- What is the next action to advance one milestone safely?

## 7. Handoff Quality

For maintainer transitions or repo intake, check whether another operator can continue without rediscovery.

Required handoff elements:
- provenance and upstream source notes
- copied support files preserved where required
- known blockers and open risks
- access dependencies and approvers
- validated setup path and evidence
- next recommended actions

### Findings to record
- Provenance missing after migration
- Handoff omits access blockers
- Environment was "reported working" but not validated with commands

## Output Format Recommendation

Use this structure for the final assessment:
- **Status:** Ready / Partially ready / Blocked / Unsafe to proceed
- **What works:** Evidence-backed capabilities
- **Gaps:** Missing instructions or unclear ownership
- **Blockers:** Issues preventing milestone progress
- **Risks:** Safety, access, or process concerns
- **Next actions:** Ordered, concrete, and minimal

## Quick Severity Guide

- **Ready:** A new contributor can reach a safe first PR with documented steps.
- **Partially ready:** Core path exists, but one or more important gaps remain.
- **Blocked:** Missing access or instructions prevent milestone progress.
- **Unsafe to proceed:** Onboarding requires unsafe credential handling, undocumented privileged actions, or hidden production dependencies.
