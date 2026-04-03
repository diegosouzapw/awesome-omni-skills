# Renderer Compatibility (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇪🇸 [es](../../../../es/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇫🇷 [fr](../../../../fr/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇩🇪 [de](../../../../de/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇮🇹 [it](../../../../it/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇷🇺 [ru](../../../../ru/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇯🇵 [ja](../../../../ja/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇰🇷 [ko](../../../../ko/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇸🇦 [ar](../../../../ar/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇮🇳 [hi](../../../../hi/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇮🇳 [in](../../../../in/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇹🇭 [th](../../../../th/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇻🇳 [vi](../../../../vi/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇮🇩 [id](../../../../id/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇲🇾 [ms](../../../../ms/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇳🇱 [nl](../../../../nl/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇵🇱 [pl](../../../../pl/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇸🇪 [sv](../../../../sv/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇳🇴 [no](../../../../no/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇩🇰 [da](../../../../da/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇫🇮 [fi](../../../../fi/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇵🇹 [pt](../../../../pt/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇷🇴 [ro](../../../../ro/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇭🇺 [hu](../../../../hu/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇧🇬 [bg](../../../../bg/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇸🇰 [sk](../../../../sk/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇮🇱 [he](../../../../he/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇵🇭 [phi](../../../../phi/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇨🇿 [cs](../../../../cs/skills_omni/mermaid-studio/references/renderer-compatibility.md) · 🇹🇷 [tr](../../../../tr/skills_omni/mermaid-studio/references/renderer-compatibility.md)

---


Use this guide when a user cares about where the Mermaid diagram will be viewed, not just whether it validates locally.

## Key principle

A diagram can be valid Mermaid and still fail in a target host because renderer versions and supported features differ.

## Practical comparison

| Renderer | Best for | Common limitation |
| --- | --- | --- |
| Local CLI / packaged renderer | repeatable SVG/PNG artifact generation | depends on local browser/runtime environment |
| Mermaid Live | quick parser sanity checks and isolated debugging | not always identical to local packaging or target host |
| GitHub Markdown | repo docs and README embedding | may lag newer Mermaid features or differ in support |
| GitLab Markdown | docs and project pages | support can differ from both GitHub and local CLI |
| Generic Markdown viewers | local preview convenience | often inconsistent or undocumented Mermaid support |

## Use this review flow

1. Confirm the target host.
2. Check whether the diagram uses newer, beta, or icon-dependent syntax.
3. Validate locally.
4. If host support is uncertain, provide a rendered SVG/PNG fallback.

## High-risk compatibility areas

- `architecture-beta`
- C4 diagrams in environments with older Mermaid support
- icon-pack-dependent diagrams
- advanced configuration/frontmatter behavior
- newer beta diagram families such as sankey/block/packet variants

## Recommended fallback

If the target host is uncertain, deliver:

- the `.mmd` source
- an SVG render
- a short note that host preview may differ from local output
