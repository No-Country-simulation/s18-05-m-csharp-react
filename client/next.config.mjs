/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PATH: process.env.NEXT_PUBLIC_API_PATH,
    MODE: "test", // "dev" / "prod" / "test"
    EXPIRATION_TIME: String(60 * 60 * 24 * 7),
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dqozzngu1/image/upload/**/**"
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/foto-gratis/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      },
    ],
  },
};

export default nextConfig;
