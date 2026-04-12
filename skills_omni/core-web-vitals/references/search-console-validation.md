# Search Console validation notes

Use this note when a fix has been shipped but Search Console has not yet reflected recovery.

## Important operational points

- Search Console Core Web Vitals data is based on field data and grouped URLs.
- Reporting is delayed.
- A deployment does not cause immediate status change.
- Validation reflects enough real-user improvement over time, not just a successful release event.

## What to record at release time

- deployment date and time
- affected templates or URL groups
- exact change shipped
- before/after lab evidence
- any RUM dashboards or segment filters used

## When not to overclaim

Do not say "fixed" only because:

- one local trace improved
- Lighthouse score increased
- a small subset of pages now looks faster

Prefer: "fix deployed; local verification improved; awaiting field recovery confirmation."

## If Search Console still shows failures

Check:

1. whether the changed pages match the reported URL group
2. whether all affected templates received the fix
3. whether enough traffic has passed to produce updated field data
4. whether a second root cause still exists for a subset of users

## Recommended handoff note

Include a short status block in PRs or incident notes:

- affected metric
- affected pages or group
- shipped fix
- local validation result
- expected field confirmation delay
- monitoring owner
