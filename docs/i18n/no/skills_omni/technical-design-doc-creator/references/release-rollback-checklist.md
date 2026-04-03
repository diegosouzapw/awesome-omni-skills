# Release and Rollback Checklist (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/references/release-rollback-checklist.md)

---


Use this for production releases.

## Release plan

Document:

- release method: dark launch, canary, phased rollout, big bang, migration window
- rollout stages
- owners for each stage
- release gates based on measurable signals

## Canary / staged rollout

For each stage, define:

- traffic or user percentage
- duration
- metrics to watch
- stop or advance criteria

## Rollback triggers

Examples:

- error rate exceeds threshold
- latency regression exceeds threshold
- key dependency failure rate rises
- data integrity checks fail
- customer-impacting incidents occur

## Reversibility

Explicitly state:

- whether schema changes are reversible
- whether data migrations are reversible
- whether feature flags exist
- whether the old path can remain live during rollout

## Communication

If rollback happens, document:

- who is notified
- which channel is used
- whether status communication is required
- whether a follow-up review or postmortem is expected

## Unsafe patterns

Treat these as blockers:

- irreversible migrations with no mitigation plan
- rollback that depends on uncreated feature flags
- no telemetry to judge rollout health
- no identified owner during rollout
