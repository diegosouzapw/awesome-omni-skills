# API Contracts and Validation (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇪🇸 [es](../../../../es/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇩🇪 [de](../../../../de/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇮🇹 [it](../../../../it/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇮🇳 [in](../../../../in/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇹🇭 [th](../../../../th/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇮🇩 [id](../../../../id/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇳🇴 [no](../../../../no/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇩🇰 [da](../../../../da/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇮🇱 [he](../../../../he/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nestjs-modular-monolith/references/api-contracts-and-validation.md)

---


Use this reference to standardize module boundaries at the API layer.

## Validation defaults

Recommended NestJS baseline:

- global `ValidationPipe`
- `whitelist: true`
- `forbidNonWhitelisted: true`
- `transform: true`

These settings reduce accidental input drift and make boundary behavior more predictable.

## DTO guidance

Use dedicated DTOs for:

- request validation
- response shaping
- module contract documentation

Avoid using ORM entities or domain entities directly as transport models.

## Serialization guidance

Prefer one of these patterns:

- explicit response DTO mapping
- serializer/interceptor patterns with intentional field exposure

Review responses for accidental leakage of:

- internal IDs
- secret material
- debug flags
- persistence-only fields
- internal notes or audit metadata

## API contracts

For REST APIs:

- document endpoints clearly
- keep request and response shapes stable
- version intentionally when breaking changes occur
- document error shapes consistently

For internal module contracts:

- define the contract in one stable public location
- keep the surface narrow
- avoid exposing implementation-specific types

## Error contracts

Where appropriate, standardize on a Problem Details style response shape for HTTP APIs:

- `type`
- `title`
- `status`
- `detail`
- `instance`

Do not leak stack traces or raw driver errors to callers.
