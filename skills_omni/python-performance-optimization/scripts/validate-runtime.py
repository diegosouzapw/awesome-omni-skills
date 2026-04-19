#!/usr/bin/env python3
"""Collect repeat timing, cProfile output, and optional tracemalloc diffs for a module callable.

Example:
    python scripts/validate-runtime.py --module word_report --callable run_case --repeat 7 --number 10
"""

from __future__ import annotations

import argparse
import cProfile
import importlib
import io
import pstats
import statistics
import sys
import time
import tracemalloc
from typing import Callable, List


class ValidationError(Exception):
    pass


def load_callable(module_name: str, callable_name: str) -> Callable[[], object]:
    module = importlib.import_module(module_name)
    try:
        fn = getattr(module, callable_name)
    except AttributeError as exc:
        raise ValidationError(f"Callable '{callable_name}' was not found in module '{module_name}'.") from exc
    if not callable(fn):
        raise ValidationError(f"Attribute '{callable_name}' in module '{module_name}' is not callable.")
    return fn


def run_timing(fn: Callable[[], object], repeat: int, number: int) -> List[float]:
    samples: List[float] = []
    for _ in range(repeat):
        start = time.perf_counter()
        for _ in range(number):
            fn()
        elapsed = time.perf_counter() - start
        samples.append(elapsed / number)
    return samples


def summarize_timing(samples: List[float]) -> str:
    mean_value = statistics.mean(samples)
    median_value = statistics.median(samples)
    min_value = min(samples)
    max_value = max(samples)
    stdev_value = statistics.stdev(samples) if len(samples) > 1 else 0.0
    lines = [
        "Timing summary (seconds per call)",
        f"  runs   : {len(samples)}",
        f"  mean   : {mean_value:.9f}",
        f"  median : {median_value:.9f}",
        f"  min    : {min_value:.9f}",
        f"  max    : {max_value:.9f}",
        f"  stdev  : {stdev_value:.9f}",
    ]
    return "\n".join(lines)


def profile_callable(fn: Callable[[], object], sort_key: str, top: int) -> str:
    profiler = cProfile.Profile()
    profiler.enable()
    fn()
    profiler.disable()

    buffer = io.StringIO()
    stats = pstats.Stats(profiler, stream=buffer)
    stats.strip_dirs().sort_stats(sort_key).print_stats(top)
    return buffer.getvalue()


def tracemalloc_diff(fn: Callable[[], object], limit: int) -> str:
    tracemalloc.start()
    before = tracemalloc.take_snapshot()
    fn()
    after = tracemalloc.take_snapshot()
    stats = after.compare_to(before, "lineno")

    lines = ["Top allocation diffs (after - before)"]
    if not stats:
        lines.append("  No allocation differences captured.")
    else:
        for index, stat in enumerate(stats[:limit], start=1):
            lines.append(f"  {index:>2}. {stat}")
    tracemalloc.stop()
    return "\n".join(lines)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Validate runtime behavior for a module callable.")
    parser.add_argument("--module", required=True, help="Importable module name, for example: word_report")
    parser.add_argument("--callable", dest="callable_name", required=True, help="Callable to execute, for example: run_case")
    parser.add_argument("--repeat", type=int, default=5, help="Number of timing samples to collect")
    parser.add_argument("--number", type=int, default=10, help="Invocations per timing sample")
    parser.add_argument("--sort", default="cumtime", choices=["calls", "cumulative", "cumtime", "time", "tottime", "ncalls"], help="Sort key for cProfile stats")
    parser.add_argument("--top", type=int, default=20, help="Number of profile rows to print")
    parser.add_argument("--tracemalloc", action="store_true", help="Capture tracemalloc snapshot diff around one callable execution")
    parser.add_argument("--snapshot-diff-limit", type=int, default=10, help="Number of tracemalloc diff rows to print")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if args.repeat < 1:
        raise ValidationError("--repeat must be at least 1")
    if args.number < 1:
        raise ValidationError("--number must be at least 1")
    if args.top < 1:
        raise ValidationError("--top must be at least 1")
    if args.snapshot_diff_limit < 1:
        raise ValidationError("--snapshot-diff-limit must be at least 1")

    fn = load_callable(args.module, args.callable_name)

    print(f"Target: {args.module}.{args.callable_name}")
    print(summarize_timing(run_timing(fn, args.repeat, args.number)))
    print()
    print("cProfile summary")
    print(profile_callable(fn, args.sort, args.top))

    if args.tracemalloc:
        print(tracemalloc_diff(fn, args.snapshot_diff_limit))

    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except ValidationError as exc:
        print(f"error: {exc}", file=sys.stderr)
        raise SystemExit(2)
