import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import axios from "axios"
import { useRouter } from 'next/router'

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
                    <Link href="./free-games">
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

export default function freeGames({ title }) {

    const router = useRouter()

    if (router.isFallback) return <h1>Cargando...</h1>

    return (
        <AppLayout>
            <h1>Free Games Page: {title}</h1>
        </AppLayout>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    const { id } = params

    const res = await axios.post('https://www.epicgames.com/graphql', {
        "query":"query catalogQuery($productNamespace: String!, $offerId: String!, $locale: String, $country: String!, $includeSubItems: Boolean!) {\n  Catalog {\n    catalogOffer(namespace: $productNamespace, id: $offerId, locale: $locale) {\n      title\n      id\n      namespace\n      description\n      effectiveDate\n      expiryDate\n      isCodeRedemptionOnly\n      keyImages {\n        type\n        url\n      }\n      seller {\n        id\n        name\n      }\n      productSlug\n      urlSlug\n      url\n      tags {\n        id\n      }\n      items {\n        id\n        namespace\n      }\n      customAttributes {\n        key\n        value\n      }\n      categories {\n        path\n      }\n      price(country: $country) {\n        totalPrice {\n          discountPrice\n          originalPrice\n          voucherDiscount\n          discount\n          currencyCode\n          currencyInfo {\n            decimals\n          }\n          fmtPrice(locale: $locale) {\n            originalPrice\n            discountPrice\n            intermediatePrice\n          }\n        }\n        lineOffers {\n          appliedRules {\n            id\n            endDate\n            discountSetting {\n              discountType\n            }\n          }\n        }\n      }\n    }\n    offerSubItems(namespace: $productNamespace, id: $offerId) @include(if: $includeSubItems) {\n      namespace\n      id\n      releaseInfo {\n        appId\n        platform\n      }\n    }\n  }\n}\n",
        "variables":{
           "productNamespace":"moose",
           "offerId":{id},
           "locale":"en-US",
           "country":"ES",
           "lineOffers":[
              {
                 "offerId":{id},
                 "quantity":1
              }
           ],
           "calculateTax":false,
           "includeSubItems":true
        }
     })
     .then(function (request) {
        console.log(request);
      })
      .catch(function (error) {
        console.log(error)
      })
    const data = await res.data
    console.log(JSON.stringify(data.data.Catalog.catalogOffer.title))
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {title: data.data.Catalog.catalogOffer.title} // will be passed to the page component as props
    }
  }