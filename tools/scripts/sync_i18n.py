#!/usr/bin/env python3
"""Regenerate tracked translated docs after English source changes."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from generate_i18n import REPO_ROOT, render_i18n_docs


def main() -> int:
    parser = argparse.ArgumentParser(description="Regenerate translated docs for selected English source files.")
    parser.add_argument(
        "--files",
        nargs="+",
        required=True,
        help="Relative English docs to regenerate, for example README.md docs/users/USAGE.md",
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Fail if translated output would change instead of writing files.",
    )
    parser.add_argument(
        "--no-refresh-english",
        action="store_true",
        help="Skip the English render step before regenerating i18n output.",
    )
    parser.add_argument(
        "--repo-root",
        default=str(REPO_ROOT),
        help="Repository root. Defaults to the current repository.",
    )
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    changed = render_i18n_docs(
        repo_root,
        files=args.files,
        check=args.check,
        refresh_english=not args.no_refresh_english,
    )
    print(json.dumps({"checked": args.check, "changed_files": changed}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
