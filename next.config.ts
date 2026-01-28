import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: { unoptimized: true },
   images: {
    domains: [
      'cdn.pixabay.com',
      'images.pexels.com',
      'images.unsplash.com',
      'res.cloudinary.com', 
      'cdn.sanity.io'
    ],
  },
  //  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
