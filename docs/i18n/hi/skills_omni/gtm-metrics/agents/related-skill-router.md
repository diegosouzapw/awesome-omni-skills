# Related Skill Router (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇪🇸 [es](../../../../es/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇩🇪 [de](../../../../de/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇮🇹 [it](../../../../it/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇮🇳 [in](../../../../in/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇹🇭 [th](../../../../th/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇮🇩 [id](../../../../id/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇳🇴 [no](../../../../no/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇩🇰 [da](../../../../da/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇮🇱 [he](../../../../he/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gtm-metrics/agents/related-skill-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gtm-metrics/agents/related-skill-router.md)

---


Use this router when the request begins in GTM measurement but shifts beyond this skill's core scope.

## Stay in `@gtm-metrics` when

- the main task is metric selection
- the work is dashboard scope and hierarchy design
- the question is about funnel measurement, attribution interpretation, or review cadence
- the user needs AI-specific unit economics added to GTM reporting
- the main deliverable is a scorecard, dashboard spec, or metric dictionary

## Hand off when

### Pricing becomes the main task

Route to `@ai-pricing` when the user is redesigning packaging, pricing, monetization, or consumption tiers rather than measuring them.

### Outbound workflow becomes the main task

Route to `@ai-sdr` or `@ai-cold-outreach` when the user needs help with sequence design, messaging, targeting, or outbound execution details.

### Retention playbooks become the main task

Route to a retention or expansion-focused skill when the user is no longer defining NRR/churn metrics and instead needs intervention design.

### Analytics implementation becomes the main task

Hand off to implementation-focused analytics, BI, data, or CRM skills when the user needs:

- event instrumentation
- SQL or warehouse work
- ETL or sync debugging
- dashboard build implementation
- data model or architecture changes

## Handoff note template

```text
This request started in GTM measurement, but the next step is primarily [pricing / outbound execution / retention operations / analytics implementation]. I am handing off after preserving the metric definitions, source-of-truth notes, dashboard audience, and data quality caveats established here.
```
