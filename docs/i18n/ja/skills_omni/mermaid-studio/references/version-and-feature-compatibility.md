# Version and Feature Compatibility (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇪🇸 [es](../../../../es/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇫🇷 [fr](../../../../fr/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇩🇪 [de](../../../../de/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇮🇹 [it](../../../../it/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇷🇺 [ru](../../../../ru/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇯🇵 [ja](../../../../ja/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇰🇷 [ko](../../../../ko/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇸🇦 [ar](../../../../ar/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇮🇳 [hi](../../../../hi/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇮🇳 [in](../../../../in/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇹🇭 [th](../../../../th/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇻🇳 [vi](../../../../vi/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇮🇩 [id](../../../../id/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇲🇾 [ms](../../../../ms/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇳🇱 [nl](../../../../nl/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇵🇱 [pl](../../../../pl/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇸🇪 [sv](../../../../sv/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇳🇴 [no](../../../../no/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇩🇰 [da](../../../../da/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇫🇮 [fi](../../../../fi/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇵🇹 [pt](../../../../pt/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇷🇴 [ro](../../../../ro/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇭🇺 [hu](../../../../hu/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇧🇬 [bg](../../../../bg/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇸🇰 [sk](../../../../sk/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇮🇱 [he](../../../../he/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇵🇭 [phi](../../../../phi/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇨🇿 [cs](../../../../cs/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md) · 🇹🇷 [tr](../../../../tr/skills_omni/mermaid-studio/references/version-and-feature-compatibility.md)

---


Use this guide before promising support for newer Mermaid syntax families.

## Why this matters

Some Mermaid syntax families are more version-sensitive than basic diagrams.

Common examples:

- C4 diagrams
- `architecture-beta`
- icon-pack-based architecture diagrams
- beta families such as `sankey-beta`, `block-beta`, and `packet-beta`

## Review steps

1. Identify the syntax family.
2. Determine the rendering path: local CLI, packaged renderer, GitHub, GitLab, or other host.
3. Prefer a minimal example first.
4. Validate locally.
5. If host support is uncertain, attach rendered artifacts instead of relying on platform preview.

## Fallback strategy

When support is unclear:

- prefer simpler syntax families where acceptable
- use plain labels instead of icon-dependent nodes
- provide SVG/PNG renders for documentation consumers
- explain that host renderers may not match local Mermaid tooling
