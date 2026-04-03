# Example: Monorepo Deploy (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/examples/monorepo-deploy.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/examples/monorepo-deploy.md)

---


## Scenario

The repository contains multiple apps and the Vercel target is `apps/web`.

## Operator flow

1. Confirm that `apps/web` is the intended deploy root.
2. Change into that directory before running Vercel commands.
3. Link if necessary:

```bash
cd apps/web
vercel link
```

4. Pull settings if needed:

```bash
vercel pull --environment=preview
```

5. Deploy preview:

```bash
vercel deploy -y
```

## Key point

Do not assume the repository root is the correct deployment root in a monorepo.
