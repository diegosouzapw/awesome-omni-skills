# Domain Analysis Report Example

## Scope and assumptions

Scope: subscription platform backend modules related to signup, billing, access control, notifications, and reporting.

Evidence used:

- API routes
- domain events
- service and handler names
- UI labels
- acceptance tests

## Subdomain catalog

| Subdomain | Classification | Capability | Key concepts | Cohesion | Confidence | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Billing | Core | Manage plans, subscriptions, invoicing, charging | Plan, Subscription, Invoice, PaymentAttempt | 9/10 | High | APIs, events, policy rules |
| Identity & Access | Generic | Authentication and authorization | User, Credential, Session, Role | 7/10 | Medium | APIs, auth middleware, tests |
| Notifications | Generic | Send email and message notifications | Template, Delivery, Recipient, Channel | 6/10 | Medium | adapters, events, job handlers |
| Reporting | Supporting | Produce business reports and operational views | Report, MetricSnapshot, ExportJob | 5/10 | Low | query modules, exports |

## Candidate bounded contexts

### BillingContext

- Purpose: own subscription lifecycle and charging behavior
- Language: subscription, billing cycle, invoice, payment attempt, dunning
- Source of truth: plans, subscriptions, invoice ledger
- Recommendation: strong bounded context
- Service note: may justify service extraction later if ownership and release autonomy are proven

### IdentityContext

- Purpose: authenticate users and manage access policies
- Language: identity, credential, session, role, permission
- Recommendation: bounded context is real, but separate service is not currently justified

### NotificationContext

- Purpose: manage template-based message delivery
- Recommendation: bounded context exists, but keep modular boundary for now due to strong synchronous dependency on application flows

## Context relationships

| Upstream | Downstream | Pattern | Interface | Risk | Recommendation |
| --- | --- | --- | --- | --- | --- |
| IdentityContext | BillingContext | Customer/Supplier | API | Medium | Billing should reference account status via contract, not auth tables |
| BillingContext | NotificationContext | Published Language | Domain events | Low | Publish subscription and invoice events |
| BillingContext | ReportingContext | Open Host Service + Published Language | read API + events | Medium | Avoid direct reporting reads from billing tables |

## Hotspots

| Severity | Issue | Evidence | Recommendation |
| --- | --- | --- | --- |
| High | `BillingService` sends emails directly | direct mail adapter use in billing workflow | move delivery concerns behind NotificationContext |
| Medium | Reporting queries billing tables directly | SQL joins across contexts | introduce read model or reporting contract |
| Medium | `Customer` means different things in support docs and billing API | field mismatch and workflow mismatch | maintain glossary by context and add translation terms |

## Next validation steps

1. Confirm Billing ownership with stakeholders.
2. Validate whether Reporting is its own supporting subdomain or just a read-model concern.
3. Check whether Notification templates contain business policy or remain generic delivery infrastructure.
4. Keep extraction decisions deferred until ownership and release cadence are clear.
