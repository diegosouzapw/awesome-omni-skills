---
name: "perf-lighthouse"
description: "Lighthouse Audits workflow skill. Use this skill when a user needs repeatable Lighthouse audits via CLI, Node API, or Lighthouse CI; machine-readable report parsing; score and metric interpretation; and calibrated budgets or CI assertions for local, preview, staging, or authenticated environments. Use when measuring web performance, comparing builds, gating regressions in CI, or deciding when to use Lighthouse versus PageSpeed Insights or CrUX. Do not use this skill to prescribe detailed performance fixes; hand off remediation to perf-web-optimization, core-web-vitals, accessibility, or perf-astro as appropriate."
version: "0.0.1"
category: "cli-automation"
tags:
  - "perf-lighthouse"
  - "lighthouse"
  - "lhci"
  - "performance-audit"
  - "performance-budget"
  - "pagespeed-insights"
  - "crux"
  - "web-performance"
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
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "perf-lighthouse"
family_name: "Lighthouse Audits"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/perf-lighthouse"
upstream_skill: "skills/perf-lighthouse"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "perf-lighthouse"
---

# Lighthouse Audits

## Overview

Use this skill to run and operationalize Lighthouse audits for web applications and sites.

This skill is for **measurement and regression detection**, not deep remediation. It helps the operator:

- run Lighthouse locally with the CLI
- automate audits with the Node API
- enforce thresholds in CI with Lighthouse CI (LHCI)
- parse JSON reports into actionable summaries
- compare baseline vs preview results safely
- set **performance budgets** and **CI assertions** without overreacting to one noisy run

Lighthouse produces **lab data** from a controlled test run. That makes it useful for localhost, preview deployments, staging environments, and authenticated flows. It is **not** a substitute for real-user monitoring or field data.

If the user needs **field data for a public URL**, route to **PageSpeed Insights** or **CrUX**. If the request shifts from measurement into fixing specific issues, route to a remediation skill such as `@perf-web-optimization`, `@core-web-vitals`, `@accessibility`, or `@perf-astro`.

## When to Use This Skill

Use this skill when:

- the user asks to **run Lighthouse** on a local, preview, staging, or public URL
- the user wants a **Lighthouse score**, category breakdown, or metric summary
- the user needs **JSON or HTML reports** for automation or review
- the user wants to **compare two builds** or detect performance regressions
- the user needs **performance budgets** for transfer size, request count, or timing thresholds
- the user wants to add **CI enforcement** with LHCI assertions
- the target page requires a **controlled lab run** rather than field telemetry
- the operator needs to audit a **production build**, not just dev-server behavior

Do **not** use this skill when:

- the main task is fixing specific performance bottlenecks; use `@perf-web-optimization`
- the user needs **real-user field metrics** or origin-level CrUX analysis; use `@core-web-vitals` plus PSI/CrUX workflows
- the work is mainly **accessibility remediation** after Lighthouse findings; use `@accessibility`
- the work is specifically **Astro performance implementation**; use `@perf-astro`
- the user wants RUM instrumentation or ongoing field monitoring rather than synthetic lab audits

## Operating Table

| Situation | Recommended entry point | Inputs needed | Expected artifacts |
| --- | --- | --- | --- |
| One-off local audit of a production build | Lighthouse CLI | Local preview URL, category selection, output path | HTML report + JSON report |
| Repeated local audits for a stable baseline | Lighthouse CLI with 3 runs | Same URL, same build, stable machine | Multiple JSON files and a representative median/typical result |
| Authenticated or stateful page audit | Node API or scripted pre-login flow | URL, auth method, safe local credentials handling | JSON metrics plus reproducible setup notes |
| CI regression gate for PRs | LHCI | Start command or URLs, assertions, artifact retention | Multiple runs, assertions result, uploaded reports |
| Public URL plus field data question | PageSpeed Insights / CrUX | Public URL | Lab + field context, not just Lighthouse CLI output |
| Machine-readable summary for an agent or pipeline | JSON report + parser script | Lighthouse JSON output | Structured category scores, metric values, failing audits |
| Baseline vs preview comparison | Two JSON reports + compare script | Baseline report, candidate report | Delta summary across selected metrics |
| Performance governance | Budget file + LHCI assertions | Calibrated thresholds from historical baseline | Budget config and pass/fail thresholds |

## Workflow

1. **Confirm the target and decision boundary**
   - Identify whether the URL is local, preview, staging, authenticated, or public.
   - Decide whether the user needs **lab data** only or also **field data**.
   - Audit a **production build** whenever possible, not an unoptimized dev server.

2. **Choose the right tool path**
   - Use **Lighthouse CLI** for one-off runs and manual inspection.
   - Use the **Node API** for scripted flows, auth setup, or custom extraction.
   - Use **LHCI** for repeated CI collection and assertions.
   - Use **PageSpeed Insights / CrUX** when the question is about real-user performance on a public URL.

3. **Stabilize the environment before measuring**
   - Use the same build, route, and form factor across runs.
   - Avoid noisy background workloads on the runner or workstation.
   - Prefer a dedicated preview server or stable localhost preview.
   - For comparisons, keep categories and settings consistent.

4. **Run a baseline audit**
   - Save both **HTML** and **JSON** outputs.
   - Use explicit output paths and names such as `reports/lighthouse-home.mobile.run1.json`.
   - Narrow categories when the task is performance-only.

5. **Repeat for variance control**
   - Run at least **3 passes** when results will inform a decision or gate.
   - Compare representative runs instead of trusting one best or worst run.
   - If results vary widely, troubleshoot environment stability before setting thresholds.

6. **Interpret results correctly**
   - Read category scores as **weighted composites**, not standalone truths.
   - Inspect key audits and metrics such as **LCP, CLS, FCP, TBT**, and the failing audits list.
   - Treat Lighthouse metrics as **lab signals** that may differ from field metrics.

7. **Decide whether to enforce budgets, assertions, or both**
   - Use **budgets** for resource sizes, resource counts, and some timing constraints.
   - Use **LHCI assertions** for category score floors and metric thresholds in CI.
   - Calibrate thresholds from a known-good baseline instead of arbitrary aspirational targets.

8. **Persist artifacts and evidence**
   - Keep JSON for automation and HTML for human review.
   - Retain CI artifacts so regressions can be reviewed after failure.
   - Note the tested URL, form factor, categories, and run count in the summary.

9. **Hand off when the task changes**
   - If the task becomes issue remediation, move to the appropriate optimization skill.
   - If the task becomes field-metric analysis, route to PSI/CrUX-oriented work.

## Command Recipes

### Local CLI audit against a production preview

```bash
mkdir -p reports

lighthouse http://127.0.0.1:4173 \
  --only-categories=performance \
  --form-factor=mobile \
  --output=html \
  --output=json \
  --output-path=./reports/lighthouse-home.mobile.run1
```

This writes both:

- `reports/lighthouse-home.mobile.run1.report.html`
- `reports/lighthouse-home.mobile.run1.report.json`

### Repeat 3 runs for a more stable comparison set

```bash
mkdir -p reports

for run in 1 2 3; do
  lighthouse http://127.0.0.1:4173 \
    --only-categories=performance \
    --form-factor=mobile \
    --output=json \
    --output-path="./reports/lighthouse-home.mobile.run${run}.json"
done
```

### Desktop audit

```bash
lighthouse https://preview.example.com \
  --only-categories=performance,accessibility \
  --form-factor=desktop \
  --output=html \
  --output=json \
  --output-path=./reports/lighthouse-preview.desktop
```

### Audit with a budget file

```bash
lighthouse https://preview.example.com \
  --only-categories=performance \
  --budget-path=./examples/budget.json \
  --output=json \
  --output-path=./reports/lighthouse-budget-check.json
```

### Parse a JSON report into a short summary

```bash
node scripts/parse_lighthouse_report.js ./reports/lighthouse-home.mobile.run1.json
```

### Compare baseline vs candidate report

```bash
node scripts/compare_lighthouse_reports.js ./baseline.json ./candidate.json
```

## Examples

### Example 1: One-off local audit for a production build

```bash
npm run build
npm run preview &

lighthouse http://127.0.0.1:4173 \
  --only-categories=performance \
  --form-factor=mobile \
  --output=html \
  --output=json \
  --output-path=./reports/home.mobile
```

**Use when:** you need an immediate lab report for manual review.

**Expected output:** HTML and JSON report files under `reports/`.

### Example 2: Parse the report for an agent-friendly summary

```bash
node scripts/parse_lighthouse_report.js ./reports/home.mobile.report.json
```

**Expected output shape:**

```text
URL: http://127.0.0.1:4173/
Performance: 92
Accessibility: n/a
SEO: n/a
largest-contentful-paint: 2104 ms
cumulative-layout-shift: 0.03
first-contentful-paint: 1182 ms
total-blocking-time: 90 ms
Failing audits:
- unused-javascript (score: 0.00)
- render-blocking-resources (score: 0.00)
```

### Example 3: Compare a baseline report against a preview report

```bash
node scripts/compare_lighthouse_reports.js \
  ./reports/main.json \
  ./reports/pr.json
```

**Expected output shape:**

```text
largest-contentful-paint: ❌ +12.4% (2200.00 -> 2472.00)
cumulative-layout-shift: ✅ -25.0% (0.08 -> 0.06)
total-blocking-time: ❌ +18.2% (110.00 -> 130.00)
```

### Example 4: Run a scripted Node audit

```bash
node examples/node-api-audit.mjs https://preview.example.com
```

**Use when:** the operator needs a programmable audit flow or custom extraction.

### Example 5: CI collection and assertions with LHCI

```bash
npx @lhci/cli autorun --config=./examples/lighthouserc.cjs
```

**Use when:** a PR or deployment should fail on calibrated regressions.

## Score and Metric Interpretation

- Lighthouse category scores are usually reported on a **0 to 1 scale** in JSON and often shown as **0 to 100** in UI summaries.
- The **Performance** score is a weighted combination of several lab metrics. Do not treat one category score as the whole story.
- Key metrics often worth extracting for comparisons:
  - **LCP**: loading milestone for largest visible content
  - **CLS**: layout stability
  - **FCP**: first visible rendering
  - **TBT**: lab proxy for main-thread blocking responsiveness
- A score difference across one run may be noise. Prefer multiple runs and compare a representative median or stable trend.
- Lab results can differ from **CrUX** or **PageSpeed Insights field data** because those reflect real-user conditions.

For a concise operator reference, see [references/lighthouse-metric-interpretation.md](references/lighthouse-metric-interpretation.md).

## Budgets vs Assertions

Use **performance budgets** when you want to constrain:

- total bytes transferred
- bytes by resource type
- request counts by resource type
- selected timing budgets

Use **LHCI assertions** when you want to enforce:

- category minimum scores
- maximum metric values
- pass/warn/error thresholds in CI

Practical rule:

- choose **budgets** for payload governance
- choose **assertions** for regression gates
- use **both** when a team wants stable performance governance plus CI enforcement

Start from a known baseline. Thresholds that are too strict too early will create noisy CI and reduce trust in the workflow.

## Best Practices

### Do

- Audit a **production build** or production-like preview whenever possible.
- Save **JSON** for automation and **HTML** for review.
- Use **explicit output paths** and keep reports organized by route, form factor, and run number.
- Run **at least 3 times** before drawing conclusions or setting merge gates.
- Keep build, route, categories, and form factor consistent across comparisons.
- Use **LHCI** instead of ad hoc one-off CI commands when you need regression enforcement.
- Calibrate budgets and assertions using historical or current stable baselines.
- Treat authenticated flows carefully; prefer scripted setup for complex state.
- Route to PSI or CrUX when the user really needs field data.

### Don’t

- Don’t use a single Lighthouse score as the sole truth about performance.
- Don’t compare a local dev server run against a production preview and call it regression analysis.
- Don’t set arbitrary `minScore: 1` thresholds unless the app is proven stable under them.
- Don’t expose credentials in CLI history, screenshots, or committed config files.
- Don’t use this skill to prescribe detailed code-level fixes unless the user explicitly wants remediation and you hand off appropriately.

## Troubleshooting

### Problem: Scores vary too much between runs

**Symptoms:** The same page swings meaningfully between runs, making it hard to trust pass/fail outcomes.

**Solution:**
- Run at least 3 times and compare representative results.
- Audit the same build and route each time.
- Reduce background CPU and network noise on the runner.
- Use a stable preview or localhost production server rather than a hot-reloading dev server.
- Delay threshold setting until the environment is stable.

See also: [references/lighthouse-troubleshooting.md](references/lighthouse-troubleshooting.md)

### Problem: Chrome cannot be found or launched

**Symptoms:** Lighthouse fails before the audit starts, or the runner reports missing Chrome/Chromium.

**Solution:**
- Ensure Chrome or Chromium is installed on the machine or CI runner.
- Set `CHROME_PATH` if the browser is installed in a non-default location.
- In CI, prefer a known runner image and stable browser availability.
- Use LHCI config or a controlled launch flow instead of ad hoc trial-and-error flags.

### Problem: The page times out or audits before the app is fully ready

**Symptoms:** Results are incomplete, the app shell loads without content, or hydration-heavy routes look unrealistically bad.

**Solution:**
- Confirm the preview server is actually ready before running the audit.
- In LHCI, use a proper startup command and readiness pattern.
- Verify the route you are measuring is the final rendered route.
- For scripted flows, control navigation and readiness explicitly before collecting results.

### Problem: The page requires authentication or application state

**Symptoms:** Lighthouse lands on a login page or fails to measure the intended user flow.

**Solution:**
- For simple cases, use extra headers only if that is already part of the environment and can be handled safely.
- For realistic authenticated flows, use a scripted pre-login or browser automation setup.
- Never commit secrets into configs, scripts, or example files.
- Document how session state is created so results remain reproducible.

### Problem: CI becomes flaky after adding Lighthouse checks

**Symptoms:** PRs fail unpredictably, thresholds are noisy, or developers stop trusting the checks.

**Solution:**
- Move from one-off CLI runs to **LHCI** with multiple runs.
- Relax initial thresholds to baseline-calibrated values.
- Upload and inspect artifacts after failures.
- Separate informational reporting from hard-fail assertions until stability improves.

## Related Skills

- `@perf-web-optimization` - Use when the next step is fixing Lighthouse findings or improving code paths.
- `@core-web-vitals` - Use when the user needs field-metric interpretation, CWV strategy, or RUM-oriented analysis.
- `@accessibility` - Use when accessibility findings require deeper remediation beyond Lighthouse reporting.
- `@perf-astro` - Use when the implementation is Astro-specific.

## Additional Resources

### Local support pack

- [Workflow decision guide](references/lighthouse-workflow.md)
- [Metric interpretation quick reference](references/lighthouse-metric-interpretation.md)
- [Troubleshooting guide](references/lighthouse-troubleshooting.md)
- [LHCI configuration example](examples/lighthouserc.cjs)
- [Performance budget example](examples/budget.json)
- [GitHub Actions example](examples/github-actions-lighthouse.yml)
- [Node API example](examples/node-api-audit.mjs)
- [Parse Lighthouse report](scripts/parse_lighthouse_report.js)
- [Compare Lighthouse reports](scripts/compare_lighthouse_reports.js)

### External references

- Lighthouse overview: https://developer.chrome.com/docs/lighthouse/overview
- Lighthouse scoring: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring
- Lighthouse budgets: https://developer.chrome.com/docs/lighthouse/performance-budgets
- Lighthouse configuration: https://github.com/GoogleChrome/lighthouse/blob/main/docs/configuration.md
- Lighthouse variability: https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md
- Lighthouse CI docs: https://googlechrome.github.io/lighthouse-ci/docs/
- Lighthouse CI configuration: https://googlechrome.github.io/lighthouse-ci/docs/configuration.html
- PageSpeed Insights API: https://developers.google.com/speed/docs/insights/v5/get-started
- Chrome UX Report: https://developer.chrome.com/docs/crux
