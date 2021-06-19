import Image from "next/image"
import Link from "next/link"
import algoliasearch from "algoliasearch"
import ErrorMessage from "../ErrorMessage"

const client = algoliasearch("0X90LHIM7C", "89a8fc95db44e802497a75305542c07b")
const index = client.initIndex("games")

export default function RecommendedGames({ data }) {
  return (
    <div className="text-white">
      <h1 className="text-2xl text-white text-left px-20 pt-5">
        You may be interested in
      </h1>
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
                      />
                      <div className="card_body h-20 text-white">
                        <header className="flex items-center justify-between leading-tight px-2 md:px-4 md:py-4 py-2 lg:py-2">
                          <h1 className="text-lg">{title}</h1>
                          <div className="text-gray-200 text-sm">
                            {categories.slice(0, 3).join(", ")}
                          </div>
                        </header>

                        <footer className="flex items-center justify-between leading-none px-2 md:px-2 md:pb-2 text-gray-400 flex items-center">
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

async function useApi() {
  const { data, error } = index
    .search("", {
      hitsPerPage: 3,
    })
    .then(({ hits }) => {
      return hits
    })
  return {
    api: data,
    isLoading: !error && !data,
    isError: error,
  }
}

async function getInitialProps({ req }) {
  const response = await index
    .search("", {
      hitsPerPage: 3,
    })
    .then(({ hits }) => {
      return hits
    })
  return { trending: response }
}
