# Example: Shared Database Roadmap (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇪🇸 [es](../../../../es/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇫🇷 [fr](../../../../fr/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇩🇪 [de](../../../../de/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇮🇹 [it](../../../../it/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇷🇺 [ru](../../../../ru/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇯🇵 [ja](../../../../ja/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇰🇷 [ko](../../../../ko/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇸🇦 [ar](../../../../ar/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇮🇳 [hi](../../../../hi/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇮🇳 [in](../../../../in/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇹🇭 [th](../../../../th/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇻🇳 [vi](../../../../vi/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇮🇩 [id](../../../../id/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇲🇾 [ms](../../../../ms/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇳🇱 [nl](../../../../nl/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇵🇱 [pl](../../../../pl/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇸🇪 [sv](../../../../sv/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇳🇴 [no](../../../../no/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇩🇰 [da](../../../../da/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇫🇮 [fi](../../../../fi/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇵🇹 [pt](../../../../pt/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇷🇴 [ro](../../../../ro/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇭🇺 [hu](../../../../hu/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇧🇬 [bg](../../../../bg/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇸🇰 [sk](../../../../sk/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇮🇱 [he](../../../../he/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇵🇭 [phi](../../../../phi/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇨🇿 [cs](../../../../cs/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md) · 🇹🇷 [tr](../../../../tr/skills_omni/decomposition-planning-roadmap/examples/example-shared-db-roadmap.md)

---


## Context

A legacy business application has:

- one shared relational schema
- cross-domain reporting queries
- nightly jobs touching customer, billing, and fulfillment tables
- weak tracing and no clear rollback automation

## Planning conclusion

Do **not** start with a broad domain extraction.

## Candidate summary

| Candidate | Main blocker | Recommendation |
| --- | --- | --- |
| Billing | Shared writes and reporting joins | Deferred |
| Fulfillment | Batch jobs and cross-domain transactions | Deferred |
| Customer profile reads | Extract behavior first, keep data centralized temporarily | Later with conditions |
| Reporting API | Possible projection-based seam | First preparatory seam |

## Recommended roadmap

### Phase 1: Data ownership clarification
- Map current writers and readers per table
- Identify reporting consumers and break risk
- Define future system-of-record intentions

### Phase 2: Observability and seam creation
- Add tracing around reporting and profile flows
- Introduce abstraction layers for read access
- Isolate reporting projections from transactional schema use

### Phase 3: First low-risk extraction
- Extract reporting API or projection pipeline before core transactional domains
- Validate replication/projection lag tolerance

### Phase 4: Reassess larger candidates
- Re-score billing and fulfillment after data ownership is clearer

## Why this roadmap is safer

It acknowledges that the shared schema is the critical path. It avoids pretending that service extraction can succeed before data responsibilities and reporting impacts are understood.
