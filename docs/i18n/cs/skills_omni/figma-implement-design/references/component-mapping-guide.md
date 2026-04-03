# Component Mapping Guide (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma-implement-design/references/component-mapping-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma-implement-design/references/component-mapping-guide.md)

---


Use this guide to translate Figma components into existing implementation primitives.

## Goal

Prefer reuse and extension over recreation. The target is not to copy the screenshot literally with fresh code. The target is to express the design through the repository's existing UI system whenever possible.

## Mapping worksheet

| Figma component | Variant / state | Existing code component | Props / slots / composition | Gap | Action |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  | reuse / extend / compose / create |

## Decision order

### 1. Reuse directly

Use an existing component unchanged when it already supports the design.

### 2. Extend with a variant or prop

Use this when the design differs in a way that fits the current component model, such as:

- size
- emphasis
- icon placement
- state treatment
- layout density

### 3. Compose from existing primitives

Use this when the design is a higher-level pattern that can be built from existing container, typography, button, badge, list, or input primitives.

### 4. Create a new component

Do this only when no reasonable reusable path exists.

## Checks before creating a new component

- Is there an existing primitive that covers 80 to 90 percent of the design?
- Would a new variant be cleaner than a duplicate component?
- Would a wrapper or composition preserve consistency better than a one-off implementation?
- Will a new component improve the system, or only satisfy one screenshot?

## Code Connect-style thinking

When a Figma component clearly corresponds to a design-system primitive, preserve the semantic meaning of that component in code:

- preserve variants as variants, not ad hoc classes
- preserve state distinctions as props or controlled behavior
- preserve slots and composition patterns where the codebase already has them

## Output note template

```text
Mapped Figma component `<FigmaName>` variant `<Variant>` to `<CodeComponent>` using props `<Props>`. Extended the existing component instead of creating a duplicate because the visual difference fit the current component API.
```
