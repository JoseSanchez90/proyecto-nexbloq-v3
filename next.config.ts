import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    preloadEntriesOnStart: false,
    webpackMemoryOptimizations: true,
  },
  allowedDevOrigins: ["192.168.1.35"],
};

export default nextConfig;
