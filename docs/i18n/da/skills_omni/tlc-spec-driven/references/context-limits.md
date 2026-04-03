# Context Limits (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/context-limits.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/context-limits.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/context-limits.md)

---


## File Size Limits

| File            | Max Tokens | ~Words | Warning At  |
| --------------- | ---------- | ------ | ----------- |
| PROJECT.md      | 2,000      | 1,200  | 1,600 (80%) |
| ROADMAP.md      | 3,000      | 1,800  | 2,400       |
| STATE.md        | 10,000     | 6,000  | 7,000 (70%) |
| spec.md         | 5,000      | 3,000  | 4,000       |
| design.md       | 8,000      | 4,800  | 6,400       |
| tasks.md        | 10,000     | 6,000  | 8,000       |
| STACK.md        | 2,000      | 1,200  | 1,600       |
| ARCHITECTURE.md | 4,000      | 2,400  | 3,200       |
| CONVENTIONS.md  | 3,000      | 1,800  | 2,400       |
| STRUCTURE.md    | 2,000      | 1,200  | 1,600       |
| TESTING.md      | 4,000      | 2,400  | 3,200       |
| INTEGRATIONS.md | 5,000      | 3,000  | 4,000       |

## Context Zones

🟢 **Healthy** (<40k total): Silent
🟡 **Moderate** (40-60k): Discrete footer note
🔴 **Critical** (>60k): Active warning, suggest optimization

## Monitoring

Display context status in footer when >40k:

```
📊 Context: 52k tokens (moderate)
  - STATE.md: 8k (yellow zone)
  - tasks.md: 11k (ok)
  - Total: 52k / 200k (26%)
```

## Principles

**Target:** <40k tokens loaded (20% of window)
**Reserve:** 160k+ tokens for work, reasoning, outputs
