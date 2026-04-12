# Trace-Enabled Debug Run

Use this recipe when a scenario is flaky, unexpectedly failing, or needs a reviewable diagnostic artifact.

## Recommended approach

If your packaged environment supports Playwright Test, enable traces for the run and review the resulting artifact.

Example pattern:

```bash
npx playwright test --trace on
```

If you are using the upstream packaged runner instead of Playwright Test, still prefer collecting at least:

- a screenshot at failure time
- a concise console summary
- a reproducible script in `/tmp`

## Review checklist

- confirm the failing step
- compare expected and actual URL
- inspect whether the locator was visible and actionable
- check for overlays, redirects, or stale auth
- sanitize any trace before sharing
