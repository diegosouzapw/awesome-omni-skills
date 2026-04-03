# Observability and Errors (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇪🇸 [es](../../../../es/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇩🇪 [de](../../../../de/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇮🇹 [it](../../../../it/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇮🇳 [in](../../../../in/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇹🇭 [th](../../../../th/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇮🇩 [id](../../../../id/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇳🇴 [no](../../../../no/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇩🇰 [da](../../../../da/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇮🇱 [he](../../../../he/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nestjs-modular-monolith/references/observability-and-errors.md)

---


Operational maturity matters even in a monolith.

## Logging

Prefer structured logs with fields such as:

- request or correlation ID
- module or bounded context name
- actor or tenant where appropriate
- operation or use-case name
- result status

Make module ownership visible in logs so architecture issues are easier to diagnose.

## Error handling

Map errors at the boundary:

- domain errors become meaningful client-facing errors
- infrastructure failures become safe generic responses
- unexpected failures are logged with context but not exposed in detail

Keep the error contract consistent across modules.

## Shutdown and lifecycle

If the application owns DB connections, queues, consumers, or workers:

- enable shutdown hooks
- stop accepting new work during shutdown
- close connections cleanly
- document module-specific shutdown behavior

## Readiness and health

Do not reduce health to a single shallow ping.

Review:

- database reachability
- background worker state if relevant
- required downstream dependency readiness
- module-specific critical dependencies

## Review checklist

- Are logs structured and correlated?
- Are domain errors mapped consistently?
- Are stack traces hidden from clients?
- Are shutdown hooks enabled where needed?
- Are readiness assumptions documented?
