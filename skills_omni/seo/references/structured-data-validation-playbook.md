# Structured data validation playbook

Use this when adding or troubleshooting JSON-LD.

## Key rule

Passing Schema.org validation does not guarantee Google rich-result eligibility.

## Validation sequence

1. Confirm the page visibly contains the information represented in markup.
2. Validate syntax and vocabulary with Schema.org validator.
3. If the type is supported by Google search features, test with Rich Results Test.
4. Check Search Console enhancement reports where available.

## Use schema when

- the page clearly matches the schema type
- the represented facts are visible and accurate
- required properties can be supplied honestly

## Avoid schema when

- the content is hidden, misleading, or generated without page support
- the type is not appropriate for the page
- the goal is to fabricate eligibility rather than describe content

## High-value page types

- Organization for site identity
- BreadcrumbList for hierarchical navigation
- Article for editorial content
- Product for true product detail pages with visible commerce data

## FAQ caution

Do not add FAQ markup unless the page genuinely presents visible question-and-answer content and the use case aligns with current Google support expectations.
