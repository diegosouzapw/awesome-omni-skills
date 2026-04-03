# Playwright Troubleshooting Guide (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/playwright-skill/references/playwright-troubleshooting-guide.md)

---


## Browser install or launch problems

Symptoms:
- missing executable
- browser will not launch
- headed mode fails in CI

Next steps:
- run `cd "$SKILL_DIR" && npm run setup`
- retry in headless mode
- confirm the environment supports a display if headed mode is required

## Timeout problems

Symptoms:
- `goto` times out
- page remains on loading spinner

Next steps:
- verify URL and selected server
- use trace on failure
- wait for the right page state instead of sleeping

## Selector problems

Symptoms:
- element not found
- flaky CSS selectors

Next steps:
- switch to locators
- scope the locator to the right container
- check iframe, dialog, or popup boundaries

## Actionability problems

Symptoms:
- click intercepted
- element hidden or disabled

Next steps:
- inspect overlays or banners
- wait for the control to become actionable
- capture screenshot and trace

## Auth problems

Symptoms:
- redirect loops
- stale login state

Next steps:
- use a fresh context
- redo login with env vars
- avoid trusting old storage state blindly
