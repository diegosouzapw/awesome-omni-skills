# Production Deploy Safety Notes (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/references/production-deploy-safety.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/references/production-deploy-safety.md)

---


Production deployment should be explicit, not assumed.

## Before production deploy

- Confirm the user explicitly wants production
- Confirm the correct project and team
- Confirm the correct app/root directory
- Confirm required production env vars exist
- Mention potential impact to live traffic

## Suggested command

```bash
vercel deploy --prod -y
```

## After production deploy

Return:

- deployment URL
- that the deployment was production
- any caveats about unverified runtime behavior

## If something goes wrong

- ask whether the user wants rollback or recovery help
- use deployment inspection and logs to determine whether the problem is build-time or runtime
- avoid claiming success beyond the actual deployment result
