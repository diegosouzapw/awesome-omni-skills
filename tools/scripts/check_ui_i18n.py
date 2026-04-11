#!/usr/bin/env python3
"""Report runtime UI i18n coverage against the canonical English locale."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]
DOCS_I18N_ROOT = REPO_ROOT / "docs" / "i18n"
RUNTIME_LOCALES_ROOT = REPO_ROOT / "packages" / "i18n-runtime" / "src" / "locales"
LOCALE_METADATA_FILE = REPO_ROOT / "packages" / "i18n-runtime" / "src" / "locale-metadata.js"
ENGLISH_LOCALE = "en"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Check runtime UI i18n coverage.")
    parser.add_argument("--json", action="store_true", dest="as_json", help="Print the report as JSON.")
    parser.add_argument("--strict", action="store_true", help="Exit non-zero if any locale is incomplete.")
    parser.add_argument(
        "--write",
        type=Path,
        help="Optional path to write the JSON report.",
    )
    return parser.parse_args()


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def flatten_keys(value: object, prefix: str = "") -> list[str]:
    if isinstance(value, dict):
        result: list[str] = []
        for key, nested in value.items():
            nested_prefix = f"{prefix}.{key}" if prefix else key
            result.extend(flatten_keys(nested, nested_prefix))
        return result
    return [prefix]


def load_english_schema() -> dict[str, set[str]]:
    english_root = RUNTIME_LOCALES_ROOT / ENGLISH_LOCALE
    if not english_root.exists():
        raise FileNotFoundError(
            f"Canonical baseline locale '{ENGLISH_LOCALE}' is missing at {english_root}."
        )

    paths = sorted(english_root.glob("*.json"))
    if not paths:
        raise FileNotFoundError(
            f"Canonical baseline locale '{ENGLISH_LOCALE}' has no namespace files in {english_root}."
        )

    namespaces: dict[str, set[str]] = {}
    for path in paths:
        namespaces[path.stem] = set(flatten_keys(load_json(path)))
    if not any(namespaces.values()):
        raise ValueError(
            f"Canonical baseline locale '{ENGLISH_LOCALE}' has no translation keys."
        )
    return namespaces


def list_docs_i18n_locales() -> list[str]:
    if not DOCS_I18N_ROOT.exists():
        return []
    return sorted(path.name for path in DOCS_I18N_ROOT.iterdir() if path.is_dir())


def parse_runtime_locales_from_metadata() -> list[str]:
    source = LOCALE_METADATA_FILE.read_text(encoding="utf-8")
    match = re.search(r"RUNTIME_LOCALE_ORDER\s*=\s*Object\.freeze\(\[(.*?)\]\)", source, re.S)
    if not match:
        return []
    return re.findall(r'"([^"]+)"', match.group(1))


def collect_target_locales() -> list[str]:
    ordered: list[str] = []
    seen: set[str] = set()
    for locale in [ENGLISH_LOCALE, *parse_runtime_locales_from_metadata(), *list_docs_i18n_locales()]:
        if not locale or locale in seen:
            continue
        seen.add(locale)
        ordered.append(locale)
    return ordered


def load_locale_namespace_keys(locale: str, namespace: str) -> set[str]:
    path = RUNTIME_LOCALES_ROOT / locale / f"{namespace}.json"
    if not path.exists():
        return set()
    return set(flatten_keys(load_json(path)))


def build_report() -> dict:
    english_schema = load_english_schema()
    locales = collect_target_locales()

    report = {
        "baseline_locale": ENGLISH_LOCALE,
        "target_locales": locales,
        "namespace_totals": {namespace: len(keys) for namespace, keys in english_schema.items()},
        "locales": [],
    }

    for locale in locales:
        locale_entry = {
            "locale": locale,
            "complete": True,
            "translated_keys": 0,
            "total_keys": sum(len(keys) for keys in english_schema.values()),
            "missing_keys": 0,
            "extra_keys": 0,
            "missing_namespaces": [],
            "namespaces": {},
        }

        for namespace, english_keys in english_schema.items():
            locale_path = RUNTIME_LOCALES_ROOT / locale / f"{namespace}.json"
            locale_keys = load_locale_namespace_keys(locale, namespace)
            missing = sorted(english_keys - locale_keys)
            extra = sorted(locale_keys - english_keys)
            if not locale_path.exists():
                locale_entry["missing_namespaces"].append(namespace)

            translated_count = len(english_keys) - len(missing)
            locale_entry["translated_keys"] += translated_count
            locale_entry["missing_keys"] += len(missing)
            locale_entry["extra_keys"] += len(extra)
            if missing:
                locale_entry["complete"] = False

            locale_entry["namespaces"][namespace] = {
                "path_exists": locale_path.exists(),
                "translated_keys": translated_count,
                "total_keys": len(english_keys),
                "missing_keys": len(missing),
                "extra_keys": len(extra),
                "missing_examples": missing[:10],
                "extra_examples": extra[:10],
            }

        report["locales"].append(locale_entry)

    report["summary"] = {
        "total_locales": len(locales),
        "complete_locales": sum(1 for locale in report["locales"] if locale["complete"]),
        "incomplete_locales": sum(1 for locale in report["locales"] if not locale["complete"]),
        "total_missing_keys": sum(locale["missing_keys"] for locale in report["locales"]),
    }

    return report


def render_text_report(report: dict) -> str:
    lines = [
        "UI i18n coverage report",
        f"Baseline locale: {report['baseline_locale']}",
        (
            "Summary: "
            f"{report['summary']['complete_locales']}/{report['summary']['total_locales']} locales complete, "
            f"{report['summary']['incomplete_locales']} incomplete, "
            f"{report['summary']['total_missing_keys']} missing keys total"
        ),
        "",
    ]

    for locale in report["locales"]:
        status = "complete" if locale["complete"] else "pending"
        lines.append(
            f"- {locale['locale']}: {status} | "
            f"{locale['translated_keys']}/{locale['total_keys']} keys | "
            f"missing={locale['missing_keys']} extra={locale['extra_keys']}"
        )
        if locale["missing_namespaces"]:
            lines.append(f"  missing namespaces: {', '.join(locale['missing_namespaces'])}")
        for namespace, namespace_report in locale["namespaces"].items():
            if namespace_report["missing_keys"] == 0 and namespace_report["extra_keys"] == 0:
                continue
            lines.append(
                f"  {namespace}: translated={namespace_report['translated_keys']}/{namespace_report['total_keys']} "
                f"missing={namespace_report['missing_keys']} extra={namespace_report['extra_keys']}"
            )
            if namespace_report["missing_examples"]:
                lines.append(f"    missing examples: {', '.join(namespace_report['missing_examples'])}")
    return "\n".join(lines) + "\n"


def main() -> int:
    args = parse_args()
    try:
        report = build_report()
    except (FileNotFoundError, ValueError) as error:
        payload = json.dumps({"error": str(error)}, ensure_ascii=False, indent=2) + "\n"
        if args.write:
            args.write.parent.mkdir(parents=True, exist_ok=True)
            args.write.write_text(payload, encoding="utf-8")
        if args.as_json:
            sys.stdout.write(payload)
        else:
            sys.stderr.write(f"UI i18n coverage report failed: {error}\n")
        return 2

    payload = json.dumps(report, ensure_ascii=False, indent=2) + "\n"

    if args.write:
        args.write.parent.mkdir(parents=True, exist_ok=True)
        args.write.write_text(payload, encoding="utf-8")

    try:
        if args.as_json:
            sys.stdout.write(payload)
        else:
            sys.stdout.write(render_text_report(report))
    except BrokenPipeError:
        return 0

    if args.strict and report["summary"]["incomplete_locales"] > 0:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
