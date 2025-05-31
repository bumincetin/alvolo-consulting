import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'alvoloconsulting'; // Define repo name once

const nextConfig: NextConfig = {
  // output: 'export',
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? '' : undefined, // Try with empty assetPrefix when basePath is set
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export
  },
  trailingSlash: true, // Optional: if you prefer URLs with trailing slashes
};

export default nextConfig;
