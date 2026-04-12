# Temporal Coupling and Volatility

Use this guide to estimate volatility with repository history.

## Principles

- Prefer recent, relevant history over unlimited history.
- Treat co-change as an indicator, not proof.
- Filter out generated code, vendored code, lockfiles, and broad formatting commits when they distort results.
- State when history is incomplete or unreliable.

## Safe starting commands

### Churn by file in a target area

```bash
git log --since="6 months ago" --format='' --name-only -- path/to/area \
  | sed '/^$/d' \
  | sort \
  | uniq -c \
  | sort -rn \
  | head -20
```

### Recent changes affecting two areas

```bash
git log --since="6 months ago" --name-only --oneline -- path/to/a path/to/b
```

### Contributors by area

```bash
git shortlog -sne --since="6 months ago" -- path/to/area
```

## Interpretation notes

### High churn does not automatically mean architectural risk

Check whether the churn comes from:
- generated files
- migrations or fixtures
- test rewrites
- mechanical renames or formatting
- a genuine business rule hotspot

### Co-change can signal hidden coupling

Frequent same-commit changes across distinct modules may indicate:
- shared business rules
- hidden contract dependencies
- release sequencing requirements
- duplicated validation or transformation logic

### Low history quality reduces confidence

Examples:
- shallow clone
- heavily squashed history
- major repository reorganization
- mirrored or imported code history

When this happens, write:
- what history limitation exists
- what fallback evidence you used
- how confidence should be lowered

## Practical confidence scale

- **High confidence:** clear churn patterns plus structural or semantic corroboration
- **Medium confidence:** useful churn data but ambiguous causality
- **Low confidence:** history incomplete, noisy, or mostly inferred

## Common traps

- Treating a one-time migration as ongoing volatility
- Treating a single large refactor as normal co-change
- Counting test-only edits as production coupling
- Ignoring ownership changes or team reorganizations
