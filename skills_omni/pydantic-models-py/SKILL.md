---
name: "pydantic-models-py"
description: "Pydantic Models workflow skill. Use this skill when the user needs Create Pydantic models following the multi-model pattern for clean API contracts and the operator should design explicit request, update, response, and internal model boundaries before merging or handing off."
version: "0.0.1"
category: "machine-learning"
tags:
  - "pydantic-models-py"
  - "pydantic"
  - "api-contracts"
  - "request-models"
  - "response-models"
  - "patch-updates"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "pydantic-models-py"
family_name: "Pydantic Models"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/pydantic-models-py"
upstream_skill: "skills/pydantic-models-py"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "pydantic-models-py"
---

# Pydantic Models

## Overview

Use this skill to create or refactor Pydantic models for API integration work where request and response contracts must stay explicit, stable, and safe.

The upstream intent is preserved: use a multi-model pattern instead of one overloaded model for every purpose. The enhanced workflow modernizes that pattern for **Pydantic v2** and focuses on operational API contract design:

- separate create, update, public response, and internal shapes when their contracts differ
- use aliases intentionally when wire format differs from Python naming
- treat PATCH semantics as distinct from create semantics
- adapt ORM or document objects with `from_attributes=True` instead of legacy `orm_mode`
- prevent accidental field leakage by serializing public models, not internal ones

This skill is framework-agnostic Python guidance. FastAPI-style patterns are referenced because they are common and well documented, but the workflow applies to general API integration work.

> Version guard: this workflow assumes **Pydantic v2** semantics such as `model_validate`, `model_dump`, `ConfigDict`, `field_validator`, and `from_attributes`.

## When to Use This Skill

Use this skill when:

- you need Pydantic models for an external or internal API contract
- one model is starting to mix input validation, storage fields, and response serialization concerns
- the task requires separate handling for create vs update vs response payloads
- the API uses a different field naming style on the wire, such as camelCase externally and snake_case in Python
- partial updates must preserve the difference between omitted fields and explicit `null`
- ORM, document, or service-layer objects must be adapted into response models safely

Do **not** use this skill as the primary router when:

- the user only needs a single ad hoc data container with no contract boundary concerns
- the task is mainly about database schema design rather than API payload design
- the task depends on framework-specific response plumbing more than on Pydantic model design

## Operating Table

| Situation | Recommended model family | Key choices | Primary methods | Main risk |
| --- | --- | --- | --- | --- |
| Create or POST request | `Create` / input model | required writable fields, `extra='forbid'`, clear constraints | `model_validate(...)` | accepting undeclared fields or weak validation |
| Partial update or PATCH request | `Update` model | all fields optional as transport inputs, use `exclude_unset=True` | `model_dump(exclude_unset=True)` | clearing stored values by mistake |
| Public API response | `Public` / `Read` model | expose only contract fields, serialize with aliases if wire format needs them | `model_validate(...)`, `model_dump(by_alias=True)` | leaking internal fields or wrong field names |
| Internal service response | `Internal` model | include operational metadata only if not public | `model_validate(...)`, `model_dump(...)` | reusing internal models as public DTOs |
| ORM or document adaptation | `Public` or `Internal` model with attribute adaptation | `from_attributes=True` when validating from objects | `model_validate(obj)` | legacy `orm_mode` assumptions or field shape mismatch |
| Persistence shape | separate `InDB` / persistence model only if contract differs materially | add store-only fields only when needed | validate near persistence boundary | unnecessary model sprawl |

For selection guidance and config tradeoffs, see `references/integration-patterns.md`.

## Workflow

1. **Identify contract boundaries before writing code.**
   Decide whether the task truly needs separate models for create, update, public response, internal response, or persistence. Do not create extra model families unless the payloads differ in a way that matters.

2. **Start from the external contract, not the database shape.**
   For API work, define what clients may send and receive first. Persistence-only fields such as internal IDs, `doc_type`, audit flags, revision tokens, or secret material should not appear in public response models unless explicitly required.

3. **Choose a model taxonomy.**
   A practical default is:
   - `ThingBase`: shared constraints only when reuse is genuinely helpful
   - `ThingCreate`: fields accepted on creation
   - `ThingUpdate`: partial-update transport model
   - `ThingPublic`: fields returned to API clients
   - `ThingInternal` or `ThingInDB`: only when internal or persistence needs differ materially

   If `Base` inheritance makes public/private boundaries fuzzy, prefer separate models instead of inheritance.

4. **Set explicit config for request safety.**
   For externally sourced request models, start conservative:

   ```python
   from pydantic import BaseModel, ConfigDict

   class WidgetCreate(BaseModel):
       model_config = ConfigDict(extra='forbid')
   ```

   Consider stricter settings intentionally. Reject undeclared fields unless you have a compatibility reason not to. Use `default_factory` for dynamic defaults instead of mutable literals.

5. **Define field naming policy and aliases deliberately.**
   If Python code uses `snake_case` but the API contract uses `camelCase`, encode that policy explicitly. Be consistent about whether validation accepts Python names, wire aliases, or both.

   Preferred rule of thumb:
   - keep Python attributes idiomatic in code
   - expose the wire contract through aliases
   - serialize public payloads with `by_alias=True` when aliases define the contract
   - avoid mixing ad hoc field-level aliasing and broad alias generators without a reason

6. **Separate create and update semantics.**
   `Create` models usually express required writable fields. `Update` models usually make all updatable fields optional so the transport layer can represent omission.

   Important distinction:
   - **omitted field**: leave current stored value unchanged
   - **field present with `null` / `None`**: clear it, if the contract allows
   - **field present with value**: replace or update

   Use `model_dump(exclude_unset=True)` when applying PATCH-like updates.

7. **Validate and adapt at the correct boundary.**
   Use `model_validate(...)` when building models from request payloads, trusted dictionaries, or class instances. When validating from ORM or document objects, configure the target model with `from_attributes=True`.

8. **Serialize public responses from public models.**
   Prefer:
   - validate an internal object into `ThingPublic`
   - serialize `ThingPublic` with `model_dump(by_alias=True)` if aliases define the contract

   Avoid dumping a richer internal model and trying to hide fields with ad hoc exclude lists.

9. **Place business rules carefully.**
   Use `field_validator` or `model_validator` for transport and shape validation that belongs to the data contract. Keep workflow-specific side effects, repository checks, and cross-service orchestration in endpoint or service logic.

10. **Check generated payloads explicitly.**
    Before finalizing, verify:
    - required vs optional fields match the real contract
    - public output excludes internal metadata
    - aliases serialize exactly as clients expect
    - PATCH behavior preserves omitted fields

## Troubleshooting

### Incoming camelCase fields do not populate snake_case model fields

**Symptoms**
- requests fail validation even though field names look correct to the client
- response output uses the wrong field style

**Likely causes**
- aliases were defined but serialization is not using `by_alias=True`
- validation settings do not match the accepted request field style
- alias strategy is mixed inconsistently across fields

**Corrective actions**
- define one alias policy for the model family
- ensure the public serialization path uses `model_dump(by_alias=True)` when aliases define the API contract
- avoid silently accepting multiple naming styles unless compatibility requires it

### PATCH or update requests clear values unexpectedly

**Symptoms**
- omitted fields overwrite stored data with `None`
- updates behave like full replacement instead of partial modification

**Likely causes**
- create and update models are being reused as if they were identical
- update application logic uses the full dumped model instead of `exclude_unset=True`
- explicit `None` is not being distinguished from field omission

**Corrective actions**
- create a dedicated `Update` model
- apply updates using `model_dump(exclude_unset=True)`
- decide explicitly whether `None` means clear-the-value or invalid input for each field

### ORM or document objects fail validation

**Symptoms**
- validation errors occur when passing model instances or row objects into response models
- nested attributes do not serialize as expected

**Likely causes**
- target model is missing `from_attributes=True`
- attribute names on the object do not match the response model fields or aliases
- the object contains richer nested state than the response contract allows

**Corrective actions**
- enable attribute-based validation on the target response model
- validate into a public DTO rather than serializing the raw ORM object
- inspect field names and nested object shapes before assuming the failure is a Pydantic bug

### Extra fields are accepted or rejected unexpectedly

**Symptoms**
- clients can send undeclared fields without error
- valid-looking requests fail because of unrecognized keys

**Likely causes**
- `extra` handling was left implicit
- request compatibility expectations are unclear

**Corrective actions**
- set `extra='forbid'` for external request models unless a looser contract is intentional
- document any compatibility exceptions clearly
- do not use permissive extra handling as a shortcut for poor contract definition

### Public responses leak internal metadata

**Symptoms**
- internal IDs, persistence fields, or operational flags appear in API output

**Likely causes**
- internal and public models were merged for convenience
- responses are serialized from internal models with ad hoc exclusions

**Corrective actions**
- create a dedicated public response model
- validate internal data into the public model before serialization
- verify the exact wire payload with `model_dump(by_alias=True)` when aliases are used

## Examples

See `examples/request-response-example.md` for a complete worked example that includes:

- separate create, update, public, internal, and persistence-adaptation models
- a camelCase wire contract with snake_case Python attributes
- `extra='forbid'` on request models
- `from_attributes=True` for adapting an object into a public DTO
- a PATCH scenario showing omitted vs explicit `null`

## Additional Resources

- `references/integration-patterns.md` — model-family selection matrix, alias policy options, config defaults, and contract safety guidance
- Pydantic v2 documentation for models, config, aliases, serialization, validators, and attribute-based validation
- FastAPI documentation on extra models and body updates for common API usage patterns
- JSON Schema and OpenAPI references for contract-oriented field semantics

## Related Skills

Use related skills when the task drifts into:

- framework-specific endpoint wiring rather than model design
- database migrations or persistence schema design
- TypeScript client generation or OpenAPI publication workflow

When in doubt, keep this skill focused on **Pydantic model boundaries and API contract correctness** rather than general backend implementation.
