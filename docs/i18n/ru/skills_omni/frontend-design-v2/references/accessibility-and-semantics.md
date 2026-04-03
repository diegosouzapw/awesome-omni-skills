# Accessibility and Semantics (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-design-v2/references/accessibility-and-semantics.md)

---


Highly designed interfaces still need to be understandable, operable, and navigable.

## Core Rules

- Prefer semantic HTML before ARIA.
- Use landmarks and headings to preserve navigability.
- Use `button` for actions and `a` for navigation.
- Keep visible labels for inputs.
- Preserve focus visibility.
- Remove purely decorative layers from the accessibility tree.

## Decorative Assets

Use decorative images carefully:
- If an image is purely decorative, prefer CSS backgrounds or empty `alt` text.
- If a decorative wrapper duplicates visible content, keep it out of the accessibility tree.
- Do not place meaningful text inside `aria-hidden="true"` containers.

## Forms

Ensure:
- labels are visible and associated
- instructions are near the field
- errors are specific
- grouped controls are grouped semantically
- common fields use helpful `autocomplete` tokens

## Interaction Checks

Verify:
- keyboard-only users can operate the UI
- focus order matches the visual flow
- controls are large enough to target reliably
- focus states remain visible in all themes

## Fast Review Checklist

- Are there meaningful landmarks?
- Is heading order sensible?
- Are all actions real buttons?
- Are all navigation items real links?
- Are decorative layers hidden from assistive tech?
- Are forms labeled and understandable?
- Is focus styling obvious enough to use?
