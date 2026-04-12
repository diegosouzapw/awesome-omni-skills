# AWS Router Guidance

Use this note when the request starts in `aws-advisor` but should narrow into a more specialized workflow.

## Route to another skill when

- the task becomes deep Terraform authoring, refactoring, or state-management work
- the task becomes Kubernetes cluster operations rather than AWS platform choice or guardrails
- the task becomes Docker image/build/runtime debugging
- the task becomes broad observability or incident response rather than AWS service triage
- the task becomes a code-level security review beyond AWS identity, network, and service configuration concerns

## Handoff format

When handing off, preserve:

- AWS services involved
- account and region scope
- assumptions already made
- evidence already gathered
- current suspected root causes or architecture risks
- links to any local references used in this skill

## Example handoff note

```text
Routing from @aws-advisor to a deeper specialization.
AWS context already established:
- account/region scope: ...
- services in scope: ...
- evidence gathered: ...
- open risks/questions: ...
```
