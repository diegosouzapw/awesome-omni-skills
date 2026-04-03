# Example: Headless or CI Authentication (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/examples/headless-ci-auth.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/examples/headless-ci-auth.md)

---


Scenario: browser-based `netlify login` is unavailable.

## Pattern

Use a secret-managed token provided as `NETLIFY_AUTH_TOKEN`.

```bash
NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN" npx netlify status
NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN" npx netlify deploy --prod
```

## Safety notes

- keep the token in the CI secret store or secure environment configuration
- do not commit the token to the repository
- do not print the token value in logs or chat output
