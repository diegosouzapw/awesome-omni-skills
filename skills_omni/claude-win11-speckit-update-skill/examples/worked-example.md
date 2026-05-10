# Worked Example: Windows 11 update triage with provenance-preserving handoff

## Scenario

A user reports:

```text
My Windows 11 laptop keeps saying updates are available, but the latest cumulative update fails after reboot every time. I also do not see the new feature update yet.
```

Known facts:
- Windows 11 Pro laptop
- organization-issued device
- no exact error code captured yet
- repeated post-reboot failure for one cumulative update
- user also expects a newer feature update

## Step 1: Scope the issue

This is a Windows 11 servicing task with two separate questions:
1. a repeated quality-update failure
2. a missing feature update

Do not collapse both into one diagnosis.

## Step 2: Classify device state

The device is organization-issued, so treat it as **managed** unless evidence proves otherwise.

## Step 3: Route the feature-update question

Because the device is managed:
- do not suggest local policy overrides
- check whether rollout timing, safeguard hold, targeting, or deferral explains why the feature update is absent
- document that non-availability is not yet proof of local failure

## Step 4: Route the cumulative-update failure

Collect minimum evidence:
- exact error code
- failed KB number
- whether the reboot fully completes before rollback/failure
- free disk space
- whether other updates install successfully

Because the device is managed, local repair steps should be conservative and compatible with enterprise ownership. If policy or fleet-wide issues appear likely, escalate with evidence rather than improvising bypasses.

## Recommended operator output

```text
Assessment:
- Device is likely managed.
- Missing feature update may be explained by organizational targeting, rollout timing, or safeguard status.
- Repeated cumulative-update failure needs exact KB and error-code capture before deeper remediation.

Next actions:
1. Confirm management owner or update-ring authority.
2. Check release-health/safeguard context for the missing feature update.
3. Capture the cumulative-update KB and exact error code.
4. Verify pending restart completion, disk space, and whether the issue is isolated to one device.
5. Escalate with evidence if policy or fleet behavior appears to control the outcome.
```

## Example handoff note

```text
Windows 11 update triage summary
- Classification: Managed device
- Symptom A: Latest cumulative update repeatedly fails after reboot; exact KB/error code still required
- Symptom B: New feature update not offered
- Routing decision: Treat feature-update absence as possible rollout/policy/safeguard issue, not immediate local failure
- Safe next step: Capture KB/error details and verify management/update-ring intent before local override actions
- Provenance: Workflow follows preserved upstream skill intent with local routing and evidence guidance from this enhanced skill package
```
