/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.jikan.moe",
        port: "",
        pathname: "/**/**/pictures",
      },
    ],
  },
};

module.exports = nextConfig;
