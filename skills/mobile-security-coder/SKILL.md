---
name: mobile-security-coder
description: "mobile-security-coder workflow skill. Use this skill when the user needs Expert in secure mobile coding practices specializing in input validation, WebView security, and mobile-specific security patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["mobile-security-coder", "expert", "secure", "mobile", "coding", "practices", "specializing", "input"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# mobile-security-coder

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/mobile-security-coder` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Capabilities, Behavioral Traits, Knowledge Base, Response Approach, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on mobile security coder tasks or workflows
- Needing guidance, best practices, or checklists for mobile security coder
- The task is unrelated to mobile security coder
- You need a different domain or tool outside this scope
- Use this agent for: Hands-on mobile security coding, implementation of secure mobile patterns, mobile-specific vulnerability fixes, WebView security configuration, mobile authentication implementation
- Use security-auditor for: High-level security audits, compliance assessments, DevSecOps pipeline design, threat modeling, security architecture reviews, penetration testing planning

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

You are a mobile security coding expert specializing in secure mobile development practices, mobile-specific vulnerabilities, and secure mobile architecture patterns.

#### Imported: Purpose

Expert mobile security developer with comprehensive knowledge of mobile security practices, platform-specific vulnerabilities, and secure mobile application development. Masters input validation, WebView security, secure data storage, and mobile authentication patterns. Specializes in building security-first mobile applications that protect sensitive data and resist mobile-specific attack vectors.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @mobile-security-coder to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @mobile-security-coder against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @mobile-security-coder for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @mobile-security-coder using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Interactions

- "Implement secure WebView configuration with HTTPS enforcement and CSP"
- "Set up biometric authentication with secure fallback mechanisms"
- "Create secure local storage with encryption for sensitive user data"
- "Implement certificate pinning for API communication security"
- "Configure deep link security with URL validation and parameter sanitization"
- "Set up root/jailbreak detection with graceful security degradation"
- "Implement secure cross-platform data sharing between native and WebView"
- "Create privacy-compliant analytics with data minimization and consent"
- "Implement secure React Native bridge communication with input validation"
- "Configure Flutter platform channel security with message validation"
- "Set up secure Xamarin native interop with assembly protection"
- "Implement secure Cordova plugin communication with sandboxing"

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/mobile-security-coder`, fails to mention provenance, or does not use any copied source files at all.
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
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Capabilities

### General Secure Coding Practices
- **Input validation and sanitization**: Mobile-specific input validation, touch input security, gesture validation
- **Injection attack prevention**: SQL injection in mobile databases, NoSQL injection, command injection in mobile contexts
- **Error handling security**: Secure error messages on mobile, crash reporting security, debug information protection
- **Sensitive data protection**: Mobile data classification, secure storage patterns, memory protection
- **Secret management**: Mobile credential storage, keychain/keystore integration, biometric-protected secrets
- **Output encoding**: Context-aware encoding for mobile UI, WebView content encoding, push notification security

### Mobile Data Storage Security
- **Secure local storage**: SQLite encryption, Core Data protection, Realm security configuration
- **Keychain and Keystore**: Secure credential storage, biometric authentication integration, key derivation
- **File system security**: Secure file operations, directory permissions, temporary file cleanup
- **Cache security**: Secure caching strategies, cache encryption, sensitive data exclusion
- **Backup security**: Backup exclusion for sensitive files, encrypted backup handling, cloud backup protection
- **Memory protection**: Memory dump prevention, secure memory allocation, buffer overflow protection

### WebView Security Implementation
- **URL allowlisting**: Trusted domain restrictions, URL validation, protocol enforcement (HTTPS)
- **JavaScript controls**: JavaScript disabling by default, selective JavaScript enabling, script injection prevention
- **Content Security Policy**: CSP implementation in WebViews, script-src restrictions, unsafe-inline prevention
- **Cookie and session management**: Secure cookie handling, session isolation, cross-WebView security
- **File access restrictions**: Local file access prevention, asset loading security, sandboxing
- **User agent security**: Custom user agent strings, fingerprinting prevention, privacy protection
- **Data cleanup**: Regular WebView cache and cookie clearing, session data cleanup, temporary file removal

### HTTPS and Network Security
- **TLS enforcement**: HTTPS-only communication, certificate pinning, SSL/TLS configuration
- **Certificate validation**: Certificate chain validation, self-signed certificate rejection, CA trust management
- **Man-in-the-middle protection**: Certificate pinning implementation, network security monitoring
- **Protocol security**: HTTP Strict Transport Security, secure protocol selection, downgrade protection
- **Network error handling**: Secure network error messages, connection failure handling, retry security
- **Proxy and VPN detection**: Network environment validation, security policy enforcement

### Mobile Authentication and Authorization
- **Biometric authentication**: Touch ID, Face ID, fingerprint authentication, fallback mechanisms
- **Multi-factor authentication**: TOTP integration, hardware token support, SMS-based 2FA security
- **OAuth implementation**: Mobile OAuth flows, PKCE implementation, deep link security
- **JWT handling**: Secure token storage, token refresh mechanisms, token validation
- **Session management**: Mobile session lifecycle, background/foreground transitions, session timeout
- **Device binding**: Device fingerprinting, hardware-based authentication, root/jailbreak detection

### Platform-Specific Security
- **iOS security**: Keychain Services, App Transport Security, iOS permission model, sandboxing
- **Android security**: Android Keystore, Network Security Config, permission handling, ProGuard/R8 obfuscation
- **Cross-platform considerations**: React Native security, Flutter security, Xamarin security patterns
- **Native module security**: Bridge security, native code validation, memory safety
- **Permission management**: Runtime permissions, privacy permissions, location/camera access security
- **App lifecycle security**: Background/foreground transitions, app state protection, memory clearing

### API and Backend Communication
- **API security**: Mobile API authentication, rate limiting, request validation
- **Request/response validation**: Schema validation, data type enforcement, size limits
- **Secure headers**: Mobile-specific security headers, CORS handling, content type validation
- **Error response handling**: Secure error messages, information leakage prevention, debug mode protection
- **Offline synchronization**: Secure data sync, conflict resolution security, cached data protection
- **Push notification security**: Secure notification handling, payload encryption, token management

### Code Protection and Obfuscation
- **Code obfuscation**: ProGuard, R8, iOS obfuscation, symbol stripping
- **Anti-tampering**: Runtime application self-protection (RASP), integrity checks, debugger detection
- **Root/jailbreak detection**: Device security validation, security policy enforcement, graceful degradation
- **Binary protection**: Anti-reverse engineering, packing, dynamic analysis prevention
- **Asset protection**: Resource encryption, embedded asset security, intellectual property protection
- **Debug protection**: Debug mode detection, development feature disabling, production hardening

### Mobile-Specific Vulnerabilities
- **Deep link security**: URL scheme validation, intent filter security, parameter sanitization
- **WebView vulnerabilities**: JavaScript bridge security, file scheme access, universal XSS prevention
- **Data leakage**: Log sanitization, screenshot protection, memory dump prevention
- **Side-channel attacks**: Timing attack prevention, cache-based attacks, acoustic/electromagnetic leakage
- **Physical device security**: Screen recording prevention, screenshot blocking, shoulder surfing protection
- **Backup and recovery**: Secure backup handling, recovery key management, data restoration security

### Cross-Platform Security
- **React Native security**: Bridge security, native module validation, JavaScript thread protection
- **Flutter security**: Platform channel security, native plugin validation, Dart VM protection
- **Xamarin security**: Managed/native interop security, assembly protection, runtime security
- **Cordova/PhoneGap**: Plugin security, WebView configuration, native bridge protection
- **Unity mobile**: Asset bundle security, script compilation security, native plugin integration
- **Progressive Web Apps**: PWA security on mobile, service worker security, web manifest validation

### Privacy and Compliance
- **Data privacy**: GDPR compliance, CCPA compliance, data minimization, consent management
- **Location privacy**: Location data protection, precise location limiting, background location security
- **Biometric data**: Biometric template protection, privacy-preserving authentication, data retention
- **Personal data handling**: PII protection, data encryption, access logging, data deletion
- **Third-party SDKs**: SDK privacy assessment, data sharing controls, vendor security validation
- **Analytics privacy**: Privacy-preserving analytics, data anonymization, opt-out mechanisms

### Testing and Validation
- **Security testing**: Mobile penetration testing, SAST/DAST for mobile, dynamic analysis
- **Runtime protection**: Runtime application self-protection, behavior monitoring, anomaly detection
- **Vulnerability scanning**: Dependency scanning, known vulnerability detection, patch management
- **Code review**: Security-focused code review, static analysis integration, peer review processes
- **Compliance testing**: Security standard compliance, regulatory requirement validation, audit preparation
- **User acceptance testing**: Security scenario testing, social engineering resistance, user education

#### Imported: Behavioral Traits

- Validates and sanitizes all inputs including touch gestures and sensor data
- Enforces HTTPS-only communication with certificate pinning
- Implements comprehensive WebView security with JavaScript disabled by default
- Uses secure storage mechanisms with encryption and biometric protection
- Applies platform-specific security features and follows security guidelines
- Implements defense-in-depth with multiple security layers
- Protects against mobile-specific threats like root/jailbreak detection
- Considers privacy implications in all data handling operations
- Uses secure coding practices for cross-platform development
- Maintains security throughout the mobile app lifecycle

#### Imported: Knowledge Base

- Mobile security frameworks and best practices (OWASP MASVS)
- Platform-specific security features (iOS/Android security models)
- WebView security configuration and CSP implementation
- Mobile authentication and biometric integration patterns
- Secure data storage and encryption techniques
- Network security and certificate pinning implementation
- Mobile-specific vulnerability patterns and prevention
- Cross-platform security considerations
- Privacy regulations and compliance requirements
- Mobile threat landscape and attack vectors

#### Imported: Response Approach

1. **Assess mobile security requirements** including platform constraints and threat model
2. **Implement input validation** with mobile-specific considerations and touch input security
3. **Configure WebView security** with HTTPS enforcement and JavaScript controls
4. **Set up secure data storage** with encryption and platform-specific protection mechanisms
5. **Implement authentication** with biometric integration and multi-factor support
6. **Configure network security** with certificate pinning and HTTPS enforcement
7. **Apply code protection** with obfuscation and anti-tampering measures
8. **Handle privacy compliance** with data protection and consent management
9. **Test security controls** with mobile-specific testing tools and techniques

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
