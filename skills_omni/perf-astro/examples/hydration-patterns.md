# Hydration Patterns

## Before

```astro
<SearchBox client:load />
<ThemeToggle client:load />
<NewsletterSignup client:load />
<Recommendations client:load />
```

## After

```astro
<SearchBox client:load />
<ThemeToggle client:idle />
<NewsletterSignup client:visible />
<Recommendations client:media="(min-width: 768px)" />
```

## Why this helps

- keeps the immediately interactive search box eager
- delays lower-priority controls
- avoids spending startup time on below-the-fold UI
- reduces JavaScript contention on initial load

## Review note

Do not convert everything away from `client:load` blindly. Keep it where immediate interactivity is required.
