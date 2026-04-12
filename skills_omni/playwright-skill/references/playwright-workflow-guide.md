# Playwright Workflow Guide

Use this guide when executing the `playwright-skill` workflow in a disciplined, reviewable way.

## 1. Confirm the target

Before writing code, confirm:

- target URL or localhost detection requirement
- intended browser task
- expected success condition
- whether auth is required
- whether screenshots or traces are needed

## 2. Detect localhost servers first

For localhost work, run:

```bash
cd "$SKILL_DIR" && node -e "require('./lib/helpers').detectDevServers().then(servers => console.log(JSON.stringify(servers, null, 2)))"
```

Use the result to avoid hardcoding guessed ports.

## 3. Choose the right execution style

- Tiny one-off action: inline execution
- Most work: `/tmp/playwright-test-*.js`
- Repeatable scenario or matrix: Playwright Test file

## 4. Prefer locator-first interaction

Start with these in order when possible:

1. `getByRole()`
2. `getByLabel()`
3. `getByText()`
4. `getByTestId()`

Only fall back to CSS selectors when semantic locators are not viable.

## 5. Prefer web-first assertions

Use checks tied to user-visible behavior:

- URL changed as expected
- heading is visible
- button is enabled
- success message is visible
- expected text appears

Avoid fixed sleeps unless there is a narrow, documented reason.

## 6. Collect evidence intentionally

- quick validation: console summary + screenshot
- layout/UX review: per-viewport screenshots
- flaky or failing flow: trace + screenshot
- auth flow: sanitize all artifacts before sharing

## 7. Report clearly

A good result summary includes:

- target URL
- browser mode
- viewport or device
- key steps performed
- assertions verified
- files saved under `/tmp`
- blockers or unknowns

## 8. Know when to route away

Do not keep using this skill if the request becomes:

- live devtools debugging
- network waterfall analysis
- performance profiling
- CI architecture design
- security hardening review
