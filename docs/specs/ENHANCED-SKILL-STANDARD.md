# Enhanced Skill Standard

## Status

Draft normative spec for the next-generation `skills_omni/` pipeline.

## Purpose

This document defines what a real Omni-curated derivative must look like after the enhanced pipeline is redesigned around:

- domain-specific usefulness
- profile-aware generation
- support files that exist only when they improve execution quality
- explicit comparison against the upstream source

This spec is the canonical contract for:

- the public scorer
- the private enhancer
- the private external-sync publication flow
- human review of `skills_omni/`

## Problem

The previous enhanced model allowed a curated skill to look "richer" by adding generalized support-pack files and longer editorial framing even when those artifacts did not materially improve the skill.

That created three problems:

1. the scorer could be optimized through support-pack breadth instead of operational value
2. the enhancer could produce similar packaging for very different domains
3. human reviewers had to spend time separating real support from score-oriented filler

## Core Principle

Every artifact in a curated skill must justify its own existence.

If an extra file does not improve:

- activation
- execution
- troubleshooting
- safety
- reviewability

for that specific skill, it should not be generated.

## Canonical Entry Point

`SKILL.md` remains the canonical runtime entry point.

The rest of the package exists to support the operator only when the extra material materially changes the outcome. The package must never assume that all files are always read up front.

## Required Minimum Package

Every published curated skill must include:

- `SKILL.md`
- `metadata.json`
- `EXTERNAL_SOURCE.json`
- `OMNI_ENHANCED.json`

These files are mandatory because they provide:

- the human and agent entry point
- machine-readable catalog metadata
- machine-readable provenance of the upstream source
- machine-readable evidence that the artifact was produced by the curated enhancer flow

## Conditional Support Families

The following support families are optional and conditional:

- `references/`
- `examples/`
- `scripts/`
- `agents/`
- `assets/`

They may be included only when:

1. a profile-aware planner approves them
2. the rewrite phase produces domain-specific content
3. self-audit confirms that the files are not filler
4. the files remain linked from `SKILL.md` where relevant

For per-family rules, see [ENHANCED-SUPPORT-FAMILY-POLICY.md](./ENHANCED-SUPPORT-FAMILY-POLICY.md).

## Required Qualities Of A Real Enhanced Skill

A curated derivative is considered real only when it is measurably better than the upstream source in operational terms.

The minimum dimensions are:

- clearer activation boundary
- stronger workflow guidance
- more useful examples where examples matter
- safer commands and sharper boundaries
- stronger troubleshooting where troubleshooting matters
- preserved and visible provenance

The enhanced derivative should be superior without becoming bloated. The goal is not "more packaging". The goal is "better execution".

## Body Contract For `SKILL.md`

A curated `SKILL.md` should generally contain:

- `Overview`
- `When to Use This Skill`
- `Workflow`
- `Examples` when examples materially improve execution
- `Best Practices` when the domain benefits from explicit operating rules
- `Troubleshooting` when failure modes are common or non-obvious
- `Related Skills` when handoffs are realistic

This structure is a guidance baseline, not a license to create filler sections. A section should only exist if it improves the operator's odds of success.

## Domain-Specificity Requirement

The enhanced skill must reflect the domain it is serving.

Examples:

### Java / language-runtime / code-generation

Useful improvements often include:

- code examples
- build and test guidance
- dependency or toolchain troubleshooting
- framework- or runtime-specific caveats

### Bash / shell-bash / cli-automation

Useful improvements often include:

- safe shell patterns
- quoting and pipeline discipline
- command examples with expected effects
- preflight checks or environment validation

### API integration

Useful improvements often include:

- request and response examples
- auth notes
- rate-limit or retry advice
- error-class handling

### Analysis / review

Useful improvements often include:

- decision criteria
- review examples
- comparative patterns
- explicit "use this skill when" boundaries

## Rejected Pattern: Universal Review Packet

The enhanced system must not generate a universal review packet for every imported skill.

That includes generic files such as:

- checklists
- rubrics
- playbooks
- prompt templates
- router notes
- trivial helper scripts

when they are not specific to the skill and do not improve execution.

Repository-wide review policy belongs in shared docs, not in every skill directory.

## Realness Tests

Each optional artifact should be defensible under these tests:

### Test 1: Outcome Test

If the file is removed, does the operator lose meaningful execution value?

### Test 2: Specificity Test

Does the file mention skill-specific concepts, commands, data, workflows, or failure modes?

### Test 3: Non-Duplication Test

Does the file add something not already present in `SKILL.md`?

### Test 4: Retrieval Test

Would a reviewer or operator reasonably open this file during real work?

If the answer is "no" across these tests, the file is filler.

## Standard Rejection Conditions

A curated skill should be considered non-compliant if it:

- adds support families only to inflate score
- ships generic examples with no input/output reality
- ships trivial scripts that only print or list existing files
- repeats the same editorial framing across many skills
- inflates `SKILL.md` with low-signal prose
- hides provenance or weakens attribution

## Relationship To The Public Scorer

This standard is normative for the scorer redesign.

The scorer must reward:

- usefulness
- domain specificity
- execution readiness
- support-pack realness
- token efficiency

and must stop rewarding raw breadth of support assets without evidence of value.

## Relationship To The Private Enhancer

This standard is normative for the private enhancer redesign.

The enhancer must:

- classify the skill by profile
- plan support files explicitly
- generate only approved artifacts
- run self-audit before final validation

## Relationship To Upstream Comparison

A curated derivative is not considered successful merely because it validates or scores well.

It must also outperform, or at minimum not regress against, the upstream source under the comparison contract in [ENHANCED-UPSTREAM-COMPARISON.md](./ENHANCED-UPSTREAM-COMPARISON.md).

## Rollout Rule

No large-scale reprocessing of imported sources should happen until:

1. this standard is accepted
2. the scorer reflects it
3. the private enhancer implements it
4. the benchmark layer proves it
