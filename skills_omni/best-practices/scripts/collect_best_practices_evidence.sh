#!/usr/bin/env bash
set -euo pipefail

TARGET_DIR="${1:-.}"

echo "== Best practices evidence helper =="
echo "Target: ${TARGET_DIR}"
echo

echo "-- Dependency manifests --"
find "$TARGET_DIR" -maxdepth 3 \( -name package.json -o -name package-lock.json -o -name yarn.lock -o -name pnpm-lock.yaml \) 2>/dev/null || true
echo

echo "-- Possible risky frontend patterns --"
grep -RInE "document\.write\(|innerHTML\s*=|outerHTML\s*=|navigator\.userAgent|XMLHttpRequest\(.*\)|sourceMappingURL|http://" "$TARGET_DIR" \
  --include='*.js' --include='*.jsx' --include='*.ts' --include='*.tsx' --include='*.html' --include='*.css' 2>/dev/null | head -n 200 || true
echo

echo "-- Possible CSP/header configuration files --"
find "$TARGET_DIR" -maxdepth 4 \( -name 'nginx*.conf' -o -name '.htaccess' -o -name 'next.config.*' -o -name 'vite.config.*' -o -name 'webpack*.js' -o -name 'server.*' -o -name 'middleware.*' \) 2>/dev/null || true
echo

echo "-- Notes --"
echo "This helper is intentionally lightweight. Confirm findings manually before changing code or infrastructure."
