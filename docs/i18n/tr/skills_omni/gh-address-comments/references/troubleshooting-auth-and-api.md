# Auth and API Troubleshooting (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-address-comments/references/troubleshooting-auth-and-api.md)

---


## Auth preflight checks

Run:

```bash
gh auth status
```

Confirm:

- the expected host is listed
- the expected account is active
- the session is valid

For GitHub Enterprise, the correct hostname matters during both login and later API calls.

## If login is required

Use:

```bash
gh auth login
```

Do not ask users to paste tokens into chat unless they explicitly choose a manual path outside this skill.

## Common failure modes

### `401 Unauthorized`

Possible causes:

- expired auth
- wrong host
- wrong account
- missing permissions

### `403 Forbidden`

Possible causes:

- insufficient token permissions
- repository access restrictions
- enterprise policy limitations
- rate limiting in some environments

### Empty data from API calls

Possible causes:

- wrong repository context
- branch not associated with an open PR
- fetching only issue comments but not review threads
- querying a host different from the authenticated one

## Safe recovery steps

1. Confirm repository and branch context.
2. Re-run `gh auth status`.
3. Confirm host/account match the target repo.
4. Retry with explicit repository context if needed.
5. If necessary and user-approved, re-run `gh auth login`.
