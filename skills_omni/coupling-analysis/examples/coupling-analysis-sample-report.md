# Sample Coupling Analysis Report

## 1. Executive Summary

- **Scope:** Orders and Customer Profile integration
- **Analysis level:** Service boundary
- **Units analyzed:** `orders-service`, `customer-profile-service`, shared reporting job
- **Overall health:** Attention
- **Top recommendation:** Stop direct database reads from Orders into Customer Profile storage
- **Confidence:** Medium

## 2. Scope and Assumptions

- repository or subsystem: commerce platform services
- time window reviewed: last 6 months
- evidence sources used: service code, SQL access layer, recent Git history, incident notes
- evidence sources missing: production traces for all paths

## 3. Dependency Inventory

| Unit | Responsibility | Key outgoing dependencies | Key incoming dependencies |
| --- | --- | --- | --- |
| orders-service | order lifecycle | customer-profile API, customer-profile DB read, payment API | checkout web, admin tools |
| customer-profile-service | customer profile management | profile DB, event bus | orders-service, support portal |
| reporting-job | daily extracts | orders-service DB, customer-profile DB | finance ops |

## 4. Key Coupling Edges

| From | To | Type | Strength | Distance | Volatility | Severity | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| orders-service | customer-profile DB | intrusive | high | high | medium | critical | high |
| orders-service | customer-profile API | model | medium | high | medium | attention | medium |
| reporting-job | both service DBs | intrusive | high | high | low | attention | medium |

## 5. Findings

### Finding: Orders bypasses Customer Profile service boundary

- **Modules/services involved:** `orders-service` -> `customer_profile` tables
- **Coupling type:** Intrusive coupling
- **Evidence:** SQL queries in Orders read profile tables directly for loyalty tier and account status
- **Why it matters:** schema changes in Customer Profile can break Orders without any contract change
- **Hidden/runtime indicators:** release coordination already happens when profile schema changes
- **Recommendation:** replace direct DB reads with a dedicated contract endpoint or event-fed projection
- **Disposition:** Refactor

## 6. Positive Patterns

- Customer Profile exposes a documented API for basic identity lookups
- Payment integration uses a narrow DTO rather than internal entities

## 7. Hidden or Runtime Coupling Indicators

- Incident notes show checkout degradation when profile DB maintenance occurs
- Schema updates require cross-team coordination

## 8. Prioritized Recommendations

### High priority
1. Remove direct DB reads from Orders into Customer Profile persistence

### Medium priority
1. Replace rich profile response with a narrower contract for Orders use cases

### Low priority
1. Document reporting-job data ownership and long-term extraction path

## 9. Limitations

- No full distributed trace sample was available
- Co-change analysis was limited by recent service reorganization

## 10. Appendix: Notes

- churn observations: Orders and Customer Profile co-changed in several loyalty-related commits
- temporal coupling observations: moderate same-commit activity around tier logic
- contract review observations: Orders uses more profile fields than it truly needs
- ownership/coordination observations: separate teams, coordinated releases
