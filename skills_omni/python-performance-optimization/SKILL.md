---
name: "python-performance-optimization"
description: "Python Performance Optimization workflow skill. Use this skill when the user needs to profile and optimize Python code using cProfile, memory profilers, benchmark discipline, and performance best practices. Use when debugging slow Python code, isolating bottlenecks, or improving application performance with measurement-first evidence before and after each change."
version: "0.0.1"
category: "development"
tags:
  - "python-performance-optimization"
  - "profile"
  - "optimize"
  - "python"
  - "cprofile"
  - "tracemalloc"
  - "benchmarking"
  - "performance"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "python-performance-optimization"
family_name: "Python Performance Optimization"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/python-performance-optimization"
upstream_skill: "skills/python-performance-optimization"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "python-performance-optimization"
---

# Python Performance Optimization

## Overview

Use this skill to investigate and improve Python performance with a measurement-first workflow.

The core operating model is:

1. define the user-visible performance problem,
2. collect a reproducible baseline,
3. choose the profiler that matches the symptom,
4. make one bounded change at a time,
5. re-measure under the same conditions.

This skill is for real diagnosis, not guesswork. Do not promise speedups from caching, vectorization, concurrency, or refactoring unless measurements on representative workloads show improvement.

The baseline workflow works with the Python standard library alone. Optional third-party profilers such as `py-spy`, `pyperf`, and `Scalene` can improve diagnosis when deterministic profiling is not enough, but they are not required.

Open these support files when needed:

- `references/runtime-practices.md` for profiler selection, benchmark hygiene, and memory/concurrency rules.
- `examples/implementation-example.md` for a concrete before/after optimization sequence.
- `scripts/validate-runtime.py` for repeat timing, cProfile summaries, and optional tracemalloc allocation diffs.

## When to Use

Use this skill when the task involves one or more of these:

- Python code is slower than expected and the bottleneck is not yet known.
- A recent change increased latency, CPU time, or memory allocation.
- A user wants evidence before deciding whether to optimize algorithm, data structure, caching, I/O, or concurrency.
- Memory growth needs investigation with allocation tracing rather than assumptions.
- A proposed optimization needs before/after proof under the same interpreter, dependencies, and representative inputs.

Do not use this skill as the primary workflow when:

- the issue is mainly database tuning, network architecture, operating-system tuning, or infrastructure scaling,
- the operator cannot run representative workloads or gather measurements safely,
- the task asks for speculative “make it faster” advice without code, workload details, or acceptance criteria.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| You only know that the app is “slow” | `references/runtime-practices.md` | Helps classify the symptom as CPU, wall-clock, memory, native-extension, or concurrency related before choosing tools |
| You need a baseline and reproducible evidence | `scripts/validate-runtime.py` | Collects repeat timing, cProfile data, and optional tracemalloc diffs in one standard-library-first workflow |
| You need a worked example before touching user code | `examples/implementation-example.md` | Shows a complete baseline → profile → optimize → re-measure sequence |
| cProfile output is confusing or incomplete | `references/runtime-practices.md` | Explains cumulative vs total time and when to switch to sampling or mixed CPU/memory profilers |
| Memory appears to keep growing | `references/runtime-practices.md` | Distinguishes Python allocation growth, cache growth, transient peaks, GC behavior, and RSS confusion |

## Workflow

1. **Define the performance question.**
   - Capture the metric that matters: request latency, batch runtime, throughput, peak allocation, or allocation growth over time.
   - Record the relevant workload, input size, interpreter version, dependency set, and platform assumptions.

2. **Create a stable baseline before changing code.**
   - Prefer repeated measurements over one-off timing.
   - Keep inputs, logging level, interpreter, and environment fixed.
   - If possible, test representative workloads instead of toy microbenchmarks.
   - Use `scripts/validate-runtime.py` or `timeit`/`pyperf` for repeatable timing.

3. **Choose the profiler that matches the symptom.**
   - Use `cProfile` first for Python-call hotspot analysis.
   - Use `tracemalloc` when the problem is allocation growth, unexpected memory pressure, or peak Python allocations.
   - Use `py-spy` optionally when you need low-overhead sampling of a live or hard-to-instrument process.
   - Use `Scalene` optionally when you need stronger attribution for Python time vs native time or mixed CPU/memory behavior.
   - See `references/runtime-practices.md` for the symptom-to-tool matrix.

4. **Inspect the evidence carefully.**
   - For `cProfile`, compare `cumtime` and `tottime` rather than scanning only call counts.
   - For memory, compare `tracemalloc` snapshots around the suspect operation.
   - Confirm whether the hotspot is algorithmic work, repeated conversion/parsing, I/O waiting, synchronization, serialization, or cache churn.

5. **Apply one bounded optimization at a time.**
   Examples:
   - replace repeated O(n) lookups with a dict or set,
   - reduce unnecessary allocations or copies,
   - move repeated pure-function work behind a bounded cache,
   - batch I/O instead of performing many tiny operations,
   - consider process-based parallelism for CPU-bound work only after measuring task granularity and overhead.

6. **Re-measure under the same conditions.**
   - Use the same dataset, interpreter, and environment.
   - Report baseline vs changed results with units and repetition count.
   - Note tradeoffs such as higher memory use, reduced readability, or changed concurrency behavior.

7. **Stop if evidence does not support the change.**
   - Revert speculative optimizations.
   - Escalate to a different tool or a broader architecture review when the current measurement method cannot explain the bottleneck.

## Troubleshooting

### Benchmarks are noisy or contradictory

Check these first:

- input sizes changed between runs,
- debug logging or tracing is enabled in only one run,
- startup/import time is being mixed into the steady-state measurement,
- too few repetitions were used,
- the benchmark is too small and mostly measures noise,
- the microbenchmark does not represent the real workload.

If available, use `pyperf` for stronger calibration and noise control. Otherwise, increase repetitions and keep the environment stable.

### cProfile does not explain the observed latency

Possible reasons:

- the process spends time blocked on I/O,
- important work happens inside native extensions,
- a live production-like process is difficult to instrument directly,
- profiler overhead distorts extremely small hot paths.

In those cases, keep the cProfile evidence but consider optional tools such as `py-spy` or `Scalene` for sampling or mixed attribution.

### Memory keeps growing

Do not assume “memory leak” immediately.

Check whether the growth is due to:

- retained Python objects,
- intentionally growing caches,
- temporary peak allocations,
- allocator behavior that affects RSS differently from Python-level allocation traces,
- GC-sensitive object graphs.

Use `tracemalloc` snapshot comparisons first. If caching is involved, require bounded size and a measurable reason for the memory tradeoff.

### The parallel version is slower

Common causes:

- threads were used for CPU-bound Python work,
- process startup and teardown costs dominate,
- task size is too small,
- serialization or pickling overhead is high,
- shared resources create contention,
- the benchmark measures startup rather than steady-state execution.

Validate concurrency changes with representative workloads. Threads are usually for I/O overlap; CPU-bound work may need algorithmic improvement or process-based parallelism, but only when the workload is large enough to amortize overhead.

### A cache improved speed but memory got worse

That can be a valid tradeoff or a bad one. Confirm:

- cache size is bounded,
- the function is actually called with repeated inputs,
- hit rate is high enough to matter,
- memory growth remains acceptable,
- invalidation or staleness risk is understood.

## Examples

For a concrete end-to-end example, open `examples/implementation-example.md`.

A minimal local workflow looks like this:

```bash
python scripts/validate-runtime.py --module target_module --callable run_case --repeat 7 --number 20 --sort cumtime --top 20
```

Memory-focused run:

```bash
python scripts/validate-runtime.py --module target_module --callable run_case --repeat 5 --number 10 --tracemalloc --snapshot-diff-limit 15
```

Then compare the report before and after one code change. Do not stack multiple unrelated optimizations into the same measurement cycle.

## Additional Resources

- `references/runtime-practices.md`
- Python `cProfile` / `profile` documentation
- Python `timeit` documentation
- Python `tracemalloc` documentation
- Python `functools` documentation for bounded caching primitives
- Python `concurrent.futures` and `multiprocessing` documentation
- Optional: `pyperf`, `py-spy`, and `Scalene` project documentation

## Related Skills

Use a different skill or workflow when the root issue is primarily:

- database query planning or indexing,
- distributed-system latency or queueing,
- container or Kubernetes resource tuning,
- front-end rendering performance,
- OS-level or kernel-level profiling.

## Limitations

- This skill does not replace environment-specific validation.
- Measurements taken on toy data or unstable environments may produce misleading conclusions.
- Python allocation traces do not fully explain OS-level RSS behavior.
- Optional third-party profilers are helpful, but the workflow must remain functional without them.
