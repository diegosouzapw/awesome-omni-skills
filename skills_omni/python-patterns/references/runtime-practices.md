# Python Runtime Practices Reference

Use this reference during execution when the main skill needs a compact decision aid.

## 1) Sync vs Async Decision Matrix

| Question | Favors sync | Favors async | Warning sign |
| --- | --- | --- | --- |
| Is the hot path mostly business logic with simple request/response flow? | Yes | Rarely | Async may add ceremony without benefit |
| Is the workload dominated by waiting on network or other external I/O? | Sometimes | Yes | Confirm the whole dependency path supports async |
| Are key libraries blocking-only? | Yes | No | Mixed blocking code inside async handlers often removes expected gains |
| Does the team understand event-loop, cancellation, and async testing? | Not required | Required | Operational complexity rises quickly when debugging loop misuse |
| Is the expected gain based on measurement? | Optional | Required | “Async is faster” is not enough |

**Rule of thumb:** choose sync first unless you can name the I/O concurrency benefit and verify the dependency stack supports it.

Primary basis: `asyncio` and `concurrent.futures` standard-library documentation.

## 2) Workload-to-Execution Model Matrix

| Work type | Preferred model | Why | Avoid |
| --- | --- | --- | --- |
| Simple request handling | Sync | Lowest complexity when concurrency pressure is low | Premature async conversion |
| Many concurrent outbound I/O calls | Async | Structured concurrency for I/O-heavy waiting | Claiming CPU speedups from async alone |
| Blocking third-party SDK inside service code | Threads or targeted offload | Isolates blocking work without rewriting the whole stack | Leaving blocking calls directly in async handlers |
| CPU-heavy transforms or analytics | Processes or external workers | Better match for CPU-bound work | Running CPU-heavy work on the event loop |
| Durable, retryable jobs | External worker / queue | Clear lifecycle, retries, and observability | Pretending in-process background tasks are durable jobs |

Primary basis: `asyncio`, `concurrent.futures`.

## 3) Typing Strategy Checklist

Apply typing in this order:

1. Public function and class interfaces
2. Module boundaries between subsystems
3. Return types for complex business logic
4. Shared data structures and protocol-like contracts
5. Internal helpers only where readability and tooling benefit

### Good signals

- API consumers need clearer contracts
- refactoring risk is high
- static analysis can catch misuse early
- library or reusable module boundaries need stable intent

### Warning signs

- annotations are being added without running a type checker
- internal helper code becomes less readable than the untyped version
- runtime validation is being assumed from annotations alone
- strictness is being enabled repo-wide before high-value boundaries are covered

Primary basis: `typing`, `typing.python.org` library guidance, mypy docs.

## 4) Project Layout Decision Matrix

| Repo shape | Usually a good fit | Why | Tradeoff |
| --- | --- | --- | --- |
| Small automation or one-off scripts | Flat layout | Minimal ceremony | Easier to accidentally depend on repository-root imports |
| Internal service with clear package boundaries | Flat or `src/` depending on packaging needs | Choose based on import/testing discipline and packaging plans | Do not add `src/` just for style |
| Reusable package or library | `src/` layout | Helps tests exercise installable package paths and reduces import confusion | Slightly more setup |
| Monorepo component intended for packaging | `src/` strongly worth considering | Keeps package boundaries explicit | Requires packaging/tooling discipline |

### Layout review questions

- Will this code be installed as a package?
- Should tests validate importable package behavior rather than repository-local shortcuts?
- Has the repo had import-path drift or accidental shadowing before?

Primary basis: packaging tutorial, `src layout vs flat layout`, PEP 621, pytest good practices.

## 5) Verification Gate Checklist

Before claiming a pattern choice is correct, check:

- `pyproject.toml` exists when the project is intended to be packaged or tool-configured centrally
- tests run in the import mode the project actually depends on
- async handlers do not call obvious blocking operations in the hot path
- subprocess usage avoids unsafe shell-string patterns when input may vary
- type checking is applied where annotations are part of the recommendation
- performance claims are based on measurement or profiling, not assumption

## 6) Common Failure Modes

### Async endpoint still blocks

Look for:

- synchronous database clients
- `requests` or other blocking HTTP clients in async code
- file, CPU, or subprocess work done inline on the event loop

### Import confusion after packaging

Look for:

- tests importing modules directly from the repository root
- missing or incomplete package metadata
- package name shadowed by top-level folders or files

### Type adoption stalls

Look for:

- trying to type every internal helper first
- enabling strict policies globally before module boundaries are stable
- not isolating untyped third-party integrations

### Background task reliability is overstated

Look for:

- in-process fire-and-forget patterns used for durable work
- missing retry/timeout/cancellation policy
- exceptions that are logged poorly or not surfaced at all

### Subprocess security risk

Look for:

- `shell=True` with interpolated input
- string-built commands where argument lists would work
- no timeout on external commands in service paths

## 7) Source Notes

This reference is based on the official Python standard-library docs for `asyncio`, `concurrent.futures`, `typing`, and `subprocess`, plus Python packaging guidance, PEP 621, pytest good practices, Ruff docs, and mypy docs. It is intentionally compact so the main skill can stay focused on workflow and recommendations.
