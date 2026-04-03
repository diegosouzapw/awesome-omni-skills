# Tag Taxonomy Examples (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-workspace/examples/tag-taxonomy-examples.md)

---


These examples show practical tag dimensions for Nx boundary enforcement.

## Example 1: Domain plus role

- `scope:auth`
- `scope:billing`
- `scope:shared`
- `type:feature`
- `type:data-access`
- `type:ui`
- `type:util`

Example policy:

- feature libraries may depend on ui, data-access, and util
- ui libraries may depend on util only
- util libraries should remain low-level and broadly reusable

## Example 2: Add platform dimension

- `platform:web`
- `platform:server`
- `platform:mobile`

Example policy:

- `platform:web` libraries should not import `platform:server` libraries
- shared `type:util` libraries may be cross-platform if they have no runtime-specific assumptions

## Example 3: Shared versus bounded domains

Use `scope:shared` sparingly. If too many libraries become shared, the workspace often loses architectural clarity.
