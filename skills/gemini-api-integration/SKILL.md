---
name: gemini-api-integration
description: "Gemini API Integration workflow skill. Use this skill when the user needs integrating Google Gemini API into projects. Covers model selection, multimodal inputs, streaming, function calling, and production best practices and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["gemini-api-integration", "integrating", "google", "gemini", "api", "projects", "covers", "model"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Gemini API Integration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/gemini-api-integration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Gemini API Integration

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when setting up Gemini API for the first time in a Node.js, Python, or browser project
- Use when implementing multimodal inputs (text + image/audio/video)
- Use when adding streaming responses to improve perceived latency
- Use when implementing function calling / tool use with Gemini
- Use when optimizing model selection (Flash vs Pro vs Ultra) for cost and performance
- Use when debugging Gemini API errors, rate limits, or quota issues

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Model - Best For - Speed - Cost
2. gemini-1.5-flash - High-throughput, cost-sensitive tasks - Fast - Low
3. gemini-1.5-pro - Complex reasoning, long context - Medium - Medium
4. gemini-2.0-flash - Latest fast model, multimodal - Very Fast - Low
5. gemini-2.0-pro - Most capable, advanced tasks - Slow - High
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Installation & Setup

**Node.js / TypeScript:**
```bash
npm install @google/generative-ai
```

**Python:**
```bash
pip install google-generativeai
```

Set your API key securely:
```bash
export GEMINI_API_KEY="your-api-key-here"
```

### 2. Basic Text Generation

**Node.js:**
```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const result = await model.generateContent("Explain async/await in JavaScript");
console.log(result.response.text());
```

**Python:**
```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")

response = model.generate_content("Explain async/await in JavaScript")
print(response.text)
```

### 3. Streaming Responses

```javascript
const result = await model.generateContentStream("Write a detailed blog post about AI");

for await (const chunk of result.stream) {
  process.stdout.write(chunk.text());
}
```

### 4. Multimodal Input (Text + Image)

```javascript
import fs from "fs";

const imageData = fs.readFileSync("screenshot.png");
const imagePart = {
  inlineData: {
    data: imageData.toString("base64"),
    mimeType: "image/png",
  },
};

const result = await model.generateContent(["Describe this image:", imagePart]);
console.log(result.response.text());
```

### 5. Function Calling / Tool Use

```javascript
const tools = [{
  functionDeclarations: [{
    name: "get_weather",
    description: "Get current weather for a city",
    parameters: {
      type: "OBJECT",
      properties: {
        city: { type: "STRING", description: "City name" },
      },
      required: ["city"],
    },
  }],
}];

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro", tools });
const result = await model.generateContent("What's the weather in Mumbai?");

const call = result.response.functionCalls()?.[0];
if (call) {
  // Execute the actual function
  const weatherData = await getWeather(call.args.city);
  // Send result back to model
}
```

### 6. Multi-turn Chat

```javascript
const chat = model.startChat({
  history: [
    { role: "user", parts: [{ text: "You are a helpful coding assistant." }] },
    { role: "model", parts: [{ text: "Sure! I'm ready to help with code." }] },
  ],
});

const response = await chat.sendMessage("How do I reverse a string in Python?");
console.log(response.response.text());
```

### 7. Model Selection Guide

| Model | Best For | Speed | Cost |
|-------|----------|-------|------|
| `gemini-1.5-flash` | High-throughput, cost-sensitive tasks | Fast | Low |
| `gemini-1.5-pro` | Complex reasoning, long context | Medium | Medium |
| `gemini-2.0-flash` | Latest fast model, multimodal | Very Fast | Low |
| `gemini-2.0-pro` | Most capable, advanced tasks | Slow | High |

#### Imported: Overview

This skill guides AI agents through integrating Google Gemini API into applications — from basic text generation to advanced multimodal, function calling, and streaming use cases. It covers the full Gemini SDK lifecycle with production-grade patterns.

#### Imported: Error Handling

```javascript
try {
  const result = await model.generateContent(prompt);
  return result.response.text();
} catch (error) {
  if (error.status === 429) {
    // Rate limited — wait and retry with exponential backoff
    await new Promise(r => setTimeout(r, 2 ** retryCount * 1000));
  } else if (error.status === 400) {
    // Invalid request — check prompt or parameters
    console.error("Invalid request:", error.message);
  } else {
    throw error;
  }
}
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @gemini-api-integration to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @gemini-api-integration against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @gemini-api-integration for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @gemini-api-integration using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use gemini-1.5-flash for most tasks — it's fast and cost-effective
- ✅ Do: Always stream responses for user-facing chat UIs to reduce perceived latency
- ✅ Do: Store API keys in environment variables, never hard-code them
- ✅ Do: Implement exponential backoff for rate limit (429) errors
- ✅ Do: Use systemInstruction to set persistent model behavior
- ❌ Don't: Use gemini-pro for simple tasks — Flash is cheaper and faster
- ❌ Don't: Send large base64 images inline for files > 20MB — use File API instead

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `gemini-1.5-flash` for most tasks — it's fast and cost-effective
- ✅ **Do:** Always stream responses for user-facing chat UIs to reduce perceived latency
- ✅ **Do:** Store API keys in environment variables, never hard-code them
- ✅ **Do:** Implement exponential backoff for rate limit (429) errors
- ✅ **Do:** Use `systemInstruction` to set persistent model behavior
- ❌ **Don't:** Use `gemini-pro` for simple tasks — Flash is cheaper and faster
- ❌ **Don't:** Send large base64 images inline for files > 20MB — use File API instead
- ❌ **Don't:** Ignore safety ratings in responses for production apps

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/gemini-api-integration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** `API_KEY_INVALID` error
**Solution:** Ensure `GEMINI_API_KEY` environment variable is set and the key is active in Google AI Studio.

**Problem:** Response blocked by safety filters
**Solution:** Check `result.response.promptFeedback.blockReason` and adjust your prompt or safety settings.

**Problem:** Slow response times
**Solution:** Switch to `gemini-1.5-flash` and enable streaming. Consider caching repeated prompts.

**Problem:** `RESOURCE_EXHAUSTED` (quota exceeded)
**Solution:** Check your quota in Google Cloud Console. Implement request queuing and exponential backoff.

## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ffuf-web-fuzzing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@figma-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
