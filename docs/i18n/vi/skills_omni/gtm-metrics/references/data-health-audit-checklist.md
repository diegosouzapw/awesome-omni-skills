# Data Health Audit Checklist (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gtm-metrics/references/data-health-audit-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gtm-metrics/references/data-health-audit-checklist.md)

---


Use this checklist before benchmarking, board reporting, or major budget decisions.

## Scoring model

A practical scoring model:

```text
Data Health Score = (Completeness * 0.35) + (Accuracy * 0.30) + (Recency * 0.20) + (Consistency * 0.15)
```

## Decision gate

| Score | Meaning | Allowed use |
| --- | --- | --- |
| 90-100 | High trust | Strategic reporting and planning |
| 80-89 | Usable with caveats | Most reviews; note weak areas |
| 70-79 | Directional only | Avoid hard benchmark or board-grade claims |
| Below 70 | Unsafe for strategic use | Clean data before drawing conclusions |

## Completeness

Check whether required fields are populated for the relevant object.

Typical required fields:

- lead source
- lifecycle stage
- owner
- stage dates
- opportunity amount
- close date
- account segment
- pricing model or plan
- product/account identifier mapping

## Accuracy

Check whether values appear valid and believable.

Review:

- impossible dates
- negative or zero values where invalid
- stale owner or segment assignments
- obviously wrong source tags
- duplicate opportunities or accounts

## Recency

Check whether the data is current enough for the decision.

Review:

- records updated in the last 30/60/90 days
- stage movements logged promptly
- enrichment refresh cadence
- lag between source system and reporting layer

## Consistency

Check whether fields and rules are used the same way across teams and systems.

Review:

- standardized stage names
- standardized channel naming
- consistent date logic
- one active definition per key metric
- stable account and user identity joins

## Required audits for GTM measurement

### CRM audit

- stage/date completeness
- owner completeness
- source and campaign tagging
- duplicate lead/contact/account rate
- closed-lost reason coverage

### Product analytics audit

- stable event names
- stable value-event definition
- account mapping quality
- user identity merge policy
- event coverage for activation and success actions

### Billing / finance audit

- invoiced versus recognized revenue definitions
- contract amendments and expansions captured
- usage records aligned to billed units
- committed versus consumed logic documented

## Stop conditions

Pause strategic interpretation if any of these are true:

- source fields are missing for a large share of pipeline
- stage dates are incomplete or overwritten unpredictably
- billing and CRM cannot be joined reliably at account level
- TTFV or activation depends on an undefined event
- AI cost inputs are missing or aggregated too coarsely to assess margin

## Remediation output

If the audit fails, produce:

- the lowest-trust domains
- the likely business impact
- the top 3 cleanup actions
- the owner of each cleanup action
- the earliest date when the metric can be trusted again
