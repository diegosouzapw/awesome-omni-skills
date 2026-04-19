# Worked Implementation Examples

## Example 1: Async FastAPI endpoint blocked by sync work

### Repository context
- FastAPI service
- Python requirement: `>=3.12`
- Endpoint marked `async def`
- Reports of latency spikes under concurrent requests

### Operator steps
1. Inspect `pyproject.toml` and confirm FastAPI stack.
2. Run targeted tests if present:
   - `pytest tests/api/test_reports.py -q`
3. Review the endpoint implementation and its dependencies.
4. Look for blocking calls inside the async path.

### Example finding
The endpoint is `async`, but it performs synchronous file parsing and a blocking HTTP call directly in the request handler.

### Expected operator conclusion
- The main issue is not FastAPI itself.
- The async boundary is misleading because the hot path still blocks.
- Recommend moving blocking work out of the event loop or replacing the dependency with an async-compatible path where justified.

### Final decision
Make a narrow fix to the blocking path, preserve the existing API contract, and add a focused regression test or benchmark if the repo already supports one.

---

## Example 2: Pyproject exists, but validation tooling is inconsistent

### Repository context
- Library repo using `pyproject.toml`
- CI runs lint and tests
- Local contributors report inconsistent results

### Operator steps
1. Run the validator script or inspect manually.
2. Check for tool config in:
   - `pyproject.toml`
   - `ruff.toml`
   - `mypy.ini`
   - `pytest.ini`
3. Compare local commands with CI workflow commands.

### Example finding
- `ruff` config lives in `pyproject.toml`
- `pytest` config lives in `pytest.ini`
- `mypy` is invoked in CI with a path argument not documented locally
- Local users are running commands from a subdirectory

### Expected operator conclusion
- The disagreement is mostly config/execution-context drift.
- Do not change production code first.
- Align documented commands and, if needed, centralize or clarify config.

### Final decision
Update workflow guidance or config location only if it reduces ambiguity without changing the intended tool behavior.

---

## Example 3: Pydantic/FastAPI response mismatch

### Repository context
- FastAPI app with Pydantic models
- Runtime returns a payload that differs from the declared response model
- Team references old examples from the internet

### Operator steps
1. Confirm installed FastAPI and Pydantic versions.
2. Reproduce with a focused test:
   - `pytest tests/api/test_response_model.py -q`
3. Inspect response model, serializer behavior, and any alias/config rules.

### Example finding
The declared model and runtime payload differ in optionality and alias handling. The codebase uses current packages, but the implementation reflects older assumptions.

### Expected operator conclusion
- Fix the model or serialization path using the current project version's semantics.
- Avoid blanket migration advice if the issue is isolated.

### Final decision
Apply a narrow, version-aware fix and add a regression test for the exact payload shape.
