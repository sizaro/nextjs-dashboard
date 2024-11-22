/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental', // Enable Progressive Prerendering
  },
};

export default nextConfig;
