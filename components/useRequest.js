import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://egs-data.herokuapp.com/db.php"
const baseUrl2 = "https://raw.githubusercontent.com/srdrabx/offers-tracker/master/database/offers/"

export const useGetGames = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl

  const { data: games, error } = useSWR(url, fetcher)

  return { games, error }
}

export const useGetGameInfo = path => {
    if (!path) {
      throw new Error("Path is required")
    }
  
    const url = baseUrl2 + path + '.json'
  
    const { data: gamesInfo, error } = useSWR(url, fetcher)
  
    return { gamesInfo, error }
  }