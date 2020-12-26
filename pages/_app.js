import '../styles/globals.css'
import '../styles/tailwind.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router  from 'next/router'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps} />
  )
}

export default MyApp
