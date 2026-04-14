---
name: azure-ai-translation-ts
description: "Azure Translation SDKs for TypeScript workflow skill. Use this skill when the user needs Text and document translation with REST-style clients and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: communication
tags: ["azure-ai-translation-ts", "text", "and", "document", "translation", "rest-style", "clients", "communication"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure Translation SDKs for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-translation-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Translation SDKs for TypeScript Text and document translation with REST-style clients.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Text Translation Client, Document Translation Client, Key Types, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Text and document translation with REST-style clients.
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

1. bash # Text translation npm install @azure-rest/ai-translation-text @azure/identity # Document translation npm install @azure-rest/ai-translation-document @azure/identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Text translation
npm install @azure-rest/ai-translation-text @azure/identity

# Document translation
npm install @azure-rest/ai-translation-document @azure/identity
```

#### Imported: Environment Variables

```bash
TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com
TRANSLATOR_SUBSCRIPTION_KEY=<your-api-key>
TRANSLATOR_REGION=<your-region>  # e.g., westus, eastus
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-translation-ts to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-translation-ts/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-translation-ts/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-translation-ts using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Auto-detect source - Omit language parameter to auto-detect
- Batch requests - Translate multiple texts in one call for efficiency
- Use SAS tokens - For document translation, use time-limited SAS URLs
- Handle errors - Always check isUnexpected(response) before accessing body
- Regional endpoints - Use regional endpoints for lower latency
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Auto-detect source** - Omit `language` parameter to auto-detect
2. **Batch requests** - Translate multiple texts in one call for efficiency
3. **Use SAS tokens** - For document translation, use time-limited SAS URLs
4. **Handle errors** - Always check `isUnexpected(response)` before accessing body
5. **Regional endpoints** - Use regional endpoints for lower latency

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-translation-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Text Translation Client

### Authentication

```typescript
import TextTranslationClient, { TranslatorCredential } from "@azure-rest/ai-translation-text";

// API Key + Region
const credential: TranslatorCredential = {
  key: process.env.TRANSLATOR_SUBSCRIPTION_KEY!,
  region: process.env.TRANSLATOR_REGION!,
};
const client = TextTranslationClient(process.env.TRANSLATOR_ENDPOINT!, credential);

// Or just credential (uses global endpoint)
const client2 = TextTranslationClient(credential);
```

### Translate Text

```typescript
import TextTranslationClient, { isUnexpected } from "@azure-rest/ai-translation-text";

const response = await client.path("/translate").post({
  body: {
    inputs: [
      {
        text: "Hello, how are you?",
        language: "en",  // source (optional, auto-detect)
        targets: [
          { language: "es" },
          { language: "fr" },
        ],
      },
    ],
  },
});

if (isUnexpected(response)) {
  throw response.body.error;
}

for (const result of response.body.value) {
  for (const translation of result.translations) {
    console.log(`${translation.language}: ${translation.text}`);
  }
}
```

### Translate with Options

```typescript
const response = await client.path("/translate").post({
  body: {
    inputs: [
      {
        text: "Hello world",
        language: "en",
        textType: "Plain",  // or "Html"
        targets: [
          {
            language: "de",
            profanityAction: "NoAction",  // "Marked" | "Deleted"
            tone: "formal",  // LLM-specific
          },
        ],
      },
    ],
  },
});
```

### Get Supported Languages

```typescript
const response = await client.path("/languages").get();

if (isUnexpected(response)) {
  throw response.body.error;
}

// Translation languages
for (const [code, lang] of Object.entries(response.body.translation || {})) {
  console.log(`${code}: ${lang.name} (${lang.nativeName})`);
}
```

### Transliterate

```typescript
const response = await client.path("/transliterate").post({
  body: { inputs: [{ text: "这是个测试" }] },
  queryParameters: {
    language: "zh-Hans",
    fromScript: "Hans",
    toScript: "Latn",
  },
});

if (!isUnexpected(response)) {
  for (const t of response.body.value) {
    console.log(`${t.script}: ${t.text}`);  // Latn: zhè shì gè cè shì
  }
}
```

### Detect Language

```typescript
const response = await client.path("/detect").post({
  body: { inputs: [{ text: "Bonjour le monde" }] },
});

if (!isUnexpected(response)) {
  for (const result of response.body.value) {
    console.log(`Language: ${result.language}, Score: ${result.score}`);
  }
}
```

#### Imported: Document Translation Client

### Authentication

```typescript
import DocumentTranslationClient from "@azure-rest/ai-translation-document";
import { DefaultAzureCredential } from "@azure/identity";

const endpoint = "https://<translator>.cognitiveservices.azure.com";

// TokenCredential
const client = DocumentTranslationClient(endpoint, new DefaultAzureCredential());

// API Key
const client2 = DocumentTranslationClient(endpoint, { key: "<api-key>" });
```

### Single Document Translation

```typescript
import DocumentTranslationClient from "@azure-rest/ai-translation-document";
import { writeFile } from "node:fs/promises";

const response = await client.path("/document:translate").post({
  queryParameters: {
    targetLanguage: "es",
    sourceLanguage: "en",  // optional
  },
  contentType: "multipart/form-data",
  body: [
    {
      name: "document",
      body: "Hello, this is a test document.",
      filename: "test.txt",
      contentType: "text/plain",
    },
  ],
}).asNodeStream();

if (response.status === "200") {
  await writeFile("translated.txt", response.body);
}
```

### Batch Document Translation

```typescript
import { ContainerSASPermissions, BlobServiceClient } from "@azure/storage-blob";

// Generate SAS URLs for source and target containers
const sourceSas = await sourceContainer.generateSasUrl({
  permissions: ContainerSASPermissions.parse("rl"),
  expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000),
});

const targetSas = await targetContainer.generateSasUrl({
  permissions: ContainerSASPermissions.parse("rwl"),
  expiresOn: new Date(Date.now() + 24 * 60 * 60 * 1000),
});

// Start batch translation
const response = await client.path("/document/batches").post({
  body: {
    inputs: [
      {
        source: { sourceUrl: sourceSas },
        targets: [
          { targetUrl: targetSas, language: "fr" },
        ],
      },
    ],
  },
});

// Get operation ID from header
const operationId = new URL(response.headers["operation-location"])
  .pathname.split("/").pop();
```

### Get Translation Status

```typescript
import { isUnexpected, paginate } from "@azure-rest/ai-translation-document";

const statusResponse = await client.path("/document/batches/{id}", operationId).get();

if (!isUnexpected(statusResponse)) {
  const status = statusResponse.body;
  console.log(`Status: ${status.status}`);
  console.log(`Total: ${status.summary.total}`);
  console.log(`Success: ${status.summary.success}`);
}

// List documents with pagination
const docsResponse = await client.path("/document/batches/{id}/documents", operationId).get();
const documents = paginate(client, docsResponse);

for await (const doc of documents) {
  console.log(`${doc.id}: ${doc.status}`);
}
```

### Get Supported Formats

```typescript
const response = await client.path("/document/formats").get();

if (!isUnexpected(response)) {
  for (const format of response.body.value) {
    console.log(`${format.format}: ${format.fileExtensions.join(", ")}`);
  }
}
```

#### Imported: Key Types

```typescript
// Text Translation
import type {
  TranslatorCredential,
  TranslatorTokenCredential,
} from "@azure-rest/ai-translation-text";

// Document Translation
import type {
  DocumentTranslateParameters,
  StartTranslationDetails,
  TranslationStatus,
} from "@azure-rest/ai-translation-document";
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
