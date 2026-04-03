# ADR Format Selection (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/create-adr/references/adr-format-selection.md) · 🇪🇸 [es](../../../../es/skills_omni/create-adr/references/adr-format-selection.md) · 🇫🇷 [fr](../../../../fr/skills_omni/create-adr/references/adr-format-selection.md) · 🇩🇪 [de](../../../../de/skills_omni/create-adr/references/adr-format-selection.md) · 🇮🇹 [it](../../../../it/skills_omni/create-adr/references/adr-format-selection.md) · 🇷🇺 [ru](../../../../ru/skills_omni/create-adr/references/adr-format-selection.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/create-adr/references/adr-format-selection.md) · 🇯🇵 [ja](../../../../ja/skills_omni/create-adr/references/adr-format-selection.md) · 🇰🇷 [ko](../../../../ko/skills_omni/create-adr/references/adr-format-selection.md) · 🇸🇦 [ar](../../../../ar/skills_omni/create-adr/references/adr-format-selection.md) · 🇮🇳 [hi](../../../../hi/skills_omni/create-adr/references/adr-format-selection.md) · 🇮🇳 [in](../../../../in/skills_omni/create-adr/references/adr-format-selection.md) · 🇹🇭 [th](../../../../th/skills_omni/create-adr/references/adr-format-selection.md) · 🇻🇳 [vi](../../../../vi/skills_omni/create-adr/references/adr-format-selection.md) · 🇮🇩 [id](../../../../id/skills_omni/create-adr/references/adr-format-selection.md) · 🇲🇾 [ms](../../../../ms/skills_omni/create-adr/references/adr-format-selection.md) · 🇳🇱 [nl](../../../../nl/skills_omni/create-adr/references/adr-format-selection.md) · 🇵🇱 [pl](../../../../pl/skills_omni/create-adr/references/adr-format-selection.md) · 🇸🇪 [sv](../../../../sv/skills_omni/create-adr/references/adr-format-selection.md) · 🇳🇴 [no](../../../../no/skills_omni/create-adr/references/adr-format-selection.md) · 🇩🇰 [da](../../../../da/skills_omni/create-adr/references/adr-format-selection.md) · 🇫🇮 [fi](../../../../fi/skills_omni/create-adr/references/adr-format-selection.md) · 🇵🇹 [pt](../../../../pt/skills_omni/create-adr/references/adr-format-selection.md) · 🇷🇴 [ro](../../../../ro/skills_omni/create-adr/references/adr-format-selection.md) · 🇭🇺 [hu](../../../../hu/skills_omni/create-adr/references/adr-format-selection.md) · 🇧🇬 [bg](../../../../bg/skills_omni/create-adr/references/adr-format-selection.md) · 🇸🇰 [sk](../../../../sk/skills_omni/create-adr/references/adr-format-selection.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/create-adr/references/adr-format-selection.md) · 🇮🇱 [he](../../../../he/skills_omni/create-adr/references/adr-format-selection.md) · 🇵🇭 [phi](../../../../phi/skills_omni/create-adr/references/adr-format-selection.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/create-adr/references/adr-format-selection.md) · 🇨🇿 [cs](../../../../cs/skills_omni/create-adr/references/adr-format-selection.md) · 🇹🇷 [tr](../../../../tr/skills_omni/create-adr/references/adr-format-selection.md)

---


## Default recommendation

Use **MADR** by default. It gives enough structure for most real decisions and makes alternatives and consequences explicit.

## Pick MADR when

- the decision has meaningful trade-offs
- multiple alternatives were considered
- reviewers need clear rationale
- the repository already uses structured ADRs

## Pick Nygard when

- the decision is straightforward
- the team prefers a minimal template
- alternatives exist but do not need a long comparison section

## Pick Y-Statement when

- the team explicitly prefers compact ADRs
- the decision is simple enough to summarize in one paragraph
- the ADR will likely live inline with other concise architectural notes

## Comparison table

| Format | Best for | Strength | Limitation |
| --- | --- | --- | --- |
| MADR | Most repository ADRs | Strong rationale and alternatives | Slightly more ceremony |
| Nygard | Simple, durable records | Fast and clear | Less structured comparison |
| Y-Statement | Very compact records | Minimal footprint | Easy to omit important nuance |

## Practical rule

If you are unsure, start with MADR. It is easier to simplify a structured ADR than to recover missing rationale from an underspecified one.
