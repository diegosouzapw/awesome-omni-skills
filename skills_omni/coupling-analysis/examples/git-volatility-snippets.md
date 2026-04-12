# Git Volatility Snippets

These examples are intentionally read-only and should be adapted to the repository layout.

## Churn in a target area

```bash
git log --since="6 months ago" --format='' --name-only -- src/orders src/customer \
  | sed '/^$/d' \
  | sort \
  | uniq -c \
  | sort -rn \
  | head -20
```

## Recent commits touching two areas

```bash
git log --since="6 months ago" --name-only --oneline -- src/orders src/customer
```

## Authors in a target area

```bash
git shortlog -sne --since="6 months ago" -- src/orders
```

## Notes

- filter out generated or vendored paths if needed
- co-change suggests coupling but does not prove why it exists
- if the repo is shallow or heavily squashed, lower confidence
