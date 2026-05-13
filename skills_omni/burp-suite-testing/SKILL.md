---
name: "burp-suite-testing"
description: "Burp Suite Web Application Testing workflow skill. Use this skill when the user needs to perform authorized web application security testing with Burp Suite, including proxy interception, authenticated request analysis, manual verification, evidence capture, and tightly scoped active scanning."
version: "0.0.1"
category: "testing-security"
tags:
  - "burp-suite-testing"
  - "web-security"
  - "application-testing"
  - "proxy"
  - "authenticated-testing"
  - "active-scanning"
  - "manual-testing"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "burp-suite"
  - "browser"
  - "proxy"
  - "repeater"
  - "intruder"
  - "scanner"
source: "omni-team"
author: "Omni Skills Team"
license: "See upstream source repository licensing before redistribution or reuse."
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "burp-suite-testing"
family_name: "Burp Suite Web Application Testing"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/burp-suite-testing"
upstream_skill: "skills/burp-suite-testing"
upstream_author: "zebbern"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "burp-suite-testing"
---

# Burp Suite Web Application Testing

Execute a repeatable, evidence-driven Burp Suite assessment for authorized web applications. This skill emphasizes scope control, safe project setup, authenticated testing, focused manual verification, and disciplined use of active scanning.

> Authorized use only. Apply this skill only to systems you are explicitly permitted to assess.

## When to Use

Use this skill when all of the following are true:

- You have explicit authorization to test the target application.
- The work involves HTTP or HTTPS web application traffic that Burp Suite can proxy.
- You need to inspect, replay, modify, or compare requests and responses.
- You may need authenticated testing across login flows, roles, or session states.
- You need reproducible evidence such as saved requests, issue notes, or project artifacts.

Do **not** use this skill when:

- Authorization, test window, or scan permission is unclear.
- The primary target is not a web application workflow.
- The task requires indiscriminate fuzzing or high-volume scanning without explicit approval.
- The environment contains production traffic that cannot tolerate proxying, replay, or scanning.

## Inputs

Gather these before starting:

- Approved target scope: domains, hosts, paths, APIs, and excluded areas.
- Test constraints: production vs staging, rate limits, time window, and forbidden actions.
- Authentication method: credentials, MFA constraints, test accounts, or token bootstrap method.
- Browser and proxy access needed to route traffic through Burp.
- Expected outputs: notes, issue list, exports, screenshots, or project file retention.

## Outputs

Typical deliverables:

- Burp project or saved state with relevant traffic history.
- Repeater requests proving suspected behavior.
- Scanner findings that were reviewed, de-duplicated, and scoped.
- Evidence package: request/response pairs, screenshots, timestamps, and analyst notes.
- Short assessment summary with confirmed issues, rejected false positives, and follow-up actions.

## Workflow

1. **Confirm authorization and scope**
   - Record the in-scope hosts, paths, roles, and test methods.
   - Explicitly mark out-of-scope domains, logout endpoints, destructive functions, payment flows, and third-party integrations unless approved.
   - Confirm whether active scanning is allowed, and if so, where and under what limits.

2. **Prepare Burp safely**
   - Create or open a dedicated Burp project for the assessment.
   - Configure the Burp browser or an external browser to proxy through Burp.
   - Install and trust Burp's CA certificate in the test browser as required for HTTPS interception.
   - Reduce noise early: disable unnecessary browser tabs, extensions, and background traffic.

3. **Set target scope and logging discipline**
   - Add only authorized targets to Burp scope.
   - Filter Proxy, Target, HTTP history, and Logger views to keep focus on in-scope traffic.
   - Verify that out-of-scope requests are visible but not accidentally used for testing actions.
   - Save project state before major testing phases.

4. **Capture baseline application behavior**
   - Browse key user flows normally before changing requests.
   - Record login, logout, password reset, profile updates, object access, search, file upload, and privileged actions when available.
   - Note response patterns, anti-CSRF behavior, redirects, cookies, cache headers, and API content types.

5. **Establish authenticated testing reliably**
   - Log in using approved test accounts and confirm session continuity through Burp.
   - If the app uses rotating tokens, anti-CSRF values, or short-lived sessions, capture fresh requests before replaying.
   - Test one role at a time and label traffic clearly when switching users.
   - If authentication repeatedly breaks, pause scanning and stabilize the session first.

6. **Perform manual verification with Repeater first**
   - Send interesting requests to Repeater.
   - Change one variable at a time: parameter values, identifiers, headers, methods, body fields, or content type.
   - Compare responses for authorization bypass, validation gaps, state inconsistencies, caching issues, or unsafe error disclosure.
   - Prefer controlled replay over broad automation when validating sensitive actions.

7. **Use Intruder or equivalent targeted automation carefully**
   - Use focused payload positions and constrained wordlists.
   - Respect rate limits, lockout thresholds, and business-impact boundaries.
   - Avoid high-volume attacks unless they are explicitly authorized and operationally safe.

8. **Enable active scanning only where approved**
   - Scan a narrowed set of requests, folders, or hosts instead of the whole application.
   - Exclude logout flows, destructive endpoints, and unstable authenticated paths unless intentionally testing them.
   - Review scanner configuration and insertion points before launching.
   - Monitor for session expiry, request storms, or anti-automation responses during the scan.

9. **Review, verify, and de-duplicate findings**
   - Confirm scanner findings manually where practical.
   - Separate confirmed issues, likely issues, and false positives.
   - Preserve one high-quality proof set per issue rather than many near-duplicate requests.
   - Record the exact request, response, role used, and preconditions needed to reproduce.

10. **Export evidence and close cleanly**
   - Save project state and export any issue reports required by the engagement.
   - Remove or label stale sessions and clearly note if evidence depends on temporary tokens.
   - Produce a concise summary: scope tested, auth context, methods used, confirmed findings, and limitations.

## Examples

### Example 1: Verify insecure direct object reference manually

**Captured request:**
```http
GET /api/orders/10025 HTTP/1.1
Host: app.example.test
Cookie: session=abc123
Accept: application/json
```

**Repeater change:**
```http
GET /api/orders/10026 HTTP/1.1
Host: app.example.test
Cookie: session=abc123
Accept: application/json
```

**Expected secure behavior:**
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json

{"error":"not authorized"}
```

**Finding signal:** If the modified request returns another user's order data with `200 OK`, record the original request, modified request, affected role, and returned object identifiers.

### Example 2: Stabilize an authenticated API test before replay

**Observed problem:** replayed requests fail because the anti-CSRF token expires.

**Fresh captured request:**
```http
POST /api/profile HTTP/1.1
Host: app.example.test
Cookie: session=abc123
X-CSRF-Token: 8f1de8b6
Content-Type: application/json

{"displayName":"Analyst"}
```

**Expected operator action:**
- Re-capture a fresh authenticated request.
- Reuse the latest cookie and CSRF token.
- Modify only the field under test.
- Repeat quickly before the token expires.

**Expected outcome:** the server response reflects the test condition rather than session failure noise.

### Example 3: Narrow active scanning to an approved area

**Good target choice:**
- `/app/account/*`
- `/api/profile/*`
- `/api/orders/*` for the approved test account only

**Bad target choice:**
- entire production domain including admin, billing, logout, third-party SSO, and file-processing endpoints

**Expected result:** a smaller, reviewable finding set with lower operational risk.

For a longer authenticated testing walkthrough, open [`examples/authenticated-test-flow.md`](examples/authenticated-test-flow.md).

## Best Practices

- **Do** define scope in Burp before browsing extensively.
- **Do** save project state before authentication testing, before active scans, and before closing the engagement.
- **Do** label evidence with user role, endpoint, and exact reproduction steps.
- **Do** validate suspicious scanner results manually in Repeater.
- **Do** keep one clean browser profile for testing to reduce background traffic and cookie confusion.
- **Do** retest with a fresh session when behavior may be caused by expiry rather than a vulnerability.

- **Do not** run active scanning across an entire host by default.
- **Do not** test destructive functions, payment submission, or mass-action endpoints without explicit approval.
- **Do not** mix multiple accounts in one ambiguous traffic history without clear labels.
- **Do not** claim an authorization issue based only on changed status codes; confirm access to unauthorized data or actions.
- **Do not** keep scanning when the app is returning rate-limit, lockout, or anti-automation responses unless that behavior is itself the test target.

## Troubleshooting

**Symptoms:** HTTPS requests are not visible or appear as TLS/certificate errors in the browser.

**Solution:** Confirm the browser is using Burp as its proxy and that Burp's CA certificate is installed and trusted in the specific test browser profile.

**Symptoms:** You see too much background traffic and cannot isolate the target workflow.

**Solution:** Restrict Burp scope, use a dedicated browser profile, close unrelated tabs, and apply in-scope filters in HTTP history and Logger views.

**Symptoms:** Replayed authenticated requests return redirects to login, 401, or anti-CSRF errors.

**Solution:** Re-authenticate, capture a fresh request, update session cookies and anti-CSRF tokens, and replay quickly with only one controlled modification.

**Symptoms:** Active scan results are noisy or mostly false positives.

**Solution:** Reduce the target set, review insertion points, scan only stable and approved endpoints, and manually verify high-value findings in Repeater.

**Symptoms:** Requests succeed in the browser but fail in Repeater.

**Solution:** Compare headers, content type, origin/referrer requirements, CSRF tokens, and any preflight or sequencing assumptions. Reproduce the same request chain before isolating a single request.

**Symptoms:** A suspected authorization issue is inconsistent across roles.

**Solution:** Test with clean sessions for each role, avoid cross-account cookie contamination, and record exact object identifiers and role context for each comparison.

## Additional Resources

- [`references/burp-testing-playbook.md`](references/burp-testing-playbook.md) — Open this during execution for a denser preflight checklist, scan decision matrix, evidence checklist, and troubleshooting guide.
- [`examples/authenticated-test-flow.md`](examples/authenticated-test-flow.md) — Open this when you need a concrete authenticated API testing sequence with session refresh and evidence notes.

## Related Skills

No related local skills were provided in the source context.

## Notes on Provenance

This enhanced version preserves the upstream skill identity while converting the content into a tighter operational workflow for authorized Burp-based web application testing. The emphasis is on scope control, authenticated workflows, manual verification before automation, and reproducible evidence capture.
