import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json',
  },
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
