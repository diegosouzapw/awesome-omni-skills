# AI Unit Economics Guide (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gtm-metrics/references/ai-unit-economics-guide.md)

---


AI products need more than standard SaaS revenue metrics. Usage growth without cost and quality context can hide margin problems.

## Core concepts

Track these together:

- demand or usage volume
- successful outcome volume
- revenue captured
- AI serving cost
- gross margin after AI costs

## Recommended AI metric set

| Metric | What it answers | Notes |
| --- | --- | --- |
| AI Cost of Revenue | How much revenue is consumed by AI serving cost? | Use a clear definition of included cost buckets |
| Cost per AI Action | What does each AI action cost to serve? | Helpful, but incomplete without success rate |
| Cost per Successful Action | What does a successful outcome cost? | Better than cost per raw action alone |
| Outcome Success Rate | How often does the AI action produce usable value? | Needed to avoid optimizing low-quality volume |
| Gross Margin After AI Costs | Is growth still economically attractive after AI cost? | Executive and board relevant |
| Committed vs Consumed Revenue | Are contracts and actual usage aligned? | Important for usage-based pricing |
| Revenue per Consumption Unit | Is monetization stronger than serving cost? | Track by plan or segment |
| Retained Usage by Cohort | Are customers continuing valuable usage? | Strong leading indicator for expansion |

## Cost bucket checklist

Document whether each metric includes:

- model or API charges
- hosting and inference compute
- retrieval/vector/database serving cost
- moderation/safety serving cost
- human review or human-in-the-loop cost
- support or onboarding cost when materially tied to the AI workflow

## Basic formulas

```text
AI Cost of Revenue = AI serving cost / Revenue
```

```text
Gross Margin After AI Costs = (Revenue - COGS - AI serving cost) / Revenue
```

```text
Cost per Successful Action = Total AI serving cost / Successful AI outcomes
```

## Segmentation guidance

Review AI economics by:

- customer segment
- plan or pricing tier
- use case
- provider or model family
- workflow type

This often reveals that one segment is subsidizing another.

## Warning signs

Investigate immediately when:

- revenue rises but AI gross margin falls sharply
- usage rises but successful outcomes do not
- consumed usage lags committed usage for multiple periods
- overages are high because pricing tiers are misaligned
- one model/provider change increases cost with no measurable value gain

## Dashboard placement

- **Board:** gross margin after AI costs, revenue trend, retained usage trend
- **Executive:** AI cost of revenue, cost per successful action, committed vs consumed gap
- **Operator:** provider/model mix, task-level success rate, exception or retry patterns if available

## Practical rule

For AI-native products, never report usage growth without also reporting value realization and margin impact.
