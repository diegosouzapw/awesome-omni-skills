# Example: First Preview Deploy (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/examples/first-preview-deploy.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/examples/first-preview-deploy.md)

---


Scenario: a local project is ready for its first Netlify deployment, and the user wants a safe validation step before production.

## Commands

```bash
npx netlify status
npx netlify init
npx netlify deploy
```

## What to verify

- authentication succeeds
- the intended site is created and linked
- build settings match the project
- a preview deploy URL is returned

## Good operator report

- site was newly created or linked
- deploy type was preview
- preview URL
- any assumptions about build command or publish directory
