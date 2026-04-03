# Netlify Monorepo Deployment Guide (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/references/netlify-monorepo-guide.md)

---


Monorepos fail most often because the deploy runs from the wrong location or uses the wrong base or publish directory.

## Preflight checks

Before linking or deploying, confirm:

- which app should be deployed
- whether commands are being run from the app root or repo root
- whether `netlify.toml` defines a `base` directory
- whether the publish path is correct for that app
- whether the build command belongs to the intended workspace

## Safe approach

1. Identify the exact app package.
2. Inspect `netlify.toml` and workspace config.
3. Confirm the build command and output directory.
4. Run Netlify commands from the intended directory or set `base` explicitly.

## Warning signs

- a different app deploys than expected
- publish directory is missing even though another package builds correctly
- the install or build step uses the wrong workspace context
