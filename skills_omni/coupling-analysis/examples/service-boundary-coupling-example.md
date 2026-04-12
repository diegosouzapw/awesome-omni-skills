# Service Boundary Coupling Example

## Problematic pattern: shared persistence and model leakage

`orders-service` needs customer tier information. Instead of consuming a public contract, it:

- reads `customer_profile` tables directly
- depends on internal enum values like `VIP_GOLD`
- assumes field semantics that are undocumented outside Customer Profile

This creates:
- intrusive coupling through direct database access
- model coupling through leaked internal meanings
- high distance because the coupling crosses service and team boundaries

## Better pattern: explicit contract coupling

A better design would expose a narrow contract such as:

- `GET /customer-summary/{id}` returning only `customerId`, `status`, and `tier`
- or an event-fed projection owned by Orders for the exact data it needs

Characteristics of the better boundary:
- the upstream keeps internal schema freedom
- the downstream depends on an intentional contract
- versioning and compatibility can be managed explicitly
- operational ownership is clearer

## Important nuance

Contract coupling is not automatically perfect. It still needs review for:
- versioning strategy
- undocumented semantics
- over-broad payloads
- hidden sequencing or deployment assumptions
