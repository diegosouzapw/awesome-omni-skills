# Security Design Prompts (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/references/security-design-prompts.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/references/security-design-prompts.md)

---


Use these prompts for auth, payments, public APIs, sensitive data, or high-risk integrations.

## Lightweight threat-model prompts

Document:

- key assets to protect
- internal and external actors
- trust boundaries
- entry points
- abuse cases or misuse paths
- main mitigations

## Authentication and authorization

Ask:

- How is identity established?
- What authorization model applies?
- Are service-to-service calls authenticated?
- Are privileged actions auditable?

## Data classification

Ask:

- What sensitive data is collected, processed, stored, or transmitted?
- What data must be redacted, minimized, or deleted?
- What data must never appear in logs?

## Secrets handling

Prefer:

- secret managers
- least-privilege access
- rotation procedures
- auditability
- separation between environments

Do not rely on plain environment variables as the full strategy when higher assurance is required.

## Compliance prompts

If compliance is mentioned, document the technical controls and operational owner, not just the regulation name.
