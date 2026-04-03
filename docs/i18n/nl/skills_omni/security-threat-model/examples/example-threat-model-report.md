# Example Threat Model Report (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇪🇸 [es](../../../../es/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇩🇪 [de](../../../../de/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇮🇹 [it](../../../../it/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇮🇳 [in](../../../../in/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇹🇭 [th](../../../../th/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇮🇩 [id](../../../../id/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇳🇴 [no](../../../../no/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇩🇰 [da](../../../../da/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇮🇱 [he](../../../../he/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-threat-model/examples/example-threat-model-report.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-threat-model/examples/example-threat-model-report.md)

---


## Scope

Repository path: `services/api`

In scope:
- HTTP API service
- container build
- deployment manifests
- GitHub Actions release workflow

Out of scope:
- unrelated frontend packages
- local demo scripts

## System Summary

The service exposes authenticated and unauthenticated HTTP routes, persists data in PostgreSQL, builds a container image, and deploys through a GitHub Actions workflow.

## Repo Evidence

- `services/api/main.py` - application entrypoint
- `services/api/routes/` - API handlers
- `services/api/requirements.txt` - Python dependencies
- `Dockerfile` - container build
- `deploy/k8s/api-deployment.yaml` - Kubernetes deployment
- `.github/workflows/release.yml` - release automation

## Trust Boundaries

1. Internet client -> API service
2. API service -> PostgreSQL
3. GitHub Actions workflow -> container registry and deployment target

## Assets

- customer account data
- database credentials
- container images
- deployment credentials
- audit logs

## Entry Points

- HTTP routes under `services/api/routes/`
- CI workflow trigger in `.github/workflows/release.yml`
- container build context from `Dockerfile`

## Attacker Capabilities and Assumptions

Assumed attacker positions:
- unauthenticated internet user
- authenticated low-privilege user
- attacker able to influence CI through pull request inputs

Open assumption:
- registry publish permissions are not documented outside workflow YAML

## Threats and Abuse Paths

### Threat 1: Unvalidated upload path reaches privileged processing
- Attacker goal: execute malicious payload processing or corrupt integrity-critical state
- Preconditions: attacker can reach upload endpoint
- Entry point: upload route in `services/api/routes/uploads.py`
- Trust boundary crossed: internet -> API -> background processor
- Impacted asset: service integrity and stored data
- Existing controls with evidence: file size limit in `services/api/routes/uploads.py`; no schema validation evidence found
- Likelihood: Medium
- Impact: High
- Priority: High
- Mitigation: enforce strict content-type and schema validation at the upload boundary; isolate processing worker privileges

### Threat 2: CI workflow can publish artifacts with broad token scope
- Attacker goal: tamper with release artifacts
- Preconditions: attacker can influence workflow inputs or compromised maintainer token exists
- Entry point: `.github/workflows/release.yml`
- Trust boundary crossed: source repo automation -> artifact registry
- Impacted asset: build integrity and downstream consumers
- Existing controls with evidence: release job exists; least-privilege token scope not evident in YAML
- Likelihood: Medium
- Impact: High
- Priority: High
- Mitigation: minimize workflow permissions, pin third-party actions, require protected release conditions, and document provenance controls

## Mitigations and Priorities

1. Harden upload validation and processing isolation
2. Reduce CI workflow permissions and pin external actions
3. Document and verify artifact provenance controls

## Open Questions

- Is the upload feature internet-facing in production?
- Are release workflows limited to protected branches and trusted maintainers?
- Is the service single-tenant or multi-tenant?
