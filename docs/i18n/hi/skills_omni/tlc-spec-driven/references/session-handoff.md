# Session Handoff (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/session-handoff.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/session-handoff.md)

---


## Pause Work

**Trigger:** "Pause work", "End session", "Create handoff"

**Purpose:** Checkpoint current state for resumption.

**Output:** `.specs/HANDOFF.md` (overwrites previous)

**Size target:** ~500 tokens

**Structure:**

```markdown
# Handoff

**Date:** [ISO timestamp]
**Feature:** [feature name]
**Task:** [task identifier] - [brief status]

## Completed ✓

- [Completed work item]
- [Completed work item]

## In Progress

- [Current work] ([percentage or status])
- Specific location: [file:line if applicable]

## Pending

- [Next immediate step]
- [Following step]

## Blockers

- [Blocker description] - [impact]

## Context

- Branch: [git branch if applicable]
- Uncommitted: [files with changes]
- Related decisions: [STATE.md references if applicable]
```

**Instructions:**

- Focus on actionable information for resumption
- Include specific file/line references where relevant
- Note uncommitted changes explicitly
- Reference related STATE.md entries if applicable

## Resume Work

**Trigger:** "Resume work", "Continue", "Load handoff"

**Process:**

1. Load HANDOFF.md
2. Load STATE.md for context
3. Summarize current position
4. Propose next action

**Response pattern:**

- "Resuming [feature] at [task]"
- "Completed: [summary]"
- "Next: [immediate action]"
- "Continue with [specific step]?"
