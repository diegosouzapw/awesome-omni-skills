# AWS Routing Notes (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/agents/aws-routing-notes.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/agents/aws-routing-notes.md)

---


Use `aws-advisor` as the front door when the task is primarily about AWS architecture, service selection, migration planning, security posture on AWS, or AWS control-plane troubleshooting.

## Hand off when

- Terraform becomes the main execution surface: hand off to `@terraform`
- Kubernetes manifests, cluster behavior, or EKS internals dominate: hand off to `@kubernetes`
- Container packaging or image/runtime issues dominate: hand off to `@docker`
- The task becomes a broader security assessment beyond AWS configuration choices: hand off to `@security-review`
- The task becomes an active outage or incident-management workflow: hand off to `@incident-response`

## Handoff rule

When handing off, preserve:

- AWS services in scope
- regions involved
- known errors and evidence
- assumptions already validated
- documentation families already consulted
