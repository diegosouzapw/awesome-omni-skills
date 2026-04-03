# Cursor Subagent Decision Guide (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/cursor-subagent-creator/references/cursor-subagent-decision-guide.md)

---


Use this guide to decide whether to create a Cursor subagent or use a simpler mechanism.

## Choose a Cursor subagent when

- the task is specialized and reusable
- isolated context improves reliability
- the work is multi-step
- you want delegation to happen repeatedly
- independent verification or parallel work is valuable

## Choose a Cursor rule when

- you need persistent behavior or standing project guidance
- the instruction should shape many future interactions
- you do not need a separate specialist execution unit

## Choose a skill or slash command when

- the task is short and direct
- isolated context is unnecessary
- delegation overhead would exceed the value of specialization

## Choose `subagent-creator` instead when

- the user wants a subagent design not tied to Cursor
- the target environment is another editor, framework, or agent runtime

## Quick checks

Ask these in order:

1. Is this specifically for Cursor?
2. Is the task reusable?
3. Does it need isolated context?
4. Is it genuinely multi-step or specialized?
5. Would a rule or command be simpler and sufficient?

If the answer to 1 is no, route away from this skill.
If the answer to 2 through 4 is mostly no, prefer a simpler tool.
