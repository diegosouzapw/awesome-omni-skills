import os, sys, tempfile, unittest
REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
sys.path.insert(0, os.path.join(REPO_ROOT, "tools", "scripts"))
from refresh_scoring_epoch import write_epoch

class RefreshEpochTest(unittest.TestCase):
    def test_writes_integer_epoch_with_trailing_newline(self):
        with tempfile.TemporaryDirectory() as d:
            path = os.path.join(d, "scoring-reference-epoch")
            write_epoch(path, 1780377020)
            with open(path, encoding="utf-8") as fh:
                self.assertEqual(fh.read(), "1780377020\n")

if __name__ == "__main__":
    unittest.main()
