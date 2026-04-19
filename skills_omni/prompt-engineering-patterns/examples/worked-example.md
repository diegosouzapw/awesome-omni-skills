# Worked Prompt Engineering Examples

These examples show weak and improved prompts for the same task. The goal is not to provide universal templates, but to show how clearer instructions, grounded context, output contracts, and eval-aware revisions improve reliability.

## Example 1: Grounded question answering

### Task

Answer a question using only supplied policy text.

### Input context

```text
<context>
Refunds are allowed within 30 days of purchase for unused items in original packaging.
Digital products are non-refundable once downloaded.
Damaged physical items may be replaced within 60 days with proof of purchase.
</context>

Question: I bought an ebook 10 days ago and already downloaded it. Can I get a refund?
```

### Weak prompt

```text
Answer the customer's question about the refund policy.
```

### Typical weak result

```text
The customer is within 30 days, so they may be eligible for a refund depending on the seller's review.
```

### Improved prompt

```text
You are answering a policy question.
Use only the material inside <context>.
If the context does not support a refund, say so directly.
If the context is insufficient, say "insufficient_context".
Give a short answer and quote the policy line that supports it.

<context>
Refunds are allowed within 30 days of purchase for unused items in original packaging.
Digital products are non-refundable once downloaded.
Damaged physical items may be replaced within 60 days with proof of purchase.
</context>

Question: I bought an ebook 10 days ago and already downloaded it. Can I get a refund?
```

### Expected result

```text
No. The policy says: "Digital products are non-refundable once downloaded."
```

### Why this is better

- defines the evidence boundary
- defines fallback behavior
- requires support from the source text
- prevents the model from improvising a customer-service exception

---

## Example 2: Structured extraction

### Task

Extract incident details into JSON for downstream automation.

### Input

```text
Incident report:
At 09:14 UTC, API gateway latency rose above 2s in us-east-1.
Impact: approximately 35% of requests timed out.
Cause is still under investigation.
Next update in 30 minutes.
```

### Weak prompt

```text
Summarize this incident and return JSON.
```

### Typical weak result

```text
Here is the JSON:
{
  "summary": "High latency caused timeouts",
  "region": "us-east-1",
  "severity": "high"
}
```

Problems:

- extra prose outside JSON
- missing timestamp and uncertainty handling
- invented severity field not present in the source

### Improved prompt

```text
Extract the incident report into valid JSON.
Return JSON only, with no surrounding prose.
Use exactly this shape:
{
  "timestamp_utc": "string",
  "service": "string",
  "region": "string",
  "impact": "string",
  "known_cause": "string | null",
  "next_update_eta": "string | null"
}
Rules:
- Use null when the source does not provide a value.
- Do not invent fields.
- Preserve uncertainty when the source says the cause is under investigation.

Incident report:
At 09:14 UTC, API gateway latency rose above 2s in us-east-1.
Impact: approximately 35% of requests timed out.
Cause is still under investigation.
Next update in 30 minutes.
```

### Expected result

```json
{
  "timestamp_utc": "09:14 UTC",
  "service": "API gateway",
  "region": "us-east-1",
  "impact": "approximately 35% of requests timed out",
  "known_cause": null,
  "next_update_eta": "30 minutes"
}
```

### Why this is better

- defines an exact contract
- explains null handling
- forbids invented fields
- removes prose leakage that breaks parsers

---

## Example 3: Few-shot classification with boundary behavior

### Task

Classify support tickets into `bug`, `billing`, or `feature_request`.

### Weak prompt

```text
Classify the ticket as bug, billing, or feature_request.
Ticket: "I was charged twice after upgrading my plan."
```

### Weak-result risk

The model may classify correctly on obvious cases but drift on mixed or ambiguous tickets.

### Improved prompt

```text
Classify each ticket into exactly one label:
- bug: something is broken or behaving incorrectly
- billing: charges, invoices, refunds, payment failures, plan charges
- feature_request: asking for new capability or enhancement

Return JSON only using this shape:
{"label":"bug | billing | feature_request","rationale":"string"}

Examples:
Ticket: "The export button crashes the app."
Output: {"label":"bug","rationale":"The user reports broken behavior in an existing feature."}

Ticket: "Can you add SAML support?"
Output: {"label":"feature_request","rationale":"The user is asking for a new capability."}

Ticket: "My invoice shows VAT twice."
Output: {"label":"billing","rationale":"The issue concerns invoice charges."}

Now classify:
Ticket: "I was charged twice after upgrading my plan."
```

### Expected result

```json
{"label":"billing","rationale":"The issue concerns duplicate charges after a plan change."}
```

### Why this is better

- defines label semantics, not just label names
- uses examples to teach the decision boundary
- constrains the output format for easier scoring
- makes it easier to build a repeatable eval set

---

## Example 4: Decomposition instead of generic step-by-step prompting

### Task

Review a draft announcement for policy compliance and produce a final decision.

### Weak prompt

```text
Think step by step and tell me if this announcement is compliant.
```

### Improved prompt

```text
Review the announcement using this sequence:
1. Check for unsupported factual claims.
2. Check whether required disclaimer text is present.
3. Check whether prohibited claims appear.
4. Return a final decision in JSON only.

JSON shape:
{
  "decision": "approve | revise | reject",
  "issues": ["string"],
  "missing_requirements": ["string"]
}
```

### Why this is better

- decomposition is explicit and auditable
- the final output is easier to evaluate automatically
- it avoids relying on open-ended reasoning text as the main control mechanism

---

## Suggested eval checks for these examples

- Grounded QA: unsupported answer rate should be near zero on cases where the answer is absent from context.
- Structured extraction: JSON parse success and required-field completion rate.
- Classification: label accuracy on a benchmark containing ambiguous and boundary cases.
- Compliance review: decision correctness and issue-list completeness.
