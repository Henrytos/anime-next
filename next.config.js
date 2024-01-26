/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
