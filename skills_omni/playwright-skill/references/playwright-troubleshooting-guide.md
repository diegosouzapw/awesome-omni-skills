# Playwright Troubleshooting Guide

## Element exists but action fails

**Likely causes**

- overlay or modal intercepting clicks
- disabled control
- animation not finished
- wrong frame
- stale or brittle locator

**What to do**

- inspect visibility and enabled state
- dismiss cookie banners or overlays
- switch to frame-aware targeting if needed
- replace brittle selectors with semantic locators
- use assertion-based readiness checks

## Headed passes, headless fails

**Likely causes**

- viewport differences
- missing display on remote environment
- hidden timing assumptions
- auth or permission differences

**What to do**

- run headless explicitly and collect artifacts
- compare viewport and context options
- avoid manual-observation dependencies
- capture trace for the failing run

## Login loop or redirect mismatch

**Likely causes**

- wrong base URL
- stale auth cookies
- expired session
- missing post-login assertion

**What to do**

- verify environment and URL
- clear or regenerate auth state
- assert authenticated landing page explicitly
- use dedicated test credentials

## `networkidle` never settles

**Likely causes**

- long-polling
- websocket activity
- background analytics requests

**What to do**

Use app-specific readiness checks instead of relying on `networkidle`.

## Flaky selectors after copy changes

**Likely causes**

- layout-driven selector
- fragile text match
- positional targeting

**What to do**

- prefer `getByRole()` or `getByLabel()`
- use `getByTestId()` for intentionally stable hooks
- document any unavoidable fallback selector
