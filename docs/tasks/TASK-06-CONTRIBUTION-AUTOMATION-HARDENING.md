# TASK-06 — Contribution Automation Hardening

## Status

Completed on `2026-03-28`.

Outcome:

- native intake remains permissive under `skills/`
- `skills_omni/` publication rules and attribution handling are now explicit
- contributor docs, PR template, private automation docs, and maintainer review states are aligned

## Objective

Turn the current public/private contribution flow into a fully hardened maintainer process:

- contributors submit native skills with minimal friction
- the public PR validates and remains permissive enough to accept native input
- the private enhancer processes the diff automatically
- Omni-maintained derivatives publish cleanly into `skills_omni/`
- attribution and reviewer expectations remain explicit

## Current State

The pipeline already exists and works:

- native skills enter under `skills/`
- PR automation validates them publicly
- the private enhancer can review PR diffs and publish `enhanced` derivatives
- `skills_omni/` is the curated Omni-maintained surface

What remains is hardening the rules, operator handling, and documentation so the process feels fully intentional.

Primary references:

- [../contributors/SKILL-PR-WORKFLOW.md](../contributors/SKILL-PR-WORKFLOW.md)
- `omni-skills-private/docs/github-automation.md`
- `omni-skills-private/scripts/publish_enhanced_to_public.py`
- `omni-skills-private/scripts/upsert_public_pr_comment.py`

## Goals

- keep public intake permissive for native skills
- formalize what blocks native intake versus what is only enhanced later
- document the exact maintainer sequence when enhancer output is ready
- make `skills_omni/` publication and attribution consistent

## Work Breakdown

1. Reconcile public contribution docs with current enhancer behavior.
2. Define minimum native-intake acceptance rules.
3. Define publication rules for `skills_omni/` derivatives.
4. Standardize attribution wording and credit handling.
5. Define reviewer actions for success, degraded success, blocked, and failure states.
6. Add or tighten PR templates and comments where needed.
7. Ensure docs explain the difference between native and Omni-maintained skill tracks.

## Acceptance Criteria

- contributors can follow the public flow without maintainer tribal knowledge
- maintainers can decide what to do for each enhancer outcome state
- `skills_omni/` publication has clear rules for source credit and Omni ownership
- the process is documented as a system, not scattered across partial notes
