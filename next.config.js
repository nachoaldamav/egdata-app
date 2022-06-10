const withMDX = require("@next/mdx")()
const removeImports = require("next-remove-imports")()
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")
module.exports = withMDX()
module.exports = withPWA({
  webpack5: true,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: ["cdn1.epicgames.com", "cdn2.unrealengine.com", "dev.to"],
  },
})

module.exports = ({ defaultConfig }) => {
  return removeImports({
    ...defaultConfig,
  })
}
