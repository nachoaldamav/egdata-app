/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import findImage from "../../utils/findImage"
import Countdown, { zeroPad } from "react-countdown"

export default function FreeGames({ data }) {
  return (
    <div className="w-full h-fit flex flex-col text-white px-10 md:px-20 py-4 md:pt-12">
      <h4 className="text-4xl font-bold">Free Games</h4>
      <div className="flex flex-row w-full min-w-full overflow-y-auto flex-nowrap">
        {data.map((item, index) => (
          <Link
            href="/product/[id]"
            as={`/product/${
              item.catalogNs.mappings[0]?.pageSlug || item.productSlug
            }`}
            key={index}
          >
            <a key={index} className="w-96 xl:w-1/3 shrink-0 rounded-lg m-4">
              <img
                className="w-full h-64 object-cover rounded-t-lg"
                src={
                  findImage(item.keyImages, "DieselStoreFrontWide") ||
                  findImage(item.keyImages, "OfferImageWide") ||
                  findImage(item.keyImages, "VaultClosed") ||
                  "/images/egs-placeholder.png"
                }
                alt={item.title}
              />
              <Countdown
                date={
                  isUpcoming(item.promotions)
                    ? item.promotions.upcomingPromotionalOffers[0]
                        .promotionalOffers[0].startDate
                    : item.promotions?.promotionalOffers[0]
                        ?.promotionalOffers[0].startDate
                }
                zeroPadTime={2}
                renderer={renderer}
              />
              <div className="px-1 py-2">
                <h5 className="text-lg font-bold">{item.title}</h5>
                <ParseDates promotions={item.promotions} />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

function isUpcoming(promotions) {
  return promotions.upcomingPromotionalOffers.length > 0
}

function ParseDates({ promotions }) {
  function parseDate(date) {
    const d = new Date(date)
    return `${d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`
  }

  if (isUpcoming(promotions)) {
    return (
      <p className="text-sm">
        {parseDate(
          promotions.upcomingPromotionalOffers[0]?.promotionalOffers[0]
            ?.startDate
        )}{" "}
        -{" "}
        {parseDate(
          promotions.upcomingPromotionalOffers[0]?.promotionalOffers[0]?.endDate
        )}
      </p>
    )
  } else {
    return (
      <p className="text-sm">
        {parseDate(
          promotions.promotionalOffers[0]?.promotionalOffers[0]?.startDate
        )}{" "}
        -{" "}
        {parseDate(
          promotions.promotionalOffers[0]?.promotionalOffers[0]?.endDate
        )}
      </p>
    )
  }
}

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
