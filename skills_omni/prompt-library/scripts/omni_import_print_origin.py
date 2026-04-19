#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
metadata = json.loads((root / 'metadata.json').read_text(encoding='utf-8'))
payload = metadata.get('external_source') or {}
print(json.dumps(payload, indent=2, ensure_ascii=True))
