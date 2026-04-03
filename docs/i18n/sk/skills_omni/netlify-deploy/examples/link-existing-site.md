# Example: Link an Existing Site (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/examples/link-existing-site.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/examples/link-existing-site.md)

---


Scenario: the local repository should deploy to an existing Netlify site instead of creating a new one.

## Commands

```bash
npx netlify status
npx netlify link
npx netlify deploy
```

## What to verify

- the chosen site is the correct one
- the local directory now shows as linked in `npx netlify status`
- the preview deploy runs against that linked site

## Good operator report

- which site was linked
- whether the deploy was preview or production
- returned deploy URL
