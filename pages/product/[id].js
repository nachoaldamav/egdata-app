import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Game from '../../components/game'
import { useRouter } from "next/router"
import AppLayout from '../../components/AppLayout'
import Skeleton from '@material-ui/lab/Skeleton'

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: []
      }
}

export async function getStaticProps(context) {
    const { params } = context
    const { id } = params

    const res = await fetch(`https://api.egdata.app/game.php?title=${id}`)
    const metadata = await res.json()
  
    return {
      props: {
          metadata
      }
    }
  }

  export default function Product({ metadata }) {
    
    const router = useRouter()

    if (router.isFallback) return (
        <AppLayout>
            <div className="container mx-auto px-6 py-2 content-center items-center">
                <Skeleton className="mx-auto" variant="rect" width="75%" height={630} animation="wave" />
                <br />
                <Skeleton variant="text" width="25%" animation="wave" />
            </div>
        </AppLayout>
    )

    return (
    <>
            <Head>
                <title>{metadata.title} | Epic Games Data</title>

                <meta property="og:title" content={`${metadata.title} | Epic Games Data`} key="og:title" />
                <meta property="og:description" content={metadata._title} key="og:description" />
                <meta property="og:image" content={metadata.DieselStoreFrontWide || metadata.OfferImageWide || '/img/egs-placeholder.png'} key="og:image" />
                <meta property="og:url" content={`https://egdata.app/product/${metadata.slug}`} />

                <meta name="twitter:title" content={`${metadata.title} | Epic Games Data`} />
                <meta name="twitter:description" content={metadata._title} />
                <meta name="twitter:image" content={metadata.DieselStoreFrontWide || metadata.OfferImageWide || '/img/egs-placeholder.png'} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Game />
    </>
    )
}