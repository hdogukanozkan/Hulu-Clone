/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["press.hulu.com", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
