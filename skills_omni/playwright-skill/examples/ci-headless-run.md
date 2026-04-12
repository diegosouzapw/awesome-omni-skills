# CI / Headless Run Notes

Use headless mode when:

- there is no display
- execution is non-interactive
- the environment is remote or CI-like

## Guidance

- do not force headed mode in environments without a display
- keep viewport explicit when headless differences matter
- capture a screenshot or trace when failures are hard to reproduce locally
- compare auth, permissions, and base URL between local and CI-like runs

## Example

In script-based runs, switch browser launch to headless mode:

```javascript
const browser = await chromium.launch({ headless: true })
```
