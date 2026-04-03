# Netlify Troubleshooting Guide (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/references/netlify-troubleshooting.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/references/netlify-troubleshooting.md)

---


## 1. Authentication failure

**Symptoms:** `npx netlify status` reports no logged-in user or invalid credentials.

**Likely cause:** Browser login not completed, token missing, or token invalid.

**Recovery:**

- Run `npx netlify login` for interactive local use.
- For CI or headless use, confirm `NETLIFY_AUTH_TOKEN` is available from a secret store.
- Re-run `npx netlify status` before attempting deploy.

## 2. Site not linked

**Symptoms:** Deploy command prompts unexpectedly for site selection or reports no linked site.

**Likely cause:** Current directory has not been linked.

**Recovery:**

- Run `npx netlify link` for an existing site.
- Run `npx netlify init` to create a new site.
- Verify the result with `npx netlify status`.

## 3. Publish directory missing

**Symptoms:** Deploy or build reports missing output directory.

**Likely cause:** Wrong publish path, failed build, or wrong working directory.

**Recovery:**

- Check publish settings in `netlify.toml`.
- Confirm the build command creates that directory.
- In monorepos, verify base directory and app root.

## 4. Local build passes, Netlify build fails

**Symptoms:** The project works locally but fails during Netlify deploy/build.

**Likely cause:** Missing env vars, wrong build command, or environment mismatch.

**Recovery:**

- Check Netlify environment variables for the relevant context.
- Verify `netlify.toml` build settings.
- Ensure the intended package/app is being built.

## 5. Monorepo wrong-root deployment

**Symptoms:** Wrong package deploys or expected files are missing.

**Likely cause:** Running commands from the wrong directory or incorrect base directory configuration.

**Recovery:**

- Identify the correct app root.
- Re-run from that directory or correct `netlify.toml`.
- Recheck build and publish paths.

## 6. Sandbox or network restriction

**Symptoms:** DNS, TLS, connection reset, or timeout failures before upload completes.

**Likely cause:** Environment blocks outbound access.

**Recovery:**

- Ask whether network-escalated execution is allowed.
- Retry only if policy allows.
- Treat this as an environment issue unless config evidence suggests otherwise.
