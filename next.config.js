// next.config.js
/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  output: 'export'
  // config options here
};

// Sentry configuration
const sentryConfig = {
  org: "me-2jo",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

// Export the combined configuration
module.exports = withSentryConfig(nextConfig, sentryConfig);


// Injected content via Sentry wizard below

// Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
// tunnelRoute: "/monitoring",
