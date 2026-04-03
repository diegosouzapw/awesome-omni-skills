# Health Score Design Guide (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/expansion-retention/references/health-score-design-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/expansion-retention/references/health-score-design-guide.md)

---


Use health scores as an explainable operating tool, not a decorative number.

## Design principles

- prefer a limited number of signals the team understands
- use more leading indicators than lagging indicators
- map every score band to an action
- separate segment models when customer behavior differs materially
- validate weights against actual churn and renewal outcomes

## Suggested signal categories

- product usage depth and breadth
- activation milestone completion
- support burden or sentiment
- stakeholder engagement
- business outcome evidence
- billing or renewal risk
- survey signals such as CSAT, CES, or NPS when available

## Minimum worksheet

For each signal, define:

- signal name
- why it matters
- source system
- refresh cadence
- segment applicability
- relative weight
- owner
- action when triggered

## Validation checks

A health score is weak when:

- nobody can explain why an account is red
- nearly all inputs are lagging indicators
- the same weighting is used across very different segments
- score changes do not lead to action
- the team can cite many false positives or false negatives

## Review cadence

- monthly review of edge cases
- quarterly recalibration against actual outcomes
- immediate review if a major pricing, packaging, or onboarding change ships
