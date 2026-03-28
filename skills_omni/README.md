# skills_omni

This directory stores Omni-enhanced derivatives of native incoming skills from the public `skills/` catalog.

Operating model:

- `skills/` remains the native intake surface
- contributors can submit minimal or non-standard native skills there
- native incoming skills can be written in any language
- the private enhancer reviews those skills one by one during pull requests
- the private enhancer preserves the native upstream snapshot as submitted
- the final curated derivative published here must always be written in English
- approved enhanced derivatives are proposed back into this directory through an automation-authored PR
- when a native skill is updated later in `skills/`, the private enhancer reprocesses it and refreshes the enhanced baseline so the version published here stays current

Important boundaries:

- entries under `skills_omni/` are maintained by the Omni Skills Team
- every enhanced derivative must keep attribution to the upstream native skill and contributor
- `skills_omni/` is not the canonical intake surface for community submissions
- the main catalog build still treats `skills/` as the source of truth for the published machine-readable catalog
- public PRs must not add or edit `skills_omni/` manually
- the only supported path into `skills_omni/` is the automation-authored companion PR produced by the private enhancer
- `skills_omni/` must never be fed back into the enhancer as native intake; it is curated output, not raw input
- updates here must therefore come only from the private enhancer, never from direct public authoring
