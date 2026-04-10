/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ambitious-strength-06b607a994.strapiapp.com",
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
