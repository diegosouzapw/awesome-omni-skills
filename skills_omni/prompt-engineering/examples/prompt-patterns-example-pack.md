# Prompt Patterns Example Pack

Each example shows a weak prompt, a stronger revision, and what changed.

## 1. Classification

### Task
Label support tickets as one of: `authentication`, `billing`, `performance`, `feature-request`.

### Weak prompt
```text
Classify this support ticket: "I was charged twice after upgrading my plan."
```

### Better prompt
```text
Task: Classify the support ticket into exactly one label.

Allowed labels:
- authentication
- billing
- performance
- feature-request

Return only this JSON object:
{"label": "<one allowed label>", "confidence": 0.0}

Ticket:
"I was charged twice after upgrading my plan."
```

### Expected result
```json
{"label":"billing","confidence":0.95}
```

### Why this works
- Defines the label set.
- Constrains the output.
- Removes ambiguity about the response shape.

---

## 2. Extraction

### Task
Extract fields from a customer email.

### Weak prompt
```text
Extract the important information from this email and return JSON.
Email: "My order 48291 arrived damaged. Two mugs were broken. Please replace them if possible."
```

### Better prompt
```text
Extract the following fields from the email.
If a field is missing, use null.
Do not infer values not supported by the text.

Fields:
- order_id: string | null
- issue_type: string | null
- item_count_damaged: integer | null
- requested_action: string | null

Return only a JSON object with exactly those fields.

Email:
"My order 48291 arrived damaged. Two mugs were broken. Please replace them if possible."
```

### Expected result
```json
{
  "order_id": "48291",
  "issue_type": "damaged shipment",
  "item_count_damaged": 2,
  "requested_action": "replacement"
}
```

### Why this works
- Defines explicit fields.
- Tells the model how to handle missing data.
- Prevents unsupported guessing.

---

## 3. Summarization

### Task
Summarize an internal incident report for an executive audience.

### Weak prompt
```text
Summarize this incident report.
```

### Better prompt
```text
Summarize the incident report for an executive audience.

Requirements:
- 5 bullet points maximum
- include impact, root cause, mitigation, and current status
- omit low-level debugging details
- if root cause is uncertain, say so explicitly

Incident report:
"[report text here]"
```

### Evaluation criteria
- concise enough for executive review
- includes the required dimensions
- does not drift into technical noise
- preserves uncertainty where present

### Why this works
- Sets audience and length.
- States must-cover dimensions.
- Prevents irrelevant detail sprawl.

---

## 4. Tool use

### Task
Look up an order only when the order ID is present.

### Weak prompt
```text
Help the user with their order. Use the lookup tool if needed.
```

### Better prompt
```text
You may call the `lookup_order` tool only when the user provides an order ID.

Rules:
- Do not invent an order ID.
- If the order ID is missing, ask a clarifying question instead of calling the tool.
- If the tool returns no match, explain that no order was found.

When the tool is used, pass:
- order_id: string

User message:
"My package still hasn't arrived."
```

### Expected behavior
- No tool call is made.
- The assistant asks for the order ID.

### Why this works
- Defines the boundary for tool use.
- Prevents invented arguments.
- Replaces vague autonomy with testable behavior.

---

## 5. Schema-constrained output

### Task
Generate a hiring recommendation for downstream automation.

### Weak prompt
```text
Review the interview notes and respond in JSON with a recommendation.
```

### Better prompt
```text
Evaluate the candidate using the provided interview notes.

Return an object with exactly these fields:
- recommendation: one of ["hire", "no-hire", "needs-more-signal"]
- strengths: array of strings
- risks: array of strings
- follow_up_questions: array of strings

Rules:
- Base all claims only on the interview notes.
- If evidence is mixed or incomplete, use "needs-more-signal".
- Do not add commentary outside the object.

Interview notes:
"[notes here]"
```

### Evaluation criteria
- valid object shape
- recommendation chosen from allowed values
- strengths and risks grounded in notes
- uncertainty handled explicitly

### Why this works
- Replaces an underspecified format request with a concrete contract.
- Makes uncertainty an allowed outcome.
- Supports downstream validation.

---

## 6. Decomposition instead of unrestricted reasoning

### Task
Assess whether a vendor proposal meets procurement rules.

### Weak prompt
```text
Think step by step and give your full chain of thought before the answer.
```

### Better prompt
```text
Assess whether the vendor proposal meets the procurement rules.

Return:
1. decision: compliant / non-compliant / unclear
2. rule_checklist: one bullet per rule with pass/fail/unclear
3. assumptions: short list of any missing information that affects the decision
4. final_summary: 3 sentences maximum

Use only the proposal text and procurement rules provided below.
```

### Expected behavior
- Produces an auditable artifact.
- Shows observable reasoning structure without requiring unrestricted hidden reasoning.

### Why this works
- Requests the decision support artifact actually needed.
- Improves reviewability and reduces unnecessary verbosity.

---

## 7. Few-shot rescue for edge cases

### Task
Detect whether a message is a password-reset issue or a broader account-access issue.

### Weak prompt
```text
Classify the issue as password-reset or account-access.
Message: "I updated my password yesterday but still can't sign in on mobile."
```

### Better prompt
```text
Classify the message as exactly one label:
- password-reset: the main issue is resetting or changing a password
- account-access: the user still cannot access the account even if password steps were attempted

Examples:
Input: "I never received the password reset email."
Output: {"label":"password-reset"}

Input: "I changed my password but login still fails on all devices."
Output: {"label":"account-access"}

Now classify:
"I updated my password yesterday but still can't sign in on mobile."

Return only JSON: {"label":"..."}
```

### Expected result
```json
{"label":"account-access"}
```

### Why this works
- The examples clarify a subtle boundary.
- The label definitions and output shape make the task deterministic.

## How to Use This Pack

- Start with the example closest to the task type.
- Preserve the task structure, not the literal wording.
- Compare baseline and revised prompts against the same evaluation case.
- If the prompt still fails, change one variable at a time: examples, context, output contract, or tool boundary.
