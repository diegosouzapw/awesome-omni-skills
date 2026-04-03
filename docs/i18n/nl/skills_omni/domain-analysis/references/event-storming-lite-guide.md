# Event Storming Lite Guide (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-analysis/references/event-storming-lite-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-analysis/references/event-storming-lite-guide.md)

---


Use this guide when code evidence is too weak to infer trustworthy domain boundaries.

## Goal

Recover business language and workflow structure from docs, stakeholders, or product artifacts.

## Minimal prompts

Ask:

1. What business events matter most?
2. What usually happens right before and right after each event?
3. Which actors trigger the workflow?
4. Which terms do different teams use differently?
5. Where do approvals, validations, or policy decisions happen?
6. Which data must stay consistent together?
7. Which workflows can tolerate asynchronous updates?

## Quick Event Table

| Event | Trigger | Actor | Command / action | Resulting state | Candidate context |
| --- | --- | --- | --- | --- | --- |

## Boundary Clues

- different event vocabularies suggest different contexts
- different business actors or goals suggest different capabilities
- policy decisions and invariants often reveal consistency boundaries
- translation between event languages suggests a context-map relationship

## Output Guidance

If this guide is used, say so explicitly in the final analysis and lower confidence where the codebase itself did not provide enough evidence.
