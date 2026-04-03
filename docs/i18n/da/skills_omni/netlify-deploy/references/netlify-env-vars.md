# Netlify Environment Variables Guide (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/references/netlify-env-vars.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/references/netlify-env-vars.md)

---


## Principles

- Keep secrets out of the repository.
- Prefer Netlify-managed environment variables or CI secret stores.
- Treat missing environment variables as a common cause of Netlify-only build failures.

## Recommended workflow

1. Identify variables required by the build or app runtime.
2. Confirm they exist in Netlify for the intended site and context.
3. Redeploy after variable changes.
4. Avoid printing variable values in logs or chat output.

## Headless auth

For non-interactive execution, use `NETLIFY_AUTH_TOKEN` from a secret store.

Do not:

- commit the token to the repo
- embed it in checked-in scripts
- paste it into markdown examples with a real value

## Diagnostic clue

If a build works locally but fails on Netlify, compare:

- available environment variables
- build command behavior
- expected runtime configuration
