import {onLCP, onINP, onCLS} from 'web-vitals/attribution'

function reportWebVital(metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    id: metric.id,
    navigationType: metric.navigationType,
    attribution: metric.attribution,
    page: window.location.pathname,
  })

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/analytics/web-vitals', body)
    return
  }

  fetch('/analytics/web-vitals', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body,
    keepalive: true,
  }).catch(() => {})
}

onLCP(reportWebVital)
onINP(reportWebVital)
onCLS(reportWebVital)
