/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    THANOS: process.env.THANOS,
    GIANNIS: process.env.GIANNIS,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
