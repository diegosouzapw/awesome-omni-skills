---
name: azure-search-documents-ts
description: "Azure AI Search SDK for TypeScript workflow skill. Use this skill when the user needs Build search applications with vector, hybrid, and semantic search capabilities and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-search-documents-ts", "build", "search", "applications", "vector", "hybrid", "and", "semantic"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-14"
---

# Azure AI Search SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-search-documents-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure AI Search SDK for TypeScript Build search applications with vector, hybrid, and semantic search capabilities.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Filtering and Facets, Autocomplete and Suggestions, Batch Operations, Key Types.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Build search applications with vector, hybrid, and semantic search capabilities.
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

1. bash npm install @azure/search-documents @azure/identity ### Create Index with Vector Field typescript import { SearchIndex, SearchField, VectorSearch } from "@azure/search-documents"; const index: SearchIndex = { name: "products", fields: [ { name: "id", type: "Edm.String", key: true }, { name: "title", type: "Edm.String", searchable: true }, { name: "description", type: "Edm.String", searchable: true }, { name: "category", type: "Edm.String", filterable: true, facetable: true }, { name: "embedding", type: "Collection(Edm.Single)", searchable: true, vectorSearchDimensions: 1536, vectorSearchProfileName: "vector-profile", }, ], vectorSearch: { algorithms: [ { name: "hnsw-algorithm", kind: "hnsw" }, ], profiles: [ { name: "vector-profile", algorithmConfigurationName: "hnsw-algorithm" }, ], }, }; await indexClient.createOrUpdateIndex(index); ### Index Documents typescript const documents = [ { id: "1", title: "Widget", description: "A useful widget", category: "Tools", embedding: [...] }, { id: "2", title: "Gadget", description: "A cool gadget", category: "Electronics", embedding: [...] }, ]; const result = await searchClient.uploadDocuments(documents); console.log(Indexed ${result.results.length} documents); ### Full-Text Search typescript const results = await searchClient.search("widget", { select: ["id", "title", "description"], filter: "category eq 'Tools'", orderBy: ["title asc"], top: 10, }); for await (const result of results.results) { console.log(${result.document.title}: ${result.score}); } ### Vector Search typescript const queryVector = await getEmbedding("useful tool"); // Your embedding function const results = await searchClient.search("*", { vectorSearchOptions: { queries: [ { kind: "vector", vector: queryVector, fields: ["embedding"], kNearestNeighborsCount: 10, }, ], }, select: ["id", "title", "description"], }); for await (const result of results.results) { console.log(${result.document.title}: ${result.score}); } ### Hybrid Search (Text + Vector) typescript const queryVector = await getEmbedding("useful tool"); const results = await searchClient.search("tool", { vectorSearchOptions: { queries: [ { kind: "vector", vector: queryVector, fields: ["embedding"], kNearestNeighborsCount: 50, }, ], }, select: ["id", "title", "description"], top: 10, }); ### Semantic Search typescript // Index must have semantic configuration const index: SearchIndex = { name: "products", fields: [...], semanticSearch: { configurations: [ { name: "semantic-config", prioritizedFields: { titleField: { name: "title" }, contentFields: [{ name: "description" }], }, }, ], }, }; // Search with semantic ranking const results = await searchClient.search("best tool for the job", { queryType: "semantic", semanticSearchOptions: { configurationName: "semantic-config", captions: { captionType: "extractive" }, answers: { answerType: "extractive", count: 3 }, }, select: ["id", "title", "description"], }); for await (const result of results.results) { console.log(${result.document.title}); console.log( Caption: ${result.captions?.[0]?.text}); console.log( Reranker Score: ${result.rerankerScore}); }
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/search-documents @azure/identity
```

#### Imported: Core Workflow

### Create Index with Vector Field

```typescript
import { SearchIndex, SearchField, VectorSearch } from "@azure/search-documents";

const index: SearchIndex = {
  name: "products",
  fields: [
    { name: "id", type: "Edm.String", key: true },
    { name: "title", type: "Edm.String", searchable: true },
    { name: "description", type: "Edm.String", searchable: true },
    { name: "category", type: "Edm.String", filterable: true, facetable: true },
    {
      name: "embedding",
      type: "Collection(Edm.Single)",
      searchable: true,
      vectorSearchDimensions: 1536,
      vectorSearchProfileName: "vector-profile",
    },
  ],
  vectorSearch: {
    algorithms: [
      { name: "hnsw-algorithm", kind: "hnsw" },
    ],
    profiles: [
      { name: "vector-profile", algorithmConfigurationName: "hnsw-algorithm" },
    ],
  },
};

await indexClient.createOrUpdateIndex(index);
```

### Index Documents

```typescript
const documents = [
  { id: "1", title: "Widget", description: "A useful widget", category: "Tools", embedding: [...] },
  { id: "2", title: "Gadget", description: "A cool gadget", category: "Electronics", embedding: [...] },
];

const result = await searchClient.uploadDocuments(documents);
console.log(`Indexed ${result.results.length} documents`);
```

### Full-Text Search

```typescript
const results = await searchClient.search("widget", {
  select: ["id", "title", "description"],
  filter: "category eq 'Tools'",
  orderBy: ["title asc"],
  top: 10,
});

for await (const result of results.results) {
  console.log(`${result.document.title}: ${result.score}`);
}
```

### Vector Search

```typescript
const queryVector = await getEmbedding("useful tool"); // Your embedding function

const results = await searchClient.search("*", {
  vectorSearchOptions: {
    queries: [
      {
        kind: "vector",
        vector: queryVector,
        fields: ["embedding"],
        kNearestNeighborsCount: 10,
      },
    ],
  },
  select: ["id", "title", "description"],
});

for await (const result of results.results) {
  console.log(`${result.document.title}: ${result.score}`);
}
```

### Hybrid Search (Text + Vector)

```typescript
const queryVector = await getEmbedding("useful tool");

const results = await searchClient.search("tool", {
  vectorSearchOptions: {
    queries: [
      {
        kind: "vector",
        vector: queryVector,
        fields: ["embedding"],
        kNearestNeighborsCount: 50,
      },
    ],
  },
  select: ["id", "title", "description"],
  top: 10,
});
```

### Semantic Search

```typescript
// Index must have semantic configuration
const index: SearchIndex = {
  name: "products",
  fields: [...],
  semanticSearch: {
    configurations: [
      {
        name: "semantic-config",
        prioritizedFields: {
          titleField: { name: "title" },
          contentFields: [{ name: "description" }],
        },
      },
    ],
  },
};

// Search with semantic ranking
const results = await searchClient.search("best tool for the job", {
  queryType: "semantic",
  semanticSearchOptions: {
    configurationName: "semantic-config",
    captions: { captionType: "extractive" },
    answers: { answerType: "extractive", count: 3 },
  },
  select: ["id", "title", "description"],
});

for await (const result of results.results) {
  console.log(`${result.document.title}`);
  console.log(`  Caption: ${result.captions?.[0]?.text}`);
  console.log(`  Reranker Score: ${result.rerankerScore}`);
}
```

#### Imported: Environment Variables

```bash
AZURE_SEARCH_ENDPOINT=https://<service-name>.search.windows.net
AZURE_SEARCH_INDEX_NAME=my-index
AZURE_SEARCH_ADMIN_KEY=<admin-key>  # Optional if using Entra ID
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-search-documents-ts to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-search-documents-ts against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-search-documents-ts for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-search-documents-ts using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use hybrid search - Combine vector + text for best results
- Enable semantic ranking - Improves relevance for natural language queries
- Batch document uploads - Use uploadDocuments with arrays, not single docs
- Use filters for security - Implement document-level security with filters
- Index incrementally - Use mergeOrUploadDocuments for updates
- Monitor query performance - Use includeTotalCount: true sparingly in production
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use hybrid search** - Combine vector + text for best results
2. **Enable semantic ranking** - Improves relevance for natural language queries
3. **Batch document uploads** - Use `uploadDocuments` with arrays, not single docs
4. **Use filters for security** - Implement document-level security with filters
5. **Index incrementally** - Use `mergeOrUploadDocuments` for updates
6. **Monitor query performance** - Use `includeTotalCount: true` sparingly in production

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-search-documents-ts`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-arizeaiobservabilityeval-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Authentication

```typescript
import { SearchClient, SearchIndexClient } from "@azure/search-documents";
import { DefaultAzureCredential } from "@azure/identity";

const endpoint = process.env.AZURE_SEARCH_ENDPOINT!;
const indexName = process.env.AZURE_SEARCH_INDEX_NAME!;
const credential = new DefaultAzureCredential();

// For searching
const searchClient = new SearchClient(endpoint, indexName, credential);

// For index management
const indexClient = new SearchIndexClient(endpoint, credential);
```

#### Imported: Filtering and Facets

```typescript
// Filter syntax
const results = await searchClient.search("*", {
  filter: "category eq 'Electronics' and price lt 100",
  facets: ["category,count:10", "brand"],
});

// Access facets
for (const [facetName, facetResults] of Object.entries(results.facets || {})) {
  console.log(`${facetName}:`);
  for (const facet of facetResults) {
    console.log(`  ${facet.value}: ${facet.count}`);
  }
}
```

#### Imported: Autocomplete and Suggestions

```typescript
// Create suggester in index
const index: SearchIndex = {
  name: "products",
  fields: [...],
  suggesters: [
    { name: "sg", sourceFields: ["title", "description"] },
  ],
};

// Autocomplete
const autocomplete = await searchClient.autocomplete("wid", "sg", {
  mode: "twoTerms",
  top: 5,
});

// Suggestions
const suggestions = await searchClient.suggest("wid", "sg", {
  select: ["title"],
  top: 5,
});
```

#### Imported: Batch Operations

```typescript
// Batch upload, merge, delete
const batch = [
  { upload: { id: "1", title: "New Item" } },
  { merge: { id: "2", title: "Updated Title" } },
  { delete: { id: "3" } },
];

const result = await searchClient.indexDocuments({ actions: batch });
```

#### Imported: Key Types

```typescript
import {
  SearchClient,
  SearchIndexClient,
  SearchIndexerClient,
  SearchIndex,
  SearchField,
  SearchOptions,
  VectorSearch,
  SemanticSearch,
  SearchIterator,
} from "@azure/search-documents";
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
