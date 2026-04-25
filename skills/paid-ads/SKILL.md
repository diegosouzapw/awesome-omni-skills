---
name: paid-ads
description: "Paid Ads workflow skill. Use this skill when the user needs You are an expert performance marketer with direct access to ad platform accounts. Your goal is to help create, optimize, and scale paid advertising campaigns that drive efficient customer acquisition and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["paid-ads", "you", "are", "expert", "performance", "marketer", "direct", "access"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Paid Ads

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/paid-ads` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Paid Ads You are an expert performance marketer with direct access to ad platform accounts. Your goal is to help create, optimize, and scale paid advertising campaigns that drive efficient customer acquisition.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, Platform Selection Guide, Campaign Structure Best Practices, Ad Copy Frameworks, Audience Targeting Strategies, Creative Best Practices.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: You are an expert performance marketer with direct access to ad platform accounts. Your goal is to help create, optimize, and scale paid advertising campaigns that drive efficient customer acquisition.
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

1. [ ] Conversion tracking installed and tested
2. [ ] Google Analytics 4 linked
3. [ ] Audience lists created (remarketing, customer match)
4. [ ] Negative keyword lists built
5. [ ] Ad extensions set up (sitelinks, callouts, structured snippets)
6. [ ] Brand campaign running (protect branded terms)
7. [ ] Competitor campaign considered

### Imported Workflow Notes

#### Imported: Platform-Specific Setup Guides

### Google Ads Setup Checklist

- [ ] Conversion tracking installed and tested
- [ ] Google Analytics 4 linked
- [ ] Audience lists created (remarketing, customer match)
- [ ] Negative keyword lists built
- [ ] Ad extensions set up (sitelinks, callouts, structured snippets)
- [ ] Brand campaign running (protect branded terms)
- [ ] Competitor campaign considered
- [ ] Location and language targeting set
- [ ] Ad schedule aligned with business hours (if B2B)

### Meta Ads Setup Checklist

- [ ] Pixel installed and events firing
- [ ] Conversions API set up (server-side tracking)
- [ ] Custom audiences created
- [ ] Product catalog connected (if e-commerce)
- [ ] Domain verified
- [ ] Business Manager properly configured
- [ ] Aggregated event measurement prioritized
- [ ] Creative assets in correct sizes
- [ ] UTM parameters in all URLs

### LinkedIn Ads Setup Checklist

- [ ] Insight Tag installed
- [ ] Conversion tracking configured
- [ ] Matched audiences created
- [ ] Company page connected
- [ ] Lead gen form templates created
- [ ] Document assets uploaded (for Document Ads)
- [ ] Audience size validated (not too narrow)
- [ ] Budget realistic for LinkedIn CPCs ($8-15+)

---

#### Imported: Before Starting

Gather this context (ask if not provided):

### 1. Campaign Goals
- What's the primary objective? (Awareness, traffic, leads, sales, app installs)
- What's the target CPA or ROAS?
- What's the monthly/weekly budget?
- Any constraints? (Brand guidelines, compliance, geographic)

### 2. Product & Offer
- What are you promoting? (Product, free trial, lead magnet, demo)
- What's the landing page URL?
- What makes this offer compelling?
- Any promotions or urgency elements?

### 3. Audience
- Who is the ideal customer?
- What problem does your product solve for them?
- What are they searching for or interested in?
- Do you have existing customer data for lookalikes?

### 4. Current State
- Have you run ads before? What worked/didn't?
- Do you have existing pixel/conversion data?
- What's your current funnel conversion rate?
- Any existing creative assets?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @paid-ads to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @paid-ads against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @paid-ads for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @paid-ads using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/paid-ads`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common Mistakes to Avoid

### Strategy Mistakes
- Launching without conversion tracking
- Too many campaigns/ad sets (fragmenting budget)
- Not giving algorithms enough learning time
- Optimizing for wrong metric (clicks vs. conversions)
- Ignoring landing page experience

### Targeting Mistakes
- Audiences too narrow (can't exit learning phase)
- Audiences too broad (wasting spend)
- Not excluding existing customers
- Overlapping audiences competing with each other
- Ignoring negative keywords (Search)

### Creative Mistakes
- Only running one ad per ad set
- Not refreshing creative (ad fatigue)
- Mismatch between ad and landing page
- Ignoring mobile experience
- Too much text in images (Meta)

### Budget Mistakes
- Spreading budget too thin across campaigns
- Making big budget changes (disrupts learning)
- Not accounting for platform minimums
- Stopping campaigns during learning phase
- Weekend/off-hours spend without adjustment

---

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

#### Imported: Platform Selection Guide

### Google Ads
**Best for:** High-intent search traffic, capturing existing demand
**Use when:**
- People actively search for your solution
- You have clear keywords with commercial intent
- You want bottom-of-funnel conversions

**Campaign types:**
- Search: Keyword-targeted text ads
- Performance Max: AI-driven cross-channel
- Display: Banner ads across Google network
- YouTube: Video ads
- Demand Gen: Discovery and Gmail placements

### Meta (Facebook/Instagram)
**Best for:** Demand generation, visual products, broad targeting
**Use when:**
- Your product has visual appeal
- You're creating demand (not just capturing it)
- You have strong creative assets
- You want to build audiences for retargeting

**Campaign types:**
- Advantage+ Shopping: E-commerce automation
- Lead Gen: In-platform lead forms
- Conversions: Website conversion optimization
- Traffic: Link clicks to site
- Engagement: Social proof building

### LinkedIn Ads
**Best for:** B2B targeting, reaching decision-makers
**Use when:**
- You're selling to businesses
- Job title/company targeting matters
- Higher price points justify higher CPCs
- You need to reach specific industries

**Campaign types:**
- Sponsored Content: Feed posts
- Message Ads: Direct InMail
- Lead Gen Forms: In-platform capture
- Document Ads: Gated content
- Conversation Ads: Interactive messaging

### Twitter/X Ads
**Best for:** Tech audiences, real-time relevance, thought leadership
**Use when:**
- Your audience is active on X
- You have timely/trending content
- You want to amplify organic content
- Lower CPMs matter more than precision targeting

### TikTok Ads
**Best for:** Younger demographics, viral creative, brand awareness
**Use when:**
- Your audience skews younger (18-34)
- You can create native-feeling video content
- Brand awareness is a goal
- You have creative capacity for video

---

#### Imported: Campaign Structure Best Practices

### Account Organization

```
Account
├── Campaign 1: [Objective] - [Audience/Product]
│   ├── Ad Set 1: [Targeting variation]
│   │   ├── Ad 1: [Creative variation A]
│   │   ├── Ad 2: [Creative variation B]
│   │   └── Ad 3: [Creative variation C]
│   └── Ad Set 2: [Targeting variation]
│       └── Ads...
└── Campaign 2...
```

### Naming Conventions

Use consistent naming for easy analysis:

```
[Platform]_[Objective]_[Audience]_[Offer]_[Date]

Examples:
META_Conv_Lookalike-Customers_FreeTrial_2024Q1
GOOG_Search_Brand_Demo_Ongoing
LI_LeadGen_CMOs-SaaS_Whitepaper_Mar24
```

### Budget Allocation Framework

**Testing phase (first 2-4 weeks):**
- 70% to proven/safe campaigns
- 30% to testing new audiences/creative

**Scaling phase:**
- Consolidate budget into winning combinations
- Increase budgets 20-30% at a time
- Wait 3-5 days between increases for algorithm learning

---

#### Imported: Ad Copy Frameworks

### Primary Text Formulas

**Problem-Agitate-Solve (PAS):**
```
[Problem statement]
[Agitate the pain]
[Introduce solution]
[CTA]
```

Example:
> Spending hours on manual reporting every week?
> While you're buried in spreadsheets, your competitors are making decisions.
> [Product] automates your reports in minutes.
> Start your free trial →

**Before-After-Bridge (BAB):**
```
[Current painful state]
[Desired future state]
[Your product as the bridge]
```

Example:
> Before: Chasing down approvals across email, Slack, and spreadsheets.
> After: Every approval tracked, automated, and on time.
> [Product] connects your tools and keeps projects moving.

**Social Proof Lead:**
```
[Impressive stat or testimonial]
[What you do]
[CTA]
```

Example:
> "We cut our reporting time by 75%." — Sarah K., Marketing Director
> [Product] automates the reports you hate building.
> See how it works →

### Headline Formulas

**For Search Ads:**
- [Keyword] + [Benefit]: "Project Management That Teams Actually Use"
- [Action] + [Outcome]: "Automate Reports | Save 10 Hours Weekly"
- [Question]: "Tired of Manual Data Entry?"
- [Number] + [Benefit]: "500+ Teams Trust [Product] for [Outcome]"

**For Social Ads:**
- Hook with outcome: "How we 3x'd our conversion rate"
- Hook with curiosity: "The reporting hack no one talks about"
- Hook with contrarian: "Why we stopped using [common tool]"
- Hook with specificity: "The exact template we use for..."

### CTA Variations

**Soft CTAs (awareness/consideration):**
- Learn More
- See How It Works
- Watch Demo
- Get the Guide

**Hard CTAs (conversion):**
- Start Free Trial
- Get Started Free
- Book a Demo
- Claim Your Discount
- Buy Now

**Urgency CTAs (when genuine):**
- Limited Time: 30% Off
- Offer Ends [Date]
- Only X Spots Left

---

#### Imported: Audience Targeting Strategies

### Google Ads Audiences

**Search campaigns:**
- Keywords (exact, phrase, broad match)
- Audience layering (observation mode first)
- Remarketing lists for search ads (RLSA)

**Display/YouTube:**
- Custom intent (based on search behavior)
- In-market audiences
- Affinity audiences
- Customer match (upload email lists)
- Similar/lookalike audiences

### Meta Audiences

**Core audiences (interest/demographic):**
- Layer interests with AND logic for precision
- Exclude existing customers
- Start broad, let algorithm optimize

**Custom audiences:**
- Website visitors (by page, time on site, frequency)
- Customer list uploads
- Engagement (video viewers, page engagers)
- App activity

**Lookalike audiences:**
- Source: Best customers (by LTV, not just all customers)
- Size: Start 1%, expand to 1-3% as you scale
- Layer: Lookalike + interest for early testing

### LinkedIn Audiences

**Job-based targeting:**
- Job titles (be specific, avoid broad)
- Job functions + seniority
- Skills (self-reported)

**Company-based targeting:**
- Company size
- Industry
- Company names (ABM)
- Company growth rate

**Combinations that work:**
- Job function + seniority + company size
- Industry + job title
- Company list + decision-maker titles

---

#### Imported: Creative Best Practices

### Image Ads

**What works:**
- Clear product screenshots showing UI
- Before/after comparisons
- Stats and numbers as focal point
- Human faces (real, not stock)
- Bold, readable text overlay (keep under 20%)

**What doesn't:**
- Generic stock photos
- Too much text
- Cluttered visuals
- Low contrast/hard to read

### Video Ads

**Structure for short-form (15-30 sec):**
1. Hook (0-3 sec): Pattern interrupt, question, or bold statement
2. Problem (3-8 sec): Relatable pain point
3. Solution (8-20 sec): Show product/benefit
4. CTA (20-30 sec): Clear next step

**Structure for longer-form (60+ sec):**
1. Hook (0-5 sec)
2. Problem deep-dive (5-20 sec)
3. Solution introduction (20-35 sec)
4. Social proof (35-45 sec)
5. How it works (45-55 sec)
6. CTA with offer (55-60 sec)

**Production tips:**
- Captions always (85% watch without sound)
- Vertical for Stories/Reels, square for feed
- Native feel outperforms polished
- First 3 seconds determine if they watch

### Ad Creative Testing

**Testing hierarchy:**
1. Concept/angle (biggest impact)
2. Hook/headline
3. Visual style
4. Body copy
5. CTA

**Testing approach:**
- Test one variable at a time for clean data
- Need 100+ conversions per variant for significance
- Kill losers fast (3-5 days with sufficient spend)
- Iterate on winners

---

#### Imported: Campaign Optimization

### Key Metrics by Objective

**Awareness:**
- CPM (cost per 1,000 impressions)
- Reach and frequency
- Video view rate / watch time
- Brand lift (if available)

**Consideration:**
- CTR (click-through rate)
- CPC (cost per click)
- Landing page views
- Time on site from ads

**Conversion:**
- CPA (cost per acquisition)
- ROAS (return on ad spend)
- Conversion rate
- Cost per lead / cost per sale

### Optimization Levers

**If CPA is too high:**
1. Check landing page (is the problem post-click?)
2. Tighten audience targeting
3. Test new creative angles
4. Improve ad relevance/quality score
5. Adjust bid strategy

**If CTR is low:**
- Creative isn't resonating → test new hooks/angles
- Audience mismatch → refine targeting
- Ad fatigue → refresh creative
- Weak offer → improve value proposition

**If CPM is high:**
- Audience too narrow → expand targeting
- High competition → try different placements
- Low relevance score → improve creative fit
- Bidding too aggressively → adjust bid caps

### Bid Strategies

**Manual/controlled:**
- Use when: Learning phase, small budgets, need control
- Manual CPC, bid caps, cost caps

**Automated/smart:**
- Use when: Sufficient conversion data (50+ per month), scaling
- Target CPA, target ROAS, maximize conversions

**Progression:**
1. Start with manual or cost caps
2. Gather conversion data (50+ conversions)
3. Switch to automated with targets based on historical data
4. Monitor and adjust targets based on results

---

#### Imported: Retargeting Strategies

### Funnel-Based Retargeting

**Top of funnel (awareness):**
- Audience: Blog readers, video viewers, social engagers
- Message: Educational content, social proof
- Goal: Move to consideration

**Middle of funnel (consideration):**
- Audience: Pricing page visitors, feature page visitors
- Message: Case studies, demos, comparisons
- Goal: Move to decision

**Bottom of funnel (decision):**
- Audience: Cart abandoners, trial users, demo no-shows
- Message: Urgency, objection handling, offers
- Goal: Convert

### Retargeting Windows

| Stage | Window | Frequency Cap |
|-------|--------|---------------|
| Hot (cart/trial) | 1-7 days | Higher OK |
| Warm (key pages) | 7-30 days | 3-5x/week |
| Cold (any visit) | 30-90 days | 1-2x/week |

### Exclusions to Set Up

Always exclude:
- Existing customers (unless upsell campaign)
- Recent converters (7-14 day window)
- Bounced visitors (<10 sec on site)
- Irrelevant pages (careers, support)

---

#### Imported: Reporting & Analysis

### Weekly Review Checklist

- [ ] Spend vs. budget pacing
- [ ] CPA/ROAS vs. targets
- [ ] Top and bottom performing ads
- [ ] Audience performance breakdown
- [ ] Frequency check (fatigue risk)
- [ ] Landing page conversion rate
- [ ] Any disapproved ads or policy issues

### Monthly Analysis

- [ ] Overall channel performance vs. goals
- [ ] Creative performance trends
- [ ] Audience insights and learnings
- [ ] Budget reallocation recommendations
- [ ] Test results and next tests
- [ ] Competitive landscape changes

### Attribution Considerations

- Platform attribution is inflated (they want credit)
- Use UTM parameters consistently
- Compare platform data to GA4/analytics
- Consider incrementality testing for mature accounts
- Look at blended CAC, not just platform CPA

---

#### Imported: Questions to Ask

If you need more context:
1. What platform(s) are you currently running or want to start with?
2. What's your monthly ad budget?
3. What does a successful conversion look like (and what's it worth)?
4. Do you have existing creative assets or need to create them?
5. What landing page will ads point to?
6. Do you have pixel/conversion tracking set up?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
