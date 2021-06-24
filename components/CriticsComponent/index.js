import { useRouter } from "next/router"
import useSWR from "swr"
import React from "react"
import ContentLoader from "react-content-loader"
import RenderScore from "./RenderScore"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={350}
    viewBox="0 0 250 350"
    backgroundColor="#011827"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="23" y="15" rx="0" ry="0" width="75" height="75" />
    <rect x="121" y="14" rx="0" ry="0" width="75" height="75" />
  </ContentLoader>
)

export default function CriticsComponent({ id }) {
  const { game, isLoading, isError } = useCritics(id)
  if (isLoading) {
    return <MyLoader />
  }
  if (isError) {
    return <h1>Failed to load</h1>
  }
  const OpenCritic = game[0]
  return (
    <>
      <h3 className="text-xl p-5">Critics Ratings</h3>
      {OpenCritic.dist !== 0 ? (
        <h1 className="px-5">Not Critics found</h1>
      ) : (
        <RenderScore id={OpenCritic.id} />
      )}
    </>
  )
}

function useCritics(context) {
  const router = useRouter()
  const { id } = router.query

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    `https://api.opencritic.com/api/game/search?criteria=${id}`,
    fetcher
  )
  console.log(data)
  return {
    game: data,
    isLoading: !error && !data,
    isError: error,
  }
}
