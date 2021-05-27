import '../styles/globals.css'
import '../styles/tailwind.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router, { useRouter }  from 'next/router'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import firebase from '../firebase/firebaseConfig'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const pathname = router.pathname;
  const GTAG = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TPGMW0EP2J');"
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TPGMW0EP2J"></script>
        <script>
         {GTAG}
        </script>
    </Head>
    {pathname !== '/r/[id]' && <Navbar/>}
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
