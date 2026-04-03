# Threat Model Workflow Reference (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-threat-model/references/threat-model-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-threat-model/references/threat-model-workflow.md)

---


Use this as the canonical execution sequence.

## 1. Scope

- Record the repo root or in-scope subpath.
- State exclusions explicitly.
- For monorepos, identify the owning service or package first.

## 2. Gather Evidence

Collect evidence from files that describe real behavior:

- application entrypoints
- framework routing or handlers
- dependency manifests and lockfiles
- API schemas or OpenAPI files
- Dockerfiles and container configs
- Kubernetes manifests, Helm charts, Terraform, or other IaC
- auth, RBAC, policy, and secrets configuration
- CI workflows, release scripts, package publishing config
- deployment descriptors and environment templates

## 3. Decompose the System

For each component, note:

- name
- purpose
- runtime type
- file paths
- inbound and outbound interactions

## 4. Identify Boundaries, Assets, and Entry Points

### Trust boundaries

Examples:

- internet to edge service
- user tenant to shared backend
- CI workflow to cloud deployment role
- application service to database
- package publisher to artifact registry

### Assets

Examples:

- credentials and tokens
- customer data
- signing keys
- build artifacts
- integrity-critical configuration
- audit logs
- availability-critical queues or workers

### Entry points

Examples:

- HTTP endpoints
- uploads and parsers
- CLI flags
- scheduled jobs
- webhooks
- workflow_dispatch and pull_request CI triggers
- deployment jobs and release pipelines

## 5. Calibrate Attackers

Describe realistic attacker positions, such as:

- unauthenticated remote user
- authenticated low-privilege user
- malicious tenant
- compromised contributor account
- attacker controlling a dependency source
- attacker influencing CI inputs

Also record important non-capabilities.

## 6. Enumerate Threats

Use this record shape:

- Title
- Attacker goal
- Preconditions
- Entry point
- Trust boundary crossed
- Impacted asset
- Existing controls with evidence
- Likelihood
- Impact
- Priority
- Mitigation

Use STRIDE only as a coverage check, not as a substitute for repo-specific reasoning.

## 7. Validate Assumptions

Ask targeted questions when these are unknown and materially affect ranking:

- internet exposure
- authn and authz model
- data sensitivity
- single-tenant vs multi-tenant
- deployment environment
- release ownership and signing

## 8. Prioritize Mitigations

Prefer this order:

1. eliminate the risky path
2. reduce attack surface or privileges
3. add preventative controls
4. add detective or response controls

## 9. Final Quality Check

- Every major component is backed by evidence.
- Every important boundary appears in the model.
- Runtime and CI/CD are considered separately.
- Assumptions are explicit.
- Mitigations are tied to concrete locations.
