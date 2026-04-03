# Brownfield Mapping Example (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/examples/brownfield-mapping-example.md)

---


## Request

"Before planning the notifications feature, map this existing repository so we understand where to add it safely."

## Expected outputs

Create these documents under `.specs/codebase/`:

- `STACK.md`
- `ARCHITECTURE.md`
- `CONVENTIONS.md`
- `STRUCTURE.md`
- `TESTING.md`
- `INTEGRATIONS.md`
- `CONCERNS.md`

## Example findings

- `STACK.md`: React frontend, Node API, PostgreSQL
- `STRUCTURE.md`: notifications code belongs under `services/notifications/`
- `TESTING.md`: integration tests run with seeded database fixtures
- `INTEGRATIONS.md`: outbound email provider and webhook callbacks
- `CONCERNS.md`: existing retry logic is fragile and should be treated as a risk area

## How this feeds planning

After mapping:

1. decide whether the feature is medium, large, or complex
2. reuse existing conventions instead of inventing new patterns
3. build the feature spec with known integration and testing constraints
