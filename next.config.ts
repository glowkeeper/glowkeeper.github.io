import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
