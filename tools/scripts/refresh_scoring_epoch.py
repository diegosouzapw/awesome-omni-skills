"""Bump data/scoring-reference-epoch to a chosen epoch (default: now).

Recency scores freeze at the pinned date for byte-reproducible builds; run this at
release time to intentionally refresh them, then rebuild and commit the artifacts.
"""
import os
import sys
from datetime import datetime, timezone

DEFAULT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    "data",
    "scoring-reference-epoch",
)


def write_epoch(path: str, epoch: int) -> None:
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(f"{int(epoch)}\n")


def main() -> None:
    epoch = int(sys.argv[1]) if len(sys.argv) > 1 else int(datetime.now(timezone.utc).timestamp())
    write_epoch(DEFAULT_PATH, epoch)
    print(f"scoring-reference-epoch = {epoch} ({datetime.fromtimestamp(epoch, tz=timezone.utc).isoformat()})")


if __name__ == "__main__":
    main()
