# Netlify CLI Quick Reference (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/references/netlify-cli-quick-reference.md)

---


Use these commands as the shortest safe starting points for common Netlify deployment tasks.

## Core commands

| Goal | Command | Notes |
| --- | --- | --- |
| Check auth and current site link | `npx netlify status` | Best first command in most cases |
| Log in interactively | `npx netlify login` | Opens browser-based login |
| Link local directory to existing site | `npx netlify link` | Use when the site already exists |
| Create and link a new site | `npx netlify init` | Interactive site creation |
| Preview or draft deploy | `npx netlify deploy` | Safe default for validation |
| Production deploy | `npx netlify deploy --prod` | Use only with explicit intent |
| Open site/dashboard | `npx netlify open` | Useful for verification |
| Manage environment variables | `npx netlify env --help` | Use documented subcommands as needed |

## Safe deploy sequence

```bash
npx netlify status
npx netlify deploy
```

Use this by default when the site is already linked and the user wants a safe validation deploy.

## Production sequence

```bash
npx netlify status
npx netlify deploy --prod
```

Prefer this only after config has been validated and the user clearly wants the live site updated.

## Notes

- Prefer `netlify.toml` over remembered interactive settings.
- In monorepos, verify the correct app root and publish directory before deploying.
- In headless environments, use `NETLIFY_AUTH_TOKEN` from a secret store.
