import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function Game({ id }) {

    const { game, isLoading, isError } = useGame(id)
    if (isLoading) return (
        <AppLayout><p className="text-5xl text-white text-left py-5">Loading...</p></AppLayout>
    )
    if (isError) return (
        <AppLayout><p className="text-5xl text-white text-left py-5">Failed to load</p></AppLayout>
    )

    return (
        <AppLayout>
            <Head>
                <title>Epic Games Data | {game.title}</title>
            </Head>
            <p className="text-5xl text-white text-left py-5">{game.title}</p>
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