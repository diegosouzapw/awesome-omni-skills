# Trigger Playbook Matrix

Use this matrix to turn signals into repeatable actions.

## Trigger design rules

A trigger should specify:

- event or pattern
- threshold
- audience or segment
- owner
- channel
- SLA
- success metric
- false-positive risk

## Matrix template

| Trigger | Threshold | Audience | Owner | Channel | SLA | Intended action | Success metric | False-positive check |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Usage near limit | 80% of plan in 30 days | SMB usage-based | Product | in-app + email | same day | show upgrade path | upgrade rate | seasonal spike only? |
| Team invites | 3 teammates in 14 days | collaboration users | CS | email or call | 2 business days | suggest team plan | meeting booked | curiosity vs actual team rollout |
| Feature gate hits | 3 blocked events in 7 days | active evaluators | Product | in-app | immediate | explain premium value | feature conversion | accidental clicks |

## Review questions

- Does this trigger correlate with realized value or just curiosity?
- Is the right buyer identifiable at the moment of trigger?
- Is the action educational, sales-led, or support-led?
- What is the fallback if the signal fires but the account is not ready?
- How will you measure false positives and missed opportunities?

## Recommended cadence

Review trigger performance monthly for new programs and quarterly for stable programs.
