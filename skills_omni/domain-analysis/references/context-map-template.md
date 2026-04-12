# Context Map Template

Use this template to describe relationships between bounded contexts.

## Context list

- `<ContextA>`
- `<ContextB>`
- `<ContextC>`

## Relationship table

| Upstream | Downstream | Relationship pattern | Contract / interface | Data ownership note | Risk | Recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| `<ContextA>` | `<ContextB>` | Customer/Supplier | REST API | A owns customer lifecycle | Medium | Keep explicit contract |
| `<ContextB>` | `<ContextC>` | Published Language | Domain events | B publishes billing events | Low | Version event schema |

## Pattern guidance

### Customer / Supplier

Use when downstream depends on upstream and upstream can respond to downstream needs through explicit collaboration.

### Conformist

Use when downstream accepts the upstream model with limited negotiation power.

### Anti-Corruption Layer

Use when translation is needed to protect the downstream model from upstream semantics.

### Shared Kernel

Use sparingly. Shared models create coordination cost and can blur boundaries.

### Open Host Service

Use when a context offers a stable integration interface for multiple consumers.

### Published Language

Use when contexts share an explicit contract such as event schemas, documented DTOs, or integration vocabulary.

## Review questions

- [ ] Is upstream/downstream direction clear?
- [ ] Are contracts explicit?
- [ ] Is translation needed?
- [ ] Is shared storage hiding a semantic boundary?
- [ ] Should this remain an internal modular boundary for now?
