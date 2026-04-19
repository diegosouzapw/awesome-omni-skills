---
name: azure-cosmos-rust
description: "Azure Cosmos DB SDK for Rust workflow skill. Use this skill when the user needs Azure Cosmos DB SDK for Rust (NoSQL API). Use for document CRUD, queries, containers, and globally distributed data and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-cosmos-rust", "azure", "cosmos", "sdk", "for", "rust", "nosql", "api"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Cosmos DB SDK for Rust

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-rust` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Cosmos DB SDK for Rust Client library for Azure Cosmos DB NoSQL API — globally distributed, multi-model database.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Key Auth (Optional), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Cosmos DB SDK for Rust (NoSQL API). Use for document CRUD, queries, containers, and globally distributed data.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. sh cargo add azuredatacosmos azureidentity ### Get Database and Container Clients rust let database = client.databaseclient("myDatabase"); let container = database.containerclient("myContainer"); ### Create Item rust use serde::{Serialize, Deserialize}; #[derive(Serialize, Deserialize)] struct Item { pub id: String, pub partitionkey: String, pub value: String, } let item = Item { id: "1".into(), partitionkey: "partition1".into(), value: "hello".into(), }; container.createitem("partition1", item, None).await?; ### Read Item rust let response = container.readitem("partition1", "1", None).await?; let item: Item = response.intomodel()?; ### Replace Item rust let mut item: Item = container.readitem("partition1", "1", None).await?.intomodel()?; item.value = "updated".into(); container.replaceitem("partition1", "1", item, None).await?; ### Patch Item rust use azuredatacosmos::models::PatchDocument; let patch = PatchDocument::default() .withadd("/newField", "newValue")?
2. .withremove("/oldField")?; container.patchitem("partition1", "1", patch, None).await?; ### Delete Item rust container.delete_item("partition1", "1", None).await?; ``
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview and provenance files before loading any copied upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the upstream expectations and the evidence you can point to in the copied files.

### Imported Workflow Notes

#### Imported: Installation

```sh
cargo add azure_data_cosmos azure_identity
```

#### Imported: Core Workflow

### Get Database and Container Clients

```rust
let database = client.database_client("myDatabase");
let container = database.container_client("myContainer");
```

### Create Item

```rust
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
struct Item {
    pub id: String,
    pub partition_key: String,
    pub value: String,
}

let item = Item {
    id: "1".into(),
    partition_key: "partition1".into(),
    value: "hello".into(),
};

container.create_item("partition1", item, None).await?;
```

### Read Item

```rust
let response = container.read_item("partition1", "1", None).await?;
let item: Item = response.into_model()?;
```

### Replace Item

```rust
let mut item: Item = container.read_item("partition1", "1", None).await?.into_model()?;
item.value = "updated".into();

container.replace_item("partition1", "1", item, None).await?;
```

### Patch Item

```rust
use azure_data_cosmos::models::PatchDocument;

let patch = PatchDocument::default()
    .with_add("/newField", "newValue")?
    .with_remove("/oldField")?;

container.patch_item("partition1", "1", patch, None).await?;
```

### Delete Item

```rust
container.delete_item("partition1", "1", None).await?;
```

#### Imported: Environment Variables

```bash
COSMOS_ENDPOINT=https://<account>.documents.azure.com:443/
COSMOS_DATABASE=mydb
COSMOS_CONTAINER=mycontainer
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-cosmos-rust to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-cosmos-rust against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-cosmos-rust for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-cosmos-rust using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always specify partition key — required for point reads and writes
- Use into_model()? — to deserialize responses into your types
- Derive Serialize and Deserialize — for all document types
- Use Entra ID auth — prefer DeveloperToolsCredential over key auth
- Reuse client instances — clients are thread-safe and reusable
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Always specify partition key** — required for point reads and writes
2. **Use `into_model()?`** — to deserialize responses into your types
3. **Derive `Serialize` and `Deserialize`** — for all document types
4. **Use Entra ID auth** — prefer `DeveloperToolsCredential` over key auth
5. **Reuse client instances** — clients are thread-safe and reusable

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-rust`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Links

| Resource | Link |
|----------|------|
| API Reference | https://docs.rs/azure_data_cosmos |
| Source Code | https://github.com/Azure/azure-sdk-for-rust/tree/main/sdk/cosmos/azure_data_cosmos |
| crates.io | https://crates.io/crates/azure_data_cosmos |

#### Imported: Authentication

```rust
use azure_identity::DeveloperToolsCredential;
use azure_data_cosmos::CosmosClient;

let credential = DeveloperToolsCredential::new(None)?;
let client = CosmosClient::new(
    "https://<account>.documents.azure.com:443/",
    credential.clone(),
    None,
)?;
```

#### Imported: Client Hierarchy

| Client | Purpose | Get From |
|--------|---------|----------|
| `CosmosClient` | Account-level operations | Direct instantiation |
| `DatabaseClient` | Database operations | `client.database_client()` |
| `ContainerClient` | Container/item operations | `database.container_client()` |

#### Imported: Key Auth (Optional)

Enable key-based authentication with feature flag:

```sh
cargo add azure_data_cosmos --features key_auth
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
