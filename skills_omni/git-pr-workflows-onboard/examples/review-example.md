# Worked Example: Repository Onboarding Review

This example shows how to assess onboarding readiness for a repository and communicate the result clearly.

## Scenario

A new backend engineer needs to contribute to an internal service repository. The operator must preserve the upstream workflow and determine whether the engineer can safely reach a first pull request.

## Repository Signals Observed

### Present
- `README.md` includes clone, install, and local run commands.
- `CONTRIBUTING.md` explains branch naming and PR titles.
- `.devcontainer/devcontainer.json` exists.
- CI runs lint, unit tests, and integration tests.
- `CODEOWNERS` requires review from `platform-api`.

### Missing or unclear
- No explicit Node version in `README.md`.
- Private package registry is used, but auth steps are undocumented.
- No note explaining who grants registry access.
- The devcontainer starts, but integration tests need a local service dependency not mentioned in setup docs.
- New contributors do not automatically have CI log access.

## Weak Review Output

```text
Onboarding mostly looks okay. Some docs could be improved. Access may be needed for some tools. Ask the maintainer if anything fails.
```

### Why this is weak
- No milestone or status classification
- No evidence for what actually works
- No distinction between documentation gaps and hard blockers
- Pushes rediscovery back onto the newcomer

## Strong Review Output

```text
Onboarding status: Partially ready

What works:
- Repository clone and dependency resolution work inside the provided devcontainer after valid registry auth.
- CONTRIBUTING documents branch naming and PR title expectations.
- CI definitions show the required validation path: lint, unit tests, integration tests.
- CODEOWNERS makes the review dependency visible for backend changes.

Gaps:
- README does not declare the required Node version for non-devcontainer setup.
- Setup docs do not mention the local service dependency required for integration tests.
- Access-grant path for the private package registry is undocumented.

Blockers:
- A new contributor cannot complete dependency installation without registry credentials.
- A contributor with failing CI cannot self-diagnose without CI log access.

Risks:
- New hires may request excessive permissions if the minimum required access is not documented.
- Maintainers may continue onboarding through ad hoc chat steps, which hides process defects.

Next actions:
1. Add the runtime version source of truth to README and CONTRIBUTING.
2. Document private registry authentication and identify the access approver.
3. Add the missing integration-test dependency to local setup instructions.
4. Confirm whether CI log access is mandatory for all contributors or only reviewers.
5. Validate the path with a docs-only or low-risk starter PR.
```

## Before and After Behavior

### Before
- New engineer clones repo successfully.
- `npm install` fails with package authentication errors.
- Maintainer sends token setup instructions over chat.
- Engineer opens PR but cannot interpret failing CI because logs are restricted.

### After
- Engineer reads setup docs and requests only the listed access.
- Registry authentication steps are documented without exposing secrets.
- Engineer uses the devcontainer and runs the expected validation commands.
- Engineer opens a starter PR with known review and status-check expectations.

## Pattern to Reuse

When writing your own review, always include:
1. a clear status label
2. evidence-backed "what works"
3. a separate blockers section
4. a risk statement when safety or privilege is involved
5. ordered next actions that move the onboarding path forward
