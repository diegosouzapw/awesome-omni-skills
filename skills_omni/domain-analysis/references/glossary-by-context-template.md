# Glossary by Context Template

Use this template when terms may have different meanings across domains or bounded contexts.

| Term | Context | Meaning in this context | Related terms | Evidence | Collision? |
| --- | --- | --- | --- | --- | --- |
| Customer | BillingContext | The billable account owner responsible for payment | Subscription, Invoice | API payloads, billing service names | Yes |
| Customer | SupportContext | The person or organization opening or affected by a support case | Ticket, SLA | Support UI labels, ticket model | Yes |

## Notes

- A collision does not mean one context is wrong.
- A collision usually means meanings should remain local to each context.
- If translation is needed between contexts, capture it in the context map.
