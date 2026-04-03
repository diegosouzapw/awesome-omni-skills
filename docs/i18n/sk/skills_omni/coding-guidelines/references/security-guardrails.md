# Security Guardrails (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coding-guidelines/references/security-guardrails.md) · 🇪🇸 [es](../../../../es/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇩🇪 [de](../../../../de/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇮🇹 [it](../../../../it/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇮🇳 [in](../../../../in/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇹🇭 [th](../../../../th/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇮🇩 [id](../../../../id/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇳🇴 [no](../../../../no/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇩🇰 [da](../../../../da/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇮🇱 [he](../../../../he/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coding-guidelines/references/security-guardrails.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coding-guidelines/references/security-guardrails.md)

---


Apply these rules whenever code changes touch sensitive surfaces.

## High-risk areas

- authentication and authorization
- secrets, credentials, tokens, and session data
- shell commands and subprocess construction
- untrusted input, serialization, templating, and parsing
- file paths, uploads, extraction, and filesystem writes
- dependency supply chain
- container and infrastructure privilege settings

## Required behaviors

- Never hardcode real secrets or plausible credentials.
- Prefer environment or configuration references over embedded values.
- Preserve least privilege by default.
- Do not widen network, filesystem, or runtime permissions unless explicitly required.
- Do not guess about secure defaults when uncertain.
- Add focused validation for risky input handling where possible.
- Recommend extra review if the blast radius is unclear.

## Escalate when

- auth behavior changes materially
- permission scope increases
- command execution paths are introduced or modified
- dependency risk cannot be evaluated confidently
- container or IaC changes broaden privilege or exposure
- a secure implementation depends on assumptions you cannot verify from the repo
