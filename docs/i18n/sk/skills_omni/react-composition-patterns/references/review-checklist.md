# React Composition Review Checklist (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/references/review-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/references/review-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/references/review-checklist.md)

---


Use this checklist for PR review, design review, or pre-handoff validation.

## API clarity

- [ ] Can a consumer understand the public API without learning hidden internal structure?
- [ ] Have boolean props been reduced, constrained, or replaced where combinations were confusing?
- [ ] Are variants, subcomponents, and prop names based on user intent rather than implementation detail?

## Pattern choice

- [ ] Is this the lightest viable composition pattern?
- [ ] Would plain props or `children` be enough?
- [ ] If context is used, do descendants actually need shared state or actions?
- [ ] If render props are used, does the consumer truly need render control?
- [ ] If `Children` or `cloneElement` are used, are the constraints explicit and justified?

## State ownership

- [ ] Is state ownership explicit: controlled, uncontrolled, or provider-owned?
- [ ] Is there one clear source of truth?
- [ ] Has the implementation avoided effect-based mirroring of props to state unless truly necessary?

## Compound component quality

- [ ] Do subcomponents fail fast with a helpful error when rendered outside the provider?
- [ ] Is the context contract small and coherent?
- [ ] Would the API still behave correctly if children are wrapped or reordered?

## React version safety

- [ ] Are examples and code aligned with the repo's actual React version?
- [ ] Is React 19 syntax used only where the codebase supports it?
- [ ] Has the review avoided claiming that `use()` broadly replaces `useContext()`?

## Migration and testing

- [ ] Is there a safe migration path for existing consumers?
- [ ] Are state preservation and reset behaviors intentional?
- [ ] Are accessibility responsibilities still clear after the refactor?
- [ ] Are composed interactions testable at the public API level?
