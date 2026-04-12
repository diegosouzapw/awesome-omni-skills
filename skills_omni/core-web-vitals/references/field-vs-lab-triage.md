# Field vs lab triage

Use this guide to decide whether you are diagnosing a real-user CWV problem, reproducing it locally, or validating a fix.

## Core rule

- **Field data** answers: "Are users really experiencing this problem?"
- **Lab data** answers: "What is causing the problem, and did this change help in a controlled run?"

Do not treat them as interchangeable.

## Tool selection matrix

| Source | Use it for | Strengths | Limits |
| --- | --- | --- | --- |
| Search Console | Site-level and grouped CWV monitoring | Good operational signal, grouped URLs, validation workflow | Delayed reporting, grouped data, limited root-cause detail |
| CrUX API | Origin or eligible URL field distributions | Real-user percentile data | Not trace-level, not your full internal attribution layer |
| RUM via `web-vitals` | Page and user-segment diagnostics | Closest to your users, can include attribution | Requires instrumentation and analytics plumbing |
| Lighthouse | Quick synthetic audits and hypotheses | Fast feedback and standardized suggestions | Synthetic, not ranking-equivalent field evidence |
| DevTools traces | Detailed diagnosis | Excellent for LCP subparts, long tasks, layout shifts | Not representative by itself |

## 75th percentile interpretation

Core Web Vitals are generally judged at the **75th percentile**.

That means the goal is not to make only best-case visits fast. The page should perform well for the slower side of normal user experience.

## Practical workflow

1. Confirm the failing metric in field data if available.
2. Decide whether the issue appears tied to a page template, origin, device class, or a grouped URL pattern.
3. Reproduce representative flows in lab with realistic throttling.
4. Apply the smallest safe fix.
5. Verify in lab.
6. Wait for field recovery before declaring full success.

## Common interpretation mistakes

### Mistake: "Lighthouse is green, so CWV is fixed"

A good Lighthouse run can mean the page is capable of performing well in lab. It does not prove that real users now pass at the 75th percentile.

### Mistake: "Search Console says a URL group is poor, so every page has the same root cause"

Search Console groups similar URLs. Use it to identify affected areas, then diagnose representative pages individually.

### Mistake: "CrUX and local traces disagree, so one of them must be wrong"

They measure different things under different conditions. Field tells you population outcomes; lab helps explain causes.

## Evidence to keep

For each investigation, capture:

- affected page or template
- metric and percentile source
- device/network assumptions
- before/after traces or screenshots
- hypothesis
- fix applied
- local verification result
- post-release monitoring plan
