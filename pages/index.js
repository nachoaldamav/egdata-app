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

const client = algoliasearch("0X90LHIM7C", "89a8fc95db44e802497a75305542c07b")
const index = client.initIndex("games")

export default function Game({ id, trending }) {
  const { api, isLoading, isError } = useApi(id)
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

  return (
    <AppLayout>
      <div className="bg-gray-900">
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
        <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
          {api.map(
            ({
              title,
              id,
              Thumbnail,
              currentPrice,
              productSlug,
              seller,
              discount,
              originalPrice,
              discountPercentage,
              namespace,
              slug,
            }) => (
              <div key={id} id={id} className="rounded-md pl-2 pr-2 game_card">
                <Link href="/product/[id]" as={`/product/${slug}`}>
                  <a>
                    <Image
                      src={Thumbnail || "/egs_logo.png"}
                      alt={title}
                      width={250}
                      height={333}
                      placeholder="blur"
                      blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                      layout="responsive"
                      id={id}
                      className="w-full rounded-md absolute transition duration-500 ease-in-out opacity-70 transform hover:opacity-100"
                    />
                    <div className="px-2 py-2">
                      <div className="font-bold text-gray-50 text-base mb-2 game_title">
                        {title}
                      </div>
                      <div className="font-bold text-gray-400 text-sm mb-2 game_title">
                        {seller}
                      </div>
                      <div className="text-gray-200 text-base">
                        {discount > 0 && (
                          <div className="text-gray-500 text-base inline font-sans">
                            <span className="tracking-wider leading-relaxed text-xs p-1 bg-blue-500 font-medium rounded-md no-underline text-white">
                              -{discountPercentage}%
                            </span>
                            <div className="inline"> </div>
                            <div className="line-through inline">
                              {originalPrice}
                            </div>
                          </div>
                        )}
                        <div className="text-gray-100 text-base inline">
                          {" "}
                          {currentPrice}
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )
          )}
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
    `https://api.egdata.app/?country=${selectedCountry || "US"}`,
    fetcher
  )
  return {
    api: data,
    isLoading: !error && !data,
    isError: error,
  }
}

Game.getInitialProps = async (ctx) => {
  const res = await index
    .search("", {
      hitsPerPage: 3,
    })
    .then(({ hits }) => {
      return hits
    })
  const json = await res
  return { trending: json }
}
