import useSWR from 'swr'
import axios from 'axios'
import AppLayout from '../../components/AppLayout'
import ImageCard from '../../components/imageCard'
import GameLink from '../../components/GameLink'
import Link from "next/link"

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

export default function TrendingGames() {
    const { data, error } = useSWR('https://egs-api.trackstats.workers.dev/', fetcher)

        if (error) return <AppLayout><h1 className="text-5xl text-white text-left px-20 py-5">Failed to load</h1></AppLayout>
        if (!data) return <AppLayout><h1 className="text-5xl text-white text-left px-20 py-5">loading...</h1></AppLayout>


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
            <p className="text-5xl text-white text-left px-20 py-5">Top Sellers - Top 20</p>
            <div className="flex flex-wrap container mx-auto px-11 justify-items-stretch place-items-center place-content-center">
                {data.data.Storefront.collectionLayout.collectionOffers.map(({ id, title, keyImages, customAttributes, urlSlug }) => (
                <div key={id} id={id} className='rounded-md pl-2 pr-2 game_card'>
                    <GameLink customAttributes={customAttributes} >
                        <a>
                        <ImageCard keyImages={keyImages} title={title} id={id}/>
                        <h1 key={id} className="font-bold text-gray-50 text-base mb-2 game_title">{title}</h1>
                        </a>
                    </GameLink>
                </div>
                ))}
            </div>
        </AppLayout>
    )
}