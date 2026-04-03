# Service-Level Coupling Analysis Example (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇪🇸 [es](../../../../es/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇩🇪 [de](../../../../de/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇮🇹 [it](../../../../it/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇮🇳 [in](../../../../in/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇹🇭 [th](../../../../th/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇮🇩 [id](../../../../id/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇳🇴 [no](../../../../no/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇩🇰 [da](../../../../da/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇮🇱 [he](../../../../he/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coupling-analysis/examples/service-level-analysis-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coupling-analysis/examples/service-level-analysis-example.md)

---


## Scenario

The `orders` service depends on `customer-profile` and `pricing`. The organization wants to know whether these service integrations are healthy.

## Scope

- abstraction level: service/system
- target: orders-related service dependencies

## Evidence collected

- OpenAPI definitions for all three services
- deployment and release ownership
- recent git and release history
- incident notes showing coordinated deploys

## Sample finding

### Finding: Orders consumes internal customer-profile model fields

- **Elements involved:** `orders -> customer-profile`
- **Coupling type:** Model coupling
- **Strength:** Medium
- **Distance:** High
- **Volatility:** High
- **Effective risk:** High
- **Confidence:** High

**Evidence**
- Contract: API response exposes many internal profile fields not needed by orders
- Organizational: different teams own the services
- Deployment: services release independently
- History: customer field changes have forced multiple downstream updates

**Why it matters**
A remote, cross-team dependency on internal model details increases coordination cost and downstream break risk.

**Recommended action**
Replace the shared internal model with a consumer-oriented versioned contract exposing only the fields orders needs.

## Positive pattern

`orders -> pricing` uses a versioned quote API with a narrow request and response schema. Even though the services are distant, the contract quality lowers strength and improves maintainability.
