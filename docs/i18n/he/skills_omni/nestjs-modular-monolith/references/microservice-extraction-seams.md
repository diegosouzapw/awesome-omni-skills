# Microservice Extraction Seams (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇪🇸 [es](../../../../es/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇩🇪 [de](../../../../de/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇮🇹 [it](../../../../it/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇮🇳 [in](../../../../in/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇹🇭 [th](../../../../th/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇮🇩 [id](../../../../id/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇳🇴 [no](../../../../no/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇩🇰 [da](../../../../da/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇮🇱 [he](../../../../he/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nestjs-modular-monolith/references/microservice-extraction-seams.md)

---


Design for future extraction without paying distributed-system costs too early.

## What to preserve now

- strong module ownership
- stable public contracts
- narrow exported interfaces
- explicit event names and payloads
- isolated persistence ownership
- minimal shared kernel

## What not to do prematurely

- add network hops only to simulate service boundaries
- introduce brokers without a requirement
- split deployment units before ownership and contracts are stable
- copy microservice patterns into every module by default

## Good extraction signals

Extraction may be justified when a module has:

- independently changing lifecycle or team ownership
- scaling or isolation needs that differ materially from the rest of the app
- external integration boundaries already centered around it
- operational needs that the monolith cannot meet cleanly

## Preparation checklist

- Is the module's public API explicit?
- Is persistence ownership clear?
- Are cross-module dependencies narrow?
- Are events and contracts documented?
- Can the module be tested through its public behavior rather than internal imports?
