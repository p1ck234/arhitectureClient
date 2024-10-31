// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Укажите порт, если Strapi работает на 1337
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
