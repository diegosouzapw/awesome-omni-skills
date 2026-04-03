# Sentry Query Examples (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/sentry/examples/sentry-query-examples.md) · 🇪🇸 [es](../../../../es/skills_omni/sentry/examples/sentry-query-examples.md) · 🇫🇷 [fr](../../../../fr/skills_omni/sentry/examples/sentry-query-examples.md) · 🇩🇪 [de](../../../../de/skills_omni/sentry/examples/sentry-query-examples.md) · 🇮🇹 [it](../../../../it/skills_omni/sentry/examples/sentry-query-examples.md) · 🇷🇺 [ru](../../../../ru/skills_omni/sentry/examples/sentry-query-examples.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/sentry/examples/sentry-query-examples.md) · 🇯🇵 [ja](../../../../ja/skills_omni/sentry/examples/sentry-query-examples.md) · 🇰🇷 [ko](../../../../ko/skills_omni/sentry/examples/sentry-query-examples.md) · 🇸🇦 [ar](../../../../ar/skills_omni/sentry/examples/sentry-query-examples.md) · 🇮🇳 [hi](../../../../hi/skills_omni/sentry/examples/sentry-query-examples.md) · 🇮🇳 [in](../../../../in/skills_omni/sentry/examples/sentry-query-examples.md) · 🇹🇭 [th](../../../../th/skills_omni/sentry/examples/sentry-query-examples.md) · 🇻🇳 [vi](../../../../vi/skills_omni/sentry/examples/sentry-query-examples.md) · 🇮🇩 [id](../../../../id/skills_omni/sentry/examples/sentry-query-examples.md) · 🇲🇾 [ms](../../../../ms/skills_omni/sentry/examples/sentry-query-examples.md) · 🇳🇱 [nl](../../../../nl/skills_omni/sentry/examples/sentry-query-examples.md) · 🇵🇱 [pl](../../../../pl/skills_omni/sentry/examples/sentry-query-examples.md) · 🇸🇪 [sv](../../../../sv/skills_omni/sentry/examples/sentry-query-examples.md) · 🇳🇴 [no](../../../../no/skills_omni/sentry/examples/sentry-query-examples.md) · 🇩🇰 [da](../../../../da/skills_omni/sentry/examples/sentry-query-examples.md) · 🇫🇮 [fi](../../../../fi/skills_omni/sentry/examples/sentry-query-examples.md) · 🇵🇹 [pt](../../../../pt/skills_omni/sentry/examples/sentry-query-examples.md) · 🇷🇴 [ro](../../../../ro/skills_omni/sentry/examples/sentry-query-examples.md) · 🇭🇺 [hu](../../../../hu/skills_omni/sentry/examples/sentry-query-examples.md) · 🇧🇬 [bg](../../../../bg/skills_omni/sentry/examples/sentry-query-examples.md) · 🇸🇰 [sk](../../../../sk/skills_omni/sentry/examples/sentry-query-examples.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/sentry/examples/sentry-query-examples.md) · 🇮🇱 [he](../../../../he/skills_omni/sentry/examples/sentry-query-examples.md) · 🇵🇭 [phi](../../../../phi/skills_omni/sentry/examples/sentry-query-examples.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/sentry/examples/sentry-query-examples.md) · 🇨🇿 [cs](../../../../cs/skills_omni/sentry/examples/sentry-query-examples.md) · 🇹🇷 [tr](../../../../tr/skills_omni/sentry/examples/sentry-query-examples.md)

---


## Unresolved production issues

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --environment prod \
  --time-range 24h \
  --limit 20 \
  --query "is:unresolved level:error"
```

## Release-scoped investigation

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --environment prod \
  --time-range 7d \
  --limit 20 \
  --query "release:1.2.3"
```

## Short ID lookup

```bash
python3 scripts/sentry_api.py \
  list-issues \
  --org your-org \
  --project your-project \
  --query "ABC-123" \
  --limit 1
```

## Issue drill-down

```bash
python3 scripts/sentry_api.py issue-detail 1234567890
```

## Event inspection

```bash
python3 scripts/sentry_api.py \
  event-detail \
  --org your-org \
  --project your-project \
  abcdef1234567890
```
