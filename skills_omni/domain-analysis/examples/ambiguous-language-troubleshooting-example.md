# Ambiguous Language Troubleshooting Example

## Problem

The term `Account` appears in multiple modules, and the team assumes everything belongs to one domain.

## Evidence found

### In Identity

- `Account` means login identity and credential container.
- Related terms: user, session, password reset, MFA.

### In Billing

- `Account` means billable customer account.
- Related terms: invoice, subscription, payment method, delinquency.

### In Support

- `Account` means the customer organization associated with support entitlements.
- Related terms: case, SLA, contact, escalation.

## Analysis

The same term is overloaded. The shared label `Account` is hiding at least three semantic models.

## Better outcome

Create context-local terminology and document translation:

| Term | Context | Meaning |
| --- | --- | --- |
| Account | IdentityContext | authentication principal container |
| Billing Account | BillingContext | billable commercial entity |
| Support Account | SupportContext | customer org tied to service entitlement |

## Recommendation

- Do not force one global `Account` model.
- Capture glossary-by-context explicitly.
- Add translation at boundaries where data crosses contexts.
- Re-evaluate code that shares a single `Account` object across unrelated workflows.
