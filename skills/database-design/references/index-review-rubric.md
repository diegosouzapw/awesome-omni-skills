# Index Review Rubric

Use this rubric to justify indexes before implementation.

## Query Evidence

- Which read path requires the index?
- What cardinality or selectivity assumption supports it?
- Does the index also help sorting or pagination?

## Operational Cost

- write amplification risk:
- storage overhead:
- migration or backfill impact:
- rollback strategy:
