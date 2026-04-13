---
name: azure-ai-vision-imageanalysis-java
description: "Azure AI Vision Image Analysis SDK for Java workflow skill. Use this skill when the user needs Build image analysis applications with Azure AI Vision SDK for Java. Use when implementing image captioning, OCR text extraction, object detection, tagging, or smart cropping and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["azure-ai-vision-imageanalysis-java", "build", "image", "analysis", "applications", "azure", "vision", "sdk"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure AI Vision Image Analysis SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-vision-imageanalysis-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure AI Vision Image Analysis SDK for Java Build image analysis applications using the Azure AI Vision Image Analysis SDK for Java.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Visual Features, Core Patterns, Error Handling, Environment Variables, Image Requirements.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "image analysis Java"
- "Azure Vision SDK"
- "image captioning"
- "OCR image text extraction"
- "object detection image"
- "smart crop thumbnail"

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-ai-vision-imageanalysis</artifactId> <version>1.1.0-beta.1</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-ai-vision-imageanalysis</artifactId>
    <version>1.1.0-beta.1</version>
</dependency>
```

#### Imported: Client Creation

### With API Key

```java
import com.azure.ai.vision.imageanalysis.ImageAnalysisClient;
import com.azure.ai.vision.imageanalysis.ImageAnalysisClientBuilder;
import com.azure.core.credential.KeyCredential;

String endpoint = System.getenv("VISION_ENDPOINT");
String key = System.getenv("VISION_KEY");

ImageAnalysisClient client = new ImageAnalysisClientBuilder()
    .endpoint(endpoint)
    .credential(new KeyCredential(key))
    .buildClient();
```

### Async Client

```java
import com.azure.ai.vision.imageanalysis.ImageAnalysisAsyncClient;

ImageAnalysisAsyncClient asyncClient = new ImageAnalysisClientBuilder()
    .endpoint(endpoint)
    .credential(new KeyCredential(key))
    .buildAsyncClient();
```

### With DefaultAzureCredential

```java
import com.azure.identity.DefaultAzureCredentialBuilder;

ImageAnalysisClient client = new ImageAnalysisClientBuilder()
    .endpoint(endpoint)
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-vision-imageanalysis-java to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-vision-imageanalysis-java/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-vision-imageanalysis-java/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-vision-imageanalysis-java using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-vision-imageanalysis-java`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Visual Features

| Feature | Description |
|---------|-------------|
| `CAPTION` | Generate human-readable image description |
| `DENSE_CAPTIONS` | Captions for up to 10 regions |
| `READ` | OCR - Extract text from images |
| `TAGS` | Content tags for objects, scenes, actions |
| `OBJECTS` | Detect objects with bounding boxes |
| `SMART_CROPS` | Smart thumbnail regions |
| `PEOPLE` | Detect people with locations |

#### Imported: Core Patterns

### Generate Caption

```java
import com.azure.ai.vision.imageanalysis.models.*;
import com.azure.core.util.BinaryData;
import java.io.File;
import java.util.Arrays;

// From file
BinaryData imageData = BinaryData.fromFile(new File("image.jpg").toPath());

ImageAnalysisResult result = client.analyze(
    imageData,
    Arrays.asList(VisualFeatures.CAPTION),
    new ImageAnalysisOptions().setGenderNeutralCaption(true));

System.out.printf("Caption: \"%s\" (confidence: %.4f)%n",
    result.getCaption().getText(),
    result.getCaption().getConfidence());
```

### Generate Caption from URL

```java
ImageAnalysisResult result = client.analyzeFromUrl(
    "https://example.com/image.jpg",
    Arrays.asList(VisualFeatures.CAPTION),
    new ImageAnalysisOptions().setGenderNeutralCaption(true));

System.out.printf("Caption: \"%s\"%n", result.getCaption().getText());
```

### Extract Text (OCR)

```java
ImageAnalysisResult result = client.analyze(
    BinaryData.fromFile(new File("document.jpg").toPath()),
    Arrays.asList(VisualFeatures.READ),
    null);

for (DetectedTextBlock block : result.getRead().getBlocks()) {
    for (DetectedTextLine line : block.getLines()) {
        System.out.printf("Line: '%s'%n", line.getText());
        System.out.printf("  Bounding polygon: %s%n", line.getBoundingPolygon());
        
        for (DetectedTextWord word : line.getWords()) {
            System.out.printf("  Word: '%s' (confidence: %.4f)%n",
                word.getText(),
                word.getConfidence());
        }
    }
}
```

### Detect Objects

```java
ImageAnalysisResult result = client.analyzeFromUrl(
    imageUrl,
    Arrays.asList(VisualFeatures.OBJECTS),
    null);

for (DetectedObject obj : result.getObjects()) {
    System.out.printf("Object: %s (confidence: %.4f)%n",
        obj.getTags().get(0).getName(),
        obj.getTags().get(0).getConfidence());
    
    ImageBoundingBox box = obj.getBoundingBox();
    System.out.printf("  Location: x=%d, y=%d, w=%d, h=%d%n",
        box.getX(), box.getY(), box.getWidth(), box.getHeight());
}
```

### Get Tags

```java
ImageAnalysisResult result = client.analyzeFromUrl(
    imageUrl,
    Arrays.asList(VisualFeatures.TAGS),
    null);

for (DetectedTag tag : result.getTags()) {
    System.out.printf("Tag: %s (confidence: %.4f)%n",
        tag.getName(),
        tag.getConfidence());
}
```

### Detect People

```java
ImageAnalysisResult result = client.analyzeFromUrl(
    imageUrl,
    Arrays.asList(VisualFeatures.PEOPLE),
    null);

for (DetectedPerson person : result.getPeople()) {
    ImageBoundingBox box = person.getBoundingBox();
    System.out.printf("Person at x=%d, y=%d (confidence: %.4f)%n",
        box.getX(), box.getY(), person.getConfidence());
}
```

### Smart Cropping

```java
ImageAnalysisResult result = client.analyzeFromUrl(
    imageUrl,
    Arrays.asList(VisualFeatures.SMART_CROPS),
    new ImageAnalysisOptions().setSmartCropsAspectRatios(Arrays.asList(1.0, 1.5)));

for (CropRegion crop : result.getSmartCrops()) {
    System.out.printf("Crop region: aspect=%.2f, x=%d, y=%d, w=%d, h=%d%n",
        crop.getAspectRatio(),
        crop.getBoundingBox().getX(),
        crop.getBoundingBox().getY(),
        crop.getBoundingBox().getWidth(),
        crop.getBoundingBox().getHeight());
}
```

### Dense Captions

```java
ImageAnalysisResult result = client.analyzeFromUrl(
    imageUrl,
    Arrays.asList(VisualFeatures.DENSE_CAPTIONS),
    new ImageAnalysisOptions().setGenderNeutralCaption(true));

for (DenseCaption caption : result.getDenseCaptions()) {
    System.out.printf("Caption: \"%s\" (confidence: %.4f)%n",
        caption.getText(),
        caption.getConfidence());
    System.out.printf("  Region: x=%d, y=%d, w=%d, h=%d%n",
        caption.getBoundingBox().getX(),
        caption.getBoundingBox().getY(),
        caption.getBoundingBox().getWidth(),
        caption.getBoundingBox().getHeight());
}
```

### Multiple Features

```java
ImageAnalysisResult result = client.analyzeFromUrl(
    imageUrl,
    Arrays.asList(
        VisualFeatures.CAPTION,
        VisualFeatures.TAGS,
        VisualFeatures.OBJECTS,
        VisualFeatures.READ),
    new ImageAnalysisOptions()
        .setGenderNeutralCaption(true)
        .setLanguage("en"));

// Access all results
System.out.println("Caption: " + result.getCaption().getText());
System.out.println("Tags: " + result.getTags().size());
System.out.println("Objects: " + result.getObjects().size());
System.out.println("Text blocks: " + result.getRead().getBlocks().size());
```

### Async Analysis

```java
asyncClient.analyzeFromUrl(
    imageUrl,
    Arrays.asList(VisualFeatures.CAPTION),
    null)
    .subscribe(
        result -> System.out.println("Caption: " + result.getCaption().getText()),
        error -> System.err.println("Error: " + error.getMessage()),
        () -> System.out.println("Complete")
    );
```

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;

try {
    client.analyzeFromUrl(imageUrl, Arrays.asList(VisualFeatures.CAPTION), null);
} catch (HttpResponseException e) {
    System.out.println("Status: " + e.getResponse().getStatusCode());
    System.out.println("Error: " + e.getMessage());
}
```

#### Imported: Environment Variables

```bash
VISION_ENDPOINT=https://<resource>.cognitiveservices.azure.com/
VISION_KEY=<your-api-key>
```

#### Imported: Image Requirements

- Formats: JPEG, PNG, GIF, BMP, WEBP, ICO, TIFF, MPO
- Size: < 20 MB
- Dimensions: 50x50 to 16000x16000 pixels

#### Imported: Regional Availability

Caption and Dense Captions require GPU-supported regions. Check [supported regions](https://learn.microsoft.com/azure/ai-services/computer-vision/concept-describe-images-40) before deployment.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
