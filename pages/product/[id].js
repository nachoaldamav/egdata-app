import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../../components/AppLayout'
import Link from "next/link"
import { useRouter } from 'next/router'
import axios from "axios"

export default function Product({ title }) {

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
           "productNamespace":"7015c51a49be4592b5ba3ae2577723c5",
           "offerId":"7015c51a49be4592b5ba3ae2577723c5",
           "locale":"en-US",
           "country":"ES",
           "lineOffers":[
              {
                 "offerId":"7015c51a49be4592b5ba3ae2577723c5",
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