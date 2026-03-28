# TASK-02 — Scorer And Support-Pack Refinement

## Status

Completed in the current 0.1.x round.

Outcome:

- the scorer now values support-pack depth more explicitly through support-file counts, support-family breadth, and agent metadata
- script examples are counted more accurately when the skill calls local helpers through repo-relative paths
- the last-mile editorial pass upgraded the lower-scoring workflow skills with agent metadata and additional reusable reference assets
- contributor docs now explain that top-band scoring depends on reusable workflow kits, not just polished markdown structure

## Objective

Make the scoring system feel finished by increasing the semantic distance between:

- a skill that is clean and well formatted
- a skill that is truly exceptional, deeply operable, and richly supported

The scoring system is already strong. This task is the last planned refinement pass.

## Current State

The repository now has strong averages and meaningful spread, but the top quartile can still compress too tightly when multiple skills have similarly polished structure.

Primary references:

- [../specs/SKILL-CLASSIFICATION.md](../specs/SKILL-CLASSIFICATION.md)
- [../contributors/QUALITY-BAR.md](../contributors/QUALITY-BAR.md)
- [../contributors/HIGH-SCORE-PLAYBOOK.md](../contributors/HIGH-SCORE-PLAYBOOK.md)

## Goals

- increase semantic discrimination in `quality` and `best_practices`
- reward genuinely useful support packs more than cosmetic structure
- reduce false near-tie behavior in the upper-middle band
- keep the scorer explainable and deterministic

## Non-Goals

- replacing deterministic scoring with an opaque model
- penalizing older skills purely for age
- rewarding verbosity for its own sake

## Target Improvements

The scorer should become more sensitive to:

- decision aids and operator checklists that change real behavior
- support packs that include reusable assets, not just extra prose
- troubleshooting coverage that represents real failure cases
- examples that demonstrate multiple paths or tradeoffs
- scripts and helpers that are actually integrated into the workflow
- evidence that the skill is designed for repeated use, not one-off reading

The scorer should become less easy to game by:

- repeating section headers without adding substance
- padding examples that do not add coverage
- adding reference files that are not meaningfully linked into the skill workflow

## Implementation Steps

1. Review the current scoring heuristics in `tools/scripts/skill_metadata.py`.
2. Identify where upper-band scores cluster too tightly.
3. Add stronger weighting for operational depth and reusable artifacts.
4. Add tighter diminishing returns for repetitive or low-value structure.
5. Pick a sample set of skills across low, middle, and high bands.
6. Re-score the catalog and inspect spread changes.
7. Update contributor docs so authors know what actually matters.
8. Do one final editorial pass on the most important non-top-tier skills if the scorer reveals shallow areas.

## Files Likely To Change

- `tools/scripts/skill_metadata.py`
- `metadata.json`
- `skills/*/metadata.json`
- `docs/specs/SKILL-CLASSIFICATION.md`
- `docs/contributors/QUALITY-BAR.md`
- `docs/contributors/HIGH-SCORE-PLAYBOOK.md`
- `docs/contributors/SKILL-ANATOMY.md`

## Acceptance Criteria

- the scorer produces a believable spread in the upper bands
- exceptional skills can score above polished-but-shallow skills for defensible reasons
- the scoring rationale remains simple enough to document
- contributor docs clearly explain how to improve a skill without gaming the system
