---
name: "azure-ai-translation-text-py"
description: "Azure AI Text Translation SDK for Python workflow skill. Use this skill when the user needs Azure AI Text Translation SDK for real-time text translation, transliteration, language detection, and dictionary lookup. Use for translating text content in applications and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "communication"
tags:
  - "azure-ai-translation-text-py"
  - "azure"
  - "text"
  - "translation"
  - "sdk"
  - "for"
  - "real-time"
  - "transliteration"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "azure-ai-translation-text-py"
family_name: "Azure AI Text Translation SDK for Python"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-ai-translation-text-py"
upstream_skill: "skills/azure-ai-translation-text-py"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-ai-translation-text-py"
---

# Azure AI Text Translation SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-translation-text-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure AI Text Translation SDK for Python Client library for Azure AI Translator text translation service for real-time text translation, transliteration, and language operations.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Basic Translation, Translate to Multiple Languages, Specify Source Language, Language Detection.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Text Translation SDK for real-time text translation, transliteration, language detection, and dictionary lookup. Use for translating text content in applications.
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

1. bash pip install azure-ai-translation-text
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-ai-translation-text
```

#### Imported: Environment Variables

```bash
AZURE_TRANSLATOR_KEY=<your-api-key>
AZURE_TRANSLATOR_REGION=<your-region>  # e.g., eastus, westus2
# Or use custom endpoint
AZURE_TRANSLATOR_ENDPOINT=https://<resource>.cognitiveservices.azure.com
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-translation-text-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-translation-text-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-translation-text-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-translation-text-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Dictionary Examples

Get usage examples for translations:

```python
from azure.ai.translation.text.models import DictionaryExampleTextItem

result = client.lookup_dictionary_examples(
    body=[DictionaryExampleTextItem(text="fly", translation="volar")],
    from_parameter="en",
    to="es"
)

for item in result:
    for example in item.examples:
        print(f"Source: {example.source_prefix}{example.source_term}{example.source_suffix}")
        print(f"Target: {example.target_prefix}{example.target_term}{example.target_suffix}")
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Batch translations — Send multiple texts in one request (up to 100)
- Specify source language when known to improve accuracy
- Use async client for high-throughput scenarios
- Cache language list — Supported languages don't change frequently
- Handle profanity appropriately for your application
- Use html text_type when translating HTML content
- Include alignment for applications needing word mapping

### Imported Operating Notes

#### Imported: Best Practices

1. **Batch translations** — Send multiple texts in one request (up to 100)
2. **Specify source language** when known to improve accuracy
3. **Use async client** for high-throughput scenarios
4. **Cache language list** — Supported languages don't change frequently
5. **Handle profanity** appropriately for your application
6. **Use html text_type** when translating HTML content
7. **Include alignment** for applications needing word mapping

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-translation-text-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### API Key with Region

```python
import os
from azure.ai.translation.text import TextTranslationClient
from azure.core.credentials import AzureKeyCredential

key = os.environ["AZURE_TRANSLATOR_KEY"]
region = os.environ["AZURE_TRANSLATOR_REGION"]

# Create credential with region
credential = AzureKeyCredential(key)
client = TextTranslationClient(credential=credential, region=region)
```

### API Key with Custom Endpoint

```python
endpoint = os.environ["AZURE_TRANSLATOR_ENDPOINT"]

client = TextTranslationClient(
    credential=AzureKeyCredential(key),
    endpoint=endpoint
)
```

### Entra ID (Recommended)

```python
from azure.ai.translation.text import TextTranslationClient
from azure.identity import DefaultAzureCredential

client = TextTranslationClient(
    credential=DefaultAzureCredential(),
    endpoint=os.environ["AZURE_TRANSLATOR_ENDPOINT"]
)
```

#### Imported: Basic Translation

```python
# Translate to a single language
result = client.translate(
    body=["Hello, how are you?", "Welcome to Azure!"],
    to=["es"]  # Spanish
)

for item in result:
    for translation in item.translations:
        print(f"Translated: {translation.text}")
        print(f"Target language: {translation.to}")
```

#### Imported: Translate to Multiple Languages

```python
result = client.translate(
    body=["Hello, world!"],
    to=["es", "fr", "de", "ja"]  # Spanish, French, German, Japanese
)

for item in result:
    print(f"Source: {item.detected_language.language if item.detected_language else 'unknown'}")
    for translation in item.translations:
        print(f"  {translation.to}: {translation.text}")
```

#### Imported: Specify Source Language

```python
result = client.translate(
    body=["Bonjour le monde"],
    from_parameter="fr",  # Source is French
    to=["en", "es"]
)
```

#### Imported: Language Detection

```python
result = client.translate(
    body=["Hola, como estas?"],
    to=["en"]
)

for item in result:
    if item.detected_language:
        print(f"Detected language: {item.detected_language.language}")
        print(f"Confidence: {item.detected_language.score:.2f}")
```

#### Imported: Transliteration

Convert text from one script to another:

```python
result = client.transliterate(
    body=["konnichiwa"],
    language="ja",
    from_script="Latn",  # From Latin script
    to_script="Jpan"      # To Japanese script
)

for item in result:
    print(f"Transliterated: {item.text}")
    print(f"Script: {item.script}")
```

#### Imported: Dictionary Lookup

Find alternate translations and definitions:

```python
result = client.lookup_dictionary_entries(
    body=["fly"],
    from_parameter="en",
    to="es"
)

for item in result:
    print(f"Source: {item.normalized_source} ({item.display_source})")
    for translation in item.translations:
        print(f"  Translation: {translation.normalized_target}")
        print(f"  Part of speech: {translation.pos_tag}")
        print(f"  Confidence: {translation.confidence:.2f}")
```

#### Imported: Get Supported Languages

```python
# Get all supported languages
languages = client.get_supported_languages()

# Translation languages
print("Translation languages:")
for code, lang in languages.translation.items():
    print(f"  {code}: {lang.name} ({lang.native_name})")

# Transliteration languages
print("\nTransliteration languages:")
for code, lang in languages.transliteration.items():
    print(f"  {code}: {lang.name}")
    for script in lang.scripts:
        print(f"    {script.code} -> {[t.code for t in script.to_scripts]}")

# Dictionary languages
print("\nDictionary languages:")
for code, lang in languages.dictionary.items():
    print(f"  {code}: {lang.name}")
```

#### Imported: Break Sentence

Identify sentence boundaries:

```python
result = client.find_sentence_boundaries(
    body=["Hello! How are you? I hope you are well."],
    language="en"
)

for item in result:
    print(f"Sentence lengths: {item.sent_len}")
```

#### Imported: Translation Options

```python
result = client.translate(
    body=["Hello, world!"],
    to=["de"],
    text_type="html",           # "plain" or "html"
    profanity_action="Marked",  # "NoAction", "Deleted", "Marked"
    profanity_marker="Asterisk", # "Asterisk", "Tag"
    include_alignment=True,      # Include word alignment
    include_sentence_length=True # Include sentence boundaries
)

for item in result:
    translation = item.translations[0]
    print(f"Translated: {translation.text}")
    if translation.alignment:
        print(f"Alignment: {translation.alignment.proj}")
    if translation.sent_len:
        print(f"Sentence lengths: {translation.sent_len.src_sent_len}")
```

#### Imported: Async Client

```python
from azure.ai.translation.text.aio import TextTranslationClient
from azure.core.credentials import AzureKeyCredential

async def translate_text():
    async with TextTranslationClient(
        credential=AzureKeyCredential(key),
        region=region
    ) as client:
        result = await client.translate(
            body=["Hello, world!"],
            to=["es"]
        )
        print(result[0].translations[0].text)
```

#### Imported: Client Methods

| Method | Description |
|--------|-------------|
| `translate` | Translate text to one or more languages |
| `transliterate` | Convert text between scripts |
| `detect` | Detect language of text |
| `find_sentence_boundaries` | Identify sentence boundaries |
| `lookup_dictionary_entries` | Dictionary lookup for translations |
| `lookup_dictionary_examples` | Get usage examples |
| `get_supported_languages` | List supported languages |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
