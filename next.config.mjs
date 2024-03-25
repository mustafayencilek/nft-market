/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://picsum.photos",
        port: "",
        pathname: "/id/**/**/**",
      },
    ],
  },
};
export default nextConfig;
