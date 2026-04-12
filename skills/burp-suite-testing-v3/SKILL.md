---
name: burp-suite-testing-v3
description: "Burp Suite Web Application Testing workflow skill. Use this skill when the user needs Execute comprehensive web application security testing using Burp Suite's integrated toolset, including HTTP traffic interception and modification, request analysis and replay, automated vulnerability scanning, and manual testing workflows and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["burp-suite-testing-v3", "burp-suite-testing", "execute", "comprehensive", "web", "application", "security", "testing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Burp Suite Web Application Testing

## Overview

This public intake copy packages `plugins/antigravity-bundle-security-engineer/skills/burp-suite-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # Burp Suite Web Application Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs / Prerequisites, Outputs / Deliverables.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Execute comprehensive web application security testing using Burp Suite's integrated toolset, including HTTP traffic interception and modification, request analysis and replay, automated vulnerability scanning, and....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Open Burp Suite and create/open project
2. Go to Proxy > Intercept tab
3. Click Open Browser to launch preconfigured browser
4. Position windows to view both Burp and browser simultaneously
5. Set intercept toggle to Intercept on
6. Navigate to target URL in browser
7. Observe request held in Proxy > Intercept tab

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: Intercepting HTTP Traffic

#### Launch Burp's Browser
Navigate to integrated browser for seamless proxy integration:

1. Open Burp Suite and create/open project
2. Go to **Proxy > Intercept** tab
3. Click **Open Browser** to launch preconfigured browser
4. Position windows to view both Burp and browser simultaneously

#### Configure Interception
Control which requests are captured:

```
Proxy > Intercept > Intercept is on/off toggle

When ON: Requests pause for review/modification
When OFF: Requests pass through, logged to history
```

#### Intercept and Forward Requests
Process intercepted traffic:

1. Set intercept toggle to **Intercept on**
2. Navigate to target URL in browser
3. Observe request held in Proxy > Intercept tab
4. Review request contents (headers, parameters, body)
5. Click **Forward** to send request to server
6. Continue forwarding subsequent requests until page loads

#### View HTTP History
Access complete traffic log:

1. Go to **Proxy > HTTP history** tab
2. Click any entry to view full request/response
3. Sort by clicking column headers (# for chronological order)
4. Use filters to focus on relevant traffic

### Phase 2: Modifying Requests

#### Intercept and Modify
Change request parameters before forwarding:

1. Enable interception: **Intercept on**
2. Trigger target request in browser
3. Locate parameter to modify in intercepted request
4. Edit value directly in request editor
5. Click **Forward** to send modified request

#### Common Modification Targets
| Target | Example | Purpose |
|--------|---------|---------|
| Price parameters | `price=1` | Test business logic |
| User IDs | `userId=admin` | Test access control |
| Quantity values | `qty=-1` | Test input validation |
| Hidden fields | `isAdmin=true` | Test privilege escalation |

#### Example: Price Manipulation

```http
POST /cart HTTP/1.1
Host: target.com
Content-Type: application/x-www-form-urlencoded

productId=1&quantity=1&price=100

# Modify to:
productId=1&quantity=1&price=1
```

Result: Item added to cart at modified price.

### Phase 3: Setting Target Scope

#### Define Scope
Focus testing on specific target:

1. Go to **Target > Site map**
2. Right-click target host in left panel
3. Select **Add to scope**
4. When prompted, click **Yes** to exclude out-of-scope traffic

#### Filter by Scope
Remove noise from HTTP history:

1. Click display filter above HTTP history
2. Select **Show only in-scope items**
3. History now shows only target site traffic

#### Scope Benefits
- Reduces clutter from third-party requests
- Prevents accidental testing of out-of-scope sites
- Improves scanning efficiency
- Creates cleaner reports

### Phase 4: Using Burp Repeater

#### Send Request to Repeater
Prepare request for manual testing:

1. Identify interesting request in HTTP history
2. Right-click request and select **Send to Repeater**
3. Go to **Repeater** tab to access request

#### Modify and Resend
Test different inputs efficiently:

```
1. View request in Repeater tab
2. Modify parameter values
3. Click Send to submit request
4. Review response in right panel
5. Use navigation arrows to review request history
```

#### Repeater Testing Workflow

```
Original Request:
GET /product?productId=1 HTTP/1.1

Test 1: productId=2    → Valid product response
Test 2: productId=999  → Not Found response  
Test 3: productId='    → Error/exception response
Test 4: productId=1 OR 1=1 → SQL injection test
```

#### Analyze Responses
Look for indicators of vulnerabilities:

- Error messages revealing stack traces
- Framework/version information disclosure
- Different response lengths indicating logic flaws
- Timing differences suggesting blind injection
- Unexpected data in responses

### Phase 5: Running Automated Scans

#### Launch New Scan
Initiate vulnerability scanning (Professional only):

1. Go to **Dashboard** tab
2. Click **New scan**
3. Enter target URL in **URLs to scan** field
4. Configure scan settings

#### Scan Configuration Options

| Mode | Description | Duration |
|------|-------------|----------|
| Lightweight | High-level overview | ~15 minutes |
| Fast | Quick vulnerability check | ~30 minutes |
| Balanced | Standard comprehensive scan | ~1-2 hours |
| Deep | Thorough testing | Several hours |

#### Monitor Scan Progress
Track scanning activity:

1. View task status in **Dashboard**
2. Watch **Target > Site map** update in real-time
3. Check **Issues** tab for discovered vulnerabilities

#### Review Identified Issues
Analyze scan findings:

1. Select scan task in Dashboard
2. Go to **Issues** tab
3. Click issue to view:
   - **Advisory**: Description and remediation
   - **Request**: Triggering HTTP request
   - **Response**: Server response showing vulnerability

### Phase 6: Intruder Attacks

#### Configure Intruder
Set up automated attack:

1. Send request to Intruder (right-click > Send to Intruder)
2. Go to **Intruder** tab
3. Define payload positions using § markers
4. Select attack type

#### Attack Types

| Type | Description | Use Case |
|------|-------------|----------|
| Sniper | Single position, iterate payloads | Fuzzing one parameter |
| Battering ram | Same payload all positions | Credential testing |
| Pitchfork | Parallel payload iteration | Username:password pairs |
| Cluster bomb | All payload combinations | Full brute force |

#### Configure Payloads

```
Positions Tab:
POST /login HTTP/1.1
...
username=§admin§&password=§password§

Payloads Tab:
Set 1: admin, user, test, guest
Set 2: password, 123456, admin, letmein
```

#### Analyze Results
Review attack output:

- Sort by response length to find anomalies
- Filter by status code for successful attempts
- Use grep to search for specific strings
- Export results for documentation

#### Imported: Purpose

Execute comprehensive web application security testing using Burp Suite's integrated toolset, including HTTP traffic interception and modification, request analysis and replay, automated vulnerability scanning, and manual testing workflows. This skill enables systematic discovery and exploitation of web application vulnerabilities through proxy-based testing methodology.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @burp-suite-testing-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/burp-suite-testing-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/burp-suite-testing-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @burp-suite-testing-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Business Logic Testing

**Scenario**: E-commerce price manipulation

1. Add item to cart normally, intercept request
2. Identify `price=9999` parameter in POST body
3. Modify to `price=1`
4. Forward request
5. Complete checkout at manipulated price

**Finding**: Server trusts client-provided price values.

### Example 2: Authentication Bypass

**Scenario**: Testing login form

1. Submit valid credentials, capture request in Repeater
2. Send to Repeater for testing
3. Try: `username=admin' OR '1'='1'--`
4. Observe successful login response

**Finding**: SQL injection in authentication.

### Example 3: Information Disclosure

**Scenario**: Error-based information gathering

1. Navigate to product page, observe `productId` parameter
2. Send request to Repeater
3. Change `productId=1` to `productId=test`
4. Observe verbose error revealing framework version

**Finding**: Apache Struts 2.5.12 disclosed in stack trace.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Test only authorized applications
- Configure scope to prevent accidental out-of-scope testing
- Rate-limit scans to avoid denial of service
- Document all findings and actions
- Community Edition lacks automated scanner
- Some sites may block proxy traffic
- HSTS/certificate pinning may require additional configuration

### Imported Operating Notes

#### Imported: Constraints and Guardrails

### Operational Boundaries
- Test only authorized applications
- Configure scope to prevent accidental out-of-scope testing
- Rate-limit scans to avoid denial of service
- Document all findings and actions

### Technical Limitations
- Community Edition lacks automated scanner
- Some sites may block proxy traffic
- HSTS/certificate pinning may require additional configuration
- Heavy scanning may trigger WAF blocks

### Best Practices
- Always set target scope before extensive testing
- Use Burp's browser for reliable interception
- Save project regularly to preserve work
- Review scan results manually for false positives

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-security-engineer/skills/burp-suite-testing`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Browser Not Connecting Through Proxy
- Verify proxy listener is active (Proxy > Options)
- Check browser proxy settings point to 127.0.0.1:8080
- Ensure no firewall blocking local connections
- Use Burp's embedded browser for reliable setup

### HTTPS Interception Failing
- Install Burp CA certificate in browser/system
- Navigate to http://burp to download certificate
- Add certificate to trusted roots
- Restart browser after installation

### Slow Performance
- Limit scope to reduce processing
- Disable unnecessary extensions
- Increase Java heap size in startup options
- Close unused Burp tabs and features

### Requests Not Being Intercepted
- Verify "Intercept on" is enabled
- Check intercept rules aren't filtering target
- Ensure browser is using Burp proxy
- Verify target isn't using unsupported protocol

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Quick Reference

### Keyboard Shortcuts
| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Forward request | Ctrl+F | Cmd+F |
| Drop request | Ctrl+D | Cmd+D |
| Send to Repeater | Ctrl+R | Cmd+R |
| Send to Intruder | Ctrl+I | Cmd+I |
| Toggle intercept | Ctrl+T | Cmd+T |

### Common Testing Payloads

```
# SQL Injection
' OR '1'='1
' OR '1'='1'--
1 UNION SELECT NULL--

# XSS
<script>alert(1)</script>
"><img src=x onerror=alert(1)>
javascript:alert(1)

# Path Traversal
../../../etc/passwd
..\..\..\..\windows\win.ini

# Command Injection
; ls -la
| cat /etc/passwd
`whoami`
```

### Request Modification Tips
- Right-click for context menu options
- Use decoder for encoding/decoding
- Compare requests using Comparer tool
- Save interesting requests to project

#### Imported: Inputs / Prerequisites

### Required Tools
- Burp Suite Community or Professional Edition installed
- Burp's embedded browser or configured external browser
- Target web application URL
- Valid credentials for authenticated testing (if applicable)

### Environment Setup
- Burp Suite launched with temporary or named project
- Proxy listener active on 127.0.0.1:8080 (default)
- Browser configured to use Burp proxy (or use Burp's browser)
- CA certificate installed for HTTPS interception

### Editions Comparison
| Feature | Community | Professional |
|---------|-----------|--------------|
| Proxy | ✓ | ✓ |
| Repeater | ✓ | ✓ |
| Intruder | Limited | Full |
| Scanner | ✗ | ✓ |
| Extensions | ✓ | ✓ |

#### Imported: Outputs / Deliverables

### Primary Outputs
- Intercepted and modified HTTP requests/responses
- Vulnerability scan reports with remediation advice
- HTTP history and site map documentation
- Proof-of-concept exploits for identified vulnerabilities
