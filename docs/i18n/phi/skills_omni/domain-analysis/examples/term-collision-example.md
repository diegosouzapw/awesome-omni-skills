# Example: Term Collision (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-analysis/examples/term-collision-example.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-analysis/examples/term-collision-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-analysis/examples/term-collision-example.md)

---


## Term: Customer

### In Sales Context
- Meaning: prospective or paying buyer in a pipeline
- Evidence: `sales/opportunity_service.py`, `sales/customer_stage.py`
- Typical lifecycle: lead -> qualified -> won/lost

### In Support Context
- Meaning: person or organization receiving support service
- Evidence: `support/case_handler.py`, `support/customer_sla.py`
- Typical lifecycle: active -> escalated -> resolved

## Why it matters

These meanings overlap socially but differ operationally. Forcing one shared `Customer` model would likely mix pipeline terminology with service-case semantics.

## Boundary implication

Sales and Support may need separate bounded contexts with explicit translation or shared reference identifiers, rather than one global `Customer` model.
