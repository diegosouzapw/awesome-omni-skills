---
name: idor-testing
description: "IDOR Vulnerability Testing workflow skill. Use this skill when the user needs Provide systematic methodologies for identifying and exploiting Insecure Direct Object Reference (IDOR) vulnerabilities in web applications and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["idor-testing", "provide", "systematic", "methodologies", "for", "identifying", "and", "exploiting"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# IDOR Vulnerability Testing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/idor-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # IDOR Vulnerability Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs / Prerequisites, Outputs / Deliverables, Constraints and Limitations, Remediation Guidance.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Provide systematic methodologies for identifying and exploiting Insecure Direct Object Reference (IDOR) vulnerabilities in web applications.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Numeric IDs in URLs: /api/user/123
2. Numeric IDs in parameters: ?id=123&action=view
3. Numeric IDs in request body: {"userId": 123}
4. File paths: /download/receipt_123.pdf
5. GUIDs/UUIDs: /profile/a1b2c3d4-e5f6-...
6. Configure browser proxy through Burp Suite
7. Login as "attacker" user

### Imported Workflow Notes

#### Imported: Core Workflow

### 1. Understand IDOR Vulnerability Types

#### Direct Reference to Database Objects
Occurs when applications reference database records via user-controllable parameters:
```
# Original URL (authenticated as User A)
example.com/user/profile?id=2023

# Manipulation attempt (accessing User B's data)
example.com/user/profile?id=2022
```

#### Direct Reference to Static Files
Occurs when applications expose file paths or names that can be enumerated:
```
# Original URL (User A's receipt)
example.com/static/receipt/205.pdf

# Manipulation attempt (User B's receipt)
example.com/static/receipt/200.pdf
```

### 2. Reconnaissance and Setup

#### Create Multiple Test Accounts
```
Account 1: "attacker" - Primary testing account
Account 2: "victim" - Account whose data we attempt to access
```

#### Identify Object References
Capture and analyze requests containing:
- Numeric IDs in URLs: `/api/user/123`
- Numeric IDs in parameters: `?id=123&action=view`
- Numeric IDs in request body: `{"userId": 123}`
- File paths: `/download/receipt_123.pdf`
- GUIDs/UUIDs: `/profile/a1b2c3d4-e5f6-...`

#### Map User IDs
```
# Access user ID endpoint (if available)
GET /api/user-id/

# Note ID patterns:
# - Sequential integers (1, 2, 3...)
# - Auto-incremented values
# - Predictable patterns
```

### 3. Detection Techniques

#### URL Parameter Manipulation
```
# Step 1: Capture original authenticated request
GET /api/user/profile?id=1001 HTTP/1.1
Cookie: session=attacker_session

# Step 2: Modify ID to target another user
GET /api/user/profile?id=1000 HTTP/1.1
Cookie: session=attacker_session

# Vulnerable if: Returns victim's data with attacker's session
```

#### Request Body Manipulation
```
# Original POST request
POST /api/address/update HTTP/1.1
Content-Type: application/json
Cookie: session=attacker_session

{"id": 5, "userId": 1001, "address": "123 Attacker St"}

# Modified request targeting victim
{"id": 5, "userId": 1000, "address": "123 Attacker St"}
```

#### HTTP Method Switching
```
# Original GET request may be protected
GET /api/admin/users/1000 → 403 Forbidden

# Try alternative methods
POST /api/admin/users/1000 → 200 OK (Vulnerable!)
PUT /api/admin/users/1000 → 200 OK (Vulnerable!)
```

### 4. Exploitation with Burp Suite

#### Manual Exploitation
```
1. Configure browser proxy through Burp Suite
2. Login as "attacker" user
3. Navigate to profile/data page
4. Enable Intercept in Proxy tab
5. Capture request with user ID
6. Modify ID to victim's ID
7. Forward request
8. Observe response for victim's data
```

#### Automated Enumeration with Intruder
```
1. Send request to Intruder (Ctrl+I)
2. Clear all payload positions
3. Select ID parameter as payload position
4. Configure attack type: Sniper
5. Payload settings:
   - Type: Numbers
   - Range: 1 to 10000
   - Step: 1
6. Start attack
7. Analyze responses for 200 status codes
```

#### Battering Ram Attack for Multiple Positions
```
# When same ID appears in multiple locations
PUT /api/addresses/§5§/update HTTP/1.1

{"id": §5§, "userId": 3}

Attack Type: Battering Ram
Payload: Numbers 1-1000
```

### 5. Common IDOR Locations

#### API Endpoints
```
/api/user/{id}
/api/profile/{id}
/api/order/{id}
/api/invoice/{id}
/api/document/{id}
/api/message/{id}
/api/address/{id}/update
/api/address/{id}/delete
```

#### File Downloads
```
/download/invoice_{id}.pdf
/static/receipts/{id}.pdf
/uploads/documents/{filename}
/files/reports/report_{date}_{id}.xlsx
```

#### Query Parameters
```
?userId=123
?orderId=456
?documentId=789
?file=report_123.pdf
?account=user@email.com
```

#### Imported: Purpose

Provide systematic methodologies for identifying and exploiting Insecure Direct Object Reference (IDOR) vulnerabilities in web applications. This skill covers both database object references and static file references, detection techniques using parameter manipulation and enumeration, exploitation via Burp Suite, and remediation strategies for securing applications against unauthorized access.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @idor-testing to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @idor-testing against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @idor-testing for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @idor-testing using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Basic ID Parameter IDOR
```
# Login as attacker (userId=1001)
# Navigate to profile page

# Original request
GET /api/profile?id=1001 HTTP/1.1
Cookie: session=abc123

# Response: Attacker's profile data

# Modified request (targeting victim userId=1000)
GET /api/profile?id=1000 HTTP/1.1
Cookie: session=abc123

# Vulnerable Response: Victim's profile data returned!
```

### Example 2: IDOR in Address Update Endpoint
```
# Intercept address update request
PUT /api/addresses/5/update HTTP/1.1
Content-Type: application/json
Cookie: session=attacker_session

{
  "id": 5,
  "userId": 1001,
  "street": "123 Main St",
  "city": "Test City"
}

# Modify userId to victim's ID
{
  "id": 5,
  "userId": 1000,  # Changed from 1001
  "street": "Hacked Address",
  "city": "Exploit City"
}

# If 200 OK: Address created under victim's account
```

### Example 3: Static File IDOR
```
# Download own receipt
GET /api/download/5 HTTP/1.1
Cookie: session=attacker_session

# Response: PDF of attacker's receipt (order #5)

# Attempt to access other receipts
GET /api/download/3 HTTP/1.1
Cookie: session=attacker_session

# Vulnerable Response: PDF of victim's receipt (order #3)!
```

### Example 4: Burp Intruder Enumeration
```
# Configure Intruder attack
Target: PUT /api/addresses/§1§/update
Payload Position: Address ID in URL and body

Attack Configuration:
- Type: Battering Ram
- Payload: Numbers 0-20, Step 1

Body Template:
{
  "id": §1§,
  "userId": 3
}

# Analyze results:
# - 200 responses indicate successful modification
# - Check victim's account for new addresses
```

### Example 5: Horizontal to Vertical Escalation
```
# Step 1: Enumerate user roles
GET /api/user/1 → {"role": "user", "id": 1}
GET /api/user/2 → {"role": "user", "id": 2}
GET /api/user/3 → {"role": "admin", "id": 3}

# Step 2: Access admin functions with discovered ID
GET /api/admin/dashboard?userId=3 HTTP/1.1
Cookie: session=regular_user_session

# If accessible: Vertical privilege escalation achieved
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/idor-testing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Issue: All Requests Return 403 Forbidden
**Cause**: Server-side access control is implemented
**Solution**:
```
# Try alternative attack vectors:
1. HTTP method switching (GET → POST → PUT)
2. Add X-Original-URL or X-Rewrite-URL headers
3. Try parameter pollution: ?id=1001&id=1000
4. URL encoding variations: %31%30%30%30 for "1000"
5. Case variations for string IDs
```

### Issue: Application Uses UUIDs Instead of Sequential IDs
**Cause**: Randomized identifiers reduce enumeration risk
**Solution**:
```
# UUID discovery techniques:
1. Check response bodies for leaked UUIDs
2. Search JavaScript files for hardcoded UUIDs
3. Check API responses that list multiple objects
4. Look for UUID patterns in error messages
5. Try UUID v1 (time-based) prediction if applicable
```

### Issue: Session Token Bound to User
**Cause**: Application validates session against requested resource
**Solution**:
```
# Advanced bypass attempts:
1. Test for IDOR in unauthenticated endpoints
2. Check password reset/email verification flows
3. Look for IDOR in file upload/download
4. Test API versioning: /api/v1/ vs /api/v2/
5. Check mobile API endpoints (often less protected)
```

### Issue: Rate Limiting Blocks Enumeration
**Cause**: Application implements request throttling
**Solution**:
```
# Bypass techniques:
1. Add delays between requests (Burp Intruder throttle)
2. Rotate IP addresses (proxy chains)
3. Target specific high-value IDs instead of full range
4. Use different endpoints for same resources
5. Test during off-peak hours
```

### Issue: Cannot Verify IDOR Impact
**Cause**: Response doesn't clearly indicate data ownership
**Solution**:
```
# Verification methods:
1. Create unique identifiable data in victim account
2. Look for PII markers (name, email) in responses
3. Compare response lengths between users
4. Check for timing differences in responses
5. Use secondary indicators (creation dates, metadata)
```

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Quick Reference

### IDOR Testing Checklist

| Test | Method | Indicator of Vulnerability |
|------|--------|---------------------------|
| Increment/Decrement ID | Change `id=5` to `id=4` | Returns different user's data |
| Use Victim's ID | Replace with known victim ID | Access granted to victim's resources |
| Enumerate Range | Test IDs 1-1000 | Find valid records of other users |
| Negative Values | Test `id=-1` or `id=0` | Unexpected data or errors |
| Large Values | Test `id=99999999` | System information disclosure |
| String IDs | Change format `id=user_123` | Logic bypass |
| GUID Manipulation | Modify UUID portions | Predictable UUID patterns |

### Response Analysis

| Status Code | Interpretation |
|-------------|----------------|
| 200 OK | Potential IDOR - verify data ownership |
| 403 Forbidden | Access control working |
| 404 Not Found | Resource doesn't exist |
| 401 Unauthorized | Authentication required |
| 500 Error | Potential input validation issue |

### Common Vulnerable Parameters

| Parameter Type | Examples |
|----------------|----------|
| User identifiers | `userId`, `uid`, `user_id`, `account` |
| Resource identifiers | `id`, `pid`, `docId`, `fileId` |
| Order/Transaction | `orderId`, `transactionId`, `invoiceId` |
| Message/Communication | `messageId`, `threadId`, `chatId` |
| File references | `filename`, `file`, `document`, `path` |

#### Imported: Inputs / Prerequisites

- **Target Web Application**: URL of application with user-specific resources
- **Multiple User Accounts**: At least two test accounts to verify cross-user access
- **Burp Suite or Proxy Tool**: Intercepting proxy for request manipulation
- **Authorization**: Written permission for security testing
- **Understanding of Application Flow**: Knowledge of how objects are referenced (IDs, filenames)

#### Imported: Outputs / Deliverables

- **IDOR Vulnerability Report**: Documentation of discovered access control bypasses
- **Proof of Concept**: Evidence of unauthorized data access across user contexts
- **Affected Endpoints**: List of vulnerable API endpoints and parameters
- **Impact Assessment**: Classification of data exposure severity
- **Remediation Recommendations**: Specific fixes for identified vulnerabilities

#### Imported: Constraints and Limitations

### Operational Boundaries
- Requires at least two valid user accounts for verification
- Some applications use session-bound tokens instead of IDs
- GUID/UUID references harder to enumerate but not impossible
- Rate limiting may restrict enumeration attempts
- Some IDOR requires chained vulnerabilities to exploit

### Detection Challenges
- Horizontal privilege escalation (user-to-user) vs vertical (user-to-admin)
- Blind IDOR where response doesn't confirm access
- Time-based IDOR in asynchronous operations
- IDOR in websocket communications

### Legal Requirements
- Only test applications with explicit authorization
- Document all testing activities and findings
- Do not access, modify, or exfiltrate real user data
- Report findings through proper disclosure channels

#### Imported: Remediation Guidance

### Implement Proper Access Control
```python
# Django example - validate ownership
def update_address(request, address_id):
    address = Address.objects.get(id=address_id)

    # Verify ownership before allowing update
    if address.user != request.user:
        return HttpResponseForbidden("Unauthorized")

    # Proceed with update
    address.update(request.data)
```

### Use Indirect References
```python
# Instead of: /api/address/123
# Use: /api/address/current-user/billing

def get_address(request):
    # Always filter by authenticated user
    address = Address.objects.filter(user=request.user).first()
    return address
```

### Server-Side Validation
```python
# Always validate on server, never trust client input
def download_receipt(request, receipt_id):
    receipt = Receipt.objects.filter(
        id=receipt_id,
        user=request.user  # Critical: filter by current user
    ).first()

    if not receipt:
        return HttpResponseNotFound()

    return FileResponse(receipt.file)
```
