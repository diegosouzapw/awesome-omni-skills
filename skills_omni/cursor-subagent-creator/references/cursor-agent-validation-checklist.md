# Cursor Agent Validation Checklist

Use this checklist before finalizing a Cursor custom agent.

## Delegation quality

- [ ] The description says exactly when the agent should be used.
- [ ] The description avoids generic wording such as "helps with development tasks".
- [ ] One positive delegation test prompt is documented.
- [ ] One negative delegation test prompt is documented.
- [ ] The agent is unlikely to trigger for adjacent but different tasks.

## Prompt quality

- [ ] The agent has one clear responsibility.
- [ ] The body is concise and not bloated.
- [ ] The steps are explicit and operational.
- [ ] Constraints are clear.
- [ ] The output format is stable and reviewable.
- [ ] Done criteria are present or obvious.

## Safety and permissions

- [ ] `readonly: true` is set for review-only or analysis-only agents.
- [ ] Write capability is enabled only if implementation is intentional.
- [ ] Background mode is used only when asynchronous completion is acceptable.
- [ ] The prompt does not overclaim autonomy or certainty.

## Packaging and usability

- [ ] The filename uses kebab-case.
- [ ] The selected scope is justified: project or user.
- [ ] The final answer states where the file should live.
- [ ] The final answer includes explicit invocation guidance.
- [ ] The final answer explains any important caveats or follow-up tuning.
