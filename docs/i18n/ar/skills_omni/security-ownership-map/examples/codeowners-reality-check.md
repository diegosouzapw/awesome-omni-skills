# Worked Example: CODEOWNERS Reality Check (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇪🇸 [es](../../../../es/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇩🇪 [de](../../../../de/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇮🇹 [it](../../../../it/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇮🇳 [in](../../../../in/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇹🇭 [th](../../../../th/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇮🇩 [id](../../../../id/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇳🇴 [no](../../../../no/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇩🇰 [da](../../../../da/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇮🇱 [he](../../../../he/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-ownership-map/examples/codeowners-reality-check.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-ownership-map/examples/codeowners-reality-check.md)

---


## Scenario

A team wants to know whether declared owners for authentication code still reflect actual maintenance over the last 12 months.

## Procedure

1. Run the ownership map for the target branch.
2. Query auth-tagged files with low bus factor.
3. Compare each file against the effective `CODEOWNERS` rule.
4. Label the mismatch type.

## Example commands

```bash
python skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo . \
  --out ownership-map-out \
  --since "12 months ago"

python skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out files \
  --tag auth \
  --bus-factor-max 1
```

## Example finding shape

- `auth/session/token_service.py`
  - observed maintainers: `alice@corp`, `bob@corp`
  - bus factor: `1`
  - CODEOWNERS: `@platform-reviewers`
  - classification: `over-broad ownership` and `coverage gap`

## Recommended report sentence

`Observed maintenance for auth/session/token_service.py is concentrated in alice@corp, while CODEOWNERS assigns a broad review group. This suggests review-ownership drift and limited bench depth for a sensitive path.`
