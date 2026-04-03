# Decision Log Pattern (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/decision-log-pattern.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/decision-log-pattern.md)

---


Use lightweight ADR-style entries for meaningful design decisions.

## When to record a decision

Create a decision entry when the choice:

- affects more than one component
- changes a pattern or convention
- introduces a dependency or constraint
- resolves a non-obvious tradeoff
- is likely to be questioned later

## Suggested format

```md
# DEC-001: Use server-side permission guard for settings access

## Status
Accepted

## Context
The feature requires role-based access to project settings across API and UI flows.

## Decision
Enforce authorization at the backend boundary and mirror visibility in the UI.

## Consequences
- Safer default enforcement
- Requires integration coverage
- UI still needs conditional rendering for user clarity
```

## Guidance

- Keep entries short and durable.
- Record rationale, not just the final answer.
- Put major decisions where future sessions can find them easily, either in `STATE.md` or a dedicated decision note.
