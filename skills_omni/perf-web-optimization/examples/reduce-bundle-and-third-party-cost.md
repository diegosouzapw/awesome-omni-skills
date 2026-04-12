# Example: Reduce Bundle and Third-Party Cost

## Scenario

A page was optimized for assets, but it still feels slow. Build output shows a large vendor chunk and several third-party scripts run at startup.

## Approach

1. Identify the heaviest first-party chunk.
2. Identify third-party scripts loaded before user interaction.
3. Replace or split only the most expensive startup code first.

## Before

```javascript
import ChartingLibrary from 'heavy-charting-package'
import './admin-tools.js'
import './support-widget.js'
```

Everything loads on first visit even when the route does not need it immediately.

## After

```javascript
async function openAnalytics() {
  const { default: ChartingLibrary } = await import('heavy-charting-package')
  const { renderCharts } = await import('./admin-tools.js')
  renderCharts(ChartingLibrary)
}

document.querySelector('#open-analytics')?.addEventListener('click', openAnalytics)
```

Non-essential third-party loading can also move off the initial path when acceptable.

## Verify

- initial route chunk shrinks
- startup long tasks are reduced
- interaction remains correct
- the deferred code still loads when the user needs it
