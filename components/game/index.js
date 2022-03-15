import Image from "next/image"
import AppLayout from "../../components/AppLayout"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import Skeleton from "@material-ui/lab/Skeleton"
import { DiscussionEmbed } from "disqus-react"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import Countdown from "react-countdown"
import PriceGraph from "../priceGraph"
import axios from "axios"
import aa from "search-insights"
import { getPreferences } from "cookie-though"
import ErrorMessage from "../ErrorMessage"
import { DateTime } from "luxon"
import CriticsComponent from "../CriticsComponent"
import _ from "lodash"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { RegionalPricingTab, ExpansionsTab, DetailsTab } from "./tabs"
import { OpenInWindow } from "iconoir-react"

export default function Game({ id, metadata }) {
  const { game, isLoading, isError } = useGame(id)
  if (isLoading) {
    return (
      <AppLayout>
        <div className="container mx-auto px-6 py-2 content-center items-center">
          <Skeleton
            className="mx-auto"
            variant="rect"
            width="75%"
            height={630}
            animation="wave"
          />
          <br />
          <Skeleton variant="text" width="25%" animation="wave" />
        </div>
      </AppLayout>
    )
  }
  if (isError) {
    return <ErrorMessage />
  }

  const disqusShortname = "egs-data"
  const disqusConfig = {
    url: game.website_url, // url
    identifier: game.id, // Single post id
    title: game.title, // Single post title
  }

  const galleryImages = game.galleryImages.map((image, index) => (
    <div key={index}>
      {image !== null && (
        <Image
          src={image || "/egs_logo.png"}
          width={1920}
          height={1080}
          alt={game.title}
          layout="intrinsic"
          unoptimized={true}
        />
      )}
    </div>
  ))

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return ""
    } else {
      // Render a countdown
      return (
        <span>
          {days} {days !== 1 ? "days" : "day"} {hours}:{minutes}:{seconds}
        </span>
      )
    }
  }

  const url = `https://epicstore-2a6cc.firebaseio.com/games/${game.id}.json`

  axios
    .get(url)
    .then((response) => {
      axios.put(url, {
        counter: response.data.counter + 1,
      })
    })
    .catch((error) => {
      console.log("File doesn't exist" + error)
      axios.put(url, {
        counter: 0,
      })
    })

  const cookiePreference = getPreferences()

  if (cookiePreference.cookieOptions[1].isEnabled === true) {
    sendAlgoliaEvent(game)
  }

  return (
    <AppLayout>
      <style jsx>
        {`
          .sub_menu {
            background: #101116;
            position: sticky;
            top: 0px;
            left: 0px;
            right: 0px;
            z-index: 999;
          }
        `}
      </style>

      <div className="container mx-auto px-6 py-2 content-center items-center">
        <div className="grid md:grid-cols-2 py-8 sub_menu">
          <div className="text-white text-base">
            <Link href="/">
              <a className="transition duration-500 ease-in-out opacity-70 transform hover:opacity-100">
                Return to Home
              </a>
            </Link>{" "}
            - <strong>{game.title || <Skeleton />}</strong>
          </div>
          <div></div>
        </div>
        <div className="hero container max-w-screen-lg mx-auto">
          <Image
            src={
              game.DieselStoreFrontWide ||
              game.OfferImageWide ||
              "/img/egs-placeholder.png"
            }
            width={1100}
            height={630}
            unoptimized="true"
            placeholder="blur"
            blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            alt={game.title}
            className="mx-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="px-6 md:w-3/6">
            <p className="text-5xl text-white text-left py-5">
              {game.title || <Skeleton />}
            </p>
          </div>
          <div className="px-6 md:w-3/6 object-right text-right">
            <div className="text-gray-200 text-base p-4">
              {game.discount > 0 && (
                <div className="text-gray-500 text-base font-sans inline">
                  <span className="tracking-wider leading-relaxed text-xs p-1 bg-blue-500 font-medium rounded-md no-underline text-white">
                    -{game.discountPercentage}%
                  </span>
                  <div className="inline"> </div>
                  <div className="line-through inline">
                    {game.originalPrice}
                  </div>
                </div>
              )}
              <div className="text-gray-100 text-base inline">
                {" "}
                {game.currentPrice}
              </div>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link href={game.productSlug}>
                <a
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-indigo-700"
                >
                  Buy now
                </a>
              </Link>
            </div>
            {game.currentPrice !== "Coming Soon..." && (
              <div className="inline-flex px-2 rounded-md shadow">
                <Link href={`/r/${game.slug}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-indigo-700"
                  >
                    Direct Buy
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="container mx-auto md:px-16 text-base text-white text-left py-5">
          <ReactMarkdown className="text-2xl" plugins={[gfm]}>
            {game.title}
          </ReactMarkdown>
          <ReactMarkdown className="game_description" plugins={[gfm]}>
            {game._description}
          </ReactMarkdown>

          <br />
          <hr />
          <br />
          <div className="grid grid-flow-row grid-cols-2 max-w-4xl mx-auto py-4 gap-4">
            {galleryImages}
          </div>
          {game.available === "true" && <PriceGraph id={game.id} />}
        </div>
        {game.available === "true" && (
          <div className="container max-w-2xl py-10">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
              width={420}
              height={320}
            />
          </div>
        )}
        {game.available === "false" && (
          <div className="container max-w-2xl py-5 text-white">
            <p className="text-white text-xl">
              <strong>This game has not been released yet, </strong> reviews
              will open 1 day after the release
            </p>
            <div className="text-center text-2xl">
              <Countdown date={game.releaseDate} renderer={renderer} />
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export function GamePage({ id, OpenCritic }) {
  const { game, isLoading, isError } = useGame(id)
  if (isLoading) {
    return (
      <AppLayout>
        <div className="container mx-auto px-6 py-2 content-center items-center">
          <Skeleton
            className="mx-auto"
            variant="rect"
            width="75%"
            height={630}
            animation="wave"
          />
          <br />
          <Skeleton variant="text" width="25%" animation="wave" />
        </div>
      </AppLayout>
    )
  }
  if (isError) {
    return <ErrorMessage />
  }

  const disqusShortname = "egs-data"
  const disqusConfig = {
    url: game.website_url, // url
    identifier: game.id, // Single post id
    title: game.title, // Single post title
  }

  const galleryImages = game.galleryImages.map((image, index) => (
    <div key={index}>
      {image !== null && (
        <Image
          src={image || "/egs_logo.png"}
          width={1920}
          height={1080}
          alt={game.title}
          placeholder="blur"
          loading="eager"
          blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          layout="intrinsic"
          unoptimized={true}
        />
      )}
    </div>
  ))

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return ""
    } else {
      // Render a countdown
      return (
        <span>
          {days} {days !== 1 ? "days" : "day"} {hours}:{minutes}:{seconds}
        </span>
      )
    }
  }

  const url = `https://epicstore-2a6cc.firebaseio.com/games/${game.id}.json`

  axios
    .get(url)
    .then((response) => {
      axios.put(url, {
        counter: response.data.counter + 1,
      })
    })
    .catch((error) => {
      console.log("File doesn't exist" + error)
      axios.put(url, {
        counter: 0,
      })
    })

  const cookiePreference = getPreferences()

  if (cookiePreference.cookieOptions[1].isEnabled === true) {
    sendAlgoliaEvent(game)
  }

  const plataformas = [
    "Windows",
    "Mac OS",
    "OSX",
    "The Showcase Sale",
    "Epic MEGA Sale",
    "Spring Sale",
    "BAFTA Games Awards 2021",
    "2K Publisher Sale",
    "Weeklong Deals",
    "Rockstar Games Sale",
    "Holiday Sale 2020",
  ]

  const categories = _.without(game.tags, ...plataformas).join(", ")

  function returnTo() {
    const router = useRouter()
    const { ref } = router.query
    if (ref === "free-games") {
      return (
        <div className="grid md:grid-cols-2 py-8 sub_menu">
          <div className="text-white text-base px-4">
            <Link href="/free-games">
              <a className="transition duration-500 ease-in-out opacity-70 transform hover:opacity-100">
                Return to Free Games
              </a>
            </Link>{" "}
            - <strong>{game.title || <Skeleton />}</strong>
          </div>
          <div></div>
        </div>
      )
    } else {
      return (
        <div className="grid md:grid-cols-2 py-8 sub_menu">
          <div className="text-white text-base px-4">
            <Link href="/">
              <a className="transition duration-500 ease-in-out opacity-70 transform hover:opacity-100">
                Return to Home
              </a>
            </Link>{" "}
            - <strong>{game.title || <Skeleton />}</strong>
          </div>
          <div></div>
        </div>
      )
    }
  }

  return (
    <AppLayout>
      {returnTo()}
      <div className="container mx-auto text-white">
        <div className="flex flex-col-reverse md:flex-row container mx-auto py-5 px-0 md:px-11">
          <div className="w-full md:w-9/12 px-5 ">
            <h1 className="text-5xl text-white text-left py-5">{game.title}</h1>
            <ReactMarkdown
              className="game_description pb-5 px-5"
              plugins={[gfm]}
            >
              {game._description}
            </ReactMarkdown>
            <div className="py-4">
              <hr></hr>
            </div>
            <div className="rounded-md flex flex-col md:flex-row">
              <div className="px-2 flex-0">
                <div className="pt-2">
                  <h3 className="text-xl p-5">Social Links</h3>
                </div>
              </div>

              <div className="flex-1 flex w-full flex-col p-0 md:p-5 text-xl">
                <div className="flex flex-nowrap justify-between py-1">
                  <div className="px-2 md:px-5">Seller</div>
                  <div className="px-2 md:px-5 truncate">
                    <Link href={`/search?query=${game.seller}`}>
                      <a className="underline hover:no-underline">
                        {game.seller}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-nowrap justify-between py-1">
                  <div className="px-2 md:px-5">Platforms</div>
                  <div className="px-2 md:px-5 overflow-ellipsis">
                    {game.tags.includes("Windows") === true && "Windows"}
                    {game.tags.includes("Mac OS") === true && ", Mac OS"}
                  </div>
                </div>
                <div className="flex flex-nowrap justify-between py-1 w-full">
                  <div className="px-2 md:px-5">Categories</div>
                  <div className="px-2 md:px-5 text-right whitespace-nowrap md:whitespace-normal overflow-x-auto">
                    {categories}
                  </div>
                </div>
                <div className="flex flex-nowrap justify-between py-1">
                  <div className="px-2 md:px-5 whitespace-nowrap overflow-x-auto">
                    Release date
                  </div>
                  <div className="px-2 md:px-5 whitespace-nowrap overflow-x-auto">
                    {DateTime.fromISO(game.releaseDate || game.effectiveDate)
                      .setLocale("en")
                      .toLocaleString({
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </div>
                </div>
                <div className="flex flex-nowrap justify-between py-1">
                  <div className="px-2 md:px-5 whitespace-nowrap overflow-x-auto">
                    Last modified
                  </div>
                  <div className="px-2 md:px-5 whitespace-nowrap overflow-x-auto">
                    {DateTime.fromISO(game.lastModifiedDate)
                      .setLocale("en")
                      .toLocaleString({
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </div>
                </div>
                <div className="flex flex-nowrap justify-between py-1">
                  <div className="px-2 md:px-5">Giveaway record</div>
                  <div className="px-2 md:px-5">Unknown</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/12 px-5">
            <Image
              src={game.Thumbnail}
              alt={game.title}
              width={175}
              height={235}
              layout="responsive"
              id={game.id}
              quality={100}
              placeholder="blur"
              blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              className="rounded-md"
              unoptimized={true}
            />
            <div className="flex flex-nowrap justify-between py-4 px-2 md:px-0 w-full">
              <div>
                <h3>Original</h3>
                {game.originalPrice}
              </div>
              <div>
                <h3>Discount</h3>
                {game.discount !== "0" ? `${game.discountPercentage}%` : "-"}
              </div>
              <div>
                <h3>Current</h3>
                {game.currentPrice}
              </div>
            </div>
            <div className="flex flex-nowrap justify-between py-2">
              <Link href={game.productSlug} target="_blank">
                <a>
                  <button className="mr-1 flex-1 inline-flex items-center justify-center px-7 py-3 border-2 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-blue-700">
                    Buy now
                  </button>
                </a>
              </Link>
              <Link href={`/r/${game.slug}`}>
                <a>
                  <button className="ml-1 flex-1 inline-flex items-center justify-center px-7 py-3 border boder-blue-700 text-base font-medium rounded-md text-white bg-transparent hover:bg-indigo-700">
                    Direct buy
                  </button>
                </a>
              </Link>
            </div>
            <button className="w-full bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded cursor-not-allowed">
              Add to whishlist
            </button>
          </div>
        </div>
        <div className="mx-auto w-full py-5 px-4 md:px-20 h-screen">
          <Tabs>
            <div className="flex items-center justify-between">
              <TabList className="md:w-3/4 py-2 px-0 w-full whitespace-nowrap overflow-x-auto">
                <Tab>Regional Pricing</Tab>
                <Tab>Images</Tab>
                <Tab>Expansions</Tab>
                <Tab>Details</Tab>
              </TabList>
              <div className="w-1/4 flex">
                <div className="px-2 md:px-5 inline-flex border-l-2 border-gray-600">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.pcgamingwiki.com/wiki/${game.title.replace(
                      " ",
                      "_"
                    )}`}
                  >
                    PCGW
                  </a>
                  <OpenInWindow height={20} width={20} className="px-1" />
                </div>
              </div>
            </div>

            <TabPanel>
              <RegionalPricingTab id={game.id} />
            </TabPanel>
            <TabPanel>
              {game.galleryImages[0] !== undefined ? (
                <div className="flex flex-col md:grid grid-flow-row grid-cols-2 max-w-4xl mx-auto py-4 gap-4">
                  {galleryImages}
                </div>
              ) : (
                <div className="w-full py-2">
                  <h1 className="text-2xl text-center">Nothing to see here!</h1>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              <ExpansionsTab data={game.pages} />
            </TabPanel>
            <TabPanel>
              <DetailsTab offerId={game.offerSubItems[0].id} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  )
}

function useGame(context) {
  const router = useRouter()
  const { id } = router.query
  let selectedCountry
  if (typeof window !== "undefined") {
    selectedCountry = localStorage.getItem("selectedCountry")
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    `https://api.egdata.app/game.php?title=${id}&country=${
      selectedCountry || "US"
    }`,
    fetcher
  )
  return {
    game: data,
    isLoading: !error && !data,
    isError: error,
  }
}

async function sendAlgoliaEvent(game) {
  // Starting from v1.3.0 of the search-insights.js library
  // Init algolia insights

  aa("viewedObjectIDs", {
    index: "games",
    eventName: "Product Detail Page Viewed",
    objectIDs: [`${game.id}`],
  })

  // clickedObjectIDs
  aa("clickedObjectIDs", {
    index: "games",
    eventName: "Product clicked",
    objectIDs: [`${game.id}`],
  })
}

GamePage.getInitialProps = async (context) => {
  const { params } = context
  const { id } = params

  const res = await axios
    .get(`https://api.opencritic.com/api/game/search?criteria=${id}`)
    .then((response) => {
      return response
    })
  console.info(res)
  const json = await res
  return { OpenCritic: json }
}
