# Coupling Analysis Router

Use this note when the task is drifting away from coupling diagnosis.

## Stay in this skill when

- the main question is whether dependencies are appropriate
- the output needed is a coupling map, hotspot review, or decoupling priority list
- the user wants evidence about strength, distance, volatility, or hidden runtime coupling

## Handoff triggers

### Route to `@domain-analysis` when
- the user is asking where business boundaries should exist
- the problem is really bounded contexts, subdomains, or domain ownership

### Route to `@component-identification-sizing` when
- the user wants to split or merge components based on cohesion, scope, or sizing rather than dependency quality

### Route to `@api-design` when
- the coupling issue is understood and the next step is designing a stable contract

### Route to `@refactoring` when
- the main need is a safe sequence of code changes to remove or reduce a known coupling problem

### Route to `@debugging` when
- the user needs root-cause analysis for a concrete failure and coupling is only one possible contributing factor

## Handoff note template

```text
I used @coupling-analysis to identify the coupling pattern and its evidence. The next step is better handled by @<skill> because the task has shifted from diagnosis to <next activity>. Preserve these findings: <key edges, severity, confidence, limitations>.
```
