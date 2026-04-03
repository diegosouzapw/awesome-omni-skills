# Sentry Troubleshooting Decision Tree (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇪🇸 [es](../../../../es/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇫🇷 [fr](../../../../fr/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇩🇪 [de](../../../../de/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇮🇹 [it](../../../../it/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇷🇺 [ru](../../../../ru/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇯🇵 [ja](../../../../ja/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇰🇷 [ko](../../../../ko/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇸🇦 [ar](../../../../ar/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇮🇳 [hi](../../../../hi/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇮🇳 [in](../../../../in/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇹🇭 [th](../../../../th/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇻🇳 [vi](../../../../vi/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇮🇩 [id](../../../../id/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇲🇾 [ms](../../../../ms/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇳🇱 [nl](../../../../nl/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇵🇱 [pl](../../../../pl/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇸🇪 [sv](../../../../sv/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇳🇴 [no](../../../../no/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇩🇰 [da](../../../../da/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇫🇮 [fi](../../../../fi/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇵🇹 [pt](../../../../pt/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇷🇴 [ro](../../../../ro/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇭🇺 [hu](../../../../hu/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇧🇬 [bg](../../../../bg/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇸🇰 [sk](../../../../sk/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇮🇱 [he](../../../../he/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇵🇭 [phi](../../../../phi/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇨🇿 [cs](../../../../cs/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md) · 🇹🇷 [tr](../../../../tr/skills_omni/sentry/examples/sentry-troubleshooting-decision-tree.md)

---


## If the call fails immediately

- Check `SENTRY_AUTH_TOKEN`
- Check token scope
- Check org/project access
- Check `SENTRY_BASE_URL`

## If the call succeeds but returns nothing

- Check org slug
- Check project slug
- Check environment name
- Widen time window
- Remove restrictive query terms

## If the results are incomplete

- Check pagination handling
- Increase limit carefully
- Check rate limiting
- Report partial coverage

## If self-hosted behaves differently

- Confirm the correct base URL
- Confirm API path compatibility
- Avoid SaaS-specific assumptions
