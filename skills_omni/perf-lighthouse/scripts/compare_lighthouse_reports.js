#!/usr/bin/env node
const fs = require('fs')

const baselinePath = process.argv[2]
const candidatePath = process.argv[3]

if (!baselinePath || !candidatePath) {
  console.error('Usage: node scripts/compare_lighthouse_reports.js <baseline.json> <candidate.json>')
  process.exit(1)
}

const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'))
const candidate = JSON.parse(fs.readFileSync(candidatePath, 'utf8'))

const metrics = [
  'largest-contentful-paint',
  'cumulative-layout-shift',
  'first-contentful-paint',
  'total-blocking-time',
]

for (const metric of metrics) {
  const base = baseline.audits?.[metric]?.numericValue
  const current = candidate.audits?.[metric]?.numericValue

  if (typeof base !== 'number' || typeof current !== 'number') {
    console.log(`${metric}: skipped (missing numeric values)`)
    continue
  }

  const diffPct = base === 0 ? 0 : ((current - base) / base) * 100
  const betterWhenLower = true
  const improved = betterWhenLower ? current <= base : current >= base
  const icon = improved ? '✅' : '❌'
  const sign = diffPct > 0 ? '+' : ''

  console.log(
    `${metric}: ${icon} ${sign}${diffPct.toFixed(1)}% (${base.toFixed(2)} -> ${current.toFixed(2)})`
  )
}
