import Head from "next/head"
import Image from "next/image"
import AppLayout from "../../components/AppLayout"
import Link from "next/link"
import { useEffect } from "react"
import { askNotification } from "../../firebase/firebaseConfig"
import { DateTime } from "luxon"
import Countdown, { zeroPad } from "react-countdown"
import findImage from "../../utils/findImage"

export function Banner() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-7 px-4 sm:px-6 lg:py-7 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Do you want to know the new free games</span>
          <span className="block text-indigo-600"> before anyone else?</span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/free-games">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BannerShowcase() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-7 px-4 sm:px-6 lg:py-7 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Check the new offers from the</span>
          <span className="block text-indigo-600"> Showcase sale 2021</span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/showcase-sale-2021">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Showcase sale 2021
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FreeGames({ data }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <p className="bg-blue-600 text-white text-center p-0 rounded-b-md -top-2">
          <span>Free now!</span>
        </p>
      )
    } else {
      // Render a countdown
      return (
        <p className="bg-green-700 text-white text-center p-0 rounded-b-md -top-2">
          <span>
            {days} {days !== 1 ? "days" : "day"} {zeroPad(hours)}:
            {zeroPad(minutes)}:{zeroPad(seconds)}
          </span>
        </p>
      )
    }
  }

  useEffect(() => {
    askNotification()
  }, [])

  return (
    <AppLayout>
      <Head>
        <title>Epic Games Data | Free Games</title>
        <meta
          property="og:title"
          content="Free Games | Epic Games Data"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Free games of the Epic Games Store"
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/l3YT3CX.jpg"
          key="og:image"
        />
        <meta property="og:url" content="https://egdata.app/free-games" />

        <meta name="twitter:title" content="Free Games | Epic Games Data" />
        <meta
          name="twitter:description"
          content="Free games of the Epic Games Store"
        />
        <meta name="twitter:image" content="https://i.imgur.com/l3YT3CX.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col flex-wrap container mx-auto px-20">
        <p className="text-5xl text-white text-left py-5">Free Games</p>
        <div className="flex flex-row flex-wrap py-8">
          {data
            .reverse()
            .map(
              ({
                title,
                id,
                slug,
                endDate,
                startDate,
                available,
                keyImages,
                status,
              }) => (
                <div key={id} className="max-w-md">
                  {endDate !== "" && (
                    <Link href={`/product/${slug}?ref=free-games`}>
                      <a>
                        <div className="rounded-md pl-2 pr-2">
                          <Image
                            src={
                              findImage(keyImages, "DieselStoreFrontWide") ||
                              findImage(keyImages, "VaultClosed") ||
                              findImage(keyImages, "OfferImageWide") ||
                              "/egs_logo.png"
                            }
                            alt={title}
                            width={670}
                            height={376}
                            className="w-full rounded-md absolute transition duration-500 ease-in-out opacity-70 transform hover:opacity-100 py-0"
                            unoptimized={true}
                          />
                          <Countdown
                            date={startDate}
                            zeroPadTime={2}
                            renderer={renderer}
                          />
                          <div></div>
                          <div className="px-2 py-2">
                            <div className="font-bold text-gray-50 text-base mb-2 game_title">
                              {title}
                            </div>
                            <div className="text-gray-100 text-base inline">
                              {status === "ACTIVE" && (
                                <span>
                                  {DateTime.fromISO(startDate)
                                    .setLocale("en")
                                    .toLocaleString({
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                    })}{" "}
                                  -{" "}
                                  {DateTime.fromISO(endDate)
                                    .setLocale("en")
                                    .toLocaleString({
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                    })}
                                </span>
                              )}
                              {available === "true" && (
                                <span>
                                  {" "}
                                  Free now -{" "}
                                  {DateTime.fromISO(endDate)
                                    .setLocale("en")
                                    .toLocaleString({
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                    })}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  )}
                </div>
              )
            )}
        </div>
      </div>
    </AppLayout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions"
  )
  const data = await res.json()

  // Pass data to the page via props
  return {
    props: {
      data: await formatResponse(data.data.Catalog.searchStore.elements),
    },
  }
}

async function formatResponse(data) {
  const formattedData = data.map((game) => {
    return {
      title: game.title,
      id: game.id,
      namespace: game.namespace,
      effectiveDate: game.effectiveDate,
      currentPrice: game.price.totalPrice.fmtPrice.discountPrice,
      seller: game.seller.name,
      slug: game.catalogNs?.mappings[0]?.pageSlug || game.productSlug || "",
      status: game.status,
      keyImages: game.keyImages,
      ...getDates(game),
    }
  })

  return formattedData
}

function getDates(data) {
  const hasOffers = data.promotions?.promotionalOffers?.length > 0 || false
  const hasUpcomingOffers =
    data.promotions?.upcomingPromotionalOffers?.length > 0 || false

  if (data.promotions && hasOffers) {
    const startDate =
      data.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.startDate
    const endDate =
      data.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.endDate
    return { startDate, endDate }
  } else if (data.promotions && hasUpcomingOffers) {
    const startDate =
      data.promotions?.upcomingPromotionalOffers[0]?.promotionalOffers[0]
        ?.startDate
    const endDate =
      data.promotions?.upcomingPromotionalOffers[0]?.promotionalOffers[0]
        ?.endDate
    return { startDate, endDate }
  } else {
    return { startDate: "", endDate: "" }
  }
}
