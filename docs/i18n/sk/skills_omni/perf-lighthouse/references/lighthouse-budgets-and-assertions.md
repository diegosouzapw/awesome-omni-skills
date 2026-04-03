# Lighthouse Budgets and Assertions (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-lighthouse/references/lighthouse-budgets-and-assertions.md)

---


Use budgets and assertions for different purposes.

## When to use `budget.json`

Use a Lighthouse budget file when you want to express limits for:

- resource sizes
- resource counts
- supported timing budgets

This is useful when you want a versioned budget policy that is close to Lighthouse budget support.

## When to use LHCI assertions

Use LHCI assertions when you want CI logic such as:

- fail if performance score is below a threshold
- fail if LCP or CLS exceeds a limit
- warn on accessibility score drops

Assertions are the better fit for CI gating and automation logic.

## Recommendation

For mature workflows:

- keep a versioned `budget.json` for budget policy
- keep `lighthouserc.js` assertions for CI pass/fail behavior
- retain artifacts whether the run passes or fails

## Example split

- `examples/budget.json` controls resource and timing budgets
- `examples/lighthouserc.js` controls collect/assert/upload behavior

## Caution

Do not rely on the aggregate score alone when writing assertions. Prefer a mix of category thresholds and specific metric thresholds where they better match the team's tolerance for regressions.
