# Service Contract Review Checklist

Use this when the coupling under review crosses a service or API boundary.

## Contract design

- [ ] Is there an explicit contract, not just an implementation exposed by convenience?
- [ ] Is the contract documented or discoverable?
- [ ] Is the contract versioned or otherwise evolution-friendly?
- [ ] Does the consumer receive only what it needs?
- [ ] Are field meanings explicit rather than implicit or tribal?

## Model leakage

- [ ] Are internal domain objects exposed directly?
- [ ] Are internal enums, codes, or statuses exposed without abstraction?
- [ ] Does the consumer depend on undocumented fields or ordering?
- [ ] Does the consumer need upstream implementation knowledge to use the contract safely?

## Data and persistence coupling

- [ ] Does one service read another service's database directly?
- [ ] Are tables or schemas shared across service boundaries?
- [ ] Is data ownership unclear?

Default stance: direct reads of another service's persistence are severe unless there is a narrowly justified legacy constraint.

## Behavioral coupling

- [ ] Must calls happen in strict order?
- [ ] Do multiple services need coordinated deployment for routine changes?
- [ ] Are there distributed transactions or tightly coupled sagas?
- [ ] Are retries, timeouts, or availability assumptions creating hidden coupling?

## Good signs

- [ ] Dedicated DTOs or schemas
- [ ] Published contract format such as OpenAPI or Protobuf
- [ ] Anti-corruption layer or adapter at the boundary
- [ ] Backward-compatible evolution strategy
- [ ] Clear ownership of contract changes
