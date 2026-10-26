import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/en/about', permanent: false },
      { source: '/contact', destination: '/en/contact', permanent: false },
      { source: '/projects', destination: '/en/projects', permanent: false },
      { source: '/resume', destination: '/en/about', permanent: false },
      { source: '/services', destination: '/en', permanent: false },
      { source: '/blog', destination: '/en', permanent: false },
    ];
  },
};

export default nextConfig;
