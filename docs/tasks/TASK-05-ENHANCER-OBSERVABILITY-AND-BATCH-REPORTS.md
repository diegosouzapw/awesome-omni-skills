# TASK-05 — Enhancer Observability And Batch Reports

## Status

Completed on `2026-03-28`.

Outcome:

- batch runs now emit richer JSON summaries plus operator-facing markdown summaries
- PR comments now advance skill by skill with explicit `completed`, `degraded`, `blocked`, and `failed` counts
- stage timing and score-delta summaries are propagated into batch output

## Objective

Make the private enhancer easier to operate by giving maintainers a clear view of:

- what is running
- what completed
- what failed
- why it failed
- and what improved across a whole PR or batch

## Current State

The enhancer already emits rich per-skill artifacts, but operators still have to inspect multiple files manually to understand the state of a multi-skill run.

Primary references:

- `omni-skills-private/docs/review-flow.md`
- `omni-skills-private/workspace/reports/`
- `omni-skills-private/scripts/review_run.py`

## Desired Outputs

- one batch summary file with counts and deltas
- one operator-friendly markdown summary per batch
- stage-level timing and outcome breakdown
- clear separation between blocked, failed, degraded, and successful runs
- PR comment updates that reflect batch progress more explicitly

## Implementation Steps

1. Review current per-skill report artifacts.
2. Define the canonical batch-summary schema.
3. Generate markdown summaries next to JSON summaries.
4. Improve progress comments to show batch totals and current item.
5. Add durable status markers for stalled or blocked runs.
6. Document how maintainers should interpret batch results.

## Acceptance Criteria

- a maintainer can understand a batch result without opening every per-skill directory
- progress and outcome states are consistent across CLI logs, artifacts, and PR comments
- degraded or blocked states are distinguishable from successful-but-no-op runs
