# Component Review Matrix (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-design-guidelines-v2/references/component-review-matrix.md)

---


Use native HTML first. Only fall back to ARIA widget patterns when native elements are insufficient for the product requirement.

| UI pattern | Prefer first | Review expectations | If custom is necessary |
| --- | --- | --- | --- |
| Button | `<button>` | keyboard activation, disabled state, visible focus, accessible name | Ensure Enter/Space behavior, focusability, and state exposure |
| Link | `<a href>` | real navigation target, distinguish from actions, visible focus | Avoid click-only pseudo-links |
| Text input | `<input>` / `<textarea>` | label, autocomplete, validation, helper/error text | Keep semantics and associations intact |
| Select | `<select>` | native keyboard behavior, labels, errors | Custom comboboxes need APG-aligned behavior |
| Checkbox / radio | native controls | labels, grouping, error handling, hit area | Avoid role-only reimplementations |
| Dialog | native `<dialog>` or robust accessible dialog pattern | open/close focus management, escape handling, focus return | Verify trap and initial focus behavior |
| Tabs | button-based tab pattern | selected state, tab order, panel association, arrow-key behavior | Follow APG tabs pattern if custom |
| Accordion | button + region pattern | expanded state, heading structure, keyboard access | Follow APG accordion guidance |
| Menu button | button controlling menu | open state, keyboard behavior, focus movement | Follow APG menu button guidance |
| Tooltip | native title is usually insufficient for rich help | does not hide essential info, not hover-only | Avoid putting required information only in tooltip |
| Table | `<table>` for tabular data | headers, caption/context, responsive handling | Do not use div grids for actual tabular data unless justified |

## Common anti-patterns

- `div` or `span` used as a button
- clickable card with nested interactive controls and unclear semantics
- custom select replacing native behavior without parity
- modal visually shown but not exposed as an active dialog
- tabs implemented as links or divs without state and keyboard behavior
- placeholder-only form labeling
- disabled-looking element that is still focusable and actionable without explanation

## Review rule of thumb

1. Ask whether native HTML can solve it.
2. If yes, prefer native HTML.
3. If not, compare the custom implementation to the expected APG interaction model.
4. If the component still departs from expected behavior, document the specific gap.
