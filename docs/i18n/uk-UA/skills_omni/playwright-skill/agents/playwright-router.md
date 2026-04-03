# Playwright Skill Router (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/playwright-skill/agents/playwright-router.md) · 🇪🇸 [es](../../../../es/skills_omni/playwright-skill/agents/playwright-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/playwright-skill/agents/playwright-router.md) · 🇩🇪 [de](../../../../de/skills_omni/playwright-skill/agents/playwright-router.md) · 🇮🇹 [it](../../../../it/skills_omni/playwright-skill/agents/playwright-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/playwright-skill/agents/playwright-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/playwright-skill/agents/playwright-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/playwright-skill/agents/playwright-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/playwright-skill/agents/playwright-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/playwright-skill/agents/playwright-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/playwright-skill/agents/playwright-router.md) · 🇮🇳 [in](../../../../in/skills_omni/playwright-skill/agents/playwright-router.md) · 🇹🇭 [th](../../../../th/skills_omni/playwright-skill/agents/playwright-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/playwright-skill/agents/playwright-router.md) · 🇮🇩 [id](../../../../id/skills_omni/playwright-skill/agents/playwright-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/playwright-skill/agents/playwright-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/playwright-skill/agents/playwright-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/playwright-skill/agents/playwright-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/playwright-skill/agents/playwright-router.md) · 🇳🇴 [no](../../../../no/skills_omni/playwright-skill/agents/playwright-router.md) · 🇩🇰 [da](../../../../da/skills_omni/playwright-skill/agents/playwright-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/playwright-skill/agents/playwright-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/playwright-skill/agents/playwright-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/playwright-skill/agents/playwright-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/playwright-skill/agents/playwright-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/playwright-skill/agents/playwright-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/playwright-skill/agents/playwright-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/playwright-skill/agents/playwright-router.md) · 🇮🇱 [he](../../../../he/skills_omni/playwright-skill/agents/playwright-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/playwright-skill/agents/playwright-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/playwright-skill/agents/playwright-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/playwright-skill/agents/playwright-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/playwright-skill/agents/playwright-router.md)

---


Use this router when deciding whether to stay in this skill.

## Stay in `playwright-skill`

Choose this skill when the task is primarily:
- repeatable browser automation
- screenshots or evidence capture
- form submission or login validation
- responsive or device-oriented UI checks
- scoped link validation from a page

## Route to `chrome-devtools`

Switch when the task is primarily:
- quick DOM inspection
- console debugging
- manual reproduction with live inspection
- low-level network troubleshooting

## Route to accessibility-oriented workflows

Switch when the task becomes:
- structured accessibility auditing
- ARIA, keyboard, focus, or screen-reader review beyond general automation

## Route to API-focused workflows

Switch when the main issue is backend behavior and a browser adds little value.

## Route to security-focused workflows

Switch when the task becomes a security assessment rather than normal functional automation.

## Handoff checklist

When handing off, preserve:
- target URL and environment
- steps already attempted
- artifact paths
- auth constraints and whether secrets were used
- the main failure class observed
