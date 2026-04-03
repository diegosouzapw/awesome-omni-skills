# Sentry Query Cheat Sheet (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇪🇸 [es](../../../../es/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇩🇪 [de](../../../../de/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇮🇹 [it](../../../../it/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇮🇳 [in](../../../../in/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇹🇭 [th](../../../../th/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇮🇩 [id](../../../../id/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇳🇴 [no](../../../../no/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇩🇰 [da](../../../../da/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇮🇱 [he](../../../../he/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/sentry/references/sentry-query-cheatsheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/sentry/references/sentry-query-cheatsheet.md)

---


Use these queries to keep investigations reproducible.

## Common filters

- `is:unresolved` — unresolved issues
- `is:resolved` — resolved issues
- `is:regressed` — regressed issues
- `level:error` — error-level issues
- `level:fatal` — fatal-level issues
- `environment:prod` — production environment
- `release:1.2.3` — issues tied to a release
- `ABC-123` — short ID lookup

## Practical combinations

### Recent unresolved production errors

```text
environment:prod is:unresolved level:error
```

### Recent fatal production issues

```text
environment:prod is:unresolved level:fatal
```

### Release-scoped investigation

```text
environment:prod release:1.2.3
```

### Regressions in production

```text
environment:prod is:regressed
```

### Short ID resolution

```text
ABC-123
```

## Usage guidance

- Start broad enough to confirm the project is returning data.
- Then add environment, status, and release filters.
- Always report the exact query used in the final summary.
- If a query returns nothing, widen the time window before concluding there are no relevant issues.
