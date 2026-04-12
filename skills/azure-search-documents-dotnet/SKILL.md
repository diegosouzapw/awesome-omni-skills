---
name: azure-search-documents-dotnet
description: "Azure.Search.Documents (.NET) workflow skill. Use this skill when the user needs Azure AI Search SDK for .NET (Azure.Search.Documents). Use for building search applications with full-text, vector, semantic, and hybrid search and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["azure-search-documents-dotnet", "azure", "search", "sdk", "for", "net", "documents", "use"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure.Search.Documents (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-search-documents-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.Search.Documents (.NET) Build search applications with full-text, vector, semantic, and hybrid search capabilities.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Selection, Document Operations, Search Patterns, Vector Search.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Search SDK for .NET (Azure.Search.Documents). Use for building search applications with full-text, vector, semantic, and hybrid search.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash dotnet add package Azure.Search.Documents dotnet add package Azure.Identity Current Versions: Stable v11.7.0, Preview v11.8.0-beta.1
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.Search.Documents
dotnet add package Azure.Identity
```

**Current Versions**: Stable v11.7.0, Preview v11.8.0-beta.1

#### Imported: Environment Variables

```bash
SEARCH_ENDPOINT=https://<search-service>.search.windows.net
SEARCH_INDEX_NAME=<index-name>
# For API key auth (not recommended for production)
SEARCH_API_KEY=<api-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-search-documents-dotnet to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-search-documents-dotnet/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-search-documents-dotnet/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-search-documents-dotnet using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use DefaultAzureCredential over API keys for production
- Use FieldBuilder with model attributes for type-safe index definitions
- Use CreateOrUpdateIndexAsync for idempotent index creation
- Batch document operations for better throughput
- Use Select to return only needed fields
- Configure semantic search for natural language queries
- Combine vector + keyword + semantic for best relevance

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `DefaultAzureCredential`** over API keys for production
2. **Use `FieldBuilder`** with model attributes for type-safe index definitions
3. **Use `CreateOrUpdateIndexAsync`** for idempotent index creation
4. **Batch document operations** for better throughput
5. **Use `Select`** to return only needed fields
6. **Configure semantic search** for natural language queries
7. **Combine vector + keyword + semantic** for best relevance

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-search-documents-dotnet`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Index Creation

### Using FieldBuilder (Recommended)

```csharp
using Azure.Search.Documents.Indexes;
using Azure.Search.Documents.Indexes.Models;

// Define model with attributes
public class Hotel
{
    [SimpleField(IsKey = true, IsFilterable = true)]
    public string HotelId { get; set; }

    [SearchableField(IsSortable = true)]
    public string HotelName { get; set; }

    [SearchableField(AnalyzerName = LexicalAnalyzerName.EnLucene)]
    public string Description { get; set; }

    [SimpleField(IsFilterable = true, IsSortable = true, IsFacetable = true)]
    public double? Rating { get; set; }

    [VectorSearchField(VectorSearchDimensions = 1536, VectorSearchProfileName = "vector-profile")]
    public ReadOnlyMemory<float>? DescriptionVector { get; set; }
}

// Create index
var indexClient = new SearchIndexClient(endpoint, credential);
var fieldBuilder = new FieldBuilder();
var fields = fieldBuilder.Build(typeof(Hotel));

var index = new SearchIndex("hotels")
{
    Fields = fields,
    VectorSearch = new VectorSearch
    {
        Profiles = { new VectorSearchProfile("vector-profile", "hnsw-algo") },
        Algorithms = { new HnswAlgorithmConfiguration("hnsw-algo") }
    }
};

await indexClient.CreateOrUpdateIndexAsync(index);
```

### Manual Field Definition

```csharp
var index = new SearchIndex("hotels")
{
    Fields =
    {
        new SimpleField("hotelId", SearchFieldDataType.String) { IsKey = true, IsFilterable = true },
        new SearchableField("hotelName") { IsSortable = true },
        new SearchableField("description") { AnalyzerName = LexicalAnalyzerName.EnLucene },
        new SimpleField("rating", SearchFieldDataType.Double) { IsFilterable = true, IsSortable = true },
        new SearchField("descriptionVector", SearchFieldDataType.Collection(SearchFieldDataType.Single))
        {
            VectorSearchDimensions = 1536,
            VectorSearchProfileName = "vector-profile"
        }
    }
};
```

#### Imported: Field Attributes Reference

| Attribute | Purpose |
|-----------|---------|
| `SimpleField` | Non-searchable field (filters, sorting, facets) |
| `SearchableField` | Full-text searchable field |
| `VectorSearchField` | Vector embedding field |
| `IsKey = true` | Document key (required, one per index) |
| `IsFilterable = true` | Enable $filter expressions |
| `IsSortable = true` | Enable $orderby |
| `IsFacetable = true` | Enable faceted navigation |
| `IsHidden = true` | Exclude from results |
| `AnalyzerName` | Specify text analyzer |

#### Imported: Reference Files

| File | Contents |
|------|----------|
| references/vector-search.md | Vector search, hybrid search, vectorizers |
| references/semantic-search.md | Semantic ranking, captions, answers |

#### Imported: Authentication

**DefaultAzureCredential (preferred)**:
```csharp
using Azure.Identity;
using Azure.Search.Documents;

var credential = new DefaultAzureCredential();
var client = new SearchClient(
    new Uri(Environment.GetEnvironmentVariable("SEARCH_ENDPOINT")),
    Environment.GetEnvironmentVariable("SEARCH_INDEX_NAME"),
    credential);
```

**API Key**:
```csharp
using Azure;
using Azure.Search.Documents;

var credential = new AzureKeyCredential(
    Environment.GetEnvironmentVariable("SEARCH_API_KEY"));
var client = new SearchClient(
    new Uri(Environment.GetEnvironmentVariable("SEARCH_ENDPOINT")),
    Environment.GetEnvironmentVariable("SEARCH_INDEX_NAME"),
    credential);
```

#### Imported: Client Selection

| Client | Purpose |
|--------|---------|
| `SearchClient` | Query indexes, upload/update/delete documents |
| `SearchIndexClient` | Create/manage indexes, synonym maps |
| `SearchIndexerClient` | Manage indexers, skillsets, data sources |

#### Imported: Document Operations

```csharp
var searchClient = new SearchClient(endpoint, indexName, credential);

// Upload (add new)
var hotels = new[] { new Hotel { HotelId = "1", HotelName = "Hotel A" } };
await searchClient.UploadDocumentsAsync(hotels);

// Merge (update existing)
await searchClient.MergeDocumentsAsync(hotels);

// Merge or Upload (upsert)
await searchClient.MergeOrUploadDocumentsAsync(hotels);

// Delete
await searchClient.DeleteDocumentsAsync("hotelId", new[] { "1", "2" });

// Batch operations
var batch = IndexDocumentsBatch.Create(
    IndexDocumentsAction.Upload(hotel1),
    IndexDocumentsAction.Merge(hotel2),
    IndexDocumentsAction.Delete(hotel3));
await searchClient.IndexDocumentsAsync(batch);
```

#### Imported: Search Patterns

### Basic Search

```csharp
var options = new SearchOptions
{
    Filter = "rating ge 4",
    OrderBy = { "rating desc" },
    Select = { "hotelId", "hotelName", "rating" },
    Size = 10,
    Skip = 0,
    IncludeTotalCount = true
};

SearchResults<Hotel> results = await searchClient.SearchAsync<Hotel>("luxury", options);

Console.WriteLine($"Total: {results.TotalCount}");
await foreach (SearchResult<Hotel> result in results.GetResultsAsync())
{
    Console.WriteLine($"{result.Document.HotelName} (Score: {result.Score})");
}
```

### Faceted Search

```csharp
var options = new SearchOptions
{
    Facets = { "rating,count:5", "category" }
};

var results = await searchClient.SearchAsync<Hotel>("*", options);

foreach (var facet in results.Value.Facets["rating"])
{
    Console.WriteLine($"Rating {facet.Value}: {facet.Count}");
}
```

### Autocomplete and Suggestions

```csharp
// Autocomplete
var autocompleteOptions = new AutocompleteOptions { Mode = AutocompleteMode.OneTermWithContext };
var autocomplete = await searchClient.AutocompleteAsync("lux", "suggester-name", autocompleteOptions);

// Suggestions
var suggestOptions = new SuggestOptions { UseFuzzyMatching = true };
var suggestions = await searchClient.SuggestAsync<Hotel>("lux", "suggester-name", suggestOptions);
```

#### Imported: Vector Search

See references/vector-search.md for detailed patterns.

```csharp
using Azure.Search.Documents.Models;

// Pure vector search
var vectorQuery = new VectorizedQuery(embedding)
{
    KNearestNeighborsCount = 5,
    Fields = { "descriptionVector" }
};

var options = new SearchOptions
{
    VectorSearch = new VectorSearchOptions
    {
        Queries = { vectorQuery }
    }
};

var results = await searchClient.SearchAsync<Hotel>(null, options);
```

#### Imported: Semantic Search

See references/semantic-search.md for detailed patterns.

```csharp
var options = new SearchOptions
{
    QueryType = SearchQueryType.Semantic,
    SemanticSearch = new SemanticSearchOptions
    {
        SemanticConfigurationName = "my-semantic-config",
        QueryCaption = new QueryCaption(QueryCaptionType.Extractive),
        QueryAnswer = new QueryAnswer(QueryAnswerType.Extractive)
    }
};

var results = await searchClient.SearchAsync<Hotel>("best hotel for families", options);

// Access semantic answers
foreach (var answer in results.Value.SemanticSearch.Answers)
{
    Console.WriteLine($"Answer: {answer.Text} (Score: {answer.Score})");
}

// Access captions
await foreach (var result in results.Value.GetResultsAsync())
{
    var caption = result.SemanticSearch?.Captions?.FirstOrDefault();
    Console.WriteLine($"Caption: {caption?.Text}");
}
```

#### Imported: Hybrid Search (Vector + Keyword + Semantic)

```csharp
var vectorQuery = new VectorizedQuery(embedding)
{
    KNearestNeighborsCount = 5,
    Fields = { "descriptionVector" }
};

var options = new SearchOptions
{
    QueryType = SearchQueryType.Semantic,
    SemanticSearch = new SemanticSearchOptions
    {
        SemanticConfigurationName = "my-semantic-config"
    },
    VectorSearch = new VectorSearchOptions
    {
        Queries = { vectorQuery }
    }
};

// Combines keyword search, vector search, and semantic ranking
var results = await searchClient.SearchAsync<Hotel>("luxury beachfront", options);
```

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var results = await searchClient.SearchAsync<Hotel>("query");
}
catch (RequestFailedException ex) when (ex.Status == 404)
{
    Console.WriteLine("Index not found");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Search error: {ex.Status} - {ex.ErrorCode}: {ex.Message}");
}
```
