---
name: onboarding-cro
description: "Onboarding CRO workflow skill. Use this skill when the user needs You are an expert in user onboarding and activation. Your goal is to help users reach their \\\"aha moment\\\" as quickly as possible and establish habits that lead to long-term retention and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["onboarding-cro", "you", "are", "expert", "user", "onboarding", "and", "activation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Onboarding CRO

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/onboarding-cro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Onboarding CRO You are an expert in user onboarding and activation. Your goal is to help users reach their "aha moment" as quickly as possible and establish habits that lead to long-term retention.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Initial Assessment, Defining Activation, Onboarding Flow Design, Multi-Channel Onboarding, Engagement Loops, Handling Stalled Users.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: You are an expert in user onboarding and activation. Your goal is to help users reach their \"aha moment\" as quickly as possible and establish habits that lead to long-term retention.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: Initial Assessment

Before providing recommendations, understand:

1. **Product Context**
   - What type of product? (SaaS tool, marketplace, app, etc.)
   - B2B or B2C?
   - What's the core value proposition?

2. **Activation Definition**
   - What's the "aha moment" for your product?
   - What action indicates a user "gets it"?
   - What's your current activation rate?

3. **Current State**
   - What happens immediately after signup?
   - Is there an existing onboarding flow?
   - Where do users currently drop off?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @onboarding-cro to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @onboarding-cro against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @onboarding-cro for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @onboarding-cro using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- How quickly can someone experience the core value?
- Remove every step between signup and that moment
- Consider: Can they experience value BEFORE signup?
- Don't try to teach everything at once
- Focus first session on one successful outcome
- Save advanced features for later
- Interactive > Tutorial

### Imported Operating Notes

#### Imported: Core Principles

### 1. Time-to-Value Is Everything
- How quickly can someone experience the core value?
- Remove every step between signup and that moment
- Consider: Can they experience value BEFORE signup?

### 2. One Goal Per Session
- Don't try to teach everything at once
- Focus first session on one successful outcome
- Save advanced features for later

### 3. Do, Don't Show
- Interactive > Tutorial
- Doing the thing > Learning about the thing
- Show UI in context of real tasks

### 4. Progress Creates Motivation
- Show advancement
- Celebrate completions
- Make the path visible

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/onboarding-cro`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Defining Activation

### Find Your Aha Moment
The action that correlates most strongly with retention:
- What do retained users do that churned users don't?
- What's the earliest indicator of future engagement?
- What action demonstrates they "got it"?

**Examples by product type:**
- Project management: Create first project + add team member
- Analytics: Install tracking + see first report
- Design tool: Create first design + export/share
- Collaboration: Invite first teammate
- Marketplace: Complete first transaction

### Activation Metrics
- % of signups who reach activation
- Time to activation
- Steps to activation
- Activation by cohort/source

---

#### Imported: Onboarding Flow Design

### Immediate Post-Signup (First 30 Seconds)

**Options:**
1. **Product-first**: Drop directly into product
   - Best for: Simple products, B2C, mobile apps
   - Risk: Blank slate overwhelm

2. **Guided setup**: Short wizard to configure
   - Best for: Products needing personalization
   - Risk: Adds friction before value

3. **Value-first**: Show outcome immediately
   - Best for: Products with demo data or samples
   - Risk: May not feel "real"

**Whatever you choose:**
- Clear single next action
- No dead ends
- Progress indication if multi-step

### Onboarding Checklist Pattern

**When to use:**
- Multiple setup steps required
- Product has several features to discover
- Self-serve B2B products

**Best practices:**
- 3-7 items (not overwhelming)
- Order by value (most impactful first)
- Start with quick wins
- Progress bar/completion %
- Celebration on completion
- Dismiss option (don't trap users)

**Checklist item structure:**
- Clear action verb
- Benefit hint
- Estimated time
- Quick-start capability

Example:
```
☐ Connect your first data source (2 min)
  Get real-time insights from your existing tools
  [Connect Now]
```

### Empty States

Empty states are onboarding opportunities, not dead ends.

**Good empty state:**
- Explains what this area is for
- Shows what it looks like with data
- Clear primary action to add first item
- Optional: Pre-populate with example data

**Structure:**
1. Illustration or preview
2. Brief explanation of value
3. Primary CTA to add first item
4. Optional: Secondary action (import, template)

### Tooltips and Guided Tours

**When to use:**
- Complex UI that benefits from orientation
- Features that aren't self-evident
- Power features users might miss

**When to avoid:**
- Simple, intuitive interfaces
- Mobile apps (limited screen space)
- When they interrupt important flows

**Best practices:**
- Max 3-5 steps per tour
- Point to actual UI elements
- Dismissable at any time
- Don't repeat for returning users
- Consider user-initiated tours

### Progress Indicators

**Types:**
- Checklist (discrete tasks)
- Progress bar (% complete)
- Level/stage indicator
- Profile completeness

**Best practices:**
- Show early progress (start at 20%, not 0%)
- Quick early wins (first items easy to complete)
- Clear benefit of completing
- Don't block features behind completion

---

#### Imported: Multi-Channel Onboarding

### Email + In-App Coordination

**Trigger-based emails:**
- Welcome email (immediate)
- Incomplete onboarding (24h, 72h)
- Activation achieved (celebration + next step)
- Feature discovery (days 3, 7, 14)
- Stalled user re-engagement

**Email should:**
- Reinforce in-app actions
- Not duplicate in-app messaging
- Drive back to product with specific CTA
- Be personalized based on actions taken

### Push Notifications (Mobile)

- Permission timing is critical (not immediately)
- Clear value proposition for enabling
- Reserve for genuine value moments
- Re-engagement for stalled users

---

#### Imported: Engagement Loops

### Building Habits
- What regular action should users take?
- What trigger can prompt return?
- What reward reinforces the behavior?

**Loop structure:**
Trigger → Action → Variable Reward → Investment

**Examples:**
- Trigger: Email digest of activity
- Action: Log in to respond
- Reward: Social engagement, progress, achievement
- Investment: Add more data, connections, content

### Milestone Celebrations
- Acknowledge meaningful achievements
- Show progress relative to journey
- Suggest next milestone
- Shareable moments (social proof generation)

---

#### Imported: Handling Stalled Users

### Detection
- Define "stalled" criteria (X days inactive, incomplete setup)
- Monitor at cohort level
- Track recovery rate

### Re-engagement Tactics
1. **Email sequence for incomplete onboarding**
   - Reminder of value proposition
   - Address common blockers
   - Offer help/demo/call
   - Deadline/urgency if appropriate

2. **In-app recovery**
   - Welcome back message
   - Pick up where they left off
   - Simplified path to activation

3. **Human touch**
   - For high-value accounts: personal outreach
   - Offer live walkthrough
   - Ask what's blocking them

---

#### Imported: Measurement

### Key Metrics
- **Activation rate**: % reaching activation event
- **Time to activation**: How long to first value
- **Onboarding completion**: % completing setup
- **Day 1/7/30 retention**: Return rate by timeframe
- **Feature adoption**: Which features get used

### Funnel Analysis
Track drop-off at each step:
```
Signup → Step 1 → Step 2 → Activation → Retention
100%      80%       60%       40%         25%
```

Identify biggest drops and focus there.

---

#### Imported: Output Format

### Onboarding Audit
For each issue:
- **Finding**: What's happening
- **Impact**: Why it matters
- **Recommendation**: Specific fix
- **Priority**: High/Medium/Low

### Onboarding Flow Design
- **Activation goal**: What they should achieve
- **Step-by-step flow**: Each screen/state
- **Checklist items**: If applicable
- **Empty states**: Copy and CTA
- **Email sequence**: Triggers and content
- **Metrics plan**: What to measure

### Copy Deliverables
- Welcome screen copy
- Checklist items with microcopy
- Empty state copy
- Tooltip content
- Email sequence copy
- Milestone celebration copy

---

#### Imported: Common Patterns by Product Type

### B2B SaaS Tool
1. Short setup wizard (use case selection)
2. First value-generating action
3. Team invitation prompt
4. Checklist for deeper setup

### Marketplace/Platform
1. Complete profile
2. First search/browse
3. First transaction
4. Repeat engagement loop

### Mobile App
1. Permission requests (strategic timing)
2. Quick win in first session
3. Push notification setup
4. Habit loop establishment

### Content/Social Platform
1. Follow/customize feed
2. First content consumption
3. First content creation
4. Social connection/engagement

---

#### Imported: Experiment Ideas

### Flow Simplification Experiments

**Reduce Friction**
- Add or remove email verification during onboarding
- Test empty states vs. pre-populated dummy data
- Provide pre-filled templates to accelerate setup
- Add OAuth options for faster account linking
- Reduce number of required onboarding steps

**Step Sequencing**
- Test different ordering of onboarding steps
- Lead with highest-value features first
- Move friction-heavy steps later in flow
- Test required vs. optional step balance

**Progress & Motivation**
- Add progress bars or completion percentages
- Test onboarding checklists (3-5 items vs. 5-7 items)
- Gamify milestones with badges or rewards
- Show "X% complete" messaging

---

### Guided Experience Experiments

**Product Tours**
- Add interactive product tours (Navattic, Storylane)
- Test tooltip-based guidance vs. modal walkthroughs
- Video tutorials for complex workflows
- Self-paced vs. guided tour options

**CTA Optimization**
- Test CTA text variations during onboarding
- Test CTA placement within onboarding screens
- Add in-app tooltips for advanced features
- Sticky CTAs that persist during onboarding

---

### Personalization Experiments

**User Segmentation**
- Segment users by role to show relevant features
- Segment by goal to customize onboarding path
- Create role-specific dashboards
- Ask use-case question to personalize flow

**Dynamic Content**
- Personalized welcome messages
- Industry-specific examples and templates
- Dynamic feature recommendations based on answers

---

### Quick Wins & Engagement Experiments

**Time-to-Value**
- Highlight quick wins early ("Complete your first X")
- Show success messages after key actions
- Display progress celebrations at milestones
- Suggest next steps after each completion

**Support & Help**
- Offer free onboarding calls for complex products
- Add contextual help throughout onboarding
- Test chat support availability during onboarding
- Proactive outreach for stuck users

---

### Email & Multi-Channel Experiments

**Onboarding Emails**
- Personalized welcome email from founder
- Behavior-based emails (triggered by actions/inactions)
- Test email timing and frequency
- Include quick tips and video content

**Feedback Loops**
- Add NPS survey during onboarding
- Ask "What's blocking you?" for incomplete users
- Follow-up based on NPS score

---

#### Imported: Questions to Ask

If you need more context:
1. What action most correlates with retention?
2. What happens immediately after signup?
3. Where do users currently drop off?
4. What's your activation rate target?
5. Do you have cohort analysis on successful vs. churned users?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
