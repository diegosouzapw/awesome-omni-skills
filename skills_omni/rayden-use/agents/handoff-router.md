# Handoff Router for Rayden UI Work

Use this router when the task moves beyond safe completion inside this skill.

## 1. Implementation-only follow-up

Route to implementation follow-up when all are true:
- the Figma design decision is complete enough for engineering
- the remaining work is behavior, state wiring, or code integration
- no further design-system restructuring is needed

Typical triggers:
- interactive dismiss behavior must be implemented in code
- responsive behavior must be validated in the product, not only in Figma
- a component API in code needs to match the new design property model

Handoff note:
- specify the affected component or screen
- list states and properties that engineering must support
- mention any unresolved design assumptions

## 2. Accessibility escalation

Route to accessibility review when any are true:
- contrast appears questionable
- focus, hover, disabled, error, or selected states are incomplete or unclear
- content hierarchy or state visibility may not meet accessibility expectations
- a design decision could propagate an accessibility defect across many instances

Handoff note:
- identify the affected component states or screen areas
- describe the observed risk, not just that "accessibility should review"
- state whether design work is blocked or can proceed pending review

## 3. Design-system governance review

Route to governance review when any are true:
- a new token seems required
- a shared published component set is being restructured
- library publication state is unclear
- multiple consuming files or teams may be affected
- branch, merge, or publish authority is not held by the current operator

Handoff note:
- summarize the proposed system change
- list impacted components, tokens, or files
- identify whether the issue is missing token coverage, API cleanup, or publication approval

## 4. Stay inside this skill

Remain inside this skill when:
- the task is still design work in Figma
- library and token context are clear enough to act safely
- the change is either local composition or a reviewable system update
- no blocked governance or implementation dependency prevents meaningful progress

## 5. Stop instead of forcing completion

Stop and ask for clarification when:
- the target file, page, or component is unknown
- the operator cannot tell whether the object is shared or local
- expected variables or libraries cannot be verified
- the request would require unsupported MCP behavior
