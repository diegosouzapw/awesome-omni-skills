# Troubleshooting Decision Tree

Use this quick flow when performance drops.

## 1. Is deliverability deteriorating?

- If spam placement, unsubscribes, or complaint signals are rising:
  - start with `references/deliverability-audit-runbook.md`
  - check authentication, unsubscribe handling, and recent volume or template changes

## 2. Is bounce rate elevated?

- If hard bounces spike after new imports:
  - start with `references/list-hygiene-and-suppression-playbook.md`
  - inspect verification age, catch-all handling, and suppression sync

## 3. Are opens present but replies weak?

- If subject lines appear to work but responses are poor:
  - review hook specificity, proof quality, and CTA friction
  - use `references/experimentation-template.md` for a one-variable test

## 4. Are replies positive but conversion weak?

- If prospects respond but meetings do not happen:
  - compare positive reply rate, qualified meeting rate, and show rate using `references/outreach-metrics-scorecard.md`
  - inspect meeting CTA, routing speed, and offer-message alignment

## 5. Are unsubscribes or complaints not propagating?

- If contacts re-enter campaigns after opting out:
  - treat as a compliance incident
  - use `references/compliance-checklist-cold-outreach.md`
  - reconcile source-of-truth suppression logic across every system
