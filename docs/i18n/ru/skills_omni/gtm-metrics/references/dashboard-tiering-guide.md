# Dashboard Tiering Guide (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gtm-metrics/references/dashboard-tiering-guide.md)

---


Design dashboards by decision audience, not by which charts are easy to build.

## Tier summary

| Tier | Audience | Metric count | Review cadence | Typical decisions |
| --- | --- | --- | --- | --- |
| Board | Board, founders, investors | 5-7 | Monthly or quarterly | Capital allocation, GTM strategy, growth efficiency, retention health |
| Executive | Leadership team | 8-12 | Weekly | Channel mix, headcount efficiency, forecast risk, activation and retention priorities |
| Operator | Sales, marketing, growth, revops, CS | 15-25 | Daily or weekly | Routing, follow-up, stage conversion, campaign and onboarding interventions |

## Board dashboard

Keep this view strategic and stable.

Recommended metrics:

- ARR / MRR trend
- net new ARR waterfall
- NRR
- CAC payback or Magic Number
- burn multiple
- pipeline coverage
- cash or runway context when relevant

Do not include rep-level activity or daily volatility here.

## Executive dashboard

This view should connect lagging outcomes to leading drivers.

Recommended metrics:

- pipeline created
- pipeline by stage
- win rate by segment
- sales cycle length
- CAC by major channel or segment
- NRR by cohort or segment
- activation or TTFV
- data health score
- slippage rate
- AI gross margin after AI costs for AI-native products

## Operator dashboard

This view should help teams intervene in-flight.

Recommended metrics:

- activity volumes
- response times
- stage-to-stage conversion
- follow-up rates
- pipeline aging
- speed-to-lead
- PQL flow and response times
- AI outreach performance
- cost per meeting or cost per qualified lead
- feature adoption depth where relevant

## Required fields for any displayed metric

Every metric shown on a dashboard should include or link to:

- current value
- target
- trend line or recent history
- owner
- action threshold
- source system

## Common anti-patterns

| Anti-pattern | Why it fails | Better approach |
| --- | --- | --- |
| One dashboard for everyone | Creates overload and mixed decision horizons | Separate board, executive, and operator views |
| 50+ metrics on one screen | Hides true priorities | Reduce to metrics tied to real decisions |
| Snapshot only | No trend context | Show trailing 4-week, 13-week, or cohort trend |
| No owner | No action follows | Assign a metric owner and review cadence |
| Vanity metrics | Looks active but changes nothing | Keep only metrics with thresholds and actions |

## Practical rule

If a metric does not change a likely decision for that audience, it does not belong on that tier.
