import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import useSWR from 'swr'
import Skeleton from '@material-ui/lab/Skeleton'
import axios from 'axios'

export default function GameCard({ id }) {


    const { data, error } = axios.get(`https://raw.githubusercontent.com/srdrabx/items-tracker/master/database/items/${id}`)
    .then((res) => {
        return {
            data: res,
            isLoading: !error && !data,
            isError: error
          }
    })
    .catch((err) => {
        console.error(err)
    })

    return (
        <>
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
            <div key={data.id} id={data.id} className='rounded-md pl-2 pr-2 game_card'>
                        {data.title}
                </div>
        </>
    )
}