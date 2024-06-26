/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');
const { LANGUAGE_CODES } = require('./src/languageCodes');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties:
      process.env.NODE_ENV === 'production'
        ? { properties: ['data-testid'] }
        : false,
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error'] }
        : false,
  },
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    YANDEX_METRICA_COUNTER_NUMBER:
      process.env.YANDEX_METRICA_COUNTER_NUMBER,
  },
  images: {
    domains: [
      'localhost',
      'password-generator-passguard.vercel.app',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
        port: '',
      },
    ],
  },
  i18n: {
    locales: Object.keys(LANGUAGE_CODES).map((key) =>
      key.toLowerCase(),
    ),
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;

// Injected content via Sentry wizard below

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },
);
