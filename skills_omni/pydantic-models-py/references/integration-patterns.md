# Pydantic API Integration Patterns

Use this reference when you need a quick decision aid while designing Pydantic v2 models for API contracts.

## Model Family Decision Matrix

| Scenario | Recommended model | Field optionality | Recommended config | Alias policy | Validate / dump pattern | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Client creates a resource | `ThingCreate` | required for required inputs; optional only when the API truly allows omission | usually `extra='forbid'` | aliases if wire names differ from Python names | `ThingCreate.model_validate(payload)` | keep writable fields only |
| Client partially updates a resource | `ThingUpdate` | fields typically optional at the transport layer | usually `extra='forbid'` | same alias policy as create model | `update.model_dump(exclude_unset=True)` | omitted means unchanged |
| Public read / response contract | `ThingPublic` | only fields guaranteed in the response contract | choose config based on serialization needs; avoid exposing extras | serialize aliases if aliases define the wire contract | `ThingPublic.model_validate(obj).model_dump(by_alias=True)` | safest place to control field exposure |
| Internal service transport | `ThingInternal` | whatever the service boundary needs | explicit config; do not assume public defaults | aliases optional | `ThingInternal.model_validate(data)` | do not reuse automatically as public output |
| ORM or document adaptation | target public or internal model | based on target contract | `from_attributes=True` on target model | alias policy on output model only | `Target.model_validate(obj)` | modern replacement for v1 `orm_mode` phrasing |
| Persistence-only shape | `ThingInDB` only if needed | based on storage concerns | internal choice | no public alias requirement unless reused for output, which is discouraged | validate near storage boundary | skip this model if it adds no contract value |

## Recommended Defaults by Model Type

### Request models

Use conservative defaults unless compatibility demands otherwise:

```python
from pydantic import BaseModel, ConfigDict

class RequestModel(BaseModel):
    model_config = ConfigDict(extra='forbid')
```

Recommended for external request models:

- reject undeclared fields by default
- apply explicit field constraints instead of broad free-form input
- use `default_factory` for dynamic defaults
- choose coercion vs strictness intentionally; do not rely on whatever happens by default

### Response models

Response models should optimize for stable output contracts:

- include only fields meant for consumers
- serialize with `by_alias=True` when aliases define the public field names
- prefer explicit public DTOs over dumping internal models with `exclude={...}` patches

### Update models

Update models exist to represent transport semantics, not stored object completeness.

Typical rule:

- create model: required fields stay required
- update model: updatable fields become optional so omission can be represented
- update application logic uses `exclude_unset=True`

## Alias Strategy Options

| Need | Recommended approach | Why |
| --- | --- | --- |
| A few fields differ from Python naming | field-level aliases | keeps exceptions explicit |
| Entire public contract uses another naming style | model-level alias generator or a consistent alias policy | reduces repetition and drift |
| Different validation and serialization names are needed | explicit validation vs serialization alias configuration | avoids overloading one alias for incompatible meanings |

Practical guidance:

- keep Python attribute names idiomatic and readable
- publish the wire contract through aliases
- be explicit about whether the API accepts only wire aliases or also Python field names
- do not mix field-level exceptions and broad generators casually; document why a field is special

## Boundary Rules

Never expose these through public response models unless the API contract explicitly requires them:

- password hashes or secrets
- internal authorization flags not meant for clients
- persistence metadata such as `doc_type`, revision markers, partition keys, raw foreign storage IDs
- implementation-only timestamps or debugging fields

## Validator Placement

Use validators for:

- field normalization tightly coupled to the contract
- shape-level invariants that belong to the payload itself

Do not hide business workflow side effects in validators when they depend on repositories, remote calls, or endpoint context.

## Version Notes

This reference assumes Pydantic v2.

Prefer:

- `model_validate(...)`
- `model_dump(...)`
- `ConfigDict(...)`
- `field_validator(...)`
- `model_validator(...)`
- `from_attributes=True`

Label older v1 patterns such as `dict()`, `json()`, `parse_obj`, or `orm_mode` as legacy if you must mention them during migration work.
