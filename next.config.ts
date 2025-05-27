import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/cetin-aslan' : undefined,
  assetPrefix: isProd ? '/cetin-aslan/' : undefined,
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export
  },
  trailingSlash: true, // Optional: if you prefer URLs with trailing slashes
};

export default nextConfig;
