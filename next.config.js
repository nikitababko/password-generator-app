/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: { properties: ['data-testid'] },
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = nextConfig;
