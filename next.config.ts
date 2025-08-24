import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

export default nextConfig;
