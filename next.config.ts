import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a static export in the `out` directory
  output: "export",

  // Safe even if you aren't using next/image
  images: { unoptimized: true },

  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;