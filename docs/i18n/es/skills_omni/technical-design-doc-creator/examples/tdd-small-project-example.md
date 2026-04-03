# Example: Small Project TDD (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/examples/tdd-small-project-example.md)

---


# TDD - Add webhook retry visibility for CRM sync

| Field | Value |
| --- | --- |
| Tech Lead | @alex |
| Team | Integrations |
| Status | Draft |
| Epic/Ticket | INT-214 |
| Last Updated | 2026-03-27 |

## Context

Our CRM sync already retries failed outbound webhooks, but the team has no quick way to see retry volume or identify stuck deliveries.

## Problem Statement

Support and engineering spend time inspecting logs manually when CRM deliveries fail. This slows diagnosis and increases partner-facing resolution time.

## Scope

### In Scope
- Expose retry counts by destination
- Show last failure reason
- Add one internal dashboard view

### Out of Scope
- Changing retry policy
- Adding self-service customer controls
- Rewriting the webhook delivery service

## Technical Solution

Add retry outcome counters and last-failure metadata to the existing webhook delivery pipeline. Expose these through an internal admin endpoint and dashboard.

## Risks

| Risk | Impact | Likelihood | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| Dashboard data is stale | Low | Medium | Refresh every minute and label freshness | @alex |
| Retry metadata increases storage slightly | Low | Low | Retain only recent failure summary | @alex |
| Support misreads retry states | Medium | Low | Add clear status definitions | @maria |

## Implementation Plan

1. Add retry counters and failure summary fields
2. Expose internal read endpoint
3. Add dashboard panel
4. Validate with staging failures

## Testing Strategy

- Unit tests for retry counter updates
- Integration test for retry summary endpoint
- One end-to-end check for failed delivery visibility
