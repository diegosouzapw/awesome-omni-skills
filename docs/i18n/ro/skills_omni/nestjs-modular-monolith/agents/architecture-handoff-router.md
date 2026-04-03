# Architecture Handoff Router (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇪🇸 [es](../../../../es/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇩🇪 [de](../../../../de/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇮🇹 [it](../../../../it/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇮🇳 [in](../../../../in/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇹🇭 [th](../../../../th/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇮🇩 [id](../../../../id/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇳🇴 [no](../../../../no/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇩🇰 [da](../../../../da/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇮🇱 [he](../../../../he/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nestjs-modular-monolith/agents/architecture-handoff-router.md)

---


Use this note when the task has moved beyond modular monolith architecture.

## Route to another skill when

### Auth redesign dominates the work

Route to: `@authentication-security`

Signals:

- new auth model
- tenant isolation policy redesign
- permission system overhaul
- deeper guard/strategy selection than module design

### Database strategy dominates the work

Route to: `@database-design`

Signals:

- indexing and query tuning
- migration strategy
- schema normalization or partitioning
- ORM replacement driven by data constraints

### API contract design dominates the work

Route to: `@api-design`

Signals:

- versioning policy
- public API governance
- external SDK contract design
- GraphQL vs REST policy work

### Testing and CI quality gates dominate the work

Route to: `@testing-strategy`

Signals:

- repository-wide test pyramid work
- contract testing framework setup
- CI architecture rules and quality gates

### Observability platform work dominates the work

Route to: `@observability`

Signals:

- tracing platform rollout
- log pipeline strategy
- metrics backend design
- SLO or incident diagnostics programs

### Actual service extraction or distributed design dominates the work

Route to: `@microservices-architecture`

Signals:

- service decomposition and deployment boundaries
- broker topology
- distributed consistency patterns
- outbox, saga, or message durability strategy as the main task

## Handoff rule

When handing off, keep these artifacts:

- bounded-context map
- module ownership notes
- public contract decisions
- persistence ownership rules
- identified risks and anti-patterns

That preserves architectural context instead of forcing the next skill to start from zero.
