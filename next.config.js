/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig; 