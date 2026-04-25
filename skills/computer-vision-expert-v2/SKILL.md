---
name: computer-vision-expert-v2
description: "Computer Vision Expert (SOTA 2026) workflow skill. Use this skill when the user needs SOTA Computer Vision Expert (2026). Specialized in YOLO26, Segment Anything 3 (SAM 3), Vision Language Models, and real-time spatial analysis and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: machine-learning
tags: ["computer-vision-expert-v2", "computer-vision-expert", "sota", "computer", "vision", "expert", "specialized", "yolo26"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Computer Vision Expert (SOTA 2026)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/computer-vision-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Computer Vision Expert (SOTA 2026) Role: Advanced Vision Systems Architect & Spatial Intelligence Expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Capabilities, Patterns, Anti-Patterns, Sharp Edges (2026), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing high-performance real-time detection systems (YOLO26).
- Implementing zero-shot or text-guided segmentation tasks (SAM 3).
- Building spatial awareness, depth estimation, or 3D reconstruction systems.
- Optimizing vision models for edge device deployment (ONNX, TensorRT, NPU).
- Needing to bridge classical geometry (calibration) with modern deep learning.
- Use when the request clearly matches the imported source intent: SOTA Computer Vision Expert (2026). Specialized in YOLO26, Segment Anything 3 (SAM 3), Vision Language Models, and real-time spatial analysis.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Purpose

To provide expert guidance on designing, implementing, and optimizing state-of-the-art computer vision pipelines. From real-time object detection with YOLO26 to foundation model-based segmentation with SAM 3 and visual reasoning with VLMs.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @computer-vision-expert-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @computer-vision-expert-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @computer-vision-expert-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @computer-vision-expert-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/computer-vision-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@code-review-checklist-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@code-review-excellence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@code-reviewer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@code-simplifier-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Capabilities

### 1. Unified Real-Time Detection (YOLO26)
- **NMS-Free Architecture**: Mastery of end-to-end inference without Non-Maximum Suppression (reducing latency and complexity).
- **Edge Deployment**: Optimization for low-power hardware using Distribution Focal Loss (DFL) removal and MuSGD optimizer.
- **Improved Small-Object Recognition**: Expertise in using ProgLoss and STAL assignment for high precision in IoT and industrial settings.

### 2. Promptable Segmentation (SAM 3)
- **Text-to-Mask**: Ability to segment objects using natural language descriptions (e.g., "the blue container on the right").
- **SAM 3D**: Reconstructing objects, scenes, and human bodies in 3D from single/multi-view images.
- **Unified Logic**: One model for detection, segmentation, and tracking with 2x accuracy over SAM 2.

### 3. Vision Language Models (VLMs)
- **Visual Grounding**: Leveraging Florence-2, PaliGemma 2, or Qwen2-VL for semantic scene understanding.
- **Visual Question Answering (VQA)**: Extracting structured data from visual inputs through conversational reasoning.

### 4. Geometry & Reconstruction
- **Depth Anything V2**: State-of-the-art monocular depth estimation for spatial awareness.
- **Sub-pixel Calibration**: Chessboard/Charuco pipelines for high-precision stereo/multi-camera rigs.
- **Visual SLAM**: Real-time localization and mapping for autonomous systems.

#### Imported: Patterns

### 1. Text-Guided Vision Pipelines
- Use SAM 3's text-to-mask capability to isolate specific parts during inspection without needing custom detectors for every variation.
- Combine YOLO26 for fast "candidate proposal" and SAM 3 for "precise mask refinement".

### 2. Deployment-First Design
- Leverage YOLO26's simplified ONNX/TensorRT exports (NMS-free).
- Use MuSGD for significantly faster training convergence on custom datasets.

### 3. Progressive 3D Scene Reconstruction
- Integrate monocular depth maps with geometric homographies to build accurate 2.5D/3D representations of scenes.

#### Imported: Anti-Patterns

- **Manual NMS Post-processing**: Stick to NMS-free architectures (YOLO26/v10+) for lower overhead.
- **Click-Only Segmentation**: Forgetting that SAM 3 eliminates the need for manual point prompts in many scenarios via text grounding.
- **Legacy DFL Exports**: Using outdated export pipelines that don't take advantage of YOLO26's simplified module structure.

#### Imported: Sharp Edges (2026)

| Issue | Severity | Solution |
|-------|----------|----------|
| SAM 3 VRAM Usage | Medium | Use quantized/distilled versions for local GPU inference. |
| Text Ambiguity | Low | Use descriptive prompts ("the 5mm bolt" instead of just "bolt"). |
| Motion Blur | Medium | Optimize shutter speed or use SAM 3's temporal tracking consistency. |
| Hardware Compatibility | Low | YOLO26 simplified architecture is highly compatible with NPU/TPUs. |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
