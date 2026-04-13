---
name: app-store-optimization-v4
description: "App Store Optimization (ASO) Skill workflow skill. Use this skill when the user needs Complete App Store Optimization (ASO) toolkit for researching, optimizing, and tracking mobile app performance on Apple App Store and Google Play Store and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["app-store-optimization-v4", "app-store-optimization", "complete", "app", "store", "optimization", "aso", "toolkit"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# App Store Optimization (ASO) Skill

## Overview

This public intake copy packages `plugins/antigravity-bundle-mobile-developer/skills/app-store-optimization` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# App Store Optimization (ASO) Skill This comprehensive skill provides complete ASO capabilities for successfully launching and optimizing mobile applications on the Apple App Store and Google Play Store.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Input Requirements, Output Formats, How to Use, Scripts, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Complete App Store Optimization (ASO) toolkit for researching, optimizing, and tracking mobile app performance on Apple App Store and Google Play Store.
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

#### Imported: Capabilities

### Research & Analysis
- **Keyword Research**: Analyze keyword volume, competition, and relevance for app discovery
- **Competitor Analysis**: Deep-dive into top-performing apps in your category
- **Market Trend Analysis**: Identify emerging trends and opportunities in your app category
- **Review Sentiment Analysis**: Extract insights from user reviews to identify strengths and issues
- **Category Analysis**: Evaluate optimal category and subcategory placement strategies

### Metadata Optimization
- **Title Optimization**: Create compelling titles with optimal keyword placement (platform-specific character limits)
- **Description Optimization**: Craft both short and full descriptions that convert and rank
- **Subtitle/Promotional Text**: Optimize Apple-specific subtitle (30 chars) and promotional text (170 chars)
- **Keyword Field**: Maximize Apple's 100-character keyword field with strategic selection
- **Category Selection**: Data-driven recommendations for primary and secondary categories
- **Icon Best Practices**: Guidelines for designing high-converting app icons
- **Screenshot Optimization**: Strategies for creating screenshots that drive installs
- **Preview Video**: Best practices for app preview videos
- **Localization**: Multi-language optimization strategies for global reach

### Conversion Optimization
- **A/B Testing Framework**: Plan and track metadata experiments for continuous improvement
- **Visual Asset Testing**: Test icons, screenshots, and videos for maximum conversion
- **Store Listing Optimization**: Comprehensive page optimization for impression-to-install conversion
- **Call-to-Action**: Optimize CTAs in descriptions and promotional materials

### Rating & Review Management
- **Review Monitoring**: Track and analyze user reviews for actionable insights
- **Response Strategies**: Templates and best practices for responding to reviews
- **Rating Improvement**: Tactical approaches to improve app ratings organically
- **Issue Identification**: Surface common problems and feature requests from reviews

### Launch & Update Strategies
- **Pre-Launch Checklist**: Complete validation before submitting to stores
- **Launch Timing**: Optimize release timing for maximum visibility and downloads
- **Update Cadence**: Plan optimal update frequency and feature rollouts
- **Feature Announcements**: Craft "What's New" sections that re-engage users
- **Seasonal Optimization**: Leverage seasonal trends and events

### Analytics & Tracking
- **ASO Score**: Calculate overall ASO health score across multiple factors
- **Keyword Rankings**: Track keyword position changes over time
- **Conversion Metrics**: Monitor impression-to-install conversion rates
- **Download Velocity**: Track download trends and momentum
- **Performance Benchmarking**: Compare against category averages and competitors

### Platform-Specific Requirements
- **Apple App Store**:
  - Title: 30 characters
  - Subtitle: 30 characters
  - Promotional Text: 170 characters (editable without app update)
  - Description: 4,000 characters
  - Keywords: 100 characters (comma-separated, no spaces)
  - What's New: 4,000 characters
- **Google Play Store**:
  - Title: 50 characters (formerly 30, increased in 2021)
  - Short Description: 80 characters
  - Full Description: 4,000 characters
  - No separate keyword field (keywords extracted from title and description)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @app-store-optimization-v4 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/app-store-optimization-v4/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/app-store-optimization-v4/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @app-store-optimization-v4 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Volume vs. Competition: Balance high-volume keywords with achievable rankings
- Relevance First: Only target keywords genuinely relevant to your app
- Long-Tail Strategy: Include 3-4 word phrases with lower competition
- Continuous Research: Keyword trends change—research quarterly
- Competitor Keywords: Don't copy blindly; ensure relevance to your features
- Front-Load Keywords: Place most important keywords early in title/description
- Natural Language: Write for humans first, SEO second

### Imported Operating Notes

#### Imported: Best Practices

### Keyword Research
1. **Volume vs. Competition**: Balance high-volume keywords with achievable rankings
2. **Relevance First**: Only target keywords genuinely relevant to your app
3. **Long-Tail Strategy**: Include 3-4 word phrases with lower competition
4. **Continuous Research**: Keyword trends change—research quarterly
5. **Competitor Keywords**: Don't copy blindly; ensure relevance to your features

### Metadata Optimization
1. **Front-Load Keywords**: Place most important keywords early in title/description
2. **Natural Language**: Write for humans first, SEO second
3. **Feature Benefits**: Focus on user benefits, not just features
4. **A/B Test Everything**: Test titles, descriptions, screenshots systematically
5. **Update Regularly**: Refresh metadata every major update
6. **Character Limits**: Use every character—don't waste valuable space
7. **Apple Keyword Field**: No plurals, duplicates, or spaces between commas

### Visual Assets
1. **Icon**: Must be recognizable at small sizes (60x60px)
2. **Screenshots**: First 2-3 are critical—most users don't scroll
3. **Captions**: Use screenshot captions to tell your value story
4. **Consistency**: Match visual style to app design
5. **A/B Test Icons**: Icon is the single most important visual element

### Reviews & Ratings
1. **Respond Quickly**: Reply to reviews within 24-48 hours
2. **Professional Tone**: Always courteous, even with negative reviews
3. **Address Issues**: Show you're actively fixing reported problems
4. **Thank Supporters**: Acknowledge positive reviews
5. **Prompt Strategically**: Ask for ratings after positive experiences

### Launch Strategy
1. **Soft Launch**: Consider launching in smaller markets first
2. **PR Timing**: Coordinate press coverage with launch
3. **Update Frequently**: Initial updates signal active development
4. **Monitor Closely**: Track metrics daily for first 2 weeks
5. **Iterate Quickly**: Fix critical issues immediately

### Localization
1. **Prioritize Markets**: Start with English, Spanish, Chinese, French, German
2. **Native Speakers**: Use professional translators, not machine translation
3. **Cultural Adaptation**: Some features resonate differently by culture
4. **Test Locally**: Have native speakers review before publishing
5. **Measure ROI**: Track downloads by locale to assess impact

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-mobile-developer/skills/app-store-optimization`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Input Requirements

### Keyword Research
```json
{
  "app_name": "MyApp",
  "category": "Productivity",
  "target_keywords": ["task manager", "productivity", "todo list"],
  "competitors": ["Todoist", "Any.do", "Microsoft To Do"],
  "language": "en-US"
}
```

### Metadata Optimization
```json
{
  "platform": "apple" | "google",
  "app_info": {
    "name": "MyApp",
    "category": "Productivity",
    "target_audience": "Professionals aged 25-45",
    "key_features": ["Task management", "Team collaboration", "AI assistance"],
    "unique_value": "AI-powered task prioritization"
  },
  "current_metadata": {
    "title": "Current Title",
    "subtitle": "Current Subtitle",
    "description": "Current description..."
  },
  "target_keywords": ["productivity", "task manager", "todo"]
}
```

### Review Analysis
```json
{
  "app_id": "com.myapp.app",
  "platform": "apple" | "google",
  "date_range": "last_30_days" | "last_90_days" | "all_time",
  "rating_filter": [1, 2, 3, 4, 5],
  "language": "en"
}
```

### ASO Score Calculation
```json
{
  "metadata": {
    "title_quality": 0.8,
    "description_quality": 0.7,
    "keyword_density": 0.6
  },
  "ratings": {
    "average_rating": 4.5,
    "total_ratings": 15000
  },
  "conversion": {
    "impression_to_install": 0.05
  },
  "keyword_rankings": {
    "top_10": 5,
    "top_50": 12,
    "top_100": 18
  }
}
```

#### Imported: Output Formats

### Keyword Research Report
- List of recommended keywords with search volume estimates
- Competition level analysis (low/medium/high)
- Relevance scores for each keyword
- Strategic recommendations for primary vs. secondary keywords
- Long-tail keyword opportunities

### Optimized Metadata Package
- Platform-specific title (with character count validation)
- Subtitle/promotional text (Apple)
- Short description (Google)
- Full description (both platforms)
- Keyword field (Apple - 100 chars)
- Character count validation for all fields
- Keyword density analysis
- Before/after comparison

### Competitor Analysis Report
- Top 10 competitors in category
- Their metadata strategies
- Keyword overlap analysis
- Visual asset assessment
- Rating and review volume comparison
- Identified gaps and opportunities

### ASO Health Score
- Overall score (0-100)
- Category breakdown:
  - Metadata Quality (0-25)
  - Ratings & Reviews (0-25)
  - Keyword Performance (0-25)
  - Conversion Metrics (0-25)
- Specific improvement recommendations
- Priority action items

### A/B Test Plan
- Hypothesis and test variables
- Test duration recommendations
- Success metrics definition
- Sample size calculations
- Statistical significance thresholds

### Launch Checklist
- Pre-submission validation (all required assets, metadata)
- Store compliance verification
- Testing checklist (devices, OS versions)
- Marketing preparation items
- Post-launch monitoring plan

#### Imported: How to Use

### Keyword Research
```
Hey Claude—I just added the "app-store-optimization" skill. Can you research the best keywords for a productivity app targeting professionals? Focus on keywords with good search volume but lower competition.
```

### Optimize App Store Listing
```
Hey Claude—I just added the "app-store-optimization" skill. Can you optimize my app's metadata for the Apple App Store? Here's my current listing: [provide current metadata]. I want to rank for "task management" and "productivity tools".
```

### Analyze Competitor Strategy
```
Hey Claude—I just added the "app-store-optimization" skill. Can you analyze the ASO strategies of Todoist, Any.do, and Microsoft To Do? I want to understand what they're doing well and where there are opportunities.
```

### Review Sentiment Analysis
```
Hey Claude—I just added the "app-store-optimization" skill. Can you analyze recent reviews for my app (com.myapp.ios) and identify the most common user complaints and feature requests?
```

### Calculate ASO Score
```
Hey Claude—I just added the "app-store-optimization" skill. Can you calculate my app's overall ASO health score and provide specific recommendations for improvement?
```

### Plan A/B Test
```
Hey Claude—I just added the "app-store-optimization" skill. I want to A/B test my app icon and first screenshot. Can you help me design the test and determine how long to run it?
```

### Pre-Launch Checklist
```
Hey Claude—I just added the "app-store-optimization" skill. Can you generate a comprehensive pre-launch checklist for submitting my app to both Apple App Store and Google Play Store?
```

#### Imported: Scripts

### keyword_analyzer.py
Analyzes keywords for search volume, competition, and relevance. Provides strategic recommendations for primary and secondary keywords.

**Key Functions:**
- `analyze_keyword()`: Analyze single keyword metrics
- `compare_keywords()`: Compare multiple keywords
- `find_long_tail()`: Discover long-tail keyword opportunities
- `calculate_keyword_difficulty()`: Assess competition level

### metadata_optimizer.py
Optimizes titles, descriptions, and keyword fields with platform-specific character limit validation.

**Key Functions:**
- `optimize_title()`: Create compelling, keyword-rich titles
- `optimize_description()`: Generate conversion-focused descriptions
- `optimize_keyword_field()`: Maximize Apple's 100-char keyword field
- `validate_character_limits()`: Ensure compliance with platform limits
- `calculate_keyword_density()`: Analyze keyword usage in metadata

### competitor_analyzer.py
Analyzes top competitors' ASO strategies and identifies opportunities.

**Key Functions:**
- `get_top_competitors()`: Identify category leaders
- `analyze_competitor_metadata()`: Extract and analyze competitor keywords
- `compare_visual_assets()`: Evaluate icons and screenshots
- `identify_gaps()`: Find competitive opportunities

### aso_scorer.py
Calculates comprehensive ASO health score across multiple dimensions.

**Key Functions:**
- `calculate_overall_score()`: Compute 0-100 ASO score
- `score_metadata_quality()`: Evaluate title, description, keywords
- `score_ratings_reviews()`: Assess rating quality and volume
- `score_keyword_performance()`: Analyze ranking positions
- `score_conversion_metrics()`: Evaluate impression-to-install rates
- `generate_recommendations()`: Provide prioritized action items

### ab_test_planner.py
Plans and tracks A/B tests for metadata and visual assets.

**Key Functions:**
- `design_test()`: Create test hypothesis and variables
- `calculate_sample_size()`: Determine required test duration
- `calculate_significance()`: Assess statistical significance
- `track_results()`: Monitor test performance
- `generate_report()`: Summarize test outcomes

### localization_helper.py
Manages multi-language ASO optimization strategies.

**Key Functions:**
- `identify_target_markets()`: Recommend localization priorities
- `translate_metadata()`: Generate localized metadata
- `adapt_keywords()`: Research locale-specific keywords
- `validate_translations()`: Check character limits per language
- `calculate_localization_roi()`: Estimate impact of localization

### review_analyzer.py
Analyzes user reviews for sentiment, issues, and feature requests.

**Key Functions:**
- `analyze_sentiment()`: Calculate positive/negative/neutral ratios
- `extract_common_themes()`: Identify frequently mentioned topics
- `identify_issues()`: Surface bugs and user complaints
- `find_feature_requests()`: Extract desired features
- `track_sentiment_trends()`: Monitor sentiment over time
- `generate_response_templates()`: Create review response drafts

### launch_checklist.py
Generates comprehensive pre-launch and update checklists.

**Key Functions:**
- `generate_prelaunch_checklist()`: Complete submission validation
- `validate_app_store_compliance()`: Check Apple guidelines
- `validate_play_store_compliance()`: Check Google policies
- `create_update_plan()`: Plan update cadence and features
- `optimize_launch_timing()`: Recommend release dates
- `plan_seasonal_campaigns()`: Identify seasonal opportunities

#### Imported: Limitations

### Data Dependencies
- Keyword search volume estimates are approximate (no official data from Apple/Google)
- Competitor data may be incomplete for private apps
- Review analysis limited to public reviews (can't access private feedback)
- Historical data may not be available for new apps

### Platform Constraints
- Apple App Store keyword changes require app submission (except Promotional Text)
- Google Play Store metadata changes take 1-2 hours to index
- A/B testing requires significant traffic for statistical significance
- Store algorithms are proprietary and change without notice

### Industry Variability
- ASO benchmarks vary significantly by category (games vs. utilities)
- Seasonality affects different categories differently
- Geographic markets have different competitive landscapes
- Cultural preferences impact what works in different countries

### Scope Boundaries
- Does not include paid user acquisition strategies (Apple Search Ads, Google Ads)
- Does not cover app development or UI/UX optimization
- Does not include app analytics implementation (use Firebase, Mixpanel, etc.)
- Does not handle app submission technical issues (provisioning profiles, certificates)

### When NOT to Use This Skill
- For web apps (different SEO strategies apply)
- For enterprise apps not in public stores
- For apps in beta/TestFlight only
- If you need paid advertising strategies (use marketing skills instead)

#### Imported: Integration with Other Skills

This skill works well with:
- **Content Strategy Skills**: For creating app descriptions and marketing copy
- **Analytics Skills**: For analyzing download and engagement data
- **Localization Skills**: For managing multi-language content
- **Design Skills**: For creating optimized visual assets
- **Marketing Skills**: For coordinating broader launch campaigns

#### Imported: Version & Updates

This skill is based on current Apple App Store and Google Play Store requirements as of November 2025. Store policies and best practices evolve—verify current requirements before major launches.

**Key Updates to Monitor:**
- Apple App Store Connect updates (apple.com/app-store/review/guidelines)
- Google Play Console updates (play.google.com/console/about/guides/releasewithconfidence)
- iOS/Android version adoption rates (affects device testing)
- Store algorithm changes (follow ASO blogs and communities)
