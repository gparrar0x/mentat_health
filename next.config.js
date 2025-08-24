/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mentat_health' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mentat_health/' : '',
};

module.exports = nextConfig;
