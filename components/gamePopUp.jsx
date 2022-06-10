import { useHover } from "@react-aria/interactions"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import findImage from "../utils/findImage"

export default function GamePopUp({ children, link, gameId }) {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [game, setGame] = useState(null)

  const { hoverProps, isHovered } = useHover({
    onHoverStart: (e) => {},
    onHoverEnd: (e) => {},
  })

  useEffect(() => {
    if (isHovered && gameId && !game) {
      setLoading(true)
      fetch(`/api/game/${gameId}`)
        .then((res) => res.json())
        .then((data) => setGame(data.Catalog.catalogOffer))
        .then(() => setLoading(false))
    }
  }, [isHovered, gameId, game])

  return (
    <Link href={link}>
      <a className="relative z-10" {...hoverProps}>
        {isHovered && (
          <span className="absolute top-5 right-0 bg-gray-800 w-60 h-fit flex flex-col gap-1 rounded-md z-[90]">
            {loading ? (
              <SkeletonTheme baseColor="#374151" highlightColor="#111827">
                <Skeleton count={1} height={85} />
                <p className="flex flex-col gap-1 pt-2">
                  <Skeleton count={1} height={10} />
                  <Skeleton count={1} height={20} />
                </p>
              </SkeletonTheme>
            ) : (
              <>
                <Image
                  src={findImage(game.keyImages, "OfferImageWide")}
                  width={200}
                  height={120}
                  className="w-full h-full object-cover rounded-t-md"
                  unoptimized={true}
                  alt={game.title}
                />
                <div className="flex flex-col gap-1 pt-2 pb-4 px-2">
                  <span className="text-white font-bold">{game.title}</span>
                  <span className="text-white text-xs">
                    {game.description.length > 100
                      ? game.description.substring(0, 100) + "..."
                      : game.description}
                  </span>
                  <span className="w-full flex flex-row justify-between items-center">
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
                    <div className="text-gray-100 text-base inline items-center">
                      {" "}
                      {game.price.totalPrice.fmtPrice.originalPrice === "0" ? (
                        <div className="inline">Free</div>
                      ) : (
                        <div className="inline">
                          {game.price.totalPrice.fmtPrice.discountPrice}
                        </div>
                      )}
                    </div>
                  </span>
                </div>
              </>
            )}
          </span>
        )}
        <span className="underline text-inherit hover:text-blue-600 transition duration-150 ease-in-out z-10">
          {children}
        </span>
      </a>
    </Link>
  )
}
