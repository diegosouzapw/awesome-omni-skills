# Pairwise Modeling Notes for Operators

This note complements `SKILL.md` with compact heuristics you can use while drafting or reviewing a PICT-style pairwise model.

## 1. Reduce domains before you generate

A good model uses **behaviorally distinct values**, not every literal production value.

Prefer values that represent:

- a different code path
- a different permission or role
- a different compatibility mode
- a distinct failure condition
- a meaningful boundary bucket

Examples:

- `PasswordLength: Empty, MinimumValid, Typical, TooLong`
- `Role: Anonymous, User, Admin`
- `RegionMode: Default, EURestricted, Legacy`

Avoid listing many literals that are operationally equivalent.

## 2. Constraint hygiene matters more than clever generation

Common constraint mistakes:

- encoding a business rule twice in incompatible ways
- writing broad constraints that remove valid scenarios
- leaving important assumptions in prose rather than in the model
- using constraints to compensate for poor value design

Practical rule: if a generated row is impossible, add or refine a constraint. If nothing useful generates, inspect constraints before blaming syntax.

## 3. Keep a plain-English justification for each non-obvious rule

For each constraint or seeded scenario, be able to answer:

- what business or technical rule does this represent?
- what invalid case is being prevented?
- what valid case must still remain reachable?

If you cannot explain the rule in one sentence, the model is hard to review safely.

## 4. Preserve must-run scenarios

Pairwise generation is not a replacement for:

- known regressions
- bug reproductions
- security abuse cases
- compliance-required paths
- revenue- or safety-critical scenarios

Keep these seeded in the model when supported, or maintain them as a separate always-run set.

## 5. Suspicion signals during review

Review the output more critically when you see:

- **zero or near-zero rows** -> likely contradiction or over-constraint
- **very large row count** -> likely poor domain reduction
- **impossible rows** -> likely missing constraints
- **all rows look too similar** -> likely values were merged too aggressively
- **important business paths absent** -> pairwise may be insufficient or the model may omit a real dimension

## 6. When pairwise is usually enough to start

Good default starting point:

- several interacting options or modes
- configuration compatibility matrices
- API option combinations
- UI or workflow input combinations where order is not the main issue

## 7. When to escalate beyond pairwise

Escalate to stronger interaction coverage or targeted tests when:

- defect history suggests 3-way+ interactions
- the system has privilege transitions or sensitive policy logic
- failures depend on sequence, time, retries, or concurrency
- the main risk is malformed input, parser behavior, or attacker creativity
- the domain is safety-critical or otherwise high consequence

## 8. Pairwise does not replace security methodology

Pairwise helps select combinations. It does **not** replace:

- authorization testing
- session-management testing
- boundary and negative testing
- input validation testing
- abuse-case design
- threat-informed test selection

## Sources

- Microsoft PICT repository: https://github.com/microsoft/pict
- Microsoft PICT wiki: https://github.com/microsoft/pict/wiki
- NIST Automated Combinatorial Testing for Software (ACTS overview): https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software
- NIST ACTS project page: https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software/acts
- NIST SP 800-142, Practical Combinatorial Testing: https://csrc.nist.gov/publications/detail/sp/800-142/final
- OWASP Web Security Testing Guide: https://owasp.org/www-project-web-security-testing-guide/
