import EGClient from "../../../libs/egsApi"
import { getProductById } from "../../../libs/gqlQueries/getProductById"
import { productIddBySlug } from "../../../libs/gqlQueries/getProductId"

export default async function getGame(req, res) {
  res.setHeader("Cache-Control", "max-age=604800, must-revalidate")
  const { slug } = req.query
  const { id, namespace } = await getProductId(slug)
  const variables = {
    productNamespace: namespace,
    offerId: id,
    locale: "en-US",
    country: "US",
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

  return {
    namespace: response.StorePageMapping.mapping.mappings.offer.namespace,
    id: response.StorePageMapping.mapping.mappings.offerId,
  }
}
