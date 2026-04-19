# Request / Response Example for Multi-Model Pydantic Design

This example shows a Python API contract using:

- snake_case field names in Python
- camelCase field names on the wire
- separate create, update, public, internal, and persistence-adaptation models
- safe request validation with `extra='forbid'`
- partial update behavior with `exclude_unset=True`
- response adaptation from an object using `from_attributes=True`

## Example Models

```python
from __future__ import annotations

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, EmailStr, Field


def to_camel(name: str) -> str:
    parts = name.split('_')
    return parts[0] + ''.join(word.capitalize() for word in parts[1:])


class UserCreate(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
        alias_generator=to_camel,
        populate_by_name=False,
    )

    email: EmailStr
    display_name: str = Field(min_length=1, max_length=80)
    marketing_opt_in: bool = False


class UserUpdate(BaseModel):
    model_config = ConfigDict(
        extra='forbid',
        alias_generator=to_camel,
        populate_by_name=False,
    )

    display_name: Optional[str] = Field(default=None, min_length=1, max_length=80)
    marketing_opt_in: Optional[bool] = None
    avatar_url: Optional[str] = None


class UserPublic(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=False,
        from_attributes=True,
    )

    id: str
    email: EmailStr
    display_name: str
    marketing_opt_in: bool
    avatar_url: Optional[str] = None
    created_at: datetime


class UserInternal(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    email: EmailStr
    display_name: str
    marketing_opt_in: bool
    avatar_url: Optional[str] = None
    created_at: datetime
    password_hash: str
    doc_type: str
    revision: str


class UserInDB(BaseModel):
    id: str
    email: EmailStr
    display_name: str
    marketing_opt_in: bool = False
    avatar_url: Optional[str] = None
    created_at: datetime
    password_hash: str
    doc_type: str = 'user'
    revision: str
```

## Create Request

### Input payload

```json
{
  "email": "ana@example.com",
  "displayName": "Ana",
  "marketingOptIn": true
}
```

### Validation

```python
payload = {
    "email": "ana@example.com",
    "displayName": "Ana",
    "marketingOptIn": True,
}

user_create = UserCreate.model_validate(payload)
```

### Parsed model state

```python
user_create.model_dump()
```

Expected result:

```python
{
    'email': 'ana@example.com',
    'display_name': 'Ana',
    'marketing_opt_in': True,
}
```

### Rejected payload example

```json
{
  "email": "ana@example.com",
  "displayName": "Ana",
  "unknownField": "should-fail"
}
```

Expected behavior:

- validation fails because `extra='forbid'`

## PATCH / Partial Update

### Request payload that omits `avatarUrl`

```json
{
  "displayName": "Ana Maria"
}
```

### Validation and update extraction

```python
patch_payload = {"displayName": "Ana Maria"}
user_update = UserUpdate.model_validate(patch_payload)
changes = user_update.model_dump(exclude_unset=True)
```

Expected `changes`:

```python
{
    'display_name': 'Ana Maria'
}
```

Meaning:

- `display_name` should be updated
- `avatar_url` should remain unchanged because it was omitted
- `marketing_opt_in` should remain unchanged because it was omitted

### Request payload that explicitly clears `avatarUrl`

```json
{
  "avatarUrl": null
}
```

### Validation and update extraction

```python
patch_payload = {"avatarUrl": None}
user_update = UserUpdate.model_validate(patch_payload)
changes = user_update.model_dump(exclude_unset=True)
```

Expected `changes`:

```python
{
    'avatar_url': None
}
```

Meaning:

- the client explicitly requested clearing `avatar_url`
- this is different from omitting the field

## Adapting an Internal Object to a Public Response

Imagine your repository or ORM returns a richer object than the public API should expose.

```python
class UserRecord:
    def __init__(self):
        self.id = 'usr_123'
        self.email = 'ana@example.com'
        self.display_name = 'Ana'
        self.marketing_opt_in = True
        self.avatar_url = None
        self.created_at = datetime(2026, 3, 27, 12, 0, 0)
        self.password_hash = 'not-for-clients'
        self.doc_type = 'user'
        self.revision = '7-abc'

record = UserRecord()
public_user = UserPublic.model_validate(record)
response_payload = public_user.model_dump(by_alias=True)
```

Expected `response_payload`:

```python
{
    'id': 'usr_123',
    'email': 'ana@example.com',
    'displayName': 'Ana',
    'marketingOptIn': True,
    'avatarUrl': None,
    'createdAt': datetime(2026, 3, 27, 12, 0, 0),
}
```

Important result:

- `password_hash`, `doc_type`, and `revision` are not exposed
- camelCase field names are used in the serialized response

## When a Separate Persistence Model Is Optional

You do **not** always need `UserInDB`.

Skip a dedicated persistence model when:

- storage shape and internal service shape are effectively the same
- there are no persistence-only fields
- adding another model would only duplicate fields without improving a boundary

Keep a dedicated persistence model when:

- the store includes metadata the API must never expose
- the storage layer has different optionality or defaults
- documents/rows need adaptation before becoming internal or public models
