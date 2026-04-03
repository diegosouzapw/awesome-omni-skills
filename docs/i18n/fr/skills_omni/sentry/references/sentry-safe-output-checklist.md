# Sentry Safe Output Checklist (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/sentry/references/sentry-safe-output-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/sentry/references/sentry-safe-output-checklist.md)

---


Use this checklist before returning a production-facing summary.

## Include by default

- org and project
- environment
- time window
- exact query used
- result limit
- whether results may be partial
- issue titles and short IDs
- first seen / last seen
- counts
- release or environment correlations
- relevant Sentry URLs for handoff

## Omit by default

- API tokens
- cookies
- authorization headers
- request bodies
- response bodies
- raw stack traces
- emails
- IP addresses
- user-provided text that may contain secrets or PII

## If event detail was inspected

- summarize metadata rather than dumping payloads
- mention that sensitive fields were intentionally omitted
- include only the minimum detail needed for triage or handoff

## Redaction reminders

Redact or omit:

- emails
- IPs
- auth headers
- cookies
- session IDs
- access tokens
- request payloads
- untrusted free-form text from users or customers
