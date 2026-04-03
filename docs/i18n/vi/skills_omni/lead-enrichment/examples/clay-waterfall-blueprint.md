# Clay Waterfall Blueprint Example (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇪🇸 [es](../../../../es/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇫🇷 [fr](../../../../fr/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇩🇪 [de](../../../../de/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇮🇹 [it](../../../../it/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇷🇺 [ru](../../../../ru/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇯🇵 [ja](../../../../ja/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇰🇷 [ko](../../../../ko/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇸🇦 [ar](../../../../ar/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇮🇳 [hi](../../../../hi/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇮🇳 [in](../../../../in/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇹🇭 [th](../../../../th/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇻🇳 [vi](../../../../vi/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇮🇩 [id](../../../../id/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇲🇾 [ms](../../../../ms/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇳🇱 [nl](../../../../nl/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇵🇱 [pl](../../../../pl/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇸🇪 [sv](../../../../sv/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇳🇴 [no](../../../../no/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇩🇰 [da](../../../../da/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇫🇮 [fi](../../../../fi/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇵🇹 [pt](../../../../pt/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇷🇴 [ro](../../../../ro/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇭🇺 [hu](../../../../hu/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇧🇬 [bg](../../../../bg/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇸🇰 [sk](../../../../sk/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇮🇱 [he](../../../../he/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇵🇭 [phi](../../../../phi/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇨🇿 [cs](../../../../cs/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md) · 🇹🇷 [tr](../../../../tr/skills_omni/lead-enrichment/examples/clay-waterfall-blueprint.md)

---


Use this as a pattern for a Clay-style enrichment table.

## Suggested columns

| Column | Type | Purpose |
| --- | --- | --- |
| Company Domain | input | primary company identifier |
| Contact Name | input | initial person identifier |
| LinkedIn URL | enrichment | fallback identity / profile source |
| Work Email Candidate 1 | enrichment | primary provider result |
| Work Email Candidate 2 | enrichment | secondary provider result |
| Winning Work Email | formula | selected email based on precedence and verification |
| Email Verification Class | enrichment/formula | deliverable / risky / catch-all / reject |
| Job Title | enrichment | role targeting |
| Employee Count | enrichment | firmographic fit |
| Industry | enrichment | firmographic fit |
| Tech Stack | enrichment | technographic fit |
| Intent Signal | enrichment/import | timing signal |
| Firmographic Score | formula | weighted fit score |
| Technographic Score | formula | weighted fit score |
| Intent Score | formula | weighted fit score |
| Composite ICP Score | formula | final model output |
| Suppression State | sync/formula | do-not-contact / opt-out gate |
| Route Decision | formula | outbound / CRM only / hold / reject |
| Provenance Summary | formula | provider + date + confidence |

## Logic notes

- Keep candidate values visible before collapsing to a winning value.
- Use route decision columns to prevent accidental sync of risky records.
- Add freshness checks for any field that can decay quickly.
