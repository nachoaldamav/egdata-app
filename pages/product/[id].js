import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function Product(context) {
    const { data, error } = useSWR('https://api.trackstats.app/game.php', fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const router = useRouter()
    const { id } = router.query

        if (router.isFallback) return <h1>Cargando...</h1>

        return (
            <AppLayout>
                <p className="text-white text-xl">{data.title}</p>
            </AppLayout>
        )
}