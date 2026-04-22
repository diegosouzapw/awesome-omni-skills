---
name: daily-news-report
description: "Daily News Report v3.0 workflow skill. Use this skill when the user needs Scrapes content based on a preset URL list, filters high-quality technical information, and generates daily Markdown reports and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["daily-news-report", "scrapes", "content", "based", "preset", "url", "list", "filters"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-22"
---

# Daily News Report v3.0

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/daily-news-report` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Daily News Report v3.0 > Architecture Upgrade: Main Agent Orchestration + SubAgent Execution + Browser Scraping + Smart Caching

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Architecture, Configuration Files, Output Template, 1. Title, 2. Title, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Scenario - Expected Time - Note
- Optimal - ~2 mins - Tier1 sufficient, no browser needed
- Normal - ~3-4 mins - Requires Tier2 supplement
- Browser Needed - ~5-6 mins - Includes JS rendered pages
- Use when the request clearly matches the imported source intent: Scrapes content based on a preset URL list, filters high-quality technical information, and generates daily Markdown reports.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `cache.json` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `sources.json` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Determine date (user argument or current date)
2. Read sources.json for source configurations
3. Read cache.json for historical data
4. Create output directory NewsReport/
5. Check if a partial report exists for today (append mode)
6. Worker A: Tier1 Batch A (HN, HuggingFace Papers)
7. Worker B: Tier1 Batch B (OneUsefulThing, Paul Graham)

### Imported Workflow Notes

#### Imported: Execution Process Details

### Phase 1: Initialization

```yaml
Steps:
  1. Determine date (user argument or current date)
  2. Read sources.json for source configurations
  3. Read cache.json for historical data
  4. Create output directory NewsReport/
  5. Check if a partial report exists for today (append mode)
```

### Phase 2: Dispatch SubAgents

**Strategy**: Parallel dispatch, batch execution, early stopping mechanism

```yaml
Wave 1 (Parallel):
  - Worker A: Tier1 Batch A (HN, HuggingFace Papers)
  - Worker B: Tier1 Batch B (OneUsefulThing, Paul Graham)

Wait for results → Evaluate count

If < 15 high-quality items:
  Wave 2 (Parallel):
    - Worker C: Tier2 Batch A (James Clear, FS Blog)
    - Worker D: Tier2 Batch B (HackerNoon, Scott Young)

If still < 20 items:
  Wave 3 (Browser):
    - Browser Worker: ProductHunt, Latent Space (Require JS rendering)
```

### Phase 3: SubAgent Task Format

Task format received by each SubAgent:

```yaml
task: fetch_and_extract
sources:
  - id: hn
    url: https://news.ycombinator.com
    extract: top_10
  - id: hf_papers
    url: https://huggingface.co/papers
    extract: top_voted

output_schema:
  items:
    - source_id: string      # Source Identifier
      title: string          # Title
      summary: string        # 2-4 sentence summary
      key_points: string[]   # Max 3 key points
      url: string            # Original URL
      keywords: string[]     # Keywords
      quality_score: 1-5     # Quality Score

constraints:
  filter: "Cutting-edge Tech/Deep Tech/Productivity/Practical Info"
  exclude: "General Science/Marketing Puff/Overly Academic/Job Posts"
  max_items_per_source: 10
  skip_on_error: true

return_format: JSON
```

### Phase 4: Main Agent Monitoring & Feedback

Main Agent Responsibilities:

```yaml
Monitoring:
  - Check SubAgent return status (success/partial/failed)
  - Count collected items
  - Record success rate per source

Feedback Loop:
  - If a SubAgent fails, decide whether to retry or skip
  - If a source fails persistently, mark as disabled
  - Dynamically adjust source selection for subsequent batches

Decision:
  - Items >= 25 AND HighQuality >= 20 → Stop scraping
  - Items < 15 → Continue to next batch
  - All batches done but < 20 → Generate with available content (Quality over Quantity)
```

### Phase 5: Evaluation & Filtering

```yaml
Deduplication:
  - Exact URL match
  - Title similarity (>80% considered duplicate)
  - Check cache.json to avoid history duplicates

Score Calibration:
  - Unify scoring standards across SubAgents
  - Adjust weights based on source credibility
  - Bonus points for manually curated high-quality sources

Sorting:
  - Descending order by quality_score
  - Sort by source priority if scores are equal
  - Take Top 20
```

### Phase 6: Browser Scraping (MCP Chrome DevTools)

For pages requiring JS rendering, use a headless browser:

```yaml
Process:
  1. Call mcp__chrome-devtools__new_page to open page
  2. Call mcp__chrome-devtools__wait_for to wait for content load
  3. Call mcp__chrome-devtools__take_snapshot to get page structure
  4. Parse snapshot to extract required content
  5. Call mcp__chrome-devtools__close_page to close page

Applicable Scenarios:
  - ProductHunt (403 on WebFetch)
  - Latent Space (Substack JS rendering)
  - Other SPA applications
```

### Phase 7: Generate Report

```yaml
Output:
  - Directory: NewsReport/
  - Filename: YYYY-MM-DD-news-report.md
  - Format: Standard Markdown

Content Structure:
  - Title + Date
  - Statistical Summary (Source count, items collected)
  - 20 High-Quality Items (Template based)
  - Generation Info (Version, Timestamps)
```

### Phase 8: Update Cache

```yaml
Update cache.json:
  - last_run: Record this run info
  - source_stats: Update stats per source
  - url_cache: Add processed URLs
  - content_hashes: Add content fingerprints
  - article_history: Record included articles
```

#### Imported: Core Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Main Agent (Orchestrator)                    │
│  Role: Scheduling, Monitoring, Evaluation, Decision, Aggregation    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│   │ 1. Init     │ → │ 2. Dispatch │ → │ 3. Monitor  │ → │ 4. Evaluate │     │
│   │ Read Config │    │ Assign Tasks│    │ Collect Res │    │ Filter/Sort │     │
│   └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘     │
│         │                  │                  │                  │           │
│         ▼                  ▼                  ▼                  ▼           │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│   │ 5. Decision │ ← │ Enough 20?  │    │ 6. Generate │ → │ 7. Update   │     │
│   │ Cont/Stop   │    │ Y/N         │    │ Report File │    │ Cache Stats │     │
│   └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
         ↓ Dispatch                          ↑ Return Results
┌─────────────────────────────────────────────────────────────────────┐
│                        SubAgent Execution Layer                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐              │
│   │ Worker A    │   │ Worker B    │   │ Browser     │              │
│   │ (WebFetch)  │   │ (WebFetch)  │   │ (Headless)  │              │
│   │ Tier1 Batch │   │ Tier2 Batch │   │ JS Render   │              │
│   └─────────────┘   └─────────────┘   └─────────────┘              │
│         ↓                 ↓                 ↓                        │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Structured Result Return                 │   │
│   │  { status, data: [...], errors: [...], metadata: {...} }    │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @daily-news-report to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @daily-news-report against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @daily-news-report for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @daily-news-report using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: SubAgent Call Examples

### Using general-purpose Agent

Since custom agents require session restart to be discovered, use general-purpose and inject worker prompts:

```
Task Call:
  subagent_type: general-purpose
  model: haiku
  prompt: |
    You are a stateless execution unit. Only do the assigned task and return structured JSON.

    Task: Scrape the following URLs and extract content

    URLs:
    - https://news.ycombinator.com (Extract Top 10)
    - https://huggingface.co/papers (Extract top voted papers)

    Output Format:
    {
      "status": "success" | "partial" | "failed",
      "data": [
        {
          "source_id": "hn",
          "title": "...",
          "summary": "...",
          "key_points": ["...", "...", "..."],
          "url": "...",
          "keywords": ["...", "..."],
          "quality_score": 4
        }
      ],
      "errors": [],
      "metadata": { "processed": 2, "failed": 0 }
    }

    Filter Criteria:
    - Keep: Cutting-edge Tech/Deep Tech/Productivity/Practical Info
    - Exclude: General Science/Marketing Puff/Overly Academic/Job Posts

    Return JSON directly, no explanation.
```

### Using worker Agent (Requires session restart)

```
Task Call:
  subagent_type: worker
  prompt: |
    task: fetch_and_extract
    input:
      urls:
        - https://news.ycombinator.com
        - https://huggingface.co/papers
    output_schema:
      - source_id: string
      - title: string
      - summary: string
      - key_points: string[]
      - url: string
      - keywords: string[]
      - quality_score: 1-5
    constraints:
      filter: Cutting-edge Tech/Deep Tech/Productivity/Practical Info
      exclude: General Science/Marketing Puff/Overly Academic
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Quality over Quantity: Low-quality content does not enter the report.
- Early Stop: Stop scraping once 20 high-quality items are reached.
- Parallel First: SubAgents in the same batch execute in parallel.
- Fault Tolerance: Failure of a single source does not affect the whole process.
- Cache Reuse: Avoid re-scraping the same content.
- Main Agent Control: All decisions are made by the Main Agent.
- Fallback Awareness: Detect sub-agent availability, gracefully degrade if unavailable.

### Imported Operating Notes

#### Imported: Constraints & Principles

1.  **Quality over Quantity**: Low-quality content does not enter the report.
2.  **Early Stop**: Stop scraping once 20 high-quality items are reached.
3.  **Parallel First**: SubAgents in the same batch execute in parallel.
4.  **Fault Tolerance**: Failure of a single source does not affect the whole process.
5.  **Cache Reuse**: Avoid re-scraping the same content.
6.  **Main Agent Control**: All decisions are made by the Main Agent.
7.  **Fallback Awareness**: Detect sub-agent availability, gracefully degrade if unavailable.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/daily-news-report`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [cache.json](cache.json)
- [sources.json](sources.json)

### Imported Reference Notes

#### Imported: Configuration Files

This skill uses the following configuration files:

| File | Purpose |
|------|---------|
| `sources.json` | Source configuration, priorities, scrape methods |
| `cache.json` | Cached data, historical stats, deduplication fingerprints |

#### Imported: Output Template

```markdown
# Daily News Report (YYYY-MM-DD)

> Curated from N sources today, containing 20 high-quality items
> Generation Time: X min | Version: v3.0
>
> **Warning**: Sub-agent 'worker' not detected. Running in generic mode (Serial Execution). Performance might be degraded.

---

#### Imported: 1. Title

- **Summary**: 2-4 lines overview
- **Key Points**:
  1. Point one
  2. Point two
  3. Point three
- **Source**: Link
- **Keywords**: `keyword1` `keyword2` `keyword3`
- **Score**: ⭐⭐⭐⭐⭐ (5/5)

---

#### Imported: 2. Title

...

---

*Generated by Daily News Report v3.0*
*Sources: HN, HuggingFace, OneUsefulThing, ...*
```

#### Imported: Error Handling

| Error Type | Handling |
|---|---|
| SubAgent Timeout | Log error, continue to next |
| Source 403/404 | Mark disabled, update sources.json |
| Extraction Failed | Return raw content, Main Agent decides |
| Browser Crash | Skip source, log entry |

#### Imported: Compatibility & Fallback

To ensure usability across different Agent environments, the following checks must be performed:

1.  **Environment Check**:
    -   In Phase 1 initialization, attempt to detect if `worker` sub-agent exists.
    -   If not exists (or plugin not installed), automatically switch to **Serial Execution Mode**.

2.  **Serial Execution Mode**:
    -   Do not use parallel block.
    -   Main Agent executes scraping tasks for each source sequentially.
    -   Slower, but guarantees basic functionality.

3.  **User Alert**:
    -   MUST include a clear warning in the generated report header indicating the current degraded mode.
