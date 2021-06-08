import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Game from '../../components/game'
import { useRouter } from "next/router"
import AppLayout from '../../components/AppLayout'
import Skeleton from '@material-ui/lab/Skeleton'
import axios from 'axios'


function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

export async function getStaticPaths() {
    var data = await JSON.stringify({
        "query": "query searchStoreQuery($allowCountries: String, $category: String, $count: Int, $country: String!, $keywords: String, $locale: String, $namespace: String, $itemNs: String, $sortBy: String, $sortDir: String, $start: Int, $tag: String, $releaseDate: String, $withPrice: Boolean = false, $withPromotions: Boolean = false, $priceRange: String, $freeGame: Boolean, $onSale: Boolean, $effectiveDate: String) {\n  Catalog {\n    searchStore(\n      allowCountries: $allowCountries\n      category: $category\n      count: $count\n      country: $country\n      keywords: $keywords\n      locale: $locale\n      namespace: $namespace\n      itemNs: $itemNs\n      sortBy: $sortBy\n      sortDir: $sortDir\n      releaseDate: $releaseDate\n      start: $start\n      tag: $tag\n      priceRange: $priceRange\n      freeGame: $freeGame\n      onSale: $onSale\n      effectiveDate: $effectiveDate\n    ) {\n      elements {\n        title\n        id\n        namespace\n        description\n        effectiveDate\n        keyImages {\n          type\n          url\n        }\n        currentPrice\n        seller {\n          id\n          name\n        }\n        productSlug\n        urlSlug\n        url\n        tags {\n          id\n        }\n        items {\n          id\n          namespace\n        }\n        customAttributes {\n          key\n          value\n        }\n        categories {\n          path\n        }\n        price(country: $country) @include(if: $withPrice) {\n          totalPrice {\n            discountPrice\n            originalPrice\n            voucherDiscount\n            discount\n            currencyCode\n            currencyInfo {\n              decimals\n            }\n            fmtPrice(locale: $locale) {\n              originalPrice\n              discountPrice\n              intermediatePrice\n            }\n          }\n          lineOffers {\n            appliedRules {\n              id\n              endDate\n              discountSetting {\n                discountType\n              }\n            }\n          }\n        }\n        promotions(category: $category) @include(if: $withPromotions) {\n          promotionalOffers {\n            promotionalOffers {\n              startDate\n              endDate\n              discountSetting {\n                discountType\n                discountPercentage\n              }\n            }\n          }\n          upcomingPromotionalOffers {\n            promotionalOffers {\n              startDate\n              endDate\n              discountSetting {\n                discountType\n                discountPercentage\n              }\n            }\n          }\n        }\n      }\n      paging {\n        count\n        total\n      }\n    }\n  }\n}\n",
        "variables": {
          "category": "games/edition/base",
          "count": 20,
          "country": "US",
          "keywords": "",
          "locale": "en-US",
          "sortDir": "DESC",
          "allowCountries": "US",
          "start": 0,
          "tag": "",
          "withMapping": false,
          "withPrice": true
        }
      });
      
      var config = {
        method: 'post',
        url: 'https://www.epicgames.com/graphql',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      const games = await axios(config)
      .then(function (response) {
        return response.data.data.Catalog.searchStore
      })
      .catch(function (error) {
        console.log(error);
      });
    let gamesSlug = [];
    await games.elements.forEach(element => {
        const createParams = { params: { id: element.productSlug.replace('/home', '') } }
        gamesSlug.push(createParams)
    });
    const result = await removeItemOnce(gamesSlug, '/product/gamedec')
    
    return {
        fallback: true,
        paths: result
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
                <title>{metadata.title || 'Game not found'} | Epic Games Data</title>

                <meta property="og:title" content={`${metadata.title || 'Game not found'} | Epic Games Data`} key="og:title" />
                <meta property="og:description" content={metadata._title || 'Game not found'} key="og:description" />
                <meta property="og:image" content={metadata.DieselStoreFrontWide || metadata.OfferImageWide || '/img/egs-placeholder.png'} key="og:image" />
                <meta property="og:url" content={`https://egdata.app/product/${metadata.slug || '404'}`} />

                <meta name="twitter:title" content={`${metadata.title || 'Game not found'} | Epic Games Data`} />
                <meta name="twitter:description" content={metadata._title || 'Game not found'} />
                <meta name="twitter:image" content={metadata.DieselStoreFrontWide || metadata.OfferImageWide || '/img/egs-placeholder.png'} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Game />
    </>
    )
}