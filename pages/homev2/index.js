import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import {Banner} from "../../pages/free-games"
import useSWR from 'swr'
import Skeleton from '@material-ui/lab/Skeleton'
import GameCard from '../../components/gameCardv2'


const loading = false

export default function Game({ name }) {
    const { api, isLoading, isError } = useApi(name)
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

    return (
        <AppLayout>
        <div className="bg-gray-900">
            <Head>
                <title>Epic Games Data</title>
                <link rel="manifest" href="/manifest.json" />
                <meta name = "apple-mobile-web-app-capable" content="yes" />
                <meta name = "apple-mobile-web-app-status-bar-style" content="black" />
                <meta name = "apple-mobile-web-app-title" content="EGS Data" />
                <link rel="apple-touch-icon" href="/public/logo-icon-144x144.png" />
                <link rel="apple-touch-startup-icon" href="/public/logo-icon-144x144.png" />
            </Head>

            <style jsx>{`
                .true {
                    text-decoration: line-through;
                }
                .card {
                    border-radius: 4px;
                }
                .game_title {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display: block;
                    width: 230px;
                }
                .game_card {
                    padding-top: 15px;
                }
                #engines {
                    visibility: hidden!important;
                }
            `}
            </style>

            <Banner/>
            <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
                {api.map(({ name }) => (
                    <GameCard id={name}/>
                ))}
            </div>
        </div>
        </AppLayout>
    )
}

function useApi (context) {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`https://api.github.com/repos/srdrabx/items-tracker/contents/database/items`, fetcher)
    return {
      api: data,
      isLoading: !error && !data,
      isError: error
    }
  }
