#!/usr/bin/env python3

import json
import os
import pathlib
import re
import shlex
import sys
import tempfile
import time
import unittest

import pexpect


REPO_ROOT = pathlib.Path(__file__).resolve().parents[3]
PTY_APP = REPO_ROOT / "tools" / "scripts" / "tests" / "tui_pty_app.mjs"
HANDOFF_RE = re.compile(r"TUI_HANDOFF:(\{.+\})")


def default_state():
    return {
        "version": 2,
        "last_updated_at": None,
        "recentInstalls": [],
        "recentServices": [],
        "installPresets": [],
        "servicePresets": [],
        "customInstallTargets": [],
        "favorites": {
            "skills": [],
            "bundles": [],
        },
        "preferences": {
            "theme": "midnight-ice",
            "language": None,
            "compactMode": True,
            "screenReaderMode": "off",
        },
    }


class TuiPtyHarness:
    def __init__(self, state_override=None):
        self.home_dir = pathlib.Path(tempfile.mkdtemp(prefix="awesome-omni-skills-tui-pty-"))
        self.state_path = self.home_dir / ".omni-skills" / "state" / "ui-state.json"
        self.state_path.parent.mkdir(parents=True, exist_ok=True)
        state = default_state()
        if state_override:
            merge_state(state, state_override)
        self.state_path.write_text(f"{json.dumps(state, indent=2)}\n", encoding="utf-8")

        command = f"cd {shlex.quote(str(REPO_ROOT))} && node {shlex.quote(str(PTY_APP))}"
        env = {
            **os.environ,
            "HOME": str(self.home_dir),
            "FORCE_COLOR": "0",
            "TERM": "xterm-256color",
            "OMNI_SKILLS_LANG": "en",
            "OMNI_SKILLS_TUI_TEST_STATE_PATH": str(self.state_path),
        }
        self.child = pexpect.spawn(
            "script",
            ["-qec", command, "/dev/null"],
            env=env,
            encoding="utf-8",
            timeout=45,
        )

    def expect(self, needle, timeout=45):
        self.child.expect(needle, timeout=timeout)
        return self

    def wait(self, seconds=0.75):
        time.sleep(seconds)
        return self

    def send(self, chars, pause=0.75):
        self.child.send(chars)
        time.sleep(pause)
        return self

    def send_enter(self, pause=0.75):
        return self.send("\r", pause=pause)

    def send_tab(self, pause=0.9):
        return self.send("\t", pause=pause)

    def send_down(self, count=1, pause=0.75):
        for _ in range(count):
            self.send("\x1b[B", pause=pause)
        return self

    def send_ctrl_c(self, pause=0.25):
        self.child.sendcontrol("c")
        time.sleep(pause)
        return self

    def read_state(self):
        return json.loads(self.state_path.read_text(encoding="utf-8"))

    def expect_handoff(self, timeout=45):
        self.child.expect(HANDOFF_RE, timeout=timeout)
        return json.loads(self.child.match.group(1))

    def close(self):
        if self.child.isalive():
            try:
                self.send_ctrl_c()
                self.child.expect(pexpect.EOF, timeout=10)
            except Exception:
                self.child.terminate(force=True)
        else:
            try:
                self.child.expect(pexpect.EOF, timeout=1)
            except Exception:
                pass


def merge_state(base, override):
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            merge_state(base[key], value)
        else:
            base[key] = value


class TuiPtyTests(unittest.TestCase):
    def test_install_flow_runs_inside_real_terminal_session(self):
        harness = TuiPtyHarness()
        try:
            harness.expect("Visual terminal hub").wait(1.0)
            harness.send("1").expect("Install and update")
            harness.send("1").expect("Choose an install destination")
            harness.send("4").expect("Choose the install scope")
            harness.send("1").expect("Install preview")
            harness.send("1").expect("Run installer")
            harness.expect("Running inside the visual shell")
        finally:
            harness.close()

    @unittest.skip("Covered by tui_tests.mjs; this branch is flaky under script(1)-backed PTY capture.")
    def test_install_scope_selection_persists_through_preview_in_real_terminal_session(self):
        harness = TuiPtyHarness()
        try:
            harness.expect("Visual terminal hub").wait(1.0)
            harness.send("1").expect("Install and update")
            harness.send("1").expect("Choose an install destination")
            harness.send("4").expect("Choose the install scope")
            harness.send("2").expect("Choose a skill").wait(1.0)
            harness.send("1").expect("Install preview")
            harness.send("1").expect("Run installer")
            harness.expect("Running inside the visual shell")
        finally:
            harness.close()

    def test_runtime_mcp_flow_runs_inside_real_terminal_session(self):
        harness = TuiPtyHarness()
        try:
            harness.expect("Visual terminal hub").wait(1.0)
            harness.send("3").expect("Launch services")
            harness.send("1").expect("Choose a service")
            harness.send("1").expect("Choose MCP transport")
            harness.send("1").expect("Choose MCP mode")
            harness.send("1").expect("Service preview")
            harness.send("1").expect("Launch service")
            harness.expect("Running inside the visual shell")
        finally:
            harness.close()

    def test_settings_persist_theme_in_real_terminal_session(self):
        harness = TuiPtyHarness()
        try:
            harness.expect("Visual terminal hub").wait(1.0)
            harness.send("4").expect("Visual shell settings")
            harness.send_down(1).send_enter().wait(2.0)
            self.assertEqual(harness.read_state()["preferences"]["theme"], "ember")
            harness.send_ctrl_c()
            harness.child.expect(pexpect.EOF, timeout=10)
            state = harness.read_state()
            self.assertEqual(state["preferences"]["theme"], "ember")
        finally:
            harness.close()

    def test_settings_persist_language_in_real_terminal_session(self):
        harness = TuiPtyHarness()
        try:
            harness.expect("Visual terminal hub").wait(1.0)
            harness.send("4").expect("Visual shell settings")
            harness.send("4").wait(2.0)
            self.assertEqual(harness.read_state()["preferences"]["language"], "en")
            harness.expect("Visual shell settings", timeout=10)
        finally:
            harness.close()

    def test_forced_screen_reader_mode_stays_interactive_in_real_terminal_session(self):
        harness = TuiPtyHarness(
            {
                "preferences": {
                    "screenReaderMode": "on",
                },
            }
        )
        try:
            harness.expect("Visual terminal hub").wait(2.0)
            self.assertTrue(
                harness.child.isalive(),
                "forced screen reader mode should keep the TUI interactive in a real PTY session",
            )
            harness.send("4").expect("Visual shell settings")
        finally:
            harness.close()


if __name__ == "__main__":
    suite = unittest.defaultTestLoader.loadTestsFromTestCase(TuiPtyTests)
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    sys.exit(0 if result.wasSuccessful() else 1)
