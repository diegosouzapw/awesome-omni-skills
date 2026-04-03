# Figma Node Linking and Scoping (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇪🇸 [es](../../../../es/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇩🇪 [de](../../../../de/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇮🇹 [it](../../../../it/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇮🇳 [in](../../../../in/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇹🇭 [th](../../../../th/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇮🇩 [id](../../../../id/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇳🇴 [no](../../../../no/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇩🇰 [da](../../../../da/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇮🇱 [he](../../../../he/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma/references/figma-node-linking-and-scoping.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma/references/figma-node-linking-and-scoping.md)

---


Use this reference when the user provides a broad Figma link or when the wrong node keeps being targeted.

## Goal

Always prefer the smallest correct scope.

## Scoping Rules

- Best: exact layer or frame link
- Good: exact component or variant link
- Acceptable: file link plus a clear instruction about which frame to inspect
- Avoid: whole-file translation with no target guidance

## Narrowing Sequence

1. Start with the exact node if available.
2. If only a file is available, ask which frame, flow, page, or component is intended.
3. If the frame still contains multiple variants, ask which state or breakpoint matters.
4. Fetch structure first to confirm you are on the right target.
5. Use a screenshot to validate the chosen node before moving on.

## Signs the Scope Is Too Broad

- the response is truncated
- the returned structure is generic
- multiple unrelated screens are included
- asset retrieval is noisy or irrelevant
- the implementation brief contains guesswork

## Practical Prompt Pattern

```text
Use this exact Figma link: <figma-url>. If it does not point to a single implementation target, first identify the smallest relevant node or frame and confirm that target before retrieving more detail.
```
