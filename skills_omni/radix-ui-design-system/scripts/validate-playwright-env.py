#!/usr/bin/env python3
"""Non-destructive Playwright environment readiness check.

Reports whether the current workspace appears ready for browser-based validation.
It does not install packages, download browsers, or start services.

Checks:
- Python package availability for playwright
- Node package availability for playwright / @playwright/test
- Likely browser cache directories
- Whether a target URL or startup command has been provided

Accepted environment variables:
- TARGET_URL
- BASE_URL
- START_COMMAND
"""

from __future__ import annotations

import importlib.util
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Dict, List, Optional


def run(cmd: List[str]) -> Dict[str, object]:
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=10,
            check=False,
        )
        return {
            "ok": result.returncode == 0,
            "returncode": result.returncode,
            "stdout": result.stdout.strip(),
            "stderr": result.stderr.strip(),
        }
    except FileNotFoundError:
        return {"ok": False, "returncode": None, "stdout": "", "stderr": "command not found"}
    except subprocess.TimeoutExpired:
        return {"ok": False, "returncode": None, "stdout": "", "stderr": "command timed out"}


def detect_python_playwright() -> Dict[str, object]:
    spec = importlib.util.find_spec("playwright")
    info: Dict[str, object] = {"installed": spec is not None}
    if spec is not None:
        info["location"] = str(spec.origin)
    return info


def detect_node() -> Dict[str, object]:
    node_path = shutil.which("node")
    npm_path = shutil.which("npm")
    return {
        "node": node_path,
        "npm": npm_path,
    }


def detect_node_playwright() -> Dict[str, object]:
    package_json = Path("package.json")
    result: Dict[str, object] = {
        "package_json_present": package_json.exists(),
        "declared_dependencies": [],
    }

    if package_json.exists():
        try:
            data = json.loads(package_json.read_text(encoding="utf-8"))
            deps = data.get("dependencies", {})
            dev_deps = data.get("devDependencies", {})
            found = []
            for name in ("playwright", "@playwright/test"):
                if name in deps:
                    found.append(f"dependencies:{name}@{deps[name]}")
                if name in dev_deps:
                    found.append(f"devDependencies:{name}@{dev_deps[name]}")
            result["declared_dependencies"] = found
        except Exception as exc:  # pragma: no cover - defensive
            result["package_json_error"] = str(exc)

    npm_ls = run(["npm", "ls", "--depth=0", "playwright", "@playwright/test"])
    result["npm_ls_ok"] = npm_ls["ok"]
    if npm_ls["stdout"]:
        result["npm_ls_stdout"] = npm_ls["stdout"]
    if npm_ls["stderr"]:
        result["npm_ls_stderr"] = npm_ls["stderr"]
    return result


def likely_browser_paths() -> List[str]:
    home = Path.home()
    candidates = [
        home / ".cache" / "ms-playwright",
        home / "Library" / "Caches" / "ms-playwright",
        home / "AppData" / "Local" / "ms-playwright",
    ]
    found = [str(path) for path in candidates if path.exists()]
    return found


def detect_targets() -> Dict[str, Optional[str]]:
    return {
        "TARGET_URL": os.getenv("TARGET_URL"),
        "BASE_URL": os.getenv("BASE_URL"),
        "START_COMMAND": os.getenv("START_COMMAND"),
    }


def summarize(report: Dict[str, object]) -> int:
    ready_signals = 0

    py = report["python_playwright"]
    if isinstance(py, dict) and py.get("installed"):
        ready_signals += 1

    node_pw = report["node_playwright"]
    if isinstance(node_pw, dict):
        declared = node_pw.get("declared_dependencies", [])
        if declared:
            ready_signals += 1

    browsers = report.get("browser_cache_paths", [])
    if browsers:
        ready_signals += 1

    targets = report["targets"]
    if isinstance(targets, dict) and any(targets.values()):
        ready_signals += 1

    if ready_signals >= 3:
        return 0
    if ready_signals >= 1:
        return 1
    return 2


def main() -> int:
    report: Dict[str, object] = {
        "python_playwright": detect_python_playwright(),
        "node_runtime": detect_node(),
        "node_playwright": detect_node_playwright(),
        "browser_cache_paths": likely_browser_paths(),
        "targets": detect_targets(),
    }

    print("Playwright environment readiness report")
    print("=" * 40)
    print(json.dumps(report, indent=2))
    print()

    py_installed = bool(report["python_playwright"].get("installed"))
    declared = bool(report["node_playwright"].get("declared_dependencies"))
    browsers_ready = bool(report["browser_cache_paths"])
    targets_ready = any(v for v in report["targets"].values())

    print("Summary")
    print("- Python Playwright installed:", "yes" if py_installed else "no")
    print("- Node Playwright declared:", "yes" if declared else "no")
    print("- Browser cache detected:", "yes" if browsers_ready else "no")
    print("- Target URL or start command provided:", "yes" if targets_ready else "no")

    if not targets_ready:
        print("Hint: set TARGET_URL, BASE_URL, or START_COMMAND before relying on browser-validation steps.")

    exit_code = summarize(report)
    if exit_code == 0:
        print("Readiness: likely actionable")
    elif exit_code == 1:
        print("Readiness: partial; browser validation may require setup")
    else:
        print("Readiness: low; environment evidence for Playwright execution is missing")

    return exit_code


if __name__ == "__main__":
    sys.exit(main())
