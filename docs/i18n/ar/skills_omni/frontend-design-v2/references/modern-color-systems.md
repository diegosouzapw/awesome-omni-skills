# Modern Color Systems (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-design-v2/references/modern-color-systems.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-design-v2/references/modern-color-systems.md)

---


Distinctive color should feel intentional and remain readable.

## Goals

- build a palette with internal logic
- preserve contrast across themes
- avoid flat, generic defaults
- make accents feel earned rather than scattered

## Recommended Practices

- Use structured tokens instead of ad hoc hex values.
- Consider `oklch()` for more predictable perceptual adjustments.
- Use `color-mix()` for related surface or border steps when appropriate.
- Use `light-dark()` only when it fits the browser support and project constraints.

## Palette Strategy

Define:
- background/base
- elevated surfaces
- primary text
- secondary text
- accent color
- interactive states
- focus ring color
- success/warning/error colors

## Contrast Checks

Review at minimum:
- body text on each background tier
- control labels and placeholder strategy
- icons that communicate meaning
- focus indicators
- text inside tinted or accent surfaces

## Common Recovery Moves

If a palette is expressive but unreadable:
- lower or raise luminance first
- reduce chroma where necessary
- reserve strongest accents for interaction or emphasis
- keep neutral surfaces stable so accent colors have room to work

## Avoid

- fashionable color choices that erase readability
- neon accents used everywhere
- gradient text as a substitute for visual hierarchy
- dark themes with pure black and glowing borders by default
