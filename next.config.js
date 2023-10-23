/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "http://192.168.150.151:3000/",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
