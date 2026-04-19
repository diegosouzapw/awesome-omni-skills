# Python Patterns Implementation Examples

These scenarios show how to turn the skill's decision rules into concrete recommendations.

## Scenario 1: Async endpoint still performs blocking work

### Context

A service uses async request handlers, but one handler calls a blocking SDK and also does a CPU-heavy transform before returning.

### Rejected pattern

```python
async def create_report(user_id: str) -> dict:
    raw = blocking_sdk.fetch_user_data(user_id)
    report = expensive_transform(raw)
    return {"report": report}
```

Why rejected:

- blocking SDK call stalls the async path
- CPU-heavy transform remains on the event loop
- async syntax exists, but the hot path is still effectively blocking

### Chosen pattern

```python
import asyncio
from concurrent.futures import ProcessPoolExecutor

pool = ProcessPoolExecutor()

def build_report(raw: dict) -> dict:
    return expensive_transform(raw)

async def create_report(user_id: str) -> dict:
    raw = await asyncio.to_thread(blocking_sdk.fetch_user_data, user_id)
    loop = asyncio.get_running_loop()
    report = await loop.run_in_executor(pool, build_report, raw)
    return {"report": report}
```

### Expected operational outcome

- blocking SDK call no longer freezes the event loop directly
- CPU-heavy work is separated from the request loop
- the recommendation is still conditional: if report generation becomes durable or long-running, move it to an external worker system rather than keeping it in-process

## Scenario 2: Choosing `src/` layout for a reusable package

### Context

A repository started as an internal script set but is now becoming a reusable package with tests and build metadata.

### Rejected pattern

```text
repo/
├── mypkg/
│   ├── __init__.py
│   └── api.py
├── tests/
│   └── test_api.py
└── setup fragments and tool config spread across files
```

Why rejected:

- tests can accidentally import local code through the repository root
- metadata and tool configuration are fragmented
- packaging behavior is harder to reason about

### Chosen pattern

```text
repo/
├── pyproject.toml
├── src/
│   └── mypkg/
│       ├── __init__.py
│       └── api.py
└── tests/
    └── test_api.py
```

Minimal `pyproject.toml` shape:

```toml
[project]
name = "mypkg"
version = "0.1.0"
requires-python = ">=3.11"

test = []

[tool.pytest.ini_options]
testpaths = ["tests"]
```

### Expected operational outcome

- package metadata has a standard home
- imports in tests are more likely to reflect installable package behavior
- the recommendation remains scoped: do not force `src/` onto a tiny non-packaged script repo

## Scenario 3: Gradual typing at the module boundary

### Context

A team wants better refactoring safety, but typing the whole codebase at once created too much noise.

### Rejected pattern

```python
# annotate everything immediately, including unstable helpers
def _tmp(a: dict, b, c): ...
```

Why rejected:

- effort is spent on volatile internals first
- checker noise rises before public contracts improve
- the rollout becomes hard to sustain

### Chosen pattern

Before:

```python
def load_customer(repo, customer_id):
    data = repo.fetch(customer_id)
    return {"id": data["id"], "name": data["name"]}
```

After:

```python
from typing import Protocol, TypedDict

class Customer(TypedDict):
    id: str
    name: str

class CustomerRepo(Protocol):
    def fetch(self, customer_id: str) -> dict: ...


def load_customer(repo: CustomerRepo, customer_id: str) -> Customer:
    data = repo.fetch(customer_id)
    return {"id": str(data["id"]), "name": str(data["name"])}
```

### Expected operational outcome

- the function contract becomes clearer to callers
- static analysis can catch misuse at the boundary
- runtime validation is still a separate concern if external data is unreliable

## Scenario 4: Small script repo that should stay simple

### Context

A repository contains three admin scripts run manually by one team. There is no packaging or reuse plan.

### Chosen pattern

Keep a flat layout and centralize only what is helpful:

```text
repo/
├── pyproject.toml
├── scripts/
│   ├── clean_cache.py
│   ├── rotate_logs.py
│   └── export_metrics.py
└── tests/
    └── test_rotate_logs.py
```

### Rejected alternative

A full package plus `src/` layout solely because it is considered “more professional.”

### Expected operational outcome

- lower ceremony for a script-focused repo
- still benefits from modern metadata and test/tool configuration
- avoids over-engineering while keeping the door open for later packaging
