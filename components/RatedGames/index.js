import Image from "next/image"
import Link from "next/link"
import _ from "lodash"

export default function RatedGames({ data }) {
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

  function removeCategories(array) {
    const newArray = _.without(array, ...plataformas)
    return newArray
  }

  return (
    <div className="text-white">
      <div className="flex flex-nowrap justify-between items-baseline">
        <div>
          <h1 className="text-2xl text-white text-left px-5 md:px-20 pt-5">
            Top Rated
          </h1>
        </div>
      </div>

      <div className="container my-2 mx-auto px-4 md:px-12 overflow-x-auto lg:overflow-x-hidden">
        <div className="flex flex-nowrap lg:w-full w-max -mx-1 lg:-mx-4 ">
          {data.map(
            ({
              title,
              objectID,
              productSlug,
              seller,
              namespace,
              slug,
              OfferImageWide,
              categories,
            }) => (
              <div
                key={objectID}
                className="my-1 px-1 w-screen sm:w-max md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              >
                <article className="overflow-hidden shadow-lg">
                  <Link href="/product/[id]" as={`/product/${slug}`}>
                    <a>
                      <Image
                        src={OfferImageWide || "/egs_logo.png"}
                        alt={title}
                        width={200}
                        height={125}
                        placeholder="blur"
                        blurDataURL="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                        layout="responsive"
                        className="block h-auto w-full"
                        unoptimized={true}
                      />
                      <div className="card_body h-20 text-white">
                        <header className="flex items-center justify-between leading-tight px-2 md:px-4 md:py-4 py-2 lg:py-2">
                          <h1 className="text-lg">{title}</h1>
                          <div className="text-gray-200 text-sm">
                            {removeCategories(categories)
                              .slice(0, 2)
                              .join(", ")}
                          </div>
                        </header>

                        <footer className="flex items-center justify-between leading-none px-2 md:px-2 md:pb-2 text-gray-400">
                          <p className="ml-2 text-sm">{seller}</p>
                        </footer>
                      </div>
                    </a>
                  </Link>
                </article>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
