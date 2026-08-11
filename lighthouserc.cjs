const coreRoutes = [
  'http://localhost/',
  'http://localhost/academia/publications.html',
  'http://localhost/songs/echo-chamber.html',
]

const fullRoutes = [
  ...coreRoutes,
  'http://localhost/about/contact.html',
  'http://localhost/software/apps/storymaker.html',
  'http://localhost/writing/poetry/winter.html',
]

module.exports = {
  ci: {
    collect: {
      staticDistDir: './build',
      url: process.env.LIGHTHOUSE_FULL_AUDIT === 'true' ? fullRoutes : coreRoutes,
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
        'categories:best-practices': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
        'categories:seo': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
        'categories:performance': ['warn', { minScore: 0.85, aggregationMethod: 'median' }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1, aggregationMethod: 'median' }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 3500, aggregationMethod: 'median' }],
        'total-blocking-time': ['warn', { maxNumericValue: 300, aggregationMethod: 'median' }],
        'resource-summary:script:size': ['warn', { maxNumericValue: 512000 }],
        'resource-summary:total:size': ['warn', { maxNumericValue: 2097152 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
}
