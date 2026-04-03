# Example: Distributed System Context Map (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-analysis/examples/distributed-system-context-map-example.md)

---


## Scenario

A repository set contains separate deployables named `orders`, `payments`, `customer-profile`, and `support-tools`.

## Important reminder

Existing deployables do not automatically prove correct bounded contexts. The analysis still checks language, invariants, and workflow seams.

## Findings

### Orders Context
- Ubiquitous language: cart, checkout, order, fulfillment, cancellation
- Likely subdomain classification: Core
- Confidence: High

### Payments Context
- Ubiquitous language: authorization, capture, settlement, refund
- Likely subdomain classification: Supporting
- Confidence: High

### Customer Profile Context
- Ubiquitous language: profile, preferences, contact details, consent
- Likely subdomain classification: Supporting
- Confidence: Medium

### Support Context
- Ubiquitous language: ticket, case, resolution, escalation
- Likely subdomain classification: Supporting
- Confidence: Medium

## Context Map

| From | To | Relationship | Integration | Rationale | Confidence |
| --- | --- | --- | --- | --- | --- |
| Orders | Payments | Customer/Supplier | payment API | Orders drives payment needs and depends on payment outcomes | High |
| Support | Orders | Anti-Corruption Layer | support-facing adapter | Support should view orders through support language, not internal fulfillment terms | Medium |
| Orders | Customer Profile | Published Language | customer reference events | Orders needs stable customer reference data without absorbing profile semantics | Medium |

## Service-Boundary Caveat

Because these are already separate deployables, the output does **not** conclude that the boundaries are correct. It only states that current service boundaries appear plausible, with one caution: Support should avoid directly embedding the Orders model and should likely use an anti-corruption layer.
