# Unit Economics Worksheet (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-pricing/references/unit-economics-worksheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-pricing/references/unit-economics-worksheet.md)

---


Use this worksheet before recommending pricing, repricing, or margin targets.

## 1. Product context

- Product archetype: copilot / agent / API-platform / AI-enabled service
- Primary buyer:
- Sales motion: self-serve / sales-assisted / enterprise
- Current pricing model:
- Proposed pricing model:

## 2. External billable metric vs internal cost meter

| Type | Definition | Example |
| --- | --- | --- |
| Customer-facing billable metric | What appears on packaging and invoices | seat, resolved ticket, document, API call, credits |
| Internal cost meter | What finance and operations use to model cost | input tokens, output tokens, model calls, retries, human review minutes |

Write both explicitly:

- External billable metric:
- Internal cost meter(s):

## 3. Usage assumptions

Capture both average and tail behavior.

| Input | Average | p95 | p99 | Notes |
| --- | --- | --- | --- | --- |
| Tasks or billable units per customer per month |  |  |  |  |
| Input tokens per task |  |  |  |  |
| Output tokens per task |  |  |  |  |
| Model or provider mix |  |  |  |  |
| Retry rate |  |  |  |  |
| Tool-call frequency |  |  |  |  |
| Cache hit rate |  |  |  |  |
| Human-review rate |  |  |  |  |
| Support burden |  |  |  |  |

## 4. Revenue model

For each tier or package, define:

| Tier | Base revenue | Included usage | Overage / variable revenue | Annual or prepaid incentive |
| --- | --- | --- | --- | --- |
| Starter |  |  |  |  |
| Pro |  |  |  |  |
| Enterprise |  |  |  |  |

## 5. Variable cost model

Use live provider pricing inputs before filling this out.

| Cost component | Per unit estimate | Source / assumption |
| --- | --- | --- |
| AI inference cost |  |  |
| Tooling or retrieval cost |  |  |
| Human review or operations cost |  |  |
| Support / servicing cost |  |  |
| Other variable delivery cost |  |  |

## 6. Formula

Use this base formula:

```text
Revenue per customer or cohort
- AI variable cost
- delivery / support variable cost
= contribution margin

Contribution margin / revenue = gross margin %
```

For per-unit analysis:

```text
Revenue per billable unit
- AI cost per billable unit
- delivery cost per billable unit
= unit contribution
```

## 7. Sensitivity checks

Run at least these scenarios:

- base case
- high-usage case
- expensive-model case
- lower-cache / higher-retry case
- enterprise discount case

## 8. Decision questions

- Does the package stay healthy at p95 usage?
- Are heavy users underpriced?
- Is the billable metric easy for customers to understand?
- Are overages too sharp and likely to create bill shock?
- Would a hybrid base + usage package improve both predictability and margin?
- Are enterprise discounts erasing the value of the package?

## 9. Recommendation summary

- Recommended metric:
- Recommended tiers:
- Expected strengths:
- Main margin risks:
- Required controls:
- Repricing or migration needed: yes / no
