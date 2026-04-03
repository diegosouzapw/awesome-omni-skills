# State Management (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/state-management.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/state-management.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/state-management.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/state-management.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/state-management.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/state-management.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/state-management.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/state-management.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/state-management.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/state-management.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/state-management.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/state-management.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/state-management.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/state-management.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/state-management.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/state-management.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/state-management.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/state-management.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/state-management.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/state-management.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/state-management.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/state-management.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/state-management.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/state-management.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/state-management.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/state-management.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/state-management.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/state-management.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/state-management.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/state-management.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/state-management.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/state-management.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/state-management.md)

---


**Purpose:** Persistent memory across sessions - decisions, blockers, learnings.

## Structure

**Output:** `.specs/project/STATE.md`

```markdown
# State

**Last Updated:** [ISO timestamp]
**Current Work:** [Feature name] - [Task identifier]

---

## Recent Decisions (Last 60 days)

### AD-[NNN]: [Decision title] ([date])

**Decision:** [What was decided]
**Reason:** [Why this choice]
**Trade-off:** [What was sacrificed]
**Impact:** [How this affects implementation]

### AD-[NNN]: [Decision title] ([date])

[Same structure]

---

## Active Blockers

### B-[NNN]: [Blocker description]

**Discovered:** [Date]
**Impact:** [Severity and scope]
**Workaround:** [Temporary solution if available]
**Resolution:** [Path to permanent fix]

---

## Lessons Learned

### L-[NNN]: [Learning description]

**Context:** [Situation that occurred]
**Problem:** [What went wrong]
**Solution:** [How it was resolved]
**Prevents:** [What this knowledge prevents in future]

---

## Quick Tasks Completed

| #   | Description              | Date   | Commit | Status  |
| --- | ------------------------ | ------ | ------ | ------- |
| 001 | [Quick task description] | [date] | [hash] | ✅ Done |

---

## Deferred Ideas

Ideas captured during work that belong in future features or phases. Prevents scope creep while preserving good ideas.

- [ ] [Idea description] — Captured during: [feature/phase]
- [ ] [Idea description] — Captured during: [feature/phase]

---

## Todos

Capture in-progress thoughts and action items that don't fit in active tasks.

- [ ] [TODO: action item]
- [ ] [TODO: action item]
```

## When to Update

| Event                            | Action                                 |
| -------------------------------- | -------------------------------------- |
| Significant architectural choice | Add AD-[NNN]                           |
| Implementation blocked           | Add B-[NNN]                            |
| Important discovery/learning     | Add L-[NNN]                            |
| Quick task completed             | Add row to Quick Tasks table           |
| Scope creep captured             | Add to Deferred Ideas                  |
| In-progress thought              | Add to Todos                           |
| Session end                      | Update "Last Updated" + "Current Work" |

## Size Management (Hybrid Strategy)

**Zones:**

- 🟢 <7k tokens: No action
- 🟡 7-10k tokens: Footer note "STATE.md at [X]k. Cleanup recommended."
- 🔴 >10k tokens: Active prompt "STATE.md critical ([X]k). Cleanup now?"

**Cleanup process:**

- Move decisions >60 days to STATE-ARCHIVE.md
- Keep only active blockers
- Preserve recent learnings (<60 days)

**Validation:**

- Decisions have clear rationale?
- Blockers include resolution path?
- Learnings are actionable?

---

## Preferences

Track user-facing behavioral state in STATE.md:

```markdown
## Preferences

**Model Guidance Shown:** [ISO date or "never"]
```

**Update when:**

| Event                       | Action                   |
| --------------------------- | ------------------------ |
| First model tip given       | Set date                 |
| User acknowledges/dismisses | Keep date (don't repeat) |

This prevents repetitive suggestions while maintaining natural, helpful behavior.
