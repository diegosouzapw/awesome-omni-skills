# IAM Access Denied Investigation Example (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/examples/iam-access-denied-investigation.md)

---


## Input

```text
User arn:aws:sts::123456789012:assumed-role/DeployRole/ci is not authorized to perform iam:PassRole on resource arn:aws:iam::123456789012:role/AppTaskRole
```

## Investigation shape

- confirm the exact principal in use
- confirm the denied action and target resource
- check whether the role policy allows `iam:PassRole` on the specific role
- check whether conditions restrict which services or roles may be passed
- check whether permissions boundaries, session policies, or SCPs apply
- confirm whether the target service also requires trust policy alignment

## Example output shape

- likely cause: missing or constrained `iam:PassRole` permission
- other policy layers to verify: permissions boundary, SCP, session policy
- safe next step: review effective permissions for the assumed role before broadening access
