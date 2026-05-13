---
name: "claude-win11-speckit-update-skill"
description: "Use this skill when the task involves Windows 11 update or remediation work and the operator must classify managed versus unmanaged devices, check release-health or safeguard status, diagnose update blockers, apply safe repair steps, and preserve upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "testing-security"
license: "CC-BY-SA-4.0"
tags:
  - "claude-win11-speckit-update-skill"
  - "windows-11"
  - "windows-update"
  - "remediation"
  - "provenance"
  - "handoff"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "claude-win11-speckit-update-skill"
family_name: "Claude Win11 Speckit Update Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/claude-win11-speckit-update-skill"
upstream_skill: "skills/claude-win11-speckit-update-skill"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "claude-win11-speckit-update-skill"
---

# Claude Win11 Speckit Update Skill

## Overview

This skill preserves the upstream `claude-win11-speckit-update-skill` identity while turning it into a concrete Windows 11 update and remediation workflow.

Use it to handle Windows 11 servicing, failed updates, blocked upgrades, and repair-oriented triage **without losing provenance**. The operator should keep copied support files, preserve the upstream workflow intent, and leave a traceable handoff or merge record.

This skill is intentionally conservative:
- classify the device before changing update behavior
- check Microsoft release-health and safeguard status before feature-update guidance
- prefer policy-based management for managed fleets
- use Microsoft's repair order for corruption cases
- preserve evidence, source context, and escalation boundaries

## When to Use

Use this skill when **all** of the following are true:
- the request is about Windows 11 update, upgrade, servicing, or remediation work
- the operator needs a repeatable workflow rather than one-off advice
- provenance of the upstream skill or copied support material must remain visible in the final output, PR, or handoff

Typical triggers:
- Windows Update fails with repeated install or retry errors
- a feature update is blocked, missing, or suspected to be under safeguard hold
- a device may be managed by Intune, Group Policy, WSUS, or another enterprise path
- the system may need servicing-stack, DISM, or SFC-based repair guidance
- the task requires a clean merge or handoff package with evidence and next steps

Do **not** use this skill when:
- the issue is unrelated to Windows 11 servicing or remediation
- the operator plans to bypass enterprise policy on a managed device
- the request requires undocumented registry changes, unsafe cleanup, or destructive reset steps without explicit approval
- the work is really app-specific troubleshooting with no Windows update component

## Workflow

1. **Confirm scope and preservation requirements**
   - Restate the request in Windows 11 servicing terms: quality update, feature update, failed install, policy conflict, or corruption repair.
   - Confirm whether the final deliverable must preserve upstream workflow notes, copied support files, and provenance.
   - Record what is known: device type, Windows edition, current build, recent update behavior, and whether the issue affects one device or a fleet.

2. **Classify the device as managed or unmanaged**
   - Look for signs of management: Intune enrollment, Group Policy control, WSUS/WUfB policy, enterprise ownership, or organization-driven update rings.
   - If the device is **managed**, prefer diagnosis and policy-aware routing over local override steps.
   - If the device is **unmanaged**, local Windows Update and repair workflows are usually in scope.
   - If classification is unclear, stop short of policy-changing advice and note the ambiguity in the handoff.

3. **Check release-health and update availability constraints**
   - Before recommending feature-update action, verify whether Microsoft has documented a known issue, rollout phase, or safeguard hold.
   - Distinguish between:
     - a normal staged rollout delay
     - a safeguard hold caused by a known issue
     - a local device problem such as corruption, policy, storage, or connectivity
   - Do not present a blocked feature update as a simple user error unless release-health evidence rules out a hold.

4. **Collect minimum diagnostic evidence**
   - Capture the update symptom precisely: install failure, rollback, endless retry, missing feature update, download stall, or scan failure.
   - Record any visible error code, update KB number, build target, and whether the failure repeats after restart.
   - Check for common blockers: low disk space, pending restart, policy restrictions, servicing corruption, VPN/proxy interference, or endpoint protection conflicts.
   - Keep evidence concise and reusable in handoff notes.

5. **Choose the safest remediation path**
   - For **managed devices**, route toward the management authority first: review update ring or policy intent, pause states, deferrals, deployment targeting, and organizational escalation.
   - For **unmanaged devices**, prefer Microsoft's standard sequence:
     1. basic preflight checks
     2. Windows Update troubleshooting path
     3. component store repair with DISM when appropriate
     4. system file repair with SFC
     5. only then consider deeper recovery or in-place repair guidance
   - If app compatibility or business-critical tooling may be affected, capture that before recommending any rebuild or repair-install path.

6. **Document outcome, provenance, and next action**
   - State what was checked, what was ruled out, and what remains unresolved.
   - Preserve upstream intent by explicitly noting when copied support files informed the action.
   - For merge or handoff, include:
     - managed/unmanaged classification
     - release-health or safeguard check result
     - error code and symptom summary
     - remediation attempted or recommended
     - escalation boundary and owner
     - provenance note for upstream workflow/support files

## Best Practices

Do:
- classify device ownership and management status before suggesting update-setting changes
- check official release-health status before advising feature-update forcing or retry loops
- prefer reversible repair steps and standard Microsoft servicing order
- preserve exact error codes, KB numbers, and build references in notes
- separate confirmed facts from assumptions in handoff material
- escalate managed-device policy issues rather than proposing local policy bypasses

Do not:
- tell operators to disable enterprise controls just to make an update install
- recommend registry edits or component-store cleanup shortcuts without strong justification
- treat all missing feature updates as local failures; rollout and safeguard holds are common
- jump directly to reset or reinstall when basic servicing repair has not been evaluated
- lose provenance when folding upstream material into a merged skill or downstream handoff

## Examples

### Example 1: Managed device with missing feature update

**Input**
```text
Windows 11 23H2 laptop in Intune. User says 24H2 is not offered yet. No local error code.
```

**Expected handling**
```text
1. Classify as managed.
2. Check whether update rollout or safeguard status may explain non-availability.
3. Review whether policy, deferral, targeting, or ring assignment controls feature-update timing.
4. Avoid suggesting local override steps.
5. Handoff notes should state: managed device, no local failure confirmed, release-health/policy route required.
```

### Example 2: Unmanaged device with repeated cumulative-update failure

**Input**
```text
Home PC on Windows 11. Cumulative update repeatedly fails with an error code after restart.
```

**Expected handling**
```text
1. Classify as unmanaged.
2. Capture the exact error code and affected KB.
3. Confirm disk space, restart state, and basic connectivity.
4. If symptom pattern suggests servicing corruption, use Microsoft's repair order: DISM first, then SFC.
5. Record result and next action in the handoff.
```

See [examples/worked-example.md](examples/worked-example.md) for a concrete triage and handoff pattern.

## Troubleshooting

**Symptoms:** Feature update is not offered, but the device otherwise updates normally.

**Solution:** Check whether the device is managed, then review release-health and safeguard-hold status before treating this as a local failure. On managed devices, verify ring, targeting, and deferral intent.

**Symptoms:** Windows Update repeatedly retries the same quality update after restart.

**Solution:** Capture the exact error code and KB, confirm restart completion and free space, then move through the standard Windows servicing repair path if corruption is suspected. Avoid destructive recovery as a first response.

**Symptoms:** Guidance conflicts with what the organization expects for update timing.

**Solution:** Assume management policy may be authoritative. Stop recommending local overrides, document the observed state, and route to the fleet-management owner.

**Symptoms:** DISM or SFC is proposed too early in the workflow.

**Solution:** Recheck whether the problem is actually rollout, safeguard, policy, storage, or a simple pending restart issue. Use repair tools when evidence suggests servicing or component corruption, not as a reflex.

**Symptoms:** The final merge or handoff loses where the workflow came from.

**Solution:** Add an explicit provenance note that this skill preserved the upstream workflow/support-file intent and identify which local support files informed the recommendation.

## Additional Resources

- [references/domain-notes.md](references/domain-notes.md) — Open this for fast routing guidance on managed vs. unmanaged handling, release-health checks, repair order, and evidence expectations.
- [examples/worked-example.md](examples/worked-example.md) — Open this when you need a concrete before/after-style triage example and a model handoff summary.

## Related Skills

No related local skills were provided in the source context.
