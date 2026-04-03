# Example: Small Monolith Roadmap (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇪🇸 [es](../../../../es/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇫🇷 [fr](../../../../fr/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇩🇪 [de](../../../../de/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇮🇹 [it](../../../../it/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇷🇺 [ru](../../../../ru/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇯🇵 [ja](../../../../ja/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇰🇷 [ko](../../../../ko/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇸🇦 [ar](../../../../ar/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇮🇳 [hi](../../../../hi/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇮🇳 [in](../../../../in/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇹🇭 [th](../../../../th/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇻🇳 [vi](../../../../vi/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇮🇩 [id](../../../../id/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇲🇾 [ms](../../../../ms/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇳🇱 [nl](../../../../nl/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇵🇱 [pl](../../../../pl/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇸🇪 [sv](../../../../sv/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇳🇴 [no](../../../../no/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇩🇰 [da](../../../../da/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇫🇮 [fi](../../../../fi/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇵🇹 [pt](../../../../pt/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇷🇴 [ro](../../../../ro/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇭🇺 [hu](../../../../hu/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇧🇬 [bg](../../../../bg/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇸🇰 [sk](../../../../sk/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇮🇱 [he](../../../../he/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇵🇭 [phi](../../../../phi/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇨🇿 [cs](../../../../cs/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md) · 🇹🇷 [tr](../../../../tr/skills_omni/decomposition-planning-roadmap/examples/example-small-monolith-roadmap.md)

---


## Context

A modular order-management monolith already has:

- component inventory
- dependency map
- basic domain grouping
- stable teams for catalog, notifications, and orders

## Candidate summary

| Candidate | Notes | Recommendation |
| --- | --- | --- |
| Notifications | Low coupling, async-friendly, clear ownership | First |
| Catalog | Moderate value, some reporting ties | Later |
| Pricing | High change rate but tricky dependency rules | Later |
| Order orchestration | High value but high coupling and shared transaction risk | Deferred |

## Recommended extraction order

1. **Notifications first**
   - Independent enough
   - Small blast radius
   - Clear event/async boundary
2. **Catalog second**
   - After notification extraction validates delivery model
3. **Pricing third**
   - After contract and observability maturity improve
4. **Order orchestration deferred**
   - Too central and transaction-heavy for an early move

## Transition pattern

| Candidate | Pattern | Why |
| --- | --- | --- |
| Notifications | Strangler + event publication | Easy to route gradually and validate |
| Catalog | Branch by abstraction | Helps isolate reads before deeper separation |

## Example phase plan

### Phase 1: Preparation
- Confirm telemetry and alerts for notification flows
- Separate notification templates and dispatch logic
- Define ownership and rollback routing

### Phase 2: First extraction
- Move notification sending behind an internal interface
- Route a small traffic slice to the new service
- Compare errors and latency

### Phase 3: Stabilize
- Keep extraction paused until incident rate is acceptable
- Retire duplicate paths only after stability window passes

## Example metric targets

- 80% of notification changes deploy independently within 6 weeks
- No increase in paging severity after cutover
- Rollback executable within one release window
