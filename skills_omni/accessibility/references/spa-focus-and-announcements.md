# SPA focus and announcements guidance

Single-page applications often fail accessibility during route changes and async updates.

## Route changes

After a route change, do not leave focus behind on a stale navigation element unless that is intentionally correct for the interaction.

Preferred options:

1. move focus to the main heading of the new view
2. move focus to the main content container
3. in narrowly scoped updates, move focus to the changed region when that is the least disruptive option

## Status messages

Use live regions for meaningful updates such as:

- results count changed
- item added to cart
- save succeeded or failed
- validation status changed

Avoid making large containers live or announcing every small visual change.

## Toasts and alerts

- use polite announcements for non-urgent status
- reserve assertive announcements for genuinely urgent interruption-worthy information
- ensure toast messages remain available long enough to be perceived
- avoid repeated or duplicate announcements

## Async form validation

- do not announce every keystroke-level detail noisily
- announce validation results when they become meaningful
- ensure error text is associated with the affected field
- verify the submit path still provides a coherent summary and focus behavior

## Common checks

- after filtering, is the user told that results changed?
- after navigation, is there a clear new heading or focal point?
- after opening and closing overlays, is focus restored logically?
- after loading more content, can keyboard and screen reader users find it predictably?

## Debug hint

If visible UI and assistive-tech output disagree, inspect the accessibility tree and computed accessible names/roles/states before adding more ARIA.
