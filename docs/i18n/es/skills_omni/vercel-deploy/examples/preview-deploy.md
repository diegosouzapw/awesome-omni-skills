# Example: Preview Deploy (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/examples/preview-deploy.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/examples/preview-deploy.md)

---


## Scenario

The user says: "Deploy my app to Vercel and give me the link."

## Operator flow

1. Confirm that preview deployment is acceptable if the user did not explicitly request production.
2. Move to the correct app directory.
3. If needed, link the project:

```bash
vercel link
```

4. Optionally align preview metadata:

```bash
vercel pull --environment=preview
```

5. Deploy:

```bash
vercel deploy -y
```

## Good final response shape

- State that this was a **preview deployment**
- Return the deployment URL
- Note that deployment success does not guarantee full runtime correctness unless the user asked for testing
