# Subagent Design Checklist

Use this checklist before creating or approving a new subagent.

## 1. Mission

- [ ] The subagent has one clear responsibility.
- [ ] The mission can be summarized in one sentence.
- [ ] The role does not duplicate the parent agent or another specialist.

## 2. Routing

- [ ] `Use when` triggers are explicit and testable.
- [ ] `Do not use when` boundaries are documented.
- [ ] `Escalate when` conditions are documented.
- [ ] The description explains when to delegate, not just what the subagent is.

## 3. Inputs

- [ ] Required inputs are listed.
- [ ] Acceptance criteria are included.
- [ ] Constraints and assumptions are included.
- [ ] Missing-context behavior is defined.

## 4. Permissions and tools

- [ ] Read-only is the default unless writes are necessary.
- [ ] Allowed tools are explicitly listed.
- [ ] Forbidden actions are documented.
- [ ] File or system scope is bounded.
- [ ] Approval-gated actions are identified.

## 5. Output contract

- [ ] Output format is specified.
- [ ] Status is required.
- [ ] Findings or results are structured.
- [ ] Evidence is required where applicable.
- [ ] Open questions or blockers are reported.
- [ ] Escalation or approval flags are included.

## 6. Safety

- [ ] High-risk domains have human review boundaries.
- [ ] The subagent does not claim broad autonomous authority.
- [ ] Auth, payments, secrets, deploys, and destructive changes require explicit review controls.

## 7. Evaluation

- [ ] Positive trigger case tested.
- [ ] Negative trigger case tested.
- [ ] Ambiguous routing case tested.
- [ ] Edge case with incomplete context tested.
- [ ] Failure or escalation case tested.

## 8. Rollout

- [ ] Initial rollout scope is limited.
- [ ] Monitoring or review path is defined.
- [ ] A verifier is added if the task is high impact.
- [ ] The contract is versioned or reviewable by the team.
