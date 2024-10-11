/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PATH: process.env.NEXT_PUBLIC_API_PATH,
  },
};

export default nextConfig;
