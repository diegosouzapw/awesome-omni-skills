# Skill PR Workflow

This is the canonical repository flow for pull requests that add or substantially upgrade one or more skills.

Use it when:

- adding a new skill under `skills/`
- deepening a bundle with new domain skills
- shipping a larger support-pack expansion
- validating a branch with the private enhancer before maintainers merge it

## Target Outcome

A strong skill PR lands with:

- complete skill structure
- generated `metadata.json` and per-skill `metadata.json`
- refreshed `dist/` artifacts
- passing validation and smoke checks where applicable
- a branch diff that the private enhancer can process skill by skill

## Recommended Branch Shape

Create a focused branch:

```bash
git checkout -b feat/<short-skill-theme>
```

Examples:

- `feat/incident-observability-evals`
- `feat/devops-skill-pack`
- `feat/security-skill-pack`

## Minimum Structure Per New Skill

New skills in this repository should usually include:

```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

A plain `SKILL.md` with no support pack is normally not enough for a release-grade PR.

## Authoring Sequence

1. Create the skill directory and frontmatter.
2. Write `SKILL.md` with:
   - `Overview`
   - `When to Use This Skill`
   - `Operating Table`
   - `Core Concepts`
   - `Workflow`
   - `Examples`
   - `Best Practices`
   - `Troubleshooting`
   - `Related Skills`
   - `Additional Resources`
3. Add `agents/openai.yaml`.
4. Add local support files under `references/`, `examples/`, and `scripts/`.
5. Update `data/bundles.json` if the skill deepens an existing bundle.

## Validation Sequence

Run this exact sequence before opening the PR:

```bash
npm run validate
npm run build
npm test
git diff --check
```

If the change also affects runtime or packaging behavior, run:

```bash
npm run smoke
```

## Private Enhancer Review

The private enhancer is not part of this repository, but maintainers can run it against the branch diff.

Recommended operating pattern:

- use **`mock` batch mode** for the full PR diff
- use **`live` mode** for one skill at a time when a maintainer wants a deeper review

This keeps the batch reliable while the live gateway remains rate-limited and provider-latency-sensitive.

Public repo:

```bash
git checkout feat/<short-skill-theme>
git rev-parse main
git rev-parse HEAD
```

Private enhancer:

```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode mock \
  --no-update-state
```

Optional maintainer live pass for a single skill:

```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Expected enhancer outputs per skill:

- `workspace/incoming/skills/<skill>/`
- `workspace/enhanced-candidates/skills/<skill>/`
- `workspace/simplified-candidates/skills/<skill>/`
- `workspace/reports/<run-id>/research.json`
- `workspace/reports/<run-id>/rewrite.json`
- `workspace/reports/<run-id>/validation.json`
- `workspace/reports/<run-id>/score-delta.json`
- `workspace/reports/<run-id>/review.md`
- `workspace/reports/<run-id>/research-prompt.md`
- `workspace/reports/<run-id>/rewrite-prompt.md`

## PR Body Expectations

The PR body should state:

- what skills were added or upgraded
- which bundles or workflows they deepen
- what validation ran
- whether the private enhancer processed the branch
- what the enhancer changed or recommended

## Reviewer Checklist

- frontmatter is complete and canonical
- `Workflow` is explicit and operational
- support-pack files are linked from `SKILL.md`
- examples are concrete and runnable
- troubleshooting uses `Symptoms` and `Solution`
- generated metadata and manifests were refreshed
- bundle updates are intentional
- tests and build outputs are green

## Example PR Scope

A strong example PR can add a thematic set such as:

- one observability or DevOps skill
- one incident or security skill
- one AI evaluation or prompting skill

That is large enough to exercise the scorer, bundles, and enhancer, without turning the PR into a full catalog rewrite.
