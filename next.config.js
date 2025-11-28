/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Netlify plugin handles optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sunspotsholidays.com',
      },
      {
        protocol: 'https',
        hostname: 'imgs.search.brave.com',
      },
    ],
  },
}

module.exports = nextConfig
