# Candidate Extraction Scorecard (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇪🇸 [es](../../../../es/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇫🇷 [fr](../../../../fr/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇩🇪 [de](../../../../de/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇮🇹 [it](../../../../it/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇷🇺 [ru](../../../../ru/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇯🇵 [ja](../../../../ja/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇰🇷 [ko](../../../../ko/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇸🇦 [ar](../../../../ar/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇮🇳 [hi](../../../../hi/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇮🇳 [in](../../../../in/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇹🇭 [th](../../../../th/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇻🇳 [vi](../../../../vi/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇮🇩 [id](../../../../id/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇲🇾 [ms](../../../../ms/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇳🇱 [nl](../../../../nl/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇵🇱 [pl](../../../../pl/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇸🇪 [sv](../../../../sv/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇳🇴 [no](../../../../no/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇩🇰 [da](../../../../da/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇫🇮 [fi](../../../../fi/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇵🇹 [pt](../../../../pt/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇷🇴 [ro](../../../../ro/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇭🇺 [hu](../../../../hu/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇧🇬 [bg](../../../../bg/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇸🇰 [sk](../../../../sk/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇮🇱 [he](../../../../he/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇵🇭 [phi](../../../../phi/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇨🇿 [cs](../../../../cs/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md) · 🇹🇷 [tr](../../../../tr/skills_omni/decomposition-planning-roadmap/references/extraction-scorecard.md)

---


Use this scorecard to rank candidate seams. Adjust weights if the user provides clear organizational priorities.

## Scoring scale

Use `1-5` for each dimension.

- `1` = weak / risky / absent
- `3` = mixed / moderate
- `5` = strong / favorable / ready

## Recommended dimensions

| Dimension | Weight | What to look for |
| --- | --- | --- |
| Business value | 3 | Clear customer, revenue, compliance, or operational value |
| Change frequency / delivery pain | 2 | Area changes often or slows delivery significantly |
| Coupling manageability | 3 | Dependencies are understood and manageable |
| Data independence | 3 | Candidate can own data with limited shared-schema pain |
| Testability | 2 | Behavior can be validated without full-system coordination |
| Team ownership readiness | 3 | A stable team can own build, runtime, and support |
| Platform readiness | 2 | CI/CD, telemetry, and deployment model support extraction |
| Risk reduction / compliance value | 2 | Extraction reduces meaningful operational or regulatory risk |
| Rollback feasibility | 3 | Clear reversible rollout exists |

## Worksheet

| Candidate | Biz value | Change pain | Coupling | Data independence | Testability | Ownership | Platform | Risk/compliance | Rollback | Weighted total | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | | | | | |

## Recommendation guide

- **First:** high value, manageable coupling, strong data and ownership readiness, rollback possible
- **Later:** valuable but blocked by earlier platform, data, or modularization work
- **Deferred:** plausible long-term candidate, but weak current readiness
- **Rejected:** poor seam, little value, or too much risk under current constraints

## Required rationale notes

For each candidate, add short notes for:

- Why now or why not now
- Main blocker
- Transition pattern likely required
- What evidence would change the recommendation
