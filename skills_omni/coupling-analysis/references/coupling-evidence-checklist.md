# Coupling Evidence Checklist

Use this checklist before finalizing a report.

## Structural evidence

- [ ] Relevant modules/services identified
- [ ] Paths, packages, or service names recorded
- [ ] Important dependencies listed
- [ ] Dependency mechanism captured for each major edge
- [ ] Representative graph or matrix produced

## Strength evidence

- [ ] Intrusive access checked
- [ ] Functional coupling signals checked
- [ ] Model leakage checked
- [ ] Explicit contracts checked

## Distance evidence

- [ ] Encapsulation distance noted
- [ ] Deployment boundary noted
- [ ] Team/ownership boundary noted if available
- [ ] Cross-repo or external-system boundary noted if relevant

## Volatility evidence

- [ ] Recent churn reviewed
- [ ] Co-change or temporal coupling reviewed when practical
- [ ] Core/supporting/generic context noted
- [ ] Generated, vendored, or test-only noise considered

## Hidden/runtime evidence

- [ ] Runtime call path or sequence clues reviewed
- [ ] Shared database access checked
- [ ] Transactional coordination checked
- [ ] Deployment or release coordination checked
- [ ] Incident history or operational clues checked when available

## Output quality

- [ ] Severity assigned with rationale
- [ ] Confidence stated for major findings
- [ ] Limitations stated explicitly
- [ ] Positive patterns included
- [ ] Recommendations prioritized
- [ ] Final decision stated: preserve / monitor / refactor / re-architect

## Confidence guide

- **High**: multiple evidence types support the same conclusion
- **Medium**: one strong evidence type plus semantic review
- **Low**: incomplete evidence or mostly inferred conclusions
