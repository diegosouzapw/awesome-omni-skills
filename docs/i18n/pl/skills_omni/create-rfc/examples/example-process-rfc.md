# RFC: Standardize Incident Review Workflow Across Engineering Teams (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/create-rfc/examples/example-process-rfc.md) · 🇪🇸 [es](../../../../es/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇫🇷 [fr](../../../../fr/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇩🇪 [de](../../../../de/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇮🇹 [it](../../../../it/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇷🇺 [ru](../../../../ru/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇯🇵 [ja](../../../../ja/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇰🇷 [ko](../../../../ko/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇸🇦 [ar](../../../../ar/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇮🇳 [hi](../../../../hi/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇮🇳 [in](../../../../in/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇹🇭 [th](../../../../th/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇻🇳 [vi](../../../../vi/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇮🇩 [id](../../../../id/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇲🇾 [ms](../../../../ms/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇳🇱 [nl](../../../../nl/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇵🇱 [pl](../../../../pl/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇸🇪 [sv](../../../../sv/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇳🇴 [no](../../../../no/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇩🇰 [da](../../../../da/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇫🇮 [fi](../../../../fi/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇵🇹 [pt](../../../../pt/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇷🇴 [ro](../../../../ro/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇭🇺 [hu](../../../../hu/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇧🇬 [bg](../../../../bg/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇸🇰 [sk](../../../../sk/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇮🇱 [he](../../../../he/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇵🇭 [phi](../../../../phi/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇨🇿 [cs](../../../../cs/skills_omni/create-rfc/examples/example-process-rfc.md) · 🇹🇷 [tr](../../../../tr/skills_omni/create-rfc/examples/example-process-rfc.md)

---


- Status: In Review
- Owner / Driver: Engineering Operations
- Reviewers / Approvers: VP Engineering, SRE Manager, Product Engineering Managers
- Created: 2026-03-27
- Last Updated: 2026-03-27
- Target Decision Date: 2026-04-12
- Impact: Medium

## Summary

This RFC proposes a standard incident review workflow for all engineering teams. Today, post-incident practices vary widely, causing inconsistent learning and weak follow-through. The RFC compares maintaining team-specific processes, adopting a lightweight standard, and enforcing a heavier centralized review model.

## Problem Statement

We need a consistent, low-friction incident review process that improves learning without slowing teams down.

## Decision Criteria

| Criterion | Weight | Type | Notes |
| --- | --- | --- | --- |
| Adoption likelihood | 5 | Must-have | Process only helps if teams use it |
| Learning quality | 4 | Weighted | Need repeatable follow-through |
| Time overhead | 4 | Weighted | Teams are sensitive to ceremony |
| Executive visibility | 2 | Weighted | Helpful but not the main driver |

## Options Considered

### Option 1: Keep team-specific incident review processes

- Benefits: No transition cost.
- Drawbacks: Inconsistent quality and poor cross-team learning.

### Option 2: Adopt a lightweight standard workflow and template

- Benefits: Better consistency with limited process overhead.
- Drawbacks: Requires some coaching and adoption support.

### Option 3: Require a centralized review board for all Sev1 and Sev2 incidents

- Benefits: Highest oversight and consistency.
- Drawbacks: Highest coordination cost and slower throughput.

## Recommendation / Decision State

Recommend Option 2. It best balances adoption, learning quality, and operational overhead.

## Success Metrics

- 90% of Sev1/Sev2 incidents have a review completed within 10 business days
- action items have named owners in 100% of completed reviews
- quarterly survey shows improved confidence in incident learning process

## Action Items / Follow-ups

- [ ] Publish incident review template
- [ ] Pilot with two teams for one month
- [ ] Review adoption data after first quarter

## Outcome

Pending final approval.
