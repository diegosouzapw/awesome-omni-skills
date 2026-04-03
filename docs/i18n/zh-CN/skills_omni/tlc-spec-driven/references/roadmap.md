# Roadmap Creation (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/roadmap.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/roadmap.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/roadmap.md)

---


**Trigger:** "Create roadmap", "Plan features", "Map project phases"

## Process

Based on PROJECT.md, decompose vision into:

- Milestones (shippable increments)
- Features (user-facing capabilities)
- Status tracking (planned/in-progress/complete)

## Output: .specs/project/ROADMAP.md

**Structure:**

```markdown
# Roadmap

**Current Milestone:** [milestone name]
**Status:** Planning | In Progress | Complete

---

## [Milestone 1 Name]

**Goal:** [What makes this milestone shippable]
**Target:** [Date or completion criteria]

### Features

**[Feature Name]** - STATUS

- [Capability 1]
- [Capability 2]
- [Capability 3]

**[Feature Name]** - STATUS

- [Capability 1]
- [Capability 2]

---

## [Milestone 2 Name]

**Goal:** [What this milestone adds]

### Features

**[Feature Name]** - PLANNED
**[Feature Name]** - PLANNED

---

## Future Considerations

- [Potential future capability]
- [Potential future capability]
```

**Status values:**

- PLANNED: Not started
- IN PROGRESS: Currently implementing
- COMPLETE: Shipped and verified

**Size limit:** 3,000 tokens (~1,800 words)

**Update strategy:**

- Mark features PLANNED → IN PROGRESS when starting
- Mark IN PROGRESS → COMPLETE when verified
- Add new milestones as project evolves

**Validation:**

- Each milestone has clear shippable outcome?
- Features are user-facing capabilities?
- Status reflects current reality?
