module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
    formats: ['image/avif', 'image/webp']
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
        
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
        
      },
    ];
  },
  env: {
    DOMAIN: process.env.DOMAIN,
    SANITY_WRITE_TOKEN: process.env.SANITY_WRITE_TOKEN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET
  }
}
