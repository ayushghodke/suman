import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // Pin tracing to this folder so a stray lockfile in a parent directory
  // (e.g. C:\Users\ayush\package-lock.json) doesn't confuse Next.js.
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [],
  },
};

export default config;
