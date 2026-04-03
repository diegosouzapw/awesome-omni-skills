# Deployment Router Notes (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/agents/deployment-router.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/agents/deployment-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/agents/deployment-router.md)

---


Use `netlify-deploy` when the core task is linking or deploying a site with the Netlify CLI.

Route away when the primary problem becomes:

- framework-specific build debugging beyond deploy configuration
- CI/CD workflow design or provider-specific pipeline authoring
- DNS, custom domains, certificates, or nameserver work
- broad secret-governance or organizational environment-management policy

Keep any already-confirmed Netlify facts during handoff:

- auth method used
- linked site identity
- build command and publish directory
- whether preview deploy succeeded
- whether failure is config-related or environment-related
