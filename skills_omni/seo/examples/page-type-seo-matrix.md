# Page-type SEO matrix

| Page type | Title and description | Canonical | Robots | Sitemap | Typical schema |
| --- | --- | --- | --- | --- | --- |
| Homepage | Unique brand-focused metadata | Self-canonical | Index, follow | Yes | Organization, BreadcrumbList if applicable |
| Product detail | Unique product metadata | Self-canonical preferred URL | Index, follow | Yes | Product, BreadcrumbList |
| Category/listing | Distinct metadata by category intent | Usually self-canonical | Index, follow | Yes if canonical and valuable | BreadcrumbList |
| Article/blog post | Unique editorial metadata | Self-canonical | Index, follow | Yes | Article, BreadcrumbList |
| Filter/facet URL | Usually avoid index unless valuable landing page | Canonical strategy required | Often noindex if low-value duplicate | Usually no | Usually none |
| Login/account/cart | Not search landing pages | Self or platform default | Usually noindex | No | Usually none |
| Internal search results | Avoid indexing | Self or platform default | Usually noindex | No | Usually none |

## Notes

- Only include a page type in the sitemap if it is intended to rank or be indexed.
- Filtered or faceted URLs need an explicit canonical and indexability strategy.
- Schema should match visible page content, not marketing wishes.
