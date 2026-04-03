# Example: Production Deploy (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/examples/production-deploy.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/examples/production-deploy.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/examples/production-deploy.md)

---


## Scenario

The user says: "Push this live on Vercel."

## Operator flow

1. Confirm that the user wants a **production** deployment.
2. Confirm correct project/team and app directory.
3. Confirm required production env vars exist.
4. Optionally align local production metadata:

```bash
vercel pull --environment=production
```

5. Deploy to production:

```bash
vercel deploy --prod -y
```

## Good final response shape

- State that this was a **production deployment**
- Return the deployment URL
- Mention any caveat such as runtime not yet verified or domain propagation still pending
