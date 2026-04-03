# Sentry Troubleshooting (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/sentry/references/sentry-troubleshooting.md) · 🇪🇸 [es](../../../../es/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇫🇷 [fr](../../../../fr/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇩🇪 [de](../../../../de/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇮🇹 [it](../../../../it/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇷🇺 [ru](../../../../ru/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇯🇵 [ja](../../../../ja/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇰🇷 [ko](../../../../ko/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇸🇦 [ar](../../../../ar/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇮🇳 [hi](../../../../hi/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇮🇳 [in](../../../../in/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇹🇭 [th](../../../../th/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇻🇳 [vi](../../../../vi/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇮🇩 [id](../../../../id/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇲🇾 [ms](../../../../ms/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇳🇱 [nl](../../../../nl/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇵🇱 [pl](../../../../pl/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇸🇪 [sv](../../../../sv/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇳🇴 [no](../../../../no/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇩🇰 [da](../../../../da/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇫🇮 [fi](../../../../fi/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇵🇹 [pt](../../../../pt/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇷🇴 [ro](../../../../ro/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇭🇺 [hu](../../../../hu/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇧🇬 [bg](../../../../bg/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇸🇰 [sk](../../../../sk/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇮🇱 [he](../../../../he/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇵🇭 [phi](../../../../phi/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇨🇿 [cs](../../../../cs/skills_omni/sentry/references/sentry-troubleshooting.md) · 🇹🇷 [tr](../../../../tr/skills_omni/sentry/references/sentry-troubleshooting.md)

---


## Problem: 401 Unauthorized or 403 Forbidden

**Symptoms:** Requests fail with auth or permission errors.

**Solution:**
- Confirm `SENTRY_AUTH_TOKEN` is set locally.
- Confirm the token is valid and not expired.
- Confirm the token has the necessary read scopes.
- Confirm the token owner can access the org and project.
- Confirm you are using the correct base URL.

## Problem: Empty results

**Symptoms:** The API succeeds but returns no issues.

**Solution:**
- Confirm org and project slugs.
- Confirm the environment name.
- Widen the time window.
- Remove restrictive query terms.
- Try listing issues with a broader query, then narrow again.

## Problem: Missing expected issues

**Symptoms:** Some known incidents do not appear in the summary.

**Solution:**
- Confirm pagination is being followed.
- Confirm the result limit is high enough.
- Check for rate limiting.
- Confirm the issue belongs to the selected project.

## Problem: Rate limiting

**Symptoms:** Requests slow down, fail intermittently, or return throttling signals.

**Solution:**
- Back off before retrying.
- Avoid tight polling loops.
- Return a partial-result note if coverage is incomplete.

## Problem: Self-hosted mismatch

**Symptoms:** Calls that should work against sentry.io fail in a private deployment.

**Solution:**
- Set `SENTRY_BASE_URL` explicitly.
- Confirm the deployment exposes the expected `/api/0/` paths.
- Do not assume SaaS defaults in self-hosted environments.
