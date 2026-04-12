#!/usr/bin/env python3
"""Print a concise accessibility test matrix bundled with the skill."""

from pathlib import Path


def main() -> int:
    root = Path(__file__).resolve().parent.parent
    matrix = root / "references" / "manual-test-matrix.md"
    if not matrix.exists():
        print("manual-test-matrix.md not found")
        return 1
    print(matrix.read_text(encoding="utf-8"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
