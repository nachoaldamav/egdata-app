import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import axios from "axios"

export default function Product(context) {

  const router = useRouter()
  const { id } = router.query

    if (router.isFallback) return <h1>Cargando...</h1>

    return (
        <AppLayout>
            <p className="text-white text-xl">{id}</p>
        </AppLayout>
    )
}