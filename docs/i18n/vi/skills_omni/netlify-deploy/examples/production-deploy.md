# Example: Production Deploy (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/examples/production-deploy.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/examples/production-deploy.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/examples/production-deploy.md)

---


Scenario: the user explicitly wants the live Netlify site updated.

## Commands

```bash
npx netlify status
npx netlify deploy --prod
```

## Use when

- the directory is already linked to the correct site
- build and publish settings are already verified
- the user clearly requested production deployment

## Good operator report

- production deploy completed
- production URL
- any config assumptions or warnings
