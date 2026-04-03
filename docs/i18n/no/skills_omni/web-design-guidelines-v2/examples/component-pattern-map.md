# Component Pattern Map (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇪🇸 [es](../../../../es/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇩🇪 [de](../../../../de/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇮🇹 [it](../../../../it/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇮🇳 [in](../../../../in/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇹🇭 [th](../../../../th/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇮🇩 [id](../../../../id/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇳🇴 [no](../../../../no/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇩🇰 [da](../../../../da/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇮🇱 [he](../../../../he/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-design-guidelines-v2/examples/component-pattern-map.md)

---


This quick map helps reviewers choose the right baseline before critiquing a component.

## Native-first map

- Action button -> use `<button>`
- Navigation link -> use `<a href>`
- Text entry -> use `<input>` or `<textarea>`
- Single select -> prefer native `<select>` unless product requirements justify a custom combobox
- Checkbox / radio -> use native inputs
- Disclosure -> button controlling expandable content
- Dialog -> native `<dialog>` or a robust accessible dialog pattern
- Tabs -> buttons with associated tab panels
- Data table -> semantic `<table>` when the content is tabular

## When to compare against APG patterns

Compare against APG when the component is a genuinely custom:

- dialog
- tabs
- accordion
- menu button
- combobox
- listbox
- toolbar

## Reviewer shortcut

If a custom implementation exists only for styling reasons and native HTML could satisfy the requirement, that is usually worth flagging as a design and maintainability issue as well as an accessibility risk.
