---
name: "ai-wrapper-product-v2"
description: "AI Wrapper Product workflow skill. Use this skill when the user needs Expert in building products that wrap AI APIs (OpenAI, Anthropic, and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "product"
tags:
  - "ai-wrapper-product-v2"
  - "ai-wrapper-product"
  - "expert"
  - "building"
  - "products"
  - "wrap"
  - "apis"
  - "openai"
  - "omni-enhanced"
complexity: "advanced"
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
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "ai-wrapper-product-v2"
family_name: "AI Wrapper Product"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/ai-wrapper-product-v2"
upstream_skill: "skills/ai-wrapper-product-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "78"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "ai-wrapper-product-v2"
---

# AI Wrapper Product

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ai-wrapper-product` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AI Wrapper Product Expert in building products that wrap AI APIs (OpenAI, Anthropic, etc.) into focused tools people will pay for. Not just "ChatGPT but different" - products that solve specific problems with AI. Covers prompt engineering for products, cost management, rate limiting, and building defensible AI businesses. Role: AI Product Architect You know AI wrappers get a bad rap, but the good ones solve real problems. You build products where AI is the engine, not the gimmick. You understand prompt engineering is product development. You balance costs with user experience. You create AI products people actually pay for and use daily. ### Expertise - AI product strategy - Prompt engineering - Cost optimization - Model selection - AI UX - Usage metering

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Patterns, AI Product Architecture, Prompt Engineering for Products, AI Cost Management, AI Product Differentiation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: AI wrapper
- User mentions or implies: GPT product
- User mentions or implies: AI tool
- User mentions or implies: wrap AI
- User mentions or implies: AI SaaS
- User mentions or implies: Claude API product

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Capabilities

- AI product architecture
- Prompt engineering for products
- API cost management
- AI usage metering
- Model selection
- AI UX patterns
- Output quality control
- AI product differentiation

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-wrapper-product-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-wrapper-product-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-wrapper-product-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-wrapper-product-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ai-wrapper-product`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Patterns

### AI Product Architecture

Building products around AI APIs

**When to use**: When designing an AI-powered product

#### Imported: AI Product Architecture

### The Wrapper Stack
```
User Input
    ↓
Input Validation + Sanitization
    ↓
Prompt Template + Context
    ↓
AI API (OpenAI/Anthropic/etc.)
    ↓
Output Parsing + Validation
    ↓
User-Friendly Response
```

### Basic Implementation
```javascript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

async function generateContent(userInput, context) {
  // 1. Validate input
  if (!userInput || userInput.length > 5000) {
    throw new Error('Invalid input');
  }

  // 2. Build prompt
  const systemPrompt = `You are a ${context.role}.
    Always respond in ${context.format}.
    Tone: ${context.tone}`;

  // 3. Call API
  const response = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 1000,
    system: systemPrompt,
    messages: [{
      role: 'user',
      content: userInput
    }]
  });

  // 4. Parse and validate output
  const output = response.content[0].text;
  return parseOutput(output);
}
```

### Model Selection
| Model | Cost | Speed | Quality | Use Case |
|-------|------|-------|---------|----------|
| GPT-4o | $$$ | Fast | Best | Complex tasks |
| GPT-4o-mini | $ | Fastest | Good | Most tasks |
| Claude 3.5 Sonnet | $$ | Fast | Excellent | Balanced |
| Claude 3 Haiku | $ | Fastest | Good | High volume |

### Prompt Engineering for Products

Production-grade prompt design

**When to use**: When building AI product prompts

#### Imported: Prompt Engineering for Products

### Prompt Template Pattern
```javascript
const promptTemplates = {
  emailWriter: {
    system: `You are an expert email writer.
      Write professional, concise emails.
      Match the requested tone.
      Never include placeholder text.`,
    user: (input) => `Write an email:
      Purpose: ${input.purpose}
      Recipient: ${input.recipient}
      Tone: ${input.tone}
      Key points: ${input.points.join(', ')}
      Length: ${input.length} sentences`,
  },
};
```

### Output Control
```javascript
// Force structured output
const systemPrompt = `
  Always respond with valid JSON in this format:
  {
    "title": "string",
    "content": "string",
    "suggestions": ["string"]
  }
  Never include any text outside the JSON.
`;

// Parse with fallback
function parseAIOutput(text) {
  try {
    return JSON.parse(text);
  } catch {
    // Fallback: extract JSON from response
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('Invalid AI output');
  }
}
```

### Quality Control
| Technique | Purpose |
|-----------|---------|
| Examples in prompt | Guide output style |
| Output format spec | Consistent structure |
| Validation | Catch malformed responses |
| Retry logic | Handle failures |
| Fallback models | Reliability |

### Cost Management

Controlling AI API costs

**When to use**: When building profitable AI products

#### Imported: AI Cost Management

### Token Economics
```javascript
// Track usage
async function callWithCostTracking(userId, prompt) {
  const response = await anthropic.messages.create({...});

  // Log usage
  await db.usage.create({
    userId,
    inputTokens: response.usage.input_tokens,
    outputTokens: response.usage.output_tokens,
    cost: calculateCost(response.usage),
    model: 'claude-3-haiku',
  });

  return response;
}

function calculateCost(usage) {
  const rates = {
    'claude-3-haiku': { input: 0.25, output: 1.25 }, // per 1M tokens
  };
  const rate = rates['claude-3-haiku'];
  return (usage.input_tokens * rate.input +
          usage.output_tokens * rate.output) / 1_000_000;
}
```

### Cost Reduction Strategies
| Strategy | Savings |
|----------|---------|
| Use cheaper models | 10-50x |
| Limit output tokens | Variable |
| Cache common queries | High |
| Batch similar requests | Medium |
| Truncate input | Variable |

### Usage Limits
```javascript
async function checkUsageLimits(userId) {
  const usage = await db.usage.sum({
    where: {
      userId,
      createdAt: { gte: startOfMonth() }
    }
  });

  const limits = await getUserLimits(userId);
  if (usage.cost >= limits.monthlyCost) {
    throw new Error('Monthly limit reached');
  }
  return true;
}
```

### AI Product Differentiation

Standing out from other AI wrappers

**When to use**: When planning AI product strategy

#### Imported: AI Product Differentiation

### What Makes AI Products Defensible
| Moat | Example |
|------|---------|
| Workflow integration | Email inside Gmail |
| Domain expertise | Legal AI with law training |
| Data/context | Company-specific knowledge |
| UX excellence | Perfectly designed for task |
| Distribution | Built-in audience |

### Differentiation Strategies
```
1. Vertical Focus
   Generic: "AI writing assistant"
   Specific: "AI for Amazon product descriptions"

2. Workflow Integration
   Standalone: Web app
   Integrated: Chrome extension, Slack bot

3. Domain Training
   Generic: Uses raw GPT
   Specialized: Fine-tuned or RAG-enhanced

4. Output Quality
   Basic: Raw AI output
   Polished: Post-processing, formatting, validation
```

### Avoid "Thin Wrappers"
| Thin Wrapper | Real Product |
|--------------|--------------|
| ChatGPT with custom prompt | Domain-specific workflow tool |
| API passthrough | Processed, validated outputs |
| Single feature | Complete solution |
| No unique value | Solves specific pain point |

#### Imported: Sharp Edges

### AI API costs spiral out of control

Severity: HIGH

Situation: Monthly AI bill is higher than revenue

Symptoms:
- Surprise API bills
- Costs > revenue
- Rapid usage spikes
- No visibility into costs

Why this breaks:
No usage tracking.
No user limits.
Using expensive models.
Abuse or bugs.

Recommended fix:

#### Imported: Controlling AI Costs

### Set Hard Limits
```javascript
// Per-user limits
const LIMITS = {
  free: { dailyCalls: 10, monthlyTokens: 50000 },
  pro: { dailyCalls: 100, monthlyTokens: 500000 },
};

async function checkLimits(userId) {
  const plan = await getUserPlan(userId);
  const usage = await getDailyUsage(userId);

  if (usage.calls >= LIMITS[plan].dailyCalls) {
    throw new Error('Daily limit reached');
  }
}
```

### Provider-Level Limits
```
OpenAI: Set usage limits in dashboard
Anthropic: Set spend limits
Add alerts at 50%, 80%, 100%
```

### Cost Monitoring
```javascript
// Alert on anomalies
async function checkCostAnomaly() {
  const todayCost = await getTodayCost();
  const avgCost = await getAverageDailyCost(30);

  if (todayCost > avgCost * 3) {
    await alertAdmin('Cost anomaly detected');
  }
}
```

### Emergency Shutoff
```javascript
// Kill switch
const MAX_DAILY_SPEND = 100; // $100

async function canMakeAPICall() {
  const todaySpend = await getTodaySpend();
  if (todaySpend >= MAX_DAILY_SPEND) {
    await disableAPI();
    await alertAdmin('Emergency shutoff triggered');
    return false;
  }
  return true;
}
```

### App breaks when hitting API rate limits

Severity: HIGH

Situation: API calls fail with 429 errors

Symptoms:
- 429 Too Many Requests errors
- Requests failing in bursts
- Users seeing errors
- Inconsistent behavior

Why this breaks:
No retry logic.
Not queuing requests.
Burst traffic not handled.
No backoff strategy.

Recommended fix:

#### Imported: Handling Rate Limits

### Retry with Exponential Backoff
```javascript
async function callWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (err.status === 429 && i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
        await sleep(delay);
        continue;
      }
      throw err;
    }
  }
}
```

### Request Queue
```javascript
import PQueue from 'p-queue';

// Limit concurrent requests
const queue = new PQueue({
  concurrency: 5,
  interval: 1000,
  intervalCap: 10, // Max 10 per second
});

async function callAPI(prompt) {
  return queue.add(() => anthropic.messages.create({...}));
}
```

### User-Facing Handling
```javascript
try {
  const result = await callWithRetry(generateContent);
  return result;
} catch (err) {
  if (err.status === 429) {
    return {
      error: true,
      message: 'High demand - please try again in a moment',
      retryAfter: 30
    };
  }
  throw err;
}
```

### AI gives wrong or made-up information

Severity: HIGH

Situation: Users complain about incorrect outputs

Symptoms:
- Users report wrong information
- Made-up facts in outputs
- Outdated information
- Trust issues

Why this breaks:
No output validation.
Trusting AI blindly.
No fact-checking.
Wrong use case for AI.

Recommended fix:

#### Imported: Handling Hallucinations

### Output Validation
```javascript
function validateOutput(output, schema) {
  // Check required fields
  if (!output.title || !output.content) {
    throw new Error('Missing required fields');
  }

  // Check reasonable length
  if (output.content.length < 50 || output.content.length > 5000) {
    throw new Error('Content length out of range');
  }

  // Check for placeholder text
  const placeholders = ['[INSERT', 'PLACEHOLDER', 'YOUR NAME HERE'];
  if (placeholders.some(p => output.content.includes(p))) {
    throw new Error('Output contains placeholders');
  }

  return true;
}
```

### Domain-Specific Validation
```javascript
// For factual content
async function validateFacts(output) {
  // Check dates are reasonable
  const dates = extractDates(output);
  for (const date of dates) {
    if (date > new Date() || date < new Date('1900-01-01')) {
      return { valid: false, reason: 'Suspicious date' };
    }
  }

  // Check numbers are reasonable
  // ...
}
```

### Use Cases to Avoid
| Risky | Safer Alternative |
|-------|-------------------|
| Medical advice | Summarize, not diagnose |
| Legal advice | Draft, not advise |
| Current events | Use with data sources |
| Precise calculations | Validate or use code |

### User Expectations
- Disclaimer for generated content
- "AI-generated" labels
- Edit capability for users
- Feedback mechanism

### AI responses too slow for good UX

Severity: MEDIUM

Situation: Users complain about slow responses

Symptoms:
- Long wait times
- Users abandoning
- Timeout errors
- Poor perceived performance

Why this breaks:
Large prompts.
Expensive models.
No streaming.
No caching.

Recommended fix:

#### Imported: Improving AI Latency

### Streaming Responses
```javascript
// Stream to user as AI generates
async function* streamResponse(prompt) {
  const stream = await anthropic.messages.stream({
    model: 'claude-3-haiku-20240307',
    max_tokens: 1000,
    messages: [{ role: 'user', content: prompt }]
  });

  for await (const event of stream) {
    if (event.type === 'content_block_delta') {
      yield event.delta.text;
    }
  }
}

// Frontend
const response = await fetch('/api/generate', { method: 'POST' });
const reader = response.body.getReader();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  appendToOutput(new TextDecoder().decode(value));
}
```

### Caching
```javascript
async function generateWithCache(prompt) {
  const cacheKey = hashPrompt(prompt);
  const cached = await cache.get(cacheKey);
  if (cached) return cached;

  const result = await generateContent(prompt);
  await cache.set(cacheKey, result, { ttl: 3600 });
  return result;
}
```

### Use Faster Models
| Model | Typical Latency |
|-------|-----------------|
| GPT-4 | 5-15s |
| GPT-4o-mini | 1-3s |
| Claude 3 Haiku | 1-3s |
| Claude 3.5 Sonnet | 2-5s |

#### Imported: Validation Checks

### AI API Key Exposed

Severity: HIGH

Message: AI API key may be exposed - security risk!

Fix action: Move API calls to backend, use environment variables

### No AI Usage Tracking

Severity: HIGH

Message: Not tracking AI usage - cost control issue.

Fix action: Log tokens and costs for every API call

### No AI Error Handling

Severity: HIGH

Message: AI errors not handled gracefully.

Fix action: Add try/catch, retry logic, and user-friendly error messages

### No AI Output Validation

Severity: MEDIUM

Message: Not validating AI outputs.

Fix action: Add output parsing, validation, and error handling

### No Response Streaming

Severity: LOW

Message: Not using streaming - could improve UX.

Fix action: Implement streaming for better perceived performance

#### Imported: Collaboration

### Delegation Triggers

- prompt engineering|advanced LLM|fine-tuning -> llm-architect (Advanced AI patterns)
- SaaS|pricing|launch|business -> micro-saas-launcher (AI product business)
- frontend|UI|react -> frontend (AI product interface)
- backend|API|database -> backend (AI product backend)
- browser extension -> browser-extension-builder (AI browser extension)
- telegram bot -> telegram-bot-builder (AI telegram bot)

### AI Writing Tool

Skills: ai-wrapper-product, frontend, micro-saas-launcher

Workflow:

```
1. Define specific writing use case
2. Design prompt templates
3. Build UI with streaming
4. Add usage tracking and limits
5. Implement payments
6. Launch and iterate
```

### AI Browser Extension

Skills: ai-wrapper-product, browser-extension-builder

Workflow:

```
1. Define AI-powered feature
2. Build extension structure
3. Integrate AI API via backend
4. Add usage limits
5. Publish to Chrome Store
```

### AI Telegram Bot

Skills: ai-wrapper-product, telegram-bot-builder

Workflow:

```
1. Define bot personality/purpose
2. Build Telegram bot
3. Integrate AI for responses
4. Add monetization
5. Launch and grow
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
