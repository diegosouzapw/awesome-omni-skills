# Example: ADR-Linked Design (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/examples/adr-linked-design-example.md)

---


Use this pattern when a TDD contains several major design choices.

## In the TDD

### Decisions and Alternatives

- ADR-001: Choose event-driven sync over synchronous API chaining
- ADR-002: Use managed secret store for partner credentials
- ADR-003: Keep dual-write period for 30 days during migration

## ADR linkage notes

Each ADR should capture:

- context
- decision
- status
- consequences
- alternatives considered

This keeps the TDD readable while allowing major decisions to be reviewed and updated independently.
