# ffuf Domain Notes

Use this file as a compact execution reference while running the workflow in `SKILL.md`.

## 1) Matcher and filter strategy

ffuf is most reliable when you learn the target's baseline behavior first and then choose deliberate matchers and filters.

Common controls to combine:

- **Match by status** when you already know which status codes are interesting.
- **Filter by status** when the application returns obvious noise such as a standard 404 pattern.
- **Filter by size, words, or lines** when the target returns soft 200s or wildcard content.
- **Use autocalibration (`-ac`)** when a target generates consistent but misleading responses for nonexistent resources.

Practical guidance:

- Start broad enough to see behavior, then narrow.
- If almost all responses look valid, compare body size, word count, and line count from known-bad requests.
- For vhost fuzzing, size- or word-based filtering is often more stable than status-code filtering alone.

## 2) Recursion and runaway-job control

Recursive discovery is useful but can expand faster than expected.

Use recursion only when:
- Scope explicitly allows it.
- The first pass produced a small set of plausible directories.
- You can limit depth, time, or candidate breadth.

Prefer:
- A narrow wordlist before recursion.
- Reviewing first-pass hits before recursing.
- Stopping when newly discovered paths begin to repeat the same template response.

## 3) Raw request mode

Use raw request mode when the target needs exact headers, methods, body content, cookies, or a request shape that is easier to save than rebuild on the command line.

Checklist:
- Save a complete request in `request.txt`.
- Place `FUZZ` only where you intend to substitute values.
- Set `-request-proto http` or `-request-proto https` to match the real transport.
- Re-test the raw request without fuzzing if the run behaves unexpectedly.

Good use cases:
- Authenticated flows with stable cookies supplied by the user.
- JSON or form-body parameter fuzzing.
- Reproducing browser-captured requests precisely.

## 4) Output modes

Use structured output whenever results need to be reviewed, filtered, or handed off.

Recommended patterns:
- **JSON** for one-file machine-readable output.
- **JSONL** for streaming or line-oriented processing.
- Keep the exact command near the saved output so another operator can reproduce the run.

Record at least:
- Target URL or request file used.
- Wordlist used.
- Matchers and filters used.
- Whether autocalibration was enabled.
- Any recursion or rate-limiting controls.

## 5) Configuration notes

ffuf supports configuration files and XDG-style config locations. This is useful when an operator repeatedly uses safe defaults such as timeouts, output preferences, or calibrated behavior.

Operator guidance:
- Prefer local, explicit command flags for one-off tasks.
- Use configuration files only when the operator actually needs repeatable local defaults.
- Do not assume another environment shares the same config.

## 6) Scraper capability and caveats

ffuf includes scraper support that can extract additional paths or data from responses depending on the configured rules.

Use scraper-related features carefully:
- Treat scraper findings as leads, not confirmed findings.
- Review whether the extracted values are truly in scope.
- Avoid turning scraper-discovered content into unconstrained recursion without approval.

## 7) HTTP method context

Most content discovery begins with `GET`, but some workflows need other methods.

Examples:
- `POST` for body-parameter fuzzing.
- `HEAD` when the target or user explicitly prefers lower-transfer discovery and the application handles `HEAD` consistently.

Method choice should reflect the real application behavior, not habit.

## Sources

- ffuf official project documentation: https://github.com/ffuf/ffuf
- ffuf wiki home: https://github.com/ffuf/ffuf/wiki
- MDN HTTP methods reference: https://developer.mozilla.org/
- OWASP Web Security Testing Guide: https://owasp.org/www-project-web-security-testing-guide/
