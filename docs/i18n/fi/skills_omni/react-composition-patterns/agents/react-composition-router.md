# React Composition Router (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/agents/react-composition-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/agents/react-composition-router.md)

---


Use this note to decide whether to stay in this skill or hand off.

## Stay in this skill when

- The main issue is component API clarity.
- The request centers on props vs children vs context vs render props.
- The user is refactoring boolean-heavy components.
- The component library needs a safer compound component design.
- The question is about controlled/uncontrolled state ownership in reusable components.

## Hand off when

- The main issue is rendering performance or optimization rather than API design.
- The main issue is accessibility semantics, keyboard interaction, or focus management depth.
- The task becomes mostly about test strategy rather than component composition.
- The hardest part is TypeScript type modeling rather than React composition.
- The request becomes framework-routing or app-architecture specific instead of component API specific.

## Safe handoff wording

- "The composition pattern is clear; the next pass should focus on accessibility behavior."
- "This is no longer mainly a composition problem; route to React best practices for performance-focused work."
- "The API shape is settled; move to the testing skill to validate controlled and uncontrolled flows."
