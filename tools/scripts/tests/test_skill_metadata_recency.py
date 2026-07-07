"""Recency scoring must be reproducible.

The recency term used to read the wall clock, so committed catalog artifacts drifted
by one quality point as real days passed and every `git diff --exit-code` on the
generated artifacts eventually failed on unrelated PRs. The reference "now" is now
pinned: SOURCE_DATE_EPOCH wins when set, otherwise the committed
`data/scoring-reference-epoch` file is used, and only then the wall clock.
"""

import os
import sys
import unittest
from datetime import datetime, timedelta, timezone

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
sys.path.insert(0, os.path.join(REPO_ROOT, "tools", "scripts"))

from skill_metadata import compute_quality_score, scoring_reference_datetime


def read_committed_pin():
    with open(os.path.join(REPO_ROOT, "data", "scoring-reference-epoch"), encoding="utf-8") as handle:
        return datetime.fromtimestamp(int(handle.read().strip()), tz=timezone.utc)


def recency_for(date_updated):
    _, details = compute_quality_score(
        description="x" * 200,
        body_length=1000,
        metadata_fields={"date_updated": date_updated},
        best_practices_score=90,
        level={"level": 2, "has_scripts": False, "has_extra_files": False},
        file_mtime=datetime(2000, 1, 1, tzinfo=timezone.utc),
        semantic_signals={},
    )
    return details["recency"]


class RecencyReferenceDateTest(unittest.TestCase):
    def test_source_date_epoch_overrides_reference_now(self):
        pin = datetime(2026, 1, 1, tzinfo=timezone.utc)
        os.environ["SOURCE_DATE_EPOCH"] = str(int(pin.timestamp()))
        try:
            # Updated 10 days before the pinned "now" -> within 30 days -> recency 8,
            # regardless of the real wall-clock date the test runs on.
            self.assertEqual(recency_for((pin - timedelta(days=10)).isoformat()), 8)
        finally:
            del os.environ["SOURCE_DATE_EPOCH"]

    def test_defaults_to_committed_pin_when_env_unset(self):
        os.environ.pop("SOURCE_DATE_EPOCH", None)
        # Without the env override the reference date is the committed pin file, not
        # the wall clock -- this is what keeps a fresh build byte-identical over time.
        self.assertEqual(scoring_reference_datetime(), read_committed_pin())


if __name__ == "__main__":
    unittest.main()
