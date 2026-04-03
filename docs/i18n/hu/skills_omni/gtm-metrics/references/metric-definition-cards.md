# Metric Definition Cards (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇪🇸 [es](../../../../es/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇩🇪 [de](../../../../de/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇮🇹 [it](../../../../it/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇮🇳 [in](../../../../in/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇹🇭 [th](../../../../th/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇮🇩 [id](../../../../id/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇳🇴 [no](../../../../no/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇩🇰 [da](../../../../da/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇮🇱 [he](../../../../he/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gtm-metrics/references/metric-definition-cards.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gtm-metrics/references/metric-definition-cards.md)

---


Use this template before comparing the same metric across CRM, BI, analytics, or finance systems.

## Metric Definition Card Template

### 1. Identity

- **Metric name:**
- **Short description:**
- **Business question answered:**
- **Primary audience:** Board / Executive / Operator
- **Owner:**

### 2. Formula

- **Formal formula:**
- **Numerator definition:**
- **Denominator definition:**
- **Unit:** %, $, days, count, ratio
- **Grain:** account / user / opportunity / month / cohort / other

### 3. Scope and filters

- **Included records:**
- **Excluded records:**
- **Segments used:** SMB / mid-market / enterprise / self-serve / region / product line / other
- **Date logic:** created date / close date / activity date / invoice date / usage date
- **Lookback window:**

### 4. System of record

- **Primary system:** CRM / billing / finance / product analytics / BI
- **Why this system wins:**
- **Fallback system if unavailable:**
- **Refresh cadence:** hourly / daily / weekly / monthly
- **Known lag or backfill behavior:**

### 5. Data quality checks

- **Required fields:**
- **Completeness threshold:**
- **Duplicate risk:** low / medium / high
- **Recency requirement:**
- **Join dependencies:**
- **Known caveats:**

### 6. Interpretation

- **Target or threshold:**
- **What improvement means:**
- **What deterioration means:**
- **Common misread:**
- **Action triggered when outside threshold:**

## Recommended source-of-truth precedence

Use this default unless the business has a stronger documented rule:

- **CRM:** pipeline, stage movement, opportunity counts, rep ownership
- **Billing / finance:** invoiced revenue, collections, recognized revenue, committed contract value
- **Product analytics:** activation, TTFV, feature adoption, product-touch attribution
- **Finance:** board-grade revenue, burn, gross margin, official financial reporting

## Example: Pipeline Coverage

- **Metric name:** Pipeline Coverage
- **Business question answered:** Do we have enough qualified pipeline to support the current quota period?
- **Formula:** Open pipeline value for period / quota for same period
- **Grain:** team and segment by quarter
- **System of record:** CRM
- **Included records:** open qualified opportunities expected to close in period
- **Excluded records:** closed-lost, unqualified, duplicate opportunities
- **Common misread:** comparing pipeline from one report using created date against quota for a different close period
- **Action threshold:** below target triggers pipeline generation plan review

## Example: TTFV

- **Metric name:** Time to First Value
- **Business question answered:** How quickly does a new user or account reach the first meaningful success event?
- **Formula:** Median time from signup or contract start to first value event
- **System of record:** product analytics
- **Important caveat:** the value event must be explicitly defined and stable across periods
- **Common misread:** using a feature click instead of a validated value event

## Example: AI Gross Margin After AI Costs

- **Metric name:** Gross Margin After AI Costs
- **Business question answered:** Is growth still economically attractive after inference and related AI serving costs?
- **Formula:** (Revenue - COGS - AI serving cost) / Revenue
- **System of record:** finance with cost inputs from usage/cost monitoring
- **Important caveat:** define whether support or human review costs are included
- **Action threshold:** declining trend triggers provider, model, pricing, or feature-level review
