# Dashboard Spec Example (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇪🇸 [es](../../../../es/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇩🇪 [de](../../../../de/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇮🇹 [it](../../../../it/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇮🇳 [in](../../../../in/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇹🇭 [th](../../../../th/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇮🇩 [id](../../../../id/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇳🇴 [no](../../../../no/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇩🇰 [da](../../../../da/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇮🇱 [he](../../../../he/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gtm-metrics/examples/dashboard-spec-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gtm-metrics/examples/dashboard-spec-example.md)

---


This is a reusable specification format for proposing a GTM dashboard before anyone builds it.

## Dashboard name

Executive GTM Scorecard for Usage-Based AI Product

## Audience

Executive team

## Review cadence

Weekly

## Decision purpose

Track whether usage growth is converting into durable, efficient revenue without margin erosion.

## Metrics

| Metric | Purpose | Source system | Target | Threshold | Owner |
| --- | --- | --- | --- | --- | --- |
| Retained consumed revenue | Core outcome | Billing / finance | Grow QoQ | Two-week decline triggers review | RevOps |
| Committed vs consumed gap | Pricing alignment | Billing | Gap shrinking | Large persistent gap triggers packaging review | Finance + Pricing |
| Pipeline created | Forward demand | CRM | On plan | Below plan for 2 weeks triggers channel review | Sales |
| Win rate | Conversion efficiency | CRM | Stable/up | Decline by segment triggers deal review | Sales |
| TTFV | Activation speed | Product analytics | Down | Increase triggers onboarding audit | Product |
| Cost per successful action | AI economics | Cost monitoring + analytics | Down | Rising trend triggers model/provider review | Product + Finance |
| Gross margin after AI costs | Executive guardrail | Finance | Above target band | Falls below band triggers pricing/cost review | Finance |
| NRR by cohort | Durability | Finance / BI | Stable/up | Cohort decline triggers retention review | CS |
| Data health score | Trust gate | CRM audit | Above threshold | Drop below threshold limits strategic use | RevOps |

## Display rules

- show trailing 4-week trend for all weekly metrics
- show green/yellow/red status against target
- show owner for every metric
- include one-line caveat when data freshness or trust is weak

## Exclusions

Do not include:

- rep-level activity metrics
- daily campaign metrics
- detailed attribution path reports
- raw model/provider engineering telemetry

## Review output

Every review should end with:

- top 3 insights
- top 3 actions
- owners
- due dates
- assumptions to validate next week
