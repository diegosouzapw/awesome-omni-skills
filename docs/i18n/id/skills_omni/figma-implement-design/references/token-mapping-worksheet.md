# Token Mapping Worksheet (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇪🇸 [es](../../../../es/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇩🇪 [de](../../../../de/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇮🇹 [it](../../../../it/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇮🇳 [in](../../../../in/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇹🇭 [th](../../../../th/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇮🇩 [id](../../../../id/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇳🇴 [no](../../../../no/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇩🇰 [da](../../../../da/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇮🇱 [he](../../../../he/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma-implement-design/references/token-mapping-worksheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma-implement-design/references/token-mapping-worksheet.md)

---


Use this worksheet when Figma values do not map cleanly to the target codebase.

## Mapping order

1. Exact semantic token
2. Nearest approved token
3. Temporary constant with documented follow-up

## Table

| Design property | Figma value or variable | Project token or constant | Match type | Notes |
| --- | --- | --- | --- | --- |
| Color / text primary |  |  | exact / nearest / temporary |  |
| Color / background |  |  | exact / nearest / temporary |  |
| Color / border |  |  | exact / nearest / temporary |  |
| Spacing / xs |  |  | exact / nearest / temporary |  |
| Spacing / sm |  |  | exact / nearest / temporary |  |
| Spacing / md |  |  | exact / nearest / temporary |  |
| Radius |  |  | exact / nearest / temporary |  |
| Shadow / effect |  |  | exact / nearest / temporary |  |
| Font size |  |  | exact / nearest / temporary |  |
| Font weight |  |  | exact / nearest / temporary |  |
| Line height |  |  | exact / nearest / temporary |  |

## Decision rules

- Prefer semantic tokens over raw numeric matches.
- Prefer consistency with surrounding code when visual delta is small.
- If the nearest token causes visible drift, record it explicitly.
- If a temporary constant is necessary, keep it narrowly scoped and note follow-up work.
- Do not invent a new token architecture inside a small implementation task unless the user asks for it.

## Deviation note template

```text
Mapped Figma's <value> to <project token> because no exact approved token exists in this codebase. The visible delta is <small/moderate>. Chose consistency with the existing token system over a new hardcoded value.
```
