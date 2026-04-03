# Specify (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/specify.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/specify.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/specify.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/specify.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/specify.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/specify.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/specify.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/specify.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/specify.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/specify.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/specify.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/specify.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/specify.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/specify.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/specify.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/specify.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/specify.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/specify.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/specify.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/specify.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/specify.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/specify.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/specify.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/specify.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/specify.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/specify.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/specify.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/specify.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/specify.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/specify.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/specify.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/specify.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/specify.md)

---


**Goal**: Capture WHAT to build with testable, traceable requirements.

If the feature has ambiguous gray areas (multiple valid approaches for user-facing behavior), the agent will automatically trigger the [discuss gray areas](discuss.md) process within this phase. For clear, well-defined features, it goes straight to the next phase.

## Process

### 1. Clarify Requirements

You are a thinking partner, not an interviewer. Start open — let the user dump their mental model. Follow the energy: whatever they emphasize, dig into that.

Ask conversationally (not as a checklist):

- "What problem are you solving?"
- "Who is the user and what's their pain?"
- "What does success look like?"

If needed:

- "What are the constraints (time, tech, resources)?"
- "What is explicitly out of scope?"

**Challenge vagueness.** Never accept fuzzy answers. "Good" means what? "Users" means who? "Simple" means how? Make the abstract concrete: "Walk me through using this." "What does that actually look like?"

**Know when to stop.** When you understand what they're building, why, who it's for, and what done looks like — offer to proceed.

### 2. Capture User Stories with Priorities

**P1 = MVP** (must ship), **P2** (should have), **P3** (nice to have)

Each story MUST be **independently testable** - you can implement and demo just that story.

### 3. Write Acceptance Criteria

Use **WHEN/THEN/SHALL** format - it's precise and testable:

- WHEN [event/action] THEN [system] SHALL [response/behavior]

---

## Template: `.specs/[feature]/spec.md`

```markdown
# [Feature Name] Specification

## Problem Statement

[Describe the problem in 2-3 sentences. What pain point are we solving? Why now?]

## Goals

- [ ] [Primary goal with measurable outcome]
- [ ] [Secondary goal with measurable outcome]

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature     | Reason         |
| ----------- | -------------- |
| [Feature X] | [Why excluded] |
| [Feature Y] | [Why excluded] |

---

## User Stories

### P1: [Story Title] ⭐ MVP

**User Story**: As a [role], I want [capability] so that [benefit].

**Why P1**: [Why this is critical for MVP]

**Acceptance Criteria**:

1. WHEN [user action/event] THEN system SHALL [expected behavior]
2. WHEN [user action/event] THEN system SHALL [expected behavior]
3. WHEN [edge case] THEN system SHALL [graceful handling]

**Independent Test**: [How to verify this story works alone - e.g., "Can demo by doing X and seeing Y"]

---

### P2: [Story Title]

**User Story**: As a [role], I want [capability] so that [benefit].

**Why P2**: [Why this isn't MVP but important]

**Acceptance Criteria**:

1. WHEN [event] THEN system SHALL [behavior]
2. WHEN [event] THEN system SHALL [behavior]

**Independent Test**: [How to verify]

---

### P3: [Story Title]

**User Story**: As a [role], I want [capability] so that [benefit].

**Why P3**: [Why this is nice-to-have]

**Acceptance Criteria**:

1. WHEN [event] THEN system SHALL [behavior]

---

## Edge Cases

- WHEN [boundary condition] THEN system SHALL [behavior]
- WHEN [error scenario] THEN system SHALL [graceful handling]
- WHEN [unexpected input] THEN system SHALL [validation response]

---

## Requirement Traceability

Each requirement gets a unique ID for tracking across design, tasks, and validation.

| Requirement ID | Story       | Phase  | Status  |
| -------------- | ----------- | ------ | ------- |
| [FEAT]-01      | P1: [Story] | Design | Pending |
| [FEAT]-02      | P1: [Story] | Design | Pending |
| [FEAT]-03      | P2: [Story] | -      | Pending |

**ID format:** `[CATEGORY]-[NUMBER]` (e.g., `AUTH-01`, `CART-03`, `NOTIF-02`)

**Status values:** Pending → In Design → In Tasks → Implementing → Verified

**Coverage:** X total, Y mapped to tasks, Z unmapped ⚠️

---

## Success Criteria

How we know the feature is successful:

- [ ] [Measurable outcome - e.g., "User can complete X in < 2 minutes"]
- [ ] [Measurable outcome - e.g., "Zero errors in Y scenario"]
```

---

## Tips

- **P1 = Vertical Slice** — A complete, demo-able feature, not just backend or frontend
- **WHEN/THEN is code** — If you can't write it as a test, rewrite it
- **Requirement IDs are mandatory** — Every story maps to trackable IDs
- **Edge cases matter** — What breaks? What's empty? What's huge?
- **Out of Scope prevents creep** — If it's not here, it doesn't get built
- **Confirm before Discuss** — User must approve spec before moving to discuss phase
