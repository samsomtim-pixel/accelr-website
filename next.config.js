const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/diagnose', destination: '/score', permanent: true },
      { source: '/blueprint', destination: '/diensten', permanent: true },
      { source: '/expertise/:path*', destination: '/diensten', permanent: true },
      { source: '/login', destination: '/', permanent: true },
    ];
  },
}

module.exports = withNextIntl(nextConfig);
