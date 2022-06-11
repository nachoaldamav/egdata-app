import AppLayout from "../../components/AppLayout"
import { useRouter } from "next/router"
import useSWR from "swr"
import Skeleton from "@material-ui/lab/Skeleton"
import Image from "next/image"
import findImage from "../../utils/findImage"

export default function RedirectPage({ id, metadata }) {
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
    return (
      <AppLayout>
        <p className="text-5xl text-white text-center py-5">Failed to load</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-6 sm:py-2 content-center items-center text-white text-center flex flex-col sm:flex-row h-screen min-h-full">
        <div className="flex-1">
          <div className="">
            <p className="text-2xl font-semibold">
              You are about to be redirected to {game.title} checkout!
            </p>
            <p className="text-lg">
              Make sure you are logged in to Epic Games first.
            </p>
          </div>
          <div>
            <br></br>
            <a
              href={`https://www.epicgames.com/store/purchase?namespace=${game.namespace}&showNavigation=true&highlightColor=0078f2&offers=${game.id}#/purchase/verify?_k=mshm8g`}
            >
              <button className="btn h-20 w-auto px-7 bg-black epic-login inline rounded-md">
                <img
                  className="inline m-1"
                  height="25px"
                  width="24"
                  src="/img/Epic-Games-White-Solid.png"
                />
                Go to Checkout
              </button>
            </a>
          </div>
        </div>
        <br></br>
        <div className="flex-1">
          <Image
            src={
              findImage(game?.keyImages, "DieselStoreFrontWide") ||
              findImage(game?.keyImages, "OfferImageWide") ||
              "/img/egs-placeholder.png"
            }
            width={1100}
            height={630}
            className="lg:my-2 w-full rounded-md absolute"
            unoptimized={true}
            alt={game.title}
          />
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
    `/api/game/${id}?country=${selectedCountry}`,
    fetcher
  )
  return {
    game: data?.Catalog.catalogOffer,
    isLoading: !error && !data,
    isError: error,
  }
}
