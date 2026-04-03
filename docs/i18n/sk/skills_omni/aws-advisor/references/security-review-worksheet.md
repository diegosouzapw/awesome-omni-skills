# AWS Security Review Worksheet (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/references/security-review-worksheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/references/security-review-worksheet.md)

---


Use this worksheet to structure AWS security reviews.

## Identity and access

- Principal types in scope: human, workload, cross-account, federated
- Least privilege applied?
- MFA and federation expectations for human access?
- Role assumption boundaries clear?
- Permissions boundaries or SCPs relevant?
- High-risk wildcard permissions present?

## Network exposure

- Public endpoints in scope?
- Private subnets required?
- Security group and NACL posture understood?
- Ingress and egress paths reviewed?
- VPC endpoints or private connectivity needed?

## Data protection

- Encryption at rest defined?
- Encryption in transit defined?
- KMS key ownership and access model understood?
- Data classification documented?
- Backup and retention expectations documented?

## Secrets and configuration

- Secrets stored outside code and templates?
- Rotation requirements identified?
- Sensitive parameters protected in pipelines and logs?

## Logging and monitoring

- CloudTrail or equivalent audit visibility considered?
- CloudWatch logs and alarms identified?
- Security-relevant event detection defined?
- Retention and access controls appropriate?

## Governance and operations

- Separation of duties needed?
- Change approval or compliance evidence required?
- Incident response hooks identified?
- Shared Responsibility Model boundaries stated?

## Output format

For each finding include:

- issue
- impact
- likely cause
- recommended remediation
- validation step
