import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images from /public are served directly — no config needed
    // Remote patterns kept for future use
    remotePatterns: [],
  },
};

export default nextConfig;
