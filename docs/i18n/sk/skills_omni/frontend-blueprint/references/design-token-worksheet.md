# Design Token Worksheet (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-blueprint/references/design-token-worksheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-blueprint/references/design-token-worksheet.md)

---


Use this to convert approved visual decisions into implementation-ready values.

## Core Principles

- Prefer shared tokens over repeated hard-coded values.
- Keep semantic roles separate from raw values when possible.
- Capture only what is approved; do not invent a full design system for a tiny task.

## Token Categories

### Color

- `color.bg.canvas`
- `color.bg.surface`
- `color.bg.elevated`
- `color.text.primary`
- `color.text.secondary`
- `color.text.inverse`
- `color.border.default`
- `color.action.primary`
- `color.action.primaryHover`
- `color.status.success`
- `color.status.warning`
- `color.status.error`

### Typography

- `font.family.heading`
- `font.family.body`
- `font.size.xs|sm|md|lg|xl`
- `font.weight.regular|medium|semibold|bold`
- `line.height.tight|normal|relaxed`

### Spacing

- `space.1`
- `space.2`
- `space.3`
- `space.4`
- `space.6`
- `space.8`
- `space.12`

### Radius

- `radius.sm`
- `radius.md`
- `radius.lg`
- `radius.pill`

### Shadow

- `shadow.sm`
- `shadow.md`
- `shadow.lg`

### Motion

- `motion.duration.fast`
- `motion.duration.normal`
- `motion.easing.standard`
- `motion.enabled`

## Minimal Handoff Example

- colors approved and named
- typography pairing confirmed
- spacing rhythm selected
- radius style selected
- motion style selected or disabled

## Implementation Note

For web output, CSS custom properties are often the simplest durable mapping for these tokens.
