---
name: hugging-face-vision-trainer
description: "Vision Model Training on Hugging Face Jobs workflow skill. Use this skill when the user needs Train or fine-tune vision models on Hugging Face Jobs for detection, classification, and SAM or SAM2 segmentation and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: machine-learning
tags: ["hugging-face-vision-trainer", "train", "fine-tune", "vision", "models", "hugging", "face", "jobs"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Vision Model Training on Hugging Face Jobs

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hugging-face-vision-trainer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Vision Model Training on Hugging Face Jobs Train object detection, image classification, and SAM/SAM2 segmentation models on managed cloud GPUs. No local GPU setup required—results are automatically saved to the Hugging Face Hub.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Local Script Execution, Prerequisites Checklist, Dataset Validation, Critical directives, Model & hardware selection, Quick start — Object Detection.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Fine-tune object detection models (D-FINE, RT-DETR v2, DETR, YOLOS) on cloud GPUs or local
- Fine-tune image classification models (timm: MobileNetV3, MobileViT, ResNet, ViT/DINOv3, or any Transformers classifier) on cloud GPUs or local
- Fine-tune SAM or SAM2 models for segmentation / image matting using bbox or point prompts
- Train bounding-box detectors on custom datasets
- Train image classifiers on custom datasets
- Train segmentation models on custom mask datasets with prompts

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/finetune_sam2_trainer.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/hub_saving.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. [ ] Step 1: Verify prerequisites (account, token, dataset)
2. [ ] Step 2: Validate dataset format (run dataset_inspector.py)
3. [ ] Step 3: Ask user about dataset size and validation split
4. [ ] Step 4: Prepare training script (OD: scripts/objectdetectiontraining.py, IC: scripts/imageclassificationtraining.py, SAM: scripts/samsegmentationtraining.py)
5. [ ] Step 5: Save script locally, submit job, and report details
6. Save the script locally to submittedjobs/ in the workspace root (create if needed) with a descriptive name like training<dataset><YYYYMMDDHHMMSS>.py. Tell the user the path.
7. Submit using hfjobs MCP tool (preferred) or HfApi().runuvjob() — see directive #1 for both methods. Pass all config via scriptargs.

### Imported Workflow Notes

#### Imported: Automatic Bbox Preprocessing

The object detection training script (`scripts/object_detection_training.py`) automatically handles bbox format detection (xyxy→xywh conversion), bbox sanitization, `image_id` generation, string category→integer remapping, and dataset truncation. **No manual preprocessing needed** — just ensure the dataset has `objects.bbox` and `objects.category` columns.

#### Imported: Training workflow

Copy this checklist and track progress:

```
Training Progress:
- [ ] Step 1: Verify prerequisites (account, token, dataset)
- [ ] Step 2: Validate dataset format (run dataset_inspector.py)
- [ ] Step 3: Ask user about dataset size and validation split
- [ ] Step 4: Prepare training script (OD: scripts/object_detection_training.py, IC: scripts/image_classification_training.py, SAM: scripts/sam_segmentation_training.py)
- [ ] Step 5: Save script locally, submit job, and report details
```

**Step 1: Verify prerequisites**

Follow the Prerequisites Checklist above.

**Step 2: Validate dataset**

Run the dataset inspector BEFORE spending GPU time. See "Dataset Validation" section above.

**Step 3: Ask user preferences**

ALWAYS use the AskUserQuestion tool with option-style format:

```python
AskUserQuestion({
    "questions": [
        {
            "question": "Do you want to run a quick test with a subset of the data first?",
            "header": "Dataset Size",
            "options": [
                {"label": "Quick test run (10% of data)", "description": "Faster, cheaper (~30-60 min, ~$2-5) to validate setup"},
                {"label": "Full dataset (Recommended)", "description": "Complete training for best model quality"}
            ],
            "multiSelect": false
        },
        {
            "question": "Do you want to create a validation split from the training data?",
            "header": "Split data",
            "options": [
                {"label": "Yes (Recommended)", "description": "Automatically split 15% of training data for validation"},
                {"label": "No", "description": "Use existing validation split from dataset"}
            ],
            "multiSelect": false
        },
        {
            "question": "Which GPU hardware do you want to use?",
            "header": "Hardware Flavor",
            "options": [
                {"label": "t4-small ($0.40/hr)", "description": "1x T4, 16 GB VRAM — sufficient for all OD models under 100M params"},
                {"label": "l4x1 ($0.80/hr)", "description": "1x L4, 24 GB VRAM — more headroom for large images or batch sizes"},
                {"label": "a10g-large ($1.50/hr)", "description": "1x A10G, 24 GB VRAM — faster training, more CPU/RAM"},
                {"label": "a100-large ($2.50/hr)", "description": "1x A100, 80 GB VRAM — fastest, for very large datasets or image sizes"}
            ],
            "multiSelect": false
        }
    ]
})
```

**Step 4: Prepare training script**

For object detection, use [scripts/object_detection_training.py](scripts/object_detection_training.py) as the production-ready template. For image classification, use [scripts/image_classification_training.py](scripts/image_classification_training.py). For SAM/SAM2 segmentation, use [scripts/sam_segmentation_training.py](scripts/sam_segmentation_training.py). All scripts use `HfArgumentParser` — all configuration is passed via CLI arguments in `script_args`, NOT by editing Python variables. For timm model details, see [references/timm_trainer.md](references/timm_trainer.md). For SAM2 training details, see [references/finetune_sam2_trainer.md](references/finetune_sam2_trainer.md).

**Step 5: Save script, submit job, and report**

1. **Save the script locally** to `submitted_jobs/` in the workspace root (create if needed) with a descriptive name like `training_<dataset>_<YYYYMMDD_HHMMSS>.py`. Tell the user the path.
2. **Submit** using `hf_jobs` MCP tool (preferred) or `HfApi().run_uv_job()` — see directive #1 for both methods. Pass all config via `script_args`.
3. **Report** the job ID (from `.id` attribute), monitoring URL, Trackio dashboard (`https://huggingface.co/spaces/{username}/trackio`), expected time, and estimated cost.
4. **Wait for user** to request status checks — don't poll automatically. Training jobs run asynchronously and can take hours.

#### Imported: Local Script Execution

Helper scripts use PEP 723 inline dependencies. Run them with `uv run`:
```bash
uv run scripts/dataset_inspector.py --dataset username/dataset-name --split train
uv run scripts/estimate_cost.py --help
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hugging-face-vision-trainer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hugging-face-vision-trainer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hugging-face-vision-trainer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hugging-face-vision-trainer using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hugging-face-vision-trainer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common failure modes

### OOM (CUDA out of memory)
Reduce `per_device_train_batch_size` (try 4, then 2), reduce `IMAGE_SIZE`, or upgrade hardware.

### Dataset format errors
Run `scripts/dataset_inspector.py` first. The training script auto-detects xyxy vs xywh, converts string categories to integer IDs, and adds `image_id` if missing. Ensure `objects.bbox` contains 4-value coordinate lists in absolute pixels and `objects.category` contains either integer IDs or string labels.

### Hub push failures (401)
Verify: (1) job secrets include token (see directive #2), (2) script sets `training_args.hub_token` BEFORE creating the `Trainer`, (3) `push_to_hub=True` is set, (4) correct `hub_model_id`, (5) token has write permissions.

### Job timeout
Increase timeout (see directive #5 table), reduce epochs/dataset, or use checkpoint strategy with `hub_strategy="every_save"`.

### KeyError: 'test' (missing test split)
The object detection training script handles this gracefully — it falls back to the `validation` split. Ensure you're using the latest `scripts/object_detection_training.py`.

### Single-class dataset: "iteration over a 0-d tensor"
`torchmetrics.MeanAveragePrecision` returns scalar (0-d) tensors for per-class metrics when there's only one class. The template `scripts/object_detection_training.py` handles this by calling `.unsqueeze(0)` on these tensors. Ensure you're using the latest template.

### Poor detection performance (mAP < 0.15)
Increase epochs (30-50), ensure 500+ images, check per-class mAP for imbalanced classes, try different learning rates (1e-5 to 1e-4), increase image size.

For comprehensive troubleshooting: see [references/reliability_principles.md](references/reliability_principles.md)

## Related Skills

- `@github-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/finetune_sam2_trainer.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/dataset_inspector.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [finetune_sam2_trainer.md](references/finetune_sam2_trainer.md)
- [hub_saving.md](references/hub_saving.md)
- [image_classification_training_notebook.md](references/image_classification_training_notebook.md)
- [object_detection_training_notebook.md](references/object_detection_training_notebook.md)
- [dataset_inspector.py](scripts/dataset_inspector.py)
- [estimate_cost.py](scripts/estimate_cost.py)
- [image_classification_training.py](scripts/image_classification_training.py)
- [object_detection_training.py](scripts/object_detection_training.py)

### Imported Reference Notes

#### Imported: Reference files

- [scripts/object_detection_training.py](scripts/object_detection_training.py) — Production-ready object detection training script
- [scripts/image_classification_training.py](scripts/image_classification_training.py) — Production-ready image classification training script (supports timm models)
- [scripts/sam_segmentation_training.py](scripts/sam_segmentation_training.py) — Production-ready SAM/SAM2 segmentation training script (bbox & point prompts)
- [scripts/dataset_inspector.py](scripts/dataset_inspector.py) — Validate dataset format for OD, classification, and SAM segmentation
- [scripts/estimate_cost.py](scripts/estimate_cost.py) — Estimate training costs for any vision model (includes SAM/SAM2)
- [references/object_detection_training_notebook.md](references/object_detection_training_notebook.md) — Object detection training workflow, augmentation strategies, and training patterns
- [references/image_classification_training_notebook.md](references/image_classification_training_notebook.md) — Image classification training workflow with ViT, preprocessing, and evaluation
- [references/finetune_sam2_trainer.md](references/finetune_sam2_trainer.md) — SAM2 fine-tuning walkthrough with MicroMat dataset, DiceCE loss, and Trainer integration
- [references/timm_trainer.md](references/timm_trainer.md) — Using timm models with HF Trainer (TimmWrapper, transforms, full example)
- [references/hub_saving.md](references/hub_saving.md) — Detailed Hub persistence guide and verification checklist
- [references/reliability_principles.md](references/reliability_principles.md) — Failure prevention principles from production experience

#### Imported: Prerequisites Checklist

Before starting any training job, verify:

### Account & Authentication
- Hugging Face Account with [Pro](https://hf.co/pro), [Team](https://hf.co/enterprise), or [Enterprise](https://hf.co/enterprise) plan (Jobs require paid plan)
- Authenticated login: Check with `hf_whoami()` (tool) or `hf auth whoami` (terminal)
- Token has **write** permissions
- **MUST pass token in job secrets** — see directive #3 below for syntax (MCP tool vs Python API)

### Dataset Requirements — Object Detection
- Dataset must exist on Hub
- Annotations must use the `objects` column with `bbox`, `category` (and optionally `area`) sub-fields
- Bboxes can be in **xywh (COCO)** or **xyxy (Pascal VOC)** format — auto-detected and converted
- Categories can be **integers or strings** — strings are auto-remapped to integer IDs
- `image_id` column is **optional** — generated automatically if missing
- **ALWAYS validate unknown datasets** before GPU training (see Dataset Validation section)

### Dataset Requirements — Image Classification
- Dataset must exist on Hub
- Must have an **`image` column** (PIL images) and a **`label` column** (integer class IDs or strings)
- The label column can be `ClassLabel` type (with names) or plain integers/strings — strings are auto-remapped
- Common column names auto-detected: `label`, `labels`, `class`, `fine_label`
- **ALWAYS validate unknown datasets** before GPU training (see Dataset Validation section)

### Dataset Requirements — SAM/SAM2 Segmentation
- Dataset must exist on Hub
- Must have an **`image` column** (PIL images) and a **`mask` column** (binary ground-truth segmentation mask)
- Must have a **prompt** — either:
  - A **`prompt` column** with JSON containing `{"bbox": [x0,y0,x1,y1]}` or `{"point": [x,y]}`
  - OR a dedicated **`bbox`** column with `[x0,y0,x1,y1]` values
  - OR a dedicated **`point`** column with `[x,y]` or `[[x,y],...]` values
- Bboxes should be in **xyxy** format (absolute pixel coordinates)
- Example dataset: `merve/MicroMat-mini` (image matting with bbox prompts)
- **ALWAYS validate unknown datasets** before GPU training (see Dataset Validation section)

### Critical Settings
- **Timeout must exceed expected training time** — Default 30min is TOO SHORT. See directive #6 for recommended values.
- **Hub push must be enabled** — `push_to_hub=True`, `hub_model_id="username/model-name"`, token in `secrets`

#### Imported: Dataset Validation

**Validate dataset format BEFORE launching GPU training to prevent the #1 cause of training failures: format mismatches.**

**ALWAYS validate for** unknown/custom datasets or any dataset you haven't trained with before. **Skip for** `cppe-5` (the default in the training script).

### Running the Inspector

**Option 1: Via HF Jobs (recommended — avoids local SSL/dependency issues):**
```python
hf_jobs("uv", {
    "script": "path/to/dataset_inspector.py",
    "script_args": ["--dataset", "username/dataset-name", "--split", "train"]
})
```

**Option 2: Locally:**
```bash
uv run scripts/dataset_inspector.py --dataset username/dataset-name --split train
```

**Option 3: Via `HfApi().run_uv_job()` (if hf_jobs MCP unavailable):**
```python
from huggingface_hub import HfApi
api = HfApi()
api.run_uv_job(
    script="scripts/dataset_inspector.py",
    script_args=["--dataset", "username/dataset-name", "--split", "train"],
    flavor="cpu-basic",
    timeout=300,
)
```

### Reading Results

- **`✓ READY`** — Dataset is compatible, use directly
- **`✗ NEEDS FORMATTING`** — Needs preprocessing (mapping code provided in output)

#### Imported: Critical directives

These rules prevent common failures. Follow them exactly.

### 1. Job submission: `hf_jobs` MCP tool vs Python API

**`hf_jobs()` is an MCP tool, NOT a Python function.** Do NOT try to import it from `huggingface_hub`. Call it as a tool:

```
hf_jobs("uv", {"script": training_script_content, "flavor": "a10g-large", "timeout": "4h", "secrets": {"HF_TOKEN": "$HF_TOKEN"}})
```

**If `hf_jobs` MCP tool is unavailable**, use the Python API directly:

```python
from huggingface_hub import HfApi, get_token
api = HfApi()
job_info = api.run_uv_job(
    script="path/to/training_script.py",  # file PATH, NOT content
    script_args=["--dataset_name", "cppe-5", ...],
    flavor="a10g-large",
    timeout=14400,  # seconds (4 hours)
    env={"PYTHONUNBUFFERED": "1"},
    secrets={"HF_TOKEN": get_token()},  # MUST use get_token(), NOT "$HF_TOKEN"
)
print(f"Job ID: {job_info.id}")
```

**Critical differences between the two methods:**

| | `hf_jobs` MCP tool | `HfApi().run_uv_job()` |
|---|---|---|
| `script` param | Python code string or URL (NOT local paths) | File path to `.py` file (NOT content) |
| Token in secrets | `"$HF_TOKEN"` (auto-replaced) | `get_token()` (actual token value) |
| Timeout format | String (`"4h"`) | Seconds (`14400`) |

**Rules for both methods:**
- The training script MUST include PEP 723 inline metadata with dependencies
- Do NOT use `image` or `command` parameters (those belong to `run_job()`, not `run_uv_job()`)

### 2. Authentication via job secrets + explicit hub_token injection

**Job config** MUST include the token in secrets — syntax depends on submission method (see table above).

**Training script requirement:** The Transformers `Trainer` calls `create_repo(token=self.args.hub_token)` during `__init__()` when `push_to_hub=True`. The training script MUST inject `HF_TOKEN` into `training_args.hub_token` AFTER parsing args but BEFORE creating the `Trainer`. The template `scripts/object_detection_training.py` already includes this:

```python
hf_token = os.environ.get("HF_TOKEN")
if training_args.push_to_hub and not training_args.hub_token:
    if hf_token:
        training_args.hub_token = hf_token
```

If you write a custom script, you MUST include this token injection before the `Trainer(...)` call.

- Do NOT call `login()` in custom scripts unless replicating the full pattern from `scripts/object_detection_training.py`
- Do NOT rely on implicit token resolution (`hub_token=None`) — unreliable in Jobs
- See the `hugging-face-jobs` skill → *Token Usage Guide* for full details

### 3. JobInfo attribute

Access the job identifier using `.id` (NOT `.job_id` or `.name` — these don't exist):

```python
job_info = api.run_uv_job(...)  # or hf_jobs("uv", {...})
job_id = job_info.id  # Correct -- returns string like "687fb701029421ae5549d998"
```

### 4. Required training flags and HfArgumentParser boolean syntax

`scripts/object_detection_training.py` uses `HfArgumentParser` — all config is passed via `script_args`. Boolean arguments have two syntaxes:

- **`bool` fields** (e.g., `push_to_hub`, `do_train`): Use as bare flags (`--push_to_hub`) or negate with `--no_` prefix (`--no_remove_unused_columns`)
- **`Optional[bool]` fields** (e.g., `greater_is_better`): MUST pass explicit value (`--greater_is_better True`). Bare `--greater_is_better` causes `error: expected one argument`

Required flags for object detection:

```
--no_remove_unused_columns          # MUST: preserves image column for pixel_values
--no_eval_do_concat_batches         # MUST: images have different numbers of target boxes
--push_to_hub                       # MUST: environment is ephemeral
--hub_model_id username/model-name
--metric_for_best_model eval_map
--greater_is_better True            # MUST pass "True" explicitly (Optional[bool])
--do_train
--do_eval
```

Required flags for image classification:

```
--no_remove_unused_columns          # MUST: preserves image column for pixel_values
--push_to_hub                       # MUST: environment is ephemeral
--hub_model_id username/model-name
--metric_for_best_model eval_accuracy
--greater_is_better True            # MUST pass "True" explicitly (Optional[bool])
--do_train
--do_eval
```

Required flags for SAM/SAM2 segmentation:

```
--remove_unused_columns False       # MUST: preserves input_boxes/input_points
--push_to_hub                       # MUST: environment is ephemeral
--hub_model_id username/model-name
--do_train
--prompt_type bbox                  # or "point"
--dataloader_pin_memory False       # MUST: avoids pin_memory issues with custom collator
```

### 5. Timeout management

Default 30 min is TOO SHORT for object detection. Set minimum 2-4 hours. Add 30% buffer for model loading, preprocessing, and Hub push.

| Scenario | Timeout |
|----------|---------|
| Quick test (100-200 images, 5-10 epochs) | 1h |
| Development (500-1K images, 15-20 epochs) | 2-3h |
| Production (1K-5K images, 30 epochs) | 4-6h |
| Large dataset (5K+ images) | 6-12h |

### 6. Trackio monitoring

Trackio is **always enabled** in the object detection training script — it calls `trackio.init()` and `trackio.finish()` automatically. No need to pass `--report_to trackio`. The project name is taken from `--output_dir` and the run name from `--run_name`. For image classification, pass `--report_to trackio` in `TrainingArguments`.

Dashboard at: `https://huggingface.co/spaces/{username}/trackio`

#### Imported: Model & hardware selection

### Recommended object detection models

| Model | Params | Use case |
|-------|--------|----------|
| `ustc-community/dfine-small-coco` | 10.4M | Best starting point — fast, cheap, SOTA quality |
| `PekingU/rtdetr_v2_r18vd` | 20.2M | Lightweight real-time detector |
| `ustc-community/dfine-large-coco` | 31.4M | Higher accuracy, still efficient |
| `PekingU/rtdetr_v2_r50vd` | 43M | Strong real-time baseline |
| `ustc-community/dfine-xlarge-obj365` | 63.5M | Best accuracy (pretrained on Objects365) |
| `PekingU/rtdetr_v2_r101vd` | 76M | Largest RT-DETR v2 variant |

Start with `ustc-community/dfine-small-coco` for fast iteration. Move to D-FINE Large or RT-DETR v2 R50 for better accuracy.

### Recommended image classification models

All `timm/` models work out of the box via `AutoModelForImageClassification` (loaded as `TimmWrapperForImageClassification`). See [references/timm_trainer.md](references/timm_trainer.md) for details.

| Model | Params | Use case |
|-------|--------|----------|
| `timm/mobilenetv3_small_100.lamb_in1k` | 2.5M | Ultra-lightweight — mobile/edge, fastest training |
| `timm/mobilevit_s.cvnets_in1k` | 5.6M | Mobile transformer — good accuracy/speed trade-off |
| `timm/resnet50.a1_in1k` | 25.6M | Strong CNN baseline — reliable, well-studied |
| `timm/vit_base_patch16_dinov3.lvd1689m` | 86.6M | Best accuracy — DINOv3 self-supervised ViT |

Start with `timm/mobilenetv3_small_100.lamb_in1k` for fast iteration. Move to `timm/resnet50.a1_in1k` or `timm/vit_base_patch16_dinov3.lvd1689m` for better accuracy.

### Recommended SAM/SAM2 segmentation models

| Model | Params | Use case |
|-------|--------|----------|
| `facebook/sam2.1-hiera-tiny` | 38.9M | Fastest SAM2 — good for quick experiments |
| `facebook/sam2.1-hiera-small` | 46.0M | Best starting point — good quality/speed balance |
| `facebook/sam2.1-hiera-base-plus` | 80.8M | Higher capacity for complex segmentation |
| `facebook/sam2.1-hiera-large` | 224.4M | Best SAM2 accuracy — requires more VRAM |
| `facebook/sam-vit-base` | 93.7M | Original SAM — ViT-B backbone |
| `facebook/sam-vit-large` | 312.3M | Original SAM — ViT-L backbone |
| `facebook/sam-vit-huge` | 641.1M | Original SAM — ViT-H, best SAM v1 accuracy |

Start with `facebook/sam2.1-hiera-small` for fast iteration. SAM2 models are generally more efficient than SAM v1 at similar quality. Only the mask decoder is trained by default (vision and prompt encoders are frozen).

### Hardware recommendation

All recommended OD and IC models are under 100M params — **`t4-small` (16 GB VRAM, $0.40/hr) is sufficient for all of them.** Image classification models are generally smaller and faster than object detection models — `t4-small` handles even ViT-Base comfortably. For SAM2 models up to `hiera-base-plus`, `t4-small` is sufficient since only the mask decoder is trained. For `sam2.1-hiera-large` or SAM v1 models, use `l4x1` or `a10g-large`. Only upgrade if you hit OOM from large batch sizes — reduce batch size first before switching hardware. Common upgrade path: `t4-small` → `l4x1` ($0.80/hr, 24 GB) → `a10g-large` ($1.50/hr, 24 GB).

For full hardware flavor list: refer to the `hugging-face-jobs` skill. For cost estimation: run `scripts/estimate_cost.py`.

#### Imported: Quick start — Object Detection

The `script_args` below are the same for both submission methods. See directive #1 for the critical differences between them.

```python
OD_SCRIPT_ARGS = [
    "--model_name_or_path", "ustc-community/dfine-small-coco",
    "--dataset_name", "cppe-5",
    "--image_square_size", "640",
    "--output_dir", "dfine_finetuned",
    "--num_train_epochs", "30",
    "--per_device_train_batch_size", "8",
    "--learning_rate", "5e-5",
    "--eval_strategy", "epoch",
    "--save_strategy", "epoch",
    "--save_total_limit", "2",
    "--load_best_model_at_end",
    "--metric_for_best_model", "eval_map",
    "--greater_is_better", "True",
    "--no_remove_unused_columns",
    "--no_eval_do_concat_batches",
    "--push_to_hub",
    "--hub_model_id", "username/model-name",
    "--do_train",
    "--do_eval",
]
```

```python
from huggingface_hub import HfApi, get_token
api = HfApi()
job_info = api.run_uv_job(
    script="scripts/object_detection_training.py",
    script_args=OD_SCRIPT_ARGS,
    flavor="t4-small",
    timeout=14400,
    env={"PYTHONUNBUFFERED": "1"},
    secrets={"HF_TOKEN": get_token()},
)
print(f"Job ID: {job_info.id}")
```

### Key OD `script_args`

- `--model_name_or_path` — recommended: `"ustc-community/dfine-small-coco"` (see model table above)
- `--dataset_name` — the Hub dataset ID
- `--image_square_size` — 480 (fast iteration) or 800 (better accuracy)
- `--hub_model_id` — `"username/model-name"` for Hub persistence
- `--num_train_epochs` — 30 typical for convergence
- `--train_val_split` — fraction to split for validation (default 0.15), set if dataset lacks a validation split
- `--max_train_samples` — truncate training set (useful for quick test runs, e.g. `"785"` for ~10% of a 7.8K dataset)
- `--max_eval_samples` — truncate evaluation set

#### Imported: Quick start — Image Classification

```python
IC_SCRIPT_ARGS = [
    "--model_name_or_path", "timm/mobilenetv3_small_100.lamb_in1k",
    "--dataset_name", "ethz/food101",
    "--output_dir", "food101_classifier",
    "--num_train_epochs", "5",
    "--per_device_train_batch_size", "32",
    "--per_device_eval_batch_size", "32",
    "--learning_rate", "5e-5",
    "--eval_strategy", "epoch",
    "--save_strategy", "epoch",
    "--save_total_limit", "2",
    "--load_best_model_at_end",
    "--metric_for_best_model", "eval_accuracy",
    "--greater_is_better", "True",
    "--no_remove_unused_columns",
    "--push_to_hub",
    "--hub_model_id", "username/food101-classifier",
    "--do_train",
    "--do_eval",
]
```

```python
from huggingface_hub import HfApi, get_token
api = HfApi()
job_info = api.run_uv_job(
    script="scripts/image_classification_training.py",
    script_args=IC_SCRIPT_ARGS,
    flavor="t4-small",
    timeout=7200,
    env={"PYTHONUNBUFFERED": "1"},
    secrets={"HF_TOKEN": get_token()},
)
print(f"Job ID: {job_info.id}")
```

### Key IC `script_args`

- `--model_name_or_path` — any `timm/` model or Transformers classification model (see model table above)
- `--dataset_name` — the Hub dataset ID
- `--image_column_name` — column containing PIL images (default: `"image"`)
- `--label_column_name` — column containing class labels (default: `"label"`)
- `--hub_model_id` — `"username/model-name"` for Hub persistence
- `--num_train_epochs` — 3-5 typical for classification (fewer than OD)
- `--per_device_train_batch_size` — 16-64 (classification models use less memory than OD)
- `--train_val_split` — fraction to split for validation (default 0.15), set if dataset lacks a validation split
- `--max_train_samples` / `--max_eval_samples` — truncate for quick tests

#### Imported: Quick start — SAM/SAM2 Segmentation

```python
SAM_SCRIPT_ARGS = [
    "--model_name_or_path", "facebook/sam2.1-hiera-small",
    "--dataset_name", "merve/MicroMat-mini",
    "--prompt_type", "bbox",
    "--prompt_column_name", "prompt",
    "--output_dir", "sam2-finetuned",
    "--num_train_epochs", "30",
    "--per_device_train_batch_size", "4",
    "--learning_rate", "1e-5",
    "--logging_steps", "1",
    "--save_strategy", "epoch",
    "--save_total_limit", "2",
    "--remove_unused_columns", "False",
    "--dataloader_pin_memory", "False",
    "--push_to_hub",
    "--hub_model_id", "username/sam2-finetuned",
    "--do_train",
    "--report_to", "trackio",
]
```

```python
from huggingface_hub import HfApi, get_token
api = HfApi()
job_info = api.run_uv_job(
    script="scripts/sam_segmentation_training.py",
    script_args=SAM_SCRIPT_ARGS,
    flavor="t4-small",
    timeout=7200,
    env={"PYTHONUNBUFFERED": "1"},
    secrets={"HF_TOKEN": get_token()},
)
print(f"Job ID: {job_info.id}")
```

### Key SAM `script_args`

- `--model_name_or_path` — SAM or SAM2 model (see model table above); auto-detects SAM vs SAM2
- `--dataset_name` — the Hub dataset ID (e.g., `"merve/MicroMat-mini"`)
- `--prompt_type` — `"bbox"` or `"point"` — type of prompt in the dataset
- `--prompt_column_name` — column with JSON-encoded prompts (default: `"prompt"`)
- `--bbox_column_name` — dedicated bbox column (alternative to JSON prompt column)
- `--point_column_name` — dedicated point column (alternative to JSON prompt column)
- `--mask_column_name` — column with ground-truth masks (default: `"mask"`)
- `--hub_model_id` — `"username/model-name"` for Hub persistence
- `--num_train_epochs` — 20-30 typical for SAM fine-tuning
- `--per_device_train_batch_size` — 2-4 (SAM models use significant memory)
- `--freeze_vision_encoder` / `--freeze_prompt_encoder` — freeze encoder weights (default: both frozen, only mask decoder trains)
- `--train_val_split` — fraction to split for validation (default 0.1)

#### Imported: Checking job status

**MCP tool (if available):**
```
hf_jobs("ps")                                   # List all jobs
hf_jobs("logs", {"job_id": "your-job-id"})      # View logs
hf_jobs("inspect", {"job_id": "your-job-id"})   # Job details
```

**Python API fallback:**
```python
from huggingface_hub import HfApi
api = HfApi()
api.list_jobs()                                  # List all jobs
api.get_job_logs(job_id="your-job-id")           # View logs
api.get_job(job_id="your-job-id")                # Job details
```

#### Imported: External links

- [Transformers Object Detection Guide](https://huggingface.co/docs/transformers/tasks/object_detection)
- [Transformers Image Classification Guide](https://huggingface.co/docs/transformers/tasks/image_classification)
- [DETR Model Documentation](https://huggingface.co/docs/transformers/model_doc/detr)
- [ViT Model Documentation](https://huggingface.co/docs/transformers/model_doc/vit)
- [HF Jobs Guide](https://huggingface.co/docs/huggingface_hub/guides/jobs) — Main Jobs documentation
- [HF Jobs Configuration](https://huggingface.co/docs/hub/en/jobs-configuration) — Hardware, secrets, timeouts, namespaces
- [HF Jobs CLI Reference](https://huggingface.co/docs/huggingface_hub/guides/cli#hf-jobs) — Command line interface
- [Object Detection Models](https://huggingface.co/models?pipeline_tag=object-detection)
- [Image Classification Models](https://huggingface.co/models?pipeline_tag=image-classification)
- [SAM2 Model Documentation](https://huggingface.co/docs/transformers/model_doc/sam2)
- [SAM Model Documentation](https://huggingface.co/docs/transformers/model_doc/sam)
- [Object Detection Datasets](https://huggingface.co/datasets?task_categories=task_categories:object-detection)
- [Image Classification Datasets](https://huggingface.co/datasets?task_categories=task_categories:image-classification)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
