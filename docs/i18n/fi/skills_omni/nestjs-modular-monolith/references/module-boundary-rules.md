# Module Boundary Rules (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇪🇸 [es](../../../../es/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇩🇪 [de](../../../../de/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇮🇹 [it](../../../../it/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇮🇳 [in](../../../../in/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇹🇭 [th](../../../../th/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇮🇩 [id](../../../../id/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇳🇴 [no](../../../../no/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇩🇰 [da](../../../../da/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇮🇱 [he](../../../../he/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nestjs-modular-monolith/references/module-boundary-rules.md)

---


Use these rules to preserve modularity in a NestJS modular monolith.

## Core rules

1. Each bounded context owns one or more NestJS modules with a clear public API.
2. A module's internal providers stay private unless explicitly exported.
3. Other modules should depend on exported contracts, not internal classes.
4. Deep imports across bounded contexts are forbidden.
5. Shared libraries must stay small and generic.
6. Business data has a single owning module.

## Practical rules

### Public API

Expose only what another module truly needs:

- exported providers
- public DTOs or contracts where justified
- documented events
- controller or resolver endpoints

Do not export:

- internal repositories
- implementation details
- helper services created only for internal orchestration

### Shared kernel

Acceptable shared-kernel content:

- base value object helpers
- shared primitives
- generic infrastructure contracts
- cross-cutting utilities with no domain ownership

Do not place in shared kernel:

- context-specific entities
- business policies that belong to one module
- repositories for multiple business contexts

### Persistence ownership

A good rule is: other modules may consume a module's behavior, but should not reach into its storage model.

Target state:

- one module owns writes for its business data
- other modules interact through APIs, contracts, or events
- exceptions are documented explicitly during legacy transitions

## Review checklist

- Does each module have a clear owner and responsibility?
- Are `exports` arrays narrow and intentional?
- Are there deep imports across contexts?
- Is any entity class shared between unrelated domains?
- Are multiple modules writing the same data without an explicit ownership rule?
- Has the shared kernel grown beyond fundamentals?
