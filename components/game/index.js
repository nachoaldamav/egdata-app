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
import Countdown from 'react-countdown'
import PriceGraph from '../priceGraph'
import Tooltip from '../Tooltip'
import axios from 'axios'
import { updateLocale } from 'moment'

export default function Game({ id, metadata }) {

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
        <AppLayout><p className="text-5xl text-white text-center py-5">Failed to load</p></AppLayout>
    )

    const disqusShortname = "egs-data"
    const disqusConfig = {
        url: game.website_url, // url
        identifier: game.id, // Single post id
        title: game.title // Single post title
    }

    const galleryImages = game.galleryImages.map((image) =>
        <div className="">
            {image != null &&
            <Image
                src={image || '/egs_logo.png'}
                width={1920}
                height={1080}
                layout="intrinsic"
                className=""
            />
            }
        </div>
    );

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return "";
        } else {
          // Render a countdown
          return <span>{days} {days != 1 ? "days" : "day"} {hours}:{minutes}:{seconds}</span>;
        }
      };
    
    const firebase = "https://epicstore-2a6cc.firebaseio.com/"
    const url = `https://epicstore-2a6cc.firebaseio.com/${game.id}.json`

    axios.get(url)
    .then((response) => {
        axios.put(url, {
        counter: response.data.counter + 1
    })})
    .catch((error) => {
        axios.put(url, {
            counter: 0
        })
    })

    return (
        <AppLayout>
            <style jsx>{`
                .sub_menu {
                    background: #111827;
                    position: sticky;
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    z-index: 999;
                }
            `}
            </style>

            <div className="container mx-auto px-6 py-2 content-center items-center">
                <div className="grid md:grid-cols-2 py-8 sub_menu"> 
                    <div className="text-white text-base"><Link href="/"><a className="transition duration-500 ease-in-out opacity-70 transform hover:opacity-100">Return to Home</a></Link> - <strong>{game.title || <Skeleton />}</strong></div>
                    <div></div>
                </div>
                <div className="hero container max-w-screen-lg mx-auto">
                    <Image
                    src={game.DieselStoreFrontWide || game.OfferImageWide || '/img/egs-placeholder.png'}
                    width={1100}
                    height={630}
                    className="mx-auto"
                    />
                 </div>
                
                <div className="flex flex-col md:flex-row">
                    <div className="px-6 md:w-3/6">
                        <p className="text-5xl text-white text-left py-5">{game.title || <Skeleton />}</p>
                    </div>
                    <div className="px-6 md:w-3/6 object-right text-right">
                    <div className="text-gray-200 text-base p-4">
                        {game.discount > 0 &&
                                <div className="text-gray-500 text-base font-sans inline">
                                    <span className="tracking-wider leading-relaxed text-xs p-1 bg-blue-500 font-medium rounded-md no-underline text-white">-{game.discountPercentage}%</span>
                                    <div className="inline"> </div>
                                    <div className="line-through inline">{game.originalPrice}</div>
                                </div>
                            }
                                <div className="text-gray-100 text-base inline"> {game.currentPrice}</div>
                        </div>
                        <div className="inline-flex rounded-md shadow">
                            <Link href={game.productSlug}>
                                <a target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-indigo-700">
                                    Buy now
                                </a>
                            </Link>
                        </div>
                        {game.currentPrice != "Coming Soon..." &&
                        <div className="inline-flex px-2 rounded-md shadow">
                            <Link href={`https://www.epicgames.com/store/purchase?namespace=${game.namespace}&showNavigation=true&highlightColor=0078f2&offers=${game._id}#/purchase/verify?_k=mshm8g`}>
                                <a target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:border-indigo-700">
                                    Direct Buy
                                </a>
                            </Link>
                        </div>
                        }
                    </div>
                </div>
                <div className="container mx-auto md:px-16 text-base text-white text-left py-5">
                    <ReactMarkdown className="text-2xl" plugins={[gfm]} children={game.title} />
                    <ReactMarkdown className="game_description" plugins={[gfm]} children={game._description}/>
                    
                    <br/>
                    <hr />
                    <br/>
                    <div className="grid grid-flow-row grid-cols-2 max-w-4xl mx-auto py-4 gap-4">
                        {galleryImages}
                    </div>
                    {game.available === "true" &&
                        <PriceGraph id={game.id} />
                    }
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
                {game.available === "false" &&
                    <div className="container max-w-2xl py-5 text-white">
                        <p className="text-white text-xl"><strong>This game has not been released yet, </strong> reviews will open 1 day after the release</p>
                        <div className="text-center text-2xl">
                        <Countdown date={game.releaseDate} renderer={renderer} />
                        </div>
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
    const { data, error } = useSWR(`https://api.egdata.app/game.php?title=${id}`, fetcher)
    return {
      game: data,
      isLoading: !error && !data,
      isError: error
    }
  }
