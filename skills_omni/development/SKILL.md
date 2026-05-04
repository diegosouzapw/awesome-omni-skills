---
name: "development"
description: "Use this skill when you need to build a feature, fix a bug, refactor code, integrate a frontend with an API, scaffold a web/mobile/backend change, debug failing environments, review implementation readiness, or prepare a tested change for merge or handoff across full-stack application work. Preserve upstream workflow intent, copied support files, and provenance before merge or release."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "development"
  - "fullstack"
  - "frontend"
  - "backend"
  - "mobile"
  - "workflow"
  - "build"
  - "debug"
  - "test"
  - "review"
  - "release"
  - "api-integration"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "unknown"
date_added: "2026-04-14"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "development"
family_name: "Development Workflow Bundle"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/development"
upstream_skill: "skills/development"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "development"
---

# Development Workflow Bundle

## Overview

This skill packages the upstream `development` workflow into a practical delivery playbook for web, mobile, backend, and full-stack work.

Use it when the user asks for work such as:
- build a feature
- fix a bug
- wire a frontend to a backend API
- scaffold or reorganize a project
- refactor legacy code safely
- debug local containers or deployment failures
- review a change before merge
- prepare a release-ready implementation handoff

Preserve upstream workflow intent, copied support files, and provenance before changing or handing off the implementation.

## When to Use

Use this skill when the task spans more than one delivery step and needs a disciplined implementation path rather than a single code edit.

Good fits:
- Frontend + backend coordination
- API contract changes with client impact
- Containerized application development
- Local-to-deployment parity checks
- Merge-readiness review and handoff packaging
- Debugging across application, container, and cluster boundaries

Do not use this skill as the only guidance when the work is narrowly specialized and another skill is clearly primary, such as deep database tuning or platform-specific mobile release operations.

## Workflow

1. **Confirm scope and constraints**
   - Identify the user goal, affected services, runtime targets, and success criteria.
   - Confirm whether the task is a feature, bug fix, refactor, integration, or release-readiness pass.
   - Note hard constraints such as existing API contracts, deployment environment, protected branches, or required reviewers.

2. **Inspect the repository and current delivery shape**
   - Read the relevant project files first: README, package manifests, lockfiles, Docker/Compose files, CI config, API schema, and deployment manifests.
   - Map the affected path: frontend, backend, shared contracts, infrastructure, tests, and docs.
   - Preserve provenance and existing workflow intent if this repository was imported or mirrored from an upstream source.

3. **Plan the change before editing**
   - Break the task into small reversible steps.
   - For API-impacting work, decide whether contract changes come first, are backward compatible, or require coordinated rollout.
   - Define test points early: unit, integration, end-to-end, container startup, and deployment verification as applicable.

4. **Implement with continuous validation**
   - Make the smallest coherent change set.
   - Re-run focused checks while implementing instead of waiting until the end.
   - If containers are involved, verify local startup behavior and service-to-service connectivity.
   - If frontend and backend both change, validate request shape, response shape, auth expectations, and error handling on both sides.

5. **Review operational behavior**
   - Check logs, startup output, network assumptions, environment variables, health probes, and migration behavior.
   - Confirm the implementation works in the intended runtime shape, not only in isolated unit tests.
   - For PR-based delivery, prepare the change so that reviewers can evaluate behavior, risk, and rollback surface clearly.

6. **Prepare merge or handoff output**
   - Summarize what changed, why, what was validated, known risks, and follow-up items.
   - Include any required rollout notes, config changes, migration ordering, or reviewer attention points.
   - Preserve upstream support files and provenance references where they are part of the repository workflow.

## Output Format

When using this skill, produce a delivery-oriented result, not just raw code changes.

Preferred final output structure:

1. **Scope**
   - What was requested
   - Which components were affected

2. **Plan**
   - Ordered implementation steps taken or proposed
   - Any sequencing constraints such as API-first or migration-first rollout

3. **Changes Made**
   - Concrete files or subsystems changed
   - Short explanation of each important edit

4. **Validation Performed**
   - Exact checks run
   - What passed, what could not be run, and why

5. **Risks / Follow-ups**
   - Remaining uncertainty
   - Required reviewer attention
   - Deployment or rollback notes if relevant

6. **Handoff Notes**
   - Commands to reproduce locally
   - Config or environment assumptions
   - Any preserved provenance or upstream workflow considerations

Minimum acceptable output:
- a concise scope statement
- a countable step sequence
- explicit validation status
- any blockers or unverified areas

## Examples

### Example 1: Full-stack feature with API contract change

**Input**
```text
Add profile editing to the web app and backend API. Keep existing mobile clients working.
```

**Expected workflow shape**
```text
1. Inspect existing user profile schema and clients.
2. Decide on a backward-compatible API change.
3. Update backend handler, validation, and tests.
4. Update frontend form and response handling.
5. Run focused backend and frontend validation.
6. Summarize compatibility, risks, and rollout notes.
```

**Expected output characteristics**
- Calls out backward-compatibility decisions explicitly
- Lists both frontend and backend validation
- Notes whether mobile clients remain unaffected

### Example 2: Containerized local environment failure

**Input**
```text
The app worked yesterday, but now docker compose starts the API container and it exits immediately.
```

**Expected workflow shape**
```text
1. Inspect compose configuration and recent changes.
2. Check container logs and entrypoint behavior.
3. Verify required environment variables and dependent services.
4. Reproduce with minimal restart loop noise.
5. Fix the startup cause and confirm healthy service startup.
6. Report root cause and any preventive follow-up.
```

**Expected output characteristics**
- Includes the observed failure signal
- Identifies the startup dependency or config issue
- States how recovery was verified

For a concrete worked example, open [`examples/worked-example.md`](examples/worked-example.md).

## Best Practices

- Do preserve the repository's existing delivery model before introducing new structure.
- Do use PR-oriented, reviewable increments rather than one large opaque patch.
- Do validate during implementation; do not defer all checks to the final step.
- Do prefer backward-compatible API changes when multiple clients may exist.
- Do verify local container behavior when development depends on Compose or similar orchestration.
- Do check logs and health signals before assuming the defect is in application logic.
- Do document what was not validated if the environment prevents full execution.

- Do not claim merge readiness without naming the checks that actually passed.
- Do not change contracts casually when frontend, backend, or mobile consumers may break.
- Do not treat CORS errors as purely frontend issues before checking server headers and preflight behavior.
- Do not assume container success because an image builds; startup, readiness, and dependency order still matter.
- Do not erase upstream provenance, copied support files, or handoff context from imported workflows.

## Troubleshooting

**Symptoms:** Frontend requests fail only in the browser, but direct API calls seem to work.

**Solution:** Check CORS behavior first: origin matching, allowed methods, headers, credentials handling, and whether the failing request triggers a preflight. Verify the backend returns the required headers for both the preflight request and the actual request.

**Symptoms:** `docker compose up` starts a service repeatedly and it exits immediately.

**Solution:** Inspect container logs, entrypoint commands, missing environment variables, port conflicts, dependency readiness, and local volume mount effects. Confirm the service can start with the current runtime configuration, not just build successfully.

**Symptoms:** Backend and frontend both build, but integration fails after an API change.

**Solution:** Compare the request and response contract end to end: field names, nullability, auth requirements, validation rules, error shape, and versioning assumptions. Look for stale generated clients or undocumented schema drift.

**Symptoms:** A deployment appears healthy at the infrastructure level, but traffic still fails.

**Solution:** Check service readiness and liveness probe behavior, application startup timing, environment-specific configuration, and whether the service is actually ready to accept traffic before the platform routes requests.

For compact triage tables and implementation caveats, open [`references/domain-notes.md`](references/domain-notes.md).

## Additional Resources

- [`references/domain-notes.md`](references/domain-notes.md) — Open this for API coordination rules, Compose parity checks, CORS diagnosis, PR gate reminders, and Kubernetes-oriented triage notes.
- [`examples/worked-example.md`](examples/worked-example.md) — Open this when you need a concrete before/during/after example of how to apply the workflow to a full-stack change.

## Related Skills

No additional local related skills were provided in the source context.
