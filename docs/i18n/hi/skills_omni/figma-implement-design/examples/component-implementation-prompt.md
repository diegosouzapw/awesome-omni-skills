# Example Prompt: Single Component Implementation (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇪🇸 [es](../../../../es/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇩🇪 [de](../../../../de/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇮🇹 [it](../../../../it/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇮🇳 [in](../../../../in/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇹🇭 [th](../../../../th/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇮🇩 [id](../../../../id/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇳🇴 [no](../../../../no/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇩🇰 [da](../../../../da/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇮🇱 [he](../../../../he/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma-implement-design/examples/component-implementation-prompt.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma-implement-design/examples/component-implementation-prompt.md)

---


```text
Implement the Figma component at this URL in the target repository.

Requirements:
- Start by extracting the file key and node ID.
- Fetch structured design context first.
- Fetch a screenshot and keep it as the visual source of truth.
- Check whether the repository already has an equivalent component.
- Reuse or extend that component instead of duplicating it when possible.
- Map Figma colors, spacing, typography, and radius to project tokens.
- Use Figma-provided assets rather than adding third-party substitutes.
- Preserve semantic HTML and keyboard accessibility.
- At the end, provide a short implementation note listing reused components, token mappings, assets used, and any justified deviations.

Figma URL:
https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
```

## Expected shape of result

- code implementation in project conventions
- explicit note about reused button or primitive components
- note about token mapping decisions
- brief parity and accessibility confirmation
