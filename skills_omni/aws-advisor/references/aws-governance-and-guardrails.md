# AWS Governance and Guardrails

Use this reference when the request involves landing zones, multi-account strategy, SCPs, or ownership controls.

## Default governance questions

- Which workloads should be isolated by account?
- Which teams need delegated administration?
- Which controls belong at org level versus account level?
- What tagging model is mandatory?
- How will cross-account access be approved and audited?

## Recommended defaults

- separate production from non-production by account when practical
- separate shared platform services from application workloads when blast radius matters
- use IAM roles and temporary credentials for cross-account access
- apply SCPs carefully and test for unintended denies
- require ownership, environment, and cost-allocation tags
- keep logging and security baselines consistent across accounts

## SCP caution

When troubleshooting or reviewing permissions, remember that SCPs do not grant access. They only limit the maximum available permissions. An apparently correct IAM policy can still fail due to an SCP deny.

## Advisory output expectations

Return:

- account structure recommendation
- access model recommendation
- tagging baseline
- logging and guardrail baseline
- risks of the current model
- migration or rollout notes if changing governance structure
