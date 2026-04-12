# Provider Waterfall Design Guide

Design waterfalls by field, confidence, and incremental yield.

## 1. Start with the field list

Define exactly which fields are required:

- company firmographics
- contact identity
- work email
- job title
- phone
- technographics
- intent signals

Avoid broad waterfalls when only a small subset of fields matters.

## 2. Use field-level sequencing

Recommended pattern:

1. primary provider for best expected match quality in your market
2. secondary provider for missing values only
3. tertiary provider only if incremental yield justifies cost and risk
4. verification step for risky fields
5. stop condition once the field reaches required confidence

## 3. Common decision criteria

Evaluate providers on:

- target market coverage
- region fit
- field-specific strength
- confidence transparency
- API/export limits if relevant to the operator
- cost per useful completed field
- suppression and deletion handling
- provenance availability

## 4. Example waterfall patterns

### Pattern A: Mid-market outbound

- Company: primary general enrichment provider
- Contact identity: same provider or Clay-native enrichment
- Email: email specialist as secondary source
- Verification: dedicated verifier
- Stop when verified email and acceptable title are present

### Pattern B: Enterprise ABM

- Company: premium firmographic source first
- Contact identity: account-first enrichment, then role-specific contacts
- Email: narrower, higher-confidence fallback
- Verification: mandatory before handoff
- Stop when target personas are covered and duplicates are resolved

### Pattern C: Budget-limited cleanup

- Normalize CRM first
- Enrich only missing fields
n- Prefer lower-cost or already-licensed providers
- Skip tertiary sources unless a business case exists

## 5. Stop conditions

Add explicit stop rules such as:

- stop once verified email is found
- stop after two failed person-level providers
- stop if account is outside ICP
- stop if record is suppressed or opted out
- stop if freshness window has not expired

## 6. Evidence to collect during testing

- fill rate by field
- fill rate by waterfall step
- verified-email rate
- cost per completed record
- duplicate rate after sync
- overwrite rate
- stale-data rate

## 7. Warning signs

Revisit the waterfall if:

- step 3 adds little incremental yield
- one provider creates most duplicates
- fill rate rises but verified quality drops
- your most expensive provider runs on too many disqualified rows
- confidence is not stored at the field level
