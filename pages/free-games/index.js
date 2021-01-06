import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import React, { useEffect } from "react";
import { askNotification } from '../../firebase/firebaseConfig'
import { DateTime } from 'luxon'
import Countdown, { zeroPad } from 'react-countdown'

export function Banner() {
    return (
            <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-7 px-4 sm:px-6 lg:py-7 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Do you want to know the new free games</span>
                <span className="block text-indigo-600"> before anyone else?</span>
                </h2>
                <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <Link href="/free-games">
                    <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Get started
                    </a>
                    </Link>
                </div>
                </div>
            </div>
            </div>
    )
}

export default function freeGames({ data }) {

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p className="bg-blue-600 text-white text-center p-0 rounded-b-md -top-2"><span>Free now!</span></p>;
    } else {
      // Render a countdown
      return <p className="bg-green-700 text-white text-center p-0 rounded-b-md -top-2"><span>{days} {days != 1 ? "days" : "day"} {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span></p>;
    }
  };

  useEffect(() => {
    askNotification();
  }, []);

  return(
    <AppLayout>
      <Head>
        <title>Epic Games Data | Free Games</title>
      </Head>
      <div className="flex flex-wrap container mx-auto px-20">
      <p className="text-5xl text-white text-left py-5">Free Games</p>
        <div className="flex flex-row-reverse flex-wrap md:flex-nowrap py-8">
          {data.map(({ title, id, VaultClosed, DieselStoreFrontWide, currentPrice, productSlug, seller, discount, originalPrice, discountPercentage, namespace, slug, endDate, startDate, available }) => (
            <div key={id}>
            {endDate != "" &&
            <Link
            href={productSlug}>
            <a target="_blank">
            <div className="rounded-md pl-2 pr-2">
              <Image
                src={DieselStoreFrontWide || VaultClosed || '/egs_logo.png' }
                alt={title}
                width={670}
                height={376}
                className='w-full rounded-md absolute transition duration-500 ease-in-out opacity-70 transform hover:opacity-100 py-0' />
                  <Countdown date={startDate} zeroPadTime={2} renderer={renderer} />
              <div>

              </div>
              <div className="px-2 py-2">
                  <div className="font-bold text-gray-50 text-base mb-2 game_title">{title}</div>
                  <div className="text-gray-100 text-base inline">{available === "true" && <span>{DateTime.fromISO(startDate).setLocale('en').toLocaleString({ month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })} - {DateTime.fromISO(endDate).setLocale('en').toLocaleString({ month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</span>}{available === "false" && <span> Free now - {DateTime.fromISO(endDate).setLocale('en').toLocaleString({ month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</span>}</div>
              </div>
            </div>
            </a>
            </Link>
            }
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.egdata.app/free-api.php`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}