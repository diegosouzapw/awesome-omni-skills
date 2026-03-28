## Summary

- what changed
- why it matters
- which bundles, runtimes, or clients are affected

## Skill Changes

- [ ] added new skill directories under `skills/`
- [ ] updated an existing skill support pack
- [ ] updated `data/bundles.json`
- [ ] updated runtime, CLI, or MCP behavior

List the skills touched:

- `skill-name`

## Validation

- [ ] `npm run validate`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `git diff --check`
- [ ] `npm run smoke` if runtime or packaging behavior changed

Paste notable score or catalog changes:

```text
quality avg: before -> after
best practices avg: before -> after
security avg: before -> after
```

## Private Enhancer Review

- [ ] enhancer not needed for this PR
- [ ] enhancer processed `main..HEAD` in `mock`
- [ ] enhancer processed `main..HEAD` in `live`

If used, include:

- run id(s)
- score delta summary
- whether `enhanced-candidates/` and `review.md` looked sane

## Reviewer Focus

- what should reviewers scrutinize most
- any open tradeoffs or follow-ups
