# Verification Commands

Use these commands to gather lightweight implementation evidence.

## Build and preview

```bash
npm run build
npm run preview
```

## Run Lighthouse against a preview URL

```bash
npx lighthouse http://127.0.0.1:4321 --preset=perf --form-factor=mobile
```

Use this for a targeted before/after check. Deep audit interpretation belongs to `perf-lighthouse`.

## Optional PageSpeed Insights API call

```bash
curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&strategy=mobile"
```

Use this only when you need machine-readable verification for a deployed page.

## Evidence capture helper

```bash
bash scripts/collect_perf_evidence.sh --url http://127.0.0.1:4321 --label local-check --output ./.perf-evidence
```
