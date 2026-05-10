# Windows 11 Update and Remediation Notes

Use this file as a quick operator lookup. It complements `SKILL.md` and avoids repeating the full workflow.

## 1) Managed vs. unmanaged routing

### Treat the device as **managed** when you see signs such as:
- organizational ownership or enrollment
- Intune or other MDM management
- Group Policy or Windows Update for Business controls
- WSUS or enterprise deployment targeting
- update timing that follows a fleet ring or department rollout

### Managed-device operator rule
- Prefer policy-aware diagnosis over local override steps.
- Verify intended deployment behavior before labeling the issue a failure.
- Escalate ring, targeting, deferral, or safeguard questions to the management owner.

### Treat the device as **unmanaged** when:
- it is a standalone personal or lab device
- no enterprise policy is expected to govern update timing
- local Windows Update behavior is the primary path in scope

## 2) Fast feature-update availability checks

When a Windows 11 feature update is missing, separate these cases:

| Case | What it usually means | Operator action |
|---|---|---|
| Staged rollout | Microsoft has not offered the update yet to this device cohort | Do not force a failure narrative; document rollout context |
| Safeguard hold | Known issue blocks offering the update to affected devices | Check release-health guidance and capture the likely hold condition |
| Policy targeting/deferral | Organization controls timing | Route to management policy owner |
| Local device problem | Device cannot evaluate or install normally | Continue local diagnostics |

## 3) Common blocker clusters

### Preflight checks
- pending restart not completed
- insufficient disk space
- unstable network, proxy, or VPN interference
- update services temporarily unhealthy
- endpoint protection or compatibility conflict
- servicing or component-store corruption

### Evidence to capture
- exact error code
- KB number if known
- current Windows version/build
- whether failure occurs during download, install, reboot, or rollback
- whether other updates succeed
- whether the symptom affects one device or many

## 4) Safe repair order for likely servicing corruption

Use Microsoft's normal escalation pattern instead of improvising destructive steps:

1. Confirm basics first: restart state, free space, connectivity, and scope.
2. Use standard Windows Update troubleshooting guidance.
3. If corruption is suspected, repair the component store with DISM.
4. Then run SFC to repair protected system files.
5. If still unresolved, document the state and consider higher-order recovery or organizational escalation.

Operator note: do not jump to reset/reinstall unless earlier repair paths and business-impact discussion justify it.

## 5) Provenance-preserving handoff fields

Include these fields in a merge note, PR summary, or handoff:
- request scope
- managed/unmanaged classification
- release-health or safeguard check result
- exact symptom and error code
- KB/build references
- actions attempted or recommended
- why a route was chosen
- escalation boundary
- note that upstream workflow/support-file intent was preserved

## Official sources to consult

- Windows release health: https://learn.microsoft.com/en-us/windows/release-health/
- Windows Update troubleshooting: https://support.microsoft.com/windows/windows-update-troubleshooter
- Repair Windows image with DISM: https://learn.microsoft.com/windows-hardware/manufacture/desktop/repair-a-windows-image
- Use System File Checker: https://support.microsoft.com/windows/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system-files
- Windows Update for Business overview: https://learn.microsoft.com/windows/deployment/update/windows-update-for-business/
