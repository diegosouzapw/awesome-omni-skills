# Repo Evidence Checklist (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-threat-model/references/repo-evidence-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-threat-model/references/repo-evidence-checklist.md)

---


Use this checklist before writing the final threat model.

## Core Application Evidence

- [ ] Main entrypoints identified
- [ ] Routing, handlers, or command surface identified
- [ ] Data stores or persistence layers identified
- [ ] External services or APIs identified
- [ ] Auth or session handling identified

## Dependency and Supply Chain Evidence

- [ ] Dependency manifests found
- [ ] Lockfiles found
- [ ] Private registries or package feeds noted
- [ ] Build scripts or release scripts reviewed
- [ ] Signing, provenance, or attestation evidence checked if present

## CI/CD and Automation Evidence

- [ ] CI workflow files reviewed
- [ ] Trigger types noted
- [ ] Token or permissions configuration noted
- [ ] Third-party actions or automation dependencies noted
- [ ] Artifact publishing or release automation reviewed

## Deployment Evidence

- [ ] Dockerfiles or container build definitions reviewed
- [ ] Kubernetes or orchestration manifests reviewed if present
- [ ] Terraform, Helm, or deployment scripts reviewed if present
- [ ] Environment configuration and secret references noted
- [ ] Network exposure hints identified

## Security-Relevant Config Evidence

- [ ] RBAC, IAM, or policy files reviewed
- [ ] CORS, CSP, or gateway policy reviewed if relevant
- [ ] Logging or audit configuration reviewed if relevant
- [ ] Secret-loading patterns reviewed
- [ ] Unsafe defaults or debug settings noted

## Scope Safety Checks

- [ ] Tests and examples separated from runtime paths
- [ ] Dev-only tooling separated from production paths
- [ ] Architecture claims backed by file evidence
- [ ] Unknowns moved to assumptions instead of guessed
