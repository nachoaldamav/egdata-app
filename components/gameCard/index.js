import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"
import findImage from "../../utils/findImage"

const fetcher = (...args) => fetch(...args).then((r) => r.json())

export default function GameCard({ gameId }) {
  const { data, error } = useSWR(`/api/game/${gameId}`, fetcher)
  if (error) return <div></div>
  if (!data) return <div></div>
  const game = data.Catalog.catalogOffer

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
      <div className="w-96 max-w-full mx-auto my-4">
        <div
          key={game.id}
          id={game.id}
          className="rounded-md pl-2 pr-2 game_card"
        >
          <Link href="/product/[id]" as={`/product/${gameId}`}>
            <a>
              <Image
                src={
                  findImage(game.keyImages, "DieselStoreFrontWide") ||
                  "/egs_logo.png"
                }
                alt={game.title}
                width={500}
                height={300}
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
                  {game?.price?.totalPrice?.discount > 0 && (
                    <div className="text-gray-500 text-base inline font-sans">
                      <span className="tracking-wider leading-relaxed text-xs p-1 bg-blue-500 font-medium rounded-md no-underline text-white">
                        -
                        {(
                          (game.price.totalPrice.discountPrice /
                            game.price.totalPrice.originalPrice) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                      <div className="inline"> </div>
                      <div className="line-through inline">
                        {game.price.totalPrice.fmtPrice.originalPrice}
                      </div>
                    </div>
                  )}
                  <div className="text-gray-100 text-base inline">
                    {" "}
                    {game.price.totalPrice.fmtPrice.originalPrice === "0" ? (
                      <div className="inline">Free</div>
                    ) : (
                      <div className="inline">
                        {game.price.totalPrice.fmtPrice.discountPrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
