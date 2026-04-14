# Enhanced Skill Profiles

## Status

Draft normative taxonomy for profile-aware curation in the private enhancer.

## Purpose

This document defines the profile system that the private enhancer must use to decide how to improve a skill.

The profile system exists because different skill types need different support strategies.

## Design Rule

The enhancer should never assume that two skills deserve the same package shape merely because both are "good skills".

The private runtime must infer:

- one primary profile
- zero or more secondary profiles
- evidence for the inference

## Canonical Profiles

### `code-generation`

Use when the skill primarily helps generate or modify code.

Common signals:

- source code examples
- framework or library usage
- implementation instructions
- compile or test loops

Often benefits from:

- `examples/`
- `references/`
- sometimes `scripts/`

### `language-runtime`

Use when the skill depends on language-specific runtime behavior.

Common signals:

- Java, Python, Node, Go, Rust, Ruby, etc.
- toolchain setup
- runtime errors
- build configuration

Often benefits from:

- `references/`
- `examples/`
- runtime troubleshooting

### `shell-bash`

Use when the skill is fundamentally about shell usage, shell scripts, or command pipelines.

Common signals:

- bash
- shell
- grep, sed, awk, find, xargs, jq
- environment checks

Often benefits from:

- `examples/`
- `scripts/`
- shell-safety references

### `cli-automation`

Use when the skill centers on repeatable command-line workflows rather than shell semantics alone.

Common signals:

- CLI tools
- flags
- command sequences
- automation runs

Often benefits from:

- `examples/`
- `scripts/`
- concise operational references

### `api-integration`

Use when the skill interacts with remote services through APIs.

Common signals:

- request and response examples
- auth or tokens
- HTTP methods
- error classes
- retries or rate limits

Often benefits from:

- `references/`
- `examples/`
- sometimes `assets/`

### `infra-devops`

Use when the skill focuses on infrastructure, deployment, CI/CD, or operations.

Common signals:

- deployment systems
- containers
- cloud services
- CI pipelines
- IaC

Often benefits from:

- `references/`
- `examples/`
- sometimes `scripts/`

### `analysis-review`

Use when the skill is mostly about evaluation, review, critique, or structured decision-making.

Common signals:

- audits
- reviews
- architecture decisions
- scoring or acceptance criteria

Often benefits from:

- `references/`
- `examples/`

Often does not need:

- `scripts/`
- `assets/`

unless they are genuinely operational

### `research-synthesis`

Use when the skill is mainly about gathering, comparing, or summarizing knowledge.

Common signals:

- source gathering
- comparison
- synthesis
- evidence-based reasoning

Often benefits from:

- `references/`
- worked examples

### `design-ux`

Use when the skill focuses on design systems, interface patterns, UX workflows, or visual implementation.

Often benefits from:

- `references/`
- `examples/`

### `security`

Use when the skill focuses on security posture, hardening, threat modeling, or exploit prevention.

Often benefits from:

- `references/`
- `examples/`
- sometimes `assets/`

### `data-sql`

Use when the skill is centered on queries, schemas, transformations, or data diagnostics.

Often benefits from:

- `examples/`
- `references/`
- sometimes `assets/`

### `workflow-orchestration`

Use when the skill is primarily about coordinating multiple steps, tools, or actors.

Often benefits from:

- `references/`
- `examples/`
- sometimes `agents/`

### `uncategorized`

Fallback when the enhancer cannot infer a trustworthy profile.

This must be used conservatively and honestly.

## Required Output Shape

The enhancer should record at least:

- `primary_profile`
- `secondary_profiles`
- `profile_confidence`
- `profile_evidence`
- `profile_notes`

## Profile-Aware Support Expectations

Profiles do not guarantee support families. They only bias the planner.

Example expectations:

- Java skill: likely stronger `examples/` and `references/`
- Bash skill: likely stronger `examples/` and `scripts/`
- Architecture review skill: likely stronger `references/`, weaker need for `scripts/`

## Rejection Rule

If the profile inference is weak, the system must not overcommit to a specialized package shape. It should fall back to a smaller package, not to generic filler.
