/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PATH: process.env.NEXT_PUBLIC_API_PATH,
    MODE: "dev",
    EXPIRATION_TIME:  60 * 60 * 24 * 7, 
  },
};

export default nextConfig;
