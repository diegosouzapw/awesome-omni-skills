---
name: azure-ai-contentunderstanding-py
description: "Azure AI Content Understanding SDK for Python workflow skill. Use this skill when the user needs Azure AI Content Understanding SDK for Python. Use for multimodal content extraction from documents, images, audio, and video and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["azure-ai-contentunderstanding-py", "azure", "content", "understanding", "sdk", "for", "python", "use"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure AI Content Understanding SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-contentunderstanding-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure AI Content Understanding SDK for Python Multimodal AI service that extracts semantic content from documents, video, audio, and image files for RAG and automated workflows.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Prebuilt Analyzers, Analyze Document, Access Document Content Details, Analyze Image.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Content Understanding SDK for Python. Use for multimodal content extraction from documents, images, audio, and video.
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

1. Begin Analysis — Start the analysis operation with begin_analyze() (returns a poller)
2. Poll for Results — Poll until analysis completes (SDK handles this with .result())
3. Process Results — Extract structured results from AnalyzeResult.contents
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview, playbook, and source summary before loading any upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-ai-contentunderstanding
```

#### Imported: Core Workflow

Content Understanding operations are asynchronous long-running operations:

1. **Begin Analysis** — Start the analysis operation with `begin_analyze()` (returns a poller)
2. **Poll for Results** — Poll until analysis completes (SDK handles this with `.result()`)
3. **Process Results** — Extract structured results from `AnalyzeResult.contents`

#### Imported: Environment Variables

```bash
CONTENTUNDERSTANDING_ENDPOINT=https://<resource>.cognitiveservices.azure.com/
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-contentunderstanding-py to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-contentunderstanding-py/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-contentunderstanding-py/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-contentunderstanding-py using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use begin_analyze with AnalyzeInput — this is the correct method signature
- Access results via result.contents[0] — results are returned as a list
- Use prebuilt analyzers for common scenarios (document/image/audio/video search)
- Create custom analyzers only for domain-specific field extraction
- Use async client for high-throughput scenarios with azure.identity.aio credentials
- Handle long-running operations — video/audio analysis can take minutes
- Use URL sources when possible to avoid upload overhead

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `begin_analyze` with `AnalyzeInput`** — this is the correct method signature
2. **Access results via `result.contents[0]`** — results are returned as a list
3. **Use prebuilt analyzers** for common scenarios (document/image/audio/video search)
4. **Create custom analyzers** only for domain-specific field extraction
5. **Use async client** for high-throughput scenarios with `azure.identity.aio` credentials
6. **Handle long-running operations** — video/audio analysis can take minutes
7. **Use URL sources** when possible to avoid upload overhead

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-contentunderstanding-py`, fails to mention provenance, or does not use the support pack at all.
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

```python
import os
from azure.ai.contentunderstanding import ContentUnderstandingClient
from azure.identity import DefaultAzureCredential

endpoint = os.environ["CONTENTUNDERSTANDING_ENDPOINT"]
credential = DefaultAzureCredential()
client = ContentUnderstandingClient(endpoint=endpoint, credential=credential)
```

#### Imported: Prebuilt Analyzers

| Analyzer | Content Type | Purpose |
|----------|--------------|---------|
| `prebuilt-documentSearch` | Documents | Extract markdown for RAG applications |
| `prebuilt-imageSearch` | Images | Extract content from images |
| `prebuilt-audioSearch` | Audio | Transcribe audio with timing |
| `prebuilt-videoSearch` | Video | Extract frames, transcripts, summaries |
| `prebuilt-invoice` | Documents | Extract invoice fields |

#### Imported: Analyze Document

```python
import os
from azure.ai.contentunderstanding import ContentUnderstandingClient
from azure.ai.contentunderstanding.models import AnalyzeInput
from azure.identity import DefaultAzureCredential

endpoint = os.environ["CONTENTUNDERSTANDING_ENDPOINT"]
client = ContentUnderstandingClient(
    endpoint=endpoint,
    credential=DefaultAzureCredential()
)

# Analyze document from URL
poller = client.begin_analyze(
    analyzer_id="prebuilt-documentSearch",
    inputs=[AnalyzeInput(url="https://example.com/document.pdf")]
)

result = poller.result()

# Access markdown content (contents is a list)
content = result.contents[0]
print(content.markdown)
```

#### Imported: Access Document Content Details

```python
from azure.ai.contentunderstanding.models import MediaContentKind, DocumentContent

content = result.contents[0]
if content.kind == MediaContentKind.DOCUMENT:
    document_content: DocumentContent = content  # type: ignore
    print(document_content.start_page_number)
```

#### Imported: Analyze Image

```python
from azure.ai.contentunderstanding.models import AnalyzeInput

poller = client.begin_analyze(
    analyzer_id="prebuilt-imageSearch",
    inputs=[AnalyzeInput(url="https://example.com/image.jpg")]
)
result = poller.result()
content = result.contents[0]
print(content.markdown)
```

#### Imported: Analyze Video

```python
from azure.ai.contentunderstanding.models import AnalyzeInput

poller = client.begin_analyze(
    analyzer_id="prebuilt-videoSearch",
    inputs=[AnalyzeInput(url="https://example.com/video.mp4")]
)

result = poller.result()

# Access video content (AudioVisualContent)
content = result.contents[0]

# Get transcript phrases with timing
for phrase in content.transcript_phrases:
    print(f"[{phrase.start_time} - {phrase.end_time}]: {phrase.text}")

# Get key frames (for video)
for frame in content.key_frames:
    print(f"Frame at {frame.time}: {frame.description}")
```

#### Imported: Analyze Audio

```python
from azure.ai.contentunderstanding.models import AnalyzeInput

poller = client.begin_analyze(
    analyzer_id="prebuilt-audioSearch",
    inputs=[AnalyzeInput(url="https://example.com/audio.mp3")]
)

result = poller.result()

# Access audio transcript
content = result.contents[0]
for phrase in content.transcript_phrases:
    print(f"[{phrase.start_time}] {phrase.text}")
```

#### Imported: Custom Analyzers

Create custom analyzers with field schemas for specialized extraction:

```python
# Create custom analyzer
analyzer = client.create_analyzer(
    analyzer_id="my-invoice-analyzer",
    analyzer={
        "description": "Custom invoice analyzer",
        "base_analyzer_id": "prebuilt-documentSearch",
        "field_schema": {
            "fields": {
                "vendor_name": {"type": "string"},
                "invoice_total": {"type": "number"},
                "line_items": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "description": {"type": "string"},
                            "amount": {"type": "number"}
                        }
                    }
                }
            }
        }
    }
)

# Use custom analyzer
from azure.ai.contentunderstanding.models import AnalyzeInput

poller = client.begin_analyze(
    analyzer_id="my-invoice-analyzer",
    inputs=[AnalyzeInput(url="https://example.com/invoice.pdf")]
)

result = poller.result()

# Access extracted fields
print(result.fields["vendor_name"])
print(result.fields["invoice_total"])
```

#### Imported: Analyzer Management

```python
# List all analyzers
analyzers = client.list_analyzers()
for analyzer in analyzers:
    print(f"{analyzer.analyzer_id}: {analyzer.description}")

# Get specific analyzer
analyzer = client.get_analyzer("prebuilt-documentSearch")

# Delete custom analyzer
client.delete_analyzer("my-custom-analyzer")
```

#### Imported: Async Client

```python
import asyncio
import os
from azure.ai.contentunderstanding.aio import ContentUnderstandingClient
from azure.ai.contentunderstanding.models import AnalyzeInput
from azure.identity.aio import DefaultAzureCredential

async def analyze_document():
    endpoint = os.environ["CONTENTUNDERSTANDING_ENDPOINT"]
    credential = DefaultAzureCredential()
    
    async with ContentUnderstandingClient(
        endpoint=endpoint,
        credential=credential
    ) as client:
        poller = await client.begin_analyze(
            analyzer_id="prebuilt-documentSearch",
            inputs=[AnalyzeInput(url="https://example.com/doc.pdf")]
        )
        result = await poller.result()
        content = result.contents[0]
        return content.markdown

asyncio.run(analyze_document())
```

#### Imported: Content Types

| Class | For | Provides |
|-------|-----|----------|
| `DocumentContent` | PDF, images, Office docs | Pages, tables, figures, paragraphs |
| `AudioVisualContent` | Audio, video files | Transcript phrases, timing, key frames |

Both derive from `MediaContent` which provides basic info and markdown representation.

#### Imported: Model Imports

```python
from azure.ai.contentunderstanding.models import (
    AnalyzeInput,
    AnalyzeResult,
    MediaContentKind,
    DocumentContent,
    AudioVisualContent,
)
```

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `ContentUnderstandingClient` | Sync client for all operations |
| `ContentUnderstandingClient` (aio) | Async client for all operations |
