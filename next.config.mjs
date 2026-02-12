import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@router": path.resolve("./src/lib/router-compat.js"),
    };
    return config;
  },
};

export default nextConfig;
