# Component Sizing Report Example (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇪🇸 [es](../../../../es/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇩🇪 [de](../../../../de/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇮🇹 [it](../../../../it/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇮🇳 [in](../../../../in/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇹🇭 [th](../../../../th/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇮🇩 [id](../../../../id/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇳🇴 [no](../../../../no/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇩🇰 [da](../../../../da/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇮🇱 [he](../../../../he/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-identification-sizing/examples/component-sizing-report-example.md)

---


## Scope

- Repository path: `.`
- Languages: TypeScript
- Analysis mode: workspace packages first, then feature folders where needed

## Structural signals used

- `package.json`
- workspace package roots under `packages/`
- frontend feature folders under `apps/web/src/features/`
- import aliases from `tsconfig.json`

## Inclusion and exclusion rules

Included:

- maintained application and library source files

Excluded:

- `node_modules/`
- `dist/`
- `coverage/`
- `generated/`
- tests and snapshots
- storybook stories

## Component inventory

| Component | Path | Boundary type | Statements | Files | Percent | Status | Confidence |
| --- | --- | --- | ---: | ---: | ---: | --- | --- |
| Billing | `packages/billing` | workspace-package | 4,312 | 24 | 35.9% | Too Large | high |
| Reporting | `packages/reporting` | workspace-package | 4,578 | 18 | 38.1% | Too Large | high |
| Auth UI | `apps/web/src/features/auth` | feature-folder | 3,120 | 11 | 26.0% | OK | medium |

## Size analysis summary

- Total components: 3
- Total statements: 12,010
- Mean: 4,003
- Median: 4,312
- Standard deviation: 3,168

Note: the distribution is skewed by two large packages, so percentages and median are more useful than standard deviation alone.

## Findings and recommendations

### High priority

- `Reporting` is large and appears to contain multiple report families. Validate whether financial, operational, and customer reporting should be separated.
- `Billing` is also large enough to justify a second-pass subcomponent inventory.

### Medium priority

- `Auth UI` is not oversized, but alias-heavy imports reduce confidence in the folder boundary. Confirm whether shared auth flows are split across adjacent folders.

## Limitations and confidence

- `Auth UI` confidence is medium because alias imports partially bypass folder boundaries.
- Statement counts assume executable-source filtering and exclude storybook/test assets.
- This report is for structural sizing only; it does not measure runtime coupling or deployment boundaries.
