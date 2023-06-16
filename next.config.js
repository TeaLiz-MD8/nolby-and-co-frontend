/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["127.0.0.1"],
  }
}

module.exports = nextConfig

module.exports = {
  i18n : {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
};