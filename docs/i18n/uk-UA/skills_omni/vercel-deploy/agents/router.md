# Router Guidance (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/agents/router.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/agents/router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/agents/router.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/agents/router.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/agents/router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/agents/router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/agents/router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/agents/router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/agents/router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/agents/router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/agents/router.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/agents/router.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/agents/router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/agents/router.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/agents/router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/agents/router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/agents/router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/agents/router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/agents/router.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/agents/router.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/agents/router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/agents/router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/agents/router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/agents/router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/agents/router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/agents/router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/agents/router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/agents/router.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/agents/router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/agents/router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/agents/router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/agents/router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/agents/router.md)

---


Use `vercel-deploy` when the task is primarily about deploying to Vercel or diagnosing deployment-path failures on Vercel.

Route elsewhere when:

- the user needs DNS or custom-domain setup and verification
- the user needs CI/CD pipeline design rather than direct deployment execution
- the primary problem is framework or application debugging unrelated to deployment mechanics
- the primary problem is secret management, credential lifecycle, or broader security operations

If routing away after partial deployment work, preserve these facts for handoff:

- preview or production intent
- project/team context
- app/root directory used
- whether the directory was linked
- whether `vercel pull` or `vercel build` was used
- deployment URL or failure point
