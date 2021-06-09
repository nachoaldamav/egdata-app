import useSWR from "swr"
import axios from "axios"
import AppLayout from "../../components/AppLayout"
import ImageCard from "../../components/imageCard"
import GameLink from "../../components/GameLink"
import Link from "next/link"

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function TrendingGames() {
  const { data, error } = useSWR(
    "https://egs-api.trackstats.workers.dev/",
    fetcher
  )

  if (error)
    return (
      <AppLayout>
        <h1 className="text-5xl text-white text-left px-20 py-5">
          Failed to load
        </h1>
      </AppLayout>
    )
  if (!data)
    return (
      <AppLayout>
        <h1 className="text-5xl text-white text-left px-20 py-5">loading...</h1>
      </AppLayout>
    )

  return (
    <AppLayout>
      <style jsx>
        {`
          .true {
            text-decoration: line-through;
          }
          .card {
            border-radius: 4px;
          }
          .game_title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            width: 230px;
          }
          .game_card {
            padding-top: 15px;
          }
        `}
      </style>
      <p className="text-5xl text-white text-left px-20 py-5">
        Top Sellers - Top 20
      </p>
      <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
        {data.data.Storefront.collectionLayout.collectionOffers.map(
          ({ id, title, keyImages, customAttributes, urlSlug }) => (
            <div key={id} id={id} className="rounded-md pl-2 pr-2 game_card">
              <GameLink customAttributes={customAttributes}>
                <a>
                  <ImageCard keyImages={keyImages} title={title} id={id} />
                  <h1
                    key={id}
                    className="font-bold text-gray-50 text-base mb-2 game_title"
                  >
                    {title}
                  </h1>
                </a>
              </GameLink>
            </div>
          )
        )}
      </div>
    </AppLayout>
  )
}
