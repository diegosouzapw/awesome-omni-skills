# Sentry API Endpoint Map (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/sentry/references/sentry-api-endpoints.md) · 🇪🇸 [es](../../../../es/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇫🇷 [fr](../../../../fr/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇩🇪 [de](../../../../de/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇮🇹 [it](../../../../it/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇷🇺 [ru](../../../../ru/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇯🇵 [ja](../../../../ja/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇰🇷 [ko](../../../../ko/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇸🇦 [ar](../../../../ar/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇮🇳 [hi](../../../../hi/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇮🇳 [in](../../../../in/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇹🇭 [th](../../../../th/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇻🇳 [vi](../../../../vi/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇮🇩 [id](../../../../id/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇲🇾 [ms](../../../../ms/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇳🇱 [nl](../../../../nl/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇵🇱 [pl](../../../../pl/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇸🇪 [sv](../../../../sv/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇳🇴 [no](../../../../no/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇩🇰 [da](../../../../da/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇫🇮 [fi](../../../../fi/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇵🇹 [pt](../../../../pt/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇷🇴 [ro](../../../../ro/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇭🇺 [hu](../../../../hu/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇧🇬 [bg](../../../../bg/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇸🇰 [sk](../../../../sk/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇮🇱 [he](../../../../he/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇵🇭 [phi](../../../../phi/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇨🇿 [cs](../../../../cs/skills_omni/sentry/references/sentry-api-endpoints.md) · 🇹🇷 [tr](../../../../tr/skills_omni/sentry/references/sentry-api-endpoints.md)

---


This skill is limited to read-only investigation.

## Authentication

Use a local bearer token via `SENTRY_AUTH_TOKEN`.

Recommended read scopes:

- `org:read`
- `project:read`
- `event:read`

## Base URL

- SaaS default: `https://sentry.io`
- Self-hosted: use `SENTRY_BASE_URL`

## Task to endpoint map

| Task | Endpoint | Inputs | Safe summary fields |
| --- | --- | --- | --- |
| List project issues | `/api/0/projects/{org_slug}/{project_slug}/issues/` | org, project, query, environment, statsPeriod, limit | title, shortId, status, count, firstSeen, lastSeen, environment list, top tags |
| Retrieve issue detail | `/api/0/issues/{issue_id}/` | issue ID | status, count, firstSeen, lastSeen, culprit, metadata, release, permalink |
| List issue events | `/api/0/issues/{issue_id}/events/` | issue ID, limit | event IDs, timestamps, environment, release, platform |
| Retrieve project event | `/api/0/projects/{org_slug}/{project_slug}/events/{event_id}/` | org, project, event ID | event ID, timestamp, environment, release, culprit, tags, URL |

## Workflow notes

- Prefer listing issues before issue detail.
- Prefer issue detail before event detail.
- Fetch a single event only when needed.
- Follow cursor-based pagination on list operations.
- Report partial results when limits or throttling affect coverage.
