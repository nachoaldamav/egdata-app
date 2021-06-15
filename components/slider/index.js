import React, { Component } from "react"
import Slider from "react-slick"
import Link from "next/link"
import { ArrowRight } from "iconoir-react"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"

export default function CarouselSlider(props) {
  const data = trending.slice(-5)

  return <h1>Slider</h1>
}

export function Slide() {
  return (
    <Carousel autoPlay>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Carousel>
  )
}

function getImage(images, imageText) {
  const image = images.find((images) => images.type === imageText)
  const { type, url } = image
  return url
}

const cssstyle = `
.slider {
  margin: 0 auto;
  padding-bottom: 10px;
}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #fff;
}
.bgWrap {
  position: fixed;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
}

.bgText {
  margin: 0;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  padding-top: 40vh;
  text-shadow: 1px 1px 1px #3c5c5e;
}
`
const trending = [
  {
    title: "NBA 2K21",
    id: "e31321db733a40d29cc0640b524dfa00",
    namespace: "6b3b9698082c43cd9dcd7f68e3365e79",
    description: "NBA 2K21",
    effectiveDate: "2021-05-20T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S1_2560x1440-82b12f8e006bdfe848ed548fa9d51a4a",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S2_1200x1600-2fed3198782328f4f59194ebd5e54680",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S2_1200x1600-2fed3198782328f4f59194ebd5e54680",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S2_1200x1600-2fed3198782328f4f59194ebd5e54680",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S2_1200x1600-2fed3198782328f4f59194ebd5e54680",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_NBA2K21_VisualConcepts_S1_2560x1440-82b12f8e006bdfe848ed548fa9d51a4a",
      },
    ],
    seller: {
      id: "o-37m6jbj5wcvrcvm4wusv7nazdfvbjk",
      name: "2K Games, Inc.",
    },
    productSlug: "nba-2k21",
    urlSlug: "nba-2k21",
    url: null,
    items: [
      {
        id: "6c50c498be0f441aa0ad754e33053bd1",
        namespace: "6b3b9698082c43cd9dcd7f68e3365e79",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CU,IR,SY,VE",
      },
      {
        key: "publisherName",
        value: "2K",
      },
      {
        key: "developerName",
        value: "Visual Concepts",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "nba-2k21",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1559,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 4440,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$15.59",
          intermediatePrice: "$15.59",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "1305abe5eefb4925895035ae86a94dc3",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Chivalry 2",
    id: "79e93c9a70b14b1cba2c8c9b45a1c36b",
    namespace: "bd46d4ce259349e5bd8b3ded20274737",
    description: "Chivalry 2",
    effectiveDate: "2021-06-08T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Chivalry2_TornBannerStudios_S2_1200x1600-85fa89b6c28dda3367d4fa4dc538259d",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Chivalry2_TornBannerStudios_S1_2560x1440-df45c1788036abf73c14f324f7f15d34",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Chivalry2_TornBannerStudios_S2_1200x1600-85fa89b6c28dda3367d4fa4dc538259d",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Chivalry2_TornBannerStudios_S2_1200x1600-85fa89b6c28dda3367d4fa4dc538259d",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Chivalry2_TornBannerStudios_S2_1200x1600-85fa89b6c28dda3367d4fa4dc538259d",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Chivalry2_TornBannerStudios_S1_2560x1440-df45c1788036abf73c14f324f7f15d34",
      },
    ],
    seller: {
      id: "o-2baznhy8tfh7fmyb55ul656v7ggt7r",
      name: "Tripwire Interactive",
    },
    productSlug: "chivalry-2",
    urlSlug: "chivalry2",
    url: null,
    items: [
      {
        id: "daad36f10acf4ff4ba663584ad0a3d9c",
        namespace: "bd46d4ce259349e5bd8b3ded20274737",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "{}",
      },
      {
        key: "publisherName",
        value: "Tripwire Interactive",
      },
      {
        key: "developerName",
        value: "Torn Banner Studios",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "chivalry-2",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 3999,
        originalPrice: 3999,
        voucherDiscount: 0,
        discount: 0,
        fmtPrice: {
          originalPrice: "$39.99",
          discountPrice: "$39.99",
          intermediatePrice: "$39.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [],
        },
      ],
    },
  },
  {
    title: "Red Dead Redemption 2",
    id: "a3c78a5c62824677834c1008e0be9b2d",
    namespace: "b30b6d1b4dfd4dcc93b5490be5e094e5",
    description: "Red Dead Redemption 2",
    effectiveDate: "2019-11-04T05:00:00.000Z",
    keyImages: [
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_2560x1440-2560x1440-473f1475daed7424ce5a56d90b56ab68.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/CodeRedemption_RedDead2-340x440-bbedae852bbd73b7bc6dccb21df166b6.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/CodeRedemption_RedDead2-340x440-bbedae852bbd73b7bc6dccb21df166b6.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
      },
    ],
    seller: {
      id: "o-dhz7kpvrvqngzdpnx5vn3jrljj53ca",
      name: "Rockstar Games",
    },
    productSlug: "red-dead-redemption-2",
    urlSlug: "heathergeneralaudience",
    url: null,
    items: [
      {
        id: "1f562a66ac554a40a33e291fc191ea60",
        namespace: "b30b6d1b4dfd4dcc93b5490be5e094e5",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "{}",
      },
      {
        key: "developerName",
        value: "Rockstar Games",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "red-dead-redemption-2",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 4019,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 1980,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$40.19",
          intermediatePrice: "$40.19",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "497fd9d6351346d0a63149316478800c",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Grand Theft Auto V: Premium Edition",
    id: "954871df36d3456ca1face43aa5c2e62",
    namespace: "0584d2013f0149a791e7b9bad0eec102",
    description: "Grand Theft Auto V: Premium Edition , gtav, gta5",
    effectiveDate: "2020-05-14T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg",
      },
      {
        type: "ESRB",
        url: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/Diesel_productv2_grand-theft-auto-v_home_GTAV_EGS_Artwork_1000x200_ESRB-1000x200-995c56b26d2fd05efdeb9b8e3377700a3f6ba224-1000x200-326c1cad00820a1e642def71677df201.png",
      },
    ],
    seller: {
      id: "o-dhz7kpvrvqngzdpnx5vn3jrljj53ca",
      name: "Rockstar Games",
    },
    productSlug: "grand-theft-auto-v",
    urlSlug: "grand-theft-auto-v-premium-edition",
    url: null,
    items: [
      {
        id: "3f56280a0cf64bc2b94a4bdada2ef7c8",
        namespace: "0584d2013f0149a791e7b9bad0eec102",
      },
      {
        id: "d1deea7746654654a69bace466402a74",
        namespace: "0584d2013f0149a791e7b9bad0eec102",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "VE,SA,BH,LB,QA,KW,AE,OM,CU,IR,SY",
      },
      {
        key: "publisherName",
        value: "Rockstar Games",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "grand-theft-auto-v",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1649,
        originalPrice: 2999,
        voucherDiscount: 0,
        discount: 1350,
        fmtPrice: {
          originalPrice: "$29.99",
          discountPrice: "$16.49",
          intermediatePrice: "$16.49",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "b33baff3df934c419e91d577443c26c2",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Assassin's Creed: Valhalla",
    id: "d6b4c22c5360465aaf3d9a0161fad210",
    namespace: "400347196e674de89c23cc2a7f2121db",
    description: "Assassin's Creed: Valhalla",
    effectiveDate: "2020-04-30T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png",
      },
    ],
    seller: {
      id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
      name: "Ubisoft Entertainment",
    },
    productSlug: "assassins-creed-valhalla/home",
    urlSlug: "kingdomgeneralaudience",
    url: null,
    items: [
      {
        id: "11daef13d2654800b04f066ee5e030fb",
        namespace: "400347196e674de89c23cc2a7f2121db",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CN",
      },
      {
        key: "publisherName",
        value: "Ubisoft",
      },
      {
        key: "availableDate",
        value: "1605020400",
      },
      {
        key: "developerName",
        value: "Ubisoft Montreal",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "assassins-creed-valhalla/home",
      },
    ],
    categories: [
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "games",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 4499,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 1500,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$44.99",
          intermediatePrice: "$44.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "9600a782ef9049d89fed4f6fa7a8a991",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Rocket League®",
    id: "02d44be4c21c4ce094c6151133c91482",
    namespace: "9773aa1aa54f4f7b80e44bef04986cea",
    description: "Rocket League ®",
    effectiveDate: "2020-09-23T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/9773aa1aa54f4f7b80e44bef04986cea/offer/EGS_RocketLeague_PsyonixLLC_S2-1200x1600-94b99fd67ae08c9d640f2d228991ae19.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/9773aa1aa54f4f7b80e44bef04986cea/offer/EGS_RocketLeague_PsyonixLLC_S1-2560x1440-e9dc9ecfd5a872841615d15ba04600a6.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/9773aa1aa54f4f7b80e44bef04986cea/offer/EGS_RocketLeague_PsyonixLLC_S2-1200x1600-94b99fd67ae08c9d640f2d228991ae19.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/9773aa1aa54f4f7b80e44bef04986cea/offer/EGS_RocketLeague_PsyonixLLC_S2-1200x1600-94b99fd67ae08c9d640f2d228991ae19.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/9773aa1aa54f4f7b80e44bef04986cea/offer/EGS_RocketLeague_PsyonixLLC_S1-2560x1440-e9dc9ecfd5a872841615d15ba04600a6.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/9773aa1aa54f4f7b80e44bef04986cea/offer/EGS_RocketLeague_PsyonixLLC_S2-1200x1600-94b99fd67ae08c9d640f2d228991ae19.jpg",
      },
    ],
    seller: {
      id: "o-98larctxyhn55kqjq5xjb9wzjl9hf9",
      name: "Psyonix LLC",
    },
    productSlug: "rocket-league",
    urlSlug: "rocket-league",
    url: null,
    items: [
      {
        id: "e5f19442ad29489c8a6e055dd2b6bbb1",
        namespace: "9773aa1aa54f4f7b80e44bef04986cea",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CN,HK,MO,TW,KR",
      },
      {
        key: "developerName",
        value: "Psyonix LLC",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "rocket-league",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 0,
        originalPrice: 0,
        voucherDiscount: 0,
        discount: 0,
        fmtPrice: {
          originalPrice: "0",
          discountPrice: "0",
          intermediatePrice: "0",
        },
      },
      lineOffers: [
        {
          appliedRules: [],
        },
      ],
    },
  },
  {
    title: "Borderlands 3",
    id: "dd845909e1504c048c14499eab60ec62",
    namespace: "catnip",
    description: "Borderlands 3 Standard Edition",
    effectiveDate: "2019-09-12T10:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/catnip/offer/BL3Tall_1200x1440-1200x1440-c1200ae70b5e054025e296746d1987a8.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/catnip/offer/BL3Tall_1200x1440-1200x1440-c1200ae70b5e054025e296746d1987a8.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/catnip/offer/BL3Tall_1200x1440-1200x1440-c1200ae70b5e054025e296746d1987a8.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/catnip/offer/BL3Tall_1200x1440-1200x1440-c1200ae70b5e054025e296746d1987a8.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg",
      },
    ],
    seller: {
      id: "o-37m6jbj5wcvrcvm4wusv7nazdfvbjk",
      name: "2K Games, Inc.",
    },
    productSlug: "borderlands-3",
    urlSlug: "borderlands-3-standard-edition",
    url: null,
    items: [
      {
        id: "c204662afac64acd8a2117590be477da",
        namespace: "catnip",
      },
    ],
    customAttributes: [
      {
        key: "maskEpicPrice",
        value: "true",
      },
      {
        key: "com.epicgames.app.blacklist",
        value: "{}",
      },
      {
        key: "publisherName",
        value: "2K",
      },
      {
        key: "developerName",
        value: "Gearbox Software",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "borderlands-3",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1979,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 4020,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$19.79",
          intermediatePrice: "$19.79",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "ab858df433954476b6fa164faf82f4a6",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "ARK: Survival Evolved",
    id: "16b7c8509ea8427898981145d244316c",
    namespace: "ark",
    description: "ARK: Survival Evolved",
    effectiveDate: "2020-06-11T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S1-2560x1440-c316afb7c33a9dfb892eef6b99169e43.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S1-2560x1440-c316afb7c33a9dfb892eef6b99169e43.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S2-1200x1600-5b58fdefea9f885c7426e894a1034921.jpg",
      },
    ],
    seller: {
      id: "o-usvfbmlqdt678vrp36qvm2d5cz2cpr",
      name: "Studio Wildcard",
    },
    productSlug: "ark",
    urlSlug: "ark-survival-evolved",
    url: null,
    items: [
      {
        id: "84fb5b8e338d49d0aae5977eedf937b3",
        namespace: "ark",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "[]",
      },
      {
        key: "developerName",
        value: "Studio Wildcard",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "ark",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 999,
        originalPrice: 4999,
        voucherDiscount: 0,
        discount: 4000,
        fmtPrice: {
          originalPrice: "$49.99",
          discountPrice: "$9.99",
          intermediatePrice: "$9.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "dee3df3bde9e49a9b5587fcb9d593912",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Death Stranding",
    id: "6f5794f26c28428794657b040243fc4e",
    namespace: "f4a904fcef2447439c35c4e6457f3027",
    description: "Death Stranding",
    effectiveDate: "2020-07-14T13:00:00.000Z",
    keyImages: [
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/EGS_KojimaProductions_DeathStranding_S1-2560x1440-e56d3a322a94fd7dd18b9c93ee080d01.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/EGS_KojimaProductions_DeathStranding_S2-1280x1440-098f41b9ec3aa4489e085ed2110f3818.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_Tall-1280x1440-5a96ed93665756b28f6d70e65266e64c.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_Tall-1280x1440-5a96ed93665756b28f6d70e65266e64c.jpg",
      },
    ],
    seller: {
      id: "o-cul2z53mrw3bxltv63v68rgd4b3w52",
      name: "505 Games",
    },
    productSlug: "death-stranding/home",
    urlSlug: "death-stranding",
    url: null,
    items: [
      {
        id: "091fe2ceda2241a79da66a426458fd23",
        namespace: "f4a904fcef2447439c35c4e6457f3027",
      },
      {
        id: "1fcb039f587d4bacbd31ebb6832e05df",
        namespace: "f4a904fcef2447439c35c4e6457f3027",
      },
    ],
    customAttributes: [
      {
        key: "publisherName",
        value: "505 Games S.r.l.",
      },
      {
        key: "developerName",
        value: "Kojima Productions",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "death-stranding/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 2399,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 3600,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$23.99",
          intermediatePrice: "$23.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "4dbf341706714a01b4ac3aa358753aca",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Cyberpunk 2077",
    id: "5e0277378de542ce9bf891d2f919d6c8",
    namespace: "77f2b98e2cef40c8a7437518bf420e47",
    description: "Cyberpunk 2077",
    effectiveDate: "2020-12-10T00:00:00.000Z",
    keyImages: [
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/CYBERPUNK2077_CodeRedemption-340x440-b3562d895a2f054f83182419bf6ad598.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/CYBERPUNK2077_CodeRedemption-340x440-b3562d895a2f054f83182419bf6ad598.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/EGS_CDPROJEKTRED_CYBERPUNK2077_S3_DESCRIPTION-1280x1440-58949bccc0886694cf24d8c0f153d250-1280x1440-58949bccc0886694cf24d8c0f153d250.jpg",
      },
      {
        type: "DieselGameBoxLogo",
        url: "https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_IC1_MAINLOGO-EN-1920x473-86738e995fb8493ddfc36a83d95d3db3-1920x473-86738e995fb8493ddfc36a83d95d3db3.png",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/Diesel_product_ginger_home_EGS_CDPROJEKTRED_CYBERPUNK2077_S2_DESCRIPTION-2560x1440-8411578303f60188c29f79cdbabcbca938bea5a6-2560x1440-91b7c4749a6d55e56e24bc22166092cb-2560x1440-91b7c4749a6d55e56e24bc22166092cb.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/77f2b98e2cef40c8a7437518bf420e47/offer/EGS_CDPROJEKTRED_CYBERPUNK2077_S3_DESCRIPTION-1280x1440-58949bccc0886694cf24d8c0f153d250-1280x1440-58949bccc0886694cf24d8c0f153d250.jpg",
      },
    ],
    seller: {
      id: "o-x2vdjaf7cfakvlsgz8qf2gx8bkplcc",
      name: "CD PROJEKT RED",
    },
    productSlug: "cyberpunk-2077",
    urlSlug: "cyberpunk",
    url: null,
    items: [
      {
        id: "3f0e402b13894701a037972dfe533506",
        namespace: "77f2b98e2cef40c8a7437518bf420e47",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "{}",
      },
      {
        key: "developerName",
        value: "CD PROJEKT RED",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "cyberpunk-2077",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 4799,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 1200,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$47.99",
          intermediatePrice: "$47.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "9e74392a4e2d4738951cb1b9e4a6323c",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Frostpunk",
    id: "1d43b9f055f846f38413d036f0cc2a04",
    namespace: "be886d9db65047a89b24cd4317695f18",
    description: "Frostpunk",
    effectiveDate: "2021-06-03T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S1_2560x1440-ef2f4d458120af0839dde35b1a022828",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S2_1200x1600-c71dc27cfe505c6c662c49011b36a0c5",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S2_1200x1600-c71dc27cfe505c6c662c49011b36a0c5",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S2_1200x1600-c71dc27cfe505c6c662c49011b36a0c5",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S1_2560x1440-ef2f4d458120af0839dde35b1a022828",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S2_1200x1600-c71dc27cfe505c6c662c49011b36a0c5",
      },
    ],
    seller: {
      id: "o-z8janbuqt5zvnkqwm35kc9wtdzxkhr",
      name: "11 Bit Studios",
    },
    productSlug: "frostpunk",
    urlSlug: "frostpunk",
    url: null,
    items: [
      {
        id: "7082c5ca19f54a0bbb2fc1b100187c93",
        namespace: "be886d9db65047a89b24cd4317695f18",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "[]",
      },
      {
        key: "publisherName",
        value: "11 bit studios",
      },
      {
        key: "developerName",
        value: "11 bit studios",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "frostpunk",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1019,
        originalPrice: 2999,
        voucherDiscount: 0,
        discount: 1980,
        fmtPrice: {
          originalPrice: "$29.99",
          discountPrice: "$10.19",
          intermediatePrice: "$10.19",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "9a9f110b469649b4a36cf1fc7153fb52",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "KINGDOM HEARTS III + Re Mind",
    id: "9636eeea8fb3441eb0272f54551d5aef",
    namespace: "0712176b5e3e49bfa8866c0ee1359f2d",
    description: "KINGDOM HEARTS III + Re Mind",
    effectiveDate: "2021-03-30T13:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S1-2560x1440-5044e506e523e5ff52628d1060699062.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S6-1200x1600-54d8b062dc7488c71874fe2455d6c2bd.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S6-1200x1600-54d8b062dc7488c71874fe2455d6c2bd.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S6-1200x1600-54d8b062dc7488c71874fe2455d6c2bd.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S5-1920x1080-e5a336a9e5cb029432239114ffd2e995.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/0712176b5e3e49bfa8866c0ee1359f2d/offer/EGS_KINGDOMHEARTSIIIReMindDLC_SquareEnix_S6-1200x1600-54d8b062dc7488c71874fe2455d6c2bd.jpg",
      },
    ],
    seller: {
      id: "o-xbmhhs32ajtuszar863dprgnwtvedk",
      name: "Square Enix (Japan)",
    },
    productSlug: "kingdom-hearts-iii",
    urlSlug: "kingdom-hearts-iii",
    url: null,
    items: [
      {
        id: "18399d4ef9a64df2b21fe031c3c9ee92",
        namespace: "0712176b5e3e49bfa8866c0ee1359f2d",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "TW",
      },
      {
        key: "publisherName",
        value: "Square Enix",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "kingdom-hearts-iii",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 4019,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 1980,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$40.19",
          intermediatePrice: "$40.19",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "a21c00d892d6408ab94f7be5fb05c553",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Going Medieval",
    id: "9c78b08562af4ac4bffbdcaaa3020b49",
    namespace: "d469e82d91fe4516a00d6566c3d2f8f7",
    description: "Going Medieval",
    effectiveDate: "2021-06-01T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoingMedieval_FoxyVoxel_S1_2560x1440-68737e31d62a45ca633416f2984b339d",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoingMedieval_FoxyVoxel_S2_1200x1600-2be78fec2b7260f1073859260f8e2e0d",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoingMedieval_FoxyVoxel_S2_1200x1600-2be78fec2b7260f1073859260f8e2e0d",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoingMedieval_FoxyVoxel_S2_1200x1600-2be78fec2b7260f1073859260f8e2e0d",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoingMedieval_FoxyVoxel_S1_2560x1440-68737e31d62a45ca633416f2984b339d",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GoingMedieval_FoxyVoxel_S2_1200x1600-2be78fec2b7260f1073859260f8e2e0d",
      },
    ],
    seller: {
      id: "o-h3rhw2ntexmcgx44cv2pdje5bz3nqh",
      name: "The Irregular Corporation",
    },
    productSlug: "going-medieval",
    urlSlug: "bigoli-general-audience",
    url: null,
    items: [
      {
        id: "2fe162e43ca24c48bc20ed5690d69611",
        namespace: "d469e82d91fe4516a00d6566c3d2f8f7",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "[]",
      },
      {
        key: "publisherName",
        value: "The Irregular Corporation",
      },
      {
        key: "developerName",
        value: "Foxy Voxel",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "going-medieval",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 2249,
        originalPrice: 2499,
        voucherDiscount: 0,
        discount: 250,
        fmtPrice: {
          originalPrice: "$24.99",
          discountPrice: "$22.49",
          intermediatePrice: "$22.49",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "0bc329a7e14843d286fd598f062f4103",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "HITMAN 3",
    id: "78192de994c743ff992456fc70e6cd10",
    namespace: "ed55aa5edc5941de92fd7f64de415793",
    description: "HITMAN 3",
    effectiveDate: "2021-01-20T13:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S1-2560x1440-fe613ea24891cacef30e846e30a00982.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S1-2560x1440-fe613ea24891cacef30e846e30a00982.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg",
      },
    ],
    seller: {
      id: "o-ank8fbh38u9uzqbag2a5yt5xexb4yr",
      name: "IO Interactive",
    },
    productSlug: "hitman-3",
    urlSlug: "hitman-01",
    url: null,
    items: [
      {
        id: "1dea1e39a8044a69b4020845afb4bd97",
        namespace: "ed55aa5edc5941de92fd7f64de415793",
      },
      {
        id: "feeac4b521734f22ae99e8ac55a5f896",
        namespace: "ed55aa5edc5941de92fd7f64de415793",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "[]",
      },
      {
        key: "publisherName",
        value: "IO Interactive",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "hitman-3",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 4499,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 1500,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$44.99",
          intermediatePrice: "$44.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "460e85cd1acc435e8cb34144e6a767ce",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Sid Meier's Civilization VI",
    id: "fe74b3dad04846e5a58f62aebd3858b6",
    namespace: "cd14dcaa4f3443f19f7169a980559c62",
    description: "Sid Meier's Civilization VI",
    effectiveDate: "2020-05-21T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-2fcd1c150ac6d8cdc672ae042d2dd179.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S2-860x1148-bffad83909595b7c5c60489a17056a59.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S2-860x1148-bffad83909595b7c5c60489a17056a59.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S2-860x1148-bffad83909595b7c5c60489a17056a59.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-2fcd1c150ac6d8cdc672ae042d2dd179.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S2-860x1148-bffad83909595b7c5c60489a17056a59.jpg",
      },
      {
        type: "ESRB",
        url: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/ESRB_CivVI-842x485-3746fad17f672cbb87abeb8bfb2f78c2.jpg",
      },
    ],
    seller: {
      id: "o-37m6jbj5wcvrcvm4wusv7nazdfvbjk",
      name: "2K Games, Inc.",
    },
    productSlug: "sid-meiers-civilization-vi",
    urlSlug: "sid-meiers-civilization-vi",
    url: null,
    items: [
      {
        id: "313a52ab4d664e9dad6b545d1fa8500f",
        namespace: "cd14dcaa4f3443f19f7169a980559c62",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CU,IR,SY,VE",
      },
      {
        key: "publisherName",
        value: "2K",
      },
      {
        key: "developerName",
        value: "Firaxis Games",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "sid-meiers-civilization-vi",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1799,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 4200,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$17.99",
          intermediatePrice: "$17.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "9b52468fab7844ebb3ba44415b07fe96",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "KINGDOM HEARTS HD 1.5+2.5 ReMIX",
    id: "6904d1bb60dc41b19b56f459bb57ebf9",
    namespace: "4158b699dd70447a981fee752d970a3e",
    description: "KINGDOM HEARTS HD 1.5+2.5 ReMIX",
    effectiveDate: "2021-03-30T13:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/4158b699dd70447a981fee752d970a3e/offer/EGS_KINGDOMHEARTSHD1525ReMIX_SquareEnix_S5-1920x1080-d4bd9d38aaee5d23b23ef0b04567541f.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/4158b699dd70447a981fee752d970a3e/offer/EGS_KINGDOMHEARTSHD1525ReMIX_SquareEnix_S6-1200x1600-132fc1f63bf40a41cddbff3bab7acc52.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/4158b699dd70447a981fee752d970a3e/offer/EGS_KINGDOMHEARTSHD1525ReMIX_SquareEnix_S6-1200x1600-132fc1f63bf40a41cddbff3bab7acc52.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/4158b699dd70447a981fee752d970a3e/offer/EGS_KINGDOMHEARTSHD1525ReMIX_SquareEnix_S6-1200x1600-132fc1f63bf40a41cddbff3bab7acc52.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/4158b699dd70447a981fee752d970a3e/offer/EGS_KINGDOMHEARTSHD1525ReMIX_SquareEnix_S5-1920x1080-d4bd9d38aaee5d23b23ef0b04567541f.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/4158b699dd70447a981fee752d970a3e/offer/EGS_KINGDOMHEARTSHD1525ReMIX_SquareEnix_S6-1200x1600-132fc1f63bf40a41cddbff3bab7acc52.jpg",
      },
    ],
    seller: {
      id: "o-xbmhhs32ajtuszar863dprgnwtvedk",
      name: "Square Enix (Japan)",
    },
    productSlug: "kingdom-hearts-hd-1-5-2-5-remix",
    urlSlug: "kingdom-hearts-hd-1-5-2-5-remix",
    url: null,
    items: [
      {
        id: "965f70e7a2f245a3b7646a7977c2553e",
        namespace: "4158b699dd70447a981fee752d970a3e",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "TW",
      },
      {
        key: "publisherName",
        value: "Square Enix",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "kingdom-hearts-hd-1-5-2-5-remix",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 3349,
        originalPrice: 4999,
        voucherDiscount: 0,
        discount: 1650,
        fmtPrice: {
          originalPrice: "$49.99",
          discountPrice: "$33.49",
          intermediatePrice: "$33.49",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "0155eaa94bc84088b7e4d563f38e9416",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Immortals: Fenyx Rising",
    id: "e42093ff3c434f618b8f2c50039eaece",
    namespace: "4b35838425c74992ad42e1276b2161ca",
    description: "Immortals: Fenyx Rising - Standard Edition",
    effectiveDate: "2019-06-14T00:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Landscape_2560x1440_UK-2560x1440-4586f116e7b9be1c051793647b3dea3d.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Portrait_1200x1600_UK-1200x1600-160024289fd98b6a67a4dec9fadf9774.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Landscape_2560x1440_UK-2560x1440-4586f116e7b9be1c051793647b3dea3d.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Portrait_1200x1600_UK-1200x1600-160024289fd98b6a67a4dec9fadf9774.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Portrait_1200x1600_UK-1200x1600-160024289fd98b6a67a4dec9fadf9774.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/4b35838425c74992ad42e1276b2161ca/offer/IFR_EPIC_STD_Store_Portrait_1200x1600_UK-1200x1600-160024289fd98b6a67a4dec9fadf9774.jpg",
      },
    ],
    seller: {
      id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
      name: "Ubisoft Entertainment",
    },
    productSlug: "immortals-fenyx-rising/home",
    urlSlug: "immortalsfenyxrisinggeneralaudience",
    url: null,
    items: [
      {
        id: "bdaf567541354a6da53b20e7f28a2ac5",
        namespace: "4b35838425c74992ad42e1276b2161ca",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CN",
      },
      {
        key: "availableDate",
        value: "1607011200",
      },
      {
        key: "developerName",
        value: "Ubisoft",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "immortals-fenyx-rising/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 2999,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 3000,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$29.99",
          intermediatePrice: "$29.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "03dd8a5b611145afb62c0df718fdfd89",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Mechwarrior 5",
    id: "bff1d0022b6f4e409daa3663d67edab0",
    namespace: "b9def67e597b4be7a16146146a044d02",
    description: "MechWarrior 5 Standard Version",
    effectiveDate: "2019-12-09T11:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/mw5-s2-1200x1600_1200x1600-7e62db6ae48fcb403f9182068631df34",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/mw5-s1-2560x1440_2560x1440-8e632e897c65539f1a7b1e45c147726d",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/mw5-s2-1200x1600_1200x1600-7e62db6ae48fcb403f9182068631df34",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/mw5-s2-1200x1600_1200x1600-7e62db6ae48fcb403f9182068631df34",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/mw5-s2-1200x1600_1200x1600-7e62db6ae48fcb403f9182068631df34",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/mw5-s1-2560x1440_2560x1440-8e632e897c65539f1a7b1e45c147726d",
      },
    ],
    seller: {
      id: "o-muad9pj32k67stc4ycpgpplwq84sgq",
      name: "Piranha Games",
    },
    productSlug: "mechwarrior-5/home",
    urlSlug: "hoopoegeneralaudience",
    url: null,
    items: [
      {
        id: "e375d2e93e4b4644929a9776dafff77f",
        namespace: "b9def67e597b4be7a16146146a044d02",
      },
      {
        id: "16d9d0fc7dd049859513ccd7e6f7c8a3",
        namespace: "b9def67e597b4be7a16146146a044d02",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "{}",
      },
      {
        key: "developerName",
        value: "Piranha Games",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "mechwarrior-5/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 2999,
        originalPrice: 2999,
        voucherDiscount: 0,
        discount: 0,
        fmtPrice: {
          originalPrice: "$29.99",
          discountPrice: "$29.99",
          intermediatePrice: "$29.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [],
        },
      ],
    },
  },
  {
    title: "World War Z GOTY",
    id: "e197498aa95c4010965d34f498f64c81",
    namespace: "wombat",
    description: "Wombat GOTY",
    effectiveDate: "2020-05-04T16:00:00.000Z",
    keyImages: [
      {
        type: "ESRB",
        url: "https://cdn1.epicgames.com/wombat/item/Rating_WWZ-842x404-816f6c7f1140d5d08750de13e3d81d9c.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/wombat/offer/WWZ-GOTY-Edition_EpicGames_LibraryImage-2560x1440-53e1efdd69ca0ef55fac60fc2d2f8a5b.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/wombat/offer/WWZ-GOTY-Edition_EpicGames_PortraitImage_860x1148-860x1148-6ad932230150a3580974ba0a719bcdaa.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/wombat/offer/WWZ-GOTY-Edition_EpicGames_PortraitImage_860x1148-860x1148-6ad932230150a3580974ba0a719bcdaa.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/wombat/offer/WWZ-GOTY-Edition_EpicGames_PortraitImage_860x1148-860x1148-6ad932230150a3580974ba0a719bcdaa.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/wombat/offer/WWZ-GOTY-Edition_EpicGames_LibraryImage-2560x1440-53e1efdd69ca0ef55fac60fc2d2f8a5b.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/wombat/offer/WWZ-GOTY-Edition_EpicGames_PortraitImage_860x1148-860x1148-6ad932230150a3580974ba0a719bcdaa.jpg",
      },
    ],
    seller: {
      id: "o-2xlz78ngz5ubvus9sff9blglee43uk",
      name: "Saber Interactive",
    },
    productSlug: "world-war-z/goty-edition",
    urlSlug: "world-war-z--goty-edition",
    url: null,
    items: [
      {
        id: "509d62b93e69494b84c07ec7e0b7f6b4",
        namespace: "wombat",
      },
      {
        id: "d7933b221e924059a1a9454488848d15",
        namespace: "wombat",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "{}",
      },
      {
        key: "developerName",
        value: "Saber Interactive",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "world-war-z/goty-edition",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1529,
        originalPrice: 4499,
        voucherDiscount: 0,
        discount: 2970,
        fmtPrice: {
          originalPrice: "$44.99",
          discountPrice: "$15.29",
          intermediatePrice: "$15.29",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "67e7a70798b14c32b0f0e7b8d09f9c3a",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "SnowRunner",
    id: "5014d355b4684d80a095a570219c3443",
    namespace: "2744acda6a2e493e9894b389b6564df7",
    description: "SnowRunner Standard Edition",
    effectiveDate: "2020-04-27T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/2744acda6a2e493e9894b389b6564df7/offer/Diesel_productv2_snowrunner_home_SnowRunner_EpicGames_Desktop-Horizontal-1360x766-1360x766-aec1e67e70958d183bff5513a80106bc1302eaa4-1360x766-c25e9f4a45c51a067598da2374e51ac4-1360x766-c25e9f4a45c51a067598da2374e51ac4.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/2744acda6a2e493e9894b389b6564df7/offer/Diesel_productv2_snowrunner_home_SnowRunner_EpicGames_Desktop-Horizontal-1360x766-1360x766-aec1e67e70958d183bff5513a80106bc1302eaa4-1360x766-c25e9f4a45c51a067598da2374e51ac4-1360x766-c25e9f4a45c51a067598da2374e51ac4.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/2744acda6a2e493e9894b389b6564df7/offer/Diesel_productv2_snowrunner_home_SnowRunner_EpicGames_PortraitImage_860x1148-860x1148-bdf591a23e5a348671dc2a77465d0ba6c5871d68-860x1148-5a5adeae2140a3f0b5586750f70bf8e2-860x1148-5a5adeae2140a3f0b5586750f70bf8e2.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/2744acda6a2e493e9894b389b6564df7/offer/Diesel_productv2_snowrunner_home_SnowRunner_EpicGames_PortraitImage_860x1148-860x1148-bdf591a23e5a348671dc2a77465d0ba6c5871d68-860x1148-5a5adeae2140a3f0b5586750f70bf8e2-860x1148-5a5adeae2140a3f0b5586750f70bf8e2.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/2744acda6a2e493e9894b389b6564df7/offer/Diesel_productv2_snowrunner_home_SnowRunner_EpicGames_PortraitImage_860x1148-860x1148-bdf591a23e5a348671dc2a77465d0ba6c5871d68-860x1148-5a5adeae2140a3f0b5586750f70bf8e2-860x1148-5a5adeae2140a3f0b5586750f70bf8e2.jpg",
      },
    ],
    seller: {
      id: "o-wt4zxeetmq6jem7qp4pkssr46aenj5",
      name: "Focus Home",
    },
    productSlug: "snowrunner/home",
    urlSlug: "mayflowergeneralaudience",
    url: null,
    items: [
      {
        id: "7b23f1e576ff442ab2d2a0e6b8a2dfcd",
        namespace: "2744acda6a2e493e9894b389b6564df7",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "{}",
      },
      {
        key: "publisherName",
        value: "Focus Home Interactive",
      },
      {
        key: "developerName",
        value: "Saber Interactive",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "snowrunner/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 2999,
        originalPrice: 2999,
        voucherDiscount: 0,
        discount: 0,
        fmtPrice: {
          originalPrice: "$29.99",
          discountPrice: "$29.99",
          intermediatePrice: "$29.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [],
        },
      ],
    },
  },
  {
    title: "Rogue Company",
    id: "36bfbc7a0b664a2891c68dc947922469",
    namespace: "933ada2ec45e4184ae840d64c99e0ba9",
    description: "Rogue Company",
    effectiveDate: "2020-09-30T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/RoCo-EGS-Season2MackIllustration-HeroCarouselImage-1920x1080_1920x1080-18bd6c83817997f8853533f8476ec92d",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/RoCo-EGS-Season2MackIllustration-PortraitProductImage-1200x1600_1200x1600-cc4c8a33b91b49737056e259ac350e4b",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/RoCo-EGS-Season2MackIllustration-HeroCarouselImage-1920x1080_1920x1080-18bd6c83817997f8853533f8476ec92d",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/RoCo-EGS-Season2MackIllustration-PortraitProductImage-1200x1600_1200x1600-cc4c8a33b91b49737056e259ac350e4b",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/RoCo-EGS-Season2MackIllustration-PortraitProductImage-1200x1600_1200x1600-cc4c8a33b91b49737056e259ac350e4b",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/salesEvent/salesEvent/RoCo-EGS-Season2MackIllustration-PortraitProductImage-1200x1600_1200x1600-cc4c8a33b91b49737056e259ac350e4b",
      },
    ],
    seller: {
      id: "o-7aklpapnk74p66sqs6hm5byt29wp66",
      name: "Hi-Rez Studios",
    },
    productSlug: "rogue-company/home",
    urlSlug: "rogue-company",
    url: null,
    items: [
      {
        id: "167fe4a0caee4da689193e3e12af241e",
        namespace: "933ada2ec45e4184ae840d64c99e0ba9",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "KR",
      },
      {
        key: "developerName",
        value: "Hi-Rez Studios",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "rogue-company/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 0,
        originalPrice: 0,
        voucherDiscount: 0,
        discount: 0,
        fmtPrice: {
          originalPrice: "0",
          discountPrice: "0",
          intermediatePrice: "0",
        },
      },
      lineOffers: [
        {
          appliedRules: [],
        },
      ],
    },
  },
  {
    title: "Ghostrunner",
    id: "19b650f9a98a45b0bfe07674b51fa7a0",
    namespace: "95d0b9561be1464cb43bd029e94cf526",
    description: "Ghostrunner",
    effectiveDate: "2020-10-27T15:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Epic_Landscape_Offer2560x1440-2560x1440-08987c0c3e1701ea6a7217ed5616922d.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Epic_Landscape_Offer2560x1440-2560x1440-08987c0c3e1701ea6a7217ed5616922d.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg",
      },
    ],
    seller: {
      id: "o-cul2z53mrw3bxltv63v68rgd4b3w52",
      name: "505 Games",
    },
    productSlug: "ghostrunner",
    urlSlug: "ghostrunner",
    url: null,
    items: [
      {
        id: "f36085249f784d919993008b89a9c13b",
        namespace: "95d0b9561be1464cb43bd029e94cf526",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "[]",
      },
      {
        key: "publisherName",
        value: "505 Games",
      },
      {
        key: "developerName",
        value: "One More Level and 3D Realms",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "ghostrunner",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1499,
        originalPrice: 2999,
        voucherDiscount: 0,
        discount: 1500,
        fmtPrice: {
          originalPrice: "$29.99",
          discountPrice: "$14.99",
          intermediatePrice: "$14.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "936174f328ed4df280438c979fbafbc4",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Tom Clancy's Ghost Recon Breakpoint",
    id: "2385d033d11a469fa08cbae090ae97d8",
    namespace: "2dbd2f64abdc4bbab077424d5c85e01b",
    description: "Ghost Recon Breakpoint Standard Edition",
    effectiveDate: "2019-06-01T08:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/2dbd2f64abdc4bbab077424d5c85e01b/offer/BREAKPOINT_STANDARD_BREAKPOINT_STANDARD_EPIC_Store Landscape_2560x1440-2560x1440-1c1a73e5e63d08b2256d66b947467f23.jpg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/2dbd2f64abdc4bbab077424d5c85e01b/offer/BREAKPOINT_STANDARD_BREAKPOINT_STANDARD_EPIC_Store_Portrait_1200x1600_L-1200x1600-bd6073c4c9d1749d1fd6ec15e6090b72.jpg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/2dbd2f64abdc4bbab077424d5c85e01b/offer/BREAKPOINT_STANDARD_BREAKPOINT_STANDARD_EPIC_Store Landscape_2560x1440-2560x1440-1c1a73e5e63d08b2256d66b947467f23.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/2dbd2f64abdc4bbab077424d5c85e01b/offer/BREAKPOINT_STANDARD_BREAKPOINT_STANDARD_EPIC_Store_Portrait_1200x1600_L-1200x1600-bd6073c4c9d1749d1fd6ec15e6090b72.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/2dbd2f64abdc4bbab077424d5c85e01b/offer/BREAKPOINT_STANDARD_BREAKPOINT_STANDARD_EPIC_Store_Portrait_1200x1600_L-1200x1600-bd6073c4c9d1749d1fd6ec15e6090b72.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/2dbd2f64abdc4bbab077424d5c85e01b/offer/BREAKPOINT_STANDARD_BREAKPOINT_STANDARD_EPIC_Store_Portrait_1200x1600_L-1200x1600-bd6073c4c9d1749d1fd6ec15e6090b72.jpg",
      },
    ],
    seller: {
      id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
      name: "Ubisoft Entertainment",
    },
    productSlug: "ghost-recon-breakpoint/home",
    urlSlug: "saffrongeneralaudience",
    url: null,
    items: [
      {
        id: "913d1259a5614a58a114c65dc445ce3d",
        namespace: "2dbd2f64abdc4bbab077424d5c85e01b",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CN",
      },
      {
        key: "developerName",
        value: "Ubisoft",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "ghost-recon-breakpoint/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 899,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 5100,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$8.99",
          intermediatePrice: "$8.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "9f2e0ed0a1414bb9ac89366d4bcec520",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Rainbow Six Siege",
    id: "9f47dad590a44949b1e2eb519adc0ca1",
    namespace: "carnation",
    description: "Rainbow Six Siege Standard Edition Y6",
    effectiveDate: "2019-08-19T00:00:00.000Z",
    keyImages: [
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-landscape-2560x1440-2560x1440-ada4045f97c2-2560x1440-1a29dde6790c324f62bb12216e651944.jpeg",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-portrait-1200x1600-1200x1600-8ecd88137e14-1200x1600-05e68a0aed3dc068b9b4186997b97317.jpeg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-portrait-1200x1600-1200x1600-8ecd88137e14-1200x1600-05e68a0aed3dc068b9b4186997b97317.jpeg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-portrait-1200x1600-1200x1600-8ecd88137e14-1200x1600-05e68a0aed3dc068b9b4186997b97317.jpeg",
      },
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-landscape-2560x1440-2560x1440-ada4045f97c2-2560x1440-1a29dde6790c324f62bb12216e651944.jpeg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-portrait-1200x1600-1200x1600-8ecd88137e14-1200x1600-05e68a0aed3dc068b9b4186997b97317.jpeg",
      },
    ],
    seller: {
      id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
      name: "Ubisoft Entertainment",
    },
    productSlug: "rainbow-six-siege/home",
    urlSlug: "carnationgeneraly5year6audience",
    url: null,
    items: [
      {
        id: "cb8a106c79904e35859a3f4c3043ecd7",
        namespace: "carnation",
      },
      {
        id: "cff0f9b5bc9f4d6d801ca7033f463259",
        namespace: "carnation",
      },
      {
        id: "45ab2992071f471abec46c5b27e12888",
        namespace: "carnation",
      },
      {
        id: "c023c1be61c2404382c815983e4704fb",
        namespace: "carnation",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CN",
      },
      {
        key: "developerName",
        value: "Ubisoft",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "rainbow-six-siege/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 799,
        originalPrice: 1999,
        voucherDiscount: 0,
        discount: 1200,
        fmtPrice: {
          originalPrice: "$19.99",
          discountPrice: "$7.99",
          intermediatePrice: "$7.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "3d5feb535ae3468dbc1156cbd02e77c6",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
  {
    title: "Assassin's Creed Odyssey",
    id: "9e32f311abd24c4aa4c7f9c5dce25e75",
    namespace: "clary",
    description: "Assassin's Creed Odyssey - Standard Edition",
    effectiveDate: "2019-10-22T15:00:00.000Z",
    keyImages: [
      {
        type: "DieselStoreFrontWide",
        url: "https://cdn1.epicgames.com/undefined/offer/ACOD_Landscape-1920x1080-734f63b35bbe770ceffdd0b4f6f5c46d.jpg",
      },
      {
        type: "DieselStoreFrontTall",
        url: "https://cdn1.epicgames.com/undefined/offer/ACOD_Portrait-552x576-64d0966bcf63c374163a5b920f68b253.jpg",
      },
      {
        type: "DieselGameBoxLogo",
        url: "https://cdn1.epicgames.com/undefined/offer/Game_Logo_Color_1000x375-1000x375-4b231fbb71b558fb044cd99ae7973405.png",
      },
      {
        type: "OfferImageTall",
        url: "https://cdn1.epicgames.com/undefined/offer/ACOD_Portrait-552x576-64d0966bcf63c374163a5b920f68b253.jpg",
      },
      {
        type: "CodeRedemption_340x440",
        url: "https://cdn1.epicgames.com/clary/offer/CodeRedemption_ACOD_Standard-330x440-3cf4904609e93b04dfb9e274916fcbb3.jpg",
      },
      {
        type: "Thumbnail",
        url: "https://cdn1.epicgames.com/clary/offer/Boxart_708x1000-708x1000-b6745d16d3a2b4296b33d10c695bb26c.jpg",
      },
      {
        type: "OfferImageWide",
        url: "https://cdn1.epicgames.com/clary/offer/ACOD_Standard_Capsule-1920x1080-a3ae1ed02ce5e7e9d13d8eb4558d07a959ce24ee.jpg",
      },
    ],
    seller: {
      id: "o-3efjudxdtgsqnulml4bkeq3v9nec38",
      name: "Ubisoft Entertainment",
    },
    productSlug: "assassins-creed-odyssey/home",
    urlSlug: "clarygeneralaudience",
    url: null,
    items: [
      {
        id: "442e2e2af1914fcc8b28e1e3b6e03c03",
        namespace: "clary",
      },
    ],
    customAttributes: [
      {
        key: "com.epicgames.app.blacklist",
        value: "CN",
      },
      {
        key: "developerName",
        value: "Ubisoft",
      },
      {
        key: "com.epicgames.app.productSlug",
        value: "assassins-creed-odyssey/home",
      },
    ],
    categories: [
      {
        path: "games",
      },
      {
        path: "games/edition/base",
      },
      {
        path: "games/edition",
      },
      {
        path: "applications",
      },
    ],
    linkedOfferId: null,
    linkedOffer: null,
    price: {
      totalPrice: {
        discountPrice: 1499,
        originalPrice: 5999,
        voucherDiscount: 0,
        discount: 4500,
        fmtPrice: {
          originalPrice: "$59.99",
          discountPrice: "$14.99",
          intermediatePrice: "$14.99",
        },
      },
      lineOffers: [
        {
          appliedRules: [
            {
              id: "f997a1802bcf410bba9e2443bdaf8daf",
              endDate: "2021-06-17T15:00:00.000Z",
            },
          ],
        },
      ],
    },
  },
]
