# Vercel CLI Command Matrix (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/vercel-deploy/references/vercel-cli-command-matrix.md)

---


Quick lookup for common deployment tasks.

| Intent | Command | Notes |
| --- | --- | --- |
| Preview deploy from current directory | `vercel deploy -y` | Safe default when the user did not request production |
| Production deploy | `vercel deploy --prod -y` | Use only after explicit confirmation |
| Link current directory to a Vercel project | `vercel link` | Prevents deploying to the wrong project/team |
| Pull preview settings locally | `vercel pull --environment=preview` | Helps align local metadata before build or deploy |
| Pull production settings locally | `vercel pull --environment=production` | Useful before production troubleshooting |
| Reproduce build locally | `vercel build` | Prefer before repeated redeploy attempts |
| Inspect a deployment | `vercel inspect <deployment-url-or-id>` | Useful for build/deployment details |
| View runtime logs | `vercel logs <deployment-url-or-id>` | Use for post-deploy runtime failures |
| Manage env vars | `vercel env` | Confirm names and scopes without exposing secret values |

## Notes

- Run commands from the intended app directory.
- In monorepos, do not assume the repository root is correct.
- Preview is the default operating mode unless the user explicitly wants production.
