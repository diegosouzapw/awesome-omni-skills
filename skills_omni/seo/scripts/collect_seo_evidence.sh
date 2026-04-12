#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <url>" >&2
  exit 1
fi

url="$1"

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required" >&2
  exit 1
fi

echo "== URL =="
echo "$url"
echo

echo "== Response headers =="
curl -sSI "$url" | sed -n '1,20p'
echo

echo "== HTML hints =="
html="$(curl -sL "$url")"
printf '%s' "$html" | grep -i -m 1 '<title>' || true
printf '%s' "$html" | grep -i -m 1 'name="description"' || true
printf '%s' "$html" | grep -i -m 1 'rel="canonical"' || true
printf '%s' "$html" | grep -i -m 1 'name="robots"' || true
printf '%s' "$html" | grep -i -m 1 '<h1' || true
echo

echo "== robots.txt =="
base="$(printf '%s' "$url" | sed -E 's#(https?://[^/]+).*#\1#')"
robots_url="$base/robots.txt"
echo "$robots_url"
curl -sL "$robots_url" | sed -n '1,80p' | grep -E '^(User-agent:|Allow:|Disallow:|Sitemap:)' || true
echo

echo "== Sitemap references from robots.txt =="
curl -sL "$robots_url" | grep -i '^Sitemap:' || true
echo

echo "== Notes =="
echo "This script is read-only. It does not submit URLs, modify content, or request indexing."
