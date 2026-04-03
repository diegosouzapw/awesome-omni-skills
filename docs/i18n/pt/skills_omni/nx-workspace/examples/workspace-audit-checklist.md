# Workspace Audit Checklist (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-workspace/examples/workspace-audit-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-workspace/examples/workspace-audit-checklist.md)

---


Use this checklist before making structural or CI changes in an Nx workspace.

## Project discovery

- Run `nx show projects`
- List apps and libs separately if needed
- Confirm the projects under discussion actually exist as Nx projects

## Resolved configuration

- Run `nx show project <name> --json` for the key projects
- Record `root`, `sourceRoot`, `tags`, and `targets`
- Confirm whether configuration is explicit or inferred

## Graph and boundaries

- Review `nx graph`
- Identify unexpected dependencies
- Check whether tags exist and whether they support policy enforcement

## Affected behavior

- Reproduce with explicit `base` and `head`
- Confirm CI uses the same comparison logic
- Check for shallow clone problems

## Caching

- Identify cacheable targets
- Review inputs and outputs
- Review whether `targetDefaults` should centralize repeated settings

## Recovery and handoff

- Use `nx reset` if state appears stale
- Route to task-running or generation skills when workspace analysis is complete
