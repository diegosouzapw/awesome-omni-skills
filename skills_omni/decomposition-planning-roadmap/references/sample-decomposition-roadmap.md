# Sample Decomposition Roadmap

## 1. Objectives and Constraints

- **Business drivers:** reduce release bottlenecks in Order Management, improve team autonomy, reduce incident blast radius
- **Constraints:** shared customer/account database, quarterly release freeze, existing auth platform must remain
- **Confidence level:** medium

## 2. Current State Assessment

- Components identified and dependency graph partially available
- Order orchestration, Notifications, Billing, and Reporting identified as candidate slices
- Billing is high value but deeply tied to shared transactions
- Notifications has clearer boundaries and lower rollback cost

## 3. Candidate Slices

| Candidate | Value | Seam clarity | Data ownership | Coupling | Team readiness | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| Notifications | Medium | High | High | Low | High | Extract first |
| Reporting | Medium | Medium | Medium | Medium | Medium | Later |
| Billing | High | Low | Low | High | Medium | Defer direct extraction |
| Customer Profile | High | Medium | Low | High | Low | Keep in monolith for now |

## 4. Prioritized Work Plan

1. **Notifications**
   - Why now: clear capability boundary, low coupling, manageable rollback
   - Strategy: strangler-style extraction behind existing event triggers
2. **Reporting**
   - Why later: useful but depends on clarifying ownership of source data feeds
3. **Billing**
   - Why deferred: high business value but shared transaction boundaries make first extraction risky

## 5. Phased Roadmap

### Phase 1: Preparation
- Dependency review
- Data ownership decisions
- Platform-readiness work for first slice
- Exit criteria: dashboard live, deploy path ready, rollback drafted

### Phase 2: First Extraction - Notifications
- Route notification generation through new boundary
- Validate contract tests and alerting
- Exit criteria: independent deployment demonstrated, rollback rehearsed

### Phase 3: Hardening and Next Slice Decision
- Review coupling reduction
- Re-score Reporting and Billing using latest evidence
- Exit criteria: roadmap re-baselined with updated confidence

## 6. Key Risks

- Shared customer/account schema still constrains Billing and Customer Profile
- Team ownership for Reporting is not final
- Release freeze may delay cutover windows
