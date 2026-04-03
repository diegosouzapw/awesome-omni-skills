# DNS Authentication Checklist (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-cold-outreach/references/dns-authentication-checklist.md)

---


Use this before launch and whenever a new sender tool is added.

## Goal

Verify that the actual sending path is authenticated and aligned, not just that DNS records exist.

## Preflight

- identify every tool or provider that may send mail for the domain
- identify the visible `From` domain
- confirm who controls DNS for the domain
- confirm who can inspect provider-side authentication settings

## Required checks

### SPF

- publish an SPF record for the sending domain if appropriate for the provider setup
- confirm the sending service is authorized
- avoid excessive include chains that can cause lookup-limit issues
- if SPF returns permerror or exceeds lookup limits, simplify before launch

Reference: RFC 7208.

### DKIM

- enable DKIM signing in each sending platform
- publish the provider's DKIM public key records
- confirm test messages show `dkim=pass`
- if a provider is changed or rotated, re-check selectors and signatures

Reference: RFC 6376.

### DMARC

- publish a DMARC record
- begin with monitoring if sender inventory is incomplete
- review aggregate reports before tightening enforcement
- verify alignment between authenticated identifiers and the visible `From` domain

Reference: RFC 7489 and Microsoft 365 DMARC setup guidance.

### TLS

- confirm the sending provider supports TLS for transport
- do not treat opportunistic encryption as a substitute for authentication

## Test-send validation

Before launch, send controlled test messages through the exact campaign path and confirm:

- `spf=pass` when SPF is used in the path
- `dkim=pass`
- DMARC passes with alignment on the visible `From` domain
- expected headers and unsubscribe handling are present

## DMARC rollout sequence

1. inventory all legitimate senders
2. publish monitoring policy
3. review aggregate reports
4. fix misaligned senders
5. tighten enforcement only after alignment is stable

Do not move directly to strict enforcement if sender inventory is incomplete.

## Common failure modes

- SPF permerror from too many lookups
- DKIM missing after provider migration
- DMARC failures because the visible `From` domain is not aligned
- new sender tool added without SPF or DKIM authorization

## Supporting references

- MDN DNS TXT records overview: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_DNS_TXT_record
- RFC 7208 SPF: https://www.rfc-editor.org/rfc/rfc7208
- RFC 6376 DKIM: https://www.rfc-editor.org/rfc/rfc6376
- RFC 7489 DMARC: https://www.rfc-editor.org/rfc/rfc7489
- Microsoft 365 DMARC setup: https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure
