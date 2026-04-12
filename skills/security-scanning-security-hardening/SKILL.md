---
name: security-scanning-security-hardening
description: "security-scanning-security-hardening workflow skill. Use this skill when the user needs Coordinate multi-layer security scanning and hardening across application, infrastructure, and compliance controls and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["security-scanning-security-hardening", "coordinate", "multi-layer", "security", "scanning", "and", "hardening", "across"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# security-scanning-security-hardening

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/security-scanning-security-hardening` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

Implement comprehensive security hardening with defense-in-depth strategy through coordinated multi-agent orchestration: [Extended thinking: This workflow implements a defense-in-depth security strategy across all application layers. It coordinates specialized security agents to perform comprehensive assessments, implement layered security controls, and establish continuous security monitoring. The approach follows modern DevSecOps principles with shift-left security, automated scanning, and compliance validation. Each phase builds upon previous findings to create a resilient security posture that addresses both current vulnerabilities and future threats.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, Phase 1: Comprehensive Security Assessment, Phase 2: Vulnerability Remediation, Phase 3: Security Controls Implementation, Phase 4: Validation and Compliance, Configuration Options.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Running a coordinated security hardening program
- Establishing defense-in-depth controls across app, infra, and CI/CD
- Prioritizing remediation from scans and threat modeling
- You only need a quick scan without remediation work
- You lack authorization for security testing or changes
- The environment cannot tolerate invasive security controls

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

1. Execute Phase 1 to establish a security baseline.
2. Apply Phase 2 remediations for high-risk issues.
3. Implement Phase 3 controls and validate defenses.
4. Complete Phase 4 validation and compliance checks.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

1. Execute Phase 1 to establish a security baseline.
2. Apply Phase 2 remediations for high-risk issues.
3. Implement Phase 3 controls and validate defenses.
4. Complete Phase 4 validation and compliance checks.

#### Imported: Safety

- Avoid intrusive testing in production without approval.
- Ensure rollback plans exist before hardening changes.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @security-scanning-security-hardening to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/security-scanning-security-hardening/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/security-scanning-security-hardening/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @security-scanning-security-hardening using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/security-scanning-security-hardening`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Phase 1: Comprehensive Security Assessment

### 1. Initial Vulnerability Scanning
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Perform comprehensive security assessment on: $ARGUMENTS. Execute SAST analysis with Semgrep/SonarQube, DAST scanning with OWASP ZAP, dependency audit with Snyk/Trivy, secrets detection with GitLeaks/TruffleHog. Generate SBOM for supply chain analysis. Identify OWASP Top 10 vulnerabilities, CWE weaknesses, and CVE exposures."
- Output: Detailed vulnerability report with CVSS scores, exploitability analysis, attack surface mapping, secrets exposure report, SBOM inventory
- Context: Initial baseline for all remediation efforts

### 2. Threat Modeling and Risk Analysis
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Conduct threat modeling using STRIDE methodology for: $ARGUMENTS. Analyze attack vectors, create attack trees, assess business impact of identified vulnerabilities. Map threats to MITRE ATT&CK framework. Prioritize risks based on likelihood and impact."
- Output: Threat model diagrams, risk matrix with prioritized vulnerabilities, attack scenario documentation, business impact analysis
- Context: Uses vulnerability scan results to inform threat priorities

### 3. Architecture Security Review
- Use Task tool with subagent_type="backend-api-security::backend-architect"
- Prompt: "Review architecture for security weaknesses in: $ARGUMENTS. Evaluate service boundaries, data flow security, authentication/authorization architecture, encryption implementation, network segmentation. Design zero-trust architecture patterns. Reference threat model and vulnerability findings."
- Output: Security architecture assessment, zero-trust design recommendations, service mesh security requirements, data classification matrix
- Context: Incorporates threat model to address architectural vulnerabilities

#### Imported: Phase 2: Vulnerability Remediation

### 4. Critical Vulnerability Fixes
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Coordinate immediate remediation of critical vulnerabilities (CVSS 7+) in: $ARGUMENTS. Fix SQL injections with parameterized queries, XSS with output encoding, authentication bypasses with secure session management, insecure deserialization with input validation. Apply security patches for CVEs."
- Output: Patched code with vulnerability fixes, security patch documentation, regression test requirements
- Context: Addresses high-priority items from vulnerability assessment

### 5. Backend Security Hardening
- Use Task tool with subagent_type="backend-api-security::backend-security-coder"
- Prompt: "Implement comprehensive backend security controls for: $ARGUMENTS. Add input validation with OWASP ESAPI, implement rate limiting and DDoS protection, secure API endpoints with OAuth2/JWT validation, add encryption for data at rest/transit using AES-256/TLS 1.3. Implement secure logging without PII exposure."
- Output: Hardened API endpoints, validation middleware, encryption implementation, secure configuration templates
- Context: Builds upon vulnerability fixes with preventive controls

### 6. Frontend Security Implementation
- Use Task tool with subagent_type="frontend-mobile-security::frontend-security-coder"
- Prompt: "Implement frontend security measures for: $ARGUMENTS. Configure CSP headers with nonce-based policies, implement XSS prevention with DOMPurify, secure authentication flows with PKCE OAuth2, add SRI for external resources, implement secure cookie handling with SameSite/HttpOnly/Secure flags."
- Output: Secure frontend components, CSP policy configuration, authentication flow implementation, security headers configuration
- Context: Complements backend security with client-side protections

### 7. Mobile Security Hardening
- Use Task tool with subagent_type="frontend-mobile-security::mobile-security-coder"
- Prompt: "Implement mobile app security for: $ARGUMENTS. Add certificate pinning, implement biometric authentication, secure local storage with encryption, obfuscate code with ProGuard/R8, implement anti-tampering and root/jailbreak detection, secure IPC communications."
- Output: Hardened mobile application, security configuration files, obfuscation rules, certificate pinning implementation
- Context: Extends security to mobile platforms if applicable

#### Imported: Phase 3: Security Controls Implementation

### 8. Authentication and Authorization Enhancement
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Implement modern authentication system for: $ARGUMENTS. Deploy OAuth2/OIDC with PKCE, implement MFA with TOTP/WebAuthn/FIDO2, add risk-based authentication, implement RBAC/ABAC with principle of least privilege, add session management with secure token rotation."
- Output: Authentication service configuration, MFA implementation, authorization policies, session management system
- Context: Strengthens access controls based on architecture review

### 9. Infrastructure Security Controls
- Use Task tool with subagent_type="deployment-strategies::deployment-engineer"
- Prompt: "Deploy infrastructure security controls for: $ARGUMENTS. Configure WAF rules for OWASP protection, implement network segmentation with micro-segmentation, deploy IDS/IPS systems, configure cloud security groups and NACLs, implement DDoS protection with rate limiting and geo-blocking."
- Output: WAF configuration, network security policies, IDS/IPS rules, cloud security configurations
- Context: Implements network-level defenses

### 10. Secrets Management Implementation
- Use Task tool with subagent_type="deployment-strategies::deployment-engineer"
- Prompt: "Implement enterprise secrets management for: $ARGUMENTS. Deploy HashiCorp Vault or AWS Secrets Manager, implement secret rotation policies, remove hardcoded secrets, configure least-privilege IAM roles, implement encryption key management with HSM support."
- Output: Secrets management configuration, rotation policies, IAM role definitions, key management procedures
- Context: Eliminates secrets exposure vulnerabilities

#### Imported: Phase 4: Validation and Compliance

### 11. Penetration Testing and Validation
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Execute comprehensive penetration testing for: $ARGUMENTS. Perform authenticated and unauthenticated testing, API security testing, business logic testing, privilege escalation attempts. Use Burp Suite, Metasploit, and custom exploits. Validate all security controls effectiveness."
- Output: Penetration test report, proof-of-concept exploits, remediation validation, security control effectiveness metrics
- Context: Validates all implemented security measures

### 12. Compliance and Standards Verification
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Verify compliance with security frameworks for: $ARGUMENTS. Validate against OWASP ASVS Level 2, CIS Benchmarks, SOC2 Type II requirements, GDPR/CCPA privacy controls, HIPAA/PCI-DSS if applicable. Generate compliance attestation reports."
- Output: Compliance assessment report, gap analysis, remediation requirements, audit evidence collection
- Context: Ensures regulatory and industry standard compliance

### 13. Security Monitoring and SIEM Integration
- Use Task tool with subagent_type="incident-response::devops-troubleshooter"
- Prompt: "Implement security monitoring and SIEM for: $ARGUMENTS. Deploy Splunk/ELK/Sentinel integration, configure security event correlation, implement behavioral analytics for anomaly detection, set up automated incident response playbooks, create security dashboards and alerting."
- Output: SIEM configuration, correlation rules, incident response playbooks, security dashboards, alert definitions
- Context: Establishes continuous security monitoring

#### Imported: Configuration Options

- scanning_depth: "quick" | "standard" | "comprehensive" (default: comprehensive)
- compliance_frameworks: ["OWASP", "CIS", "SOC2", "GDPR", "HIPAA", "PCI-DSS"]
- remediation_priority: "cvss_score" | "exploitability" | "business_impact"
- monitoring_integration: "splunk" | "elastic" | "sentinel" | "custom"
- authentication_methods: ["oauth2", "saml", "mfa", "biometric", "passwordless"]

#### Imported: Success Criteria

- All critical vulnerabilities (CVSS 7+) remediated
- OWASP Top 10 vulnerabilities addressed
- Zero high-risk findings in penetration testing
- Compliance frameworks validation passed
- Security monitoring detecting and alerting on threats
- Incident response time < 15 minutes for critical alerts
- SBOM generated and vulnerabilities tracked
- All secrets managed through secure vault
- Authentication implements MFA and secure session management
- Security tests integrated into CI/CD pipeline

#### Imported: Coordination Notes

- Each phase provides detailed findings that inform subsequent phases
- Security-auditor agent coordinates with domain-specific agents for fixes
- All code changes undergo security review before implementation
- Continuous feedback loop between assessment and remediation
- Security findings tracked in centralized vulnerability management system
- Regular security reviews scheduled post-implementation

Security hardening target: $ARGUMENTS
