#!/usr/bin/env python3
"""Compute the next package release version for Omni Skills.

Versioning policy:
- increment patch by one until it reaches 10
- after x.y.10, roll to x.(y+1).0

Examples:
- 0.0.1 -> 0.0.2
- 0.0.9 -> 0.0.10
- 0.0.10 -> 0.1.0
- 0.1.10 -> 0.2.0
"""

from __future__ import annotations

import argparse
import json
import os
import re
from typing import Tuple


SEMVER_RE = re.compile(r"^(\d+)\.(\d+)\.(\d+)$")


def parse_version(value: str) -> Tuple[int, int, int]:
    match = SEMVER_RE.match(value.strip())
    if not match:
        raise ValueError(f"Unsupported version format: {value!r}")
    return tuple(int(part) for part in match.groups())


def compute_next_version(current: str) -> str:
    major, minor, patch = parse_version(current)
    if patch < 10:
        patch += 1
    else:
        minor += 1
        patch = 0
    return f"{major}.{minor}.{patch}"


def load_package_version(repo_root: str) -> str:
    package_path = os.path.join(repo_root, "package.json")
    with open(package_path, "r", encoding="utf-8") as handle:
        package = json.load(handle)
    version = package.get("version")
    if not isinstance(version, str) or not version.strip():
        raise ValueError("package.json is missing a valid version field")
    return version.strip()


def main() -> int:
    parser = argparse.ArgumentParser(description="Compute the next Omni Skills release version.")
    parser.add_argument("--current", default=None, help="Explicit current version override")
    parser.add_argument(
        "--repo-root",
        default=os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")),
        help="Repository root used to load package.json when --current is omitted",
    )
    args = parser.parse_args()

    current = args.current or load_package_version(args.repo_root)
    print(compute_next_version(current))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
