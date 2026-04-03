# Generator Discovery Guide (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-generate/references/generator-discovery-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-generate/references/generator-discovery-guide.md)

---


Use this guide before choosing a generator.

## Goal

Find the narrowest generator that satisfies the user's request while preferring workspace-local conventions.

## Discovery sequence

1. Confirm you are in the correct Nx workspace.
2. Identify the package-manager wrapper used by the repo.
3. List available plugins:
   ```bash
   pnpm nx list
   ```
4. Inspect relevant plugin generators:
   ```bash
   pnpm nx list @nx/react
   pnpm nx list @nx/js
   ```
5. Look for local workspace plugins before using generic external generators.
6. Inspect exact help for the shortlisted generator:
   ```bash
   pnpm nx g <plugin>:<generator> --help
   ```

## Prefer local generators when

Choose a local generator first if it:

- produces the requested artifact type
- encodes repo naming or path conventions
- applies required tags, boundaries, or defaults
- integrates with repo-specific build/test/lint choices

## Places to inspect for local generators

Common locations include:

- repo plugin packages
- `tools/`
- `plugins/`
- workspace libraries that expose generators

Names often look like:

- `my-plugin:feature`
- `workspace-plugin:library`
- `<repo-scope>/<plugin>:<generator>`

## Decision test

Before running a generator, answer all of these:

- Does it create the right kind of artifact?
- Does it place files in the right area?
- Does it match repo conventions better than alternatives?
- Are the side effects acceptable for this request?

If any answer is unclear, inspect help, schema, or source before proceeding.
