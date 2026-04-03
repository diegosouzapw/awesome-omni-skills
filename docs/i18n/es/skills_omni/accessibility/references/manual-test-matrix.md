# Manual Accessibility Test Matrix (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/accessibility/references/manual-test-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/accessibility/references/manual-test-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/accessibility/references/manual-test-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/accessibility/references/manual-test-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/accessibility/references/manual-test-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/accessibility/references/manual-test-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/accessibility/references/manual-test-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/accessibility/references/manual-test-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/accessibility/references/manual-test-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/accessibility/references/manual-test-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/accessibility/references/manual-test-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/accessibility/references/manual-test-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/accessibility/references/manual-test-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/accessibility/references/manual-test-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/accessibility/references/manual-test-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/accessibility/references/manual-test-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/accessibility/references/manual-test-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/accessibility/references/manual-test-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/accessibility/references/manual-test-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/accessibility/references/manual-test-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/accessibility/references/manual-test-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/accessibility/references/manual-test-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/accessibility/references/manual-test-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/accessibility/references/manual-test-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/accessibility/references/manual-test-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/accessibility/references/manual-test-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/accessibility/references/manual-test-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/accessibility/references/manual-test-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/accessibility/references/manual-test-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/accessibility/references/manual-test-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/accessibility/references/manual-test-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/accessibility/references/manual-test-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/accessibility/references/manual-test-matrix.md)

---


## Core checks for most pages

| Area | What to verify |
| --- | --- |
| Keyboard | Every interactive control is reachable and usable without a mouse |
| Focus visible | Focus indicator is obvious on every interactive element |
| Focus order | Tabbing follows a logical order |
| Headings and landmarks | Structure supports quick navigation |
| Names and labels | Controls have meaningful names and labels |
| Forms | Instructions, errors, grouping, and submit flow are understandable |
| Zoom / reflow | Content remains usable at 200% zoom |
| Contrast | Text and UI states remain distinguishable |
| Motion | Reduced motion preference is respected where motion is substantial |
| Dynamic updates | Status messages and alerts are announced appropriately |

## Screen reader spot checks

Check at least:

- page title
- main landmarks
- heading list quality
- link and button names
- form field names, descriptions, and errors
- dialog names and boundaries
- status update announcements

## Component-specific checks

### Dialogs

- focus moves into dialog on open
- dialog has an accessible name
- background is not interactable
- escape closes when appropriate
- focus returns to opener

### Tabs

- selected state is announced
- arrow-key navigation works if implemented as APG tabs
- tabpanel association is correct

### Accordions / disclosures

- trigger is a button
- expanded state is announced
- hidden content is not focusable when collapsed

### Menus

- use a real menu pattern only when it is truly an application-style menu
- avoid calling simple site navigation a menu widget

### Forms

- required status is conveyed
- inline errors are associated
- summary behavior is predictable
- validation does not cause focus loss
