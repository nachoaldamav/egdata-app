import useSWR from 'swr'
import axios from 'axios'
import AppLayout from '../../components/AppLayout'
import ImageCard from '../../components/imageCard'
import GameLink from '../../components/GameLink'
import Link from "next/link"
import Countdown, { zeroPad } from 'react-countdown'
import { TwitchEmbed } from 'react-twitch-embed'
import Head from 'next/head'

let options = {
    data: {
        query: "query collectionLayoutQuery($locale: String, $country: String!, $slug: String) {\n  Storefront {\n    collectionLayout(locale: $locale, slug: $slug) {\n      _activeDate\n      _locale\n      _metaTags\n      _slug\n      _title\n      _urlPattern\n      lastModified\n      regionBlock\n      affiliateId\n      takeover {\n        banner {\n          altText\n          src\n        }\n        description\n        eyebrow\n        title\n      }\n      seo {\n        title\n        description\n        keywords\n        image {\n          src\n          altText\n        }\n        twitter {\n          title\n          description\n        }\n        og {\n          title\n          description\n          image {\n            src\n            alt\n          }\n        }\n      }\n      collectionOffers {\n        title\n        id\n        namespace\n        description\n        effectiveDate\n        keyImages {\n          type\n          url\n        }\n        seller {\n          id\n          name\n        }\n        productSlug\n        urlSlug\n        url\n        items {\n          id\n          namespace\n        }\n        customAttributes {\n          key\n          value\n        }\n        categories {\n          path\n        }\n        linkedOfferId\n        linkedOffer {\n          effectiveDate\n          customAttributes {\n            key\n            value\n          }\n        }\n        price(country: $country) {\n          totalPrice {\n            discountPrice\n            originalPrice\n            voucherDiscount\n            discount\n            fmtPrice(locale: $locale) {\n              originalPrice\n              discountPrice\n              intermediatePrice\n            }\n          }\n          lineOffers {\n            appliedRules {\n              id\n              endDate\n            }\n          }\n        }\n      }\n      pageTheme {\n        preferredMode\n        light {\n          theme\n          accent\n        }\n        dark {\n          theme\n          accent\n        }\n      }\n    }\n  }\n}\n",
        variables:{
           locale: "en-US",
           slug: "top-sellers-top-20",
           country: "US"
        }
     }
}

let variables = {
                    locale: "en-US",
                    slug: "top-sellers-top-20",
                    country: "US"
                }

const fetcher = url => axios.get(url).then(res => res.data)

export default function ShowCase2021() {
    const { data, error } = useSWR('https://epic-api.trackstats.workers.dev/', fetcher)

        if (error) return <AppLayout><h1 className="text-5xl text-white text-left px-20 py-5">Failed to load</h1></AppLayout>
        if (!data) return (<AppLayout>
            <Head>
                <title>Showcase sale 2021 |Epic Games Data</title>
                <meta property="og:title" content="Showcase sale 2021 |Epic Games Data" key="og:title" />
                <meta property="og:description" content="Stick around for the Showcase Sale and save up to 75% off select titles." key="og:description" />
                <meta property="og:image" content="https://i.imgur.com/N0wVb15.jpg" key="og:image" />
                <meta property="og:url" content="https://egdata.app/free-games" />

                <meta name="twitter:title" content="Showcase sale 2021 |Epic Games Data" />
                <meta name="twitter:description" content="Stick around for the Showcase Sale and save up to 75% off select titles." />
                <meta name="twitter:image" content="https://i.imgur.com/N0wVb15.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
                                <h1 className="text-5xl text-white text-left px-20 py-5">loading...</h1>
                            </AppLayout>)

        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              // Render a completed state
              return (
                <div>
                     <TwitchEmbed className="container mx-auto justify-items-stretch place-items-center place-content-center"
                        channel="epicgames"
                        id="epicgames"
                        theme="dark"
                        muted
                        onVideoPause={() => console.log(':(')}
                    />
                </div>
                );
            } else {
              // Render a countdown
              return <p className="text-white text-4xl text-center p-0">The event starts in <span>{days} {days != 1 ? "days" : "day"} {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span></p>;
            }
          };


    return (
        <AppLayout>
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
            <p className="text-5xl text-white text-left px-20 py-5">The Showcase sale 2021</p>
            <p className="text-xl text-white text-left px-20 py-2">Stick around for the Showcase Sale and save up to 75% off select titles.</p>

            <Countdown date="02 11 2021 19:00:00 GMT+0000" zeroPadTime={2} renderer={renderer} />

            <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
                {data.data.Catalog.searchStore.elements.map(({ id, title, keyImages, customAttributes, urlSlug, price }) => (
                <div key={id} id={id} className='rounded-md pl-2 pr-2 game_card'>
                    <GameLink customAttributes={customAttributes} >
                        <a>
                        <ImageCard keyImages={keyImages} title={title} id={id}/>
                        <div className="px-2 py-2">
                            <div className="font-bold text-gray-50 text-base mb-2 game_title">{title}</div>
                            <div className="text-gray-200 text-base">
                            {price.totalPrice.discount > 0 &&
                                <div className="text-gray-500 text-base inline font-sans">
                                    <span className="tracking-wider leading-relaxed text-xs p-1 bg-blue-500 font-medium rounded-md no-underline text-white">-{Math.round(price.totalPrice.discount * 100 / price.totalPrice.originalPrice)}%</span>
                                    <div className="inline"> </div>
                                    <div className="line-through inline">{price.totalPrice.fmtPrice.originalPrice}</div>
                                </div>
                            }
                                <div className="text-gray-100 text-base inline"> {price.totalPrice.fmtPrice.discountPrice}</div>
                            </div>
                        </div>
                        </a>
                    </GameLink>
                </div>
                ))}
            </div>
        </AppLayout>
    )
}