#!/usr/bin/env node
const fs = require('fs')

const reportPath = process.argv[2]
if (!reportPath) {
  console.error('Usage: node scripts/parse_lighthouse_report.js <report.json>')
  process.exit(1)
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))

function scoreToPercent(value) {
  if (value === null || value === undefined) return 'n/a'
  return String(Math.round(value * 100))
}

function metric(id) {
  const audit = report.audits?.[id]
  if (!audit) return 'n/a'
  if (audit.numericValue === null || audit.numericValue === undefined) return 'n/a'
  return audit.numericValue
}

console.log(`URL: ${report.finalUrl || report.requestedUrl || 'unknown'}`)
console.log(`Performance: ${scoreToPercent(report.categories?.performance?.score)}`)
console.log(`Accessibility: ${scoreToPercent(report.categories?.accessibility?.score)}`)
console.log(`Best Practices: ${scoreToPercent(report.categories?.['best-practices']?.score)}`)
console.log(`SEO: ${scoreToPercent(report.categories?.seo?.score)}`)
console.log(`largest-contentful-paint: ${metric('largest-contentful-paint')} ms`)
console.log(`cumulative-layout-shift: ${metric('cumulative-layout-shift')}`)
console.log(`first-contentful-paint: ${metric('first-contentful-paint')} ms`)
console.log(`total-blocking-time: ${metric('total-blocking-time')} ms`)

const failing = Object.values(report.audits || {})
  .filter((audit) => audit && audit.scoreDisplayMode !== 'notApplicable')
  .filter((audit) => typeof audit.score === 'number' && audit.score < 0.9)
  .sort((a, b) => (a.score ?? 1) - (b.score ?? 1))
  .slice(0, 10)

if (failing.length) {
  console.log('Failing audits:')
  for (const audit of failing) {
    console.log(`- ${audit.id} (score: ${audit.score.toFixed(2)})`)
  }
} else {
  console.log('Failing audits: none below 0.90')
}
