import { ArrowDown, ArrowUp } from "iconoir-react"
import Image from "next/image"
import Link from "next/link"
import AppLayout from "../components/AppLayout"

export default function TopSellers({ data }) {
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
          .game_position {
            background: inherit;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            filter: invert(1) grayscale(1);
            -webkit-filter: invert(1) grayscale(1);
          }
        `}
      </style>
      <p className="text-5xl text-white text-left px-20 py-5">Top Sellers</p>
      <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
        {data.map((game, index) => (
          <div
            key={index}
            id={index}
            className="rounded-md pl-2 pr-2 game_card relative"
          >
            <Link href={`https://store.epicgames.com${game.url}`}>
              <a target="_blank">
                <Image
                  src={game.image}
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
                <span className="absolute top-3 right-2 font-bold text-xl text-white bg-black bg-opacity-20 w-fit px-2 text-center backdrop-blur-lg rounded-r-lg rounded-t-lg rounded-b-none rounded-l-none">
                  {game.position}
                </span>
                <div className="px-2 py-2">
                  <div className="font-bold text-gray-50 text-base mb-2 game_title inline-flex items-center justify-between">
                    {game.title}
                  </div>
                  <div className="text-gray-200 text-base inline-flex w-full items-center justify-between">
                    {game.price}
                    <Diff diff={game.diff} />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </AppLayout>
  )
}

function Diff({ diff }) {
  if (diff > 0) {
    return (
      <span className="text-green-500">
        <ArrowUp />
        {diff}
      </span>
    )
  } else if (diff < 0) {
    return (
      <span className="text-red-500">
        <ArrowDown />
        {diff}
      </span>
    )
  } else {
    return <span className="text-gray-500">-</span>
  }
}

export async function getStaticProps() {
  const data = await fetch(
    `https://raw.githubusercontent.com/nachoaldamav/egs-sellers/master/data.json`
  )
  const sellers = await data.json()
  return {
    props: {
      data: sellers,
    },
    revalidate: 60 * 60 * 12,
  }
}
