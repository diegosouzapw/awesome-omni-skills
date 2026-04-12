# Bounded Context Canvas

Use this template for each proposed bounded context.

## Context name

`<Name>Context`

## Purpose

- What business problem does this context solve?
- What outcomes does it own?

## Ubiquitous language

- Core terms:
- Important definitions:
- Terms that differ from other contexts:

## In-scope concepts

- Entities / aggregates:
- Use cases / commands:
- Policies / invariants:
- Domain events:

## Out-of-scope concepts

- What related concepts belong elsewhere?
- What terms require translation at the boundary?

## Data / source of truth

- What data does this context own?
- What data does it only reference?
- Where are lifecycle and consistency rules enforced?

## Integrations

| Other context | Relationship | Interface style | Translation needed? | Notes |
| --- | --- | --- | --- | --- |
| `<OtherContext>` | Customer/Supplier / Conformist / ACL / Shared Kernel / OHS / Published Language | API / Event / Batch / Shared lib | Yes/No | |

## Ownership and operation

- Owner team:
- Release cadence constraints:
- Operational sensitivity:
- Cognitive-load concerns:

## Boundary recommendation

- [ ] Strong bounded context
- [ ] Candidate bounded context, needs validation
- [ ] Better as modular monolith boundary for now

## Confidence

- Confidence: High / Medium / Low
- Missing evidence:
- Risks if boundary is wrong:
