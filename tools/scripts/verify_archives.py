#!/usr/bin/env python3
"""
Verify generated skill archives, checksums, and optional detached signatures.
"""

from __future__ import annotations

import json
import hashlib
import os
import shutil
import subprocess
import sys
import argparse


def sha256_file(file_path: str) -> str:
    digest = hashlib.sha256()
    with open(file_path, "rb") as handle:
        while True:
            chunk = handle.read(65536)
            if not chunk:
                break
            digest.update(chunk)
    return digest.hexdigest()


def main() -> int:
    parser = argparse.ArgumentParser(description="Verify generated skill archives, checksums, and detached signatures.")
    parser.add_argument(
        "--require-signatures",
        action="store_true",
        help="Fail unless every archive and checksum manifest has a valid detached signature.",
    )
    args = parser.parse_args()

    repo_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    manifests_dir = os.path.join(repo_root, "dist", "manifests")
    openssl_path = shutil.which("openssl")

    if not os.path.isdir(manifests_dir):
        print(f"✗ manifests directory not found: {manifests_dir}")
        return 1

    failures = 0
    verified = 0

    for file_name in sorted(os.listdir(manifests_dir)):
        if not file_name.endswith(".json"):
            continue

        manifest_path = os.path.join(manifests_dir, file_name)
        with open(manifest_path, "r", encoding="utf-8") as handle:
            manifest = json.load(handle)

        skill_id = manifest["id"]
        print(f"• {skill_id}")

        for archive in manifest.get("archives", []):
            archive_path = os.path.join(repo_root, archive["path"])
            if not os.path.isfile(archive_path):
                print(f"  ✗ missing archive: {archive['path']}")
                failures += 1
                continue

            archive_sha = sha256_file(archive_path)
            if archive_sha != archive["sha256"]:
                print(f"  ✗ sha256 mismatch: {archive['path']}")
                failures += 1
                continue

            print(f"  ✓ {archive['format']} checksum ok")
            verified += 1

            signature = archive.get("signature") or {}
            signature_path = signature.get("path")
            public_key_path = signature.get("public_key_path")
            if args.require_signatures and signature.get("status") != "signed":
                print(f"  ✗ missing required signature for {archive['path']}")
                failures += 1
                continue
            if signature.get("status") == "signed" and signature_path and public_key_path:
                abs_signature_path = os.path.join(repo_root, signature_path)
                abs_public_key_path = os.path.join(repo_root, public_key_path)
                if not openssl_path:
                    message = "openssl not found, cannot verify detached signatures"
                    if args.require_signatures:
                        print(f"  ✗ {message}")
                        failures += 1
                    else:
                        print(f"  ⚠ {message}")
                    continue
                try:
                    subprocess.run(
                        [
                            openssl_path,
                            "dgst",
                            "-sha256",
                            "-verify",
                            abs_public_key_path,
                            "-signature",
                            abs_signature_path,
                            archive_path,
                        ],
                        check=True,
                        capture_output=True,
                        text=True,
                    )
                    print(f"  ✓ {archive['format']} signature ok")
                except subprocess.CalledProcessError as error:
                    print(f"  ✗ signature verify failed for {archive['path']}: {error.stderr.strip()}")
                    failures += 1

        checksum_manifest = manifest.get("archive_checksums") or {}
        checksum_path = checksum_manifest.get("path")
        if checksum_path:
            abs_checksum_path = os.path.join(repo_root, checksum_path)
            if not os.path.isfile(abs_checksum_path):
                print(f"  ✗ missing checksum manifest: {checksum_path}")
                failures += 1
            else:
                checksum_sha = sha256_file(abs_checksum_path)
                if checksum_sha != checksum_manifest.get("sha256"):
                    print(f"  ✗ checksum manifest sha mismatch: {checksum_path}")
                    failures += 1
                else:
                    print("  ✓ checksum manifest ok")
                signature = checksum_manifest.get("signature") or {}
                signature_path = signature.get("path")
                public_key_path = signature.get("public_key_path")
                if args.require_signatures and signature.get("status") != "signed":
                    print(f"  ✗ missing required signature for {checksum_path}")
                    failures += 1
                elif signature.get("status") == "signed" and signature_path and public_key_path:
                    abs_signature_path = os.path.join(repo_root, signature_path)
                    abs_public_key_path = os.path.join(repo_root, public_key_path)
                    if not openssl_path:
                        message = "openssl not found, cannot verify detached signatures"
                        if args.require_signatures:
                            print(f"  ✗ {message}")
                            failures += 1
                        else:
                            print(f"  ⚠ {message}")
                    else:
                        try:
                            subprocess.run(
                                [
                                    openssl_path,
                                    "dgst",
                                    "-sha256",
                                    "-verify",
                                    abs_public_key_path,
                                    "-signature",
                                    abs_signature_path,
                                    abs_checksum_path,
                                ],
                                check=True,
                                capture_output=True,
                                text=True,
                            )
                            print("  ✓ checksum manifest signature ok")
                        except subprocess.CalledProcessError as error:
                            print(f"  ✗ checksum manifest signature verify failed for {checksum_path}: {error.stderr.strip()}")
                            failures += 1

    if failures:
        print(f"\n✗ archive verification failed ({failures} issue(s))")
        return 1

    print(f"\n✓ archive verification passed ({verified} archive(s))")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
