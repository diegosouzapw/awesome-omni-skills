# Lighthouse Metric Interpretation

## Lab vs field

Lighthouse is a lab tool. It simulates controlled conditions and helps compare builds consistently.

Field data comes from real users and should be obtained from tools such as:

- PageSpeed Insights
- Chrome UX Report
- site-specific RUM systems

## Core metrics commonly reviewed

### Largest Contentful Paint (LCP)

- Indicates when the largest visible content element renders.
- Lower is generally better.
- Useful for comparing loading changes between builds.

### Cumulative Layout Shift (CLS)

- Indicates visual stability.
- Lower is better.
- Regressions often show up clearly when layouts move after first paint.

### First Contentful Paint (FCP)

- Indicates when the first visible content appears.
- Useful as an early rendering signal.

### Total Blocking Time (TBT)

- Lab signal for main-thread blocking.
- Higher values often indicate heavy JavaScript or long tasks.

## Category score guidance

- Category scores are composites.
- The performance score is weighted from multiple metrics.
- Compare score changes together with the underlying metrics.

## Safe interpretation habits

- do not react to one run in isolation
- compare like-for-like environments
- use Lighthouse for detection and prioritization
- route issue remediation to performance implementation skills
