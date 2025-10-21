import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/reposrossy.git' : '',
  basePath: isProd ? '/reposrossy.git' : '',
  output: 'export',
};
export default nextConfig;