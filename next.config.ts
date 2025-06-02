import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'alvoloconsulting'; // Define repo name once

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
