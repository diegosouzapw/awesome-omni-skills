# Playwright Artifact Policy

Use this policy to decide what evidence to save and how to handle it safely.

## Evidence table

| Situation | Minimum artifact | Recommended extras |
| --- | --- | --- |
| Quick page check | console summary | single screenshot |
| UX or layout issue | screenshot | per-viewport screenshots |
| Flaky failure | trace | screenshot and concise notes |
| Auth issue | sanitized screenshot | trace only if needed and safe |
| Responsive review | desktop/tablet/mobile screenshots | device notes |

## Naming guidance

Use descriptive names in `/tmp`, for example:

- `/tmp/login-success.png`
- `/tmp/mobile-homepage.png`
- `/tmp/checkout-failure-trace.zip`

## Sharing guidance

Before sharing any artifact:

1. review for secrets or PII
2. remove unnecessary files
3. mention if artifacts were sanitized
4. avoid sharing raw auth state

## Reporting guidance

When handing off, list:

- what was captured
- why it was captured
- where it was saved
- whether it was sanitized
