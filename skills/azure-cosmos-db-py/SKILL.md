---
name: azure-cosmos-db-py
description: "Cosmos DB Service Implementation workflow skill. Use this skill when the user needs Build production-grade Azure Cosmos DB NoSQL services following clean code, security best practices, and TDD principles and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-cosmos-db-py", "build", "production-grade", "azure", "cosmos", "nosql", "services", "following"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Cosmos DB Service Implementation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-db-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Cosmos DB Service Implementation Build production-grade Azure Cosmos DB NoSQL services following clean code, security best practices, and TDD principles.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Architecture Overview, Template Files, Quality Attributes (NFRs), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Build production-grade Azure Cosmos DB NoSQL services following clean code, security best practices, and TDD principles.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash pip install azure-cosmos azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-cosmos azure-identity
```

#### Imported: Environment Variables

```bash
COSMOS_ENDPOINT=https://<account>.documents.azure.com:443/
COSMOS_DATABASE_NAME=<database-name>
COSMOS_CONTAINER_ID=<container-id>
# For emulator only (not production)
COSMOS_KEY=<emulator-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-cosmos-db-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-cosmos-db-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-cosmos-db-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-cosmos-db-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

### 1. Client Module Setup

Create a singleton Cosmos client with dual authentication:

```python
# db/cosmos.py
from azure.cosmos import CosmosClient
from azure.identity import DefaultAzureCredential
from starlette.concurrency import run_in_threadpool

_cosmos_container = None

def _is_emulator_endpoint(endpoint: str) -> bool:
    return "localhost" in endpoint or "127.0.0.1" in endpoint

async def get_container():
    global _cosmos_container
    if _cosmos_container is None:
        if _is_emulator_endpoint(settings.cosmos_endpoint):
            client = CosmosClient(
                url=settings.cosmos_endpoint,
                credential=settings.cosmos_key,
                connection_verify=False
            )
        else:
            client = CosmosClient(
                url=settings.cosmos_endpoint,
                credential=DefaultAzureCredential()
            )
        db = client.get_database_client(settings.cosmos_database_name)
        _cosmos_container = db.get_container_client(settings.cosmos_container_id)
    return _cosmos_container
```

**Full implementation**: See references/client-setup.md

### 2. Pydantic Model Hierarchy

Use five-tier model pattern for clean separation:

```python
class ProjectBase(BaseModel):           # Shared fields
    name: str = Field(..., min_length=1, max_length=200)

class ProjectCreate(ProjectBase):       # Creation request
    workspace_id: str = Field(..., alias="workspaceId")

class ProjectUpdate(BaseModel):         # Partial updates (all optional)
    name: Optional[str] = Field(None, min_length=1)

class Project(ProjectBase):             # API response
    id: str
    created_at: datetime = Field(..., alias="createdAt")

class ProjectInDB(Project):             # Internal with docType
    doc_type: str = "project"
```

### 3. Service Layer Pattern

```python
class ProjectService:
    def _use_cosmos(self) -> bool:
        return get_container() is not None

    async def get_by_id(self, project_id: str, workspace_id: str) -> Project | None:
        if not self._use_cosmos():
            return None
        doc = await get_document(project_id, partition_key=workspace_id)
        if doc is None:
            return None
        return self._doc_to_model(doc)
```

**Full patterns**: See references/service-layer.md

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- RBAC Authentication: Use DefaultAzureCredential in Azure — never store keys in code
- Emulator-Only Keys: Hardcode the well-known emulator key only for local development
- Parameterized Queries: Always use @parameter syntax — never string concatenation
- Partition Key Validation: Validate partition key access matches user authorization
- Single Responsibility: Client module handles connection; services handle business logic
- Graceful Degradation: Services return None/[] when Cosmos unavailable
- Consistent Naming: doctomodel(), modeltodoc(), usecosmos()

### Imported Operating Notes

#### Imported: Core Principles

### Security Requirements

1. **RBAC Authentication**: Use `DefaultAzureCredential` in Azure — never store keys in code
2. **Emulator-Only Keys**: Hardcode the well-known emulator key only for local development
3. **Parameterized Queries**: Always use `@parameter` syntax — never string concatenation
4. **Partition Key Validation**: Validate partition key access matches user authorization

### Clean Code Conventions

1. **Single Responsibility**: Client module handles connection; services handle business logic
2. **Graceful Degradation**: Services return `None`/`[]` when Cosmos unavailable
3. **Consistent Naming**: `_doc_to_model()`, `_model_to_doc()`, `_use_cosmos()`
4. **Type Hints**: Full typing on all public methods
5. **CamelCase Aliases**: Use `Field(alias="camelCase")` for JSON serialization

### TDD Requirements

Write tests BEFORE implementation using these patterns:

```python
@pytest.fixture
def mock_cosmos_container(mocker):
    container = mocker.MagicMock()
    mocker.patch("app.db.cosmos.get_container", return_value=container)
    return container

@pytest.mark.asyncio
async def test_get_project_by_id_returns_project(mock_cosmos_container):
    # Arrange
    mock_cosmos_container.read_item.return_value = {"id": "123", "name": "Test"}

    # Act
    result = await project_service.get_by_id("123", "workspace-1")

    # Assert
    assert result.id == "123"
    assert result.name == "Test"
```

**Full testing guide**: See references/testing.md

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-db-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Reference Files

| File | When to Read |
|------|--------------|
| references/client-setup.md | Setting up Cosmos client with dual auth, SSL config, singleton pattern |
| references/service-layer.md | Implementing full service class with CRUD, conversions, graceful degradation |
| references/testing.md | Writing pytest tests, mocking Cosmos, integration test setup |
| references/partitioning.md | Choosing partition keys, cross-partition queries, move operations |
| references/error-handling.md | Handling CosmosResourceNotFoundError, logging, HTTP error mapping |

#### Imported: Authentication

**DefaultAzureCredential (preferred)**:
```python
from azure.cosmos import CosmosClient
from azure.identity import DefaultAzureCredential

client = CosmosClient(
    url=os.environ["COSMOS_ENDPOINT"],
    credential=DefaultAzureCredential()
)
```

**Emulator (local development)**:
```python
from azure.cosmos import CosmosClient

client = CosmosClient(
    url="https://localhost:8081",
    credential=os.environ["COSMOS_KEY"],
    connection_verify=False
)
```

#### Imported: Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         FastAPI Router                          │
│  - Auth dependencies (get_current_user, get_current_user_required)
│  - HTTP error responses (HTTPException)                         │
└──────────────────────────────┬──────────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────────┐
│                        Service Layer                            │
│  - Business logic and validation                                │
│  - Document ↔ Model conversion                                  │
│  - Graceful degradation when Cosmos unavailable                 │
└──────────────────────────────┬──────────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────────┐
│                     Cosmos DB Client Module                     │
│  - Singleton container initialization                           │
│  - Dual auth: DefaultAzureCredential (Azure) / Key (emulator)   │
│  - Async wrapper via run_in_threadpool                          │
└─────────────────────────────────────────────────────────────────┘
```

#### Imported: Template Files

| File | Purpose |
|------|---------|
| assets/cosmos_client_template.py | Ready-to-use client module |
| assets/service_template.py | Service class skeleton |
| assets/conftest_template.py | pytest fixtures for Cosmos mocking |

#### Imported: Quality Attributes (NFRs)

### Reliability
- Graceful degradation when Cosmos unavailable
- Retry logic with exponential backoff for transient failures
- Connection pooling via singleton pattern

### Security
- Zero secrets in code (RBAC via DefaultAzureCredential)
- Parameterized queries prevent injection
- Partition key isolation enforces data boundaries

### Maintainability
- Five-tier model pattern enables schema evolution
- Service layer decouples business logic from storage
- Consistent patterns across all entity services

### Testability
- Dependency injection via `get_container()`
- Easy mocking with module-level globals
- Clear separation enables unit testing without Cosmos

### Performance
- Partition key queries avoid cross-partition scans
- Async wrapping prevents blocking FastAPI event loop
- Minimal document conversion overhead

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
