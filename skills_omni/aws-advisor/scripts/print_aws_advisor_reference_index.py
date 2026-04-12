#!/usr/bin/env python3
"""Print a compact local reference index for the aws-advisor skill."""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

FAMILIES = ["references", "examples", "agents"]

print("AWS Advisor support-pack index")
print(f"Root: {ROOT}")

for family in FAMILIES:
    folder = ROOT / family
    print(f"\n[{family}]")
    if not folder.exists():
        print("  (missing)")
        continue
    for path in sorted(folder.rglob("*")):
        if path.is_file():
            rel = path.relative_to(ROOT)
            print(f"  - {rel}")
