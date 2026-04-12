# JSON-LD patterns

These examples are starting points. Adapt values to real page content.

## Organization

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Example Company",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png"
}
</script>
```

## BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://example.com/products"
    }
  ]
}
</script>
```

## Article

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Choose the Right Widget",
  "author": {
    "@type": "Person",
    "name": "Jane Smith"
  },
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-10"
}
</script>
```

## Product

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blue Widget Pro",
  "description": "Premium blue widget with advanced features.",
  "image": "https://example.com/images/blue-widget-pro.jpg",
  "offers": {
    "@type": "Offer",
    "price": "49.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/products/blue-widget-pro"
  }
}
</script>
```

## Review note

Use Rich Results Test only for types relevant to Google-supported search features. Use Schema.org validator for syntax and vocabulary checks regardless.
