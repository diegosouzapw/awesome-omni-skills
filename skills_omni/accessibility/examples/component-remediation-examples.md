# Component remediation examples

## Icon button

### Before

```html
<button>
  <svg aria-hidden="true"></svg>
</button>
```

### After

```html
<button aria-label="Open menu">
  <svg aria-hidden="true"></svg>
</button>
```

## Placeholder-only input

### Before

```html
<input type="email" placeholder="Email" />
```

### After

```html
<label for="email">Email address</label>
<input id="email" type="email" autocomplete="email" />
```

## Grouped inputs

### Before

```html
<label><input type="radio" name="contact" /> Email</label>
<label><input type="radio" name="contact" /> Phone</label>
```

### After

```html
<fieldset>
  <legend>Preferred contact method</legend>
  <label><input type="radio" name="contact" /> Email</label>
  <label><input type="radio" name="contact" /> Phone</label>
</fieldset>
```

## Skip link

### After

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
<main id="main-content" tabindex="-1">
  ...
</main>
```

## Error association

### After

```html
<label for="password">Password</label>
<input id="password" type="password" aria-describedby="password-help password-error" aria-invalid="true" />
<p id="password-help">Must be at least 12 characters.</p>
<p id="password-error">Password must include a number.</p>
```

## Live status update

### After

```html
<div id="results-status" aria-live="polite" aria-atomic="true"></div>
```

```js
resultsStatus.textContent = `${count} results found`;
```
