#!/usr/bin/env bash
set -euo pipefail

URL=""
LABEL="run"
OUTPUT_DIR="./.perf-evidence"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --url)
      URL="$2"
      shift 2
      ;;
    --label)
      LABEL="$2"
      shift 2
      ;;
    --output)
      OUTPUT_DIR="$2"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1" >&2
      echo "Usage: $0 --url <preview-url> [--label <name>] [--output <dir>]" >&2
      exit 1
      ;;
  esac
done

mkdir -p "$OUTPUT_DIR"
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
OUTFILE="$OUTPUT_DIR/${LABEL}-${STAMP}.md"

{
  echo "# Astro performance evidence"
  echo
  echo "- Timestamp (UTC): $STAMP"
  echo "- Label: $LABEL"
  if [[ -n "$URL" ]]; then
    echo "- URL: $URL"
  else
    echo "- URL: not provided"
  fi
  echo
  echo "## Build notes"
  echo
  echo "- Record the page/template tested"
  echo "- Record the likely bottleneck: LCP / CLS / INP / JS / fonts / CSS"
  echo "- Record the change made"
  echo "- Record before/after observations"
  echo
  echo "## Suggested follow-up"
  echo
  echo "- Attach Lighthouse or PageSpeed links if used"
  echo "- Note whether field data is available"
  echo "- Note any regression checks performed"
} > "$OUTFILE"

echo "Wrote evidence template to $OUTFILE"
