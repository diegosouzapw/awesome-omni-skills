# Lighthouse Troubleshooting

## Inconsistent scores

**Symptoms:** Scores move noticeably between identical runs.

**Likely causes:**
- noisy CPU or network environment
- inconsistent build output
- dev server behavior instead of production preview
- too few runs

**Fix:**
- run at least 3 times
- use the same route and build each run
- reduce background system load
- prefer a stable preview server

## Chrome not found

**Symptoms:** Lighthouse exits before starting and reports browser discovery issues.

**Likely causes:**
- Chrome or Chromium not installed
- browser installed outside expected path
- CI runner missing the browser

**Fix:**
- install Chrome/Chromium
- set `CHROME_PATH` if needed
- use a runner image with known browser availability

## Audit starts before the app is ready

**Symptoms:** The app shell loads, but important content is missing or hydration is incomplete.

**Likely causes:**
- preview server is not ready
- startup command returns before the app is reachable
- dynamic app route is measured too early

**Fix:**
- verify readiness before running Lighthouse
- use LHCI startup readiness configuration
- script navigation and waits when needed

## Authenticated pages cannot be audited correctly

**Symptoms:** Audit lands on a login page or an unauthorized response.

**Likely causes:**
- session not established
- extra headers are insufficient for the auth flow
- protected route depends on client-side state

**Fix:**
- use simple headers only for simple environments
- otherwise script login/state setup with browser automation
- keep secrets out of committed files

## CI is flaky

**Symptoms:** The same PR passes and fails on different runs.

**Likely causes:**
- single-run CI audits
- thresholds set too tightly
- unstable startup or environment

**Fix:**
- use LHCI with multiple runs
- calibrate thresholds to a stable baseline
- upload reports and inspect failures before tightening assertions
