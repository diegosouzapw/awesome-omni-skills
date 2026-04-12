# Evidence Collection Checklist

Use this checklist before making broad best-practices recommendations.

## Security evidence

- [ ] response headers captured from real environment
- [ ] mixed-content warnings checked
- [ ] CSP behavior checked in console/network tools
- [ ] cookie flags reviewed in `Set-Cookie` headers
- [ ] source-map exposure checked from deployed assets

## Dependency evidence

- [ ] package manager identified
- [ ] lockfile present and current
- [ ] audit output captured
- [ ] high-severity findings triaged
- [ ] any auto-fix risk documented

## Compatibility evidence

- [ ] browser support policy stated or inferred
- [ ] deprecated APIs searched in codebase
- [ ] browser sniffing patterns searched in codebase
- [ ] unsupported or non-baseline features identified where relevant

## Code-quality evidence

- [ ] browser console errors reviewed
- [ ] HTML checked with a validator where relevant
- [ ] invalid markup or duplicate IDs noted
- [ ] unsafe DOM insertion patterns noted
- [ ] error handling gaps noted

## Reporting checklist

For each finding, record:

- severity or priority
- evidence source
- affected files or routes
- recommended fix
- whether human validation is still needed
