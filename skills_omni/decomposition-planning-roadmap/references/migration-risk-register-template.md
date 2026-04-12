# Migration Risk Register Template

Use this template to record migration risks before committing to extraction order.

| Risk ID | Risk | Symptoms / evidence | Impact | Likelihood | Mitigation | Decision | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R1 | Shared database coupling | Candidate depends on direct writes to shared tables | High | High | Modularize first, define write ownership, add coexistence plan | Open | |
| R2 | Boundary ambiguity | Teams disagree on what the slice owns | High | Medium | Re-run domain analysis, create context map, defer roadmap commitment | Open | |
| R3 | No rollback path | Cutover would require irreversible data moves | High | Medium | Add dual-run or staged cutover design, rehearse rollback | Open | |
| R4 | Platform-readiness gap | No independent CI/CD, auth integration, or observability | Medium | High | Add platform work before extraction | Open | |
| R5 | Distributed monolith risk | Proposed service still requires shared schema or constant sync calls | High | High | Re-scope boundary, use anti-corruption layer, defer extraction | Open | |
| R6 | Team ownership gap | No stable owning team, or team cognitive load already too high | Medium | Medium | Reassign ownership, reduce scope, delay extraction | Open | |
| R7 | Compliance / audit burden | Data handling or traceability requirements unclear | High | Medium | Security/compliance review before sequencing | Open | |

## Checklist

Before approving a roadmap, verify:

- [ ] Each early slice has a named owner
- [ ] Data write ownership is explicit
- [ ] Coexistence strategy is described
- [ ] Rollback approach is described
- [ ] Observability work is included
- [ ] Replan triggers are documented
- [ ] Deferred candidates have reasons recorded
