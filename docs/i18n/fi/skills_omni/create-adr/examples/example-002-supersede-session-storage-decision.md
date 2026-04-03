# Example ADR: Supersede Session Storage Decision (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇪🇸 [es](../../../../es/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇫🇷 [fr](../../../../fr/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇩🇪 [de](../../../../de/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇮🇹 [it](../../../../it/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇷🇺 [ru](../../../../ru/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇯🇵 [ja](../../../../ja/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇰🇷 [ko](../../../../ko/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇸🇦 [ar](../../../../ar/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇮🇳 [hi](../../../../hi/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇮🇳 [in](../../../../in/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇹🇭 [th](../../../../th/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇻🇳 [vi](../../../../vi/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇮🇩 [id](../../../../id/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇲🇾 [ms](../../../../ms/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇳🇱 [nl](../../../../nl/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇵🇱 [pl](../../../../pl/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇸🇪 [sv](../../../../sv/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇳🇴 [no](../../../../no/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇩🇰 [da](../../../../da/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇫🇮 [fi](../../../../fi/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇵🇹 [pt](../../../../pt/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇷🇴 [ro](../../../../ro/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇭🇺 [hu](../../../../hu/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇧🇬 [bg](../../../../bg/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇸🇰 [sk](../../../../sk/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇮🇱 [he](../../../../he/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇵🇭 [phi](../../../../phi/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇨🇿 [cs](../../../../cs/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md) · 🇹🇷 [tr](../../../../tr/skills_omni/create-adr/examples/example-002-supersede-session-storage-decision.md)

---


```markdown
# ADR-014: Move Session Storage to Redis

- Date: 2026-03-27
- Status: Accepted
- Deciders: Application platform team
- Tags: sessions, caching, performance

## Context
ADR-006 standardized on database-backed sessions when traffic was lower and we wanted to minimize operational components. Since then, session read volume has increased and session expiry handling has become a recurring source of application-side complexity.

## Decision Drivers
- Lower session read latency
- Native TTL support
- Reduced database load on the primary transactional store

## Considered Options
- Keep sessions in PostgreSQL
- Move sessions to Redis
- Use stateless signed sessions only

## Decision Outcome
Chosen option: **Move sessions to Redis**, because built-in key expiry and lower-latency reads fit the current access pattern better than database-backed sessions, while preserving centralized session invalidation.

## Consequences
### Positive
- Simplifies expiry behavior with native TTLs
- Reduces load on the primary application database
- Improves session read performance

### Negative
- Introduces another operational dependency
- Requires Redis availability planning and monitoring
- Adds migration and rollout complexity during cutover

## Links
- Supersedes: ADR-006: Store Sessions in PostgreSQL
- Related issue: PLAT-882
- Related PR: #1842
```

Key behavior shown here:
- a new ADR replaces the old one
- the old decision is not rewritten
- trade-offs of the new choice remain visible
```
