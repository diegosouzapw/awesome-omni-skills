# Workspace Inspection Guide (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-workspace/references/workspace-inspection-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-workspace/references/workspace-inspection-guide.md)

---


Use this guide when you need a reliable picture of an Nx workspace before changing configuration.

## Preferred inspection sequence

1. List projects.
2. Inspect the specific project's resolved configuration.
3. Review the graph.
4. Only then read raw config files for edits.

## Core commands

```bash
nx show projects
nx show projects --type app
nx show projects --type lib
nx show projects --withTarget build
nx show project <name> --json
nx graph
```

## Why resolved configuration matters

In modern Nx workspaces, effective behavior may come from multiple places:

- `project.json`
- `package.json`
- `nx.json`
- plugin inference
- workspace-wide defaults

For diagnosis, start with:

```bash
nx show project <name> --json
```

Then inspect fields such as:

- `root`
- `sourceRoot`
- `projectType`
- `tags`
- `targets`
- `implicitDependencies`

## Safe operator notes

- Do not assume every project under `libs/` is interchangeable.
- Do not infer dependency direction from folders alone.
- Do not edit config until you have confirmed the resolved current state.
