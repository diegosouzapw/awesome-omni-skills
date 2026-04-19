---
name: web-security-testing
description: "Web Security Testing Workflow workflow skill. Use this skill when the user needs Web application security testing workflow for OWASP Top 10 vulnerabilities including injection, XSS, authentication flaws, and access control issues and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["web-security-testing", "web", "application", "security", "testing", "for", "owasp", "top"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Web Security Testing Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/web-security-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Web Security Testing Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: OWASP Top 10 Checklist, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Testing web application security
- Performing OWASP Top 10 assessment
- Conducting penetration tests
- Validating security controls
- Bug bounty hunting
- Use when the request clearly matches the imported source intent: Web application security testing workflow for OWASP Top 10 vulnerabilities including injection, XSS, authentication flaws, and access control issues.

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

1. scanning-tools - Security scanning
2. top-web-vulnerabilities - OWASP knowledge
3. Map application surface
4. Identify technologies
5. Discover endpoints
6. Find subdomains
7. Document findings

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Reconnaissance

#### Skills to Invoke
- `scanning-tools` - Security scanning
- `top-web-vulnerabilities` - OWASP knowledge

#### Actions
1. Map application surface
2. Identify technologies
3. Discover endpoints
4. Find subdomains
5. Document findings

#### Copy-Paste Prompts
```
Use @scanning-tools to perform web application reconnaissance
```

### Phase 2: Injection Testing

#### Skills to Invoke
- `sql-injection-testing` - SQL injection
- `sqlmap-database-pentesting` - SQLMap

#### Actions
1. Test SQL injection
2. Test NoSQL injection
3. Test command injection
4. Test LDAP injection
5. Document vulnerabilities

#### Copy-Paste Prompts
```
Use @sql-injection-testing to test for SQL injection
```

```
Use @sqlmap-database-pentesting to automate SQL injection testing
```

### Phase 3: XSS Testing

#### Skills to Invoke
- `xss-html-injection` - XSS testing
- `html-injection-testing` - HTML injection

#### Actions
1. Test reflected XSS
2. Test stored XSS
3. Test DOM-based XSS
4. Test XSS filters
5. Document findings

#### Copy-Paste Prompts
```
Use @xss-html-injection to test for cross-site scripting
```

### Phase 4: Authentication Testing

#### Skills to Invoke
- `broken-authentication` - Authentication testing

#### Actions
1. Test credential stuffing
2. Test brute force protection
3. Test session management
4. Test password policies
5. Test MFA implementation

#### Copy-Paste Prompts
```
Use @broken-authentication to test authentication security
```

### Phase 5: Access Control Testing

#### Skills to Invoke
- `idor-testing` - IDOR testing
- `file-path-traversal` - Path traversal

#### Actions
1. Test vertical privilege escalation
2. Test horizontal privilege escalation
3. Test IDOR vulnerabilities
4. Test directory traversal
5. Test unauthorized access

#### Copy-Paste Prompts
```
Use @idor-testing to test for insecure direct object references
```

```
Use @file-path-traversal to test for path traversal
```

### Phase 6: Security Headers

#### Skills to Invoke
- `api-security-best-practices` - Security headers

#### Actions
1. Check CSP implementation
2. Verify HSTS configuration
3. Test X-Frame-Options
4. Check X-Content-Type-Options
5. Verify referrer policy

#### Copy-Paste Prompts
```
Use @api-security-best-practices to audit security headers
```

### Phase 7: Reporting

#### Skills to Invoke
- `reporting-standards` - Security reporting

#### Actions
1. Document vulnerabilities
2. Assess risk levels
3. Provide remediation
4. Create proof of concept
5. Generate report

#### Copy-Paste Prompts
```
Use @reporting-standards to create security report
```

#### Imported: Related Workflow Bundles

- `security-audit` - Security auditing
- `api-security-testing` - API security
- `wordpress-security` - WordPress security

#### Imported: Overview

Specialized workflow for testing web applications against OWASP Top 10 vulnerabilities including injection attacks, XSS, broken authentication, and access control issues.

#### Imported: OWASP Top 10 Checklist

- [ ] A01: Broken Access Control
- [ ] A02: Cryptographic Failures
- [ ] A03: Injection
- [ ] A04: Insecure Design
- [ ] A05: Security Misconfiguration
- [ ] A06: Vulnerable Components
- [ ] A07: Authentication Failures
- [ ] A08: Software/Data Integrity
- [ ] A09: Logging/Monitoring
- [ ] A10: SSRF

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @web-security-testing to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @web-security-testing against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @web-security-testing for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @web-security-testing using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/web-security-testing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Quality Gates

- [ ] All OWASP Top 10 tested
- [ ] Vulnerabilities documented
- [ ] Proof of concepts captured
- [ ] Remediation provided
- [ ] Report generated

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
