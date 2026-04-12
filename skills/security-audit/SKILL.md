---
name: security-audit
description: "Security Auditing Workflow Bundle workflow skill. Use this skill when the user needs Comprehensive security auditing workflow covering web application testing, API security, penetration testing, vulnerability scanning, and security hardening and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["security-audit", "comprehensive", "security", "auditing", "covering", "web", "application", "testing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Security Auditing Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/security-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Security Auditing Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Security Testing Checklist, Quality Gates.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Performing security audits on web applications
- Testing API security
- Conducting penetration tests
- Scanning for vulnerabilities
- Hardening application security
- Compliance security assessments

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

1. scanning-tools - Security scanning
2. shodan-reconnaissance - Shodan searches
3. top-web-vulnerabilities - OWASP Top 10
4. Identify target scope
5. Gather intelligence
6. Map attack surface
7. Identify technologies

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Reconnaissance

#### Skills to Invoke
- `scanning-tools` - Security scanning
- `shodan-reconnaissance` - Shodan searches
- `top-web-vulnerabilities` - OWASP Top 10

#### Actions
1. Identify target scope
2. Gather intelligence
3. Map attack surface
4. Identify technologies
5. Document findings

#### Copy-Paste Prompts
```
Use @scanning-tools to perform initial reconnaissance
```

```
Use @shodan-reconnaissance to find exposed services
```

### Phase 2: Vulnerability Scanning

#### Skills to Invoke
- `vulnerability-scanner` - Vulnerability analysis
- `security-scanning-security-sast` - Static analysis
- `security-scanning-security-dependencies` - Dependency scanning

#### Actions
1. Run automated scanners
2. Perform static analysis
3. Scan dependencies
4. Identify misconfigurations
5. Document vulnerabilities

#### Copy-Paste Prompts
```
Use @vulnerability-scanner to scan for OWASP Top 10 vulnerabilities
```

```
Use @security-scanning-security-dependencies to audit dependencies
```

### Phase 3: Web Application Testing

#### Skills to Invoke
- `top-web-vulnerabilities` - OWASP vulnerabilities
- `sql-injection-testing` - SQL injection
- `xss-html-injection` - XSS testing
- `broken-authentication` - Authentication testing
- `idor-testing` - IDOR testing
- `file-path-traversal` - Path traversal
- `burp-suite-testing` - Burp Suite testing

#### Actions
1. Test for injection flaws
2. Test authentication mechanisms
3. Test session management
4. Test access controls
5. Test input validation
6. Test security headers

#### Copy-Paste Prompts
```
Use @sql-injection-testing to test for SQL injection vulnerabilities
```

```
Use @xss-html-injection to test for cross-site scripting
```

```
Use @broken-authentication to test authentication security
```

### Phase 4: API Security Testing

#### Skills to Invoke
- `api-fuzzing-bug-bounty` - API fuzzing
- `api-security-best-practices` - API security

#### Actions
1. Enumerate API endpoints
2. Test authentication/authorization
3. Test rate limiting
4. Test input validation
5. Test error handling
6. Document API vulnerabilities

#### Copy-Paste Prompts
```
Use @api-fuzzing-bug-bounty to fuzz API endpoints
```

### Phase 5: Penetration Testing

#### Skills to Invoke
- `pentest-commands` - Penetration testing commands
- `pentest-checklist` - Pentest planning
- `ethical-hacking-methodology` - Ethical hacking
- `metasploit-framework` - Metasploit

#### Actions
1. Plan penetration test
2. Execute attack scenarios
3. Exploit vulnerabilities
4. Document proof of concept
5. Assess impact

#### Copy-Paste Prompts
```
Use @pentest-checklist to plan penetration test
```

```
Use @pentest-commands to execute penetration testing
```

### Phase 6: Security Hardening

#### Skills to Invoke
- `security-scanning-security-hardening` - Security hardening
- `auth-implementation-patterns` - Authentication
- `api-security-best-practices` - API security

#### Actions
1. Implement security controls
2. Configure security headers
3. Set up authentication
4. Implement authorization
5. Configure logging
6. Apply patches

#### Copy-Paste Prompts
```
Use @security-scanning-security-hardening to harden application security
```

### Phase 7: Reporting

#### Skills to Invoke
- `reporting-standards` - Security reporting

#### Actions
1. Document findings
2. Assess risk levels
3. Provide remediation steps
4. Create executive summary
5. Generate technical report

#### Imported: Related Workflow Bundles

- `development` - Secure development practices
- `wordpress` - WordPress security
- `cloud-devops` - Cloud security
- `testing-qa` - Security testing

#### Imported: Overview

Comprehensive security auditing workflow for web applications, APIs, and infrastructure. This bundle orchestrates skills for penetration testing, vulnerability assessment, security scanning, and remediation.

#### Imported: Security Testing Checklist

### OWASP Top 10
- [ ] Injection (SQL, NoSQL, OS, LDAP)
- [ ] Broken Authentication
- [ ] Sensitive Data Exposure
- [ ] XML External Entities (XXE)
- [ ] Broken Access Control
- [ ] Security Misconfiguration
- [ ] Cross-Site Scripting (XSS)
- [ ] Insecure Deserialization
- [ ] Using Components with Known Vulnerabilities
- [ ] Insufficient Logging & Monitoring

### API Security
- [ ] Authentication mechanisms
- [ ] Authorization checks
- [ ] Rate limiting
- [ ] Input validation
- [ ] Error handling
- [ ] Security headers

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @security-audit to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/security-audit/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/security-audit/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @security-audit using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/security-audit`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Quality Gates

- [ ] All planned tests executed
- [ ] Vulnerabilities documented
- [ ] Proof of concepts captured
- [ ] Risk assessments completed
- [ ] Remediation steps provided
- [ ] Report generated
