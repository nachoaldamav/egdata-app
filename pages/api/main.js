import EGClient from "../../libs/egsApi"
import { MainRequest } from "../../libs/gqlQueries"

export default async function API(req, res) {
  res.setHeader("Cache-Control", "s-maxage=360, stale-while-revalidate")

  const { country } = req.query

  const currentDate = new Date()
  const currentDateString = currentDate.toISOString().split("T")[0]

  const variables = {
    category: "games/edition/base|software/edition/base",
    count: 100,
    country: country || "US",
    keywords: "",
    locale: "en-US",
    sortBy: "releaseDate",
    sortDir: "DESC",
    allowCountries: "US",
    start: 0,
    tag: "",
    releaseDate: `[,${currentDateString}]`,
    withPrice: true,
  }

  try {
    const response = await EGClient.request(MainRequest, variables)

    res.json(response.Catalog.searchStore.elements)
  } catch (error) {
    console.log(error)
    const data = error.data.Catalog.searchStore.elements
    res.json(data || error)
  }
}
