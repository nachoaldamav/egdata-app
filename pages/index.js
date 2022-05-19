import Head from "next/head"
import Image from "next/image"
import AppLayout from "../components/AppLayout"
import Link from "next/link"
import { Banner } from "../pages/free-games"
import useSWR from "swr"
import Renderloader from "../components/loader"
import ErrorMessage from "../components/ErrorMessage"
import RecommendedGames from "../components/RecommendedGames"
import algoliasearch from "algoliasearch"
import RatedGames from "../components/RatedGames"
import findImage from "../utils/findImage"

const client = algoliasearch("0X90LHIM7C", "89a8fc95db44e802497a75305542c07b")
const index = client.initIndex("games")

export default function Game({ id, trending, rated }) {
  const { api, isLoading, isError } = useApi()
  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
          <Renderloader />
        </div>
      </AppLayout>
    )
  }
  if (isError) {
    return <ErrorMessage />
  }

  const data = trending
  const ratedGames = rated

  return (
    <AppLayout>
      <div className="background-color">
        <Head>
          <title>Epic Games Data</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="EGS Data" />
          <link rel="apple-touch-icon" href="/public/logo-icon-144x144.png" />
          <link
            rel="apple-touch-startup-icon"
            href="/public/logo-icon-144x144.png"
          />
        </Head>

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
            #engines {
              visibility: hidden !important;
            }
          `}
        </style>

        <Banner />
        <RecommendedGames data={data} />
        <RatedGames data={ratedGames} />
        <h1 className="text-2xl text-white text-left px-5 md:px-20 pt-5">
          Recently added
        </h1>
        <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
          {api.map((game) => (
            <div
              key={game.id}
              id={game.id}
              className="rounded-md pl-2 pr-2 game_card"
            >
              <Link
                href="/product/[id]"
                as={`/product/${game.catalogNs.mappings[0].pageSlug}`}
              >
                <a>
                  <Image
                    src={
                      findImage(game.keyImages, "Thumbnail") || "/egs_logo.png"
                    }
                    alt={game.title}
                    width={250}
                    height={333}
                    placeholder="blur"
                    blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                    quality={100}
                    layout="responsive"
                    id={game.id}
                    className="w-full rounded-md absolute transition duration-500 ease-in-out opacity-70 transform hover:opacity-100"
                    unoptimized={true}
                  />
                  <div className="px-2 py-2">
                    <div className="font-bold text-gray-50 text-base mb-2 game_title">
                      {game.title}
                    </div>
                    <div className="font-bold text-gray-400 text-sm mb-2 game_title">
                      {game.seller.name}
                    </div>
                    <div className="text-gray-200 text-base">
                      {game?.price?.totalPice?.discount > 0 && (
                        <div className="text-gray-500 text-base inline font-sans">
                          <span className="tracking-wider leading-relaxed text-xs p-1 bg-blue-500 font-medium rounded-md no-underline text-white">
                            -
                            {(game.price.totalPice.discountPrice /
                              game.price.totalPice.originalPrice) *
                              100}
                            %
                          </span>
                          <div className="inline"> </div>
                          <div className="line-through inline">
                            {game.price.totalPice.originalPrice}
                          </div>
                        </div>
                      )}
                      <div className="text-gray-100 text-base inline">
                        {" "}
                        {game?.price?.totalPice?.discountPrice}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

function useApi(context) {
  let selectedCountry
  if (typeof window !== "undefined") {
    selectedCountry = localStorage.getItem("selectedCountry")
  }
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    `/api/main?country=${selectedCountry || "US"}`,
    fetcher
  )
  console.log(data)
  return {
    api: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export async function getStaticProps(ctx) {
  const res = await index
    .search("", {
      hitsPerPage: 3,
    })
    .then(({ hits }) => {
      return hits
    })
  const indexRated = client.initIndex("games_rating_desc")
  const resRated = await indexRated
    .search("", {
      hitsPerPage: 3,
    })
    .then(({ hits }) => {
      return hits
    })
  return { props: { trending: res, rated: resRated }, revalidate: 3600 }
}
