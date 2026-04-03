# Output Contract (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-identification-sizing/references/output-contract.md) · 🇪🇸 [es](../../../../es/skills_omni/component-identification-sizing/references/output-contract.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-identification-sizing/references/output-contract.md) · 🇩🇪 [de](../../../../de/skills_omni/component-identification-sizing/references/output-contract.md) · 🇮🇹 [it](../../../../it/skills_omni/component-identification-sizing/references/output-contract.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-identification-sizing/references/output-contract.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-identification-sizing/references/output-contract.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-identification-sizing/references/output-contract.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-identification-sizing/references/output-contract.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-identification-sizing/references/output-contract.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-identification-sizing/references/output-contract.md) · 🇮🇳 [in](../../../../in/skills_omni/component-identification-sizing/references/output-contract.md) · 🇹🇭 [th](../../../../th/skills_omni/component-identification-sizing/references/output-contract.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-identification-sizing/references/output-contract.md) · 🇮🇩 [id](../../../../id/skills_omni/component-identification-sizing/references/output-contract.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-identification-sizing/references/output-contract.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-identification-sizing/references/output-contract.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-identification-sizing/references/output-contract.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-identification-sizing/references/output-contract.md) · 🇳🇴 [no](../../../../no/skills_omni/component-identification-sizing/references/output-contract.md) · 🇩🇰 [da](../../../../da/skills_omni/component-identification-sizing/references/output-contract.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-identification-sizing/references/output-contract.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-identification-sizing/references/output-contract.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-identification-sizing/references/output-contract.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-identification-sizing/references/output-contract.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-identification-sizing/references/output-contract.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-identification-sizing/references/output-contract.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-identification-sizing/references/output-contract.md) · 🇮🇱 [he](../../../../he/skills_omni/component-identification-sizing/references/output-contract.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-identification-sizing/references/output-contract.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-identification-sizing/references/output-contract.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-identification-sizing/references/output-contract.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-identification-sizing/references/output-contract.md)

---


Produce both a Markdown summary and a machine-readable inventory whenever possible.

## Markdown report

Minimum sections:

1. **Scope**
   - repository or subpath analyzed
   - languages present
   - date/time or commit context if available

2. **Structural signals used**
   - manifests, package roots, namespaces, import aliases, or other boundary sources

3. **Inclusion and exclusion rules**
   - explicit list of counted and ignored content

4. **Component inventory table**
   - one row per component

5. **Size analysis summary**
   - total components
   - total statements
   - mean and median
   - optional standard deviation

6. **Findings and recommendations**
   - oversized, undersized, ambiguous, generated/mixed, or segmented components

7. **Limitations and confidence**
   - where heuristics or fallback metrics were used

## JSON inventory

Recommended top-level shape:

```json
{
  "scope": {
    "path": ".",
    "languages": ["TypeScript", "Python"]
  },
  "exclusions": {
    "defaults_applied": true,
    "rules": ["dist/", "coverage/", "generated/"]
  },
  "summary": {
    "component_count": 3,
    "total_statements": 12000,
    "mean_statements": 4000,
    "median_statements": 3200,
    "std_dev_statements": 2800,
    "notes": ["std_dev is approximate due to skew"]
  },
  "components": []
}
```

## Required component fields

Each component record should include:

```json
{
  "component_id": "billing",
  "display_name": "Billing",
  "canonical_path": "packages/billing",
  "boundary_type": "workspace-package",
  "language": "TypeScript",
  "included_file_count": 24,
  "excluded_file_count": 8,
  "statement_count": 4312,
  "percent_of_codebase": 35.9,
  "status": "Too Large",
  "boundary_confidence": "high",
  "exclusion_notes": ["Excluded tests", "Excluded generated client"],
  "recommendation": "Validate whether invoicing and payment processing should be separated"
}
```

## Status values

Preferred values:

- `OK`
- `Too Large`
- `Too Small`
- `Ambiguous Boundary`
- `Generated/Mixed`
- `Needs Segmentation`

## Reporting rule

If a fallback metric is used instead of executable statement count, rename the field or explain it clearly in `notes` and the Markdown report.
