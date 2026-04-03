# Nx Boundary Enforcement (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇪🇸 [es](../../../../es/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇩🇪 [de](../../../../de/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇮🇹 [it](../../../../it/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇮🇳 [in](../../../../in/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇹🇭 [th](../../../../th/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇮🇩 [id](../../../../id/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇳🇴 [no](../../../../no/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇩🇰 [da](../../../../da/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇮🇱 [he](../../../../he/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nestjs-modular-monolith/references/nx-boundary-enforcement.md)

---


If the repository uses Nx, use it to make architecture rules executable.

## Recommended approach

Tag projects by domain and type, for example:

- `scope:billing`
- `scope:identity`
- `type:feature`
- `type:domain`
- `type:shared`

Then define dependency constraints so modules can only depend on approved targets.

## Typical goals

- prevent deep cross-domain coupling
- keep shared code flowing one way
- stop presentation layers from depending on unrelated infrastructure
- expose architecture erosion early in CI

## Validation flow

1. Review tags on affected projects.
2. Check dependency constraints.
3. Inspect the project graph for unexpected edges.
4. Fail CI when forbidden edges appear.

## Review checklist

- Are tags meaningful and consistent?
- Do constraints match the intended architecture?
- Are there exceptions that should be temporary and documented?
- Does the graph show hidden shared-kernel growth?
