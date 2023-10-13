import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext';
import NProgress from "nprogress"
import Head from "next/head"
import Router from "next/router"
import Script from 'next/script';

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {

  return (
          <AuthProvider>
                <Script src="//code.tidio.co/qmukhordfq8gyusczggkrbiieyzfpub1.js" async></Script>
              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <Component {...pageProps} />
          </AuthProvider>
        )
}

export default MyApp