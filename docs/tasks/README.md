# 📋 Pending Implementation Plan

> Detailed execution backlog for the remaining public-runtime and private-enhancer work needed to consider the current roadmap complete.

## Scope

This task set covers the remaining fronts that still matter after the 0.1.x foundation:

1. selective MCP client expansion
2. final scorer and support-pack refinement
3. deeper specialization inside already-backed bundles
4. private enhancer live stability against hosted OmniRoute
5. private enhancer observability and consolidated batch reporting
6. hardening the public contribution flow that now depends on the enhancer pipeline

## Execution Order

1. [TASK-01-MCP-CLIENT-EXPANSION.md](TASK-01-MCP-CLIENT-EXPANSION.md)
2. [TASK-02-SCORER-AND-SUPPORT-PACK-REFINEMENT.md](TASK-02-SCORER-AND-SUPPORT-PACK-REFINEMENT.md)
3. [TASK-03-BUNDLE-SPECIALIZATION-DEPTH.md](TASK-03-BUNDLE-SPECIALIZATION-DEPTH.md)
4. [TASK-04-ENHANCER-LIVE-STABILITY.md](TASK-04-ENHANCER-LIVE-STABILITY.md)
5. [TASK-05-ENHANCER-OBSERVABILITY-AND-BATCH-REPORTS.md](TASK-05-ENHANCER-OBSERVABILITY-AND-BATCH-REPORTS.md)
6. [TASK-06-CONTRIBUTION-AUTOMATION-HARDENING.md](TASK-06-CONTRIBUTION-AUTOMATION-HARDENING.md)

This order is deliberate:

- MCP client expansion should close while the support matrix is still small enough to stay coherent.
- Scorer refinement should happen before one more large catalog growth wave.
- Bundle specialization depends on the stronger scorer and reference-pack criteria.
- Private enhancer live stability must precede any attempt to trust hosted live processing for PR-time enhancement.
- Observability and reporting should land after live stability, so it measures the final operational path.
- Contribution automation hardening comes last because it depends on the enhancer and the catalog being stable enough to formalize.

## Status Summary

| Task | Status | Priority | Notes |
|:-----|:-------|:---------|:------|
| `TASK-01` | Completed | High | Closed this round with Goose; remaining gaps are intentional and documented |
| `TASK-02` | Completed | High | Final scoring pass landed with stronger support-pack weighting and last-mile editorial depth |
| `TASK-03` | Completed | Medium | Added specialization depth with `auth-flows`, `threat-modeling`, `release-engineering`, and `context-engineering` |
| `TASK-04` | Completed | High | Hosted live is now explicitly preflight-gated and downgraded cleanly when public OmniRoute is blocked |
| `TASK-05` | Completed | Medium | Batch JSON plus markdown summaries and per-skill progress comments now exist |
| `TASK-06` | Completed | High | Public/private contribution flow now documents intake, outcome states, attribution, and `skills_omni/` publication rules |

## Primary References

Public references:

- [../architecture/AGENT-NATIVE-ROADMAP.md](../architecture/AGENT-NATIVE-ROADMAP.md)
- [../architecture/CODEBASE-ANALYSIS.md](../architecture/CODEBASE-ANALYSIS.md)
- [../specs/CLIENT-SUPPORT-MATRIX.md](../specs/CLIENT-SUPPORT-MATRIX.md)
- [../specs/SKILL-CLASSIFICATION.md](../specs/SKILL-CLASSIFICATION.md)
- [../contributors/QUALITY-BAR.md](../contributors/QUALITY-BAR.md)
- [../contributors/HIGH-SCORE-PLAYBOOK.md](../contributors/HIGH-SCORE-PLAYBOOK.md)
- [../contributors/SKILL-PR-WORKFLOW.md](../contributors/SKILL-PR-WORKFLOW.md)

Private references:

- `omni-skills-private/README.md`
- `omni-skills-private/docs/github-automation.md`
- `omni-skills-private/docs/review-flow.md`
- `omni-skills-private/scripts/`

## Done Criteria For This Backlog

This backlog can be considered complete when all of the following are true:

- the MCP matrix has only intentional gaps, each gap justified by missing or unstable official client docs
- the scorer has a believable spread between merely polished skills and genuinely exceptional skills
- each priority bundle has meaningful depth, not just coverage
- the private enhancer can run hosted live reliably enough to be trusted for PR-time enhancement, or the hosted limitation is formally downgraded and the LAN/self-hosted path is declared canonical
- private runs produce consolidated operational summaries that make batch review easy
- the contribution flow is documented end-to-end for contributors and maintainers, including native intake and `skills_omni` publication rules

Use [CHECKLIST.md](CHECKLIST.md) as the live progress sheet.
