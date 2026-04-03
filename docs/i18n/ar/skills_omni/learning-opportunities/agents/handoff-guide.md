# Handoff Guide (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/learning-opportunities/agents/handoff-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/learning-opportunities/agents/handoff-guide.md)

---


Use this guide when learning mode is no longer the main need.

## Hand off to debugging-oriented work when

- the user needs root-cause analysis
- there is active failure or unclear runtime behavior
- time pressure makes exercises inappropriate

Preserve:
- failing path or reproduction steps
- relevant file or function
- what the user already understands
- whether learning mode was attempted

## Hand off to architecture or refactoring work when

- the discussion is now about broader boundaries, patterns, or tradeoffs
- one exercise is not enough because the task is design-heavy

Preserve:
- the module or boundary under discussion
- the design choice being evaluated
- the current implementation state

## Hand off to testing work when

- the next best step is verifying behavior rather than explaining it
- the user needs fixtures, test cases, or confidence checks

Preserve:
- changed code paths
- intended behavior
- edge cases surfaced during the exercise

## Hand off to security review when

- the code touches auth, permissions, secrets, or trust boundaries
- correctness matters more than pedagogy in the moment

Preserve:
- affected endpoints or flows
- assumptions raised during the exercise
- any unresolved risk questions
