# Worked Example: Large Monorepo Analysis (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇪🇸 [es](../../../../es/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇩🇪 [de](../../../../de/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇮🇹 [it](../../../../it/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇮🇳 [in](../../../../in/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇹🇭 [th](../../../../th/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇮🇩 [id](../../../../id/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇳🇴 [no](../../../../no/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇩🇰 [da](../../../../da/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇮🇱 [he](../../../../he/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-ownership-map/examples/large-monorepo-analysis.md)

---


## Scenario

You need a security ownership map from a noisy monorepo where CI files, lockfiles, and generated changes create misleading co-change clusters.

## Command set

```bash
bash scripts/validate_repo_fidelity.sh /path/to/monorepo

python skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo /path/to/monorepo \
  --out ownership-map-out \
  --since "9 months ago" \
  --cochange-exclude "**/.github/**" \
  --cochange-exclude "**/package-lock.json" \
  --cochange-exclude "**/Cargo.lock" \
  --cochange-exclude "**/Kbuild"

python skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out summary \
  --section bus_factor_hotspots
```

## Review pattern

Do not inspect all graph artifacts first. Start with:

- `summary --section bus_factor_hotspots`
- `summary --section orphaned_sensitive_code`
- `people --sort sensitive_touches --limit 10`
- one `community --id ...` drill-down only if the cluster appears meaningful

## Expected outcome

A smaller, more interpretable security ownership packet with reduced false coupling from infrastructure glue.
