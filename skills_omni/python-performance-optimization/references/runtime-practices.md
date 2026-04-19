# Runtime Profiling and Benchmark Practices

## Symptom-to-Tool Matrix

| Symptom | Primary tool | What it shows well | Main caveat |
| --- | --- | --- | --- |
| Slow Python code path with unknown hotspot | `cProfile` | Function-call counts, total time, cumulative time | Adds overhead and is less informative for blocked time or native-extension internals |
| Small code fragment needs repeated local timing | `timeit` | Repeat timing with reduced setup noise | Good for microbenchmarks, not sufficient alone for end-to-end behavior |
| Need stronger benchmark discipline across runs | `pyperf` (optional) | Warmups, calibration, and reduced measurement noise | Extra dependency; still must use representative workloads |
| Memory allocation growth around a Python operation | `tracemalloc` | Allocation snapshots and line-level diffs | Tracks Python allocations, not full OS RSS behavior |
| Need low-overhead insight into a live process | `py-spy` (optional) | Sampling stacks without direct code instrumentation | Sampling is probabilistic and less exact than deterministic call accounting |
| Need Python vs native CPU attribution or richer mixed profiling | `Scalene` (optional) | Differentiates Python/native time and memory trends | Optional dependency; interpret in context of workload and environment |

## Benchmark Hygiene Checklist

Use this before trusting any result:

- Keep the interpreter version fixed.
- Keep dependency versions fixed.
- Use the same input data for before and after runs.
- Separate import/startup cost from steady-state cost when relevant.
- Disable unrelated debug logging and tracing.
- Run repeated measurements instead of relying on a single timing.
- Report units, repeat count, and environment notes.
- Prefer representative workloads over tiny toy loops.
- Do not compare timings collected under different thermal/load conditions without noting the limitation.
- Treat microbenchmark wins as provisional until confirmed in the real path.

## Reading cProfile Output

Important columns:

- `ncalls`: how many times the function was called.
- `tottime`: time spent in the function body itself, excluding subcalls.
- `cumtime`: time spent in the function plus its subcalls.

Practical interpretation:

- High `tottime` can indicate the function body itself is expensive.
- High `cumtime` with modest `tottime` usually means the function drives expensive callees.
- Very high call counts can reveal repeated conversion, parsing, property access, or tiny helper overhead.
- Sort by `cumtime` first for top-down impact, then inspect `tottime` for low-level hotspots.

## Memory Investigation Rules

When memory appears to grow:

1. Compare `tracemalloc` snapshots before and after the suspect operation.
2. Identify top allocation lines or files.
3. Check whether growth is retained data, a cache, or just temporary peak allocation.
4. Remember that `tracemalloc` tracks Python allocations, not every source of RSS growth.
5. Use caching only when the memory tradeoff is explicit and bounded.

### Cache cautions

If considering `functools.lru_cache` or similar:

- require repeated-input behavior,
- prefer bounded cache size,
- verify the hit pattern matters,
- re-measure memory and speed after enabling it.

## Concurrency Decision Rules

### Threads

Use threads mainly for I/O overlap or blocking waits. Do not assume they help CPU-bound Python code.

### Processes

Consider process-based parallelism when:

- the work is CPU-bound,
- task size is large enough to amortize startup and serialization cost,
- the data movement overhead is acceptable,
- the workload is benchmarked in a representative environment.

### Warning signs that concurrency is the wrong next step

- the current code has not been profiled yet,
- the hotspot is algorithmic and can be fixed locally,
- tasks are very small,
- pickling or IPC overhead is already visible,
- synchronization or shared-resource contention dominates.

## When cProfile Is Not Enough

Escalate from deterministic profiling when:

- latency is observed but Python call time looks low,
- native extensions likely dominate,
- the process is difficult to restart or instrument,
- blocked threads or external waits matter more than pure Python execution.

In those cases:

- keep the baseline and cProfile evidence,
- use `py-spy` for low-overhead live sampling if available,
- use `Scalene` if Python vs native attribution or richer memory insight is needed.

## Practical Reporting Template

When handing off results, include:

- target function or path,
- dataset or workload description,
- baseline timing summary,
- key profiler findings,
- exact optimization applied,
- after timing summary,
- tradeoffs or risks introduced.
