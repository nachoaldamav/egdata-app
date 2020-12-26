import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Skeleton from '@material-ui/lab/Skeleton';

export default function Game({ id }) {

    const { game, isLoading, isError } = useGame(id)
    if (isLoading) return (
        <AppLayout>
            <div className="container mx-auto px-6 py-2">
                <Skeleton variant="rect" width="75%" height={630} animation="wave" />
                <br />
                <Skeleton variant="text" width="25%" animation="wave" />
            </div>
        </AppLayout>
    )
    if (isError) return (
        <AppLayout><p className="text-5xl text-white text-left py-5">Failed to load</p></AppLayout>
    )

    return (
        <AppLayout>
            <Head>
                <title>{game.title} | Epic Games Data</title>
            </Head>
            <div className="container mx-auto px-6 py-2 content-center items-center">
                <Image
                 src={game.DieselStoreFrontWide || game.OfferImageWide || <Skeleton />}
                 width={1100}
                 height={630}
                 className="object-center place-content-center"
                 />
                <p className="text-5xl text-white text-left py-5">{game.title || <Skeleton />}</p>
                <div className="inline-flex rounded-md shadow">
                    <Link href={game.productSlug}>
                        <a target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-indigo-700">
                            Buy now
                        </a>
                    </Link>
                </div>
                <div className="inline-flex px-2 rounded-md shadow">
                    <Link href={`https://www.epicgames.com/store/purchase?namespace=${game.namespace}&showNavigation=true&highlightColor=0078f2&offers=${game._id}#/purchase/verify?_k=mshm8g`}>
                        <a target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-indigo-700">
                            Direct Buy
                        </a>
                    </Link>
                </div>
            </div>
        </AppLayout>
    )
}

function useGame (context) {
    const router = useRouter()
    const { id } = router.query

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`https://api.trackstats.app/game.php?title=${id}`, fetcher)
    return {
      game: data,
      isLoading: !error && !data,
      isError: error
    }
  }