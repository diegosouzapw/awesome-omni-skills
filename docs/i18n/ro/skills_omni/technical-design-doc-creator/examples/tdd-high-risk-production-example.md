# Example: High-Risk Production TDD (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/examples/tdd-high-risk-production-example.md)

---


# TDD - Migrate customer login from session auth to OAuth 2.1

| Field | Value |
| --- | --- |
| Tech Lead | @sam |
| Team | Identity Platform |
| Product Manager | @riley |
| Status | In Review |
| Epic/Ticket | ID-882 |
| Last Updated | 2026-03-27 |

## Context

The current session-based authentication model limits mobile parity, complicates third-party integrations, and creates inconsistent authorization behavior across products.

## Problem Statement

We need a standardized authentication model that supports web, mobile, and service integrations while reducing auth drift across applications. If unchanged, we will continue to duplicate auth logic and increase security review burden for each new product surface.

## Scope

### In Scope
- OAuth 2.1 authorization code with PKCE for customer-facing apps
- token validation middleware for backend services
- staged migration for web clients
- audit and auth-event observability improvements

### Out of Scope
- workforce SSO redesign
- third-party developer portal auth
- full authorization model rewrite

## Technical Solution

### Arhitectură
- Central identity provider issues tokens
- web and mobile clients use authorization code with PKCE
- backend services validate tokens and propagate identity context
- legacy session path remains available during migration window

### Key Decisions
- Choose OAuth 2.1 to standardize modern auth flows
- Keep authorization policy evaluation in existing policy service for V1
- Preserve dual-path support during staged rollout

### Constraints and Assumptions
- legacy clients cannot all migrate in one release
- identity provider uptime is critical path for login
- token introspection is too expensive for every request; local validation is preferred where possible

## Security Considerations

- Assets: credentials, tokens, user identity claims, auth-event logs
- Trust boundaries: browser to IdP, app to backend, service to service
- Secrets stored in managed secret store with rotation policy
- Tokens and secrets are never logged
- Admin actions require auditable privileged-event logging

## Testing Strategy

- Unit tests for token validation and claim mapping
- Integration tests for login callback, token refresh, and logout flows
- contract tests for identity provider interactions
- focused E2E tests for critical login journeys only
- rollback drill in staging before production rollout

## Monitoring & Observability

- login success rate
- token validation failures
- callback latency p95
- auth dependency error rate
- trace propagation across gateway and identity service
- alerts owned by Identity on-call during rollout

## Release, Rollout, and Rollback

- Stage 1: internal users only
- Stage 2: 5% of customer traffic
- Stage 3: 25%
- Stage 4: 100% after stable metrics
- Abort if login failure rate or callback latency exceeds threshold for sustained window
- Rollback by returning traffic to legacy session path and disabling OAuth client exposure

## Open Questions

- Should mobile and web complete rollout on the same schedule?
- What is the final deprecation date for the legacy session path?
