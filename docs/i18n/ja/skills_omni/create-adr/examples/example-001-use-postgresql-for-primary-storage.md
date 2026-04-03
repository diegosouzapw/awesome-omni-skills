# Example ADR: Use PostgreSQL for Primary Storage (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇪🇸 [es](../../../../es/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇫🇷 [fr](../../../../fr/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇩🇪 [de](../../../../de/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇮🇹 [it](../../../../it/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇷🇺 [ru](../../../../ru/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇯🇵 [ja](../../../../ja/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇰🇷 [ko](../../../../ko/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇸🇦 [ar](../../../../ar/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇮🇳 [hi](../../../../hi/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇮🇳 [in](../../../../in/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇹🇭 [th](../../../../th/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇻🇳 [vi](../../../../vi/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇮🇩 [id](../../../../id/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇲🇾 [ms](../../../../ms/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇳🇱 [nl](../../../../nl/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇵🇱 [pl](../../../../pl/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇸🇪 [sv](../../../../sv/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇳🇴 [no](../../../../no/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇩🇰 [da](../../../../da/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇫🇮 [fi](../../../../fi/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇵🇹 [pt](../../../../pt/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇷🇴 [ro](../../../../ro/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇭🇺 [hu](../../../../hu/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇧🇬 [bg](../../../../bg/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇸🇰 [sk](../../../../sk/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇮🇱 [he](../../../../he/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇵🇭 [phi](../../../../phi/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇨🇿 [cs](../../../../cs/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md) · 🇹🇷 [tr](../../../../tr/skills_omni/create-adr/examples/example-001-use-postgresql-for-primary-storage.md)

---


```markdown
# ADR-001: Use PostgreSQL for Primary Storage

- Date: 2026-03-27
- Status: Accepted
- Deciders: Platform team, backend leads
- Tags: database, storage

## Context
The application requires transactional integrity for billing and account updates, flexible querying for operational workflows, and a database the current team can operate confidently. We evaluated whether to continue with a document-oriented design or standardize on a relational primary store.

## Decision Drivers
- Strong ACID guarantees for core business data
- Team familiarity and operational maturity
- Managed hosting availability
- Support for relational queries and structured migrations

## Considered Options
- PostgreSQL
- MySQL
- DynamoDB

## Decision Outcome
Chosen option: **PostgreSQL**, because it best satisfies the need for transactional correctness, operational familiarity, and flexible relational querying while remaining easy to host through a managed service.

## Consequences
### Positive
- Strong transactional guarantees for critical workflows
- Mature ecosystem and operational tooling
- Team can onboard and troubleshoot quickly

### Negative
- Requires schema migration discipline
- Adds more relational modeling overhead than a schemaless store
- May require careful indexing work for high-scale query patterns

## Links
- Related RFC: RFC-012 database evaluation
- Related issue: ENG-241
```

Why this example is strong:
- states the decision directly
- records alternatives
- includes trade-offs, not just benefits
- stays concise while preserving rationale
```
