# Implementation Example: Baseline, Profile, Optimize, Re-measure

This example uses a deliberately inefficient function that repeatedly counts words by scanning a list for each query word.

## Example code

Before:

```python
# file: word_report.py
from collections import Counter


def slow_report(words, query_words):
    report = {}
    for query in query_words:
        report[query] = sum(1 for word in words if word == query)
    return report


def run_case():
    words = ["alpha", "beta", "gamma", "alpha", "beta"] * 20000
    queries = ["alpha", "beta", "gamma", "delta"] * 200
    return slow_report(words, queries)
```

Likely issue:

- repeated full-list scans drive high cumulative time,
- redundant repeated work dominates the hot path.

## Step 1: collect a baseline

```bash
python scripts/validate-runtime.py --module word_report --callable run_case --repeat 7 --number 10 --sort cumtime --top 15
```

Expected signals:

- timing summary shows a stable but non-trivial runtime,
- `slow_report` appears near the top of the cProfile table,
- cumulative time is concentrated in repeated generator/list scanning work.

## Step 2: inspect memory allocation behavior

```bash
python scripts/validate-runtime.py --module word_report --callable run_case --repeat 5 --number 5 --tracemalloc --snapshot-diff-limit 10
```

Expected signals:

- no major suspicious growth if the issue is mostly CPU,
- allocation diffs may show temporary container creation but not persistent growth.

## Step 3: apply one bounded optimization

After:

```python
# file: word_report.py
from collections import Counter


def faster_report(words, query_words):
    counts = Counter(words)
    return {query: counts.get(query, 0) for query in query_words}


def run_case():
    words = ["alpha", "beta", "gamma", "alpha", "beta"] * 20000
    queries = ["alpha", "beta", "gamma", "delta"] * 200
    return faster_report(words, queries)
```

Why this is bounded:

- the algorithm changes from repeated scanning to one counting pass plus lookups,
- behavior stays easy to reason about,
- there is no concurrency or caching side effect.

## Step 4: re-run the same measurements

```bash
python scripts/validate-runtime.py --module word_report --callable run_case --repeat 7 --number 10 --sort cumtime --top 15
```

Expected post-change signals:

- lower mean timing,
- hotspot shifts away from repeated scan logic,
- fewer expensive repeated operations in the profile.

## Example result summary

Illustrative handoff summary:

- baseline mean: 182.4 ms per run
- optimized mean: 24.7 ms per run
- approximate improvement: 7.3x faster on the same interpreter and dataset
- memory note: allocation behavior remained stable; no suspicious persistent growth observed in tracemalloc diff

Do not copy these numbers into real work. Replace them with results from the target environment.

## When to choose a different tactic

If this example instead showed:

- low Python call time but high wall-clock latency, inspect I/O or blocking behavior,
- high memory growth after introducing a cache, measure cache size and hit rate,
- little improvement after local code cleanup, revisit the algorithm or data movement pattern,
- live-process-only slowdown, consider optional sampling with `py-spy`.
