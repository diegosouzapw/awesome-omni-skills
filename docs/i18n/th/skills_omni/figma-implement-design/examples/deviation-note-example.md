# Example Deviation Note (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇪🇸 [es](../../../../es/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇩🇪 [de](../../../../de/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇮🇹 [it](../../../../it/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇮🇳 [in](../../../../in/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇹🇭 [th](../../../../th/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇮🇩 [id](../../../../id/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇳🇴 [no](../../../../no/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇩🇰 [da](../../../../da/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇮🇱 [he](../../../../he/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma-implement-design/examples/deviation-note-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma-implement-design/examples/deviation-note-example.md)

---


```text
Implemented node `10-5` using the existing `PageShell`, `Card`, `Button`, and `StatTile` primitives.

Token mapping:
- mapped Figma background value to the nearest approved surface token
- mapped 14px internal spacing to the closest approved spacing token used across the dashboard
- reused the repository typography scale instead of introducing a one-off text size

Assets:
- used the SVGs returned by the Figma asset flow during the active session

Deviations:
- preserved visible focus styles even though the design screenshot did not show focus treatment
- replaced a clickable container pattern with a semantic button for keyboard accessibility
- kept the nearest approved radius token because no exact radius token existed in the current design system
```
