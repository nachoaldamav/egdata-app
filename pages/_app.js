import "../styles/globals.css"
import "../styles/tailwind.css"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import Router, { useRouter } from "next/router"
import Head from "next/head"
import { Navbar } from "../components/navbar"
import aa from "search-insights"
import { getPreferences } from "cookie-though"
import { useEffect } from "react"
import TagManager from "react-gtm-module"

// Create userId for Algolia
async function createUserId() {
  if (typeof window !== "undefined") {
    const randomId = "_" + Math.random().toString(36).substr(2, 9)
    localStorage.setItem("ALGOLIA_USER_ID", randomId)
  }
}

// Binding events.
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function MyApp({ Component, pageProps }) {
  // Initialize GTM if consent
  if (typeof window !== "undefined") {
    const cookiePreference = getPreferences()
    if (cookiePreference.cookieOptions[2].isEnabled === true) {
      useEffect(() => {
        TagManager.initialize({ gtmId: "GTM-WNNDHSP" })
      }, [])
    }
  }

  // Check localStorage for Algolia ID
  if (typeof window !== "undefined") {
    if (localStorage.getItem("ALGOLIA_USER_ID") !== undefined) {
      const userToken = localStorage.getItem("ALGOLIA_USER_ID") || "_00000000"
      aa("setUserToken", userToken)
    } else {
      createUserId()
    }
  }

  aa("init", {
    appId: "0X90LHIM7C",
    apiKey: "b1e5b58f2772d9bdaa1fec4c3e5c9507",
  })

  const router = useRouter()
  const pathname = router.pathname

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Epic Games Data</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#2A2A2A" />
      </Head>
      {pathname !== "/r/[id]" && <Navbar />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
