# Lighthouse Workflow Decision Guide

Use this guide to choose the right audit path quickly.

## Decision tree

### Use Lighthouse CLI when

- you need a one-off local or preview audit
- you want HTML and JSON output quickly
- the route is reachable without complex setup

### Use the Node API when

- you need programmable extraction
- the page requires scripted setup or login flow
- you want custom automation around the audit result

### Use Lighthouse CI when

- you need repeated runs in CI
- you want assertions and pass/fail thresholds
- you want report artifacts and consistent startup handling

### Use PageSpeed Insights or CrUX when

- the user asks about real-user performance
- the target is a public URL
- the request is about field data, not just lab data

## Recommended local workflow

1. Build the app in production mode.
2. Start a production-like preview server.
3. Run Lighthouse against the target route.
4. Save JSON and HTML output.
5. Repeat at least 3 times for decisions that matter.
6. Parse or compare reports with the local scripts.
7. If needed, convert the workflow into LHCI for CI enforcement.

## Artifact naming convention

Use predictable file names such as:

- `reports/lighthouse-home.mobile.run1.json`
- `reports/lighthouse-home.mobile.run2.json`
- `reports/lighthouse-home.mobile.run3.json`
- `reports/lighthouse-home.mobile.report.html`

Include:

- route name
- form factor
- run number
- environment when useful

## Baseline setting guidance

Only set budgets or CI assertions after you have:

- a stable build target
- consistent categories and form factor
- a representative baseline from multiple runs

Avoid setting aggressive thresholds from a single run.
