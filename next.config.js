/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:3001/api/:path*"
  //     }
  //   ]
  // },
  images: {
    domains: ['d14uq1pz7dzsdq.cloudfront.net'],
  }
}

module.exports = nextConfig
