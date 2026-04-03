# Event Communication Patterns (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nestjs-modular-monolith/references/event-communication-patterns.md)

---


Use this guide to choose the right communication style.

## Decision guide

### 1. Direct call inside the same module

Use when:

- the workflow stays inside one bounded context
- consistency must be immediate
- extra indirection adds no value

### 2. Cross-module contract or application service boundary

Use when:

- another module needs a stable public capability
- the interaction is request/response in nature
- you want explicit coupling at the public API level

### 3. In-process events inside the monolith

Use when:

- one module completes a business action
- other modules may react independently
- loose coupling is useful
- eventual handling inside the same process is acceptable

Caveat:

In-process events are not durable messaging. They do not guarantee delivery across crashes or process restarts.

### 4. Durable messaging or outbox-based integration

Use only when:

- delivery guarantees matter
- an external system must consume events reliably
- retries, deduplication, and failure semantics are required

## Anti-patterns

Avoid these mistakes:

- replacing every method call with an event
- using ad hoc Node.js `EventEmitter` integration as architecture
- claiming reliable delivery from in-process event handlers
- allowing event schemas to drift without review

## Review questions

- Does this interaction need immediate consistency?
- Does it cross a bounded context?
- Is loose coupling actually useful here?
- What happens if the process crashes after the business transaction completes?
- Should this interaction stay local until a real durability requirement appears?
