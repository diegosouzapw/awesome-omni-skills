# Best-Practices Review Prompt Template

## Review-only mode

```text
Review this web project for modern best practices focused on security, browser compatibility, and code quality.
Do not make changes yet.
First collect evidence, then return:
1. prioritized findings
2. evidence for each finding
3. safest recommended fix
4. any areas that need human verification
Exclude accessibility, SEO, and performance unless they directly block these goals.
```

## Remediation mode

```text
Review and remediate this web project for modern best practices focused on security, browser compatibility, and code quality.
Keep changes narrow and reversible.
Before changing dependencies or security policy behavior that may break production, explain the risk and ask for confirmation when needed.
After changes, summarize:
1. what changed
2. what was validated
3. any residual risk
4. any recommended follow-up work
```
