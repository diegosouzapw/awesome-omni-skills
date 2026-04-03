# Bounded Context Canvas Template (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-analysis/references/bounded-context-canvas-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-analysis/references/bounded-context-canvas-template.md)

---


Use this template for each proposed bounded context.

## Context Identity

- **Context name:**
- **Short purpose statement:**
- **Confidence:** High | Medium | Low

## Ubiquitous Language

| Term | Meaning inside this context | Evidence |
| --- | --- | --- |

## Responsibilities

- What business capability does this context own?
- Which workflows belong here?
- Which decisions or rules are authoritative here?

## Included Concepts

- Entities / aggregates / records:
- Services / handlers / workflows:
- Events / commands / APIs:

## Excluded Concepts

- What looks related but should remain outside this context?
- Which nearby concepts belong to another context?

## Invariant Boundary

- Which rules must remain consistent inside this context?
- What state transitions or lifecycle rules define the boundary?

## Dependencies

- **Upstream contexts:**
- **Downstream contexts:**
- **Integration mechanism:** API | Event | Shared library | DB read model | Other

## Term Conflicts

| Shared term | Meaning here | Meaning elsewhere | Notes |
| --- | --- | --- | --- |

## Ownership Assumptions

- Team or role assumptions, if known:
- Operational constraints, if known:

## Service-Boundary Option

- Keep in modular monolith for now | Internal module | Future service candidate | Existing service boundary fits
- Why:
- Caveats:
