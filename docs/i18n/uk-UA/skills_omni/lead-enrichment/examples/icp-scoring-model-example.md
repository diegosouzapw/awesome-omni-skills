# ICP Scoring Model Example (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇪🇸 [es](../../../../es/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇩🇪 [de](../../../../de/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇮🇹 [it](../../../../it/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇮🇳 [in](../../../../in/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇹🇭 [th](../../../../th/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇮🇩 [id](../../../../id/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇳🇴 [no](../../../../no/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇩🇰 [da](../../../../da/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇮🇱 [he](../../../../he/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/lead-enrichment/examples/icp-scoring-model-example.md)

---


## Scenario

Mid-market B2B fintech workflow targeting RevOps, SalesOps, and GTM leadership in US and UK companies.

## Sample weighting

```text
Firmographic Fit = 35%
Technographic Fit = 25%
Intent Fit = 40%
```

## Example sub-score inputs

### Firmographic

- employee count in target band
- fintech / vertical fit
- target geography
- funding or maturity stage

### Technographic

- uses adjacent revenue tools
- stack complexity suggests integration value
- evidence of migration or tooling change

### Intent

- category research
- hiring related roles
- recent first-party buying signals
- funding or expansion signals

## Example routing bands

| Score band | Route |
| --- | --- |
| 85-100 | hot review queue |
| 70-84 | prioritized sequence if eligible |
| 50-69 | nurture / CRM only |
| below 50 | deprioritize or reject |

## Calibration reminder

Do not finalize the model from assumptions alone. Compare score bands against real outcomes and adjust weights if the model overvalues noisy intent or underweights durable fit signals.
