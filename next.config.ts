const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/reposrossy/' : '',
  basePath: isProd ? '/reposrossy' : '',
  output: 'export',
};
export default nextConfig;