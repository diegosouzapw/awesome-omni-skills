#!/usr/bin/env python3
import argparse
import os
import re
import sys
from pathlib import Path

TERRAFORM_FILENAMES = {"main.tf", "versions.tf", "providers.tf", "backend.tf"}
LOCK_FILES = {".terraform.lock.hcl"}
CDK_FILES = {"cdk.json", "package.json", "pyproject.toml"}
RISK_PATTERNS = [
    (re.compile(r"0\.0\.0\.0/0"), "Open network exposure marker found: 0.0.0.0/0"),
    (re.compile(r"access_key|secret_key", re.IGNORECASE), "Potential embedded credential marker found"),
    (re.compile(r"terraform apply\s+-auto-approve"), "Auto-approve apply command found in tracked text"),
]
TEXT_EXTS = {".tf", ".tfvars", ".md", ".txt", ".sh", ".yaml", ".yml", ".json"}


def read_text_safe(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return ""


def gather_files(root: Path):
    for path in root.rglob("*"):
        if ".git" in path.parts or ".terraform" in path.parts or "node_modules" in path.parts:
            continue
        if path.is_file():
            yield path


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate local cloud/IaC workspace readiness for safe review.")
    parser.add_argument("path", nargs="?", default=".", help="Repository or workspace path")
    args = parser.parse_args()

    root = Path(args.path).resolve()
    if not root.exists() or not root.is_dir():
        print(f"ERROR: path is not a readable directory: {root}")
        return 2

    files = list(gather_files(root))
    names = {p.name for p in files}
    tf_files = [p for p in files if p.suffix == ".tf"]
    tfvars_files = [p for p in files if p.suffix == ".tfvars" or p.name.endswith(".auto.tfvars")]
    lock_files = [p for p in files if p.name in LOCK_FILES]
    cdk_detected = "cdk.json" in names
    kube_files = [p for p in files if p.name in {"Chart.yaml", "values.yaml"} or p.suffix in {".yaml", ".yml"} and "k8s" in p.as_posix().lower()]

    findings = []
    warnings = []
    failures = []

    if tf_files:
        findings.append(f"Detected Terraform/OpenTofu files: {len(tf_files)}")
    if cdk_detected:
        findings.append("Detected CDK project marker: cdk.json")
    if kube_files:
        findings.append(f"Detected Kubernetes-related manifests/charts: {len(kube_files)}")

    if tf_files and not lock_files:
        warnings.append("No .terraform.lock.hcl detected; provider dependency pinning may be missing")

    backend_hints = []
    workspace_hints = []
    provider_hints = set()

    for tf in tf_files:
        text = read_text_safe(tf)
        if "backend \"" in text or "cloud {" in text:
            backend_hints.append(tf)
        if "workspace" in text or re.search(r"env|environment", text, re.IGNORECASE):
            workspace_hints.append(tf)
        for provider in ("aws", "azurerm", "google", "kubernetes", "helm"):
            if re.search(rf'provider\s+"{provider}"', text):
                provider_hints.add(provider)

    if tf_files and not backend_hints:
        warnings.append("No backend configuration hint found in Terraform files; confirm remote state and locking outside repo")
    if tf_files and not workspace_hints:
        warnings.append("No obvious environment/workspace separation hint found; verify how environments are isolated")
    if provider_hints:
        findings.append("Detected providers: " + ", ".join(sorted(provider_hints)))

    if tfvars_files:
        warnings.append(f"Found tfvars files ({len(tfvars_files)}); ensure sensitive values are not committed")

    for path in files:
        if path.suffix.lower() not in TEXT_EXTS and path.name not in {"Dockerfile", "Makefile"}:
            continue
        text = read_text_safe(path)
        for pattern, message in RISK_PATTERNS:
            if pattern.search(text):
                warnings.append(f"{message}: {path.relative_to(root)}")

    if tf_files:
        roots = sorted({p.parent.relative_to(root).as_posix() for p in tf_files})
        if len(roots) == 1 and len(tf_files) >= 8:
            warnings.append("Large Terraform surface concentrated in one directory; review blast radius and stack boundaries")

    if not tf_files and not cdk_detected and not kube_files:
        failures.append("No Terraform/OpenTofu, CDK, or Kubernetes markers detected; workspace may not match requested cloud architecture task")

    print(f"Workspace: {root}")
    print("== Findings ==")
    for item in findings or ["No positive signals detected"]:
        print(f"- {item}")

    print("== Warnings ==")
    for item in warnings or ["No warnings detected"]:
        print(f"- {item}")

    print("== Failures ==")
    for item in failures or ["No blocking failures detected"]:
        print(f"- {item}")

    if failures:
        return 2
    if warnings:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
