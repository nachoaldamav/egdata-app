import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function Product(context) {
    const { data, error } = useSWR('https://api.trackstats.app/game.php', fetch)

    if (error) return (
        <AppLayout><p className="text-5xl text-white text-left py-5">Failed to load</p></AppLayout>
    )
    if (!data) return (
        <AppLayout><p className="text-5xl text-white text-left py-5">Loading...</p></AppLayout>
    )

    const router = useRouter()
    const { id } = router.query

        if (router.isFallback) return (
            <AppLayout><p className="text-5xl text-white text-left py-5">Loading...</p></AppLayout>
        )

        return (
            <AppLayout>
                <p className="text-white text-xl">{data.title}</p>
            </AppLayout>
        )
}