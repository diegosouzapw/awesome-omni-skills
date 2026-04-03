# Playwright Artifact and Evidence Guide (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/playwright-skill/references/playwright-artifact-evidence-guide.md)

---


## Minimum evidence for simple runs

- console summary of steps and result
- one screenshot with a descriptive name

## Recommended evidence for multi-step runs

- trace zip on failure
- final screenshot
- optional video when motion or timing matters
- a short outcome note

## Suggested temporary paths

- `/tmp/playwright-artifacts/<task>-final.png`
- `/tmp/playwright-artifacts/<task>-failure.png`
- `/tmp/playwright-artifacts/<task>-trace.zip`

## Reviewer summary template

- Target: `<url or route>`
- Flow: `<login / form / responsive / links>`
- Result: `<pass / fail / partial>`
- Evidence: `<artifact paths>`
- Notes: `<important observations, redactions, or limits>`
