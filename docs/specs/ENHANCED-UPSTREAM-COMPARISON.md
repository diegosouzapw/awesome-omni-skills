# Enhanced Upstream Comparison

## Status

Draft normative comparison contract for curated derivatives versus their upstream source.

## Purpose

This document defines how the system should decide whether an enhanced derivative is actually better than the upstream skill.

The goal is to prevent a curated skill from being accepted merely because it:

- validates successfully
- scores well under a static heuristic
- looks more polished at first glance

## Core Rule

An enhanced derivative must outperform, or at minimum not regress against, the upstream source on operationally meaningful dimensions.

## Required Comparison Dimensions

Each comparison must consider at least:

### 1. Activation Quality

Does the curated skill make it clearer when to use the skill and when not to use it?

### 2. Workflow Quality

Does the curated skill provide a stronger, more executable workflow?

### 3. Domain-Specific Depth

Does the curated skill add useful domain detail rather than generic prose?

### 4. Examples Usefulness

Where examples matter, are the curated examples more concrete and reusable?

### 5. Troubleshooting Quality

Where failure modes matter, does the curated derivative provide stronger troubleshooting?

### 6. Safety Posture

Does the curated derivative preserve or improve safety and boundary-setting?

### 7. Token Efficiency

Does the curated derivative preserve or improve signal density, rather than expanding with filler?

### 8. Overall Preference

Would a reviewer reasonably prefer the curated derivative over the upstream source for actual operator use?

## Minimum Gate Policy

The enhanced derivative should not be accepted as successful if any of these are true:

- it regresses on safety
- it regresses materially on activation
- it gains score only through larger packaging without meaningful utility
- it becomes much longer without corresponding operational gains

## Expected Benchmark Behavior

The comparison layer should allow at least these outcomes:

- `passed`
- `passed-with-warnings`
- `degraded`
- `blocked`

### `passed`

Enhanced is clearly better or safely equal across required dimensions.

### `passed-with-warnings`

Enhanced is better overall, but some dimensions are only marginally improved.

### `degraded`

Enhanced may be usable, but the improvement is weak or partially offset by overhead.

### `blocked`

Enhanced should not be promoted because it failed key dimensions.

## Profile-Aware Expectation Examples

### Java / language-runtime

The enhanced derivative should normally beat upstream on:

- examples
- build/test workflow
- troubleshooting

### Bash / shell-bash

The enhanced derivative should normally beat upstream on:

- command safety
- quoting discipline
- example clarity

### Analysis / review

The enhanced derivative should normally beat upstream on:

- activation
- decision criteria
- reviewability

without inventing unnecessary scripts

## Relationship To Scoring

Static scoring is not enough.

The public scorer should contribute to the comparison, but it must not replace the comparison.

High static score with poor comparative value is still a failure mode.

## Required Output Shape

The private runtime should eventually expose comparison outputs similar to:

- `upstream_vs_enhanced_eval_status`
- `upstream_vs_enhanced_summary`
- `dimension_scores`
- `blocking_reasons`
- `preference_notes`

## Rollout Rule

Large imported sources should not be reprocessed under the new system until this comparison contract is implemented well enough to detect false improvements.
