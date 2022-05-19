const withMDX = require("@next/mdx")()
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")
module.exports = withMDX()
module.exports = withPWA({
  webpack5: true,
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: ["cdn1.epicgames.com", "cdn2.unrealengine.com", "dev.to"],
  },
  async headers() {
    return [
      {
        source: "/api/:id",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600000, immutable, s-maxage=3600000",
          },
        ],
      },
    ]
  },
})
