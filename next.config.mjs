/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com",
  },
};

export default nextConfig;
