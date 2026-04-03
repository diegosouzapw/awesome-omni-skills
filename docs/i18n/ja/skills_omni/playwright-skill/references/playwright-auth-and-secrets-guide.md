# Playwright Authentication and Secrets Guide (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/playwright-skill/references/playwright-auth-and-secrets-guide.md)

---


## Rules

- Use test accounts whenever possible.
- Pass credentials through environment variables.
- Use a fresh browser context for auth-sensitive work.
- Treat storage state, traces, screenshots, and videos as sensitive artifacts.

## Minimal credential pattern

```bash
TARGET_URL="http://localhost:3001" \
TEST_EMAIL="user@example.com" \
TEST_PASSWORD="<test-password>" \
cd "$SKILL_DIR" && node run.js /tmp/playwright-test-login.js
```

## Storage state cautions

Saved auth state may contain cookies or headers that grant access.

Do not:
- commit storage state files
- attach them to tickets casually
- reuse them across unrelated tasks without verifying freshness and permission

## Before sharing artifacts

Review for:
- session cookies or tokens
- personal data
- internal URLs
- account-specific dashboards
- secrets shown in forms or error messages
