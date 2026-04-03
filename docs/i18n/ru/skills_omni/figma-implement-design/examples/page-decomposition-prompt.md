# Example Prompt: Page Decomposition Workflow (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇪🇸 [es](../../../../es/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇩🇪 [de](../../../../de/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇮🇹 [it](../../../../it/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇮🇳 [in](../../../../in/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇹🇭 [th](../../../../th/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇮🇩 [id](../../../../id/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇳🇴 [no](../../../../no/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇩🇰 [da](../../../../da/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇮🇱 [he](../../../../he/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma-implement-design/examples/page-decomposition-prompt.md)

---


```text
Implement this Figma screen in the existing codebase, but do not attempt a one-shot full-page generation.

Workflow requirements:
- Resolve the target node.
- Fetch metadata first if the screen appears large or deeply nested.
- Identify major child sections such as header, navigation, hero, cards, and tables.
- Fetch design context per child section.
- Fetch one screenshot for the full frame and keep it for parity review.
- Reuse existing layout primitives and screen-level containers where possible.
- Map tokens and assets carefully.
- Validate section-by-section, then validate the assembled screen.
- End with a short note listing decomposition choices, reused components, token mismatches, and any accessibility-driven deviations.

Figma URL:
https://figma.com/design/pR8mNv5KqXzGwY2JtCfL4D/Dashboard?node-id=10-5
```

## Expected shape of result

- implementation plan divided by screen section
- code aligned with project conventions
- no unnecessary duplicate components
- parity review against the full screenshot
