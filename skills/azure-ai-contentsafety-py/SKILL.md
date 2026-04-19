---
name: azure-ai-contentsafety-py
description: "Azure AI Content Safety SDK for Python workflow skill. Use this skill when the user needs Azure AI Content Safety SDK for Python. Use for detecting harmful content in text and images with multi-severity classification and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["azure-ai-contentsafety-py", "azure", "content", "safety", "sdk", "for", "python", "use"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Azure AI Content Safety SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-contentsafety-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure AI Content Safety SDK for Python Detect harmful user-generated and AI-generated content in applications.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Analyze Text, Analyze Image, Text Blocklist Management, Severity Levels.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Content Safety SDK for Python. Use for detecting harmful content in text and images with multi-severity classification.
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

1. bash pip install azure-ai-contentsafety
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-ai-contentsafety
```

#### Imported: Environment Variables

```bash
CONTENT_SAFETY_ENDPOINT=https://<resource>.cognitiveservices.azure.com
CONTENT_SAFETY_KEY=<your-api-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-contentsafety-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-contentsafety-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-contentsafety-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-contentsafety-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use blocklists for domain-specific terms
- Set severity thresholds appropriate for your use case
- Handle multiple categories — content can be harmful in multiple ways
- Use haltonblocklist_hit for immediate rejection
- Log analysis results for audit and improvement
- Consider 8-severity mode for finer-grained control
- Pre-moderate AI outputs before showing to users

### Imported Operating Notes

#### Imported: Best Practices

1. **Use blocklists** for domain-specific terms
2. **Set severity thresholds** appropriate for your use case
3. **Handle multiple categories** — content can be harmful in multiple ways
4. **Use halt_on_blocklist_hit** for immediate rejection
5. **Log analysis results** for audit and improvement
6. **Consider 8-severity mode** for finer-grained control
7. **Pre-moderate AI outputs** before showing to users

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-contentsafety-py`, fails to mention provenance, or does not use any copied source files at all.
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
from azure.ai.contentsafety import ContentSafetyClient
from azure.core.credentials import AzureKeyCredential
import os

client = ContentSafetyClient(
    endpoint=os.environ["CONTENT_SAFETY_ENDPOINT"],
    credential=AzureKeyCredential(os.environ["CONTENT_SAFETY_KEY"])
)
```

### Entra ID

```python
from azure.ai.contentsafety import ContentSafetyClient
from azure.identity import DefaultAzureCredential

client = ContentSafetyClient(
    endpoint=os.environ["CONTENT_SAFETY_ENDPOINT"],
    credential=DefaultAzureCredential()
)
```

#### Imported: Analyze Text

```python
from azure.ai.contentsafety import ContentSafetyClient
from azure.ai.contentsafety.models import AnalyzeTextOptions, TextCategory
from azure.core.credentials import AzureKeyCredential

client = ContentSafetyClient(endpoint, AzureKeyCredential(key))

request = AnalyzeTextOptions(text="Your text content to analyze")
response = client.analyze_text(request)

# Check each category
for category in [TextCategory.HATE, TextCategory.SELF_HARM, 
                 TextCategory.SEXUAL, TextCategory.VIOLENCE]:
    result = next((r for r in response.categories_analysis 
                   if r.category == category), None)
    if result:
        print(f"{category}: severity {result.severity}")
```

#### Imported: Analyze Image

```python
from azure.ai.contentsafety import ContentSafetyClient
from azure.ai.contentsafety.models import AnalyzeImageOptions, ImageData
from azure.core.credentials import AzureKeyCredential
import base64

client = ContentSafetyClient(endpoint, AzureKeyCredential(key))

# From file
with open("image.jpg", "rb") as f:
    image_data = base64.b64encode(f.read()).decode("utf-8")

request = AnalyzeImageOptions(
    image=ImageData(content=image_data)
)

response = client.analyze_image(request)

for result in response.categories_analysis:
    print(f"{result.category}: severity {result.severity}")
```

### Image from URL

```python
from azure.ai.contentsafety.models import AnalyzeImageOptions, ImageData

request = AnalyzeImageOptions(
    image=ImageData(blob_url="https://example.com/image.jpg")
)

response = client.analyze_image(request)
```

#### Imported: Text Blocklist Management

### Create Blocklist

```python
from azure.ai.contentsafety import BlocklistClient
from azure.ai.contentsafety.models import TextBlocklist
from azure.core.credentials import AzureKeyCredential

blocklist_client = BlocklistClient(endpoint, AzureKeyCredential(key))

blocklist = TextBlocklist(
    blocklist_name="my-blocklist",
    description="Custom terms to block"
)

result = blocklist_client.create_or_update_text_blocklist(
    blocklist_name="my-blocklist",
    options=blocklist
)
```

### Add Block Items

```python
from azure.ai.contentsafety.models import AddOrUpdateTextBlocklistItemsOptions, TextBlocklistItem

items = AddOrUpdateTextBlocklistItemsOptions(
    blocklist_items=[
        TextBlocklistItem(text="blocked-term-1"),
        TextBlocklistItem(text="blocked-term-2")
    ]
)

result = blocklist_client.add_or_update_blocklist_items(
    blocklist_name="my-blocklist",
    options=items
)
```

### Analyze with Blocklist

```python
from azure.ai.contentsafety.models import AnalyzeTextOptions

request = AnalyzeTextOptions(
    text="Text containing blocked-term-1",
    blocklist_names=["my-blocklist"],
    halt_on_blocklist_hit=True
)

response = client.analyze_text(request)

if response.blocklists_match:
    for match in response.blocklists_match:
        print(f"Blocked: {match.blocklist_item_text}")
```

#### Imported: Severity Levels

Text analysis returns 4 severity levels (0, 2, 4, 6) by default. For 8 levels (0-7):

```python
from azure.ai.contentsafety.models import AnalyzeTextOptions, AnalyzeTextOutputType

request = AnalyzeTextOptions(
    text="Your text",
    output_type=AnalyzeTextOutputType.EIGHT_SEVERITY_LEVELS
)
```

#### Imported: Harm Categories

| Category | Description |
|----------|-------------|
| `Hate` | Attacks based on identity (race, religion, gender, etc.) |
| `Sexual` | Sexual content, relationships, anatomy |
| `Violence` | Physical harm, weapons, injury |
| `SelfHarm` | Self-injury, suicide, eating disorders |

#### Imported: Severity Scale

| Level | Text Range | Image Range | Meaning |
|-------|------------|-------------|---------|
| 0 | Safe | Safe | No harmful content |
| 2 | Low | Low | Mild references |
| 4 | Medium | Medium | Moderate content |
| 6 | High | High | Severe content |

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `ContentSafetyClient` | Analyze text and images |
| `BlocklistClient` | Manage custom blocklists |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
