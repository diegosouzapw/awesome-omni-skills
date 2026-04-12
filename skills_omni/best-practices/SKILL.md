---
name: "best-practices"
description: "Best practices workflow skill. Use this skill when the user needs to apply modern web development best practices for security, browser compatibility, and code quality. Use when asked to \"apply best practices\", \"security audit\", \"modernize code\", \"code quality review\", or \"check for vulnerabilities\". Do NOT use for accessibility (use web-accessibility), SEO (use seo), performance optimization (use core-web-vitals), or broad multi-area audits (use web-quality-audit)."
version: "0.0.1"
category: "development"
tags:
  - "best-practices"
  - "web"
  - "security"
  - "compatibility"
  - "code-quality"
  - "csp"
  - "headers"
  - "dependencies"
  - "modernization"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "best-practices"
family_name: "Best practices"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/best-practices"
upstream_skill: "skills/best-practices"
upstream_author: "web-quality-skills"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "best-practices"
---

# Best practices

## Overview

Use this skill to review or remediate a web codebase for modern best practices in three core areas:

- security posture relevant to typical web applications
- browser compatibility and safe modernization
- code quality issues that commonly surface in production reviews

This skill is appropriate when the user wants a focused web best-practices pass rather than a full audit across accessibility, SEO, and performance. It is intentionally narrower than a comprehensive site audit and more operational than a generic checklist.

This skill preserves the intent of the upstream `web-best-practices` workflow while upgrading it into a practical execution kit with clearer routing boundaries, stronger evidence collection, safer guidance, and modernized recommendations.

## When to Use This Skill

Use this skill when the user asks for any of the following:

- "apply best practices" to a web app, page, frontend, or full-stack web project
- a web-focused security hygiene review
- code quality review for browser-facing code
- modernization of deprecated or brittle frontend patterns
- a compatibility review before release or browser support expansion
- a dependency-vulnerability review tied to web application code

Do **not** use this skill when the request is primarily about:

- accessibility compliance or UX accessibility review
- SEO optimization or search indexing issues
- page speed, Core Web Vitals, or performance profiling as the main goal
- a comprehensive multi-domain audit combining accessibility, performance, SEO, and security in one workflow
- deep application security testing such as auth bypass, SSRF, SQLi, or threat modeling beyond best-practices scope

If the task drifts outside this scope, hand off deliberately instead of stretching this skill.

## Operating Table

| Situation | Start here | Evidence to collect | Exit criteria |
| --- | --- | --- | --- |
| Quick review only, no code changes | `references/evidence-collection-checklist.md` | headers, console output, validator results, dependency findings | concise findings with severity and next steps |
| Security hardening review | `references/security-headers-and-csp-guide.md` | response headers, cookie flags, CSP violations, mixed-content findings | modern baseline documented and risky gaps prioritized |
| Dependency or supply-chain concerns | `references/dependency-vulnerability-playbook.md` | audit output, lockfile status, scanner findings, upgrade constraints | remediation plan with safe upgrade path |
| Browser compatibility or modernization | `references/browser-compatibility-and-baseline.md` | target browser matrix, unsupported features, fallback gaps | compatibility risks explained with recommended fixes |
| Structured handoff or multi-skill routing | `agents/routing-boundaries.md` | reason for handoff and remaining open questions | next skill is clearly identified |

## Workflow

1. **Confirm scope before changing anything.**
   Determine whether the user wants:
   - review-only findings
   - code remediation
   - remediation plus validation

2. **Define the target surface.**
   Identify the app type and deployment path:
   - static site, SPA, SSR app, or full-stack app
   - local dev only, staging, or production-facing system
   - package manager and build tool in use

3. **Set boundaries.**
   Explicitly exclude accessibility, SEO, and performance-only work unless the user asks for a broader audit.

4. **Collect evidence first.**
   Use the checklist in `references/evidence-collection-checklist.md` to gather:
   - response headers and cookie behavior
   - dependency audit output
   - browser console errors and warnings
   - HTML validation findings
   - compatibility risks and deprecated APIs
   - source-map exposure status

5. **Review the highest-risk areas first.**
   Prioritize in this order unless the user specifies otherwise:
   1. transport security and mixed content
   2. CSP and high-value security headers
   3. vulnerable dependencies and unsafe auto-fixes
   4. unsafe DOM patterns and sanitization gaps
   5. browser-compatibility issues and deprecated APIs
   6. source-map exposure and production debugging policy
   7. HTML and runtime code-quality issues

6. **Recommend or apply narrow fixes.**
   Keep changes reversible and specific. Prefer:
   - explicit HTTPS over protocol-relative URLs
   - response headers over meta-tag security controls
   - nonce/hash-based CSP migrations over broad inline allowances
   - lockfile-aware dependency updates over broad upgrade jumps
   - feature detection over user-agent sniffing

7. **Validate after each change cluster.**
   Re-check the exact area you changed:
   - header behavior in browser devtools or curl
   - CSP breakage in console/network logs
   - dependency resolution and tests after upgrades
   - actual browser behavior for compatibility fixes

8. **Document findings and residual risk.**
   Record:
   - what was checked
   - what changed
   - what remains unresolved
   - what still requires human or production verification

## Best Practices

### Security and transport

#### Do

- enforce HTTPS everywhere and remove mixed-content references
- prefer explicit `https://` URLs instead of protocol-relative `//` URLs
- set security controls as HTTP response headers when possible
- use HSTS only after HTTPS is consistently working across the target hostnames
- inspect actual production or staging responses, not only application code snippets

#### Don't

- do not recommend protocol-relative URLs as a modern best practice
- do not assume a reverse proxy or CDN is forwarding headers correctly without verifying responses
- do not enable HSTS blindly on hostnames that still need HTTP access during migration

### Content Security Policy and headers

Use `references/security-headers-and-csp-guide.md` for rollout detail.

#### Do

- start CSP from an inventory of current script, style, frame, and third-party dependencies
- prefer header-delivered CSP
- use nonces or hashes for required inline code during migration
- include `object-src 'none'`, `base-uri 'self'`, and `frame-ancestors` where appropriate
- use report-only mode during rollout when a breaking deployment is likely
- keep `X-Frame-Options` only as legacy defense-in-depth if needed

#### Don't

- do not treat `X-XSS-Protection` as a modern required header
- do not rely on broad `unsafe-inline` as the long-term solution
- do not assume a meta tag provides the same protection as a response header

### Cookies and session handling

#### Do

- inspect actual `Set-Cookie` headers in network tools
- use `Secure` and `HttpOnly` for session cookies
- choose `SameSite=Lax` or `SameSite=Strict` deliberately based on flow requirements
- narrow `Domain` and `Path` scope where possible
- consider `__Host-` and `__Secure-` prefixes when appropriate

#### Don't

- do not assess cookie safety from frontend code alone
- do not widen cookie scope without a concrete cross-subdomain need

### Dependencies and supply chain

Use `references/dependency-vulnerability-playbook.md`.

#### Do

- treat package-manager audit output as triage input, not the final answer
- review lockfiles and transitive dependency impact before applying fixes
- prefer small, reviewable dependency updates
- use repository or filesystem scanners as a complement where appropriate
- document when a vulnerability is accepted temporarily due to lack of a safe upgrade

#### Don't

- do not assume `npm audit fix` is safe in every project
- do not upgrade blindly across major versions just to silence a scanner

### Compatibility and modernization

Use `references/browser-compatibility-and-baseline.md`.

#### Do

- define supported browsers before recommending polyfills or syntax changes
- use MDN compatibility data and Baseline to judge feature readiness
- prefer feature detection and progressive enhancement
- replace deprecated APIs with supported alternatives

#### Don't

- do not use UA sniffing as the primary compatibility strategy
- do not add generic polyfills without tying them to an actual support requirement

### Source maps and production debugging

#### Do

- choose an explicit source-map policy: public, hidden/private, or disabled
- verify whether `.map` files are actually being served in production
- align build output, CDN behavior, and error-tracker uploads

#### Don't

- do not assume a build setting alone prevents public source-map exposure

## Examples

### Example 1: Review-only request

```text
Use @best-practices to review this web app for modern security, browser compatibility, and code quality issues. Do not make code changes yet. Gather evidence first, then return prioritized findings with severity, impact, and recommended fixes.
```

**Expected output:** A findings-first report with evidence and a short remediation plan.

### Example 2: Safe remediation request

```text
Use @best-practices to harden this frontend. Fix mixed content, modernize security headers, review CSP, and flag any dependency upgrades that need human approval. Keep changes narrow and explain anything that could break production.
```

**Expected output:** Small, reviewable changes plus validation notes and residual risks.

### Example 3: Local evidence collection helper

```bash
bash scripts/collect_best_practices_evidence.sh .
```

**Expected output:** A lightweight local summary of likely review targets such as dependency manifests, risky patterns, and source-map references.

### Example 4: Compatibility-focused run

```text
Use @best-practices to review browser compatibility for this app. Identify deprecated APIs, unsupported features against the stated browser support policy, and places where feature detection should replace browser sniffing.
```

**Expected output:** Compatibility findings tied to target browsers, with concrete fixes.

## Troubleshooting

### Problem: CSP hardening breaks scripts or styles

**Symptoms:** Pages render without styling, inline scripts stop working, third-party widgets fail, or the console shows CSP violations.

**Solution:**
1. Inspect the browser console and network panel for blocked resource types and origins.
2. Confirm whether the policy is delivered as a response header or only as a meta tag.
3. Inventory inline scripts, inline styles, event-handler attributes, and third-party embeds.
4. Move toward nonces or hashes for required inline code.
5. Use report-only mode while refining the policy if production breakage risk is high.
6. Re-test only the affected pages before widening rollout.

### Problem: Security headers look correct in code but not in production

**Symptoms:** Middleware or server config appears correct, but browser devtools, `curl -I`, Observatory, or SecurityHeaders show missing or altered headers.

**Solution:**
1. Verify headers against the live response, not only source code.
2. Check whether a proxy, CDN, load balancer, or platform edge layer is overwriting headers.
3. Confirm environment-specific config differences between local, staging, and production.
4. Re-test after deployment using the exact public URL involved.

### Problem: `npm audit fix` or dependency remediation causes regressions

**Symptoms:** Build failures, runtime errors, test breakage, or changed transitive behavior after applying security fixes.

**Solution:**
1. Revert broad auto-fixes if they are not clearly safe.
2. Compare lockfile and package manifest changes.
3. Prefer targeted package upgrades and changelog review.
4. Re-run tests and smoke the affected routes.
5. If no safe upgrade exists, document the exposure, compensating controls, and monitoring plan.

### Problem: A feature works on desktop evergreen browsers but fails on target mobile or older supported browsers

**Symptoms:** Inconsistent behavior across devices, missing APIs, layout regressions, or logic that only works in one engine family.

**Solution:**
1. Confirm the intended browser support policy first.
2. Check MDN compatibility data and Baseline status for the affected feature.
3. Replace UA sniffing with feature detection where possible.
4. Add progressive enhancement or a targeted fallback only if the support policy requires it.

### Problem: Cookies work locally but are rejected or missing in deployed environments

**Symptoms:** Sessions do not persist, auth loops occur, or cookies do not appear in storage/network panels in staging or production.

**Solution:**
1. Inspect actual `Set-Cookie` headers.
2. Check `Secure`, `HttpOnly`, `SameSite`, `Domain`, and `Path` values.
3. Verify whether HTTPS is required for the deployed flow.
4. Review cross-site or cross-subdomain behavior if the app depends on redirects or embedded contexts.

### Problem: Source maps are still publicly reachable after configuration changes

**Symptoms:** `.map` files are accessible from built asset URLs or CDN paths even after disabling or hiding them in the build config.

**Solution:**
1. Inspect built artifacts and deployed asset paths.
2. Check CDN/static hosting rules and cached releases.
3. Confirm whether the toolchain still emits references such as `sourceMappingURL`.
4. Align build config, upload workflow, and edge caching behavior.

## Related Skills

- `@web-accessibility` for accessibility compliance and inclusive design review
- `@seo` for search indexing, metadata, and crawlability work
- `@core-web-vitals` for performance optimization and loading/rendering bottlenecks
- `@web-quality-audit` for a broader multi-area web audit

## Additional Resources

### Local support pack

- [Security headers and CSP guide](references/security-headers-and-csp-guide.md)
- [Dependency vulnerability playbook](references/dependency-vulnerability-playbook.md)
- [Browser compatibility and Baseline guide](references/browser-compatibility-and-baseline.md)
- [Evidence collection checklist](references/evidence-collection-checklist.md)
- [CSP rollout example](examples/csp-rollout-example.md)
- [Best-practices review prompt template](examples/best-practices-review-prompt.md)
- [Evidence collection helper script](scripts/collect_best_practices_evidence.sh)
- [Routing boundaries](agents/routing-boundaries.md)

### External references

- MDN: HTTP Strict Transport Security
- MDN: Content Security Policy
- MDN: Set-Cookie
- MDN: Feature detection and Baseline compatibility guidance
- OWASP: HTTP Headers Cheat Sheet
- OWASP: Content Security Policy Cheat Sheet
- npm docs: auditing dependencies
- Trivy docs
- W3C Nu Html Checker

## Upstream Intent and Provenance Note

This enhanced skill preserves the upstream intent of the original web best-practices workflow while replacing outdated or weak recommendations with safer modern guidance. In particular:

- protocol-relative URLs are not treated as a recommended pattern
- `X-XSS-Protection` is not treated as a modern baseline requirement
- CSP guidance prefers response headers and nonce/hash-based migration paths
- dependency review goes beyond package-manager auto-fix commands
- compatibility guidance prefers Baseline, compatibility data, and feature detection
