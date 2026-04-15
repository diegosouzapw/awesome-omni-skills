---
name: transformers-js
description: "Transformers.js - Machine Learning for JavaScript workflow skill. Use this skill when the user needs Run Hugging Face models in JavaScript or TypeScript with Transformers.js in Node.js or the browser and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: machine-learning
tags: ["transformers-js", "run", "hugging", "face", "models", "javascript", "typescript", "transformers"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "huggingface"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Transformers.js - Machine Learning for JavaScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/transformers-js` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Transformers.js - Machine Learning for JavaScript Transformers.js enables running state-of-the-art machine learning models directly in JavaScript, both in browsers and Node.js environments, with no server required.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Supported Tasks, Finding and Choosing Models, Advanced Configuration, Browser-Specific Considerations, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Run ML models for text analysis, generation, or translation in JavaScript
- Perform image classification, object detection, or segmentation
- Implement speech recognition or audio processing
- Build multimodal AI applications (text-to-image, image-to-text, etc.)
- Run models client-side in the browser without a backend
- Use when the request clearly matches the imported source intent: Run Hugging Face models in JavaScript or TypeScript with Transformers.js in Node.js or the browser.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/CACHE.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/CONFIGURATION.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. ### NPM Installation bash npm install @huggingface/transformers ### Browser Usage (CDN) javascript <script type="module"> import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers'; </script>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

### NPM Installation
```bash
npm install @huggingface/transformers
```

### Browser Usage (CDN)
```javascript
<script type="module">
  import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers';
</script>
```

#### Imported: Core Concepts

### 1. Pipeline API
The pipeline API is the easiest way to use models. It groups together preprocessing, model inference, and postprocessing:

```javascript
import { pipeline } from '@huggingface/transformers';

// Create a pipeline for a specific task
const pipe = await pipeline('sentiment-analysis');

// Use the pipeline
const result = await pipe('I love transformers!');
// Output: [{ label: 'POSITIVE', score: 0.999817686 }]

// IMPORTANT: Always dispose when done to free memory
await classifier.dispose();
```

**⚠️ Memory Management:** All pipelines must be disposed with `pipe.dispose()` when finished to prevent memory leaks. See examples in [Code Examples](./references/EXAMPLES.md) for cleanup patterns across different environments.

### 2. Model Selection
You can specify a custom model as the second argument:

```javascript
const pipe = await pipeline(
  'sentiment-analysis',
  'Xenova/bert-base-multilingual-uncased-sentiment'
);
```

**Finding Models:**

Browse available Transformers.js models on Hugging Face Hub:
- **All models**: https://huggingface.co/models?library=transformers.js&sort=trending
- **By task**: Add `pipeline_tag` parameter
  - Text generation: https://huggingface.co/models?pipeline_tag=text-generation&library=transformers.js&sort=trending
  - Image classification: https://huggingface.co/models?pipeline_tag=image-classification&library=transformers.js&sort=trending
  - Speech recognition: https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&library=transformers.js&sort=trending

**Tip:** Filter by task type, sort by trending/downloads, and check model cards for performance metrics and usage examples.

### 3. Device Selection
Choose where to run the model:

```javascript
// Run on CPU (default for WASM)
const pipe = await pipeline('sentiment-analysis', 'model-id');

// Run on GPU (WebGPU - experimental)
const pipe = await pipeline('sentiment-analysis', 'model-id', {
  device: 'webgpu',
});
```

### 4. Quantization Options
Control model precision vs. performance:

```javascript
// Use quantized model (faster, smaller)
const pipe = await pipeline('sentiment-analysis', 'model-id', {
  dtype: 'q4',  // Options: 'fp32', 'fp16', 'q8', 'q4'
});
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @transformers-js to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @transformers-js against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @transformers-js for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @transformers-js using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always Dispose Pipelines: Call pipe.dispose() when done - critical for preventing memory leaks
- Start with Pipelines: Use the pipeline API unless you need fine-grained control
- Test Locally First: Test models with small inputs before deploying
- Monitor Model Sizes: Be aware of model download sizes for web applications
- Handle Loading States: Show progress indicators for better UX
- Version Pin: Pin specific model versions for production stability
- Error Boundaries: Always wrap pipeline calls in try-catch blocks

### Imported Operating Notes

#### Imported: Best Practices

1. **Always Dispose Pipelines**: Call `pipe.dispose()` when done - critical for preventing memory leaks
2. **Start with Pipelines**: Use the pipeline API unless you need fine-grained control
3. **Test Locally First**: Test models with small inputs before deploying
4. **Monitor Model Sizes**: Be aware of model download sizes for web applications
5. **Handle Loading States**: Show progress indicators for better UX
6. **Version Pin**: Pin specific model versions for production stability
7. **Error Boundaries**: Always wrap pipeline calls in try-catch blocks
8. **Progressive Enhancement**: Provide fallbacks for unsupported browsers
9. **Reuse Models**: Load once, use many times - don't recreate pipelines unnecessarily
10. **Graceful Shutdown**: Dispose models on SIGTERM/SIGINT in servers

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/transformers-js`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Model Not Found
- Verify model exists on Hugging Face Hub
- Check model name spelling
- Ensure model has ONNX files (look for `onnx` folder in model repo)

### Memory Issues
- Use smaller models or quantized versions (`dtype: 'q4'`)
- Reduce batch size
- Limit sequence length with `max_length`

### WebGPU Errors
- Check browser compatibility (Chrome 113+, Edge 113+)
- Try `dtype: 'fp16'` if `fp32` fails
- Fall back to WASM if WebGPU unavailable

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/CACHE.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [CACHE.md](references/CACHE.md)
- [CONFIGURATION.md](references/CONFIGURATION.md)
- [EXAMPLES.md](references/EXAMPLES.md)
- [MODEL_ARCHITECTURES.md](references/MODEL_ARCHITECTURES.md)
- [CACHE.md](references/CACHE.md)
- [CONFIGURATION.md](references/CONFIGURATION.md)

### Imported Reference Notes

#### Imported: Reference Documentation

### This Skill
- **[Pipeline Options](./references/PIPELINE_OPTIONS.md)** - Configure `pipeline()` with `progress_callback`, `device`, `dtype`, etc.
- **[Configuration Reference](./references/CONFIGURATION.md)** - Global `env` configuration for caching and model loading
- **[Caching Reference](./references/CACHE.md)** - Browser Cache API, Node.js filesystem cache, and custom cache implementations
- **[Text Generation Guide](./references/TEXT_GENERATION.md)** - Streaming, chat format, and generation parameters
- **[Model Architectures](./references/MODEL_ARCHITECTURES.md)** - Supported models and selection tips
- **[Code Examples](./references/EXAMPLES.md)** - Real-world implementations for different runtimes

### Official Transformers.js
- Official docs: https://huggingface.co/docs/transformers.js
- API reference: https://huggingface.co/docs/transformers.js/api/pipelines
- Model hub: https://huggingface.co/models?library=transformers.js
- GitHub: https://github.com/huggingface/transformers.js
- Examples: https://github.com/huggingface/transformers.js/tree/main/examples

#### Imported: Quick Reference: Task IDs

| Task | Task ID |
|------|---------|
| Text classification | `text-classification` or `sentiment-analysis` |
| Token classification | `token-classification` or `ner` |
| Question answering | `question-answering` |
| Fill mask | `fill-mask` |
| Summarization | `summarization` |
| Translation | `translation` |
| Text generation | `text-generation` |
| Text-to-text generation | `text2text-generation` |
| Zero-shot classification | `zero-shot-classification` |
| Image classification | `image-classification` |
| Image segmentation | `image-segmentation` |
| Object detection | `object-detection` |
| Depth estimation | `depth-estimation` |
| Image-to-image | `image-to-image` |
| Zero-shot image classification | `zero-shot-image-classification` |
| Zero-shot object detection | `zero-shot-object-detection` |
| Automatic speech recognition | `automatic-speech-recognition` |
| Audio classification | `audio-classification` |
| Text-to-speech | `text-to-speech` or `text-to-audio` |
| Image-to-text | `image-to-text` |
| Document question answering | `document-question-answering` |
| Feature extraction | `feature-extraction` |
| Sentence similarity | `sentence-similarity` |

---

This skill enables you to integrate state-of-the-art machine learning capabilities directly into JavaScript applications without requiring separate ML servers or Python environments.

#### Imported: Supported Tasks

**Note:** All examples below show basic usage.

### Natural Language Processing

#### Text Classification
```javascript
const classifier = await pipeline('text-classification');
const result = await classifier('This movie was amazing!');
```

#### Named Entity Recognition (NER)
```javascript
const ner = await pipeline('token-classification');
const entities = await ner('My name is John and I live in New York.');
```

#### Question Answering
```javascript
const qa = await pipeline('question-answering');
const answer = await qa({
  question: 'What is the capital of France?',
  context: 'Paris is the capital and largest city of France.'
});
```

#### Text Generation
```javascript
const generator = await pipeline('text-generation', 'onnx-community/gemma-3-270m-it-ONNX');
const text = await generator('Once upon a time', {
  max_new_tokens: 100,
  temperature: 0.7
});
```

**For streaming and chat:** See **[Text Generation Guide](./references/TEXT_GENERATION.md)** for:
- Streaming token-by-token output with `TextStreamer`
- Chat/conversation format with system/user/assistant roles
- Generation parameters (temperature, top_k, top_p)
- Browser and Node.js examples
- React components and API endpoints

#### Translation
```javascript
const translator = await pipeline('translation', 'Xenova/nllb-200-distilled-600M');
const output = await translator('Hello, how are you?', {
  src_lang: 'eng_Latn',
  tgt_lang: 'fra_Latn'
});
```

#### Summarization
```javascript
const summarizer = await pipeline('summarization');
const summary = await summarizer(longText, {
  max_length: 100,
  min_length: 30
});
```

#### Zero-Shot Classification
```javascript
const classifier = await pipeline('zero-shot-classification');
const result = await classifier('This is a story about sports.', ['politics', 'sports', 'technology']);
```

### Computer Vision

#### Image Classification
```javascript
const classifier = await pipeline('image-classification');
const result = await classifier('https://example.com/image.jpg');
// Or with local file
const result = await classifier(imageUrl);
```

#### Object Detection
```javascript
const detector = await pipeline('object-detection');
const objects = await detector('https://example.com/image.jpg');
// Returns: [{ label: 'person', score: 0.95, box: { xmin, ymin, xmax, ymax } }, ...]
```

#### Image Segmentation
```javascript
const segmenter = await pipeline('image-segmentation');
const segments = await segmenter('https://example.com/image.jpg');
```

#### Depth Estimation
```javascript
const depthEstimator = await pipeline('depth-estimation');
const depth = await depthEstimator('https://example.com/image.jpg');
```

#### Zero-Shot Image Classification
```javascript
const classifier = await pipeline('zero-shot-image-classification');
const result = await classifier('image.jpg', ['cat', 'dog', 'bird']);
```

### Audio Processing

#### Automatic Speech Recognition
```javascript
const transcriber = await pipeline('automatic-speech-recognition');
const result = await transcriber('audio.wav');
// Returns: { text: 'transcribed text here' }
```

#### Audio Classification
```javascript
const classifier = await pipeline('audio-classification');
const result = await classifier('audio.wav');
```

#### Text-to-Speech
```javascript
const synthesizer = await pipeline('text-to-speech', 'Xenova/speecht5_tts');
const audio = await synthesizer('Hello, this is a test.', {
  speaker_embeddings: speakerEmbeddings
});
```

### Multimodal

#### Image-to-Text (Image Captioning)
```javascript
const captioner = await pipeline('image-to-text');
const caption = await captioner('image.jpg');
```

#### Document Question Answering
```javascript
const docQA = await pipeline('document-question-answering');
const answer = await docQA('document-image.jpg', 'What is the total amount?');
```

#### Zero-Shot Object Detection
```javascript
const detector = await pipeline('zero-shot-object-detection');
const objects = await detector('image.jpg', ['person', 'car', 'tree']);
```

### Feature Extraction (Embeddings)

```javascript
const extractor = await pipeline('feature-extraction');
const embeddings = await extractor('This is a sentence to embed.');
// Returns: tensor of shape [1, sequence_length, hidden_size]

// For sentence embeddings (mean pooling)
const extractor = await pipeline('feature-extraction', 'onnx-community/all-MiniLM-L6-v2-ONNX');
const embeddings = await extractor('Text to embed', { pooling: 'mean', normalize: true });
```

#### Imported: Finding and Choosing Models

### Browsing the Hugging Face Hub

Discover compatible Transformers.js models on Hugging Face Hub:

**Base URL (all models):**
```
https://huggingface.co/models?library=transformers.js&sort=trending
```

**Filter by task** using the `pipeline_tag` parameter:

| Task | URL |
|------|-----|
| **Text Generation** | https://huggingface.co/models?pipeline_tag=text-generation&library=transformers.js&sort=trending |
| **Text Classification** | https://huggingface.co/models?pipeline_tag=text-classification&library=transformers.js&sort=trending |
| **Translation** | https://huggingface.co/models?pipeline_tag=translation&library=transformers.js&sort=trending |
| **Summarization** | https://huggingface.co/models?pipeline_tag=summarization&library=transformers.js&sort=trending |
| **Question Answering** | https://huggingface.co/models?pipeline_tag=question-answering&library=transformers.js&sort=trending |
| **Image Classification** | https://huggingface.co/models?pipeline_tag=image-classification&library=transformers.js&sort=trending |
| **Object Detection** | https://huggingface.co/models?pipeline_tag=object-detection&library=transformers.js&sort=trending |
| **Image Segmentation** | https://huggingface.co/models?pipeline_tag=image-segmentation&library=transformers.js&sort=trending |
| **Speech Recognition** | https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&library=transformers.js&sort=trending |
| **Audio Classification** | https://huggingface.co/models?pipeline_tag=audio-classification&library=transformers.js&sort=trending |
| **Image-to-Text** | https://huggingface.co/models?pipeline_tag=image-to-text&library=transformers.js&sort=trending |
| **Feature Extraction** | https://huggingface.co/models?pipeline_tag=feature-extraction&library=transformers.js&sort=trending |
| **Zero-Shot Classification** | https://huggingface.co/models?pipeline_tag=zero-shot-classification&library=transformers.js&sort=trending |

**Sort options:**
- `&sort=trending` - Most popular recently
- `&sort=downloads` - Most downloaded overall
- `&sort=likes` - Most liked by community
- `&sort=modified` - Recently updated

### Choosing the Right Model

Consider these factors when selecting a model:

**1. Model Size**
- **Small (< 100MB)**: Fast, suitable for browsers, limited accuracy
- **Medium (100MB - 500MB)**: Balanced performance, good for most use cases
- **Large (> 500MB)**: High accuracy, slower, better for Node.js or powerful devices

**2. Quantization**
Models are often available in different quantization levels:
- `fp32` - Full precision (largest, most accurate)
- `fp16` - Half precision (smaller, still accurate)
- `q8` - 8-bit quantized (much smaller, slight accuracy loss)
- `q4` - 4-bit quantized (smallest, noticeable accuracy loss)

**3. Task Compatibility**
Check the model card for:
- Supported tasks (some models support multiple tasks)
- Input/output formats
- Language support (multilingual vs. English-only)
- License restrictions

**4. Performance Metrics**
Model cards typically show:
- Accuracy scores
- Benchmark results
- Inference speed
- Memory requirements

### Example: Finding a Text Generation Model

```javascript
// 1. Visit: https://huggingface.co/models?pipeline_tag=text-generation&library=transformers.js&sort=trending

// 2. Browse and select a model (e.g., onnx-community/gemma-3-270m-it-ONNX)

// 3. Check model card for:
//    - Model size: ~270M parameters
//    - Quantization: q4 available
//    - Language: English
//    - Use case: Instruction-following chat

// 4. Use the model:
import { pipeline } from '@huggingface/transformers';

const generator = await pipeline(
  'text-generation',
  'onnx-community/gemma-3-270m-it-ONNX',
  { dtype: 'q4' } // Use quantized version for faster inference
);

const output = await generator('Explain quantum computing in simple terms.', {
  max_new_tokens: 100
});

await generator.dispose();
```

### Tips for Model Selection

1. **Start Small**: Test with a smaller model first, then upgrade if needed
2. **Check ONNX Support**: Ensure the model has ONNX files (look for `onnx` folder in model repo)
3. **Read Model Cards**: Model cards contain usage examples, limitations, and benchmarks
4. **Test Locally**: Benchmark inference speed and memory usage in your environment
5. **Community Models**: Look for models by `Xenova` (Transformers.js maintainer) or `onnx-community`
6. **Version Pin**: Use specific git commits in production for stability:
   ```javascript
   const pipe = await pipeline('task', 'model-id', { revision: 'abc123' });
   ```

#### Imported: Advanced Configuration

### Environment Configuration (`env`)

The `env` object provides comprehensive control over Transformers.js execution, caching, and model loading.

**Quick Overview:**

```javascript
import { env } from '@huggingface/transformers';

// View version
console.log(env.version); // e.g., '3.8.1'

// Common settings
env.allowRemoteModels = true;  // Load from Hugging Face Hub
env.allowLocalModels = false;  // Load from file system
env.localModelPath = '/models/'; // Local model directory
env.useFSCache = true;         // Cache models on disk (Node.js)
env.useBrowserCache = true;    // Cache models in browser
env.cacheDir = './.cache';     // Cache directory location
```

**Configuration Patterns:**

```javascript
// Development: Fast iteration with remote models
env.allowRemoteModels = true;
env.useFSCache = true;

// Production: Local models only
env.allowRemoteModels = false;
env.allowLocalModels = true;
env.localModelPath = '/app/models/';

// Custom CDN
env.remoteHost = 'https://cdn.example.com/models';

// Disable caching (testing)
env.useFSCache = false;
env.useBrowserCache = false;
```

For complete documentation on all configuration options, caching strategies, cache management, pre-downloading models, and more, see:

**→ [Configuration Reference](./references/CONFIGURATION.md)**

### Working with Tensors

```javascript
import { AutoTokenizer, AutoModel } from '@huggingface/transformers';

// Load tokenizer and model separately for more control
const tokenizer = await AutoTokenizer.from_pretrained('bert-base-uncased');
const model = await AutoModel.from_pretrained('bert-base-uncased');

// Tokenize input
const inputs = await tokenizer('Hello world!');

// Run model
const outputs = await model(inputs);
```

### Batch Processing

```javascript
const classifier = await pipeline('sentiment-analysis');

// Process multiple texts
const results = await classifier([
  'I love this!',
  'This is terrible.',
  'It was okay.'
]);
```

#### Imported: Browser-Specific Considerations

### WebGPU Usage
WebGPU provides GPU acceleration in browsers:

```javascript
const pipe = await pipeline('text-generation', 'onnx-community/gemma-3-270m-it-ONNX', {
  device: 'webgpu',
  dtype: 'fp32'
});
```

**Note**: WebGPU is experimental. Check browser compatibility and file issues if problems occur.

### WASM Performance
Default browser execution uses WASM:

```javascript
// Optimized for browsers with quantization
const pipe = await pipeline('sentiment-analysis', 'model-id', {
  dtype: 'q8'  // or 'q4' for even smaller size
});
```

### Progress Tracking & Loading Indicators

Models can be large (ranging from a few MB to several GB) and consist of multiple files. Track download progress by passing a callback to the `pipeline()` function:

```javascript
import { pipeline } from '@huggingface/transformers';

// Track progress for each file
const fileProgress = {};

function onProgress(info) {
  console.log(`${info.status}: ${info.file}`);
  
  if (info.status === 'progress') {
    fileProgress[info.file] = info.progress;
    console.log(`${info.file}: ${info.progress.toFixed(1)}%`);
  }
  
  if (info.status === 'done') {
    console.log(`✓ ${info.file} complete`);
  }
}

// Pass callback to pipeline
const classifier = await pipeline('sentiment-analysis', null, {
  progress_callback: onProgress
});
```

**Progress Info Properties:**

```typescript
interface ProgressInfo {
  status: 'initiate' | 'download' | 'progress' | 'done' | 'ready';
  name: string;      // Model id or path
  file: string;      // File being processed
  progress?: number; // Percentage (0-100, only for 'progress' status)
  loaded?: number;   // Bytes downloaded (only for 'progress' status)
  total?: number;    // Total bytes (only for 'progress' status)
}
```

For complete examples including browser UIs, React components, CLI progress bars, and retry logic, see:

**→ [Pipeline Options - Progress Callback](./references/PIPELINE_OPTIONS.md#progress-callback)**

#### Imported: Error Handling

```javascript
try {
  const pipe = await pipeline('sentiment-analysis', 'model-id');
  const result = await pipe('text to analyze');
} catch (error) {
  if (error.message.includes('fetch')) {
    console.error('Model download failed. Check internet connection.');
  } else if (error.message.includes('ONNX')) {
    console.error('Model execution failed. Check model compatibility.');
  } else {
    console.error('Unknown error:', error);
  }
}
```

#### Imported: Performance Tips

1. **Reuse Pipelines**: Create pipeline once, reuse for multiple inferences
2. **Use Quantization**: Start with `q8` or `q4` for faster inference
3. **Batch Processing**: Process multiple inputs together when possible
4. **Cache Models**: Models are cached automatically (see **[Caching Reference](./references/CACHE.md)** for details on browser Cache API, Node.js filesystem cache, and custom implementations)
5. **WebGPU for Large Models**: Use WebGPU for models that benefit from GPU acceleration
6. **Prune Context**: For text generation, limit `max_new_tokens` to avoid memory issues
7. **Clean Up Resources**: Call `pipe.dispose()` when done to free memory

#### Imported: Memory Management

**IMPORTANT:** Always call `pipe.dispose()` when finished to prevent memory leaks.

```javascript
const pipe = await pipeline('sentiment-analysis');
const result = await pipe('Great product!');
await pipe.dispose();  // ✓ Free memory (100MB - several GB per model)
```

**When to dispose:**
- Application shutdown or component unmount
- Before loading a different model
- After batch processing in long-running apps

Models consume significant memory and hold GPU/CPU resources. Disposal is critical for browser memory limits and server stability.

For detailed patterns (React cleanup, servers, browser), see **[Code Examples](./references/EXAMPLES.md)**

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
