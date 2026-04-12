# Subdomain Classification Matrix

Use this matrix to classify a candidate subdomain as Core, Supporting, or Generic.

## Decision table

| Criterion | Questions to ask | Strong Core signal | Strong Supporting signal | Strong Generic signal |
| --- | --- | --- | --- | --- |
| Business differentiation | Does this capability materially distinguish the business? | Yes, directly | Indirectly or partially | Rarely |
| Policy complexity | Are the rules complex, evolving, or hard to commoditize? | High | Medium | Low |
| Domain expertise required | Does it require deep business knowledge? | High | Medium | Low |
| Market uniqueness | Would another company model this very differently? | Often | Sometimes | Rarely |
| Replaceability | Could this be replaced with a commodity package/SaaS? | Hard | Possible with tradeoffs | Usually |
| Regulatory / financial sensitivity | Are mistakes costly or highly sensitive? | Often | Sometimes | Varies |
| Strategic investment level | Should top design effort go here? | Yes | Moderate | Usually no |

## Classification notes

### Core Domain

Use when most of these are true:

- differentiates the business significantly
- contains high-value policy or decision logic
- changes frequently for strategic reasons
- requires close collaboration with domain experts

### Supporting Subdomain

Use when most of these are true:

- important to business operations
- contains business-specific rules
- supports the Core Domain or adjacent operations
- matters, but is not the main competitive differentiator

### Generic Subdomain

Use when most of these are true:

- common across many companies
- largely standardized or commodity-like
- replaceable by vendor or package solutions
- low semantic uniqueness, even if operationally important

## Confidence rubric

| Confidence | Meaning |
| --- | --- |
| High | Multiple strong evidence types support the classification |
| Medium | Reasonable evidence exists, but some business context is missing |
| Low | Classification is tentative and based mostly on implementation clues |

## Important caution

Do not treat Generic as trivial. Authentication, notifications, search, or reporting may be Generic strategically while still being critical operationally.
