# CSP Rollout Example

## Before

The app uses inline handlers and permissive policy fragments.

```html
<button onclick="submitForm()">Save</button>
<script>
  window.appConfig = { env: 'prod' }
</script>
```

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.example.com;
```

## Safer migration direction

### Step 1: remove inline handlers

```html
<button id="save-button">Save</button>
<script nonce="r4nd0m">
  document.getElementById('save-button').addEventListener('click', submitForm)
</script>
```

### Step 2: tighten the policy

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-r4nd0m' https://cdn.example.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self';
```

### Step 3: use report-only first if needed

```http
Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'nonce-r4nd0m' https://cdn.example.com; object-src 'none';
```

## What to validate

- inline handlers are removed or intentionally migrated
- required third-party origins are explicitly listed
- console shows no unexpected CSP violations on critical routes
