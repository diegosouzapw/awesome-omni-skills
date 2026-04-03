# Playwright Workflow Guide (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/playwright-skill/references/playwright-workflow-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/playwright-skill/references/playwright-workflow-guide.md)

---


Use this guide as the short operational checklist for the skill.

## 1. Preflight

- Resolve `$SKILL_DIR` from the location of `SKILL.md`.
- If needed, run `cd "$SKILL_DIR" && npm run setup`.
- Confirm the target URL or localhost app.
- Confirm whether login, uploads, popups, or destructive actions are in scope.

## 2. Localhost detection

For localhost testing, run:

```bash
cd "$SKILL_DIR" && node -e "require('./lib/helpers').detectDevServers().then(servers => console.log(JSON.stringify(servers)))"
```

Decision rule:
- one server found: use it
- multiple found: ask the user
- none found: ask for URL or help start the app

## 3. Script generation

- Write the script to `/tmp/playwright-test-<task>.js`.
- Put `TARGET_URL` at the top.
- Put credentials in environment variables, not code.
- Prefer a fresh browser context for each task.

## 4. Execution

```bash
cd "$SKILL_DIR" && node run.js /tmp/playwright-test-<task>.js
```

## 5. Evidence

Minimum:
- console summary
- screenshot

For multi-step flows:
- trace on failure
- optional video if the environment supports it and the user needs reviewable motion evidence

## 6. Handoff note

Include:
- exact target tested
- key actions performed
- expected versus actual result
- artifact paths
- any routing recommendation to another skill
