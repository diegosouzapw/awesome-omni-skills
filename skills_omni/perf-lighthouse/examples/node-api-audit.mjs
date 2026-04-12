import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'

const url = process.argv[2]

if (!url) {
  console.error('Usage: node examples/node-api-audit.mjs <url>')
  process.exit(1)
}

const chrome = await chromeLauncher.launch({
  chromeFlags: ['--headless'],
})

try {
  const result = await lighthouse(url, {
    port: chrome.port,
    onlyCategories: ['performance'],
    formFactor: 'mobile',
  })

  const lhr = result.lhr
  const summary = {
    requestedUrl: lhr.requestedUrl,
    finalUrl: lhr.finalUrl,
    performanceScore: Math.round((lhr.categories.performance?.score ?? 0) * 100),
    metrics: {
      lcp: lhr.audits['largest-contentful-paint']?.numericValue,
      cls: lhr.audits['cumulative-layout-shift']?.numericValue,
      fcp: lhr.audits['first-contentful-paint']?.numericValue,
      tbt: lhr.audits['total-blocking-time']?.numericValue,
    },
  }

  console.log(JSON.stringify(summary, null, 2))
} finally {
  await chrome.kill()
}
