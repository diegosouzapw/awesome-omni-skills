# Native HTML First, ARIA Second (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/accessibility/references/aria-native-first-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/accessibility/references/aria-native-first-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/accessibility/references/aria-native-first-guide.md)

---


## Rule of thumb

If a native HTML element provides the needed semantics and interaction, use it.

## Prefer

- `button` for actions
- `a href` for navigation
- `input`, `select`, `textarea` for form controls
- `details/summary` for simple disclosure
- `dialog` for modal dialogs where appropriate
- headings, lists, tables, and landmarks for structure

## Avoid common anti-patterns

- `div role="button"` instead of `button`
- adding `aria-label` when visible text already provides the right name
- adding `aria-hidden="true"` to visible, meaningful content
- leaving `aria-expanded`, `aria-selected`, or `aria-checked` out of sync with UI state
- mixing incompatible roles and native semantics

## Quick checks

- Is the element keyboard reachable?
- Does Enter or Space behave as expected?
- Does the accessible name match visible intent?
- Is the state updated when the UI changes?
- Would replacing this with a native element remove complexity?

## When ARIA is justified

ARIA is appropriate when:

- building a composite widget with no native equivalent
- exposing relationships or state not otherwise available
- announcing dynamic updates where native semantics are insufficient

If ARIA is required, follow the APG pattern for that widget.
