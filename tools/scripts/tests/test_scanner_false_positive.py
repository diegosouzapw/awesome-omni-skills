#!/usr/bin/env python3
"""Guarda de falso-positivo do scanner de padrões de texto endurecido.

O endurecimento (normalize_for_scan + passada multi-linha + regra
decode-and-exec) NÃO pode introduzir findings novos em texto ASCII legítimo.

Baseline medido em 2026-07-07 sobre o corpus real:
  - 4715 descrições do dist/catalog.json  -> 0 findings (antes e depois)
  - 3114 SKILL.md sob skills/             -> 1620 findings (antes E depois,
    delta 0, zero rule-ids novos)

Este teste re-verifica a invariante contra uma amostra determinística de
descrições reais: normalização é identidade em ASCII e não gera findings.
Se um dia introduzir FP, ENDUREÇA a regra — não afrouxe este teste.
"""

import json
import os
import sys
import unittest

sys.path.insert(
    0, os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
)

from skill_metadata import normalize_for_scan, scan_text_patterns  # noqa: E402

REPO_ROOT = os.path.dirname(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
)
CATALOG_PATH = os.path.join(REPO_ROOT, "dist", "catalog.json")

# Amostra determinística: as primeiras N descrições ASCII do catálogo.
SAMPLE_SIZE = 800


def _load_ascii_descriptions(limit: int):
    with open(CATALOG_PATH, encoding="utf-8") as handle:
        skills = json.load(handle)["skills"]
    out = []
    for skill in skills:
        desc = skill.get("description") or ""
        if desc.isascii() and desc.strip():
            out.append(desc)
            if len(out) >= limit:
                break
    return out


@unittest.skipUnless(
    os.path.exists(CATALOG_PATH), "dist/catalog.json ausente (rode após o build)"
)
class ScannerFalsePositiveTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.descriptions = _load_ascii_descriptions(SAMPLE_SIZE)

    def test_sample_is_representative(self):
        # Garante que realmente exercitamos uma amostra grande de texto real.
        self.assertGreaterEqual(len(self.descriptions), 200)

    def test_normalization_is_identity_on_ascii(self):
        # normalize_for_scan é idempotente/identidade em ASCII legítimo:
        # é isso que garante zero FP novo introduzido pela normalização.
        for desc in self.descriptions:
            self.assertEqual(normalize_for_scan(desc), desc)

    def test_benign_descriptions_produce_no_findings(self):
        # Baseline medido: descrições benignas do catálogo -> 0 findings.
        # A normalização/multi-linha/decode-and-exec não pode mudar isso.
        total = 0
        for desc in self.descriptions:
            findings: list = []
            scan_text_patterns("desc", desc, findings)
            total += len(findings)
        self.assertEqual(
            total,
            0,
            "normalização introduziu findings em texto benigno; endureça a regra",
        )


if __name__ == "__main__":
    unittest.main()
