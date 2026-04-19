#!/usr/bin/env python3
"""Preflight validation for a local PydanticAI runtime.

Checks:
- Python version
- import availability for pydantic_ai
- optional provider-specific package/import hints
- required environment variables

Exit code is non-zero when any required check fails.
"""

from __future__ import annotations

import argparse
import importlib
import os
import sys
from typing import List

MIN_PYTHON = (3, 10)

PROVIDER_IMPORT_HINTS = {
    "openai": ["openai"],
    "anthropic": ["anthropic"],
    "google": ["google.genai", "google.generativeai"],
    "gemini": ["google.genai", "google.generativeai"],
    "groq": ["groq"],
    "mistral": ["mistralai"],
    # Ollama commonly uses HTTP/local setup; package availability varies.
    "ollama": ["ollama"],
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Validate local PydanticAI runtime setup")
    parser.add_argument(
        "--provider",
        default=None,
        help="Provider name to check import hints for, e.g. openai, anthropic, gemini",
    )
    parser.add_argument(
        "--require-env",
        action="append",
        default=[],
        help="Environment variable that must be present. Can be passed multiple times.",
    )
    return parser.parse_args()


def check_python(errors: List[str], notes: List[str]) -> None:
    if sys.version_info < MIN_PYTHON:
        errors.append(
            f"Python {MIN_PYTHON[0]}.{MIN_PYTHON[1]}+ is required; found {sys.version.split()[0]}"
        )
    else:
        notes.append(f"Python version OK: {sys.version.split()[0]}")


def check_import(module_name: str, errors: List[str], notes: List[str], remediation: str) -> bool:
    try:
        importlib.import_module(module_name)
        notes.append(f"Import OK: {module_name}")
        return True
    except Exception as exc:  # pragma: no cover - defensive CLI behavior
        errors.append(f"Import failed for {module_name}: {exc}. {remediation}")
        return False


def check_core(errors: List[str], notes: List[str]) -> None:
    check_import(
        "pydantic_ai",
        errors,
        notes,
        remediation="Install the package, for example: pip install 'pydantic-ai-slim[openai]'",
    )


def check_provider(provider: str, errors: List[str], notes: List[str]) -> None:
    provider_key = provider.lower()
    hints = PROVIDER_IMPORT_HINTS.get(provider_key)
    if not hints:
        notes.append(
            f"No import hints registered for provider '{provider}'. Skipping provider import checks."
        )
        return

    imported = False
    import_errors: List[str] = []
    for module_name in hints:
        try:
            importlib.import_module(module_name)
            notes.append(f"Provider import OK: {module_name}")
            imported = True
            break
        except Exception as exc:  # pragma: no cover - defensive CLI behavior
            import_errors.append(f"{module_name}: {exc}")

    if not imported:
        joined = "; ".join(import_errors)
        errors.append(
            f"Provider import check failed for '{provider}'. Tried: {', '.join(hints)}. "
            f"Details: {joined}. Remediation: install the correct provider extras and verify your environment."
        )


def check_env(required_env: List[str], errors: List[str], notes: List[str]) -> None:
    for key in required_env:
        value = os.environ.get(key)
        if value:
            notes.append(f"Environment variable present: {key}")
        else:
            errors.append(
                f"Missing required environment variable: {key}. Remediation: export {key}=<value> before running the agent."
            )


def main() -> int:
    args = parse_args()
    errors: List[str] = []
    notes: List[str] = []

    check_python(errors, notes)
    check_core(errors, notes)

    if args.provider:
        check_provider(args.provider, errors, notes)

    if args.require_env:
        check_env(args.require_env, errors, notes)

    print("== PydanticAI runtime preflight ==")
    for note in notes:
        print(f"[OK] {note}")

    if errors:
        for error in errors:
            print(f"[ERROR] {error}", file=sys.stderr)
        return 1

    print("All requested checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
