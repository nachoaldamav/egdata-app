const withMDX = require("@next/mdx")()
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")
module.exports = withMDX()
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: ["cdn1.epicgames.com", "cdn2.unrealengine.com", "dev.to"],
  },
})
