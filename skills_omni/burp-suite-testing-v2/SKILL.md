---
name: "burp-suite-testing-v2"
description: "Burp Suite Web Application Testing workflow skill. Use this skill when the user needs execute authorized web application security testing with Burp Suite across interception, replay, authenticated assessment, targeted scanning, and manual verification while preserving scope control, evidence quality, and provenance."
version: "0.0.1"
category: "testing-security"
tags:
  - "burp-suite-testing-v2"
  - "burp-suite-testing"
  - "web-security"
  - "burp-suite"
  - "proxy"
  - "scanner"
  - "manual-testing"
  - "authorized-testing"
  - "owasp-wstg"
  - "api-testing"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "Burp Suite"
  - "web-browser"
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "unknown"
date_added: "2026-04-19"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "burp-suite-testing-v2"
family_name: "Burp Suite Web Application Testing"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/burp-suite-testing-v2"
upstream_skill: "skills/burp-suite-testing-v2"
upstream_author: "zebbern"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "burp-suite-testing-v2"
---

# Burp Suite Web Application Testing

## Overview

Use this skill for **authorized** web application security testing with Burp Suite when the task requires a controlled workflow across proxying, request inspection, replay, authenticated testing, targeted scanning, and manual verification.

This skill is for operators who need to produce defensible testing results rather than just “run Burp.” It emphasizes:

- strict in-scope-only handling
- safe scan configuration
- authenticated and session-aware testing
- HTTP/API workflow coverage
- reproducible evidence and findings notes

> AUTHORIZED USE ONLY: Perform testing only with explicit permission and documented scope. Do not use this skill for opportunistic, production-hostile, or out-of-scope activity.

## When to Use

Use this skill when **all** of the following are true:

- the user is performing an authorized web security assessment
- traffic needs to be observed, modified, replayed, or compared
- manual validation is required after automated discovery
- session handling, login state, cookies, tokens, or API requests matter
- the operator must preserve a clear audit trail of what was tested and why

Do **not** use this skill when:

- authorization is missing or ambiguous
- the target scope is unknown, disputed, or still changing
- the task is limited to static code review with no live HTTP behavior
- testing would require aggressive actions that the owner has not approved
- the environment cannot tolerate proxying, scanning, or replay traffic

## Inputs

Prepare these inputs before starting:

- written authorization or ticket reference
- target list: hosts, ports, paths, APIs, environments
- excluded targets or prohibited test classes
- Burp edition and available capabilities in the operator environment
- browser trust/proxy setup status
- test account details or approved authentication method
- API auth material if applicable: bearer token, cookie, API key, client cert
- rate-limit or maintenance-window constraints

## Outputs

Produce outputs that another reviewer can verify:

- scoped testing notes with time, target, and operator identity
- saved Burp project or equivalent request history
- issue list with evidence, reproduction steps, and severity rationale
- manual validation notes tied to request/response pairs
- clear record of skipped tests, blocked areas, and safety constraints

## Workflow

1. **Confirm authorization and freeze scope**
   - Record the approval source and exact target boundaries.
   - Add only in-scope hosts, protocols, and URLs to Burp target scope.
   - Define exclusions before proxying or scanning.
   - If scope is unclear, stop and resolve it before sending traffic.

2. **Prepare the Burp test environment**
   - Configure the Burp proxy and browser trust settings.
   - Use Burp's browser or a dedicated testing browser profile.
   - Disable unrelated tabs, extensions, and background apps that may leak traffic into scope.
   - Verify that only intended traffic is passing through Burp.

3. **Establish a clean baseline session**
   - Browse the application normally first.
   - Capture login flow, session cookies, CSRF tokens, redirects, and API preflight behavior.
   - For authenticated assessments, verify that requests remain associated with the intended test account.
   - Note any MFA, token rotation, idle timeout, or device-binding behavior.

4. **Map the application and isolate interesting traffic**
   - Identify high-value requests: authentication, authorization, state change, search, file upload, admin actions, and API mutation endpoints.
   - Send representative requests to Repeater for controlled replay.
   - Group endpoints by function so testing stays organized.
   - For APIs, note content type, auth method, versioning, and expected error shape.

5. **Perform targeted manual manipulation**
   - Modify one variable at a time in Repeater.
   - Compare baseline vs modified responses for status code, body, timing, and side effects.
   - Test parameter trust boundaries, server-side validation, method handling, and access control.
   - For JSON or API traffic, keep payload structure valid while changing only the security-relevant field.
   - For HTTP/2 or modern browser-driven features, confirm Burp is observing the actual protocol path used by the app.

6. **Run narrowly configured automated checks**
   - Scan only in-scope, relevant items.
   - Choose a scan configuration appropriate to the environment’s safety limits.
   - Prefer targeted scans after mapping and authentication validation rather than broad early scans.
   - Watch for logout, rate-limit, lockout, or unstable-session signals during the run.
   - If the app uses recorded login/session handling, verify that Burp is maintaining the intended authenticated state.

7. **Validate, document, and close out**
   - Confirm suspected findings manually before reporting them as real issues.
   - Map findings to OWASP WSTG-style categories where useful.
   - Save the exact request/response evidence needed for reproduction.
   - Record negative results where they materially reduce uncertainty.
   - Remove proxy settings and securely handle captured credentials or tokens after the assessment.

## Examples

### Example 1: Authorization check in a JSON API

**Captured request**

```http
PATCH /api/v1/users/245/role HTTP/2
Host: app.example.test
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json

{"role":"viewer"}
```

**Manual test in Repeater**

Change only the object identifier while keeping the same user session:

```http
PATCH /api/v1/users/246/role HTTP/2
Host: app.example.test
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json

{"role":"admin"}
```

**Expected secure behavior**

```http
HTTP/2 403 Forbidden
Content-Type: application/json

{"error":"insufficient_permissions"}
```

**Concerning behavior**

```http
HTTP/2 200 OK
Content-Type: application/json

{"id":246,"role":"admin","updated":true}
```

Interpretation: this suggests broken object-level or function-level authorization and requires manual confirmation of side effects.

### Example 2: Session handling problem during scanning

**Symptoms during scan**

- scanner results suddenly shift from authenticated pages to login pages
- many findings become duplicates against `/login`
- responses change from `200` application pages to `302` redirects or `401/403`

**Expected operator action**

- pause or narrow the scan
- re-validate the authenticated baseline request in Repeater
- check cookies, anti-CSRF tokens, and session rules
- confirm whether Burp’s login/session handling is still valid

See [examples/review-example.md](examples/review-example.md) for a worked operator log showing baseline capture, replay, and evidence notes.

## Best Practices

- **Do** confirm written scope before intercepting or scanning.  
  **Do not** “discover” scope by browsing arbitrary sibling hosts.

- **Do** use a dedicated browser profile for the assessment.  
  **Do not** mix personal or unrelated corporate traffic into the Burp project.

- **Do** test one security hypothesis at a time in Repeater.  
  **Do not** change multiple request fields at once if you need defensible comparisons.

- **Do** maintain valid syntax for JSON, XML, multipart, and form-encoded bodies.  
  **Do not** treat parser failures as evidence of a meaningful security finding without context.

- **Do** verify authentication continuity before relying on scan output.  
  **Do not** assume a scanner stayed logged in just because the run completed.

- **Do** prefer targeted scans on selected requests or branches.  
  **Do not** launch broad scans against production-like systems without explicit approval.

- **Do** compare response code, body, headers, and side effects.  
  **Do not** judge results from status code alone.

- **Do** capture enough evidence to reproduce the finding later.  
  **Do not** store secrets in notes longer than necessary; redact or minimize where possible.

## Troubleshooting

**Symptoms:** Burp shows little or no application traffic.  
**Solution:** Verify browser proxy settings, Burp listener configuration, and certificate trust. Make sure the app is actually using the proxied browser and not a separate device or native client.

**Symptoms:** Requests appear, but authenticated pages collapse back to login during replay or scanning.  
**Solution:** Re-capture the login flow, confirm cookie/token freshness, check anti-CSRF handling, and validate that the baseline request still works in Repeater before continuing.

**Symptoms:** Many findings target redirects, logout paths, or generic error pages.  
**Solution:** Review scope selection and scan targeting. Remove low-value branches, confirm session continuity, and re-run only the relevant authenticated locations.

**Symptoms:** Modified requests return parser errors instead of business-logic differences.  
**Solution:** Keep the original request structure intact. Change only the field under test and preserve content type, encoding, delimiters, and required fields.

**Symptoms:** The application behaves differently than expected under HTTP/2 or API testing.  
**Solution:** Confirm the protocol path and endpoint behavior you are actually exercising. Compare the live browser request to the Repeater request and check whether headers, pseudo-header behavior, or transport assumptions changed.

**Symptoms:** Scanner activity causes lockouts, rate limiting, or unstable sessions.  
**Solution:** Stop or narrow the scan, document the safety event, lower request volume if allowed, and resume only after confirming approved limits with the owner.

## Additional Resources

- [references/review-criteria.md](references/review-criteria.md) — open this when you need a compact review matrix for scope control, session-aware testing, HTTP/API checkpoints, and stop/escalate decisions.
- [examples/review-example.md](examples/review-example.md) — open this when you want a worked example of request capture, replay, comparison, and evidence writing.
- [assets/schema-map.json](assets/schema-map.json) — open or parse this when dealing with API payload types, auth placement, and replay cautions for common request patterns.

## Related Skills

No related local skills were provided in the source context.
