# Cursor Subagent Troubleshooting Matrix (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/cursor-subagent-creator/references/cursor-subagent-troubleshooting-matrix.md)

---


| Problem | Symptoms | Likely cause | Fix |
| --- | --- | --- | --- |
| No delegation | Main agent keeps handling the task | Description too vague | Add explicit trigger wording and examples |
| Wrong delegation | Subagent is invoked for unrelated work | Scope is too broad | Narrow the description and add exclusions |
| Unexpected edits | Reviewer or auditor changes files | Missing read-only setting | Set `readonly: true` and retest |
| Hard to monitor progress | Operator cannot tell whether work is active | Background mode used unnecessarily | Switch to foreground mode |
| Spec seems ignored | File exists but behavior is odd | Wrong path or malformed frontmatter | Check location, YAML, booleans, and indentation |
| Too much overhead | Simple task becomes slow or costly | Subagent used for one-off work | Use a rule, skill, or command instead |

## Frontmatter pitfalls

Common mistakes:

- invalid indentation
- malformed YAML delimiters
- using non-boolean values for `readonly` or `is_background`
- storing the file outside Cursor agent directories
- mismatching filename and intended identity

## Recovery pattern

1. Confirm path.
2. Confirm valid frontmatter.
3. Simplify the description.
4. Reduce the prompt to one responsibility.
5. Retest explicit invocation.
6. Retest natural-language delegation.
