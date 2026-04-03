# Anti-Corruption Layer Guidance (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇪🇸 [es](../../../../es/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇫🇷 [fr](../../../../fr/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇩🇪 [de](../../../../de/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇮🇹 [it](../../../../it/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇷🇺 [ru](../../../../ru/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇯🇵 [ja](../../../../ja/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇰🇷 [ko](../../../../ko/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇸🇦 [ar](../../../../ar/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇮🇳 [hi](../../../../hi/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇮🇳 [in](../../../../in/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇹🇭 [th](../../../../th/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇻🇳 [vi](../../../../vi/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇮🇩 [id](../../../../id/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇲🇾 [ms](../../../../ms/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇳🇱 [nl](../../../../nl/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇵🇱 [pl](../../../../pl/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇸🇪 [sv](../../../../sv/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇳🇴 [no](../../../../no/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇩🇰 [da](../../../../da/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇫🇮 [fi](../../../../fi/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇵🇹 [pt](../../../../pt/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇷🇴 [ro](../../../../ro/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇭🇺 [hu](../../../../hu/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇧🇬 [bg](../../../../bg/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇸🇰 [sk](../../../../sk/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇮🇱 [he](../../../../he/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇵🇭 [phi](../../../../phi/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇨🇿 [cs](../../../../cs/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md) · 🇹🇷 [tr](../../../../tr/skills_omni/legacy-migration-planner/references/anti-corruption-layer.md)

---


Use an anti-corruption layer when the new domain or service must coexist with a legacy model that should not leak into the target design.

## When to Use

Use this pattern when:

- legacy data structures or API shapes do not match the target model
- consumers depend on legacy semantics that cannot change immediately
- the team needs a translation boundary during coexistence
- a direct dependency on legacy code would contaminate the new design

## What It Does

An anti-corruption layer translates between legacy and target representations.

It may include:

- request/response mapping
- terminology mapping
- error translation
- state translation
- compatibility shims for auth, sessions, identifiers, or status codes

## Planning Questions

For each seam, answer:

- what legacy concepts must be translated?
- which side owns the canonical model during coexistence?
- how will errors and edge cases be mapped?
- where will translation logic live?
- how will translation behavior be tested?
- when can the layer be removed?

## Common Mistakes

- treating the anti-corruption layer as a permanent dumping ground
- translating only happy-path payloads and ignoring errors
- omitting auth/session behavior from compatibility planning
- assuming data models can diverge without explicit mapping rules

## Output Expectations

In the migration plan, record:

- why the layer is needed
- its location in the invocation path
- interfaces translated
- test strategy
- retirement criteria
