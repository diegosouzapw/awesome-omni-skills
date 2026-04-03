# Router (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-generate/agents/router.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-generate/agents/router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-generate/agents/router.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-generate/agents/router.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-generate/agents/router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-generate/agents/router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-generate/agents/router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-generate/agents/router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-generate/agents/router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-generate/agents/router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-generate/agents/router.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-generate/agents/router.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-generate/agents/router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-generate/agents/router.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-generate/agents/router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-generate/agents/router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-generate/agents/router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-generate/agents/router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-generate/agents/router.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-generate/agents/router.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-generate/agents/router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-generate/agents/router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-generate/agents/router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-generate/agents/router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-generate/agents/router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-generate/agents/router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-generate/agents/router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-generate/agents/router.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-generate/agents/router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-generate/agents/router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-generate/agents/router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-generate/agents/router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-generate/agents/router.md)

---


Use this skill when the main task is Nx-based scaffolding or code generation.

## Stay in `nx-generate` when

- the user wants to create an app, library, component, route, or feature
- the repo uses local Nx generators to enforce conventions
- the work starts with `nx g` or `nx generate`

## Hand off to `@nx-run-tasks` when

- generation is complete and the remaining work is task execution
- the user mainly wants lint/test/build/affected verification
- the issue is now CI-style command execution rather than scaffolding

## Hand off to `@nx-workspace` when

- the main task is workspace configuration or plugin setup
- the user wants to change presets, root config, tags policy, or workspace structure by hand
- the request is broader than a single generation workflow

## Hand off to debugging/refactoring skills when

- generated output exposes broader application failures
- the problem becomes architectural, dependency-boundary, or circular-dependency remediation
- the fix requires code changes well beyond normal generator output cleanup
