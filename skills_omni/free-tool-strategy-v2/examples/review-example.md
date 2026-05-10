# Worked Review Example

## Scenario

**Company:** B2B data platform

**Original idea:** "AI Readiness Score"

**Stated goal:** Rank for AI-related searches and collect leads.

**Draft experience:** User answers 8 broad questions, enters work email, and receives a score from 1 to 100 plus a prompt to book a demo.

---

## Initial Review

### 1. User value
Weak.
- The target user is vague.
- The output is likely generic because the questions are broad.
- The user gives contact information before receiving meaningful value.

### 2. Differentiation
Weak.
- The scoring logic is not explained.
- Many similar quizzes already exist.
- The score risks feeling arbitrary and promotional.

### 3. Search/discoverability
Weak to moderate.
- "AI readiness" may have demand, but the concept is broad and crowded.
- The page risks becoming thin if most value is hidden behind the form.

### 4. Conversion design
Weak.
- Email gating occurs before the result.
- The CTA is disconnected from any concrete artifact the user would want to keep.

### 5. Measurement
Incomplete.
- Draft plan tracks only pageview and form submit.
- No event exists for question completion or result generation.

### 6. Trust and privacy
Weak.
- Work email is required too early.
- Follow-up expectations are not stated.

## Initial Disposition

**Reject or redesign.**

Reason: the concept behaves like a disguised lead form, not like a genuinely useful tool.

---

## Revised Concept

**New idea:** "Warehouse Event Tracking Gap Analyzer"

**Target user:** Data engineer or analytics lead assessing event collection quality before a CDP or warehouse migration.

**Core user task:** Identify missing event categories, broken naming patterns, and instrumentation gaps.

**Free value delivered before signup:**
- Upload or paste a sample event schema
- Receive a categorized gap report
- See duplicate events, missing recommended fields, and naming inconsistencies
- Get 3 prioritized fixes

**Optional conversion path:**
- Email the full report
- Export checklist as CSV
- Request expert review for complex implementations

---

## Revised Review

### 1. User value
Strong.
- Specific audience and clear operational use case.
- Output supports a real implementation decision.
- User gets immediate value without mandatory lead capture.

### 2. Differentiation
Moderate to strong.
- The company can encode real implementation expertise.
- The report can reflect proprietary heuristics without becoming opaque.
- Clearer than a generic readiness quiz.

### 3. Search/discoverability
Moderate to strong.
- More niche demand, but higher relevance and qualification.
- Landing page can explain inputs, checks performed, and example output in crawlable text.
- Supporting educational content can legitimately surround the tool.

### 4. Conversion design
Strong.
- Exporting the report is a natural reason to offer optional email capture.
- Expert review CTA aligns with a complex result.

### 5. Measurement
Stronger event model.
- `tool_start`
- `schema_upload`
- `analysis_complete`
- `report_export`
- `generate_lead`

### 6. Trust and privacy
Improved.
- Inputs are tied to the analysis function.
- Optional email capture is easier to justify.
- Privacy language should clarify storage and retention of uploaded schemas.

## Revised Disposition

**Launch after revisions.**

### Required revisions before approval
- Add transparent explanation of checks and limitations.
- Ensure report summaries are understandable even if the upload flow fails.
- Clarify whether uploaded schemas are stored, processed transiently, or used for model improvement.
- Add clear analytics definitions for completion and lead generation.

---

## Operator Takeaway

A weak free-tool idea often improves when you:
- narrow the audience
- replace vague scoring with concrete analysis
- deliver value before capture
- align the CTA with the artifact produced
- measure the useful moment, not just the form submission
