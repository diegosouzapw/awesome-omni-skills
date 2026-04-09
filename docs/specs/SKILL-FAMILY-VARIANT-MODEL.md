# Skill Family, Variant, and Provenance Model

## Status

Implemented in the public catalog pipeline, API, CLI, TUI, and private publication flow.

## Problem

The repository publishes multiple concrete skills that may represent the same user-facing capability:

- native intake under `skills/`
- curated Omni output under `skills_omni/`
- internal version lines such as `*-v2`

Concrete skills already had unique `id` values, but discovery did not have a first-class way to express:

- the user-facing capability group
- the concrete published variant
- the operational provenance of each published item

That made duplicate-looking entries hard to explain in search, CLI output, and the visual TUI.

## Canonical Concepts

### Family

The family is the primary discovery unit. A family represents one user-facing capability, such as `figma-mcp` or `security-threat-model`.

### Variant

The variant is the installable published unit. Variants describe which concrete offer the user will run or install, such as:

- `native`
- `omni`
- `v2`
- `official`
- `community`

### Provenance

Provenance records where a published variant came from, who maintains it, and how it relates to upstream material.

## Skill-Level Contract

Each concrete skill now carries these fields in generated metadata and catalog output:

- `family_id`
- `family_name`
- `variant_id`
- `variant_label`
- `source_type`
- `source_repo`
- `maintainer`
- `root_path`
- `is_default_variant`
- `derived_from`
- `replaces`

These fields are exposed through generated skill metadata, `metadata.json`, `skills_index.json`, `dist/catalog.json`, and per-skill manifests.

## Family-Level Contract

Each aggregated family entry carries:

- `id`
- `display_name`
- `canonical_category`
- `default_skill_id`
- `default_variant_id`
- `variant_ids`
- `variant_count`
- `available_source_types`
- `recommended_variant`
- `skills`

Families complement `skills[]`; they do not replace the installable concrete skill records.

## Grouping Rules

Primary grouping is by `family_id`.

During migration, if a record does not define `family_id`, the temporary fallback groups by:

- normalized `display_name`
- plus `canonical_category`

This fallback exists only to keep old content stable during rollout. It is not the long-term public contract.

## Default Variant Policy

Recommended variants are chosen explicitly with this priority:

1. `is_default_variant === true`
2. `source_type === omni_curated`
3. `source_type === official`
4. `source_type === native`
5. `source_type === community`
6. stable tie-break by `id`

This policy keeps family ranking deterministic across builds and avoids accidental preference by folder name or lexical order.

## Public Pipeline Behavior

The public pipeline now reads both:

- `skills/`
- `skills_omni/`

and publishes:

- concrete variants in `skills`
- aggregated families in `families`

Concrete ids remain installable and backward compatible. Families are the default discovery surface for search and UI flows.

## Private Publication Behavior

The private enhancer now writes Omni-curated outputs with explicit family, variant, and provenance metadata so the public pipeline does not need to infer everything from folder layout alone.

Expected Omni-curated behavior:

- `source_type = omni_curated`
- `variant_id = omni`
- `root_path = skills_omni/...`
- `derived_from` points to the upstream native skill when applicable

## Consumer Behavior

### API

The API exposes family-aware listing and family detail endpoints while preserving concrete skill access patterns.

### CLI

The CLI now discovers by family first and resolves installation to a concrete skill id, optionally using an explicit `--variant`.

### TUI

The visual explorer shows one line per family on the first level and only asks for a variant when more than one installable option exists.

## Examples

### Native-only family

```json
{
  "id": "sentry",
  "family_id": "sentry",
  "variant_id": "native",
  "variant_label": "Native",
  "source_type": "native",
  "root_path": "skills/sentry",
  "is_default_variant": true
}
```

### Omni-curated derivative

```json
{
  "id": "sentry--omni",
  "family_id": "sentry",
  "variant_id": "omni",
  "variant_label": "Omni Curated",
  "source_type": "omni_curated",
  "root_path": "skills_omni/sentry",
  "derived_from": "skills/sentry",
  "is_default_variant": true
}
```

### Family aggregate

```json
{
  "id": "sentry",
  "display_name": "Sentry",
  "default_skill_id": "sentry--omni",
  "default_variant_id": "omni",
  "variant_ids": ["native", "omni"],
  "variant_count": 2,
  "available_source_types": ["native", "omni_curated"]
}
```

## Rollout Notes

- Legacy concrete ids remain valid.
- Search and discovery prefer families by default.
- Installation always resolves to a concrete skill id.
- Temporary fallback grouping should be removed only after all published skills have stable family annotations.
