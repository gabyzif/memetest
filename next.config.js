/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL
  }
};

module.exports = nextConfig;
