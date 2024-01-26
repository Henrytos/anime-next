/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net/images",
        port: "",
        pathname: "/**//**/**",
      },
    ],
  },
};

module.exports = nextConfig;
