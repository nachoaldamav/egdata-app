export default async function freeGames(req, res) {
  const { country = "en-US" } = req.query
  const response = await fetch(
    `https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=${country}&country=${
      country?.split("-")[1]
    }`
  )
  const data = await response.json()

  res.json(data)
}
