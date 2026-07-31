import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    preloadEntriesOnStart: false,
    webpackMemoryOptimizations: true,
  },
  allowedDevOrigins: ["192.168.1.35"],
  async rewrites() {
    return [
      "/sobre-mi",
      "/servicios",
      "/proyectos",
      "/proceso",
      "/preguntas-frecuentes",
      "/contacto",
    ].map((source) => ({
      source,
      destination: "/",
    }));
  },
};

export default nextConfig;
