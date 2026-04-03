# AWS Architecture Intake (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/references/aws-architecture-intake.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/references/aws-architecture-intake.md)

---


Use this worksheet before making architecture recommendations.

## Workload basics

- What problem does the workload solve?
- Is it internal, external, batch, real-time, or event-driven?
- New build, migration, or modernization?

## Scale and performance

- Expected traffic profile: steady, bursty, seasonal
- Peak requests per second or job throughput
- Latency expectations
- Statefulness and session requirements

## Availability and recovery

- Availability target or SLA/SLO
- Multi-AZ required?
- Multi-region required?
- RTO target
- RPO target

## Data and compliance

- Data types stored or processed
- Sensitive data classes
- Encryption expectations at rest and in transit
- Compliance or residency constraints

## Security and access

- Who are the users or calling systems?
- Human access needed?
- Cross-account access needed?
- Internet exposure allowed?
- Private networking requirements?

## Operations

- Preferred observability stack
- On-call maturity
- Change frequency
- Rollback expectations

## Delivery model

- Preferred language/runtime
- Existing IaC tool: CloudFormation, CDK, SAM, Terraform, other
- Existing CI/CD platform
- Team familiarity with AWS services under consideration

## Financial constraints

- Budget sensitivity
- Preference for managed services vs lower-level control
- Cost visibility requirements

## Output reminder

The final recommendation should list:

- assumptions
- major constraints
- recommended architecture
- alternatives considered
- key risks
- next validation steps
