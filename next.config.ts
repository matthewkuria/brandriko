import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: { unoptimized: true },
   images: {
    domains: [
      'cdn.pixabay.com',
      'images.pexels.com',
      'images.unsplash.com'
    ],
  },
  //  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
