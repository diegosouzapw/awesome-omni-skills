# Dependency Map Template (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇪🇸 [es](../../../../es/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇩🇪 [de](../../../../de/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇮🇹 [it](../../../../it/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇮🇳 [in](../../../../in/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇹🇭 [th](../../../../th/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇮🇩 [id](../../../../id/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇳🇴 [no](../../../../no/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇩🇰 [da](../../../../da/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇮🇱 [he](../../../../he/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/decomposition-planning-roadmap/references/dependency-map-template.md)

---


Map dependencies before choosing extraction order.

## Candidate

- Candidate seam:
- Owning team:
- Proposed extraction phase:

## Dependency categories

### Runtime dependencies

| Dependency | Direction | Criticality | Sync/async | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

### Build-time / code dependencies

| Dependency | Type | Refactor needed | Notes |
| --- | --- | --- | --- |
| | | | |

### Data dependencies

| Dataset / table | Read/write | Shared owner? | Risk | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

### Batch / reporting dependencies

| Job / report | Frequency | Upstream dependency | Break risk | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

### Team / process dependencies

| Dependency | Team | Impact if delayed | Mitigation |
| --- | --- | --- | --- |
| | | | |

## Blockers and temporary seams

- Hidden coupling discovered:
- Temporary adapter needed:
- Anti-corruption boundary needed:
- Abstraction/refactor needed before extraction:

## Recommendation

- Safe to extract now? yes / no / partially
- Preconditions:
- Highest-risk dependency:
