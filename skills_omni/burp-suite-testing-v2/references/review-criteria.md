# Burp Review Criteria Matrix

Use this file during execution when you need a compact checklist for deciding whether captured traffic, replay activity, and scan results are trustworthy enough to advance.

| Burp activity | Why it matters | What to verify | Stop / escalate when |
|---|---|---|---|
| Scope setup | Prevents out-of-scope interception or scans | Exact hosts, schemes, ports, and URL patterns are explicitly in scope; exclusions are defined first | Scope is missing, ambiguous, or broader than authorization |
| Proxy + browser trust | Ensures the browser is actually using Burp and TLS interception is working as intended | Requests visible in Proxy/HTTP history come only from the intended testing browser/profile | Unrelated traffic appears or the app bypasses the proxy |
| Baseline authentication capture | Establishes a known-good session before manipulation or scanning | Login succeeds, cookies/tokens are present, anti-CSRF behavior is understood, redirects are normal | Repeater baseline cannot reproduce the authenticated page/API result |
| Session continuity during testing | Prevents false findings caused by logout or token expiry | Same test account remains in effect, session timeouts are tracked, refresh flows are understood | Responses drift to login pages, 302 loops, 401, or 403 without an intentional auth change |
| Request selection for Repeater | Keeps testing targeted and reproducible | Requests chosen are high-value: auth, access control, state change, admin, upload, search, API mutation | Operator is replaying noise traffic with no security hypothesis |
| Parameter manipulation | Supports controlled comparison and defensible evidence | One variable changes at a time; syntax stays valid; baseline and modified responses are compared | Multiple variables changed at once or malformed payloads dominate results |
| Access control checks | Detects horizontal/vertical privilege failures | Object IDs, role-sensitive actions, and admin functions are tested under lower privilege | Sensitive action succeeds without expected denial or audit event |
| API payload handling | Prevents parser-noise and preserves business logic conditions | Content type, required fields, encoding, and auth placement remain correct after edits | Results are only parser errors or payload shape failures |
| HTTP method and endpoint behavior | Surfaces method confusion and unintended alternate paths | GET/POST/PUT/PATCH/DELETE behavior is compared where safe and relevant | Method changes create side effects beyond approved scope |
| HTTP/2-aware testing | Avoids false assumptions when modern protocol behavior matters | Live browser and replay behavior align closely enough for the question being tested | Replay no longer represents what the application actually processes |
| Automated scan targeting | Balances coverage and safety | Scan scope is narrow, authenticated state is validated, and unstable branches are excluded | Broad scans are about to hit production-like targets without explicit approval |
| Scanner session handling | Reduces false positives from de-authenticated scans | Burp remains logged in or clearly shows when it does not | Findings cluster on login/logout or generic error responses |
| Issue validation | Prevents reporting scanner noise as confirmed vulnerabilities | Findings are manually replayed, reproduced, and linked to concrete evidence | Issue cannot be reproduced outside scanner heuristics |
| Evidence collection | Makes handoff and review possible | Saved requests/responses, timestamps, account context, and result interpretation are recorded | Notes lack enough detail for another reviewer to reproduce |
| Safety monitoring | Protects the target and preserves authorization | Lockouts, rate limits, account disablement, or instability are watched continuously | Testing causes instability, abuse controls, or prohibited side effects |

## Quick WSTG-Oriented Coverage Pointers

Use these categories to decide what manual follow-up is still needed after mapping traffic:

- **Authentication:** login flow, logout behavior, MFA edge cases, password reset, session fixation, token rotation
- **Authorization:** object-level access control, role checks, forced browsing, admin action exposure
- **Session management:** cookie flags, timeout behavior, anti-CSRF, concurrent sessions, session invalidation
- **Input handling:** reflected/stored output handling, server-side validation, parser differences, parameter pollution
- **Business logic:** workflow skips, price/quantity tampering, sequence bypass, multi-step state transition flaws
- **Configuration and transport:** security headers, TLS assumptions, sensitive caching, debug/error exposure
- **API-specific:** versioning, undocumented fields, alternate verbs, content-type switching, auth location changes

## Fast Decision Rules

- If the baseline authenticated request no longer works, **fix session state before doing more testing**.
- If a scan starts producing mostly login or redirect results, **pause and revalidate authentication**.
- If a replayed request differs from the browser request in important headers, cookies, or body shape, **treat the result as tentative**.
- If a test may create user-visible side effects, **confirm approval and target safety before repeating it**.
- If evidence cannot be reproduced in Repeater, **do not report it as confirmed without qualification**.
