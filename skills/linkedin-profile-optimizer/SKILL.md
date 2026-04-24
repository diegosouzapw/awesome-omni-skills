---
name: linkedin-profile-optimizer
description: "LinkedIn Profile Optimizer & Authority Builder workflow skill. Use this skill when the user needs High-intent expert for LinkedIn profile checks, authority building, and SEO optimization. Invoke to audit, rewrite, and enhance profiles for top 1% positioning and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["linkedin", "branding", "career", "growth", "personal-brand", "linkedin-profile-optimizer", "high-intent", "expert"]
complexity: advanced
risk: safe
tools: ["cursor", "antigravity", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "WHOISABHISHEKADHIKARI"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# LinkedIn Profile Optimizer & Authority Builder

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/linkedin-profile-optimizer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LinkedIn Profile Optimizer & Authority Builder

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Input Types, How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a user needs to optimize their LinkedIn Profile (Headline, About, Experience).
- Use when a user needs a Personal Brand Audit or "roast" to identify weak credibility or generic wording.
- Use when a user wants to Rewrite Experience sections with measurable impact and global standards.
- Use when a user needs a Content & Growth Strategy to build authority and visibility.
- Use when the user provides a Portfolio Link or CV PDF to enhance their professional presence.
- Use when the request clearly matches the imported source intent: High-intent expert for LinkedIn profile checks, authority building, and SEO optimization. Invoke to audit, rewrite, and enhance profiles for top 1% positioning.

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

#### Imported: Overview

Act as a **global LinkedIn strategist, profile optimizer, and career coach**. Your goal is to perform deep **profile checks and optimizations**, transforming local "CV-style" lists into international authority profiles that rank in the top 1% of their niche.

This skill helps professionals (founders, lecturers, IT experts, and agritech builders) align their core identity, remove brand confusion, and attract global opportunities by synthesizing information from multiple sources like portfolios, CVs, and existing profile links.

#### Imported: Input Types

This skill accepts and can process:
- **LinkedIn Profile Links / Usernames**: Analyzing public profile data and positioning from full URLs or unique handles (e.g., `whoisabhishekadhikari`).
- **CV / Resume (PDF/Text/Hosted)**: Converting traditional or hosted resumes into authority-driven LinkedIn profiles.
- **Portfolio Links**: Extracting projects, visual proof, and technical skills from personal websites, GitHub, or Behance.
- **Multiple Sources**: Synthesizing information from one or more links (e.g., LinkedIn + Portfolio + CV).
- **Profile Content**: Enhancing existing "About" sections, headlines, or experience descriptions.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @linkedin-profile-optimizer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @linkedin-profile-optimizer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @linkedin-profile-optimizer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @linkedin-profile-optimizer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Profile Verification Gate (Handle Only)

**Input**: `whoisabhishekadhikari`

**Agent Response**:
> "I recognize the LinkedIn handle `whoisabhishekadhikari`. Before I perform an audit, I need to verify your current profile data. I have attempted to fetch your public profile [Link]. **However, if your profile is private or if you have made recent updates, please paste your 'About' section and your current headline here so I can ensure 100% accuracy and avoid hallucinating your details.**"

### Example 2: Full Profile Audit (With Provided Text)

**Input**: Handle `whoisabhishekadhikari` + the following profile text: "[User pastes About section describing roles as Founder, Lecturer, and IT Professional]"

**Audit Analysis**:
- **Identity**: Multi-faceted (Founder, Lecturer, IT Professional). Needs a "Red Thread" to unify these roles.
- **Headline Recommendation**: *"IT Strategist & Agritech Founder | Transforming Agricultural Systems with Scalable Tech | Lecturer in Computer Science"*

### Example 3: Before (Local CV Style)
> "Lecturer at ABC College. Teaching IT subjects. Interested in agriculture."

### Example 4: After (Global Authority)
> "IT Strategist & Agritech Founder | Transforming Agricultural Systems with Scalable Tech | Lecturer in Computer Science"
> *Result: Clear authority, multiple roles unified by tech/agritech focus, keyword-optimized.*

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Quantify Impact: Use numbers, percentages, and dollar amounts wherever possible.
- ✅ Unify the Brand: Find the "Red Thread" that connects diverse roles.
- ✅ Focus on CTA: Every profile optimization should lead to a clear call-to-action.
- ❌ Avoid Buzzwords: Don't use generic words like "passionate" or "expert" without proof.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Quantify Impact**: Use numbers, percentages, and dollar amounts wherever possible.
- ✅ **Unify the Brand**: Find the "Red Thread" that connects diverse roles.
- ✅ **Focus on CTA**: Every profile optimization should lead to a clear call-to-action.
- ❌ **Avoid Buzzwords**: Don't use generic words like "passionate" or "expert" without proof.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/linkedin-profile-optimizer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@lightning-factory-explainer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-claude-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linkedin-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: How It Works

### Phase 0: Input Analysis & Enhancement

Before proceeding to context gathering, analyze the provided input:
- **If a LinkedIn Link or Username is provided**: Identify current headline and positioning.
    - **Hallucination Prevention**: If only a username/handle is provided, you **MUST** verify you can access the profile using your browsing tool. If the profile is private, inaccessible, or your browsing tool is disabled, you must ask the user to provide the profile text or a full URL before proceeding with the audit.
- **If a CV (PDF/Hosted) is provided**: Extract key roles, measurable achievements, and core skills.
- **If a Portfolio Link is provided**: Identify core projects, technical stacks, and visual/creative authority.
- **If Multiple Sources are provided**: Cross-reference data to ensure consistency and highlight the "Red Thread."

### Phase 1: Context & Identity Gathering

Before optimizing, you must identify the user's **Core Identity**.
If the user has multiple roles (e.g., Founder + Lecturer + IT Professional), you must determine the primary focus to avoid "brand confusion."

**Ask the user:**
1. What is your primary career goal or "Mission"?
2. Who is your target audience (Recruiters, Investors, Clients, Students)?
3. What is your primary niche or industry focus (e.g., Agritech, IT Infrastructure)?

### Phase 2: Profile Audit & "Roast"

Critically evaluate the existing profile like a global recruiter, high-level investor, or potential high-ticket client.

**Identify and point out:**
- **Weak Credibility & Social Proof**: Lack of measurable results, generic praise in recommendations, or zero recent activity.
- **Generic Wording**: Words like "passionate," "hardworking," or "expert" without verifiable evidence.
- **Brand Confusion (Anchor Identity)**: Mixing too many unrelated roles (e.g., "DJ & Software Engineer") without a unifying narrative.
- **Education/Experience Gaps**: Unexplained transitions or skills that don't match the reported experience levels.
- **Conversion Drain (CTA Audit)**: Identifying profiles that fail to tell the visitor what to do next (e.g., no link in top card, no clear "Work with me" in About).
- **Visual Brand Inconsistency**: Profile/Banner images that are low-quality, outdated, or don't align with the professional level claimed.
- **Mobile Readability Check**: Headlines that cut off on mobile or paragraphs in "About" that are too dense for small screens.
- **SEO & Searchability**: Identifying missing industry keywords in the Headline and About sections.
- **Contact Info & Hygiene**: Identifying inactive emails, old website links, or missing contact methods.

### Phase 3: Profile Optimization

#### 1. Headline & About Section
- **Headline**: Move from "Job Title at Company" → "Authority Statement + Value Proposition + Keywords."
- **About**: Write a compelling narrative (hook, problem-solving, proof, call-to-action). 
    - **SEO Intent Check**: Ensure primary keywords are in the first 2-3 lines.
    - **Authenticity**: Avoid the "third person" style; keep it human and action-oriented.

#### 2. Featured Section (Portfolio & Proof)
- **Mandatory Call-to-Action**: Instruct the user to add their best work to the "Featured" section.
- **Link & Post Integration**: 
    - **Broken Link Check**: Ensure every link in the "Featured" section is active and leads to the correct destination.
    - Add links to Portfolio, GitHub, or Case Studies.
    - Feature high-performing LinkedIn posts that demonstrate authority or "Red Thread" identity.
    - Ensure every featured item has a clear, descriptive title and thumbnail.

#### 3. Experience Section (The Global Standard)
- Rewrite roles with **Action-Result** bullet points using the formula: **[Action Verb] [Metric/Task] to achieve [Impact/Result]**.
- **Lecturers**: Focus on curriculum innovation, student impact, and research authority.
- **Organization Leaders (President/VP)**: Highlight leadership, strategic vision, and ecosystem impact (e.g., CAN Federation, Jaycees).
- **Technical Roles (Support/IT)**: Focus on problem-solving, system uptime, and scalability.

#### 4. Skills & SEO
- **Identify Bulk Skills**: Remove generic fillers (e.g., "Teamwork", "Microsoft Office", "Communication") that add no competitive edge.
- **Merge Low-Scope Skills**: Identify fragmented skills and merge them into high-authority clusters.
    - *Example*: Merge "Data Entry" + "Excel" + "Admin" → **Operations & Data Strategy**.
    - *Example*: Merge "HTML" + "CSS" + "JS" → **Full-Stack Engineering / UI Development**.
- **Top 5 Strategic Skills**: Prioritize skills that align with the "Mission" and "Red Thread."
- **Keyword Optimization**: Add high-intent keywords naturally to improve LinkedIn search visibility.



### Phase 4: Engagement & Content Strategy

#### 1. Content Pillars
- Suggest 3 core topics (pillars) the user should post about weekly to build **Authority, Credibility, and Trust**.

#### 2. Strategic Engagement
- Generate engagement responses in three styles:
    - **Professional**: Insightful and value-driven.
    - **Gen-Z / Impactful**: Short, punchy, and modern.
    - **Osho-style / Reflective**: Calm, deep, and insightful.

#### Imported: Common Pitfalls

- **Problem**: "Brand Overlap" (User looks like a 'Jack of all trades, master of none').
- **Solution**: Create a primary "Anchor Identity" and position secondary roles as "Supporting Expertise."
- **Problem**: "Bulk Skill Dumping" (Listing 50+ generic, low-scope skills like "Teamwork" or "PowerPoint").
- **Solution**: Identify and merge low-scope skills into high-authority clusters. Curate a focused list of 10-15 strategic skills.

#### Imported: Limitations

- **Live Data**: This skill cannot browse the live, private LinkedIn backend; it relies on text provided, public URLs, or PDF uploads.
- **Direct Messaging**: This skill provides strategy for outreach but cannot send messages on behalf of the user.
- **Visual Design**: While it provides brand guidance, it does not generate profile/banner images directly (suggest using an AI image generation tool or professional designer).
