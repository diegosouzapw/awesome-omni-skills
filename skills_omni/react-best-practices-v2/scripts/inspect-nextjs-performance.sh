#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-.}"

if [ ! -d "$ROOT" ]; then
  echo "ERROR: repository path not found: $ROOT" >&2
  exit 1
fi

if ! command -v find >/dev/null 2>&1 || ! command -v grep >/dev/null 2>&1; then
  echo "ERROR: required tools not available: find and grep" >&2
  exit 1
fi

TMP="$(mktemp)"
cleanup() {
  rm -f "$TMP"
}
trap cleanup EXIT

print_section() {
  printf '\n== %s ==\n' "$1"
}

count_lines() {
  if [ -f "$1" ]; then
    wc -l < "$1" | tr -d ' '
  else
    echo 0
  fi
}

list_code_files() {
  find "$ROOT" \
    -type f \( \
      -name '*.js' -o -name '*.jsx' -o -name '*.ts' -o -name '*.tsx' -o \
      -name '*.mjs' -o -name '*.cjs' -o -name '*.mdx' \
    \) \
    -not -path '*/node_modules/*' \
    -not -path '*/.next/*' \
    -not -path '*/dist/*' \
    -not -path '*/build/*' \
    -not -path '*/coverage/*'
}

print_section "Next.js performance inspection"
echo "Root: $ROOT"
echo "Mode: read-only"

aPP_COUNT=$(find "$ROOT" -type d -name app -not -path '*/node_modules/*' | wc -l | tr -d ' ')
PAGES_COUNT=$(find "$ROOT" -type d -name pages -not -path '*/node_modules/*' | wc -l | tr -d ' ')

print_section "Routing model"
if [ "$aPP_COUNT" -gt 0 ]; then
  echo "Detected App Router directories: $aPP_COUNT"
else
  echo "Detected App Router directories: 0"
fi
if [ "$PAGES_COUNT" -gt 0 ]; then
  echo "Detected Pages Router directories: $PAGES_COUNT"
else
  echo "Detected Pages Router directories: 0"
fi
if [ "$aPP_COUNT" -gt 0 ] && [ "$PAGES_COUNT" -gt 0 ]; then
  echo "Note: repository appears to use both app/ and pages/ paths. Review route assumptions carefully."
fi

CODE_FILES="$(mktemp)"
trap 'cleanup; rm -f "$CODE_FILES"' EXIT
list_code_files > "$CODE_FILES"

print_section "Potentially broad client boundaries"
if grep -nH -E "^[[:space:]]*['\"]use client['\"];?[[:space:]]*$" $(cat "$CODE_FILES") > "$TMP" 2>/dev/null; then
  echo "Found 'use client' markers: $(count_lines "$TMP")"
  grep -E '/(app/layout|app/.+/layout|app/page|pages/_app|pages/_document|src/app/layout|src/app/.+/layout|src/app/page|src/pages/_app|src/pages/_document)\.' "$TMP" || true
  echo "All matches:"
  cat "$TMP"
else
  echo "No 'use client' markers found in scanned files."
fi

print_section "Direct <img> usage"
if grep -nH -E '<img[[:space:]>]' $(cat "$CODE_FILES") > "$TMP" 2>/dev/null; then
  echo "Potential direct <img> tags: $(count_lines "$TMP")"
  cat "$TMP"
else
  echo "No direct <img> tags found."
fi

print_section "Image optimization usage"
if grep -nH -E "from ['\"]next/image['\"]|from \"next/image\"" $(cat "$CODE_FILES") > "$TMP" 2>/dev/null; then
  echo "Files importing next/image: $(count_lines "$TMP")"
  cat "$TMP"
else
  echo "No next/image imports found."
fi

print_section "Font optimization usage"
if grep -nH -E "from ['\"]next/font|from \"next/font" $(cat "$CODE_FILES") > "$TMP" 2>/dev/null; then
  echo "Files importing next/font: $(count_lines "$TMP")"
  cat "$TMP"
else
  echo "No next/font imports found."
fi

print_section "Third-party script and raw script tag usage"
if grep -nH -E "from ['\"]next/script['\"]|from \"next/script\"|<script[[:space:]>]" $(cat "$CODE_FILES") > "$TMP" 2>/dev/null; then
  echo "Script-related matches: $(count_lines "$TMP")"
  cat "$TMP"
else
  echo "No next/script imports or raw <script> tags found."
fi

print_section "Potential heavy client imports in shared entry points"
ENTRY_PATTERN='/(app/layout|app/page|pages/_app|src/app/layout|src/app/page|src/pages/_app)\.'
if grep -nH -E "$ENTRY_PATTERN" "$CODE_FILES" >/dev/null 2>&1; then
  :
fi
> "$TMP"
while IFS= read -r file; do
  case "$file" in
    */app/layout.*|*/app/page.*|*/pages/_app.*|*/src/app/layout.*|*/src/app/page.*|*/src/pages/_app.*)
      grep -nE "from ['\"](lodash|date-fns|moment|chart\.js|echarts|three|framer-motion|firebase|aws-sdk|@aws-sdk|mapbox-gl|leaflet|recharts|d3|monaco-editor)" "$file" >> "$TMP" || true
      ;;
  esac
done < "$CODE_FILES"
if [ -s "$TMP" ]; then
  echo "Heavy-library imports in shared entry points:"
  cat "$TMP"
else
  echo "No common heavy-library imports found in shared entry points."
fi

print_section "Client-side data fetching hints"
if grep -nH -E "useEffect\s*\(|fetch\(|axios\.|swr|useSWR|react-query|useQuery" $(cat "$CODE_FILES") > "$TMP" 2>/dev/null; then
  echo "Potential client fetch or effect-driven loading matches: $(count_lines "$TMP")"
  cat "$TMP"
else
  echo "No obvious fetch/effect hints found."
fi

print_section "Suspense and lazy loading signals"
if grep -nH -E "Suspense|next/dynamic|React\.lazy|lazy\(" $(cat "$CODE_FILES") > "$TMP" 2>/dev/null; then
  echo "Suspense/lazy-loading related matches: $(count_lines "$TMP")"
  cat "$TMP"
else
  echo "No Suspense or lazy-loading signals found."
fi

print_section "Summary"
echo "Use this report for triage only."
echo "Confirm each finding manually before changing code."
echo "Prioritize architecture, rendering mode, and cache intent before memoization or blanket lazy loading."
