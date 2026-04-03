# Example: False Positive — Same Name, Different Context (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇪🇸 [es](../../../../es/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇩🇪 [de](../../../../de/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇮🇹 [it](../../../../it/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇮🇳 [in](../../../../in/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇹🇭 [th](../../../../th/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇮🇩 [id](../../../../id/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇳🇴 [no](../../../../no/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇩🇰 [da](../../../../da/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇮🇱 [he](../../../../he/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-common-domain-detection/examples/false-positive-same-name-different-context.md)

---


Candidate components:

- `services/customer/validation`
- `services/fraud/validation`

Why they looked similar:

- Same leaf name: `validation`
- Both reject invalid requests

Why they should remain separate:

- Customer validation checks profile completeness and policy acceptance.
- Fraud validation evaluates suspicious activity rules and investigation thresholds.
- Inputs, invariants, and ownership differ.
- A shared abstraction would hide materially different business meaning.

Correct recommendation:

- Outcome: Keep separate
- Rationale: same name, different bounded context
- Follow-up: if needed, extract only tiny infrastructure helpers, not business rules
