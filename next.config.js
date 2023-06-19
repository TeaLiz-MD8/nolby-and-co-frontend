/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  i18n : {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dqd6wttfr/image/upload/**',
      },
    ],
  },
}