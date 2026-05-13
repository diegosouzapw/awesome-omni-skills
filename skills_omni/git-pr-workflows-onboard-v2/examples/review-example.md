# Worked Review Example: Repository Onboarding Handoff

## Scenario

Repository: `payments-worker`

Request: A new maintainer must take over PR review and low-risk release preparation after the current maintainer leaves.

Available artifacts:

- `README.md`
- `CONTRIBUTING.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.devcontainer/devcontainer.json`
- `CODEOWNERS`
- Recent release notes

Known concerns:

- The repository builds in CI, but local setup was last verified months ago.
- The new maintainer can review PRs but may not have access to deployment secrets.
- Release tagging practice is tribal knowledge.

## Weak review outcome

```text
The repository looks well documented. The new maintainer should be able to get started with README and CONTRIBUTING. CODEOWNERS exists, and CI is passing, so onboarding seems fine. Recommend proceeding and learning release steps over time.
```

### Why this is weak

- No measurable success criterion.
- No distinction between review ability and release authority.
- No explicit setup validation state.
- No provenance or artifact-preservation note.
- No blockers or follow-up owners.

## Improved review outcome

```text
Onboarding handoff review: Partially ready

Scope
- Maintainer transition for PR review and low-risk release preparation
- Success criterion: new maintainer can review and merge documentation or low-risk code PRs safely, and can identify the release owner and release prerequisites

Provenance preserved
- Upstream workflow artifacts retained: README, CONTRIBUTING, PR template, CODEOWNERS, devcontainer configuration
- Local curation added: handoff summary, setup validation note, release-authority gap note

Ownership and governance
- CODEOWNERS routes app changes to platform team
- PR template and required checks are present
- Release tagging authority is not documented in repository materials

Access state
- New maintainer can clone, branch, view CI, and review PRs
- New maintainer cannot confirm access to deployment secrets or release credentials
- Release authority must remain with current maintainer until access path is verified

Setup validation
- Dev container exists but was not validated on the current default branch during this review
- Native local setup instructions are incomplete for secret-backed integration tests

Recommended first task
- Review and merge a docs-only or test-only PR using the existing PR template and required CI checks
- Defer release execution until release owner, secret access path, and setup verification are confirmed

Blockers
- Release owner not documented
- Secret-access path not confirmed
- Current-branch bootstrap not revalidated

Decision
- Partially ready for PR review onboarding
- Blocked for release handoff
```

## What good looks like

A strong onboarding review usually has these traits:

- It states what the new person must be able to do.
- It separates safe immediate capability from deferred authority.
- It names real blockers instead of softening them.
- It references repository evidence rather than relying on assumptions.
- It gives a narrow first task that matches current access and setup confidence.

## Reusable pattern

When writing your own onboarding review, aim for this structure:

1. Scope
2. Success criterion
3. Provenance preserved
4. Ownership and governance findings
5. Access state
6. Setup validation state
7. First safe task
8. Blockers and decision
