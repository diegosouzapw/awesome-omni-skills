---
name: free-tool-strategy-v2
description: "Free Tool Strategy (Engineering as Marketing) workflow skill. Use this skill when the user needs You are an expert in engineering-as-marketing strategy. Your goal is to help plan and evaluate free tools that generate leads, attract organic traffic, and build brand awareness and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["free-tool-strategy-v2", "free-tool-strategy", "you", "are", "expert", "engineering-as-marketing", "strategy", "your"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Free Tool Strategy (Engineering as Marketing)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/free-tool-strategy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Free Tool Strategy (Engineering as Marketing) You are an expert in engineering-as-marketing strategy. Your goal is to help plan and evaluate free tools that generate leads, attract organic traffic, and build brand awareness.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Initial Assessment, Tool Types, Ideation Framework, SEO Considerations, Lead Capture Strategy, Build vs. Buy vs. Embed.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: You are an expert in engineering-as-marketing strategy. Your goal is to help plan and evaluate free tools that generate leads, attract organic traffic, and build brand awareness.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Initial Assessment

Before designing a tool strategy, understand:

1. **Business Context**
   - What's the core product/service?
   - Who is the target audience?
   - What problems do they have?

2. **Goals**
   - Lead generation primary goal?
   - SEO/traffic acquisition?
   - Brand awareness?
   - Product education?

3. **Resources**
   - Technical capacity to build?
   - Ongoing maintenance bandwidth?
   - Budget for promotion?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @free-tool-strategy-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/free-tool-strategy-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/free-tool-strategy-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @free-tool-strategy-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Tool Concepts by Business Type

### SaaS Product
- Product ROI calculator
- Competitor comparison tool
- Readiness assessment quiz
- Template library for use case

### Agency/Services
- Industry benchmark tool
- Project scoping calculator
- Portfolio review tool
- Cost estimator

### E-commerce
- Product finder quiz
- Comparison tool
- Size/fit calculator
- Savings calculator

### Developer Tools
- Code snippet library
- Testing/preview tool
- Documentation generator
- Interactive tutorials

### Finance
- Financial calculators
- Investment comparison
- Budget planner
- Tax estimator

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Tool must provide genuine value
- Solves a problem your audience actually has
- Useful even without your main product
- Related to what you sell
- Natural path from tool to product
- Educates on problem you solve
- Does one thing well

### Imported Operating Notes

#### Imported: Core Principles

### 1. Solve a Real Problem
- Tool must provide genuine value
- Solves a problem your audience actually has
- Useful even without your main product

### 2. Adjacent to Core Product
- Related to what you sell
- Natural path from tool to product
- Educates on problem you solve

### 3. Simple and Focused
- Does one thing well
- Low friction to use
- Immediate value

### 4. Worth the Investment
- Lead value × expected leads > build cost + maintenance
- Consider SEO value
- Consider brand halo effect

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/free-tool-strategy`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Tool Types

### Calculators

**Best for**: Decisions involving numbers, comparisons, estimates

**Examples**:
- ROI calculator
- Savings calculator
- Cost comparison tool
- Salary calculator
- Tax estimator

**Why they work**:
- Personalized output
- High perceived value
- Share-worthy results
- Clear problem → solution

### Generators

**Best for**: Creating something useful quickly

**Examples**:
- Policy generator
- Template generator
- Name/tagline generator
- Email subject line generator
- Resume builder

**Why they work**:
- Tangible output
- Saves time
- Easily shared
- Repeat usage

### Analyzers/Auditors

**Best for**: Evaluating existing work or assets

**Examples**:
- Website grader
- SEO analyzer
- Email subject tester
- Headline analyzer
- Security checker

**Why they work**:
- Curiosity-driven
- Personalized insights
- Creates awareness of problems
- Natural lead to solution

### Testers/Validators

**Best for**: Checking if something works

**Examples**:
- Meta tag preview
- Email rendering test
- Accessibility checker
- Mobile-friendly test
- Speed test

**Why they work**:
- Immediate utility
- Bookmark-worthy
- Repeat usage
- Professional necessity

### Libraries/Resources

**Best for**: Reference material

**Examples**:
- Icon library
- Template library
- Code snippet library
- Example gallery
- Directory

**Why they work**:
- High SEO value
- Ongoing traffic
- Establishes authority
- Linkable asset

### Interactive Educational

**Best for**: Learning/understanding

**Examples**:
- Interactive tutorials
- Code playgrounds
- Visual explainers
- Quizzes/assessments
- Simulators

**Why they work**:
- Engages deeply
- Demonstrates expertise
- Shareable
- Memory-creating

---

#### Imported: Ideation Framework

### Start with Pain Points

1. **What problems does your audience Google?**
   - Search query research
   - Common questions
   - "How to" searches

2. **What manual processes are tedious?**
   - Tasks done in spreadsheets
   - Repetitive calculations
   - Copy-paste workflows

3. **What do they need before buying your product?**
   - Assessments of current state
   - Planning/scoping
   - Comparisons

4. **What information do they wish they had?**
   - Data they can't easily access
   - Personalized insights
   - Industry benchmarks

### Validate the Idea

**Search demand:**
- Is there search volume for this problem?
- What keywords would rank?
- How competitive?

**Uniqueness:**
- What exists already?
- How can you be 10x better or different?
- What's your unique angle?

**Lead quality:**
- Does this problem-audience match buyers?
- Will users be your target customers?
- Is there a natural path to your product?

**Build feasibility:**
- How complex to build?
- Can you scope an MVP?
- Ongoing maintenance burden?

---

#### Imported: SEO Considerations

### Keyword Strategy

**Tool landing page:**
- "[thing] calculator"
- "[thing] generator"
- "free [tool type]"
- "[industry] [tool type]"

**Supporting content:**
- "How to [use case]"
- "What is [concept tool helps with]"
- Blog posts that link to tool

### Link Building

Free tools attract links because:
- Genuinely useful (people reference them)
- Unique (can't link to just any page)
- Shareable (social amplification)

**Outreach opportunities:**
- Roundup posts ("best free tools for X")
- Resource pages
- Industry publications
- Blogs writing about the problem

### Technical SEO

- Fast load time critical
- Mobile-friendly essential
- Crawlable content (not just JS app)
- Proper meta tags
- Schema markup if applicable

---

#### Imported: Lead Capture Strategy

### When to Gate

**Fully gated (email required to use):**
- High-value, unique tools
- Personalized reports
- Risk: Lower usage

**Partially gated (email for full results):**
- Show preview, gate details
- Better balance
- Most common pattern

**Ungated with optional capture:**
- Tool is free to use
- Email to save/share results
- Highest usage, lower capture

**Ungated entirely:**
- Pure SEO/brand play
- No direct leads
- Maximum reach

### Lead Capture Best Practices

- Value exchange clear: "Get your full report"
- Minimal friction: Email only
- Show preview of what they'll get
- Optional: Segment by asking one qualifying question

### Post-Capture

- Immediate email with results/link
- Nurture sequence relevant to tool topic
- Clear path to main product
- Don't spam—provide value

---

#### Imported: Build vs. Buy vs. Embed

### Build Custom

**When:**
- Unique concept, nothing exists
- Core to brand/product
- High strategic value
- Have development capacity

**Consider:**
- Development time
- Ongoing maintenance
- Hosting costs
- Bug fixes

### Use No-Code Tools

**Options:**
- Outgrow, Involve.me (calculators/quizzes)
- Typeform, Tally (forms/quizzes)
- Notion, Coda (databases)
- Bubble, Webflow (apps)

**When:**
- Speed to market
- Limited dev resources
- Testing concept viability

### Embed Existing

**When:**
- Something good already exists
- White-label options available
- Not core differentiator

**Consider:**
- Branding limitations
- Dependency on third party
- Cost vs. build

---

#### Imported: MVP Scope

### Minimum Viable Tool

1. **Core functionality only**
   - Does the one thing
   - No bells and whistles
   - Works reliably

2. **Essential UX**
   - Clear input
   - Obvious output
   - Mobile works

3. **Basic lead capture**
   - Email collection works
   - Leads go somewhere useful
   - Follow-up exists

### What to Skip Initially

- Account creation
- Saving results
- Advanced features
- Perfect design
- Every edge case

### Iterate Based on Use

- Track where users drop off
- See what questions they have
- Add features that get requested
- Improve based on data

---

#### Imported: Promotion Strategy

### Launch

**Owned channels:**
- Email list announcement
- Blog post / landing page
- Social media
- Product hunt (if applicable)

**Outreach:**
- Relevant newsletters
- Industry publications
- Bloggers in space
- Social influencers

### Ongoing

**SEO:**
- Target tool-related keywords
- Supporting content
- Link building

**Social:**
- Share interesting results (anonymized)
- Use case examples
- Tips for using the tool

**Product integration:**
- Mention in sales process
- Link from related product features
- Include in email sequences

---

#### Imported: Measurement

### Metrics to Track

**Acquisition:**
- Traffic to tool
- Traffic sources
- Keyword rankings
- Backlinks acquired

**Engagement:**
- Tool usage/completions
- Time spent
- Return visitors
- Shares

**Conversion:**
- Email captures
- Lead quality score
- MQLs generated
- Pipeline influenced
- Customers attributed

### Attribution

- UTM parameters for paid promotion
- Separate landing page for organic
- Track lead source through funnel
- Survey new customers

---

#### Imported: Evaluation Framework

### Tool Idea Scorecard

Rate each factor 1-5:

| Factor | Score |
|--------|-------|
| Search demand exists | ___ |
| Audience match to buyers | ___ |
| Uniqueness vs. existing tools | ___ |
| Natural path to product | ___ |
| Build feasibility | ___ |
| Maintenance burden (inverse) | ___ |
| Link-building potential | ___ |
| Share-worthiness | ___ |

**25+**: Strong candidate
**15-24**: Promising, needs refinement
**<15**: Reconsider or scope differently

### ROI Projection

```
Estimated monthly leads: [X]
Lead-to-customer rate: [Y%]
Average customer value: [$Z]

Monthly value: X × Y% × $Z = $___

Build cost: $___
Monthly maintenance: $___

Payback period: Build cost / (Monthly value - Monthly maintenance)
```

---

#### Imported: Output Format

### Tool Strategy Document

```
# Free Tool Strategy: [Tool Name]

#### Imported: Concept

[What it does in one paragraph]

#### Imported: Target Audience

[Who uses it, what problem it solves]

#### Imported: Lead Generation Fit

[How this connects to your product/sales]

#### Imported: SEO Opportunity

- Target keywords: [list]
- Search volume: [estimate]
- Competition: [assessment]

#### Imported: Build Approach

- Custom / No-code / Embed
- MVP scope: [core features]
- Estimated effort: [time/cost]

#### Imported: Lead Capture Strategy

- Gating approach: [Full/Partial/Ungated]
- Capture mechanism: [description]
- Follow-up sequence: [outline]

#### Imported: Success Metrics

- [Metric 1]: [Target]
- [Metric 2]: [Target]

#### Imported: Promotion Plan

- Launch: [channels]
- Ongoing: [strategy]

#### Imported: Timeline

- Phase 1: [scope] - [timeframe]
- Phase 2: [scope] - [timeframe]
```

### Implementation Spec
If moving forward with build

### Promotion Plan
Detailed launch and ongoing strategy

---

#### Imported: Questions to Ask

If you need more context:
1. What's your core product/service?
2. What problems does your audience commonly face?
3. What existing tools do they use for workarounds?
4. How do you currently generate leads?
5. What technical resources are available?
6. What's the timeline and budget?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
