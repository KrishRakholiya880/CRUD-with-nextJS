/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all image domains (for testing)
      },
    ],
  },
};

export default nextConfig;
