# Handoff Criteria (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/codenavi/references/handoff-criteria.md) · 🇪🇸 [es](../../../../es/skills_omni/codenavi/references/handoff-criteria.md) · 🇫🇷 [fr](../../../../fr/skills_omni/codenavi/references/handoff-criteria.md) · 🇩🇪 [de](../../../../de/skills_omni/codenavi/references/handoff-criteria.md) · 🇮🇹 [it](../../../../it/skills_omni/codenavi/references/handoff-criteria.md) · 🇷🇺 [ru](../../../../ru/skills_omni/codenavi/references/handoff-criteria.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/codenavi/references/handoff-criteria.md) · 🇯🇵 [ja](../../../../ja/skills_omni/codenavi/references/handoff-criteria.md) · 🇰🇷 [ko](../../../../ko/skills_omni/codenavi/references/handoff-criteria.md) · 🇸🇦 [ar](../../../../ar/skills_omni/codenavi/references/handoff-criteria.md) · 🇮🇳 [hi](../../../../hi/skills_omni/codenavi/references/handoff-criteria.md) · 🇮🇳 [in](../../../../in/skills_omni/codenavi/references/handoff-criteria.md) · 🇹🇭 [th](../../../../th/skills_omni/codenavi/references/handoff-criteria.md) · 🇻🇳 [vi](../../../../vi/skills_omni/codenavi/references/handoff-criteria.md) · 🇮🇩 [id](../../../../id/skills_omni/codenavi/references/handoff-criteria.md) · 🇲🇾 [ms](../../../../ms/skills_omni/codenavi/references/handoff-criteria.md) · 🇳🇱 [nl](../../../../nl/skills_omni/codenavi/references/handoff-criteria.md) · 🇵🇱 [pl](../../../../pl/skills_omni/codenavi/references/handoff-criteria.md) · 🇸🇪 [sv](../../../../sv/skills_omni/codenavi/references/handoff-criteria.md) · 🇳🇴 [no](../../../../no/skills_omni/codenavi/references/handoff-criteria.md) · 🇩🇰 [da](../../../../da/skills_omni/codenavi/references/handoff-criteria.md) · 🇫🇮 [fi](../../../../fi/skills_omni/codenavi/references/handoff-criteria.md) · 🇵🇹 [pt](../../../../pt/skills_omni/codenavi/references/handoff-criteria.md) · 🇷🇴 [ro](../../../../ro/skills_omni/codenavi/references/handoff-criteria.md) · 🇭🇺 [hu](../../../../hu/skills_omni/codenavi/references/handoff-criteria.md) · 🇧🇬 [bg](../../../../bg/skills_omni/codenavi/references/handoff-criteria.md) · 🇸🇰 [sk](../../../../sk/skills_omni/codenavi/references/handoff-criteria.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/codenavi/references/handoff-criteria.md) · 🇮🇱 [he](../../../../he/skills_omni/codenavi/references/handoff-criteria.md) · 🇵🇭 [phi](../../../../phi/skills_omni/codenavi/references/handoff-criteria.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/codenavi/references/handoff-criteria.md) · 🇨🇿 [cs](../../../../cs/skills_omni/codenavi/references/handoff-criteria.md) · 🇹🇷 [tr](../../../../tr/skills_omni/codenavi/references/handoff-criteria.md)

---


CodeNavi should continue only while repository navigation and scoped implementation are the main job.

## Continue with CodeNavi when

- the task is still primarily about understanding existing code
- the likely change is narrow and local
- verification can be tied to code, tests, docs, or a clear manual path
- notebooking the discovery adds long-term value

## Hand off when recon shows the real task is

### Infrastructure or platform work

Examples:
- Terraform or cloud resource changes
- Kubernetes runtime behavior
- deployment topology or cluster operations

### Security specialization

Examples:
- auth design review
- dependency/container/IaC risk review
- secrets handling or threat-focused analysis

### Testing specialization

Examples:
- the main blocker is fixture strategy
- integration test design is the real deliverable
- a regression harness is needed beyond the code change itself

### Architecture specialization

Examples:
- the requested change requires structural redesign
- there are multiple valid subsystem boundaries to evaluate
- tradeoff analysis is more important than immediate implementation

### Documentation specialization

Examples:
- the main output is durable docs, onboarding material, or reference content
- no code change is needed after recon

## Handoff packet

When handing off, include:

- mission summary
- key files and symbols
- what was verified
- what remains uncertain
- why another specialization is now a better fit
