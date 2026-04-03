# Output Validation Checklist (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-ownership-map/references/output-validation.md) · 🇪🇸 [es](../../../../es/skills_omni/security-ownership-map/references/output-validation.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-ownership-map/references/output-validation.md) · 🇩🇪 [de](../../../../de/skills_omni/security-ownership-map/references/output-validation.md) · 🇮🇹 [it](../../../../it/skills_omni/security-ownership-map/references/output-validation.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-ownership-map/references/output-validation.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-ownership-map/references/output-validation.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-ownership-map/references/output-validation.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-ownership-map/references/output-validation.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-ownership-map/references/output-validation.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-ownership-map/references/output-validation.md) · 🇮🇳 [in](../../../../in/skills_omni/security-ownership-map/references/output-validation.md) · 🇹🇭 [th](../../../../th/skills_omni/security-ownership-map/references/output-validation.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-ownership-map/references/output-validation.md) · 🇮🇩 [id](../../../../id/skills_omni/security-ownership-map/references/output-validation.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-ownership-map/references/output-validation.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-ownership-map/references/output-validation.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-ownership-map/references/output-validation.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-ownership-map/references/output-validation.md) · 🇳🇴 [no](../../../../no/skills_omni/security-ownership-map/references/output-validation.md) · 🇩🇰 [da](../../../../da/skills_omni/security-ownership-map/references/output-validation.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-ownership-map/references/output-validation.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-ownership-map/references/output-validation.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-ownership-map/references/output-validation.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-ownership-map/references/output-validation.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-ownership-map/references/output-validation.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-ownership-map/references/output-validation.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-ownership-map/references/output-validation.md) · 🇮🇱 [he](../../../../he/skills_omni/security-ownership-map/references/output-validation.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-ownership-map/references/output-validation.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-ownership-map/references/output-validation.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-ownership-map/references/output-validation.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-ownership-map/references/output-validation.md)

---


Validate artifacts before sharing findings, importing into a graph database, or giving the outputs to another agent.

## Minimum checks

### 1. Confirm required files exist

Typical outputs:

- `people.csv`
- `files.csv`
- `edges.csv`
- `summary.json`

Optional outputs depend on flags and data quality.

### 2. Validate bounded summary access

Run at least one small query successfully:

```bash
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section bus_factor_hotspots
```

### 3. Confirm `summary.json` is parseable

```bash
python -m json.tool ownership-map-out/summary.json >/dev/null
```

### 4. Check CSV headers quickly

```bash
head -n 3 ownership-map-out/people.csv
head -n 3 ownership-map-out/files.csv
head -n 3 ownership-map-out/edges.csv
```

### 5. Validate the handoff packet

Ensure the packet states:

- repo and branch
- analysis window
- attribution model
- bot handling
- identity normalization status
- sensitivity config used
- major limitations

## GraphML note

If GraphML was generated, treat it as optional convenience output. If a visualization tool behaves unexpectedly, fall back to CSV/JSON rather than debugging GraphML first.

## CSV portability note

When reprocessing CSVs in Python or importing elsewhere, be explicit about headers, quoting, and numeric casting rather than relying on spreadsheet defaults.
