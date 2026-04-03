# Security Controls and Asset Categories (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇪🇸 [es](../../../../es/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇩🇪 [de](../../../../de/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇮🇹 [it](../../../../it/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇮🇳 [in](../../../../in/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇹🇭 [th](../../../../th/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇮🇩 [id](../../../../id/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇳🇴 [no](../../../../no/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇩🇰 [da](../../../../da/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇮🇱 [he](../../../../he/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-threat-model/references/security-controls-and-assets.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-threat-model/references/security-controls-and-assets.md)

---


Use this as a lightweight checklist to keep outputs consistent across teams. Prefer concrete, system-specific items over generic text.

## Asset categories (pick only what applies)

- User data (PII, content, uploads)
- Authentication artifacts (passwords, tokens, sessions, cookies)
- Authorization state (roles, policies, ACLs)
- Secrets and keys (API keys, signing keys, encryption keys)
- Configuration and feature flags
- Models and weights (if ML systems)
- Source code and build artifacts
- Audit logs and telemetry
- Availability-critical resources (queues, caches, rate limits, compute budgets)
- Tenant isolation boundaries and metadata

## Security control categories

- Identity and access: authN, authZ, session handling, mTLS, key rotation
- Input protection: schema validation, parsing hardening, upload scanning, sandboxing
- Network safeguards: TLS, network policies, WAF, rate limiting, DoS controls
- Data protection: encryption at rest/in transit, tokenization, redaction
- Isolation: process sandboxing, container boundaries, tenant isolation, seccomp
- Observability: audit logs, alerting, anomaly detection, tamper resistance
- Supply chain: dependency pinning, SBOMs, provenance, signing
- Change control: CI checks, deployment approvals, config guardrails

## Mitigation phrasing patterns

- "Enforce schema at <boundary> for <payload> before <component>."
- "Require authZ check for <action> on <resource> in <service>."
- "Isolate <parser/component> in a sandbox with <resource limits>."
- "Rate limit <endpoint> by <key> and apply burst caps."
- "Encrypt <data> at rest using <key management> and rotate <keys>."
