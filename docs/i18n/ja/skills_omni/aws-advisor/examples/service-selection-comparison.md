# Service Selection Comparison Example (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/examples/service-selection-comparison.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/examples/service-selection-comparison.md)

---


## Scenario

A small team needs an event-driven platform with bursty traffic, minimal ops overhead, and some long-running background jobs.

## Comparison shape

| Option | Strengths | Weaknesses | Best fit |
| --- | --- | --- | --- |
| Lambda | low ops, strong event integration, elastic for bursty traffic | execution model constraints, long-running jobs may not fit cleanly | short-lived event handlers |
| ECS on Fargate | container flexibility with lower ops than cluster management | always more platform surface than Lambda | mixed workloads needing containers |
| EKS | maximum Kubernetes flexibility and ecosystem alignment | highest operational complexity | teams already standardized on Kubernetes |

## Example recommendation

Start with a Lambda-first design for short-lived event handling and use ECS on Fargate for long-running workers if those jobs do not fit Lambda constraints. Avoid EKS unless Kubernetes is already a strategic platform requirement.
