import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function Game({ id }) {

    const { game, isLoading, isError } = useGame(id)
    if (isLoading) return (
        <AppLayout>
            <div className="container mx-auto px-6 py-2">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <p>
                        <Skeleton height={630} width={1100} duration={1.2} />
                    </p>
                </SkeletonTheme>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <p>
                        <Skeleton height={50} width={300} duration={1.2} />
                    </p>
                </SkeletonTheme>
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
            <div className="container mx-auto px-6 py-2 place-content-center">
                <Image
                 src={game.DieselStoreFrontWide || game.OfferImageWide || <Skeleton />}
                 width={1100}
                 height={630}
                 className="object-center place-content-center"
                 />
                <p className="text-5xl text-white text-left py-5">{game.title || <Skeleton />}</p>
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