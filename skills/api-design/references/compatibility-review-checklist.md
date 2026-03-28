# Compatibility Review Checklist

Use this checklist before freezing an API contract.

## Backward Compatibility

- Are all new fields additive?
- Can older clients ignore the change safely?
- Does pagination stay stable across versions?
- Are error envelopes still shape-compatible?

## Change Controls

- deprecation path:
- migration note needed:
- client tolerance assumption:
- release risk:
