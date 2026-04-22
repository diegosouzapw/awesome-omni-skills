---
name: apify-ecommerce
description: "E-commerce Data Extraction workflow skill. Use this skill when the user needs Extract product data, prices, reviews, and seller information from any e-commerce platform using Apify's E-commerce Scraping Tool and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["apify-ecommerce", "extract", "product", "data", "prices", "reviews", "and", "seller"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# E-commerce Data Extraction

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/apify-ecommerce` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# E-commerce Data Extraction Extract product data, prices, reviews, and seller information from any e-commerce platform using Apify's E-commerce Scraping Tool.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Progress Tracking, Supported Marketplaces, Running the Extraction, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need product, pricing, review, stock, or seller data from e-commerce sites.
- The task involves price monitoring, competitor product comparison, MAP enforcement, or review analysis.
- You need a guided workflow for extracting marketplace data and summarizing findings.
- Use when the request clearly matches the imported source intent: Extract product data, prices, reviews, and seller information from any e-commerce platform using Apify's E-commerce Scraping Tool.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `reference/scripts/package.json` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `reference/scripts/run_actor.js` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. User Need - Workflow - Best For
2. Track prices, compare products - Workflow 1: Products & Pricing - Price monitoring, MAP compliance, competitor analysis. Add AI summary for insights.
3. Analyze reviews (sentiment or quality) - Workflow 2: Reviews - Brand perception, customer sentiment, quality issues, defect patterns
4. Find sellers across stores - Workflow 3: Sellers - Unauthorized resellers, vendor discovery via Google Shopping
5. Input Type - Field - Description
6. Product URLs - detailsUrls - Direct URLs to product pages (use object format)
7. Category URLs - listingUrls - URLs to category/search result pages

### Imported Workflow Notes

#### Imported: Workflow Selection

| User Need | Workflow | Best For |
|-----------|----------|----------|
| Track prices, compare products | Workflow 1: Products & Pricing | Price monitoring, MAP compliance, competitor analysis. Add AI summary for insights. |
| Analyze reviews (sentiment or quality) | Workflow 2: Reviews | Brand perception, customer sentiment, quality issues, defect patterns |
| Find sellers across stores | Workflow 3: Sellers | Unauthorized resellers, vendor discovery via Google Shopping |

#### Imported: Workflow 1: Products & Pricing

**Use case:** Extract product data, prices, and stock status. Track competitor prices, detect MAP violations, benchmark products, or research markets.

**Best for:** Pricing analysts, product managers, market researchers.

### Input Options

| Input Type | Field | Description |
|------------|-------|-------------|
| Product URLs | `detailsUrls` | Direct URLs to product pages (use object format) |
| Category URLs | `listingUrls` | URLs to category/search result pages |
| Keyword Search | `keyword` + `marketplaces` | Search term across selected marketplaces |

### Example - Product URLs
```json
{
  "detailsUrls": [
    {"url": "https://www.amazon.com/dp/B09V3KXJPB"},
    {"url": "https://www.walmart.com/ip/123456789"}
  ],
  "additionalProperties": true
}
```

### Example - Keyword Search
```json
{
  "keyword": "Samsung Galaxy S24",
  "marketplaces": ["www.amazon.com", "www.walmart.com"],
  "additionalProperties": true,
  "maxProductResults": 50
}
```

### Optional: AI Summary

Add these fields to get AI-generated insights:

| Field | Description |
|-------|-------------|
| `fieldsToAnalyze` | Data points to analyze: `["name", "offers", "brand", "description"]` |
| `customPrompt` | Custom analysis instructions |

**Example with AI summary:**
```json
{
  "keyword": "robot vacuum",
  "marketplaces": ["www.amazon.com"],
  "maxProductResults": 50,
  "additionalProperties": true,
  "fieldsToAnalyze": ["name", "offers", "brand"],
  "customPrompt": "Summarize price range and identify top brands"
}
```

### Output Fields
- `name` - Product name
- `url` - Product URL
- `offers.price` - Current price
- `offers.priceCurrency` - Currency code (may vary by seller region)
- `brand.slogan` - Brand name (nested in object)
- `image` - Product image URL
- Additional seller/stock info when `additionalProperties: true`

> **Note:** Currency may vary in results even for US searches, as prices reflect different seller regions.

---

#### Imported: Workflow 2: Customer Reviews

**Use case:** Extract reviews for sentiment analysis, brand perception monitoring, or quality issue detection.

**Best for:** Brand managers, customer experience teams, QA teams, product managers.

### Input Options

| Input Type | Field | Description |
|------------|-------|-------------|
| Product URLs | `reviewListingUrls` | Product pages to extract reviews from |
| Keyword Search | `keywordReviews` + `marketplacesReviews` | Search for product reviews by keyword |

### Example - Extract Reviews from Product
```json
{
  "reviewListingUrls": [
    {"url": "https://www.amazon.com/dp/B09V3KXJPB"}
  ],
  "sortReview": "Most recent",
  "additionalReviewProperties": true,
  "maxReviewResults": 500
}
```

### Example - Keyword Search
```json
{
  "keywordReviews": "wireless earbuds",
  "marketplacesReviews": ["www.amazon.com"],
  "sortReview": "Most recent",
  "additionalReviewProperties": true,
  "maxReviewResults": 200
}
```

### Sort Options
- `Most recent` - Latest reviews first (recommended)
- `Most relevant` - Platform default relevance
- `Most helpful` - Highest voted reviews
- `Highest rated` - 5-star reviews first
- `Lowest rated` - 1-star reviews first

> **Note:** The `sortReview: "Lowest rated"` option may not work consistently across all marketplaces. For quality analysis, collect a large sample and filter by rating in post-processing.

### Quality Analysis Tips
- Set high `maxReviewResults` for statistical significance
- Look for recurring keywords: "broke", "defect", "quality", "returned"
- Filter results by rating if sorting doesn't work as expected
- Cross-reference with competitor products for benchmarking

---

#### Imported: Workflow 3: Seller Intelligence

**Use case:** Find sellers across stores, discover unauthorized resellers, evaluate vendor options.

**Best for:** Brand protection teams, procurement, supply chain managers.

> **Note:** This workflow uses Google Shopping to find sellers across stores. Direct seller profile URLs are not reliably supported.

### Input Configuration
```json
{
  "googleShoppingSearchKeyword": "Nike Air Max 90",
  "scrapeSellersFromGoogleShopping": true,
  "countryCode": "us",
  "maxGoogleShoppingSellersPerProduct": 20,
  "maxGoogleShoppingResults": 100
}
```

### Options
| Field | Description |
|-------|-------------|
| `googleShoppingSearchKeyword` | Product name to search |
| `scrapeSellersFromGoogleShopping` | Set to `true` to extract sellers |
| `scrapeProductsFromGoogleShopping` | Set to `true` to also extract product details |
| `countryCode` | Target country (e.g., `us`, `uk`, `de`) |
| `maxGoogleShoppingSellersPerProduct` | Max sellers per product |
| `maxGoogleShoppingResults` | Total result limit |

---

#### Imported: Prerequisites

- `.env` file with `APIFY_TOKEN` (at `~/.claude/.env`)
- Node.js 20.6+ (for native `--env-file` support)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @apify-ecommerce to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @apify-ecommerce against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @apify-ecommerce for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @apify-ecommerce using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/apify-ecommerce`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

- [scripts/package.json](reference/scripts/package.json)
- [scripts/run_actor.js](reference/scripts/run_actor.js)

### Imported Reference Notes

#### Imported: Progress Tracking

```
Task Progress:
- [ ] Step 1: Select workflow and determine data source
- [ ] Step 2: Configure Actor input
- [ ] Step 3: Ask user preferences (format, filename)
- [ ] Step 4: Run the extraction script
- [ ] Step 5: Summarize results
```

---

#### Imported: Supported Marketplaces

### Amazon (20+ regions)
`www.amazon.com`, `www.amazon.co.uk`, `www.amazon.de`, `www.amazon.fr`, `www.amazon.it`, `www.amazon.es`, `www.amazon.ca`, `www.amazon.com.au`, `www.amazon.co.jp`, `www.amazon.in`, `www.amazon.com.br`, `www.amazon.com.mx`, `www.amazon.nl`, `www.amazon.pl`, `www.amazon.se`, `www.amazon.ae`, `www.amazon.sa`, `www.amazon.sg`, `www.amazon.com.tr`, `www.amazon.eg`

### Major US Retailers
`www.walmart.com`, `www.costco.com`, `www.costco.ca`, `www.homedepot.com`

### European Retailers
`allegro.pl`, `allegro.cz`, `allegro.sk`, `www.alza.cz`, `www.alza.sk`, `www.alza.de`, `www.alza.at`, `www.alza.hu`, `www.kaufland.de`, `www.kaufland.pl`, `www.kaufland.cz`, `www.kaufland.sk`, `www.kaufland.at`, `www.kaufland.fr`, `www.kaufland.it`, `www.cdiscount.com`

### IKEA (40+ country/language combinations)
Supports all major IKEA regional sites with multiple language options.

### Google Shopping
Use for seller discovery across multiple stores.

---

#### Imported: Running the Extraction

### Step 1: Set Skill Path
```bash
SKILL_PATH=~/.claude/skills/apify-ecommerce
```

### Step 2: Run Script

**Quick answer (display in chat):**
```bash
node --env-file=~/.claude/.env $SKILL_PATH/reference/scripts/run_actor.js \
  --actor "apify/e-commerce-scraping-tool" \
  --input 'JSON_INPUT'
```

**CSV export:**
```bash
node --env-file=~/.claude/.env $SKILL_PATH/reference/scripts/run_actor.js \
  --actor "apify/e-commerce-scraping-tool" \
  --input 'JSON_INPUT' \
  --output YYYY-MM-DD_filename.csv \
  --format csv
```

**JSON export:**
```bash
node --env-file=~/.claude/.env $SKILL_PATH/reference/scripts/run_actor.js \
  --actor "apify/e-commerce-scraping-tool" \
  --input 'JSON_INPUT' \
  --output YYYY-MM-DD_filename.json \
  --format json
```

### Step 3: Summarize Results

Report:
- Number of items extracted
- File location (if exported)
- Key insights based on workflow:
  - **Products:** Price range, outliers, MAP violations
  - **Reviews:** Average rating, sentiment trends, quality issues
  - **Sellers:** Seller count, unauthorized sellers found

---

#### Imported: Error Handling

| Error | Solution |
|-------|----------|
| `APIFY_TOKEN not found` | Ensure `~/.claude/.env` contains `APIFY_TOKEN=your_token` |
| `Actor not found` | Verify Actor ID: `apify/e-commerce-scraping-tool` |
| `Run FAILED` | Check Apify console link in error output |
| `Timeout` | Reduce `maxProductResults` or increase `--timeout` |
| `No results` | Verify URLs are valid and accessible |
| `Invalid marketplace` | Check marketplace value matches supported list exactly |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
