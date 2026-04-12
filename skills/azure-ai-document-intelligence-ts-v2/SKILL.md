---
name: azure-ai-document-intelligence-ts-v2
description: "Azure Document Intelligence REST SDK for TypeScript workflow skill. Use this skill when the user needs Extract text, tables, and structured data from documents using prebuilt and custom models and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["azure-ai-document-intelligence-ts-v2", "azure-ai-document-intelligence-ts", "extract", "text", "tables", "and", "structured", "data"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Document Intelligence REST SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-ai-document-intelligence-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Document Intelligence REST SDK for TypeScript Extract text, tables, and structured data from documents using prebuilt and custom models.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Analyze Document (URL), Analyze Document (Local File), Prebuilt Models, Extract Invoice Fields.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Extract text, tables, and structured data from documents using prebuilt and custom models.
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

1. bash npm install @azure-rest/ai-document-intelligence @azure/identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure-rest/ai-document-intelligence @azure/identity
```

#### Imported: Environment Variables

```bash
DOCUMENT_INTELLIGENCE_ENDPOINT=https://<resource>.cognitiveservices.azure.com
DOCUMENT_INTELLIGENCE_API_KEY=<api-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-document-intelligence-ts-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-document-intelligence-ts-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-document-intelligence-ts-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-document-intelligence-ts-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use getLongRunningPoller() - Document analysis is async, always poll for results
- Check isUnexpected() - Type guard for proper error handling
- Choose the right model - Use prebuilt models when possible, custom for specialized docs
- Handle confidence scores - Fields have confidence values, set thresholds for your use case
- Use pagination - Use paginate() helper for listing models
- Prefer neural mode - For custom models, neural handles more variation than template
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use getLongRunningPoller()** - Document analysis is async, always poll for results
2. **Check isUnexpected()** - Type guard for proper error handling
3. **Choose the right model** - Use prebuilt models when possible, custom for specialized docs
4. **Handle confidence scores** - Fields have confidence values, set thresholds for your use case
5. **Use pagination** - Use `paginate()` helper for listing models
6. **Prefer neural mode** - For custom models, neural handles more variation than template

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-ai-document-intelligence-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Authentication

**Important**: This is a REST client. `DocumentIntelligence` is a **function**, not a class.

### DefaultAzureCredential

```typescript
import DocumentIntelligence from "@azure-rest/ai-document-intelligence";
import { DefaultAzureCredential } from "@azure/identity";

const client = DocumentIntelligence(
  process.env.DOCUMENT_INTELLIGENCE_ENDPOINT!,
  new DefaultAzureCredential()
);
```

### API Key

```typescript
import DocumentIntelligence from "@azure-rest/ai-document-intelligence";

const client = DocumentIntelligence(
  process.env.DOCUMENT_INTELLIGENCE_ENDPOINT!,
  { key: process.env.DOCUMENT_INTELLIGENCE_API_KEY! }
);
```

#### Imported: Analyze Document (URL)

```typescript
import DocumentIntelligence, {
  isUnexpected,
  getLongRunningPoller,
  AnalyzeOperationOutput
} from "@azure-rest/ai-document-intelligence";

const initialResponse = await client
  .path("/documentModels/{modelId}:analyze", "prebuilt-layout")
  .post({
    contentType: "application/json",
    body: {
      urlSource: "https://example.com/document.pdf"
    },
    queryParameters: { locale: "en-US" }
  });

if (isUnexpected(initialResponse)) {
  throw initialResponse.body.error;
}

const poller = getLongRunningPoller(client, initialResponse);
const result = (await poller.pollUntilDone()).body as AnalyzeOperationOutput;

console.log("Pages:", result.analyzeResult?.pages?.length);
console.log("Tables:", result.analyzeResult?.tables?.length);
```

#### Imported: Analyze Document (Local File)

```typescript
import { readFile } from "node:fs/promises";

const fileBuffer = await readFile("./document.pdf");
const base64Source = fileBuffer.toString("base64");

const initialResponse = await client
  .path("/documentModels/{modelId}:analyze", "prebuilt-invoice")
  .post({
    contentType: "application/json",
    body: { base64Source }
  });

if (isUnexpected(initialResponse)) {
  throw initialResponse.body.error;
}

const poller = getLongRunningPoller(client, initialResponse);
const result = (await poller.pollUntilDone()).body as AnalyzeOperationOutput;
```

#### Imported: Prebuilt Models

| Model ID | Description |
|----------|-------------|
| `prebuilt-read` | OCR - text and language extraction |
| `prebuilt-layout` | Text, tables, selection marks, structure |
| `prebuilt-invoice` | Invoice fields |
| `prebuilt-receipt` | Receipt fields |
| `prebuilt-idDocument` | ID document fields |
| `prebuilt-tax.us.w2` | W-2 tax form fields |
| `prebuilt-healthInsuranceCard.us` | Health insurance card fields |
| `prebuilt-contract` | Contract fields |
| `prebuilt-bankStatement.us` | Bank statement fields |

#### Imported: Extract Invoice Fields

```typescript
const initialResponse = await client
  .path("/documentModels/{modelId}:analyze", "prebuilt-invoice")
  .post({
    contentType: "application/json",
    body: { urlSource: invoiceUrl }
  });

if (isUnexpected(initialResponse)) {
  throw initialResponse.body.error;
}

const poller = getLongRunningPoller(client, initialResponse);
const result = (await poller.pollUntilDone()).body as AnalyzeOperationOutput;

const invoice = result.analyzeResult?.documents?.[0];
if (invoice) {
  console.log("Vendor:", invoice.fields?.VendorName?.content);
  console.log("Total:", invoice.fields?.InvoiceTotal?.content);
  console.log("Due Date:", invoice.fields?.DueDate?.content);
}
```

#### Imported: Extract Receipt Fields

```typescript
const initialResponse = await client
  .path("/documentModels/{modelId}:analyze", "prebuilt-receipt")
  .post({
    contentType: "application/json",
    body: { urlSource: receiptUrl }
  });

const poller = getLongRunningPoller(client, initialResponse);
const result = (await poller.pollUntilDone()).body as AnalyzeOperationOutput;

const receipt = result.analyzeResult?.documents?.[0];
if (receipt) {
  console.log("Merchant:", receipt.fields?.MerchantName?.content);
  console.log("Total:", receipt.fields?.Total?.content);
  
  for (const item of receipt.fields?.Items?.values || []) {
    console.log("Item:", item.properties?.Description?.content);
    console.log("Price:", item.properties?.TotalPrice?.content);
  }
}
```

#### Imported: List Document Models

```typescript
import DocumentIntelligence, { isUnexpected, paginate } from "@azure-rest/ai-document-intelligence";

const response = await client.path("/documentModels").get();

if (isUnexpected(response)) {
  throw response.body.error;
}

for await (const model of paginate(client, response)) {
  console.log(model.modelId);
}
```

#### Imported: Build Custom Model

```typescript
const initialResponse = await client.path("/documentModels:build").post({
  body: {
    modelId: "my-custom-model",
    description: "Custom model for purchase orders",
    buildMode: "template",  // or "neural"
    azureBlobSource: {
      containerUrl: process.env.TRAINING_CONTAINER_SAS_URL!,
      prefix: "training-data/"
    }
  }
});

if (isUnexpected(initialResponse)) {
  throw initialResponse.body.error;
}

const poller = getLongRunningPoller(client, initialResponse);
const result = await poller.pollUntilDone();
console.log("Model built:", result.body);
```

#### Imported: Build Document Classifier

```typescript
import { DocumentClassifierBuildOperationDetailsOutput } from "@azure-rest/ai-document-intelligence";

const containerSasUrl = process.env.TRAINING_CONTAINER_SAS_URL!;

const initialResponse = await client.path("/documentClassifiers:build").post({
  body: {
    classifierId: "my-classifier",
    description: "Invoice vs Receipt classifier",
    docTypes: {
      invoices: {
        azureBlobSource: { containerUrl: containerSasUrl, prefix: "invoices/" }
      },
      receipts: {
        azureBlobSource: { containerUrl: containerSasUrl, prefix: "receipts/" }
      }
    }
  }
});

if (isUnexpected(initialResponse)) {
  throw initialResponse.body.error;
}

const poller = getLongRunningPoller(client, initialResponse);
const result = (await poller.pollUntilDone()).body as DocumentClassifierBuildOperationDetailsOutput;
console.log("Classifier:", result.result?.classifierId);
```

#### Imported: Classify Document

```typescript
const initialResponse = await client
  .path("/documentClassifiers/{classifierId}:analyze", "my-classifier")
  .post({
    contentType: "application/json",
    body: { urlSource: documentUrl },
    queryParameters: { split: "auto" }
  });

if (isUnexpected(initialResponse)) {
  throw initialResponse.body.error;
}

const poller = getLongRunningPoller(client, initialResponse);
const result = await poller.pollUntilDone();
console.log("Classification:", result.body.analyzeResult?.documents);
```

#### Imported: Get Service Info

```typescript
const response = await client.path("/info").get();

if (isUnexpected(response)) {
  throw response.body.error;
}

console.log("Custom model limit:", response.body.customDocumentModels.limit);
console.log("Custom model count:", response.body.customDocumentModels.count);
```

#### Imported: Polling Pattern

```typescript
import DocumentIntelligence, {
  isUnexpected,
  getLongRunningPoller,
  AnalyzeOperationOutput
} from "@azure-rest/ai-document-intelligence";

// 1. Start operation
const initialResponse = await client
  .path("/documentModels/{modelId}:analyze", "prebuilt-layout")
  .post({ contentType: "application/json", body: { urlSource } });

// 2. Check for errors
if (isUnexpected(initialResponse)) {
  throw initialResponse.body.error;
}

// 3. Create poller
const poller = getLongRunningPoller(client, initialResponse);

// 4. Optional: Monitor progress
poller.onProgress((state) => {
  console.log("Status:", state.status);
});

// 5. Wait for completion
const result = (await poller.pollUntilDone()).body as AnalyzeOperationOutput;
```

#### Imported: Key Types

```typescript
import DocumentIntelligence, {
  isUnexpected,
  getLongRunningPoller,
  paginate,
  parseResultIdFromResponse,
  AnalyzeOperationOutput,
  DocumentClassifierBuildOperationDetailsOutput
} from "@azure-rest/ai-document-intelligence";
```
