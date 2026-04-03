# Example: Shared Library vs Shared Service (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇪🇸 [es](../../../../es/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇩🇪 [de](../../../../de/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇮🇹 [it](../../../../it/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇮🇳 [in](../../../../in/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇹🇭 [th](../../../../th/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇮🇩 [id](../../../../id/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇳🇴 [no](../../../../no/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇩🇰 [da](../../../../da/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇮🇱 [he](../../../../he/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-common-domain-detection/examples/library-vs-service-comparison.md)

---


Capability under review: auditing behavior used by billing, ticketing, and survey components.

## Shared library was favored when

- Audit record formatting was stable.
- Consumers ran in the same trusted environment.
- Teams wanted no additional network hop.
- Centralized runtime policy was not required.

## Shared service would be favored when

- Audit policy must be enforced centrally.
- Access control and retention rules must be managed in one place.
- Independent scaling or isolation is needed.
- Central observability and compliance controls justify the operational overhead.

## Decision

In this example, choose a shared service only if policy centralization is a requirement. Otherwise, a shared library is the lower-cost option.
