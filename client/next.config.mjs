/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PATH: process.env.NEXT_PUBLIC_API_PATH,
    MODE: "dev",
    EXPIRATION_TIME: String(60 * 60 * 24 * 7),
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dqozzngu1/image/upload/**/**"
      }],
  },
};

export default nextConfig;
