# Caching and Target Defaults (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-workspace/references/caching-and-target-defaults.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-workspace/references/caching-and-target-defaults.md)

---


Use this guide to improve Nx cache correctness and maintainability.

## Review order

1. Confirm the target should be cacheable.
2. Review inputs.
3. Review outputs.
4. Review workspace defaults.
5. Review remote cache strategy.

## What to inspect

### Inputs

Inputs determine what changes invalidate cached results.

Review whether:

- source files are included correctly
- config files that affect output are included
- inputs are too broad and causing avoidable misses
- inputs are too narrow and risking incorrect hits

### Named inputs

Use `namedInputs` to avoid repeating the same file sets across targets and projects.

### Outputs

Outputs tell Nx what artifacts can be restored from cache.

If outputs are missing or incomplete, restored task results may appear broken even when caching works.

### targetDefaults

Use `targetDefaults` in `nx.json` when many projects share the same target behavior.

Good uses include standardizing:

- cache settings
- shared inputs
- shared outputs
- common target options where appropriate

## Remote cache

Local caching is useful by default. Remote cache becomes valuable when:

- multiple developers should reuse results
- CI should reuse local or prior CI results
- repeated validation costs are high

Do not assume one remote cache product is required. Choose a supported approach that fits the repository.

## Common causes of cache misses

- undeclared or inconsistent inputs
- missing outputs
- environment differences between local and CI
- target behavior duplicated inconsistently across projects
