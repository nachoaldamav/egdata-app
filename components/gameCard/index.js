import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"
import Skeleton from "@material-ui/lab/Skeleton"
import AppLayout from "../../components/AppLayout"
import { useGetGameInfo } from "../../components/useRequest"

export default function Game({ game }) {
  const { id } = game
  const { gamesInfo, error } = useGetGameInfo(`${id}`)

  if (error) return <h1>Something went wrong!</h1>
  if (!gamesInfo) return <h1>Loading...</h1>

  return (
    <>
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
      <div key={id} id={id} className="rounded-md pl-2 pr-2 game_card">
        <Link href="/product/[id]" as={`/product/${gamesInfo.productSlug}`}>
          <a>
            <Image
              src={
                gamesInfo.keyImages.map((url) => ({
                  url,
                })) || "/egs_logo.png"
              }
              alt={gamesInfo.title}
              width={250}
              height={333}
              layout="responsive"
              id={gamesInfo.id}
              className="w-full rounded-md absolute transition duration-500 ease-in-out opacity-70 transform hover:opacity-100"
              unoptimized={true}
            />
            <div className="px-2 py-2">
              <div className="font-bold text-gray-50 text-base mb-2 game_title">
                {gamesInfo.title}
              </div>
              <div className="font-bold text-gray-400 text-sm mb-2 game_title">
                {gamesInfo.seller.name}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  )
}
