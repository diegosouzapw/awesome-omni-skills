---
name: azure-ai-formrecognizer-java
description: "Azure Document Intelligence (Form Recognizer) SDK for Java workflow skill. Use this skill when the user needs Build document analysis applications using the Azure AI Document Intelligence SDK for Java and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["azure-ai-formrecognizer-java", "build", "document", "analysis", "applications", "using", "the", "azure"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Azure Document Intelligence (Form Recognizer) SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-formrecognizer-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Document Intelligence (Form Recognizer) SDK for Java Build document analysis applications using the Azure AI Document Intelligence SDK for Java.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Prebuilt Models, Core Patterns, Custom Models, Document Classification, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "document intelligence Java"
- "form recognizer SDK"
- "extract text from PDF"
- "OCR document Java"
- "analyze invoice receipt"
- "custom document model"

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-ai-formrecognizer</artifactId> <version>4.2.0-beta.1</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-ai-formrecognizer</artifactId>
    <version>4.2.0-beta.1</version>
</dependency>
```

#### Imported: Client Creation

### DocumentAnalysisClient

```java
import com.azure.ai.formrecognizer.documentanalysis.DocumentAnalysisClient;
import com.azure.ai.formrecognizer.documentanalysis.DocumentAnalysisClientBuilder;
import com.azure.core.credential.AzureKeyCredential;

DocumentAnalysisClient client = new DocumentAnalysisClientBuilder()
    .credential(new AzureKeyCredential("{key}"))
    .endpoint("{endpoint}")
    .buildClient();
```

### DocumentModelAdministrationClient

```java
import com.azure.ai.formrecognizer.documentanalysis.administration.DocumentModelAdministrationClient;
import com.azure.ai.formrecognizer.documentanalysis.administration.DocumentModelAdministrationClientBuilder;

DocumentModelAdministrationClient adminClient = new DocumentModelAdministrationClientBuilder()
    .credential(new AzureKeyCredential("{key}"))
    .endpoint("{endpoint}")
    .buildClient();
```

### With DefaultAzureCredential

```java
import com.azure.identity.DefaultAzureCredentialBuilder;

DocumentAnalysisClient client = new DocumentAnalysisClientBuilder()
    .endpoint("{endpoint}")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-formrecognizer-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-formrecognizer-java against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-formrecognizer-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-formrecognizer-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-formrecognizer-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@astro` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Prebuilt Models

| Model ID | Purpose |
|----------|---------|
| `prebuilt-layout` | Extract text, tables, selection marks |
| `prebuilt-document` | General document with key-value pairs |
| `prebuilt-receipt` | Receipt data extraction |
| `prebuilt-invoice` | Invoice field extraction |
| `prebuilt-businessCard` | Business card parsing |
| `prebuilt-idDocument` | ID document (passport, license) |
| `prebuilt-tax.us.w2` | US W2 tax forms |

#### Imported: Core Patterns

### Extract Layout

```java
import com.azure.ai.formrecognizer.documentanalysis.models.*;
import com.azure.core.util.BinaryData;
import com.azure.core.util.polling.SyncPoller;
import java.io.File;

File document = new File("document.pdf");
BinaryData documentData = BinaryData.fromFile(document.toPath());

SyncPoller<OperationResult, AnalyzeResult> poller = 
    client.beginAnalyzeDocument("prebuilt-layout", documentData);

AnalyzeResult result = poller.getFinalResult();

// Process pages
for (DocumentPage page : result.getPages()) {
    System.out.printf("Page %d: %.2f x %.2f %s%n",
        page.getPageNumber(),
        page.getWidth(),
        page.getHeight(),
        page.getUnit());
    
    // Lines
    for (DocumentLine line : page.getLines()) {
        System.out.println("Line: " + line.getContent());
    }
    
    // Selection marks (checkboxes)
    for (DocumentSelectionMark mark : page.getSelectionMarks()) {
        System.out.printf("Checkbox: %s (confidence: %.2f)%n",
            mark.getSelectionMarkState(),
            mark.getConfidence());
    }
}

// Tables
for (DocumentTable table : result.getTables()) {
    System.out.printf("Table: %d rows x %d columns%n",
        table.getRowCount(),
        table.getColumnCount());
    
    for (DocumentTableCell cell : table.getCells()) {
        System.out.printf("Cell[%d,%d]: %s%n",
            cell.getRowIndex(),
            cell.getColumnIndex(),
            cell.getContent());
    }
}
```

### Analyze from URL

```java
String documentUrl = "https://example.com/invoice.pdf";

SyncPoller<OperationResult, AnalyzeResult> poller = 
    client.beginAnalyzeDocumentFromUrl("prebuilt-invoice", documentUrl);

AnalyzeResult result = poller.getFinalResult();
```

### Analyze Receipt

```java
SyncPoller<OperationResult, AnalyzeResult> poller = 
    client.beginAnalyzeDocumentFromUrl("prebuilt-receipt", receiptUrl);

AnalyzeResult result = poller.getFinalResult();

for (AnalyzedDocument doc : result.getDocuments()) {
    Map<String, DocumentField> fields = doc.getFields();
    
    DocumentField merchantName = fields.get("MerchantName");
    if (merchantName != null && merchantName.getType() == DocumentFieldType.STRING) {
        System.out.printf("Merchant: %s (confidence: %.2f)%n",
            merchantName.getValueAsString(),
            merchantName.getConfidence());
    }
    
    DocumentField transactionDate = fields.get("TransactionDate");
    if (transactionDate != null && transactionDate.getType() == DocumentFieldType.DATE) {
        System.out.printf("Date: %s%n", transactionDate.getValueAsDate());
    }
    
    DocumentField items = fields.get("Items");
    if (items != null && items.getType() == DocumentFieldType.LIST) {
        for (DocumentField item : items.getValueAsList()) {
            Map<String, DocumentField> itemFields = item.getValueAsMap();
            System.out.printf("Item: %s, Price: %.2f%n",
                itemFields.get("Name").getValueAsString(),
                itemFields.get("Price").getValueAsDouble());
        }
    }
}
```

### General Document Analysis

```java
SyncPoller<OperationResult, AnalyzeResult> poller = 
    client.beginAnalyzeDocumentFromUrl("prebuilt-document", documentUrl);

AnalyzeResult result = poller.getFinalResult();

// Key-value pairs
for (DocumentKeyValuePair kvp : result.getKeyValuePairs()) {
    System.out.printf("Key: %s => Value: %s%n",
        kvp.getKey().getContent(),
        kvp.getValue() != null ? kvp.getValue().getContent() : "null");
}
```

#### Imported: Custom Models

### Build Custom Model

```java
import com.azure.ai.formrecognizer.documentanalysis.administration.models.*;

String blobContainerUrl = "{SAS_URL_of_training_data}";
String prefix = "training-docs/";

SyncPoller<OperationResult, DocumentModelDetails> poller = adminClient.beginBuildDocumentModel(
    blobContainerUrl,
    DocumentModelBuildMode.TEMPLATE,
    prefix,
    new BuildDocumentModelOptions()
        .setModelId("my-custom-model")
        .setDescription("Custom invoice model"),
    Context.NONE);

DocumentModelDetails model = poller.getFinalResult();

System.out.println("Model ID: " + model.getModelId());
System.out.println("Created: " + model.getCreatedOn());

model.getDocumentTypes().forEach((docType, details) -> {
    System.out.println("Document type: " + docType);
    details.getFieldSchema().forEach((field, schema) -> {
        System.out.printf("  Field: %s (%s)%n", field, schema.getType());
    });
});
```

### Analyze with Custom Model

```java
SyncPoller<OperationResult, AnalyzeResult> poller = 
    client.beginAnalyzeDocumentFromUrl("my-custom-model", documentUrl);

AnalyzeResult result = poller.getFinalResult();

for (AnalyzedDocument doc : result.getDocuments()) {
    System.out.printf("Document type: %s (confidence: %.2f)%n",
        doc.getDocType(),
        doc.getConfidence());
    
    doc.getFields().forEach((name, field) -> {
        System.out.printf("Field '%s': %s (confidence: %.2f)%n",
            name,
            field.getContent(),
            field.getConfidence());
    });
}
```

### Compose Models

```java
List<String> modelIds = Arrays.asList("model-1", "model-2", "model-3");

SyncPoller<OperationResult, DocumentModelDetails> poller = 
    adminClient.beginComposeDocumentModel(
        modelIds,
        new ComposeDocumentModelOptions()
            .setModelId("composed-model")
            .setDescription("Composed from multiple models"));

DocumentModelDetails composedModel = poller.getFinalResult();
```

### Manage Models

```java
// List models
PagedIterable<DocumentModelSummary> models = adminClient.listDocumentModels();
for (DocumentModelSummary summary : models) {
    System.out.printf("Model: %s, Created: %s%n",
        summary.getModelId(),
        summary.getCreatedOn());
}

// Get model details
DocumentModelDetails model = adminClient.getDocumentModel("model-id");

// Delete model
adminClient.deleteDocumentModel("model-id");

// Check resource limits
ResourceDetails resources = adminClient.getResourceDetails();
System.out.printf("Models: %d / %d%n",
    resources.getCustomDocumentModelCount(),
    resources.getCustomDocumentModelLimit());
```

#### Imported: Document Classification

### Build Classifier

```java
Map<String, ClassifierDocumentTypeDetails> docTypes = new HashMap<>();
docTypes.put("invoice", new ClassifierDocumentTypeDetails()
    .setAzureBlobSource(new AzureBlobContentSource(containerUrl).setPrefix("invoices/")));
docTypes.put("receipt", new ClassifierDocumentTypeDetails()
    .setAzureBlobSource(new AzureBlobContentSource(containerUrl).setPrefix("receipts/")));

SyncPoller<OperationResult, DocumentClassifierDetails> poller = 
    adminClient.beginBuildDocumentClassifier(docTypes,
        new BuildDocumentClassifierOptions().setClassifierId("my-classifier"));

DocumentClassifierDetails classifier = poller.getFinalResult();
```

### Classify Document

```java
SyncPoller<OperationResult, AnalyzeResult> poller = 
    client.beginClassifyDocumentFromUrl("my-classifier", documentUrl, Context.NONE);

AnalyzeResult result = poller.getFinalResult();

for (AnalyzedDocument doc : result.getDocuments()) {
    System.out.printf("Classified as: %s (confidence: %.2f)%n",
        doc.getDocType(),
        doc.getConfidence());
}
```

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;

try {
    client.beginAnalyzeDocumentFromUrl("prebuilt-receipt", "invalid-url");
} catch (HttpResponseException e) {
    System.out.println("Status: " + e.getResponse().getStatusCode());
    System.out.println("Error: " + e.getMessage());
}
```

#### Imported: Environment Variables

```bash
FORM_RECOGNIZER_ENDPOINT=https://<resource>.cognitiveservices.azure.com/
FORM_RECOGNIZER_KEY=<your-api-key>
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
