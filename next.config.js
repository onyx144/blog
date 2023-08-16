const { withContentlayer } = require('next-contentlayer')
/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, 
    swcMinify: true ,
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
      },
    }

module.exports = withContentlayer(nextConfig)
