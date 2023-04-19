/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    COMPANY_NAME: process.env.COMPANY_NAME,
    COMPANY_DESCRIPTION: process.env.COMPANY_DESCRIPTION,
  },
};

module.exports = nextConfig;
