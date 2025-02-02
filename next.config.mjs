/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  webpack(config, { dev }) {
    if (dev) {
      config.devtool = 'source-map'; // This enables source maps in development mode
    }
    return config;
  },
};

export default nextConfig;
