# Prompt Review Criteria

Use this rubric to compare the original prompt against one or more rewritten versions. Score each line from **0-2**.

- **0** = missing or poor
- **1** = partial or inconsistent
- **2** = clear, effective, and testable

Maximum score: **16**

## 1. Objective Clarity
- Is the task outcome explicit?
- Can an operator state what success looks like in one sentence?

## 2. Context Completeness
- Does the prompt include the minimum context needed?
- Does it avoid irrelevant background that increases noise?

## 3. Constraint Quality
- Are scope, audience, tone, limits, and assumptions defined?
- Does the prompt say what to do when information is missing?

## 4. Output Contract
- Is the desired output shape explicit?
- If reliability matters, does it use sections, fields, or a schema instead of vague formatting requests?

## 5. Instruction Hierarchy and Trust Boundaries
- Are trusted instructions clearly separated from user-supplied or retrieved content?
- Are untrusted materials delimited and labeled?

## 6. Safety and Compliance
- Does the prompt avoid strengthening unsafe or disallowed requests?
- Does it preserve legitimate safety boundaries and uncertainty handling?

## 7. Portability and Simplicity
- Is the prompt as simple as possible while still effective?
- Does it avoid unnecessary framework stacking or decorative prompt jargon?

## 8. Test Performance
- On representative test cases, does the rewrite improve instruction following, format compliance, and usefulness?

---

## Fast Decision Guide

Choose the rewritten prompt if it:

- scores at least **3 points higher** than the original, and
- does not regress on safety or clarity, and
- performs better on at least **2 representative inputs**

If scores are close:

- prefer the shorter prompt when output quality is equal
- prefer the prompt with the clearer output contract
- prefer the prompt that makes uncertainty visible instead of guessing

## Common Review Comments

### Good signs
- “Task and audience are explicit.”
- “Output fields are testable.”
- “Source text is clearly delimited as untrusted input.”
- “Prompt allows uncertainty instead of fabricating.”
- “Structure improved without adding unnecessary verbosity.”

### Warning signs
- “Prompt is longer but not clearer.”
- “Role instructions dominate the actual task.”
- “Formatting request is still underspecified.”
- “The rewrite silently assumes facts not provided by the user.”
- “The prompt requests hidden reasoning instead of visible checks or brief rationale.”

## Recommended Review Sequence

1. Score the original prompt.
2. Score the rewritten prompt.
3. Run both on the same small test set.
4. Note where the rewritten version improves or regresses.
5. Keep the winner and record the reason in one sentence.
