import EGClient from "../../../libs/egsApi"
import { getProductById } from "../../../libs/gqlQueries/getProductById"
import { productIddBySlug } from "../../../libs/gqlQueries/getProductId"

export default async function getGame(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400")
  const { slug, country, selectedCountry } = req.query

  const { id, namespace } = await getProductId(slug)
  const variables = {
    productNamespace: namespace,
    offerId: id,
    locale: selectedCountry || country,
    country: selectedCountry || country,
    includeSubItems: true,
  }

  try {
    const productData = await EGClient.request(getProductById, variables)
    res.json(productData)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getProductId(slug) {
  const variables = {
    pageSlug: slug,
  }

  const response = await EGClient.request(productIddBySlug, variables)

  const res = await fetch(
    `https://store-content-ipv4.ak.epicgames.com/api/en-US/content/products/${slug}`
  )

  const data = await res.json()

  return {
    namespace:
      response.StorePageMapping.mapping.mappings?.offer?.namespace ||
      data.namespace,
    id:
      response.StorePageMapping.mapping.mappings.offerId ||
      getHomeId(data.pages),
  }
}

function getHomeId(pages) {
  const homePage = pages.find((page) => page._title === "home")

  if (!homePage) {
    return pages[0].offer.id
  }

  return homePage.offer.id
}
