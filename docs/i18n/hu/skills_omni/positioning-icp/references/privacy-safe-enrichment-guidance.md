# Privacy-Safe Enrichment Guidance (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇪🇸 [es](../../../../es/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇫🇷 [fr](../../../../fr/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇩🇪 [de](../../../../de/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇮🇹 [it](../../../../it/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇷🇺 [ru](../../../../ru/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇯🇵 [ja](../../../../ja/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇰🇷 [ko](../../../../ko/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇸🇦 [ar](../../../../ar/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇮🇳 [hi](../../../../hi/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇮🇳 [in](../../../../in/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇹🇭 [th](../../../../th/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇻🇳 [vi](../../../../vi/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇮🇩 [id](../../../../id/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇲🇾 [ms](../../../../ms/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇳🇱 [nl](../../../../nl/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇵🇱 [pl](../../../../pl/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇸🇪 [sv](../../../../sv/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇳🇴 [no](../../../../no/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇩🇰 [da](../../../../da/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇫🇮 [fi](../../../../fi/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇵🇹 [pt](../../../../pt/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇷🇴 [ro](../../../../ro/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇭🇺 [hu](../../../../hu/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇧🇬 [bg](../../../../bg/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇸🇰 [sk](../../../../sk/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇮🇱 [he](../../../../he/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇵🇭 [phi](../../../../phi/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇨🇿 [cs](../../../../cs/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md) · 🇹🇷 [tr](../../../../tr/skills_omni/positioning-icp/references/privacy-safe-enrichment-guidance.md)

---


This skill can use enrichment and intent signals as supporting inputs, but they introduce privacy, profiling, and data-quality risk.

## Safe operating principles

- prefer account-level signals over unnecessary personal data
- collect only data needed for the ICP or qualification task
- document source, purpose, freshness, and confidence
- set retention limits for imported data
- avoid using sensitive or unnecessary attributes
- treat regional rules as variable, not universal

## Practical guardrails

### Use enrichment for
- company attributes
- stack or workflow readiness clues
- broad trigger events
- account prioritization support

### Use extra caution for
- individual-level profiling
- direct marketing decisions
- combining multiple sources into hidden risk scores
- stale or unverifiable trigger events

## Vendor-confidence note

For each key attribute, record:
- vendor/source
- date observed
- confidence level
- whether confirmed by first-party evidence

## If legal uncertainty appears

Do not improvise legal advice.

Instead:
- minimize data use
- prefer account-level scoring
- document assumptions
- route legal interpretation to counsel

## Data quality reminder

Third-party intent and enrichment can be directionally useful but are often noisy.
Never let vendor data override stronger evidence from customer behavior, retention, or actual deal outcomes.
