# CloudFormation Failure Triage Example (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/examples/cloudformation-failure-triage.md)

---


## Input

```text
Our production stack entered UPDATE_ROLLBACK_IN_PROGRESS after changing an RDS resource.
```

## Triage steps

1. inspect stack events and identify the first failed logical resource
2. capture the exact service-side error for that resource
3. determine whether the change attempted an immutable property update or replacement
4. check for dependency impacts on networking, parameter groups, snapshots, or deletion protection
5. evaluate whether rollback completed cleanly or left follow-up work

## Example output shape

- failing resource and service error summary
- most likely root-cause categories
- evidence still needed
- safest next action before retrying
