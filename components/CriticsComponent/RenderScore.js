import Image from "next/image"
import React from "react"
import ContentLoader from "react-content-loader"
import useSWR from "swr"

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

export default function RenderScore({ id }) {
  const { game, isLoading, isError } = useCritics(id)
  if (isLoading) {
    return <MyLoader />
  }
  if (isError) {
    return <h1>Failed to load</h1>
  }

  function getColor(value) {
    if (value < 50) {
      return "#EF4444"
    } else if (value < 70) {
      return "#F59E0B"
    } else if (value < 80) {
      return "#3B82F6"
    } else {
      return "#10B981"
    }
  }

  function getRating(value) {
    if (value < 50) {
      return "weak"
    } else if (value < 70) {
      return "good"
    } else if (value < 80) {
      return "great"
    } else {
      return "strong"
    }
  }
  const rating = getRating(game.averageScore)
  const color = getColor(game.averageScore)
  return (
    <div className="flex items-center">
      <div className="px-5">
        <Image
          src={`/ratings/${rating}.png`}
          width={75}
          height={75}
          alt="Critics value"
          layout="intrinsic"
          quality={100}
        ></Image>
      </div>
      <div className="px-2">
        <div
          style={{ backgroundColor: color }}
          className="w-20 h-20 text-white text-3xl rounded-md flex justify-center items-center text-center mx-auto"
        >
          {Math.ceil(game.averageScore)}
        </div>
      </div>
    </div>
  )
}

function useCritics(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    `https://api.opencritic.com/api/game/${id}`,
    fetcher
  )
  console.log(data)
  return {
    game: data,
    isLoading: !error && !data,
    isError: error,
  }
}
