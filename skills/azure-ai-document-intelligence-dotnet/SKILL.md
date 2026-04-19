---
name: azure-ai-document-intelligence-dotnet
description: "Azure.AI.DocumentIntelligence (.NET) workflow skill. Use this skill when the user needs Azure AI Document Intelligence SDK for .NET. Extract text, tables, and structured data from documents using prebuilt and custom models and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["azure-ai-document-intelligence-dotnet", "azure", "document", "intelligence", "sdk", "for", "net", "extract"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Azure.AI.DocumentIntelligence (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-document-intelligence-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.AI.DocumentIntelligence (.NET) Extract text, tables, and structured data from documents using prebuilt and custom models.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Types, Prebuilt Models, Build Modes, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Document Intelligence SDK for .NET. Extract text, tables, and structured data from documents using prebuilt and custom models.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. `bash dotnet add package Azure.AI.DocumentIntelligence dotnet add package Azure.Identity Current Version: v1.0.0 (GA) ### 1.
2. Analyze Invoice csharp using Azure.AI.DocumentIntelligence; Uri invoiceUri = new Uri("https://example.com/invoice.pdf"); Operation<AnalyzeResult> operation = await client.AnalyzeDocumentAsync( WaitUntil.Completed, "prebuilt-invoice", invoiceUri); AnalyzeResult result = operation.Value; foreach (AnalyzedDocument document in result.Documents) { if (document.Fields.TryGetValue("VendorName", out DocumentField vendorNameField) && vendorNameField.FieldType == DocumentFieldType.String) { string vendorName = vendorNameField.ValueString; Console.WriteLine($"Vendor Name: '{vendorName}', confidence: {vendorNameField.Confidence}"); } if (document.Fields.TryGetValue("InvoiceTotal", out DocumentField invoiceTotalField) && invoiceTotalField.FieldType == DocumentFieldType.Currency) { CurrencyValue invoiceTotal = invoiceTotalField.ValueCurrency; Console.WriteLine($"Invoice Total: '{invoiceTotal.CurrencySymbol}{invoiceTotal.Amount}'"); } // Extract line items if (document.Fields.TryGetValue("Items", out DocumentField itemsField) && itemsField.FieldType == DocumentFieldType.List) { foreach (DocumentField item in itemsField.ValueList) { var itemFields = item.ValueDictionary; if (itemFields.TryGetValue("Description", out DocumentField descField)) Console.WriteLine($" Item: {descField.ValueString}"); } } } ### 2.
3. Extract Layout (Text, Tables, Structure) csharp Uri fileUri = new Uri("https://example.com/document.pdf"); Operation<AnalyzeResult> operation = await client.AnalyzeDocumentAsync( WaitUntil.Completed, "prebuilt-layout", fileUri); AnalyzeResult result = operation.Value; // Extract text by page foreach (DocumentPage page in result.Pages) { Console.WriteLine($"Page {page.PageNumber}: {page.Lines.Count} lines, {page.Words.Count} words"); foreach (DocumentLine line in page.Lines) { Console.WriteLine($" Line: '{line.Content}'"); } } // Extract tables foreach (DocumentTable table in result.Tables) { Console.WriteLine($"Table: {table.RowCount} rows x {table.ColumnCount} columns"); foreach (DocumentTableCell cell in table.Cells) { Console.WriteLine($" Cell ({cell.RowIndex}, {cell.ColumnIndex}): {cell.Content}"); } } ### 3.
4. Analyze Receipt csharp Operation<AnalyzeResult> operation = await client.AnalyzeDocumentAsync( WaitUntil.Completed, "prebuilt-receipt", receiptUri); AnalyzeResult result = operation.Value; foreach (AnalyzedDocument document in result.Documents) { if (document.Fields.TryGetValue("MerchantName", out DocumentField merchantField)) Console.WriteLine($"Merchant: {merchantField.ValueString}"); if (document.Fields.TryGetValue("Total", out DocumentField totalField)) Console.WriteLine($"Total: {totalField.ValueCurrency.Amount}"); if (document.Fields.TryGetValue("TransactionDate", out DocumentField dateField)) Console.WriteLine($"Date: {dateField.ValueDate}"); } ### 4.
5. Build Custom Model csharp var adminClient = new DocumentIntelligenceAdministrationClient( new Uri(endpoint), new AzureKeyCredential(apiKey)); string modelId = "my-custom-model"; Uri blobContainerUri = new Uri("<blob-container-sas-url>"); var blobSource = new BlobContentSource(blobContainerUri); var options = new BuildDocumentModelOptions(modelId, DocumentBuildMode.Template, blobSource); Operation<DocumentModelDetails> operation = await adminClient.BuildDocumentModelAsync( WaitUntil.Completed, options); DocumentModelDetails model = operation.Value; Console.WriteLine($"Model ID: {model.ModelId}"); Console.WriteLine($"Created: {model.CreatedOn}"); foreach (var docType in model.DocumentTypes) { Console.WriteLine($"Document type: {docType.Key}"); foreach (var field in docType.Value.FieldSchema) { Console.WriteLine($" Field: {field.Key}, Confidence: {docType.Value.FieldConfidence[field.Key]}"); } } ### 5.
6. Build Document Classifier csharp string classifierId = "my-classifier"; Uri blobContainerUri = new Uri("<blob-container-sas-url>"); var sourceA = new BlobContentSource(blobContainerUri) { Prefix = "TypeA/train" }; var sourceB = new BlobContentSource(blobContainerUri) { Prefix = "TypeB/train" }; var docTypes = new Dictionary<string, ClassifierDocumentTypeDetails>() { { "TypeA", new ClassifierDocumentTypeDetails(sourceA) }, { "TypeB", new ClassifierDocumentTypeDetails(sourceB) } }; var options = new BuildClassifierOptions(classifierId, docTypes); Operation<DocumentClassifierDetails> operation = await adminClient.BuildClassifierAsync( WaitUntil.Completed, options); DocumentClassifierDetails classifier = operation.Value; Console.WriteLine($"Classifier ID: {classifier.ClassifierId}"); ### 6.
7. Classify Document csharp string classifierId = "my-classifier"; Uri documentUri = new Uri("https://example.com/document.pdf"); var options = new ClassifyDocumentOptions(classifierId, documentUri); Operation<AnalyzeResult> operation = await client.ClassifyDocumentAsync( WaitUntil.Completed, options); AnalyzeResult result = operation.Value; foreach (AnalyzedDocument document in result.Documents) { Console.WriteLine($"Document type: {document.DocumentType}, confidence: {document.Confidence}"); } ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.AI.DocumentIntelligence
dotnet add package Azure.Identity
```

**Current Version**: v1.0.0 (GA)

#### Imported: Core Workflows

### 1. Analyze Invoice

```csharp
using Azure.AI.DocumentIntelligence;

Uri invoiceUri = new Uri("https://example.com/invoice.pdf");

Operation<AnalyzeResult> operation = await client.AnalyzeDocumentAsync(
    WaitUntil.Completed, 
    "prebuilt-invoice", 
    invoiceUri);

AnalyzeResult result = operation.Value;

foreach (AnalyzedDocument document in result.Documents)
{
    if (document.Fields.TryGetValue("VendorName", out DocumentField vendorNameField)
        && vendorNameField.FieldType == DocumentFieldType.String)
    {
        string vendorName = vendorNameField.ValueString;
        Console.WriteLine($"Vendor Name: '{vendorName}', confidence: {vendorNameField.Confidence}");
    }

    if (document.Fields.TryGetValue("InvoiceTotal", out DocumentField invoiceTotalField)
        && invoiceTotalField.FieldType == DocumentFieldType.Currency)
    {
        CurrencyValue invoiceTotal = invoiceTotalField.ValueCurrency;
        Console.WriteLine($"Invoice Total: '{invoiceTotal.CurrencySymbol}{invoiceTotal.Amount}'");
    }
    
    // Extract line items
    if (document.Fields.TryGetValue("Items", out DocumentField itemsField)
        && itemsField.FieldType == DocumentFieldType.List)
    {
        foreach (DocumentField item in itemsField.ValueList)
        {
            var itemFields = item.ValueDictionary;
            if (itemFields.TryGetValue("Description", out DocumentField descField))
                Console.WriteLine($"  Item: {descField.ValueString}");
        }
    }
}
```

### 2. Extract Layout (Text, Tables, Structure)

```csharp
Uri fileUri = new Uri("https://example.com/document.pdf");

Operation<AnalyzeResult> operation = await client.AnalyzeDocumentAsync(
    WaitUntil.Completed, 
    "prebuilt-layout", 
    fileUri);

AnalyzeResult result = operation.Value;

// Extract text by page
foreach (DocumentPage page in result.Pages)
{
    Console.WriteLine($"Page {page.PageNumber}: {page.Lines.Count} lines, {page.Words.Count} words");
    
    foreach (DocumentLine line in page.Lines)
    {
        Console.WriteLine($"  Line: '{line.Content}'");
    }
}

// Extract tables
foreach (DocumentTable table in result.Tables)
{
    Console.WriteLine($"Table: {table.RowCount} rows x {table.ColumnCount} columns");
    foreach (DocumentTableCell cell in table.Cells)
    {
        Console.WriteLine($"  Cell ({cell.RowIndex}, {cell.ColumnIndex}): {cell.Content}");
    }
}
```

### 3. Analyze Receipt

```csharp
Operation<AnalyzeResult> operation = await client.AnalyzeDocumentAsync(
    WaitUntil.Completed, 
    "prebuilt-receipt", 
    receiptUri);

AnalyzeResult result = operation.Value;

foreach (AnalyzedDocument document in result.Documents)
{
    if (document.Fields.TryGetValue("MerchantName", out DocumentField merchantField))
        Console.WriteLine($"Merchant: {merchantField.ValueString}");
        
    if (document.Fields.TryGetValue("Total", out DocumentField totalField))
        Console.WriteLine($"Total: {totalField.ValueCurrency.Amount}");
        
    if (document.Fields.TryGetValue("TransactionDate", out DocumentField dateField))
        Console.WriteLine($"Date: {dateField.ValueDate}");
}
```

### 4. Build Custom Model

```csharp
var adminClient = new DocumentIntelligenceAdministrationClient(
    new Uri(endpoint), 
    new AzureKeyCredential(apiKey));

string modelId = "my-custom-model";
Uri blobContainerUri = new Uri("<blob-container-sas-url>");

var blobSource = new BlobContentSource(blobContainerUri);
var options = new BuildDocumentModelOptions(modelId, DocumentBuildMode.Template, blobSource);

Operation<DocumentModelDetails> operation = await adminClient.BuildDocumentModelAsync(
    WaitUntil.Completed, 
    options);

DocumentModelDetails model = operation.Value;

Console.WriteLine($"Model ID: {model.ModelId}");
Console.WriteLine($"Created: {model.CreatedOn}");

foreach (var docType in model.DocumentTypes)
{
    Console.WriteLine($"Document type: {docType.Key}");
    foreach (var field in docType.Value.FieldSchema)
    {
        Console.WriteLine($"  Field: {field.Key}, Confidence: {docType.Value.FieldConfidence[field.Key]}");
    }
}
```

### 5. Build Document Classifier

```csharp
string classifierId = "my-classifier";
Uri blobContainerUri = new Uri("<blob-container-sas-url>");

var sourceA = new BlobContentSource(blobContainerUri) { Prefix = "TypeA/train" };
var sourceB = new BlobContentSource(blobContainerUri) { Prefix = "TypeB/train" };

var docTypes = new Dictionary<string, ClassifierDocumentTypeDetails>()
{
    { "TypeA", new ClassifierDocumentTypeDetails(sourceA) },
    { "TypeB", new ClassifierDocumentTypeDetails(sourceB) }
};

var options = new BuildClassifierOptions(classifierId, docTypes);

Operation<DocumentClassifierDetails> operation = await adminClient.BuildClassifierAsync(
    WaitUntil.Completed, 
    options);

DocumentClassifierDetails classifier = operation.Value;
Console.WriteLine($"Classifier ID: {classifier.ClassifierId}");
```

### 6. Classify Document

```csharp
string classifierId = "my-classifier";
Uri documentUri = new Uri("https://example.com/document.pdf");

var options = new ClassifyDocumentOptions(classifierId, documentUri);

Operation<AnalyzeResult> operation = await client.ClassifyDocumentAsync(
    WaitUntil.Completed, 
    options);

AnalyzeResult result = operation.Value;

foreach (AnalyzedDocument document in result.Documents)
{
    Console.WriteLine($"Document type: {document.DocumentType}, confidence: {document.Confidence}");
}
```

### 7. Manage Models

```csharp
// Get resource details
DocumentIntelligenceResourceDetails resourceDetails = await adminClient.GetResourceDetailsAsync();
Console.WriteLine($"Custom models: {resourceDetails.CustomDocumentModels.Count}/{resourceDetails.CustomDocumentModels.Limit}");

// Get specific model
DocumentModelDetails model = await adminClient.GetModelAsync("my-model-id");
Console.WriteLine($"Model: {model.ModelId}, Created: {model.CreatedOn}");

// List models
await foreach (DocumentModelDetails modelItem in adminClient.GetModelsAsync())
{
    Console.WriteLine($"Model: {modelItem.ModelId}");
}

// Delete model
await adminClient.DeleteModelAsync("my-model-id");
```

#### Imported: Environment Variables

```bash
DOCUMENT_INTELLIGENCE_ENDPOINT=https://<resource-name>.cognitiveservices.azure.com/
DOCUMENT_INTELLIGENCE_API_KEY=<your-api-key>
BLOB_CONTAINER_SAS_URL=https://<storage>.blob.core.windows.net/<container>?<sas-token>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-document-intelligence-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-document-intelligence-dotnet against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-document-intelligence-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-document-intelligence-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential for production
- Reuse client instances — clients are thread-safe
- Handle long-running operations — Use WaitUntil.Completed for simplicity
- Check field confidence — Always verify Confidence property
- Use appropriate model — Prebuilt for common docs, custom for specialized
- Use custom subdomain — Required for Entra ID authentication
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** for production
2. **Reuse client instances** — clients are thread-safe
3. **Handle long-running operations** — Use `WaitUntil.Completed` for simplicity
4. **Check field confidence** — Always verify `Confidence` property
5. **Use appropriate model** — Prebuilt for common docs, custom for specialized
6. **Use custom subdomain** — Required for Entra ID authentication

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-document-intelligence-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Key Types Reference

| Type | Description |
|------|-------------|
| `DocumentIntelligenceClient` | Main client for analysis |
| `DocumentIntelligenceAdministrationClient` | Model management |
| `AnalyzeResult` | Result of document analysis |
| `AnalyzedDocument` | Single document within result |
| `DocumentField` | Extracted field with value and confidence |
| `DocumentFieldType` | String, Date, Number, Currency, etc. |
| `DocumentPage` | Page info (lines, words, selection marks) |
| `DocumentTable` | Extracted table with cells |
| `DocumentModelDetails` | Custom model metadata |
| `BlobContentSource` | Training data source |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.AI.DocumentIntelligence |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.ai.documentintelligence |
| GitHub Samples | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/documentintelligence/Azure.AI.DocumentIntelligence/samples |
| Document Intelligence Studio | https://documentintelligence.ai.azure.com/ |
| Prebuilt Models | https://aka.ms/azsdk/formrecognizer/models |

#### Imported: Authentication

### Microsoft Entra ID (Recommended)

```csharp
using Azure.Identity;
using Azure.AI.DocumentIntelligence;

string endpoint = Environment.GetEnvironmentVariable("DOCUMENT_INTELLIGENCE_ENDPOINT");
var credential = new DefaultAzureCredential();
var client = new DocumentIntelligenceClient(new Uri(endpoint), credential);
```

> **Note**: Entra ID requires a **custom subdomain** (e.g., `https://<resource-name>.cognitiveservices.azure.com/`), not a regional endpoint.

### API Key

```csharp
string endpoint = Environment.GetEnvironmentVariable("DOCUMENT_INTELLIGENCE_ENDPOINT");
string apiKey = Environment.GetEnvironmentVariable("DOCUMENT_INTELLIGENCE_API_KEY");
var client = new DocumentIntelligenceClient(new Uri(endpoint), new AzureKeyCredential(apiKey));
```

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `DocumentIntelligenceClient` | Analyze documents, classify documents |
| `DocumentIntelligenceAdministrationClient` | Build/manage custom models and classifiers |

#### Imported: Prebuilt Models

| Model ID | Description |
|----------|-------------|
| `prebuilt-read` | Extract text, languages, handwriting |
| `prebuilt-layout` | Extract text, tables, selection marks, structure |
| `prebuilt-invoice` | Extract invoice fields (vendor, items, totals) |
| `prebuilt-receipt` | Extract receipt fields (merchant, items, total) |
| `prebuilt-idDocument` | Extract ID document fields (name, DOB, address) |
| `prebuilt-businessCard` | Extract business card fields |
| `prebuilt-tax.us.w2` | Extract W-2 tax form fields |
| `prebuilt-healthInsuranceCard.us` | Extract health insurance card fields |

#### Imported: Build Modes

| Mode | Use Case |
|------|----------|
| `DocumentBuildMode.Template` | Fixed layout documents (forms) |
| `DocumentBuildMode.Neural` | Variable layout documents |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await client.AnalyzeDocumentAsync(
        WaitUntil.Completed, 
        "prebuilt-invoice", 
        documentUri);
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Error: {ex.Status} - {ex.Message}");
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
