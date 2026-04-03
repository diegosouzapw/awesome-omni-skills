# Jira Description Template (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/references/jira-description-template.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/references/jira-description-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/references/jira-description-template.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/references/jira-description-template.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/references/jira-description-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/references/jira-description-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/references/jira-description-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/references/jira-description-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/references/jira-description-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/references/jira-description-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/references/jira-description-template.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/references/jira-description-template.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/references/jira-description-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/references/jira-description-template.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/references/jira-description-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/references/jira-description-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/references/jira-description-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/references/jira-description-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/references/jira-description-template.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/references/jira-description-template.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/references/jira-description-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/references/jira-description-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/references/jira-description-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/references/jira-description-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/references/jira-description-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/references/jira-description-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/references/jira-description-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/references/jira-description-template.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/references/jira-description-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/references/jira-description-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/references/jira-description-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/references/jira-description-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/references/jira-description-template.md)

---


Use Markdown in Jira descriptions when supported by the integration.

Keep summaries short. Put the operational detail in the description.

## General task template

```markdown
## Context
[Brief explanation of the problem or need]

## Objective
[What should be accomplished]

## Technical Requirements
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

## Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

## Technical Notes
[High-level implementation notes, dependencies, links, constraints]

## Estimate
[Optional estimate, points, or timeline]
```

## Bug template

```markdown
## Summary
[What is broken]

## Impact
[Who is affected and how severe it is]

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Result
[What should happen]

## Actual Result
[What actually happens]

## Acceptance Criteria
- [ ] Bug no longer reproduces in the defined scenario
- [ ] Regression risk is addressed
```

## Epic template

```markdown
## Goal
[What larger outcome this epic is meant to achieve]

## Scope
- In scope item 1
- In scope item 2

## Out of Scope
- Out of scope item 1

## Success Criteria
- [ ] Measurable outcome 1
- [ ] Measurable outcome 2
```

## Subtask template

```markdown
## Parent Context
[How this subtask supports the parent issue]

## Objective
[What this specific subtask completes]

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
```

## Notes

- Avoid file paths unless the user explicitly wants them.
- Prefer stable concepts over repository-specific implementation details.
- Ask for missing requirements instead of inventing them.
