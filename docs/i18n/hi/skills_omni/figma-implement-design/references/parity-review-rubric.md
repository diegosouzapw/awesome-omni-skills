# Parity Review Rubric (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇪🇸 [es](../../../../es/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇩🇪 [de](../../../../de/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇮🇹 [it](../../../../it/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇮🇳 [in](../../../../in/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇹🇭 [th](../../../../th/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇮🇩 [id](../../../../id/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇳🇴 [no](../../../../no/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇩🇰 [da](../../../../da/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇮🇱 [he](../../../../he/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma-implement-design/references/parity-review-rubric.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma-implement-design/references/parity-review-rubric.md)

---


Use this rubric before handoff, merge, or final response.

## Visual fidelity

### Layout and spacing

- Does the implementation preserve the overall structure of the target node?
- Are spacing, padding, gaps, and alignment close to the screenshot?
- Do section proportions feel consistent with the design?

### Typography

- Are font sizes, weights, line heights, and hierarchy consistent with the design intent?
- Are long text and wrapping behaviors acceptable relative to the design?

### Color and effects

- Are colors mapped correctly to project tokens or approved fallbacks?
- Are borders, shadows, radius, and opacity treatments reasonably faithful?

### Assets

- Do icons, SVGs, and images match the design?
- Were Figma-provided assets used where available?

## Behavior and responsiveness

- Do hover, focus, active, disabled, and selected states exist when expected?
- Does responsive behavior follow the layout model and constraints from design context?
- For large screens, do decomposed sections still align visually when assembled?

## Semantics and accessibility

- Are native HTML controls used where possible?
- Is ARIA only used where needed?
- Can keyboard users operate the UI?
- Is focus visible?
- Are accessible names present?
- Were any design-driven accessibility issues corrected instead of copied literally?

## Documentation quality

- Are reused or extended components listed?
- Are token mappings or token mismatches recorded?
- Are deviations from Figma explained briefly and concretely?

## Review outcomes

### Accept

Use when visual parity is strong and deviations are minor, intentional, and documented.

### Accept with notes

Use when the implementation is good but there are known token, asset, or platform-rendering deltas.

### Rework

Use when any of these are true:

- wrong component or screen scope was implemented
- screenshot parity is poor
- decomposition was skipped for a clearly oversized design
- repository components were duplicated unnecessarily
- semantics or accessibility regressed for the sake of visual copying
