import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add other Next.js optimizations or configurations here if needed
  // For example, if you plan to use images from external domains:
  // images: {
  //   domains: ['images.unsplash.com'], 
  // },
}

export default withContentlayer(nextConfig) 