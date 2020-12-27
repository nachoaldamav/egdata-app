import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Skeleton from '@material-ui/lab/Skeleton'
import {DiscussionEmbed} from 'disqus-react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


export default function Game({ id }) {


    const { game, isLoading, isError } = useGame(id)
    if (isLoading) return (
        <AppLayout>
            <div className="container mx-auto px-6 py-2 content-center items-center">
                <Skeleton className="mx-auto" variant="rect" width="75%" height={630} animation="wave" />
                <br />
                <Skeleton variant="text" width="25%" animation="wave" />
            </div>
        </AppLayout>
    )
    if (isError) return (
        <AppLayout><p className="text-5xl text-white text-left py-5">Failed to load</p></AppLayout>
    )

    const disqusShortname = "egs-data"
    const disqusConfig = {
        url: game.website_url, // url
        identifier: game.id, // Single post id
        title: game.title // Single post title
    }

    return (
        <AppLayout>
            <style jsx>{`
                
            `}
            </style>
            <Head>
                <title>{game.title} | Epic Games Data</title>
            </Head>
            <div className="container mx-auto px-6 py-2 content-center items-center">
                <div className="hero container max-w-screen-lg mx-auto">
                    <Image
                    src={game.DieselStoreFrontWide || game.OfferImageWide || <Skeleton />}
                    width={1100}
                    height={630}
                    className="mx-auto"
                    />
                 </div>
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
                <div className="container mx-auto md:px-16 text-base text-white text-left py-5 game_description">
                    <ReactMarkdown className="text-2xl" plugins={[gfm]} children={game._title} />
                    <ReactMarkdown className="game_description" plugins={[gfm]} children={game._description}/>
                </div>
                {game.available === "true" &&
                    <div className="container max-w-2xl py-10">
                    <DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                        width={420}
                        height={320}
                    />
                    </div>
                }
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