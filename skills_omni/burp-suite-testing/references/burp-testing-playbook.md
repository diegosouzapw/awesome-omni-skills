# Burp Testing Playbook

Use this file during execution when you need a denser decision aid than the main skill provides.

## Preflight Checklist

Before intercepting traffic, confirm:

- Written authorization exists for the target and test window.
- In-scope hosts, paths, roles, and excluded functions are recorded.
- Active scanning permission is explicitly known: allowed, limited, or forbidden.
- A dedicated Burp project has been created for this assessment.
- The test browser is configured to proxy through Burp.
- Burp's CA certificate is installed and trusted in the test browser if HTTPS interception is required.
- Test credentials or another approved auth method are available.
- Production safety constraints are understood: rate limits, lockout thresholds, destructive actions, file-processing limits.
- Evidence requirements are known: project file, issue exports, screenshots, timestamps, or notes.

## Phase Gates

### Gate 1: Safe to Start Browsing
Proceed only if:

- Scope is documented.
- Proxying works.
- Out-of-scope traffic can be distinguished.

Pause if:

- The browser generates unrelated background traffic you cannot filter.
- TLS interception is broken.
- The app relies on third-party auth or payment flows that are not yet approved.

### Gate 2: Safe to Start Manual Replay
Proceed only if:

- You have captured a clean baseline request.
- You understand the relevant auth headers, cookies, and tokens.
- You can identify one variable to change at a time.

Pause if:

- The request depends on a multi-step workflow you have not reproduced.
- Anti-CSRF or session rotation is causing false failures.

### Gate 3: Safe to Start Active Scanning
Proceed only if:

- Active scanning is approved.
- The scan target is narrowed to approved hosts, folders, or requests.
- Destructive or unstable endpoints are excluded unless intentionally under test.
- The session is stable enough to avoid mass false positives.

Pause if:

- You cannot distinguish in-scope from out-of-scope requests.
- The application is already rate-limiting or failing under light manual testing.
- The authenticated role could trigger account lockout or business-impacting actions.

## Scan Decision Matrix

| Situation | Recommended action | Why |
|---|---|---|
| New target, unclear behavior | Passive browse first | Establish baseline without adding risk |
| Stable endpoint with suspicious input handling | Manual Repeater test | Fast verification with tight control |
| Parameterized endpoint needing controlled variation | Targeted Intruder use | Useful when payload positions are known |
| Large authenticated area with explicit approval | Limited active scan | Efficient once scope and exclusions are clear |
| Production app with fragile workflows | Manual verification before any scan | Reduces operational impact and false positives |
| Logout, billing, delete, or admin flows | Exclude unless approved | High risk of disruption |

## Authenticated Testing Notes

- Keep one role per browser session whenever possible.
- If role switching is required, clearly label traffic and avoid session overlap.
- Treat 302 to login, 401, and CSRF mismatch as session-state symptoms first, not immediate proof of security behavior.
- Capture a fresh request before replaying anything protected by short-lived tokens.
- If a request depends on prior navigation, reproduce that sequence before isolating the final request.

## Evidence Checklist

For each confirmed issue, capture:

- Target host and path
- User role or account used
- Original request
- Modified request or sequence
- Relevant response showing the issue
- Preconditions such as object ID, session state, or feature flag
- Timestamp or project save point
- Analyst note explaining why the result is security-relevant

Good evidence is:

- Minimal: only enough traffic to prove the issue
- Reproducible: another tester can replay it
- Scoped: clearly tied to an in-scope endpoint and role

Weak evidence is:

- Many near-duplicate requests with no explanation
- A scanner screenshot without the request/response pair
- A status-code difference with no demonstrated unauthorized effect

## Troubleshooting Matrix

| Symptom | Likely cause | Corrective action |
|---|---|---|
| Browser shows certificate warnings | Burp CA not trusted in test browser | Install and trust Burp CA in that browser profile |
| HTTP history is flooded with unrelated traffic | Shared browser profile or poor scoping | Use dedicated profile, limit tabs, apply scope filters |
| Repeater requests lose auth | Expired session or missing CSRF/header state | Re-authenticate and replay with fresh tokens and headers |
| Scanner findings look repetitive | Overbroad target or unstable session | Narrow the target and stabilize authentication first |
| Browser flow works but replay fails | Missing request chain or dependent headers | Reproduce sequence and compare headers/body carefully |
| Authorization result is inconsistent | Mixed sessions or object mismatch | Use clean sessions per role and record exact objects |

## Quick Review Rules

Use these rules before concluding a finding:

- Confirm the target was in scope.
- Confirm the behavior persists with a fresh session.
- Confirm the response difference matters: data exposure, action success, privilege bypass, or meaningful validation failure.
- Prefer one strong proof over many weak artifacts.
- If uncertain whether the issue is session noise, reproduce from a fresh baseline and document the ambiguity rather than over-claiming.
