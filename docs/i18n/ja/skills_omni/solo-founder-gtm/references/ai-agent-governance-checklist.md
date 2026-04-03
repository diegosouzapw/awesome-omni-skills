# AI Agent Governance Checklist (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/solo-founder-gtm/references/ai-agent-governance-checklist.md)

---


Use this checklist before allowing AI-assisted GTM workflows to run repeatedly.

## 1. Scope

- [ ] The task is clearly defined.
- [ ] Success and failure conditions are written down.
- [ ] The workflow has a human owner.

## 2. Data Handling

- [ ] Prompts avoid unnecessary personal data.
- [ ] Sensitive support, payment, or security data is excluded.
- [ ] Customer details are redacted when exact identity is unnecessary.

## 3. Approval Gates

- [ ] Outbound sends require founder review unless proven low-risk and pre-approved.
- [ ] Pricing, refunds, credits, and policy exceptions always require founder approval.
- [ ] Privacy, legal, or security representations always require human review.

## 4. Prompt and Workflow Quality

- [ ] Prompt includes role, task, constraints, and output format.
- [ ] Prompt is versioned for recurring workflows.
- [ ] At least one positive example and one failure mode are documented.

## 5. Evaluation

- [ ] Small-sample test completed before broad rollout.
- [ ] Outputs are scored for accuracy, tone, compliance risk, and usefulness.
- [ ] Failure cases are logged and reviewed.

## 6. Operations

- [ ] There is a rollback path.
- [ ] Logs or records are retained for review.
- [ ] A founder can pause the workflow quickly.

## 7. Safe Default by Task Type

| Task type | Default rule |
| --- | --- |
| internal summaries and categorization | can automate with spot checks |
| customer-facing drafts | automate drafting, require approval before send |
| high-risk customer actions | keep fully human-approved |
