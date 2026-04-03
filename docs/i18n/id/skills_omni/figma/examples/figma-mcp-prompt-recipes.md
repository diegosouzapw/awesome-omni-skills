# Figma MCP Prompt Recipes (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇪🇸 [es](../../../../es/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇩🇪 [de](../../../../de/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇮🇹 [it](../../../../it/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇮🇳 [in](../../../../in/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇹🇭 [th](../../../../th/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇮🇩 [id](../../../../id/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇳🇴 [no](../../../../no/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇩🇰 [da](../../../../da/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇮🇱 [he](../../../../he/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma/examples/figma-mcp-prompt-recipes.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma/examples/figma-mcp-prompt-recipes.md)

---


## 1. Setup verification

```text
Use @figma to verify Figma MCP setup. Confirm connection readiness, authentication state, and whether this file can be read: <figma-url>
```

## 2. Structure only

```text
Use @figma on this frame link: <figma-url>. Fetch only structure and design context for the exact node. Summarize hierarchy, variants, text styles, spacing, variables, and reusable components. Do not generate code.
```

## 3. Screenshot only

```text
Use @figma on this node link: <figma-url>. Fetch a screenshot of the exact node and confirm whether it matches the requested variant before continuing.
```

## 4. Assets only after validation

```text
Use @figma on this validated node: <figma-url>. Fetch only the assets required for implementation. Do not substitute placeholders if Figma provides the assets.
```

## 5. Implementation brief

```text
Use @figma on this node link: <figma-url>. Fetch structure first, then screenshot, then required assets. Produce an implementation brief with component reuse suggestions, token mapping notes, asset dependencies, and unresolved ambiguities.
```

## 6. Compare variants

```text
Use @figma to compare these two node links: <figma-url-a> and <figma-url-b>. Summarize differences in hierarchy, copy, spacing, visual states, and assets. Keep the result scoped and implementation-oriented.
```
