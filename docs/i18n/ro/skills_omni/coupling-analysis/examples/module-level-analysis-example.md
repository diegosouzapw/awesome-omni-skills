# Module-Level Coupling Analysis Example (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇪🇸 [es](../../../../es/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇩🇪 [de](../../../../de/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇮🇹 [it](../../../../it/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇮🇳 [in](../../../../in/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇹🇭 [th](../../../../th/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇮🇩 [id](../../../../id/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇳🇴 [no](../../../../no/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇩🇰 [da](../../../../da/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇮🇱 [he](../../../../he/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coupling-analysis/examples/module-level-analysis-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coupling-analysis/examples/module-level-analysis-example.md)

---


## Scenario

A monolith contains `billing`, `pricing`, and `discounts` packages. The team reports that pricing-rule changes often require edits in all three packages.

## Scope

- abstraction level: module/package
- target: billing-related packages only

## Evidence collected

- import relationships between packages
- git history for the last 6 months
- duplicated rule inspection in pricing logic
- owner/team data from CODEOWNERS

## Sample finding

### Finding: Duplicated premium-customer rule across pricing and discounts

- **Elements involved:** `pricing` and `discounts`
- **Coupling type:** Functional (symmetric)
- **Strength:** High
- **Distance:** Moderate
- **Volatility:** High
- **Effective risk:** High
- **Confidence:** Medium

**Evidence**
- Structural: no direct import between the two packages
- History: rule-related files frequently co-change
- Organizational: same team owns both packages
- Semantic: both packages implement nearly identical premium-threshold logic

**Why it matters**
Changes to pricing policy require synchronized edits in multiple places, increasing regression risk.

**Recommended action**
Extract the shared pricing policy into a dedicated module or explicitly document why duplication is acceptable.

## Positive pattern

`billing` consumes a narrow `PriceQuote` DTO instead of the full internal pricing model. This is evidence of lower-strength contract coupling.
