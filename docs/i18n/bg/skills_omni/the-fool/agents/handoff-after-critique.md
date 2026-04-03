# Handoff After Critique (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/the-fool/agents/handoff-after-critique.md) · 🇪🇸 [es](../../../../es/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇫🇷 [fr](../../../../fr/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇩🇪 [de](../../../../de/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇮🇹 [it](../../../../it/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇷🇺 [ru](../../../../ru/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇯🇵 [ja](../../../../ja/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇰🇷 [ko](../../../../ko/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇸🇦 [ar](../../../../ar/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇮🇳 [hi](../../../../hi/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇮🇳 [in](../../../../in/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇹🇭 [th](../../../../th/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇻🇳 [vi](../../../../vi/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇮🇩 [id](../../../../id/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇲🇾 [ms](../../../../ms/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇳🇱 [nl](../../../../nl/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇵🇱 [pl](../../../../pl/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇸🇪 [sv](../../../../sv/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇳🇴 [no](../../../../no/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇩🇰 [da](../../../../da/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇫🇮 [fi](../../../../fi/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇵🇹 [pt](../../../../pt/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇷🇴 [ro](../../../../ro/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇭🇺 [hu](../../../../hu/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇧🇬 [bg](../../../../bg/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇸🇰 [sk](../../../../sk/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇮🇱 [he](../../../../he/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇵🇭 [phi](../../../../phi/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇨🇿 [cs](../../../../cs/skills_omni/the-fool/agents/handoff-after-critique.md) · 🇹🇷 [tr](../../../../tr/skills_omni/the-fool/agents/handoff-after-critique.md)

---


Use this packet when The Fool has completed critique and the next step belongs to another workflow.

## Preserve these fields

- **Decision under review:**
- **Steelmanned thesis:**
- **Mode used:**
- **Top challenges:**
- **Evidence grades:**
- **Unresolved assumptions:**
- **Residual risk:**
- **Confidence:** `HIGH|MEDIUM|LOW|PIVOT`
- **Next validation action:**
- **Requested next skill or specialization:**

## Handoff rule

Do not continue into implementation, architecture design, remediation planning, or control selection inside The Fool unless the user explicitly switches workflows. Transfer the critique packet so the next skill starts with context instead of re-deriving it.

## Compact handoff template

```text
Handoff from @the-fool

Decision under review:
...

Steelmanned thesis:
...

Mode used:
...

Top challenges:
1. ...
2. ...
3. ...

Evidence grades:
- Claim: ... -> ...

Unresolved assumptions:
- ...

Residual risk:
...

Confidence:
...

Next validation action:
...
```
