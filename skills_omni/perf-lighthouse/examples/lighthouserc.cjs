module.exports = {
  ci: {
    collect: {
      url: ['http://127.0.0.1:4173/', 'http://127.0.0.1:4173/about'],
      startServerCommand: 'npm run preview',
      startServerReadyPattern: '127.0.0.1:4173',
      numberOfRuns: 3,
      settings: {
        onlyCategories: ['performance'],
        formFactor: 'mobile',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.9}],
        'largest-contentful-paint': ['warn', {maxNumericValue: 2500}],
        'cumulative-layout-shift': ['warn', {maxNumericValue: 0.1}],
        'total-blocking-time': ['warn', {maxNumericValue: 200}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
