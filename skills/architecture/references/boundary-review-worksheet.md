# Boundary Review Worksheet

Use this worksheet before locking an architecture recommendation.

## Boundary Questions

- What is the canonical owner of this capability?
- Which contract is stable, and which contract is only transitional?
- What must remain compatible during rollout?
- Which dependency is intentionally one-way?

## Failure Questions

- What breaks first if the boundary is wrong?
- Which migration step has the highest rollback risk?
- Which hidden coupling would force edits across packages?

## Decision Output

- chosen boundary:
- rejected alternative:
- migration safeguard:
- review focus:
