/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ap.rdcpix.com', "ar.rdcpix.com", "m.media-amazon.com", "firebasestorage.googleapis.com", "https://s3.tradingview.com/tv.js"], 
  },
  env: {
    NEW_KEY: "927782425cmshdee24e4dc61cfcbp162e45jsn1d8a76106b02",
  },
}

module.exports = nextConfig