/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  trailingSlash: true
};

module.exports = nextConfig; 