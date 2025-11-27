/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Netlify plugin handles optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sunspotsholidays.com',
      },
    ],
  },
}

module.exports = nextConfig
