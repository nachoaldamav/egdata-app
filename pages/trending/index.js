import useSWR from "swr"
import axios from "axios"
import AppLayout from "../../components/AppLayout"
import ImageCard from "../../components/imageCard"
import GameLink from "../../components/GameLink"
import Renderloader from "../../components/loader"
import ErrorMessage from "../../components/ErrorMessage"

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function TrendingGames() {
  const { data, error } = useSWR(
    "https://egs-api.trackstats.workers.dev/",
    fetcher
  )

  if (error) return <ErrorMessage />
  if (!data)
    return (
      <AppLayout>
        <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
          <Renderloader />
        </div>
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
