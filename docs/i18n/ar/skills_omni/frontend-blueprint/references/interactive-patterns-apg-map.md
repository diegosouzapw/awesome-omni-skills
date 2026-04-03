# Interactive Patterns APG Map (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-blueprint/references/interactive-patterns-apg-map.md)

---


Use this file when visual work includes interactive behavior that must remain accessible.

## Prefer Native First

Before using ARIA-heavy patterns, ask whether a native element solves the problem.

- button before div with click handlers
- details/summary when suitable for disclosure
- form controls before custom replicas
- dialog element where supported by project constraints

## Common Pattern Map

- Dialog / modal: check focus management, escape handling, initial focus, and return focus behavior
- Tabs: check selected state, keyboard navigation, and panel association
- Accordion / disclosure: check button semantics, expanded state, and content relationship
- Menu / menubar: use only when true menu behavior is needed, not for ordinary site nav
- Combobox: validate input, popup, selection, and keyboard interactions carefully
- Listbox: ensure selection model and keyboard support are explicit
- Tooltip: ensure it supplements rather than replaces essential labeling

## Warning Signs

- clickable divs replacing buttons
- hover-only affordances hiding essential actions
- custom dropdowns without keyboard support
- modals without focus trapping or close affordance
- tabs or accordions that only work visually

## Practical Rule

If a component becomes harder to explain semantically than visually, pause and fix the structure before polishing visuals further.
