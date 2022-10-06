/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "***",
      },
    ],
  },
  env: {
    apiKey: "AIzaSyBZu3O2FM1bz9-jn35ewk1akBIhIVXB8Pg",
    cx: "47dcc594721644b7a",
  },
};

module.exports = nextConfig;
