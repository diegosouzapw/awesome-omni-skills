#!/usr/bin/env python3
"""
Verify scanner coverage recorded in generated per-skill metadata.

This script is intended for CI/release use where a pipeline must assert that
optional scanners such as ClamAV and VirusTotal actually executed, instead of
remaining disabled or unavailable.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from typing import Dict, List


def repo_paths() -> tuple[str, List[str]]:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(os.path.dirname(script_dir))
    return repo_root, [
        os.path.join(repo_root, "skills"),
        os.path.join(repo_root, "skills_omni"),
    ]


def load_skill_metadata(skill_dir: str) -> Dict:
    metadata_path = os.path.join(skill_dir, "metadata.json")
    with open(metadata_path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def summarize_scanner(scanner: Dict) -> str:
    provider = scanner.get("provider") or "unknown"
    status = scanner.get("status") or "unknown"
    return f"{provider}:{status}"


def main() -> int:
    parser = argparse.ArgumentParser(description="Verify security scanner coverage for generated skill metadata.")
    parser.add_argument("--path", default=None, help="Skills directory path (default: auto-detect)")
    parser.add_argument("--require-clamav", action="store_true", help="Fail unless ClamAV completed for every skill")
    parser.add_argument(
        "--require-virustotal",
        action="store_true",
        help="Fail unless VirusTotal hash lookup completed for every skill",
    )
    args = parser.parse_args()

    repo_root, default_skill_roots = repo_paths()
    skill_roots = [args.path] if args.path else default_skill_roots
    existing_skill_roots = [skill_root for skill_root in skill_roots if os.path.isdir(skill_root)]

    if args.path and not existing_skill_roots:
        print(f"✗ Skills directory not found: {args.path}")
        return 1

    failures: List[str] = []
    checked = 0

    for skill_root in existing_skill_roots:
        for entry in sorted(os.listdir(skill_root)):
            skill_dir = os.path.join(skill_root, entry)
            metadata_path = os.path.join(skill_dir, "metadata.json")
            if not os.path.isdir(skill_dir) or entry.startswith("."):
                continue
            if not os.path.isfile(metadata_path):
                failures.append(f"{os.path.relpath(skill_dir, repo_root)}: missing metadata.json; run npm run validate first")
                continue

            metadata = load_skill_metadata(skill_dir)
            security = metadata.get("security") or {}
            scanners = security.get("scanners") or {}
            checked += 1

            static_scanner = scanners.get("static") or {}
            if static_scanner.get("status") != "completed":
                failures.append(
                    f"{entry}: static scanner did not complete ({summarize_scanner(static_scanner)})"
                )

            clamav = scanners.get("clamav") or {}
            if args.require_clamav:
                if not clamav.get("enabled"):
                    failures.append(f"{entry}: ClamAV is not enabled")
                elif clamav.get("status") != "completed":
                    failures.append(
                        f"{entry}: ClamAV did not complete ({summarize_scanner(clamav)})"
                    )
                elif int(clamav.get("infected_files", 0) or 0) > 0:
                    failures.append(f"{entry}: ClamAV reported infected files")
            elif clamav.get("enabled") and clamav.get("status") not in {"completed", "disabled"}:
                failures.append(f"{entry}: ClamAV is enabled but not healthy ({summarize_scanner(clamav)})")

            virustotal = scanners.get("virustotal") or {}
            if args.require_virustotal:
                if not virustotal.get("enabled"):
                    failures.append(f"{entry}: VirusTotal is not enabled")
                elif virustotal.get("status") != "completed":
                    failures.append(
                        f"{entry}: VirusTotal did not complete ({summarize_scanner(virustotal)})"
                    )
                elif int(virustotal.get("positives", 0) or 0) > 0:
                    failures.append(f"{entry}: VirusTotal reported positive detections")
            elif virustotal.get("enabled") and virustotal.get("status") not in {"completed", "disabled"}:
                failures.append(
                    f"{entry}: VirusTotal is enabled but not healthy ({summarize_scanner(virustotal)})"
                )

    checked_roots = ", ".join(os.path.relpath(skill_root, repo_root) for skill_root in existing_skill_roots) or "<no skill roots present>"
    print(f"Checked scanner coverage for {checked} skill(s) in {checked_roots}")
    if failures:
        print("")
        for failure in failures:
            print(f"✗ {failure}")
        return 1

    scanner_summary = []
    if args.require_clamav:
        scanner_summary.append("ClamAV required")
    if args.require_virustotal:
        scanner_summary.append("VirusTotal required")
    suffix = f" ({', '.join(scanner_summary)})" if scanner_summary else ""
    print(f"✓ Scanner coverage verified{suffix}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
