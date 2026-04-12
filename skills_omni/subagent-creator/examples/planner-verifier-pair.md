# Planner and Verifier Pair

Use this pattern when a task is complex enough to benefit from decomposition and independent validation.

## Planner

**Purpose:** Break the goal into ordered, bounded work items.

**Returns:**
- plan
- assumptions
- dependencies
- risks
- recommended next step

## Verifier

**Purpose:** Independently check whether completed work matches the declared plan and acceptance criteria.

**Returns:**
- status
- verified items
- failed or missing items
- evidence
- escalation_needed

## Why this pair works

- planning stays separate from execution pressure
- verification stays separate from implementation bias
- the parent agent gets clearer control points for handoff and approval

## Good fit

- release-readiness checks
- migration work
- security-sensitive implementation
- multi-file changes with explicit acceptance criteria
