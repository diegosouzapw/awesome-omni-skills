---
name: azure-ai-contentsafety-ts
description: "Azure AI Content Safety REST SDK for TypeScript workflow skill. Use this skill when the user needs Analyze text and images for harmful content with customizable blocklists and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["azure-ai-contentsafety-ts", "analyze", "text", "and", "images", "for", "harmful", "content"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure AI Content Safety REST SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-contentsafety-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure AI Content Safety REST SDK for TypeScript Analyze text and images for harmful content with customizable blocklists.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Analyze Text, Analyze Image, Blocklist Management, Harm Categories.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Analyze text and images for harmful content with customizable blocklists.
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

1. bash npm install @azure-rest/ai-content-safety @azure/identity @azure/core-auth
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure-rest/ai-content-safety @azure/identity @azure/core-auth
```

#### Imported: Environment Variables

```bash
CONTENT_SAFETY_ENDPOINT=https://<resource>.cognitiveservices.azure.com
CONTENT_SAFETY_KEY=<api-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-contentsafety-ts to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-contentsafety-ts/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-contentsafety-ts/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-contentsafety-ts using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always use isUnexpected() - Type guard for error handling
- Set appropriate thresholds - Different categories may need different severity thresholds
- Use blocklists for domain-specific terms - Supplement AI detection with custom rules
- Log moderation decisions - Keep audit trail for compliance
- Handle edge cases - Empty text, very long text, unsupported image formats
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Always use isUnexpected()** - Type guard for error handling
2. **Set appropriate thresholds** - Different categories may need different severity thresholds
3. **Use blocklists for domain-specific terms** - Supplement AI detection with custom rules
4. **Log moderation decisions** - Keep audit trail for compliance
5. **Handle edge cases** - Empty text, very long text, unsupported image formats

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-contentsafety-ts`, fails to mention provenance, or does not use the support pack at all.
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

**Important**: This is a REST client. `ContentSafetyClient` is a **function**, not a class.

### API Key

```typescript
import ContentSafetyClient from "@azure-rest/ai-content-safety";
import { AzureKeyCredential } from "@azure/core-auth";

const client = ContentSafetyClient(
  process.env.CONTENT_SAFETY_ENDPOINT!,
  new AzureKeyCredential(process.env.CONTENT_SAFETY_KEY!)
);
```

### DefaultAzureCredential

```typescript
import ContentSafetyClient from "@azure-rest/ai-content-safety";
import { DefaultAzureCredential } from "@azure/identity";

const client = ContentSafetyClient(
  process.env.CONTENT_SAFETY_ENDPOINT!,
  new DefaultAzureCredential()
);
```

#### Imported: Analyze Text

```typescript
import ContentSafetyClient, { isUnexpected } from "@azure-rest/ai-content-safety";

const result = await client.path("/text:analyze").post({
  body: {
    text: "Text content to analyze",
    categories: ["Hate", "Sexual", "Violence", "SelfHarm"],
    outputType: "FourSeverityLevels"  // or "EightSeverityLevels"
  }
});

if (isUnexpected(result)) {
  throw result.body;
}

for (const analysis of result.body.categoriesAnalysis) {
  console.log(`${analysis.category}: severity ${analysis.severity}`);
}
```

#### Imported: Analyze Image

### Base64 Content

```typescript
import { readFileSync } from "node:fs";

const imageBuffer = readFileSync("./image.png");
const base64Image = imageBuffer.toString("base64");

const result = await client.path("/image:analyze").post({
  body: {
    image: { content: base64Image }
  }
});

if (isUnexpected(result)) {
  throw result.body;
}

for (const analysis of result.body.categoriesAnalysis) {
  console.log(`${analysis.category}: severity ${analysis.severity}`);
}
```

### Blob URL

```typescript
const result = await client.path("/image:analyze").post({
  body: {
    image: { blobUrl: "https://storage.blob.core.windows.net/container/image.png" }
  }
});
```

#### Imported: Blocklist Management

### Create Blocklist

```typescript
const result = await client
  .path("/text/blocklists/{blocklistName}", "my-blocklist")
  .patch({
    contentType: "application/merge-patch+json",
    body: {
      description: "Custom blocklist for prohibited terms"
    }
  });

if (isUnexpected(result)) {
  throw result.body;
}

console.log(`Created: ${result.body.blocklistName}`);
```

### Add Items to Blocklist

```typescript
const result = await client
  .path("/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems", "my-blocklist")
  .post({
    body: {
      blocklistItems: [
        { text: "prohibited-term-1", description: "First blocked term" },
        { text: "prohibited-term-2", description: "Second blocked term" }
      ]
    }
  });

if (isUnexpected(result)) {
  throw result.body;
}

for (const item of result.body.blocklistItems ?? []) {
  console.log(`Added: ${item.blocklistItemId}`);
}
```

### Analyze with Blocklist

```typescript
const result = await client.path("/text:analyze").post({
  body: {
    text: "Text that might contain blocked terms",
    blocklistNames: ["my-blocklist"],
    haltOnBlocklistHit: false
  }
});

if (isUnexpected(result)) {
  throw result.body;
}

// Check blocklist matches
if (result.body.blocklistsMatch) {
  for (const match of result.body.blocklistsMatch) {
    console.log(`Blocked: "${match.blocklistItemText}" from ${match.blocklistName}`);
  }
}
```

### List Blocklists

```typescript
const result = await client.path("/text/blocklists").get();

if (isUnexpected(result)) {
  throw result.body;
}

for (const blocklist of result.body.value ?? []) {
  console.log(`${blocklist.blocklistName}: ${blocklist.description}`);
}
```

### Delete Blocklist

```typescript
await client.path("/text/blocklists/{blocklistName}", "my-blocklist").delete();
```

#### Imported: Harm Categories

| Category | API Term | Description |
|----------|----------|-------------|
| Hate and Fairness | `Hate` | Discriminatory language targeting identity groups |
| Sexual | `Sexual` | Sexual content, nudity, pornography |
| Violence | `Violence` | Physical harm, weapons, terrorism |
| Self-Harm | `SelfHarm` | Self-injury, suicide, eating disorders |

#### Imported: Severity Levels

| Level | Risk | Recommended Action |
|-------|------|-------------------|
| 0 | Safe | Allow |
| 2 | Low | Review or allow with warning |
| 4 | Medium | Block or require human review |
| 6 | High | Block immediately |

**Output Types**:
- `FourSeverityLevels` (default): Returns 0, 2, 4, 6
- `EightSeverityLevels`: Returns 0-7

#### Imported: Content Moderation Helper

```typescript
import ContentSafetyClient, { 
  isUnexpected, 
  TextCategoriesAnalysisOutput 
} from "@azure-rest/ai-content-safety";

interface ModerationResult {
  isAllowed: boolean;
  flaggedCategories: string[];
  maxSeverity: number;
  blocklistMatches: string[];
}

async function moderateContent(
  client: ReturnType<typeof ContentSafetyClient>,
  text: string,
  maxAllowedSeverity = 2,
  blocklistNames: string[] = []
): Promise<ModerationResult> {
  const result = await client.path("/text:analyze").post({
    body: { text, blocklistNames, haltOnBlocklistHit: false }
  });

  if (isUnexpected(result)) {
    throw result.body;
  }

  const flaggedCategories = result.body.categoriesAnalysis
    .filter(c => (c.severity ?? 0) > maxAllowedSeverity)
    .map(c => c.category!);

  const maxSeverity = Math.max(
    ...result.body.categoriesAnalysis.map(c => c.severity ?? 0)
  );

  const blocklistMatches = (result.body.blocklistsMatch ?? [])
    .map(m => m.blocklistItemText!);

  return {
    isAllowed: flaggedCategories.length === 0 && blocklistMatches.length === 0,
    flaggedCategories,
    maxSeverity,
    blocklistMatches
  };
}
```

#### Imported: API Endpoints

| Operation | Method | Path |
|-----------|--------|------|
| Analyze Text | POST | `/text:analyze` |
| Analyze Image | POST | `/image:analyze` |
| Create/Update Blocklist | PATCH | `/text/blocklists/{blocklistName}` |
| List Blocklists | GET | `/text/blocklists` |
| Delete Blocklist | DELETE | `/text/blocklists/{blocklistName}` |
| Add Blocklist Items | POST | `/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems` |
| List Blocklist Items | GET | `/text/blocklists/{blocklistName}/blocklistItems` |
| Remove Blocklist Items | POST | `/text/blocklists/{blocklistName}:removeBlocklistItems` |

#### Imported: Key Types

```typescript
import ContentSafetyClient, {
  isUnexpected,
  AnalyzeTextParameters,
  AnalyzeImageParameters,
  TextCategoriesAnalysisOutput,
  ImageCategoriesAnalysisOutput,
  TextBlocklist,
  TextBlocklistItem
} from "@azure-rest/ai-content-safety";
```
