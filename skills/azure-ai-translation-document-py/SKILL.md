---
name: azure-ai-translation-document-py
description: "Azure AI Document Translation SDK for Python workflow skill. Use this skill when the user needs Azure AI Document Translation SDK for batch translation of documents with format preservation. Use for translating Word, PDF, Excel, PowerPoint, and other document formats at scale and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["azure-ai-translation-document-py", "azure", "document", "translation", "sdk", "for", "batch", "documents"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure AI Document Translation SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-translation-document-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure AI Document Translation SDK for Python Client library for Azure AI Translator document translation service for batch document translation with format preservation.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Basic Document Translation, Multiple Target Languages, Translate Single Document, Check Translation Status.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Document Translation SDK for batch translation of documents with format preservation. Use for translating Word, PDF, Excel, PowerPoint, and other document formats at scale.
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

1. bash pip install azure-ai-translation-document
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-ai-translation-document
```

#### Imported: Environment Variables

```bash
AZURE_DOCUMENT_TRANSLATION_ENDPOINT=https://<resource>.cognitiveservices.azure.com
AZURE_DOCUMENT_TRANSLATION_KEY=<your-api-key>  # If using API key

# Storage for source and target documents
AZURE_SOURCE_CONTAINER_URL=https://<storage>.blob.core.windows.net/<container>?<sas>
AZURE_TARGET_CONTAINER_URL=https://<storage>.blob.core.windows.net/<container>?<sas>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-translation-document-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-translation-document-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-translation-document-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-translation-document-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use SAS tokens with minimal required permissions
- Monitor long-running operations with poller.status()
- Handle document-level errors by iterating document statuses
- Use glossaries for domain-specific terminology
- Separate target containers for each language
- Use async client for multiple concurrent jobs
- Check supported formats before submitting documents

### Imported Operating Notes

#### Imported: Best Practices

1. **Use SAS tokens** with minimal required permissions
2. **Monitor long-running operations** with `poller.status()`
3. **Handle document-level errors** by iterating document statuses
4. **Use glossaries** for domain-specific terminology
5. **Separate target containers** for each language
6. **Use async client** for multiple concurrent jobs
7. **Check supported formats** before submitting documents

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-translation-document-py`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Authentication

### API Key

```python
import os
from azure.ai.translation.document import DocumentTranslationClient
from azure.core.credentials import AzureKeyCredential

endpoint = os.environ["AZURE_DOCUMENT_TRANSLATION_ENDPOINT"]
key = os.environ["AZURE_DOCUMENT_TRANSLATION_KEY"]

client = DocumentTranslationClient(endpoint, AzureKeyCredential(key))
```

### Entra ID (Recommended)

```python
from azure.ai.translation.document import DocumentTranslationClient
from azure.identity import DefaultAzureCredential

client = DocumentTranslationClient(
    endpoint=os.environ["AZURE_DOCUMENT_TRANSLATION_ENDPOINT"],
    credential=DefaultAzureCredential()
)
```

#### Imported: Basic Document Translation

```python
from azure.ai.translation.document import DocumentTranslationInput, TranslationTarget

source_url = os.environ["AZURE_SOURCE_CONTAINER_URL"]
target_url = os.environ["AZURE_TARGET_CONTAINER_URL"]

# Start translation job
poller = client.begin_translation(
    inputs=[
        DocumentTranslationInput(
            source_url=source_url,
            targets=[
                TranslationTarget(
                    target_url=target_url,
                    language="es"  # Translate to Spanish
                )
            ]
        )
    ]
)

# Wait for completion
result = poller.result()

print(f"Status: {poller.status()}")
print(f"Documents translated: {poller.details.documents_succeeded_count}")
print(f"Documents failed: {poller.details.documents_failed_count}")
```

#### Imported: Multiple Target Languages

```python
poller = client.begin_translation(
    inputs=[
        DocumentTranslationInput(
            source_url=source_url,
            targets=[
                TranslationTarget(target_url=target_url_es, language="es"),
                TranslationTarget(target_url=target_url_fr, language="fr"),
                TranslationTarget(target_url=target_url_de, language="de")
            ]
        )
    ]
)
```

#### Imported: Translate Single Document

```python
from azure.ai.translation.document import SingleDocumentTranslationClient

single_client = SingleDocumentTranslationClient(endpoint, AzureKeyCredential(key))

with open("document.docx", "rb") as f:
    document_content = f.read()

result = single_client.translate(
    body=document_content,
    target_language="es",
    content_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
)

# Save translated document
with open("document_es.docx", "wb") as f:
    f.write(result)
```

#### Imported: Check Translation Status

```python
# Get all translation operations
operations = client.list_translation_statuses()

for op in operations:
    print(f"Operation ID: {op.id}")
    print(f"Status: {op.status}")
    print(f"Created: {op.created_on}")
    print(f"Total documents: {op.documents_total_count}")
    print(f"Succeeded: {op.documents_succeeded_count}")
    print(f"Failed: {op.documents_failed_count}")
```

#### Imported: List Document Statuses

```python
# Get status of individual documents in a job
operation_id = poller.id
document_statuses = client.list_document_statuses(operation_id)

for doc in document_statuses:
    print(f"Document: {doc.source_document_url}")
    print(f"  Status: {doc.status}")
    print(f"  Translated to: {doc.translated_to}")
    if doc.error:
        print(f"  Error: {doc.error.message}")
```

#### Imported: Cancel Translation

```python
# Cancel a running translation
client.cancel_translation(operation_id)
```

#### Imported: Using Glossary

```python
from azure.ai.translation.document import TranslationGlossary

poller = client.begin_translation(
    inputs=[
        DocumentTranslationInput(
            source_url=source_url,
            targets=[
                TranslationTarget(
                    target_url=target_url,
                    language="es",
                    glossaries=[
                        TranslationGlossary(
                            glossary_url="https://<storage>.blob.core.windows.net/glossary/terms.csv?<sas>",
                            file_format="csv"
                        )
                    ]
                )
            ]
        )
    ]
)
```

#### Imported: Supported Document Formats

```python
# Get supported formats
formats = client.get_supported_document_formats()

for fmt in formats:
    print(f"Format: {fmt.format}")
    print(f"  Extensions: {fmt.file_extensions}")
    print(f"  Content types: {fmt.content_types}")
```

#### Imported: Supported Languages

```python
# Get supported languages
languages = client.get_supported_languages()

for lang in languages:
    print(f"Language: {lang.name} ({lang.code})")
```

#### Imported: Async Client

```python
from azure.ai.translation.document.aio import DocumentTranslationClient
from azure.identity.aio import DefaultAzureCredential

async def translate_documents():
    async with DocumentTranslationClient(
        endpoint=endpoint,
        credential=DefaultAzureCredential()
    ) as client:
        poller = await client.begin_translation(inputs=[...])
        result = await poller.result()
```

#### Imported: Supported Formats

| Category | Formats |
|----------|---------|
| Documents | DOCX, PDF, PPTX, XLSX, HTML, TXT, RTF |
| Structured | CSV, TSV, JSON, XML |
| Localization | XLIFF, XLF, MHTML |

#### Imported: Storage Requirements

- Source and target containers must be Azure Blob Storage
- Use SAS tokens with appropriate permissions:
  - Source: Read, List
  - Target: Write, List

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
