# Documentation Review Example

This example shows how to review a mixed documentation change after an API and CLI update.

## Scenario

A pull request changes:
- CLI flag `--env` to `--environment`
- API endpoint request schema for `POST /v1/widgets` so `name` is required
- Architecture flow to add an asynchronous queue before writes

The PR updates code and an OpenAPI file, but the documentation changes are incomplete.

## Documents Reviewed

- `README.md`
- `docs/api/widgets.md`
- `docs/architecture/overview.md`

## Classification

- `README.md` -> README / quickstart
- `docs/api/widgets.md` -> API reference
- `docs/architecture/overview.md` -> Architecture overview

## Source of Truth Used

- CLI help output and changed command parser
- OpenAPI definition for `/v1/widgets`
- Current architecture diagram and service write-path implementation

## Findings

### 1. README quickstart uses obsolete CLI flag

**Severity:** High

**Evidence**
```bash
mytool deploy --env prod
```

**Problem**
Users following the quickstart will use a removed flag and fail immediately.

**Recommended fix**
Replace the example with:
```bash
mytool deploy --environment production
```
Also verify whether any troubleshooting or environment examples still mention `--env`.

### 2. API reference example omits newly required field

**Severity:** High

**Evidence**
```json
{
  "mode": "fast"
}
```

**Problem**
The request example is invalid because `name` is now required.

**Recommended fix**
Update the example to:
```json
{
  "name": "example-widget",
  "mode": "fast"
}
```
Add a short note that `mode` is optional and allowed values are `fast` and `safe`.

### 3. Architecture overview still shows direct database writes

**Severity:** Medium

**Evidence**
The diagram and narrative describe the API service writing directly to the database, but the implementation now writes to a queue and a worker persists the record.

**Problem**
The architecture page misrepresents reliability behavior, write latency, and failure boundaries.

**Recommended fix**
- Update the diagram to include the queue and worker.
- Update the narrative to explain why the queue was introduced.
- Mention operational consequences such as delayed persistence and retry behavior.
- Link to an ADR if one exists.

## Review Disposition

**Request changes** before merge.

## Why this is the right disposition

- The README issue blocks task completion.
- The API issue creates an invalid integration example.
- The architecture issue causes design drift and weakens future maintenance.

## Example Review Summary for Handoff

```markdown
Reviewed README, API reference, and architecture docs against the current CLI change, OpenAPI schema, and write-path implementation.

Requesting changes for three issues:
1. README uses obsolete `--env` flag instead of `--environment`.
2. API request example omits required `name` field.
3. Architecture overview still shows direct DB writes rather than queue-based writes.

Validation basis: CLI parser/help, OpenAPI source, current implementation and architecture flow.
```

## Acceptable Outcome After Fixes

- README quickstart runs with current commands.
- API examples are valid against the current schema.
- Architecture overview reflects the queue-based write path and its consequences.
