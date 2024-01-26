/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anime-next-ruby.vercel.app",
        port: "",
        pathname: "/_next/**",
      },
    ],
  },
};

module.exports = nextConfig;
