# Example Deployment Runbook

This is a worked example for a Terraform-managed service update with a Kubernetes application rollout.

## Scenario

- Provider: AWS
- Platform: EKS
- Change: new node group plus application deployment update
- Risks: capacity disruption, IAM mistakes, unintended Terraform drift, rollback confusion

## Preconditions

- approved change window exists
- recent `terraform plan` reviewed
- cluster health baseline captured
- rollback owner and approver named
- backup/restore posture for dependent stateful services confirmed

## Pre-deploy checks

1. Validate workspace shape
   ```bash
   python3 scripts/validate-environment.py .
   ```
2. Validate Terraform syntax and config
   ```bash
   terraform fmt -check -recursive
   terraform validate
   terraform plan -out=tfplan
   ```
3. Confirm cluster baseline
   ```bash
   kubectl get nodes
   kubectl get pods -A
   ```
4. Confirm disruption controls
   - pod disruption budgets reviewed
   - autoscaling limits reviewed
   - maintenance freeze exceptions approved if required

## Deployment sequence

1. Apply low-risk infrastructure prerequisites only if separated from workload rollout.
2. Introduce new node group or capacity pool.
3. Confirm new nodes join and become schedulable.
4. Roll one workload or canary environment first.
5. Watch health, latency, error rate, and scheduling behavior.
6. Continue staged rollout only if success criteria remain true for the hold period.

## Hold points

Pause and reassess if any of the following occur:
- pod scheduling failures
- elevated error rate or latency
- Terraform plan differs unexpectedly from approved plan
- IAM or network policy denies expected service traffic
- node churn exceeds expected range

## Rollback triggers

Rollback if one or more apply:
- customer-visible error budget burn exceeds threshold
- critical workload cannot stabilize within hold period
- new capacity causes eviction or placement instability
- unauthorized or unexpected infrastructure change appears

## Rollback sequence

1. Stop further rollout.
2. Route traffic away from changed workload version if applicable.
3. Revert Kubernetes deployment to last known good release.
4. Drain or detach new node group only after workload stability is restored.
5. If Terraform-managed infra must revert, apply the reviewed rollback change rather than improvising direct console edits unless incident severity requires emergency containment.
6. Record any emergency manual action for reconciliation.

## Success criteria

- no increase in critical error rate
- latency within defined tolerance
- cluster capacity stable
- no unresolved Terraform drift introduced
- operational owner confirms service health after hold period

## Post-deploy review

Capture:
- what changed
- what was observed
- any drift from plan
- rollback readiness gaps found
- follow-up actions for future automation or architecture adjustment
