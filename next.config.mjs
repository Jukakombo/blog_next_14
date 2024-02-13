/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.theyoungtoyoung.com",
      },
    ],
  },
};

export default nextConfig;
