# Component Accessibility Patterns (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/accessibility/references/component-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/accessibility/references/component-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/accessibility/references/component-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/accessibility/references/component-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/accessibility/references/component-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/accessibility/references/component-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/accessibility/references/component-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/accessibility/references/component-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/accessibility/references/component-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/accessibility/references/component-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/accessibility/references/component-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/accessibility/references/component-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/accessibility/references/component-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/accessibility/references/component-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/accessibility/references/component-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/accessibility/references/component-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/accessibility/references/component-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/accessibility/references/component-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/accessibility/references/component-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/accessibility/references/component-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/accessibility/references/component-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/accessibility/references/component-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/accessibility/references/component-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/accessibility/references/component-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/accessibility/references/component-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/accessibility/references/component-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/accessibility/references/component-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/accessibility/references/component-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/accessibility/references/component-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/accessibility/references/component-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/accessibility/references/component-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/accessibility/references/component-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/accessibility/references/component-patterns.md)

---


Use native patterns whenever possible.

## Dialog / modal

Preferred:

- native `dialog` where suitable
- accessible name via visible heading or label
- focus moves into dialog
- background interaction disabled
- focus returns to opener

## Tabs

Use only when the UI is actually tabs, not just buttons that switch content.

Expected:

- `tablist`, `tab`, `tabpanel`
- selected state and relationships are correct
- keyboard behavior follows APG guidance

## Accordion / disclosure

Preferred:

- `button` to toggle panel
- `aria-expanded` synchronized with visibility
- content removed from focus flow when collapsed

## Combobox

High risk. Use an existing accessible implementation if possible.

Expected:

- input or trigger naming
- active option tracking
- keyboard navigation
- announcement of expanded state and current option

## Carousel

Expected:

- pause or stop control when auto-advancing
- keyboard-operable controls
- clear labeling of current item/state
- avoid excessive motion

## Live regions

Use sparingly.

- `aria-live="polite"` for non-urgent status updates
- `role="alert"` / assertive behavior only for urgent issues
- do not flood users with repeated announcements
