# Subagent Troubleshooting Playbook

## Issue: Misrouting

**Symptoms:** The wrong specialist activates, or no specialist activates.

**Likely causes:**
- Description is too generic.
- Triggers overlap with another subagent.
- `Do not use when` boundaries are missing.

**Corrective actions:**
- Rewrite the description using concrete trigger language.
- Add exclusions.
- Remove broad terms such as `general`, `various`, or `all-purpose`.

## Issue: Context starvation

**Symptoms:** The subagent guesses, asks broad follow-up questions, or returns weak output.

**Likely causes:**
- Required inputs were not documented.
- The parent agent passed too little context.
- Acceptance criteria were missing.

**Corrective actions:**
- Define a minimum input packet.
- Include task goal, relevant files, constraints, and success criteria.
- Require a missing-context response path.

## Issue: Context overload

**Symptoms:** The subagent becomes unfocused or responds with generic summaries.

**Likely causes:**
- Too much unrelated context was forwarded.
- The mission is too broad.

**Corrective actions:**
- Reduce the context packet to only task-relevant artifacts.
- Tighten the mission.
- Split the role into separate specialists if needed.

## Issue: Schema drift

**Symptoms:** Outputs vary too much for reliable orchestration.

**Likely causes:**
- The output contract is underspecified.
- The prompt asks for narrative rather than required fields.

**Corrective actions:**
- Add a fixed response schema.
- Require status, evidence, and escalation flags.
- Provide one good example output.

## Issue: Unsafe autonomy

**Symptoms:** The subagent attempts risky changes without review.

**Likely causes:**
- Permissions are too broad.
- Approval boundaries are missing.
- High-risk domains were not isolated.

**Corrective actions:**
- Revert to read-only by default.
- Add explicit approval gates.
- Add verifier and human review requirements for risky domains.

## Issue: Verifier is not independent

**Symptoms:** The verifier accepts flawed work or mirrors the executor summary.

**Likely causes:**
- The verifier prompt lacks independent checks.
- Evidence gathering is optional.

**Corrective actions:**
- Require direct inspection, testing, or artifact review.
- Separate claimed outcomes from verified outcomes.
- Report unverified claims explicitly.
