---
name: "pypict-skill"
description: "Pypict Skill workflow skill. Use this skill when the user needs pairwise test generation and the operator should build, review, and refine a constrained combinatorial model before execution or handoff."
version: "0.0.1"
category: "testing-security"
tags:
  - "pypict-skill"
  - "pairwise"
  - "combinatorial-testing"
  - "test-generation"
  - "testing-security"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "pypict-skill"
family_name: "Pypict Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/pypict-skill"
upstream_skill: "skills/pypict-skill"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "pypict-skill"
---

# Pypict Skill

## Overview

This skill is for **pairwise test generation using a PICT-style model**: define parameters, reduce raw inputs into meaningful value classes, encode invalid combinations as constraints, preserve must-run scenarios, then review the generated set before execution.

Use it when you need to shrink a large combination space into a manageable test set **without pretending pairwise coverage is the whole strategy**.

This skill keeps the original community identity and scope, but the workflow below is written for execution rather than intake packaging. Provenance can still be preserved when needed, but the primary goal is to help the operator produce a sound pairwise model and a defensible test set.

## When to Use This Skill

Use this skill when:

- you have **multiple independent or semi-independent parameters** and the full Cartesian product is too large to run
- you need a **representative combination set** for configuration matrices, form inputs, compatibility testing, API option combinations, feature flags, browser/device matrices, or role/content-type/mode combinations
- the task depends on **modeling valid and invalid combinations** clearly before generating tests
- you already know that some cases are mandatory and want to **retain bug repros, regressions, or required scenarios** alongside generated pairwise coverage
- you need a practical first-pass combinatorial test design method before adding deeper targeted tests

Do **not** use this skill alone when the request is primarily about:

- authentication, authorization, privilege transitions, or abuse-case testing
- stateful workflows, sequencing, retries, timing, concurrency, or race conditions
- cryptographic behavior, protocol correctness, or safety-critical logic
- boundary-value analysis for numeric parsing, length limits, or serialization edge cases
- fuzzing, malformed input exploration, or attacker-driven negative testing
- situations where known defects are likely to require **3-way or higher-order interactions** rather than pairwise only

If the request includes those concerns, use pairwise generation as one input to the test plan, then add targeted tests separately.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Too many combinations to test exhaustively | Workflow step 1: scope and parameter selection | Prevents premature modeling of irrelevant dimensions |
| Raw value lists are huge | Workflow step 2: reduce to equivalence classes | Keeps the model tractable and behavior-focused |
| Some combinations are invalid | Workflow step 3: constraints | Invalid combinations should be blocked in the model, not filtered manually afterward |
| You already have must-run regressions or bug repros | Workflow step 4: preserve seeded scenarios | Pairwise generation should not replace mandatory tests |
| Output looks suspiciously small, empty, or unrealistic | Troubleshooting | Over-constraint and bad modeling are common causes |
| You need a quick modeling reminder | `references/domain-notes.md` | Gives compact heuristics for model design, review, and escalation |
| You want a concrete example before drafting your own model | `examples/worked-example.md` | Shows simple and constrained examples with interpretation |

## Workflow

### 1. Confirm the real objective

Before modeling anything, identify:

- what system or interface is under test
- which dimensions actually interact
- what type of defect you are trying to expose
- whether pairwise coverage is a reasonable default or only a partial helper

Good fit:

- browser × auth mode × MFA state × account state
- API method × content type × auth role × feature flag
- OS × runtime × locale × storage backend

Poor fit unless supplemented:

- multi-step purchase or approval workflows
- privilege escalation scenarios
- sequence-sensitive state machines
- malformed-input or parser-hardening work

### 2. Model parameters as behaviorally distinct values

Do **not** dump every literal production value into the model.

Instead, reduce each parameter to values that represent distinct behavior, risk, compatibility mode, or boundary bucket.

Ask for each value:

- does this value behave differently from the others?
- does it represent a different rule, permission, protocol path, rendering path, or failure mode?
- is it a meaningful boundary or compatibility bucket?

Prefer:

- `Role: Anonymous, User, Admin`
- `ContentType: JSON, Form, Multipart`
- `AccountState: Active, Locked, Unverified`

Over:

- dozens of usernames
- every locale variant when only a few behavior classes matter
- many feature-flag permutations that collapse to the same code path

Record assumptions for anything you merge or omit.

### 3. Encode invalid combinations as constraints

The model should represent what is **validly testable**.

Add constraints for combinations that cannot or must not occur, such as:

- anonymous users cannot have MFA enabled
- a locked account cannot complete a normal login success path
- multipart upload is unavailable for a specific API route
- browser-specific features are unsupported on some platforms

Constraint guidance:

- keep each constraint narrow and readable
- attach a plain-English reason in your notes
- build constraints incrementally rather than all at once
- prefer explicit business-rule constraints over vague cleanup after generation

If the generator produces unrealistic cases, you likely missed a constraint. If generation fails or output collapses too far, you may have over-constrained the model.

### 4. Preserve must-run scenarios

Pairwise generation should not displace:

- known bug reproductions
- regression cases
- compliance-required scenarios
- security abuse cases
- critical-path business flows

Keep these as seeded scenarios in the model when supported, or maintain them as a separate always-run list if your local workflow handles them outside the generator.

### 5. Generate the pairwise set using your local PICT-compatible workflow

Use the generator available in your environment according to its official documentation or team wrapper.

At generation time, verify:

- the model loads cleanly
- the resulting set size is plausible for the modeled dimensions
- obvious must-cover interactions appear to be represented
- no generated row violates known business rules

Do not treat generation success as proof that the model is good.

### 6. Review the generated output before execution

Review for quality, not just quantity.

Check whether the set still misses important:

- boundary-focused values
- role or privilege transitions
- malformed or hostile inputs
- stateful or sequential flows
- time-based, retry, or concurrency behaviors
- business-critical paths that deserve explicit coverage

If the defect model suggests 3-way or stronger interactions are likely, escalate beyond pairwise rather than stretching the model unrealistically.

### 7. Execute and augment

Run the generated cases, then add targeted tests for what pairwise does not cover well:

- negative testing
- workflow/state testing
- security methodology-driven cases
- bug-history-driven regressions
- high-risk combinations requiring stronger interaction coverage

## Troubleshooting

### Generation fails or produces no useful output

Likely causes:

- contradictory constraints
- parameters with no valid reachable combinations
- a recently added rule that eliminates most of the space
- values that were modeled too narrowly

What to do:

1. isolate recent constraints and reintroduce them one at a time
2. verify each parameter independently
3. check whether any business rule was encoded twice in conflicting ways
4. temporarily simplify the model to a smaller valid core, then rebuild

### Generated cases include impossible combinations

Likely causes:

- missing constraints
- assumptions kept only in prose, not encoded in the model
- values grouped too broadly, hiding a real dependency

What to do:

1. identify the exact invalid row
2. write the missing business rule in plain English
3. encode that rule as a constraint
4. regenerate and recheck for similar gaps

### Output is much larger than expected

Likely causes:

- too many raw literal values
- parameters that should have been merged into equivalence classes
- dimensions included even though they do not materially affect behavior

What to do:

1. collapse semantically identical values
2. remove dimensions that do not change behavior under test
3. keep only values that represent distinct rules, paths, or risks

### Output is unrealistically tiny

Likely causes:

- over-constrained model
- too many values removed during reduction
- hidden assumptions that accidentally erased needed variation

What to do:

1. review constraints first
2. confirm each parameter still has meaningful diversity
3. compare generated rows against your expected interaction map

### The generated set looks clean, but defects are still escaping

Likely causes:

- the problem requires higher-order interactions
- the issue is sequence-based, timing-based, or stateful
- pairwise covers combinations, but not the right negative or abuse cases

What to do:

1. identify the missed defect pattern
2. decide whether it is boundary, state, privilege, malformed-input, or higher-order interaction driven
3. add targeted tests or escalate to stronger combinatorial coverage where appropriate

## Examples

See `examples/worked-example.md` for:

- a simple pairwise model with reduced value classes
- a constrained model that blocks invalid combinations
- sample generated-output excerpts
- notes on what still needs targeted testing after pairwise generation

## Additional Resources

- `references/domain-notes.md` - compact operator notes on model quality, equivalence-class reduction, constraints, seeding, and when to go beyond pairwise
- Microsoft PICT repository and wiki - canonical reference for model syntax and supported features
- NIST combinatorial testing and ACTS materials - guidance on interaction strength, applicability, and limitations
- NIST SP 800-142 - practical combinatorial testing guidance
- OWASP Web Security Testing Guide - use when the request includes security methodology beyond combination selection

## Related Skills

Use another or additional skill when the request is primarily about:

- fuzzing or malformed-input discovery
- boundary-value analysis
- authentication or authorization testing
- workflow/state-machine testing
- broader test-strategy design
- threat-informed or abuse-case security testing

## Notes on Origin

This skill preserves the original community identity and intent of the upstream `pypict-skill`, while translating it into an operator-ready English workflow focused on real pairwise modeling, review, and safe execution boundaries.
