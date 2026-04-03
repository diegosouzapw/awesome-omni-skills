# Observability Cutover Checklist (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/legacy-migration-planner/references/observability-cutover-checklist.md)

---


Use this checklist before approving phased rollout or traffic shifting.

## Minimum Telemetry

For the migrating area, define:

- request volume
- latency
- error rate
- saturation or queue/backlog indicators where relevant
- business outcome signals for the critical user journey

## Correlation Requirements

Ensure there is a way to correlate behavior across legacy and new paths.

Examples:

- request identifiers
- trace context propagation
- consistent log fields
- environment or route labels

## Dashboards

Prepare dashboards that compare:

- legacy vs new path latency
- legacy vs new path error rate
- traffic split by route or version
- migration wave success metrics

## Alerts

Define alerts for:

- elevated error rate
- latency regression
- drop in successful transactions
- replication or synchronization lag where relevant
- unexpected traffic imbalance after cutover

## Rollback Triggers

Every migration wave should name measurable rollback triggers, such as:

- sustained error rate above threshold
- regression in key business transaction completion
- missing or invalid data after handoff
- unacceptable latency increase

## Approval Rule

Do not recommend canary, blue-green, or phased traffic shifting if the plan cannot explain how failure will be detected within the cutover window.
