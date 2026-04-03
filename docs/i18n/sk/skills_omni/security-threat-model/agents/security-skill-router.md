# Security Skill Router (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-threat-model/agents/security-skill-router.md) · 🇪🇸 [es](../../../../es/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇩🇪 [de](../../../../de/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇮🇹 [it](../../../../it/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇮🇳 [in](../../../../in/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇹🇭 [th](../../../../th/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇮🇩 [id](../../../../id/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇳🇴 [no](../../../../no/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇩🇰 [da](../../../../da/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇮🇱 [he](../../../../he/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-threat-model/agents/security-skill-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-threat-model/agents/security-skill-router.md)

---


Use this note when the task moves beyond threat modeling.

## Stay in `security-threat-model` when

- the task is primarily about assets, boundaries, attacker goals, abuse paths, and mitigation priorities
- the output should be a concise Markdown threat model
- the repo evidence is sufficient to reason about architecture and attack surface

## Hand off when

### Secure code review becomes primary
Use a code-review-oriented security skill when the user needs implementation defect validation, taint tracing, or file-by-file bug finding.

### Broad hardening guidance becomes primary
Use `security-best-practices` when the user wants a general hardening plan rather than a scoped threat model.

### Supply-chain validation becomes primary
Use a dependency or CI/CD security workflow when the main question is package risk, provenance, or automation hardening.

### Secrets handling becomes primary
Use a secrets-focused workflow when the user needs secret discovery, rotation planning, or credential hygiene remediation.

### Incident analysis becomes primary
Use an incident-response workflow when there are signs of active compromise, suspicious behavior, or forensic needs.

## Handoff rule

When handing off, pass forward:

- scoped paths
- evidence map
- trust boundaries already identified
- assumptions and open questions
- top threats that need verification or remediation
