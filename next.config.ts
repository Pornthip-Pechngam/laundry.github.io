import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // สั่งให้ข้ามการเช็ค Error ของ TypeScript ตอน Build บน Vercel
    ignoreBuildErrors: true,
  },
};

export default nextConfig;