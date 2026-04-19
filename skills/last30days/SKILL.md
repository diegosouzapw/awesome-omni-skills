---
name: last30days
description: "last30days: Research Any Topic from the Last 30 Days workflow skill. Use this skill when the user needs Research a topic from the last 30 days on Reddit + X + Web, become an expert, and write copy-paste-ready prompts for the user's target tool and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["last30days", "research", "topic", "the", "last", "days", "reddit", "web"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# last30days: Research Any Topic from the Last 30 Days

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/last30days` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# last30days: Research Any Topic from the Last 30 Days Research ANY topic across Reddit, X, and the web. Surface what people are actually discussing, recommending, and debating right now. Use cases: - Prompting: "photorealistic people in Nano Banana Pro", "Midjourney prompts", "ChatGPT image generation" → learn techniques, get copy-paste prompts - Recommendations: "best Claude Code skills", "top AI tools" → get a LIST of specific things people mention - News: "what's happening with OpenAI", "latest AI announcements" → current events and updates - General: any topic you're curious about → understand what the community is saying

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CRITICAL: Parse User Intent, Research Execution, Judge Agent: Synthesize All Sources, FIRST: Internalize the Research, THEN: Show Summary + Invite Vision, WAIT FOR USER'S VISION.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Research says "JSON prompts" → Write the prompt AS JSON
- Research says "structured parameters" → Use structured key: value format
- Research says "natural language" → Use conversational prose
- Research says "keyword lists" → Use comma-separated keywords
- [ ] FORMAT MATCHES RESEARCH - If research said JSON/structured/etc, prompt IS that format
- [ ] Directly addresses what the user said they want to create

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `scripts/last30days.py` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `scripts/lib/__init__.py` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Full Mode (both keys): Reddit + X + WebSearch - best results with engagement metrics
2. Partial Mode (one key): Reddit-only or X-only + WebSearch
3. Web-Only Mode (no keys): WebSearch only - still useful, but no engagement metrics
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview and provenance files before loading any copied upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Setup Check

The skill works in three modes based on available API keys:

1. **Full Mode** (both keys): Reddit + X + WebSearch - best results with engagement metrics
2. **Partial Mode** (one key): Reddit-only or X-only + WebSearch
3. **Web-Only Mode** (no keys): WebSearch only - still useful, but no engagement metrics

**API keys are OPTIONAL.** The skill will work without them using WebSearch fallback.

### First-Time Setup (Optional but Recommended)

If the user wants to add API keys for better results:

```bash
mkdir -p ~/.config/last30days
cat > ~/.config/last30days/.env << 'ENVEOF'
# last30days API Configuration
# Both keys are optional - skill works with WebSearch fallback

# For Reddit research (uses OpenAI's web_search tool)
OPENAI_API_KEY=

# For X/Twitter research (uses xAI's x_search tool)
XAI_API_KEY=
ENVEOF

chmod 600 ~/.config/last30days/.env
echo "Config created at ~/.config/last30days/.env"
echo "Edit to add your API keys for enhanced research."
```

**DO NOT stop if no keys are configured.** Proceed with web-only mode.

---

#### Imported: CRITICAL: Parse User Intent

Before doing anything, parse the user's input for:

1. **TOPIC**: What they want to learn about (e.g., "web app mockups", "Claude Code skills", "image generation")
2. **TARGET TOOL** (if specified): Where they'll use the prompts (e.g., "Nano Banana Pro", "ChatGPT", "Midjourney")
3. **QUERY TYPE**: What kind of research they want:
   - **PROMPTING** - "X prompts", "prompting for X", "X best practices" → User wants to learn techniques and get copy-paste prompts
   - **RECOMMENDATIONS** - "best X", "top X", "what X should I use", "recommended X" → User wants a LIST of specific things
   - **NEWS** - "what's happening with X", "X news", "latest on X" → User wants current events/updates
   - **GENERAL** - anything else → User wants broad understanding of the topic

Common patterns:

- `[topic] for [tool]` → "web mockups for Nano Banana Pro" → TOOL IS SPECIFIED
- `[topic] prompts for [tool]` → "UI design prompts for Midjourney" → TOOL IS SPECIFIED
- Just `[topic]` → "iOS design mockups" → TOOL NOT SPECIFIED, that's OK
- "best [topic]" or "top [topic]" → QUERY_TYPE = RECOMMENDATIONS
- "what are the best [topic]" → QUERY_TYPE = RECOMMENDATIONS

**IMPORTANT: Do NOT ask about target tool before research.**

- If tool is specified in the query, use it
- If tool is NOT specified, run research first, then ask AFTER showing results

**Store these variables:**

- `TOPIC = [extracted topic]`
- `TARGET_TOOL = [extracted tool, or "unknown" if not specified]`
- `QUERY_TYPE = [RECOMMENDATIONS | NEWS | HOW-TO | GENERAL]`

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @last30days to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @last30days against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @last30days for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @last30days using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/last30days`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@imagen` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/last30days.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/aging-portrait.jpeg` |

- [last30days.py](scripts/last30days.py)
- [lib/__init__.py](scripts/lib/__init__.py)
- [lib/cache.py](scripts/lib/cache.py)
- [lib/dates.py](scripts/lib/dates.py)
- [aging-portrait.jpeg](assets/aging-portrait.jpeg)
- [claude-code-rap.mp3](assets/claude-code-rap.mp3)
- [dog-as-human.png](assets/dog-as-human.png)
- [dog-original.jpeg](assets/dog-original.jpeg)

### Imported Reference Notes

#### Imported: Research Execution

**IMPORTANT: The script handles API key detection automatically.** Run it and check the output to determine mode.

**Step 1: Run the research script**

```bash
TOPIC_FILE="$(mktemp)"
trap 'rm -f "$TOPIC_FILE"' EXIT
cat <<'LAST30DAYS_TOPIC' > "$TOPIC_FILE"
$ARGUMENTS
LAST30DAYS_TOPIC
python3 ~/.claude/skills/last30days/scripts/last30days.py "$(cat "$TOPIC_FILE")" --emit=compact 2>&1
```

The script will automatically:

- Detect available API keys
- Show a promo banner if keys are missing (this is intentional marketing)
- Run Reddit/X searches if keys exist
- Signal if WebSearch is needed

**Step 2: Check the output mode**

The script output will indicate the mode:

- **"Mode: both"** or **"Mode: reddit-only"** or **"Mode: x-only"**: Script found results, WebSearch is supplementary
- **"Mode: web-only"**: No API keys, Claude must do ALL research via WebSearch

**Step 3: Do WebSearch**

For **ALL modes**, do WebSearch to supplement (or provide all data in web-only mode).

Choose search queries based on QUERY_TYPE:

**If RECOMMENDATIONS** ("best X", "top X", "what X should I use"):

- Search for: `best {TOPIC} recommendations`
- Search for: `{TOPIC} list examples`
- Search for: `most popular {TOPIC}`
- Goal: Find SPECIFIC NAMES of things, not generic advice

**If NEWS** ("what's happening with X", "X news"):

- Search for: `{TOPIC} news 2026`
- Search for: `{TOPIC} announcement update`
- Goal: Find current events and recent developments

**If PROMPTING** ("X prompts", "prompting for X"):

- Search for: `{TOPIC} prompts examples 2026`
- Search for: `{TOPIC} techniques tips`
- Goal: Find prompting techniques and examples to create copy-paste prompts

**If GENERAL** (default):

- Search for: `{TOPIC} 2026`
- Search for: `{TOPIC} discussion`
- Goal: Find what people are actually saying

For ALL query types:

- **USE THE USER'S EXACT TERMINOLOGY** - don't substitute or add tech names based on your knowledge
  - If user says "ChatGPT image prompting", search for "ChatGPT image prompting"
  - Do NOT add "DALL-E", "GPT-4o", or other terms you think are related
  - Your knowledge may be outdated - trust the user's terminology
- EXCLUDE reddit.com, x.com, twitter.com (covered by script)
- INCLUDE: blogs, tutorials, docs, news, GitHub repos
- **DO NOT output "Sources:" list** - this is noise, we'll show stats at the end

**Step 3: Wait for background script to complete**
Use TaskOutput to get the script results before proceeding to synthesis.

**Depth options** (passed through from user's command):

- `--quick` → Faster, fewer sources (8-12 each)
- (default) → Balanced (20-30 each)
- `--deep` → Comprehensive (50-70 Reddit, 40-60 X)

---

#### Imported: Judge Agent: Synthesize All Sources

**After all searches complete, internally synthesize (don't display stats yet):**

The Judge Agent must:

1. Weight Reddit/X sources HIGHER (they have engagement signals: upvotes, likes)
2. Weight WebSearch sources LOWER (no engagement data)
3. Identify patterns that appear across ALL three sources (strongest signals)
4. Note any contradictions between sources
5. Extract the top 3-5 actionable insights

**Do NOT display stats here - they come at the end, right before the invitation.**

---

#### Imported: FIRST: Internalize the Research

**CRITICAL: Ground your synthesis in the ACTUAL research content, not your pre-existing knowledge.**

Read the research output carefully. Pay attention to:

- **Exact product/tool names** mentioned (e.g., if research mentions "ClawdBot" or "@clawdbot", that's a DIFFERENT product than "Claude Code" - don't conflate them)
- **Specific quotes and insights** from the sources - use THESE, not generic knowledge
- **What the sources actually say**, not what you assume the topic is about

**ANTI-PATTERN TO AVOID**: If user asks about "clawdbot skills" and research returns ClawdBot content (self-hosted AI agent), do NOT synthesize this as "Claude Code skills" just because both involve "skills". Read what the research actually says.

### If QUERY_TYPE = RECOMMENDATIONS

**CRITICAL: Extract SPECIFIC NAMES, not generic patterns.**

When user asks "best X" or "top X", they want a LIST of specific things:

- Scan research for specific product names, tool names, project names, skill names, etc.
- Count how many times each is mentioned
- Note which sources recommend each (Reddit thread, X post, blog)
- List them by popularity/mention count

**BAD synthesis for "best Claude Code skills":**

> "Skills are powerful. Keep them under 500 lines. Use progressive disclosure."

**GOOD synthesis for "best Claude Code skills":**

> "Most mentioned skills: /commit (5 mentions), remotion skill (4x), git-worktree (3x), /pr (3x). The Remotion announcement got 16K likes on X."

### For all QUERY_TYPEs

Identify from the ACTUAL RESEARCH OUTPUT:

- **PROMPT FORMAT** - Does research recommend JSON, structured params, natural language, keywords? THIS IS CRITICAL.
- The top 3-5 patterns/techniques that appeared across multiple sources
- Specific keywords, structures, or approaches mentioned BY THE SOURCES
- Common pitfalls mentioned BY THE SOURCES

**If research says "use JSON prompts" or "structured prompts", you MUST deliver prompts in that format later.**

---

#### Imported: THEN: Show Summary + Invite Vision

**CRITICAL: Do NOT output any "Sources:" lists. The final display should be clean.**

**Display in this EXACT sequence:**

**FIRST - What I learned (based on QUERY_TYPE):**

**If RECOMMENDATIONS** - Show specific things mentioned:

```
🏆 Most mentioned:
1. [Specific name] - mentioned {n}x (r/sub, @handle, blog.com)
2. [Specific name] - mentioned {n}x (sources)
3. [Specific name] - mentioned {n}x (sources)
4. [Specific name] - mentioned {n}x (sources)
5. [Specific name] - mentioned {n}x (sources)

Notable mentions: [other specific things with 1-2 mentions]
```

**If PROMPTING/NEWS/GENERAL** - Show synthesis and patterns:

```
What I learned:

[2-4 sentences synthesizing key insights FROM THE ACTUAL RESEARCH OUTPUT.]

KEY PATTERNS I'll use:
1. [Pattern from research]
2. [Pattern from research]
3. [Pattern from research]
```

**THEN - Stats (right before invitation):**

For **full/partial mode** (has API keys):

```
---
✅ All agents reported back!
├─ 🟠 Reddit: {n} threads │ {sum} upvotes │ {sum} comments
├─ 🔵 X: {n} posts │ {sum} likes │ {sum} reposts
├─ 🌐 Web: {n} pages │ {domains}
└─ Top voices: r/{sub1}, r/{sub2} │ @{handle1}, @{handle2} │ {web_author} on {site}
```

For **web-only mode** (no API keys):

```
---
✅ Research complete!
├─ 🌐 Web: {n} pages │ {domains}
└─ Top sources: {author1} on {site1}, {author2} on {site2}

💡 Want engagement metrics? Add API keys to ~/.config/last30days/.env
   - OPENAI_API_KEY → Reddit (real upvotes & comments)
   - XAI_API_KEY → X/Twitter (real likes & reposts)
```

**LAST - Invitation:**

```
---
Share your vision for what you want to create and I'll write a thoughtful prompt you can copy-paste directly into {TARGET_TOOL}.
```

**Use real numbers from the research output.** The patterns should be actual insights from the research, not generic advice.

**SELF-CHECK before displaying**: Re-read your "What I learned" section. Does it match what the research ACTUALLY says? If the research was about ClawdBot (a self-hosted AI agent), your summary should be about ClawdBot, not Claude Code. If you catch yourself projecting your own knowledge instead of the research, rewrite it.

**IF TARGET_TOOL is still unknown after showing results**, ask NOW (not before research):

```
What tool will you use these prompts with?

Options:
1. [Most relevant tool based on research - e.g., if research mentioned Figma/Sketch, offer those]
2. Nano Banana Pro (image generation)
3. ChatGPT / Claude (text/code)
4. Other (tell me)
```

**IMPORTANT**: After displaying this, WAIT for the user to respond. Don't dump generic prompts.

---

#### Imported: WAIT FOR USER'S VISION

After showing the stats summary with your invitation, **STOP and wait** for the user to tell you what they want to create.

When they respond with their vision (e.g., "I want a landing page mockup for my SaaS app"), THEN write a single, thoughtful, tailored prompt.

---

#### Imported: IF USER ASKS FOR MORE OPTIONS

Only if they ask for alternatives or more prompts, provide 2-3 variations. Don't dump a prompt pack unless requested.

---

#### Imported: AFTER EACH PROMPT: Stay in Expert Mode

After delivering a prompt, offer to write more:

> Want another prompt? Just tell me what you're creating next.

---

#### Imported: CONTEXT MEMORY

For the rest of this conversation, remember:

- **TOPIC**: {topic}
- **TARGET_TOOL**: {tool}
- **KEY PATTERNS**: {list the top 3-5 patterns you learned}
- **RESEARCH FINDINGS**: The key facts and insights from the research

**CRITICAL: After research is complete, you are now an EXPERT on this topic.**

When the user asks follow-up questions:

- **DO NOT run new WebSearches** - you already have the research
- **Answer from what you learned** - cite the Reddit threads, X posts, and web sources
- **If they ask for a prompt** - write one using your expertise
- **If they ask a question** - answer it from your research findings

Only do new research if the user explicitly asks about a DIFFERENT topic.

---

#### Imported: Output Summary Footer (After Each Prompt)

After delivering a prompt, end with:

For **full/partial mode**:

```
---
📚 Expert in: {TOPIC} for {TARGET_TOOL}
📊 Based on: {n} Reddit threads ({sum} upvotes) + {n} X posts ({sum} likes) + {n} web pages

Want another prompt? Just tell me what you're creating next.
```

For **web-only mode**:

```
---
📚 Expert in: {TOPIC} for {TARGET_TOOL}
📊 Based on: {n} web pages from {domains}

Want another prompt? Just tell me what you're creating next.

💡 Unlock Reddit & X data: Add API keys to ~/.config/last30days/.env
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
