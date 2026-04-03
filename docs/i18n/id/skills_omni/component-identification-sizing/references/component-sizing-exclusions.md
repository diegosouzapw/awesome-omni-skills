# Component Sizing Exclusions (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇪🇸 [es](../../../../es/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇩🇪 [de](../../../../de/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇮🇹 [it](../../../../it/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇮🇳 [in](../../../../in/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇹🇭 [th](../../../../th/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇮🇩 [id](../../../../id/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇳🇴 [no](../../../../no/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇩🇰 [da](../../../../da/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇮🇱 [he](../../../../he/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-identification-sizing/references/component-sizing-exclusions.md)

---


Use these defaults before measuring component size. Override them only when the user explicitly wants a broader or narrower scope.

## Default include rule

Count executable source files that belong to the analyzed repository scope and represent maintained application or library code.

## Default exclusions

### Dependencies and vendored code

Exclude:

- `node_modules/`
- vendored SDKs or third-party code copied into the repository
- language-specific dependency caches or vendor trees

Reason: they distort ownership and size totals.

### Build and packaging output

Exclude:

- `dist/`
- `build/`
- compiled output directories
- static export output
- packaging artifacts

Reason: these are generated products, not primary source boundaries.

### Generated code

Exclude unless the user explicitly wants it included:

- generated API clients
- generated ORM/database code
- generated protobuf or schema bindings
- checked-in codegen output

Reason: generated files can dominate totals without reflecting component ownership.

### Tests and test artifacts

Exclude by default:

- test directories
- snapshots
- fixtures
- mocks
- golden files

Reason: this skill sizes implementation components unless the user requests test-inclusive sizing.

### Documentation and non-code assets

Exclude:

- docs
- markdown files
- design assets
- images
- static media

Reason: they are useful project assets but not executable component size signals.

### Repository noise

Exclude:

- coverage reports
- temporary output
- editor artifacts
- cache directories

## Report requirement

Always state:

- what was excluded
- why it was excluded
- any user-requested overrides

## Overrides

Common valid overrides:

- include tests to evaluate maintenance burden
- include generated code when the codegen output is a committed product boundary
- analyze a single app inside a monorepo instead of the whole repo

When overriding, say so explicitly in the report.
