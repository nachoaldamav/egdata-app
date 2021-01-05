import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Game from './game'

export default function Product({ metadata }) {
    return (
    <>
            <Head>
                <title>{metadata.title} | Epic Games Data</title>

                <meta property="og:title" content={`${metadata.title} | Epic Games Data`} />
                <meta property="og:description" content={metadata._title} />
                <meta property="og:image" content={metadata.DieselStoreFrontWide || metadata.OfferImageWide || '/img/egs-placeholder.png'} />
                <meta property="og:url" content={`https://egdata.app/product/${metadata.slug}`} />

                <meta name="twitter:title" content={`${metadata.title} | Epic Games Data`} />
                <meta name="twitter:description" content={metadata._title} />
                <meta name="twitter:image" content={metadata.DieselStoreFrontWide || metadata.OfferImageWide || '/img/egs-placeholder.png'} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <NextSeo  
                title={`${metadata.title} | Epic Games Data`}
                description={metadata._title}
                canonical={`https://egdata.app/product/${metadata.slug}`}
                openGraph={{
                    title: metadata.title,
                    description: metadata._title,
                    images: [
                    {
                        url: metadata.DieselStoreFrontWide || metadata.OfferImageWide || '/img/egs-placeholder.png',
                        width: 800,
                        height: 600,
                        alt: metadata.title,
                    },
                    ],
                    site_name: 'EGData',
                }}
                twitter={{
                    site: '@EpicGamesData',
                    cardType: 'summary_large_image',
                }}
            />
            <Game />
    </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
          { params: { id: 'oddworld-soulstorm' } },
          { params: { id: 'cyberpunk-2077' } }
        ],
        fallback: true
      }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.egdata.app/game.php?title=${params.id}`)
    const metadata = await res.json()
  
    if (!metadata) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { metadata },
    }
  }