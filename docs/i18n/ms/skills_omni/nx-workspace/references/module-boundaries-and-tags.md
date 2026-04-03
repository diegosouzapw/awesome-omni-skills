# Module Boundaries and Tags (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-workspace/references/module-boundaries-and-tags.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-workspace/references/module-boundaries-and-tags.md)

---


Use this guide when workspace architecture needs enforceable dependency rules.

## Principle

Folders suggest organization. Tags and boundary rules enforce policy.

## Useful tag dimensions

### Scope

Examples:

- `scope:shared`
- `scope:billing`
- `scope:auth`

### Type

Examples:

- `type:feature`
- `type:ui`
- `type:data-access`
- `type:util`

### Platform

Examples:

- `platform:web`
- `platform:server`
- `platform:mobile`

## Policy examples

- `type:feature` may depend on `type:ui`, `type:data-access`, and `type:util`
- `type:ui` should not depend on `type:feature`
- `scope:billing` should not depend on `scope:auth` unless explicitly allowed
- `platform:web` should not import server-only libraries

## Review checklist

- Does every important project have tags?
- Are tags consistent across the workspace?
- Do tag names describe policy, not just ownership trivia?
- Are constraints enforced through module-boundary rules?
- Can a reviewer tell whether an import is valid from tags alone?

## Safe operator note

Do not propose a large taxonomy rewrite unless the current one clearly blocks governance. Start by tightening the minimum useful dimensions.
