# Modular Monolith vs Microservice Boundary Example

## Situation

A team identifies `BillingContext` and `NotificationContext` as separate bounded contexts in a modular monolith.

## Evidence

- Billing has distinct language, policies, and lifecycle rules.
- Notifications has distinct delivery concepts and templates.
- However, the same team owns both areas.
- Both are released together every week.
- Notifications still relies on direct in-process calls and shared transactions.
- No operational need for independent scaling has been demonstrated.

## Good recommendation

- Keep `BillingContext` and `NotificationContext` as **separate internal modules**.
- Define explicit interfaces between them.
- Stop direct access to each other's internals.
- Publish domain events where useful.
- Reassess service extraction later.

## Poor recommendation

- "These are different bounded contexts, so split them into two services immediately."

## Why that is poor

A semantic boundary alone is not enough. Service extraction also needs evidence for:

- operational autonomy
- data ownership separation
- explicit contracts
- acceptable consistency model
- team ownership and support model
- measurable benefit that offsets coordination cost

## Preferred wording

Use phrasing such as:

- "Strong bounded contexts; keep as modular monolith boundaries for now."
- "Candidate future service boundary if ownership and data autonomy mature."
- "Do not extract yet; strengthen internal contracts first."
