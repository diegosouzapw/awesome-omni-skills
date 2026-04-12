# Fitness Functions and Metrics

Use these examples to turn roadmap phases into measurable outcomes.

## Architecture Fitness Functions

Examples:

- A candidate slice can be deployed independently of the monolith.
- The new boundary owns writes for its authoritative data set.
- API contract tests pass against versioned interfaces.
- The monolith no longer imports internal code from the extracted slice.
- Routing can shift traffic progressively and reversibly.

## Delivery Metrics

Track trends rather than one-time numbers:

- Lead time for changes
- Deployment frequency
- Change failure rate
- Mean time to restore

## Operability Metrics

- Error rate during coexistence and cutover
- Latency on new boundary interfaces
- Alert coverage for the extracted slice
- Rollback completion time
- On-call ownership clarity

## Milestone Exit Criteria Examples

### Discovery / preparation phase
- Dependency graph reviewed
- Boundary hypotheses documented
- Top coupling hotspots identified
- Major data ownership risks recorded

### First extraction phase
- Independent build and deploy path demonstrated
- Contract tests passing
- Dashboard and alerts live
- Rollback rehearsal completed successfully
- Limited traffic cutover executed safely

### Hardening phase
- Shared-schema access reduced or eliminated as planned
- Release coordination with monolith reduced
- SLOs defined and observed
- Incident handling ownership is clear

## Review Cadence

Recommended minimum:

- Weekly review of risks and blockers
- Per-sprint review of roadmap confidence
- Per-milestone validation of exit criteria
- Replan immediately when boundary or data assumptions change materially
