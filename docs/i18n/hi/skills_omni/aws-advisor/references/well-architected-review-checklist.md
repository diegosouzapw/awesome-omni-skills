# Well-Architected Review Checklist (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/references/well-architected-review-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/references/well-architected-review-checklist.md)

---


Use this as a lightweight review aid aligned to AWS Well-Architected pillars.

## Operational Excellence

- Is the workload observable through logs, metrics, alarms, and dashboards?
- Is deployment automated and repeatable?
- Are rollback and incident procedures defined?
- Are operational runbooks or playbooks identified?

## सुरक्षा

- Is IAM based on least privilege?
- Are human and machine identities separated appropriately?
- Is network exposure minimized?
- Is encryption at rest and in transit defined?
- Are secrets handled outside code and templates?
- Are logging and monitoring sufficient for security investigations?

## Reliability

- Are there single points of failure?
- Is multi-AZ resilience appropriate for the requirement?
- Are backup and restore expectations clear?
- Are failure detection and recovery paths defined?
- Are dependencies and quotas understood?

## Performance Efficiency

- Is the service choice aligned to workload shape?
- Can the design scale predictably?
- Are caching, concurrency, and storage access patterns considered?
- Does the design fit latency expectations?

## Cost Optimization

- Are major cost drivers identified?
- Is the design overprovisioned for expected load?
- Are data transfer and storage growth considered?
- Could a more managed or more elastic service reduce waste?

## Sustainability

- Can managed services reduce unnecessary always-on infrastructure?
- Is the design avoiding needless duplication or idle capacity?
- Are lifecycle and scaling choices aligned to actual demand?

## Review output

Summarize findings in three groups:

- strengths
- risks
- recommended next actions
